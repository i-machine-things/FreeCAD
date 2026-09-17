# SPDX-License-Identifier: LGPL-2.1-or-later
#
# this script is meant to be called by nsis installer scripts, it gets version information
# from freecad and writes version.nsh file in the directory the script is located at
import FreeCAD
import datetime
import json
import os

filepath=os.path.join(os.path.dirname(os.path.abspath(__file__)),"version.nsh")
v=FreeCAD.Version()

# fork_version.json only exists on i-machine-things fork builds (written by
# fork_parity_release.yml, installed via src/Mod/ForkUpdater/CMakeLists.txt);
# a normal upstream build has no such file, so this stays empty for those.
# Rendered as its own red-colored label on the welcome page (see gui.nsh's
# WelcomeShowForkLabel), not appended inline to TEXT_WELCOME, so no leading
# space/punctuation is needed here.
fork_suffix = ""
fork_version_path = os.path.join(FreeCAD.getHomePath(), "Mod", "ForkUpdater", "fork_version.json")
if os.path.exists(fork_version_path):
    try:
        with open(fork_version_path, encoding="utf-8") as f:
            fork_suffix = f"i-machine-things fork, build {json.load(f)['fork_build']}"
    except (OSError, ValueError, KeyError, TypeError):
        fork_suffix = ""

content=f'''\
!define COPYRIGHT_YEAR {datetime.date.today().year}
!define APP_VERSION_MAJOR "{v[0]}"
!define APP_VERSION_MINOR "{v[1]}"
!define APP_VERSION_PATCH "{v[2]}"
!define APP_VERSION_REVISION "{v[3].split()[0]}"
!define APP_NAME "{FreeCAD.ConfigGet('ExeName')}"
!define APP_FORK_SUFFIX "{fork_suffix}"
'''

with open(filepath, "w", encoding="utf-8") as file:
    file.writelines(content)
