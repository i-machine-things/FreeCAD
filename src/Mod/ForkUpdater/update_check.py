"""
Checks GitHub for newer i-machine-things/FreeCAD fork releases and prompts
the user to download if one is found. Runs once per 24 h maximum.
"""

import re
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
    """Return (tag_name, html_url) for the newest fork release, or (None, None)."""
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

    return best_tag, best_url


def _show_dialog(tag, url):
    """Must be called on the main/GUI thread."""
    try:
        from PySide.QtWidgets import QMessageBox, QPushButton
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


class _UpdateSignal(QObject):
    """Marshals the "update found" event from the background check thread onto
    the main/GUI thread. QTimer.singleShot() called directly from a worker
    thread has no event loop to fire on and silently never runs — a Qt
    signal emitted cross-thread is queued onto the receiver's own thread
    (the main thread here, since _signal is created during the main-thread
    import in _run_check) and is the correct way to do this.
    """

    found = Signal(str, str)  # tag, url


_signal = _UpdateSignal()
_signal.found.connect(lambda tag, url: _show_dialog(tag, url))


def _check_worker():
    """Runs in a background thread — fetches GitHub, then fires dialog on main thread if needed."""
    prefs = _prefs()
    try:
        tag, url = _fetch_latest_fork_release()
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

    # Cross-thread emit — Qt queues this onto the main thread automatically.
    _signal.found.emit(tag, url)


def check():
    """Entry point called from InitGui.py. Throttles to once per 24 h."""
    prefs = _prefs()
    last = prefs.GetInt("LastCheckTime", 0)
    if time.time() - last < _CHECK_INTERVAL:
        return

    t = threading.Thread(target=_check_worker, daemon=True, name="ForkUpdater")
    t.start()
