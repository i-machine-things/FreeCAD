from PySide.QtCore import QTimer

def _run_check():
    try:
        from ForkUpdater import update_check
        update_check.check()
    except Exception as e:
        import FreeCAD
        FreeCAD.Console.PrintWarning(f"ForkUpdater: startup check failed: {e}\n")

# Delay 3 s so the main window is fully up before we do anything
QTimer().singleShot(3000, _run_check)
