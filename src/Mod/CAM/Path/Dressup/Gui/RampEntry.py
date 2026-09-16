# SPDX-License-Identifier: LGPL-2.1-or-later
# SPDX-FileCopyrightText: 2017 Pekka Roivainen <pekkaroi@gmail.com>
# SPDX-FileNotice: Part of the FreeCAD project.

################################################################################
#                                                                              #
#   FreeCAD is free software: you can redistribute it and/or modify            #
#   it under the terms of the GNU Lesser General Public License as             #
#   published by the Free Software Foundation, either version 2.1              #
#   of the License, or (at your option) any later version.                     #
#                                                                              #
#   FreeCAD is distributed in the hope that it will be useful,                 #
#   but WITHOUT ANY WARRANTY; without even the implied warranty                #
#   of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.                    #
#   See the GNU Lesser General Public License for more details.                #
#                                                                              #
#   You should have received a copy of the GNU Lesser General Public           #
#   License along with FreeCAD. If not, see https://www.gnu.org/licenses       #
#                                                                              #
################################################################################

import FreeCAD
import FreeCADGui
import Path
import Path.Dressup.Utils as PathDressup
import PathScripts.PathUtils as PathUtils

from Path.Base.Generator.ramp_entry import RampEntry
from PySide.QtCore import QT_TRANSLATE_NOOP

import math

translate = FreeCAD.Qt.translate


if False:
    Path.Log.setLevel(Path.Log.Level.DEBUG, Path.Log.thisModule())
    Path.Log.trackModule(Path.Log.thisModule())
else:
    Path.Log.setLevel(Path.Log.Level.INFO, Path.Log.thisModule())


