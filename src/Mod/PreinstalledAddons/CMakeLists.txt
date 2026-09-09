# SPDX-License-Identifier: LGPL-2.1-or-later

SET(PreinstalledAddons_SRCS
    __init__.py
    InitGui.py
    install_addons.py
)
SOURCE_GROUP("" FILES ${PreinstalledAddons_SRCS})

ADD_CUSTOM_TARGET(PreinstalledAddons ALL
    SOURCES ${PreinstalledAddons_SRCS}
)

fc_copy_sources(PreinstalledAddons "${CMAKE_BINARY_DIR}/Mod/PreinstalledAddons" ${PreinstalledAddons_SRCS})

INSTALL(
    FILES
        ${PreinstalledAddons_SRCS}
    DESTINATION
        Mod/PreinstalledAddons
)
