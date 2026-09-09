# SPDX-License-Identifier: LGPL-2.1-or-later
#
# Vendored FreeCAD workbench: the "upstream" subdirectory is a git submodule
# pulled from https://github.com/tomate44/CurvesWB. This wiring file lives
# here, one level up, rather than inside the submodule, so it is tracked by
# this fork instead of being stranded as untracked content in someone else's
# repository. Runtime dependencies (numpy, scipy) are provided by the pixi
# environment.

file(GLOB_RECURSE Curves_SRCS RELATIVE "${CMAKE_CURRENT_SOURCE_DIR}/upstream" "upstream/*")
list(FILTER Curves_SRCS EXCLUDE REGEX "(^|/)\\.git$|(^|/)\\.github/|__pycache__|\\.pyc$")

ADD_CUSTOM_TARGET(Curves ALL
    COMMAND "${CMAKE_COMMAND}" -E copy_directory
            "${CMAKE_CURRENT_SOURCE_DIR}/upstream"
            "${CMAKE_BINARY_DIR}/Mod/Curves"
    COMMENT "Copying Curves add-on into the build tree"
    SOURCES ${Curves_SRCS}
)

INSTALL(
    DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}/upstream/"
    DESTINATION "Mod/Curves"
    PATTERN ".git" EXCLUDE
    PATTERN ".github" EXCLUDE
    PATTERN "__pycache__" EXCLUDE
    PATTERN "*.pyc" EXCLUDE
)