class ObjectDressup:
    def __init__(self, obj, base):
        obj.addProperty(
            "App::PropertyLink",
            "Base",
            "Path",
            QT_TRANSLATE_NOOP("App::Property", "The base toolpath to modify"),
        )
        obj.addProperty(
            "App::PropertyAngle",
            "Angle",
            "Path",
            QT_TRANSLATE_NOOP("App::Property", "Angle of ramp"),
        )
        obj.addProperty(
            "App::PropertyEnumeration",
            "Method",
            "Path",
            QT_TRANSLATE_NOOP(
                "App::Property",
                "Select ramping method."
                "\n\nRamp Method 0: Helix like path."
                "\nRamp Method 1: Ramp down at rampangle along the path"
                " and move backwards to the original plunge end point."
                "\nRamp Method 2: Travel at start depth along the path"
                " and Ramp backwards at rampangle along the path to the original plunge end point."
                "\nRamp Method 3: Ramp down along the path until traveled half of the Z distance,"
                " change direction and ramp backwards to the original plunge end point.",
            ),
        )
        obj.addProperty(
            "App::PropertyBool",
            "UseStartDepth",
            "StartDepth",
            QT_TRANSLATE_NOOP(
                "App::Property",
                "Should the dressup ignore motion commands above DressupStartDepth",
            ),
        )
        obj.addProperty(
            "App::PropertyDistance",
            "DressupStartDepth",
            "StartDepth",
            QT_TRANSLATE_NOOP(
                "App::Property",
                "The depth where the ramp dressup is enabled."
                "\nAbove this depth ramps are not generated,"
                " but motion commands are passed through as is.",
            ),
        )

        # populate the enumerations
        for n in self.propertyEnumerations():
            setattr(obj, n[0], n[1])

        self.obj = obj
        obj.Proxy = self
        obj.Base = base

        self.setEditorProperties(obj)

    @classmethod
    def propertyEnumerations(self, dataType="data"):
        """PropertyEnumerations(dataType="data")... return property enumeration lists of specified dataType.
        Args:
            dataType = 'data', 'raw', 'translated'
        Notes:
        'data' is list of internal string literals used in code
        'raw' is list of (translated_text, data_string) tuples
        'translated' is list of translated string literals
        """

        enums = {
            "Method": [
                (translate("CAM_DressupRampEntry", "Helix"), "Helix"),
                (translate("CAM_DressupRampEntry", "RampMethod1"), "RampMethod1"),
                (translate("CAM_DressupRampEntry", "RampMethod2"), "RampMethod2"),
                (translate("CAM_DressupRampEntry", "RampMethod3"), "RampMethod3"),
            ],
        }

        if dataType == "raw":
            return enums

        data = list()
        idx = 0 if dataType == "translated" else 1

        Path.Log.debug(enums)

        for k, v in enumerate(enums):
            data.append((v, [tup[idx] for tup in enums[v]]))
        Path.Log.debug(data)

        return data

    def dumps(self):
        return None

    def loads(self, state):
        return None

    def onChanged(self, obj, prop):
        if prop == "UseStartDepth":
            self.setEditorProperties(obj)
        if prop == "Path" and obj.ViewObject:
            obj.ViewObject.signalChangeIcon()

    def setEditorProperties(self, obj):
        mode = 0 if obj.UseStartDepth else 2
        obj.setEditorMode("DressupStartDepth", mode)

    def onDocumentRestored(self, obj):
        self.setEditorProperties(obj)

        # Remove RampFeedRate + CustomFeedRate properties, but keep the values around temporarily
        # This is required for tool controller migration: if a TC migrates with onDocumentRestored
        # called after this, the prior ramp feed rate still needs to be accessible.
        if hasattr(obj, "RampFeedRate"):
            obj.Proxy.RampFeedRate = obj.RampFeedRate
            obj.removeProperty("RampFeedRate")

        if hasattr(obj, "CustomFeedRate"):
            tmp = obj.CustomFeedRate.Value
            for prop, exp in obj.ExpressionEngine:
                if prop == "CustomFeedRate":
                    tmp = exp
            obj.Proxy.CustomFeedRate = tmp
            obj.removeProperty("CustomFeedRate")

    def setup(self, obj):
        obj.Angle = 60
        obj.Method = obj.Proxy.propertyEnumerations(dataType="data")[0][1].index("RampMethod3")
        baseOp = PathDressup.baseOp(obj.Base)
        if hasattr(baseOp, "StartDepth"):
            obj.setExpression("DressupStartDepth", f"{baseOp.Name}.StartDepth")

    def execute(self, obj):
        if not obj.Base:
            obj.Path = Path.Path()
            return
        if not obj.Base.isDerivedFrom("Path::Feature"):
            obj.Path = Path.Path()
            return
        if not obj.Base.Path:
            obj.Path = Path.Path()
            return
        if not PathDressup.baseOp(obj.Base).Active:
            path = Path.Path("(inactive operation)")
            obj.Path = path
            return

        if obj.Angle >= 90:
            obj.Angle = 89.9
        elif obj.Angle <= 0:
            obj.Angle = 0.1

        args = {
            "commands": PathUtils.getPathWithPlacement(obj.Base).Commands,
            "method": obj.Proxy.propertyEnumerations(dataType="data")[0][1].index(obj.Method),
            "angle_rad": math.pi / 2 - math.radians(obj.Angle.Value),
            "tc": PathDressup.toolController(obj.Base),
            "ignoreAbove": obj.DressupStartDepth.Value if obj.UseStartDepth else None,
        }

<<<<<<< HEAD
        obj.Path = Path.Path(RampEntry(**args).generate())
