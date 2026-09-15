# SPDX-License-Identifier: LGPL-2.1-or-later

SET(ForkUpdater_SRCS
    __init__.py
    InitGui.py
    update_check.py
)

# fork_version.json only exists when fork_parity_release.yml has overlaid it
# onto this directory before configuring (see that workflow's "Record this
# build's own fork patch number" step) — a normal checkout never has it, so
# it must stay conditional or every non-release configure would fail trying
# to install a file that doesn't exist.
if(EXISTS "${CMAKE_CURRENT_SOURCE_DIR}/fork_version.json")
    list(APPEND ForkUpdater_SRCS fork_version.json)
endif()

SOURCE_GROUP("" FILES ${ForkUpdater_SRCS})

ADD_CUSTOM_TARGET(ForkUpdater ALL
    SOURCES ${ForkUpdater_SRCS}
)

fc_copy_sources(ForkUpdater "${CMAKE_BINARY_DIR}/Mod/ForkUpdater" ${ForkUpdater_SRCS})

INSTALL(
    FILES
        ${ForkUpdater_SRCS}
    DESTINATION
        Mod/ForkUpdater
)
