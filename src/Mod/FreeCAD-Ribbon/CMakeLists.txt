# SPDX-License-Identifier: GPL-3.0-or-later
#
# Vendored FreeCAD workbench: the "upstream" subdirectory is a git submodule
# pulled from https://github.com/APEbbers/FreeCAD-Ribbon. This wiring file
# lives here, one level up, rather than inside the submodule, so it is
# tracked by this fork instead of being stranded as untracked content in
# someone else's repository. Optional integrations (SearchBar,
# SaveAndRestore) are vendored as sibling Mod/ add-ons. The optional
# gitpython dependency is provided by the pixi environment.

file(GLOB_RECURSE FreeCADRibbon_SRCS RELATIVE "${CMAKE_CURRENT_SOURCE_DIR}/upstream" "upstream/*")
list(FILTER FreeCADRibbon_SRCS EXCLUDE REGEX "(^|/)\\.git$|(^|/)\\.github/|__pycache__|\\.pyc$|\\.pre-commit")

ADD_CUSTOM_TARGET(FreeCAD-Ribbon ALL
    COMMAND "${CMAKE_COMMAND}" -E copy_directory
            "${CMAKE_CURRENT_SOURCE_DIR}/upstream"
            "${CMAKE_BINARY_DIR}/Mod/FreeCAD-Ribbon"
    COMMENT "Copying FreeCAD-Ribbon add-on into the build tree"
    SOURCES ${FreeCADRibbon_SRCS}
)

INSTALL(
    DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}/upstream/"
    DESTINATION "Mod/FreeCAD-Ribbon"
    PATTERN ".git" EXCLUDE
    PATTERN ".github" EXCLUDE
    PATTERN "__pycache__" EXCLUDE
    PATTERN "*.pyc" EXCLUDE
    PATTERN ".pre-commit*" EXCLUDE
)
