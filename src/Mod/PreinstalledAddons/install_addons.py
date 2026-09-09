"""
Installs a curated set of third-party workbenches through the Addon
Manager's own installer, the first time this fork is run with any of them
missing. This drives the same AddonInstaller class (documented by the
AddonManager itself as "a stable API, safe for external code to call and
to rely upon") that a manual Addon Manager install uses, so the result —
files, location, workbench enablement — is indistinguishable from having
installed them by hand. Nothing from these add-ons is bundled into this
repository: they land in the user's own Mod folder at runtime, exactly
like any other Addon Manager install, which sidesteps mixing their
licenses (GPL-3.0 for FreeCAD-Ribbon and freecad.gears) into FreeCAD's own
LGPL-2.1 source tree.
"""

import threading

import FreeCAD

_PREFS_PATH = "User parameter:BaseApp/Preferences/Mod/PreinstalledAddons"

# (folder name expected under the user's Mod directory, upstream git URL,
# upstream default branch). AddonInstaller checks out/expects this branch
# explicitly on both the git and zip install paths — leaving it blank
# breaks both (an empty git checkout target, and a "<name>-" zip
# subdirectory that never matches what actually gets extracted).
_ADDONS = [
    ("Curves", "https://github.com/tomate44/CurvesWB.git", "main"),
    ("fasteners", "https://github.com/shaise/FreeCAD_FastenersWB.git", "master"),
    ("FreeCAD-Ribbon", "https://github.com/APEbbers/FreeCAD-Ribbon.git", "main"),
    ("freecad.gears", "https://github.com/looooo/freecad.gears.git", "master"),
    ("SaveAndRestore", "https://github.com/APEbbers/SaveAndRestore.git", "main"),
    ("SearchBar", "https://github.com/APEbbers/SearchBar.git", "main"),
]


def _prefs():
    """Return this module's preference group."""
    return FreeCAD.ParamGet(_PREFS_PATH)


def _missing_addons():
    """Return (name, url, branch) triples for add-ons not yet successfully installed.

    Checks AddonManager's own InstallationManifest rather than just directory
    existence — a failed git checkout or zip extraction can still leave a
    partially-populated directory behind, which would otherwise be mistaken
    for a completed install and never retried.
    """
    from addonmanager_installation_manifest import InstallationManifest

    manifest = InstallationManifest()
    return [(name, url, branch) for name, url, branch in _ADDONS if not manifest.contains(name)]


def _install_worker(missing):
    """Install each given (name, url, branch) add-on; report results to the console."""
    from Addon import Addon
    from addonmanager_installer import AddonInstaller

    installed, failed = [], []
    for name, url, branch in missing:
        FreeCAD.Console.PrintMessage(f"PreinstalledAddons: installing {name}...\n")
        try:
            if AddonInstaller(Addon(name=name, url=url, branch=branch)).run():
                installed.append(name)
            else:
                failed.append(name)
        except Exception as e:
            FreeCAD.Console.PrintWarning(f"PreinstalledAddons: failed to install {name}: {e}\n")
            failed.append(name)

    if installed:
        FreeCAD.Console.PrintMessage(
            "PreinstalledAddons: installed " + ", ".join(installed)
            + ". Restart FreeCAD to use them.\n"
        )
    if failed:
        FreeCAD.Console.PrintWarning(
            "PreinstalledAddons: could not install " + ", ".join(failed)
            + " (see messages above). Will retry on next launch.\n"
        )
    else:
        _prefs().SetBool("InitialSeedComplete", True)


def check():
    """Entry point called from InitGui.py. Installs whichever of the curated
    add-ons aren't already present, in a background thread so startup isn't
    blocked on network/git operations. Runs at most once successfully; if
    any add-on fails to install, the whole check is retried on next launch
    (individual already-installed add-ons are skipped either way)."""
    if _prefs().GetBool("InitialSeedComplete", False):
        return
    try:
        missing = _missing_addons()
    except Exception as e:
        FreeCAD.Console.PrintWarning(f"PreinstalledAddons: startup check failed: {e}\n")
        return
    if not missing:
        _prefs().SetBool("InitialSeedComplete", True)
        return
    threading.Thread(
        target=_install_worker, args=(missing,), daemon=True, name="PreinstalledAddons"
    ).start()
