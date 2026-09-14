"""
Checks GitHub for newer i-machine-things/FreeCAD fork releases. On Windows,
downloads the installer in the background, verifies it against the
published SHA256 checksum, then prompts the user to restart and install.
On other platforms (Linux ships as a Flatpak, which updates through its own
mechanism) it falls back to opening the release page. Runs once per 24 h
maximum.
"""

import hashlib
import platform
import re
import subprocess
import tempfile
import threading
import time
import urllib.request
import urllib.error
import json
from pathlib import Path

import FreeCAD
from PySide.QtCore import QObject, Signal

_REPO = "i-machine-things/FreeCAD"
_API_URL = f"https://api.github.com/repos/{_REPO}/releases"
_TAG_RE = re.compile(r"^v(\d+\.\d+\.\d+)-i-machine-things\.(\d+)$")
_CHECK_INTERVAL = 86400  # 24 h in seconds
_DOWNLOAD_TIMEOUT = 120  # seconds — installer is tens of MB
_PREFS_PATH = "User parameter:BaseApp/Preferences/Mod/ForkUpdater"
_FORK_VERSION_FILE = Path(__file__).resolve().parent / "fork_version.json"


def _prefs():
    return FreeCAD.ParamGet(_PREFS_PATH)


def _current_version():
    """Return (major, minor, patch) ints for the running FreeCAD build."""
    v = FreeCAD.Version()
    try:
        return tuple(int(x) for x in v[:3])
    except (ValueError, IndexError):
        return (0, 0, 0)


def _current_fork_build():
    """Return this build's own fork patch number, written at package time.

    Falls back to 0 for source checkouts never packaged by
    fork_parity_release.yml (e.g. running straight from a dev tree).
    """
    try:
        with open(_FORK_VERSION_FILE, encoding="utf-8") as f:
            return int(json.load(f)["fork_build"])
    except (OSError, ValueError, KeyError, TypeError):
        return 0


def _parse_fork_tag(tag):
    """Return ((major, minor, patch), fork_n) or None if tag doesn't match."""
    m = _TAG_RE.match(tag)
    if not m:
        return None
    parts = tuple(int(x) for x in m.group(1).split("."))
    return parts, int(m.group(2))


def _fetch_latest_fork_release():
    """Return (tag_name, html_url, assets) for the newest fork release, or (None, None, None)."""
    req = urllib.request.Request(
        _API_URL,
        headers={"Accept": "application/vnd.github+json",
                 "User-Agent": "FreeCAD-ForkUpdater/1.0"},
    )
    with urllib.request.urlopen(req, timeout=8) as resp:
        releases = json.loads(resp.read())

    best_version = None
    best_fork_n = -1
    best_tag = None
    best_url = None
    best_assets = None

    for release in releases:
        parsed = _parse_fork_tag(release.get("tag_name", ""))
        if parsed is None:
            continue
        version, fork_n = parsed
        if (version, fork_n) > (best_version or (0, 0, 0), best_fork_n):
            best_version = version
            best_fork_n = fork_n
            best_tag = release["tag_name"]
            best_url = release["html_url"]
            best_assets = release.get("assets", [])

    return best_tag, best_url, best_assets


def _find_asset_url(assets, name_suffix):
    """Return the browser_download_url of the first asset whose name ends
    with name_suffix, or None if there's no match."""
    for asset in assets or []:
        if asset.get("name", "").endswith(name_suffix):
            return asset["browser_download_url"]
    return None


