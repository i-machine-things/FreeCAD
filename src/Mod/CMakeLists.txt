if(BUILD_ADDONMGR)
  if( NOT EXISTS "${CMAKE_SOURCE_DIR}/src/Mod/AddonManager/CMakeLists.txt" )
    message(FATAL_ERROR "The Addon Manager has been moved into a git submodule. Please run
    git submodule update --init" )
  endif()
  add_subdirectory(AddonManager)
endif(BUILD_ADDONMGR)

if(BUILD_BIM)
  add_subdirectory(BIM)
endif(BUILD_BIM)

if(BUILD_ASSEMBLY)
  add_subdirectory(Assembly)
endif(BUILD_ASSEMBLY)

if(BUILD_DRAFT)
  add_subdirectory(Draft)
endif(BUILD_DRAFT)

if(BUILD_FEM)
    add_subdirectory(Fem)
endif(BUILD_FEM)

if(BUILD_HELP)
  add_subdirectory(Help)
endif(BUILD_HELP)

if(BUILD_IMPORT)
  add_subdirectory(Import)
endif(BUILD_IMPORT)

if(BUILD_INSPECTION)
  add_subdirectory(Inspection)
endif(BUILD_INSPECTION)

if(BUILD_JTREADER)
  add_subdirectory(JtReader)
endif(BUILD_JTREADER)

if(BUILD_MATERIAL)
  add_subdirectory(Material)
endif(BUILD_MATERIAL)

if(BUILD_MESH)
  add_subdirectory(Mesh)
endif(BUILD_MESH)

if(BUILD_MESH_PART)
  add_subdirectory(MeshPart)
endif(BUILD_MESH_PART)

if(BUILD_OPENSCAD)
  add_subdirectory(OpenSCAD)
endif(BUILD_OPENSCAD)

if(BUILD_PART)
  add_subdirectory(Part)
endif(BUILD_PART)

if(BUILD_PART_DESIGN)
  add_subdirectory(PartDesign)
endif(BUILD_PART_DESIGN)

if(BUILD_CAM)
    add_subdirectory(CAM)
endif(BUILD_CAM)

if(BUILD_PLOT)
  add_subdirectory(Plot)
endif(BUILD_PLOT)

if(BUILD_POINTS)
  add_subdirectory(Points)
endif(BUILD_POINTS)

if(BUILD_REVERSEENGINEERING)
  add_subdirectory(ReverseEngineering)
endif(BUILD_REVERSEENGINEERING)

if(BUILD_ROBOT)
    if(EIGEN3_FOUND)
      add_subdirectory(Robot)
    else(EIGEN3_FOUND)
      MESSAGE("Due to the missing Eigen3 library the Robot module won't be built")
    endif(EIGEN3_FOUND)
endif(BUILD_ROBOT)

if(BUILD_SHOW)
    add_subdirectory(Show)
endif(BUILD_SHOW)

if(BUILD_SKETCHER)
    if(EIGEN3_FOUND)
      add_subdirectory(Sketcher)
    else(EIGEN3_FOUND)
      MESSAGE("Due to the missing Eigen3 library the Sketcher module won't be built")
    endif(EIGEN3_FOUND)
endif(BUILD_SKETCHER)

if(BUILD_SPREADSHEET)
  add_subdirectory(Spreadsheet)
endif(BUILD_SPREADSHEET)

if(BUILD_START)
    add_subdirectory(Start)
endif(BUILD_START)

if(BUILD_SURFACE)
  add_subdirectory(Surface)
endif(BUILD_SURFACE)

if(BUILD_MEASURE)
    add_subdirectory(Measure)
endif(BUILD_MEASURE)

if(BUILD_TECHDRAW)
    add_subdirectory(TechDraw)
endif(BUILD_TECHDRAW)

#add_subdirectory(TemplatePyMod)

# Fork-only update notifier — always built, not gated behind a BUILD_ option
add_subdirectory(ForkUpdater)

# Fork-only preinstalled add-ons, vendored as git submodules — always built,
# not gated behind BUILD_ options. Run `git submodule update --init` after
# cloning if any of these are missing their submodule content.
#
# Curves, fasteners, FreeCAD-Ribbon, freecad.gears and SaveAndRestore don't
# ship their own CMakeLists.txt, so each is vendored as a submodule nested
# one level down in an "upstream" subdirectory, with a fork-tracked
# CMakeLists.txt sitting alongside it (kept out of the submodule itself so
# it isn't stranded as untracked content in someone else's repository).
foreach(_addon Curves fasteners FreeCAD-Ribbon freecad.gears SaveAndRestore)
  if(NOT EXISTS "${CMAKE_SOURCE_DIR}/src/Mod/${_addon}/upstream/.git")
    message(FATAL_ERROR "Mod/${_addon}/upstream is a git submodule that hasn't been checked out. Please run
    git submodule update --init")
  endif()
  add_subdirectory(${_addon})
endforeach()

# SearchBar ships its own CMakeLists.txt upstream, so it's vendored directly
# (same pattern as AddonManager above) rather than needing the wrapper the
# other add-ons above use.
if(NOT EXISTS "${CMAKE_SOURCE_DIR}/src/Mod/SearchBar/CMakeLists.txt")
  message(FATAL_ERROR "Mod/SearchBar is a git submodule that hasn't been checked out. Please run
  git submodule update --init")
endif()
add_subdirectory(SearchBar)

if(BUILD_TEST)
  add_subdirectory(Test)
endif(BUILD_TEST)

if(BUILD_TUX)
    add_subdirectory(Tux)
endif(BUILD_TUX)

if(BUILD_WEB)
    add_subdirectory(Web)
endif(BUILD_WEB)
