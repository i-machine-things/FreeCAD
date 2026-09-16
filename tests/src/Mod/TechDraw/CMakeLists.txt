# SPDX-License-Identifier: LGPL-2.1-or-later

add_subdirectory(App)

target_link_libraries(TechDraw_tests_run
<<<<<<< HEAD
    GTest::gtest_main
    ${Python3_LIBRARIES}
=======
    gtest_main
    ${Google_Tests_LIBS}
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    TechDraw
)
