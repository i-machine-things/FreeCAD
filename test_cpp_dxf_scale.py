"""
Test the C++ DXF exporter's unit scaling feature.

Run with:
    "C:\Program Files\FreeCAD 1.1\bin\freecadcmd.exe" test_cpp_dxf_scale.py

Creates a line of exactly 25.4 mm (= 1 inch) and exports it in each unit
mode, then verifies the $INSUNITS header code and the endpoint X coordinate.

Unit index mapping (must match ImpExpDxf.cpp insunitsCodes[]):
    0=mm  1=cm  2=m  3=inches  4=feet  5=unitless
"""

import os
import re
import sys
import tempfile

try:
    import FreeCAD
    import Part
    import importDXF
except ImportError:
    print("ERROR: run inside FreeCAD — use freecadcmd.exe test_cpp_dxf_scale.py")
    sys.exit(1)

# (unit_index, label, expected_$INSUNITS_code, scale_from_mm)
# want_insunits=None means $INSUNITS must be absent from the file (unitless mode).
CASES = [
    (0, "mm",       4,    1.0),
    (1, "cm",       5,    0.1),
    (2, "m",        6,    0.001),
    (3, "inches",   1,    1.0 / 25.4),
    (4, "feet",     2,    1.0 / 304.8),
    (5, "unitless", None, 1.0),
]

LENGTH_MM = 25.4  # exactly 1 inch — makes the inch case trivially verifiable


def insunits_from_dxf(text):
    m = re.search(r'\$INSUNITS\s*\n\s*70\s*\n\s*(\d+)', text)
    return int(m.group(1)) if m else None


def line_endpoints_from_dxf(text):
    """Return list of (x1, x2) for every LINE entity found."""
    results = []
    lines = text.splitlines()
    i = 0
    while i < len(lines) - 1:
        if lines[i].strip() == '0' and lines[i + 1].strip() == 'LINE':
            coords = {}
            j = i + 2
            while j < len(lines) - 1:
                code = lines[j].strip()
                if code == '0':
                    break
                val = lines[j + 1].strip()
                if code in ('10', '11'):
                    try:
                        coords[code] = float(val)
                    except ValueError:
                        pass
                j += 2
            if '10' in coords and '11' in coords:
                results.append((coords['10'], coords['11']))
            i = j
        else:
            i += 1
    return results


def run():
    import Import as _Import
    cpp_scales = hasattr(_Import, "dxfExporterSupportsUnitScaling")
    path_label = "C++ native" if cpp_scales else "Python fallback"
    print(f"Export path: {path_label}  (sentinel={cpp_scales})")
    print()

    hGrp = FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Mod/Draft")

    saved_legacy = hGrp.GetBool("dxfUseLegacyExporter", False)
    saved_units  = hGrp.GetInt("dxfExportUnits", 0)

    hGrp.SetBool("dxfUseLegacyExporter", False)  # ensure C++ exporter is selected

    passed = failed = 0

    try:
        for idx, label, want_insunits, scale in CASES:
            doc = FreeCAD.newDocument("dxf_scale_test")
            try:
                feat = doc.addObject("Part::Feature", "Line")
                feat.Shape = Part.makeLine(
                    FreeCAD.Vector(0, 0, 0),
                    FreeCAD.Vector(LENGTH_MM, 0, 0),
                )
                doc.recompute()

                hGrp.SetInt("dxfExportUnits", idx)

                fd, out = tempfile.mkstemp(suffix=".dxf")
                os.close(fd)
                importDXF.export([feat], out)

                with open(out) as f:
                    dxf = f.read()
                os.unlink(out)

                got_insunits = insunits_from_dxf(dxf)
                endpoints    = line_endpoints_from_dxf(dxf)

                insunits_ok = (
                    got_insunits is None
                    if want_insunits is None
                    else got_insunits == want_insunits
                )

                want_x = LENGTH_MM * scale
                if endpoints:
                    got_x   = endpoints[0][1]  # X of end point (group 11)
                    coord_ok = abs(got_x - want_x) < 1e-6
                    coord_str = f"{got_x:.10f}"
                else:
                    coord_ok  = False
                    coord_str = "NOT FOUND"

                ok = insunits_ok and coord_ok
                tag = "PASS" if ok else "FAIL"
                if ok:
                    passed += 1
                else:
                    failed += 1

                print(
                    f"[{tag}] {label:8s}  "
                    f"INSUNITS={got_insunits} (want {want_insunits})  "
                    f"X={coord_str} (want {want_x:.10f})"
                )

            finally:
                FreeCAD.closeDocument("dxf_scale_test")

    finally:
        hGrp.SetBool("dxfUseLegacyExporter", saved_legacy)
        hGrp.SetInt("dxfExportUnits", saved_units)

    print(f"\n{passed} passed, {failed} failed")
    return failed == 0


if not run():
    sys.exit(1)