=======
        self.angle = obj.Angle
        self.method = obj.Method
        positioned_path = PathUtils.getPathWithPlacement(obj.Base)
        cmds = positioned_path.Commands if hasattr(positioned_path, "Commands") else []
        self.edges = []
        start_point = (0, 0, 0)
        last_params = {}
        for cmd in cmds:
            # Skip repeat move commands
            params = cmd.Parameters
            if (
                cmd.Name in Path.Geom.CmdMoveAll
                and len(self.edges) > 0
                and cmd.Name == self.edges[-1].command.Name
            ):
                found_diff = False
                for k, v in params.items():
                    if last_params.get(k, None) != v:
                        found_diff = True
                        break
                if not found_diff:
                    continue

            last_params.update(params)

            annotated = AnnotatedGCode(cmd, start_point)
            self.edges.append(annotated)
            start_point = annotated.end_point
        if self.method in ["RampMethod1", "RampMethod2", "RampMethod3"]:
            self.outedges = self.generateRamps()
        else:
            self.outedges = self.generateHelix()
        obj.Path = self.createCommands(obj, self.outedges)

    def generateRamps(self):
        edges = self.edges
        outedges = []
        for edgei, edge in enumerate(edges):
            if edge.is_line or edge.is_arc:
                rampangle = self.angle
                # check for plunge
                if edge.xy_length < 1e-6 and edge.end_point[2] < edge.start_point[2]:
                    # check if above ignoreAbove parameter - do not generate ramp if it is
                    noramp_edge, edge = self.processIgnoreAbove(edge)
                    if noramp_edge is not None:
                        outedges.append(noramp_edge)
                    if edge is None:
                        continue

                    plungelen = abs(edge.start_point[2] - edge.end_point[2])
                    projectionlen = plungelen * math.tan(
                        math.radians(rampangle)
                    )  # length of the forthcoming ramp projected to XY plane
                    # Path.Log.debug(
                    #    "Found plunge move at X:{} Y:{} From Z:{} to Z{}, length of ramp: {}".format(
                    #        p0.x, p0.y, p0.z, p1.z, projectionlen
                    #    )
                    # )
                    if self.method == "RampMethod3":
                        projectionlen = projectionlen / 2

                    # next need to determine how many edges in the path after
                    # plunge are needed to cover the length:
                    covered = False
                    coveredlen = 0
                    rampedges = []
                    i = edgei + 1
                    while not covered and i < len(edges):
                        candidate = edges[i]
                        if abs(candidate.start_point[2] - candidate.end_point[2]) > 1e-6 or (
                            not candidate.is_line and not candidate.is_arc
                        ):
                            # this edge is not an edge/arc in the XY plane; not qualified for ramping
                            break
                        # Path.Log.debug("Next edge length {}".format(candidate.Length))
                        rampedges.append(candidate)
                        coveredlen = coveredlen + candidate.xy_length

                        if coveredlen > projectionlen:
                            covered = True
                        i = i + 1
                    if len(rampedges) == 0:
                        Path.Log.warning(
                            "No suitable edges for ramping, plunge will remain as such"
                        )
                        outedges.append(edge)
                    else:
                        # Path.Log.debug("Doing ramp to edges: {}".format(rampedges))
                        if self.method == "RampMethod1":
                            outedges.extend(
                                self.createRampMethod1(
                                    rampedges, edge.start_point, projectionlen, rampangle
                                )
                            )
                        elif self.method == "RampMethod2":
                            outedges.extend(
                                self.createRampMethod2(
                                    rampedges, edge.start_point, projectionlen, rampangle
                                )
                            )
                        else:
                            # if the ramp cannot be covered with Method3, revert to Method1
                            # because Method1 support going back-and-forth and thus results in same path as Method3 when
                            # length of the ramp is smaller than needed for single ramp.
                            if not covered:
                                projectionlen = projectionlen * 2
                                outedges.extend(
                                    self.createRampMethod1(
                                        rampedges, edge.start_point, projectionlen, rampangle
                                    )
                                )
                            else:
                                outedges.extend(
                                    self.createRampMethod3(
                                        rampedges, edge.start_point, projectionlen, rampangle
                                    )
                                )
                else:
                    outedges.append(edge)
            else:
                outedges.append(edge)
        return outedges

    def generateHelix(self):
        edges = self.edges
        minZ = self.findMinZ(edges)
        Path.Log.debug("Minimum Z in this path is {}".format(minZ))
        outedges = []
        i = 0
        while i < len(edges):
            edge = edges[i]
            if edge.is_line or edge.is_arc:
                if edge.xy_length < 1e-6 and edge.end_point[2] < edge.start_point[2]:
                    noramp_edge, edge = self.processIgnoreAbove(edge)
                    if noramp_edge is not None:
                        outedges.append(noramp_edge)
                    if edge is None:
                        i = i + 1
                        continue

                    # next need to find a loop
                    loopFound = False
                    rampedges = []
                    j = i + 1
                    while j < len(edges) and not loopFound:
                        candidate = edges[j]
                        if abs(candidate.start_point[2] - candidate.end_point[2]) > 1e-6:
                            # this edge is not parallel to XY plane, not qualified for ramping.
                            # exit early, no loop found
                            break
                        if (
                            Path.Geom.isRoughly(edge.end_point[0], candidate.end_point[0])
                            and Path.Geom.isRoughly(edge.end_point[1], candidate.end_point[1])
                            and Path.Geom.isRoughly(edge.end_point[2], candidate.end_point[2])
                        ):
                            loopFound = True
                        rampedges.append(candidate)
                        j = j + 1
                    if not loopFound:
                        Path.Log.warning("No suitable helix found, leaving as a plunge")
                        outedges.append(edge)
                    else:
                        outedges.extend(self.createHelix(rampedges, edge.start_point[2]))
                        if not Path.Geom.isRoughly(edge.end_point[2], minZ):
                            # the edges covered by the helix not handled again,
                            # unless reached the bottom height
                            i = j - 1

                else:
                    outedges.append(edge)
            else:
                outedges.append(edge)
            i = i + 1
        return outedges

    """
    Edges, or parts of edges, above self.ignoreAbove should not be ramped.
    This method is a helper for splitting edges into a portion that should be
    ramped and a portion that should not be ramped.

    Returns (noramp_edge, ramp_edge). Either of these variables may be None
    """

    def processIgnoreAbove(self, edge):
        if not self.ignoreAboveEnabled:
            return None, edge
        z0, z1 = edge.start_point[2], edge.end_point[2]
        if z0 > self.ignoreAbove.Value:
            if z1 > self.ignoreAbove.Value or Path.Geom.isRoughly(z1, self.ignoreAbove.Value):
                # Entire plunge is above ignoreAbove
                return edge, None
            elif not Path.Geom.isRoughly(z0, self.ignoreAbove.Value):
                # Split the edge into regions above and below
                return (
                    edge.clone(z0, self.ignoreAbove.Value),
                    edge.clone(self.ignoreAbove.Value, z1),
                )
        # Entire plunge is below ignoreAbove
        return None, edge

    def createHelix(self, rampedges, startZ):
        outedges = []
        ramplen = 0
        for redge in rampedges:
            ramplen = ramplen + redge.xy_length
        rampheight = abs(startZ - rampedges[-1].end_point[2])

        max_rise_over_run = 1 / math.tan(math.radians(self.angle))
        num_loops = math.ceil(rampheight / ramplen / max_rise_over_run)
        rampedges *= num_loops
        ramplen *= num_loops

        rampangle_rad = math.atan(ramplen / rampheight)
        curZ = startZ
        for i, redge in enumerate(rampedges):
            deltaZ = redge.xy_length / math.tan(rampangle_rad)
            # compute new z, or clamp to end segment to avoid rounding error
            newZ = curZ - deltaZ if i < len(rampedges) - 1 else rampedges[-1].end_point[2]
            outedges.append(redge.clone(curZ, newZ))
            curZ = newZ
        return outedges

    def findMinZ(self, edges):
        minZ = 99999999999
        for edge in edges:
            if edge.command.Name in Path.Geom.CmdMoveAll and edge.end_point[2] < minZ:
                minZ = edge.end_point[2]
        return minZ

    def createRampMethod1(self, rampedges, p0, projectionlen, rampangle):
        """
        This method generates ramp with following pattern:
        1. Start from the original startpoint of the plunge
        2. Ramp down along the path that comes after the plunge
        3. When reaching the Z level of the original plunge, return back to the beginning
            by going the path backwards until the original plunge end point is reached
        4. Continue with the original path
        """
        ramp, reset = self._createRampMethod1(rampedges, p0, projectionlen, rampangle)
        return ramp + reset

    def _createRampMethod1(self, rampedges, p0, projectionlen, rampangle):
        """
        Helper method for generating ramps. Computes ramp method 1, but returns the result in pieces to allow for implementing the other ramp methods.
        Returns (ramp, reset)
        - ramp: array of commands ramping down
        - reset: array of commands returning from the bottom of the ramp to the bottom of the original plunge
        """
        ramp = []
        reset = []
        reversed_edges = [redge.clone(reverse=True) for redge in rampedges]
        rampremaining = projectionlen
        z = p0[2]  # start from the upper point of plunge
        goingForward = True
        i = 0  # current position = start of this edge. May be len(rampremaining) if going backwards
        while rampremaining > 0:
            redge = rampedges[i] if goingForward else reversed_edges[i - 1]

            # for i, redge in enumerate(rampedges):
            if redge.xy_length > rampremaining:
                # will reach end of ramp within this edge, needs to be split
                split_first, split_remaining = redge.split(rampremaining)
                ramp.append(split_first.clone(z_start=z))
                # now we have reached the end of the ramp. Go back to plunge position with constant Z
                # start that by going to the beginning of this splitEdge
                if goingForward:
                    reset.append(split_first.clone(reverse=True))
                else:
                    # if we were reversing, we continue to the same direction as the ramp
                    reset.append(split_remaining)
                    i = i - 1
                rampremaining = 0
                break
            else:
                deltaZ = redge.xy_length / math.tan(math.radians(rampangle))
                new_z = z - deltaZ
                ramp.append(redge.clone(z, new_z))
                z = new_z
                rampremaining = rampremaining - redge.xy_length
                i = i + 1 if goingForward else i - 1
                if i == 0:
                    goingForward = True
                if i == len(rampedges):
                    goingForward = False

        # now we need to return to original position.
        while i >= 1:
            reset.append(reversed_edges[i - 1])
            i = i - 1

        return ramp, reset

    def createRampMethod3(self, rampedges, p0, projectionlen, rampangle):
        """
        This method generates ramp with following pattern:
        1. Start from the original startpoint of the plunge
        2. Ramp down along the path that comes after the plunge until
           traveled half of the Z distance
        3. Change direction and ramp backwards to the original plunge end point
        4. Continue with the original path

        This path is computed using ramp method 1.
        """
        z_half = (p0[2] + rampedges[0].start_point[2]) / 2
        r1_rampedges = [redge.clone(z_half, z_half) for redge in rampedges]
        ramp, _ = self._createRampMethod1(r1_rampedges, p0, projectionlen, rampangle)
        ramp_back = [
            redge.clone(
                2 * z_half - redge.start_point[2], 2 * z_half - redge.end_point[2], reverse=True
            )
            for redge in ramp[::-1]
        ]
        return ramp + ramp_back

    def createRampMethod2(self, rampedges, p0, projectionlen, rampangle):
        """
        This method generates ramp with following pattern:
        1. Start from the original startpoint of the plunge
        2. Travel at start depth along the path, for a distance required for step 3
        3. Ramp backwards along the path at rampangle, arriving exactly at the bottom of the plunge
        4. Continue with the original path

        This path is computed using ramp method 1:
        1. Move all edges up to the start height
        2. Perform ramp method 1 from the bottom of the plunge *up* to the relocated path
        3. Reverse the resulting path (both edge order and direction)
        """
        r1_rampedges = [redge.clone(p0[2], p0[2]) for redge in rampedges]
        r1_p0 = rampedges[0].start_point
        r1_rampangle = -rampangle
        r1_result = self.createRampMethod1(r1_rampedges, r1_p0, projectionlen, r1_rampangle)
        outedges = [redge.clone(reverse=True) for redge in r1_result[::-1]]
        return outedges

    def createCommands(self, obj, edges):
        commands = [edge.command for edge in edges]
        outCommands = []

        tc = PathDressup.toolController(obj.Base)
        horizFeed = tc.HorizFeed.Value
        vertFeed = tc.VertFeed.Value
        horizRapid = tc.HorizRapid.Value
        vertRapid = tc.VertRapid.Value

        if obj.RampFeedRate == "Horizontal Feed Rate":
            rampFeed = horizFeed
        elif obj.RampFeedRate == "Vertical Feed Rate":
            rampFeed = vertFeed
        elif obj.RampFeedRate == "Ramp Feed Rate":
            rampFeed = math.sqrt(pow(vertFeed, 2) + pow(horizFeed, 2))
        else:
            rampFeed = obj.CustomFeedRate.Value

        lastX = lastY = lastZ = 0
        for cmd in commands:
            params = cmd.Parameters
            x = params.get("X", lastX)
            y = params.get("Y", lastY)
            z = params.get("Z", lastZ)

            z = z and round(z, 8)

            if cmd.Name in ["G1", "G2", "G3", "G01", "G02", "G03"]:
                if lastZ != z:
                    if Path.Geom.isRoughly(x, lastX) and Path.Geom.isRoughly(y, lastY):
                        params["F"] = vertFeed
                    else:
                        params["F"] = rampFeed
                else:
                    params["F"] = horizFeed

            elif cmd.Name in ["G0", "G00"]:
                if lastZ != z:
                    params["F"] = vertRapid
                else:
                    params["F"] = horizRapid

            lastX, lastY, lastZ = x, y, z

            outCommands.append(Path.Command(cmd.Name, params))

        return Path.Path(outCommands)
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794


