# SPDX-License-Identifier: MIT
#
# Vendored FreeCAD workbench: the "upstream" subdirectory is a git submodule
# pulled from https://github.com/APEbbers/SaveAndRestore. This wiring file
# lives here, one level up, rather than inside the submodule, so it is
# tracked by this fork instead of being stranded as untracked content in
# someone else's repository.

file(GLOB_RECURSE SaveAndRestore_SRCS RELATIVE "${CMAKE_CURRENT_SOURCE_DIR}/upstream" "upstream/*")
list(FILTER SaveAndRestore_SRCS EXCLUDE REGEX "(^|/)\\.git$|(^|/)\\.github/|__pycache__|\\.pyc$|\\.pre-commit")

ADD_CUSTOM_TARGET(SaveAndRestore ALL
    COMMAND "${CMAKE_COMMAND}" -E copy_directory
            "${CMAKE_CURRENT_SOURCE_DIR}/upstream"
            "${CMAKE_BINARY_DIR}/Mod/SaveAndRestore"
    COMMENT "Copying SaveAndRestore add-on into the build tree"
    SOURCES ${SaveAndRestore_SRCS}
)

INSTALL(
    DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}/upstream/"
    DESTINATION "Mod/SaveAndRestore"
    PATTERN ".git" EXCLUDE
    PATTERN ".github" EXCLUDE
    PATTERN "__pycache__" EXCLUDE
    PATTERN "*.pyc" EXCLUDE
    PATTERN ".pre-commit*" EXCLUDE
)
