# SPDX-License-Identifier: GPL-2.0-or-later
#
# Vendored FreeCAD workbench: the "upstream" subdirectory is a git submodule
# pulled from https://github.com/shaise/FreeCAD_FastenersWB. This wiring
# file lives here, one level up, rather than inside the submodule, so it is
# tracked by this fork instead of being stranded as untracked content in
# someone else's repository.

file(GLOB_RECURSE fasteners_SRCS RELATIVE "${CMAKE_CURRENT_SOURCE_DIR}/upstream" "upstream/*")
list(FILTER fasteners_SRCS EXCLUDE REGEX "(^|/)\\.git$|(^|/)\\.github/|__pycache__|\\.pyc$")

ADD_CUSTOM_TARGET(fasteners ALL
    COMMAND "${CMAKE_COMMAND}" -E copy_directory
            "${CMAKE_CURRENT_SOURCE_DIR}/upstream"
            "${CMAKE_BINARY_DIR}/Mod/fasteners"
    COMMENT "Copying fasteners add-on into the build tree"
    SOURCES ${fasteners_SRCS}
)

INSTALL(
    DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}/upstream/"
    DESTINATION "Mod/fasteners"
    PATTERN ".git" EXCLUDE
    PATTERN ".github" EXCLUDE
    PATTERN "__pycache__" EXCLUDE
    PATTERN "*.pyc" EXCLUDE
)