class ViewProviderDressup:
    def __init__(self, vobj):
        self.obj = vobj.Object
        vobj.Proxy = self

    def attach(self, vobj):
        self.obj = vobj.Object
        self.panel = None

        if self.obj and self.obj.Base:
            for i in self.obj.Base.InList:
                if hasattr(i, "Group") and self.obj.Base.Name in [o.Name for o in i.Group]:
                    i.Group = [o for o in i.Group if o.Name != self.obj.Base.Name]
            if self.obj.Base.ViewObject:
                self.obj.Base.ViewObject.Visibility = False

    def claimChildren(self):
<<<<<<< HEAD
=======
        if hasattr(self.obj.Base, "InList"):
            for i in self.obj.Base.InList:
                if hasattr(i, "Group"):
                    group = i.Group
                    for g in group:
                        if g.Name == self.obj.Base.Name:
                            group.remove(g)
                    i.Group = group
        # FreeCADGui.ActiveDocument.getObject(obj.Base.Name).Visibility = False
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
        return [self.obj.Base]

    def setEdit(self, vobj, mode=0):
        if mode == 1:
            FreeCADGui.runCommand("Std_TransformManip")
        return True

    def unsetEdit(self, vobj, mode=0):
        pass

    def onDelete(self, arg1=None, arg2=None):
        """this makes sure that the base operation is added back to the project and visible"""
        Path.Log.debug("Deleting Dressup")
        if arg1.Object and arg1.Object.Base:
            FreeCADGui.ActiveDocument.getObject(arg1.Object.Base.Name).Visibility = True
            job = PathUtils.findParentJob(self.obj)
            if job:
                job.Proxy.addOperation(arg1.Object.Base, arg1.Object)
            arg1.Object.Base = None
        return True

    def dumps(self):
        return None

    def loads(self, state):
        return None

    def getIcon(self):
        if getattr(PathDressup.baseOp(self.obj), "Active", True):
            return ":/icons/CAM_Dressup.svg"
        else:
            return ":/icons/CAM_OpActive.svg"