def _download(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": "FreeCAD-ForkUpdater/1.0"})
    with urllib.request.urlopen(req, timeout=_DOWNLOAD_TIMEOUT) as resp, open(dest, "wb") as f:
        while True:
            chunk = resp.read(1024 * 1024)
            if not chunk:
                break
            f.write(chunk)


def _sha256_of(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def _download_verified_installer(assets, tag):
    """Download the Windows installer and its published SHA256 sidecar, and
    verify they match before returning a path FreeCAD will ever execute.

    Returns the installer's Path, or None if the assets are missing or the
    download/verification fails — callers fall back to just linking the
    release page in that case.
    """
    installer_url = _find_asset_url(assets, "-installer.exe")
    sha_url = _find_asset_url(assets, "-installer.exe-SHA256.txt")
    if not installer_url or not sha_url:
        return None

    tmp_dir = Path(tempfile.mkdtemp(prefix="FreeCADForkUpdate_"))
    installer_path = tmp_dir / installer_url.rsplit("/", 1)[-1]
    sha_path = tmp_dir / "SHA256.txt"

    try:
        _download(sha_url, sha_path)
        expected = sha_path.read_text(encoding="utf-8").split()[0].lower()

        _download(installer_url, installer_path)
        actual = _sha256_of(installer_path)

        if actual != expected:
            FreeCAD.Console.PrintWarning(
                f"ForkUpdater: installer checksum mismatch for {tag} "
                f"(expected {expected}, got {actual}) — discarding download.\n"
            )
            installer_path.unlink(missing_ok=True)
            return None

        return installer_path
    except Exception as e:
        FreeCAD.Console.PrintWarning(f"ForkUpdater: installer download failed: {e}\n")
        return None


def _show_dialog(tag, url):
    """Must be called on the main/GUI thread."""
    try:
        from PySide.QtWidgets import QMessageBox
        from PySide.QtGui import QDesktopServices
        from PySide.QtCore import QUrl
        import FreeCADGui

        mw = FreeCADGui.getMainWindow()
        box = QMessageBox(mw)
        box.setWindowTitle("FreeCAD Fork Update Available")
        box.setText(
            f"<b>A newer fork build is available:</b> {tag}<br><br>"
            "This is the i-machine-things fork of FreeCAD with DXF export improvements."
        )
        box.setIcon(QMessageBox.Information)

        dl_btn   = box.addButton("Download",         QMessageBox.AcceptRole)
        _        = box.addButton("Later",             QMessageBox.RejectRole)
        skip_btn = box.addButton("Skip this version", QMessageBox.DestructiveRole)

        box.exec_()
        clicked = box.clickedButton()

        if clicked is dl_btn:
            QDesktopServices.openUrl(QUrl(url))
        elif clicked is skip_btn:
            _prefs().SetString("SkippedVersion", tag)
    except Exception as e:
        FreeCAD.Console.PrintWarning(f"ForkUpdater: could not show dialog: {e}\n")


def _launch_installer_and_quit(installer_path):
    """Must be called on the main/GUI thread, after the user confirms.

    Closing the main window runs FreeCAD's normal closeEvent (prompting to
    save any unsaved documents). If that's cancelled, mw.close() returns
    False and we must not launch the installer — FreeCAD would still be
    running and holding its own files locked, which breaks the install.
    """
    import FreeCADGui

    mw = FreeCADGui.getMainWindow()
    if not mw.close():
        FreeCAD.Console.PrintMessage(
            "ForkUpdater: install postponed — FreeCAD close was cancelled.\n"
        )
        return

    subprocess.Popen(
        [str(installer_path)],
        creationflags=subprocess.DETACHED_PROCESS | subprocess.CREATE_NEW_PROCESS_GROUP,
        close_fds=True,
    )


def _show_install_ready_dialog(tag, installer_path):
    """Must be called on the main/GUI thread."""
    try:
        from PySide.QtWidgets import QMessageBox
        import FreeCADGui

        mw = FreeCADGui.getMainWindow()
        box = QMessageBox(mw)
        box.setWindowTitle("FreeCAD Fork Update Ready")
        box.setText(
            f"<b>A newer fork build has been downloaded and verified:</b> {tag}<br><br>"
            "FreeCAD needs to close to install it. Any unsaved documents will "
            "prompt you to save first."
        )
        box.setIcon(QMessageBox.Information)

        install_btn = box.addButton("Restart && Install", QMessageBox.AcceptRole)
        _ = box.addButton("Later", QMessageBox.RejectRole)
        skip_btn = box.addButton("Skip this version", QMessageBox.DestructiveRole)

        box.exec_()
        clicked = box.clickedButton()

        if clicked is install_btn:
            _launch_installer_and_quit(installer_path)
        elif clicked is skip_btn:
            _prefs().SetString("SkippedVersion", tag)
    except Exception as e:
        FreeCAD.Console.PrintWarning(f"ForkUpdater: could not show dialog: {e}\n")


class _UpdateSignal(QObject):
    """Marshals the "update found" event from the background check thread onto
    the main/GUI thread. QTimer.singleShot() called directly from a worker
    thread has no event loop to fire on and silently never runs — a Qt
    signal emitted cross-thread is queued onto the receiver's own thread
    (the main thread here, since _signal is created during the main-thread
    import in _run_check) and is the correct way to do this.
    """

    found = Signal(str, str, str)  # tag, url, installer_path ("" if none downloaded)


def _on_found(tag, url, installer_path):
    if installer_path:
        _show_install_ready_dialog(tag, installer_path)
    else:
        _show_dialog(tag, url)


_signal = _UpdateSignal()
_signal.found.connect(_on_found)


def _check_worker():
    """Runs in a background thread — fetches GitHub, downloads and verifies
    the installer on Windows, then fires a dialog on the main thread if needed."""
    prefs = _prefs()
    try:
        tag, url, assets = _fetch_latest_fork_release()
    except Exception as e:
        FreeCAD.Console.PrintLog(f"ForkUpdater: network check failed: {e}\n")
        return
    finally:
        prefs.SetInt("LastCheckTime", int(time.time()))

    if not tag:
        return

    if tag == prefs.GetString("SkippedVersion", ""):
        return

    parsed = _parse_fork_tag(tag)
    if parsed is None:
        return
    latest_version, latest_fork_n = parsed
    current = _current_version()
    current_fork_n = _current_fork_build()

    if (latest_version, latest_fork_n) <= (current, current_fork_n):
        return

    installer_path = ""
    if platform.system() == "Windows":
        downloaded = _download_verified_installer(assets, tag)
        if downloaded is not None:
            installer_path = str(downloaded)

    # Cross-thread emit — Qt queues this onto the main thread automatically.
    _signal.found.emit(tag, url, installer_path)


def check():
    """Entry point called from InitGui.py. Throttles to once per 24 h."""
    prefs = _prefs()
    last = prefs.GetInt("LastCheckTime", 0)
    if time.time() - last < _CHECK_INTERVAL:
        return

    t = threading.Thread(target=_check_worker, daemon=True, name="ForkUpdater")
    t.start()
