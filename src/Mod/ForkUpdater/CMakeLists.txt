# SPDX-License-Identifier: LGPL-2.1-or-later

SET(ForkUpdater_SRCS
    __init__.py
    InitGui.py
    update_check.py
)
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
