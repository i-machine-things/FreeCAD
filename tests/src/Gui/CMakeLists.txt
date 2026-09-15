# SPDX-License-Identifier: LGPL-2.1-or-later

add_subdirectory(Dialogs)
<<<<<<< HEAD
add_subdirectory(propertyeditor)
=======
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794

# Standard C++ GTest tests
add_executable(Gui_tests_run
        Assistant.cpp
        Camera.cpp
        ColorScaleOverlayTest.cpp
        FileDialog.cpp
        StyleParameters/StyleParametersApplicationTest.cpp
        StyleParameters/ParserTest.cpp
        StyleParameters/ParameterManagerTest.cpp
        StyleParameters/YamlParameterSourceTest.cpp
        InputHintTest.cpp
        SelectionTest.cpp
)

# Qt tests
setup_qt_test(QuantitySpinBox)

target_link_libraries(Gui_tests_run PRIVATE
    GTest::gmock_main
    FreeCADApp
    FreeCADGui
)