class CommandPathDressup:
    def GetResources(self):
        return {
            "Pixmap": "CAM_Dressup",
            "MenuText": QT_TRANSLATE_NOOP("CAM_DressupRampEntry", "Ramp Entry"),
            "ToolTip": QT_TRANSLATE_NOOP(
                "CAM_DressupRampEntry",
                "Creates a ramp entry dress-up object from a selected toolpath",
            ),
        }

    def IsActive(self):
        return bool(PathDressup.selection())

    def Activated(self):
        # check that the selection contains exactly what we want
        op = PathDressup.selection(verbose=True)
        if not op:
            return

        # everything ok!
        FreeCAD.ActiveDocument.openTransaction("Create RampEntry Dressup")
        FreeCADGui.addModule("Path.Dressup.Gui.RampEntry")
        FreeCADGui.doCommand(f"base = FreeCAD.ActiveDocument.getObject('{op.Name}')")
        FreeCADGui.doCommand("Path.Dressup.Gui.RampEntry.Create(base)")
        # FreeCAD.ActiveDocument.commitTransaction()  # Final `commitTransaction()` called via TaskPanel.accept()
        FreeCAD.ActiveDocument.recompute()


def Create(baseObject, name="DressupRampEntry", mode=0):
    """
    Create(baseObject, name='DressupRampEntry', mode=0) … create ramp entry dressup object for the given base path.

    import Path.Dressup.Gui.RampEntry as rampentry
    rampentry.Create(basePath)
    """
    if not baseObject.isDerivedFrom("Path::Feature"):
        Path.Log.error(
            translate("CAM_DressupRampEntry", "The selected object is not a path") + "\n"
        )
        return None

    if baseObject.isDerivedFrom("Path::FeatureCompoundPython"):
        Path.Log.error(translate("CAM_DressupRampEntry", "Select a profile object"))
        return None

    FreeCAD.ActiveDocument.openTransaction("Create a DressupRampEntry")
    obj = FreeCAD.ActiveDocument.addObject("Path::FeaturePython", name)
    dbo = ObjectDressup(obj, baseObject)
    job = PathUtils.findParentJob(baseObject)
    job.Proxy.addOperation(obj, baseObject)
    dbo.setup(obj)
    ViewProviderDressup(obj.ViewObject)
    FreeCAD.ActiveDocument.commitTransaction()
    obj.ViewObject.Document.setEdit(obj.ViewObject, mode)

    return obj


if FreeCAD.GuiUp:
    # register the FreeCAD command
    FreeCADGui.addCommand("CAM_DressupRampEntry", CommandPathDressup())

Path.Log.notice("Loading CAM_DressupRampEntry… done\n")
