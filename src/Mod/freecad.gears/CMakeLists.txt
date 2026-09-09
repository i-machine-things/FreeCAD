# SPDX-License-Identifier: GPL-3.0-or-later
#
# Vendored FreeCAD workbench: the "upstream" subdirectory is a git submodule
# pulled from https://github.com/looooo/freecad.gears. This wiring file
# lives here, one level up, rather than inside the submodule, so it is
# tracked by this fork instead of being stranded as untracked content in
# someone else's repository. Runtime dependencies (numpy, scipy, sympy) are
# provided by the pixi environment. Dev-only content (tests, examples,
# packaging scripts) is excluded from the installed tree.

file(GLOB_RECURSE freecad_gears_SRCS RELATIVE "${CMAKE_CURRENT_SOURCE_DIR}/upstream" "upstream/*")
list(FILTER freecad_gears_SRCS EXCLUDE REGEX "(^|/)\\.git$|(^|/)\\.github/|__pycache__|\\.pyc$|^tests/|^examples/|^scripts/|^docs/|pixi\\.(toml|lock)$")

ADD_CUSTOM_TARGET(freecad.gears ALL
    COMMAND "${CMAKE_COMMAND}" -E copy_directory
            "${CMAKE_CURRENT_SOURCE_DIR}/upstream"
            "${CMAKE_BINARY_DIR}/Mod/freecad.gears"
    COMMENT "Copying freecad.gears add-on into the build tree"
    SOURCES ${freecad_gears_SRCS}
)

INSTALL(
    DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}/upstream/"
    DESTINATION "Mod/freecad.gears"
    PATTERN ".git" EXCLUDE
    PATTERN ".github" EXCLUDE
    PATTERN "__pycache__" EXCLUDE
    PATTERN "*.pyc" EXCLUDE
    PATTERN "tests" EXCLUDE
    PATTERN "examples" EXCLUDE
    PATTERN "scripts" EXCLUDE
    PATTERN "docs" EXCLUDE
    PATTERN "pixi.toml" EXCLUDE
    PATTERN "pixi.lock" EXCLUDE
)
