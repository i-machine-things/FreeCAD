from PySide.QtCore import QTimer

def _run_check():
    """Run the preinstalled add-on check, catching and logging any failure."""
    try:
        from PreinstalledAddons import install_addons
        install_addons.check()
    except Exception as e:
        import FreeCAD
        FreeCAD.Console.PrintWarning(f"PreinstalledAddons: startup check failed: {e}\n")

# Delay 3 s so the main window is fully up before we do anything
QTimer().singleShot(3000, _run_check)
