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

import os
import threading

import FreeCAD

_PREFS_PATH = "User parameter:BaseApp/Preferences/Mod/PreinstalledAddons"

# (folder name expected under the user's Mod directory, upstream git URL)
_ADDONS = [
    ("Curves", "https://github.com/tomate44/CurvesWB.git"),
    ("fasteners", "https://github.com/shaise/FreeCAD_FastenersWB.git"),
    ("FreeCAD-Ribbon", "https://github.com/APEbbers/FreeCAD-Ribbon.git"),
    ("freecad.gears", "https://github.com/looooo/freecad.gears.git"),
    ("SaveAndRestore", "https://github.com/APEbbers/SaveAndRestore.git"),
    ("SearchBar", "https://github.com/APEbbers/SearchBar.git"),
]


def _prefs():
    return FreeCAD.ParamGet(_PREFS_PATH)


def _missing_addons():
    from addonmanager_freecad_interface import DataPaths

    mod_dir = DataPaths().mod_dir
    return [(name, url) for name, url in _ADDONS if not os.path.isdir(os.path.join(mod_dir, name))]


def _install_worker(missing):
    from Addon import Addon
    from addonmanager_installer import AddonInstaller

    installed, failed = [], []
    for name, url in missing:
        FreeCAD.Console.PrintMessage(f"PreinstalledAddons: installing {name}...\n")
        try:
            if AddonInstaller(Addon(name=name, url=url)).run():
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
