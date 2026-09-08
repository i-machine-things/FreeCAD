# SPDX-License-Identifier: LGPL-2.1-or-later

fc_copy_to_mod_path("ForkUpdater"
    __init__.py
    InitGui.py
    update_check.py
)

INSTALL(
    FILES
        __init__.py
        InitGui.py
        update_check.py
    DESTINATION
        Mod/ForkUpdater
)
