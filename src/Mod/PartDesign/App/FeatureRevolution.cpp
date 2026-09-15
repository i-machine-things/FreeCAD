// SPDX-License-Identifier: LGPL-2.1-or-later

/***************************************************************************
 *   Copyright (c) 2010 Juergen Riegel <FreeCAD@juergen-riegel.net>        *
 *                                                                         *
 *   This file is part of the FreeCAD CAx development system.              *
 *                                                                         *
 *   This library is free software; you can redistribute it and/or         *
 *   modify it under the terms of the GNU Library General Public           *
 *   License as published by the Free Software Foundation; either          *
 *   version 2 of the License, or (at your option) any later version.      *
 *                                                                         *
 *   This library  is distributed in the hope that it will be useful,      *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU Library General Public License for more details.                  *
 *                                                                         *
 *   You should have received a copy of the GNU Library General Public     *
 *   License along with this library; see the file COPYING.LIB. If not,    *
 *   write to the Free Software Foundation, Inc., 59 Temple Place,         *
 *   Suite 330, Boston, MA  02111-1307, USA                                *
 *                                                                         *
 ***************************************************************************/

#include "FeatureRevolution.h"

#include <Base/ProgramVersion.h>

#include <Base/ProgramVersion.h>

using namespace PartDesign;

namespace PartDesign
{

/* TRANSLATOR PartDesign::Revolution */

const char* Revolution::TypeEnums[]
    = {"Angle", "UpToLast", "UpToFirst", "UpToFace", "TwoAngles", nullptr};

const char* Revolution::FuseOrderEnums[] = {"BaseFirst", "FeatureFirst", nullptr};
<<<<<<< HEAD
=======

PROPERTY_SOURCE(PartDesign::Revolution, PartDesign::ProfileBased)
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794

PROPERTY_SOURCE(PartDesign::Revolution, PartDesign::Revolved)

Revolution::Revolution()
{
    addSubType = FeatureAddSub::Additive;
    const double fullAngle = 360.0;
    const double emptyAngle = 0.0;

    ADD_PROPERTY_TYPE(Type, (0L), "Revolution", App::Prop_None, "Revolution type");
    Type.setEnums(TypeEnums);
    ADD_PROPERTY_TYPE(
        Base,
        (Base::Vector3d()),
        "Revolution",
        App::PropertyType(App::Prop_ReadOnly | App::Prop_Hidden),
        "Base"
    );
    ADD_PROPERTY_TYPE(
        Axis,
        (Base::Vector3d::UnitY),
        "Revolution",
        App::PropertyType(App::Prop_ReadOnly | App::Prop_Hidden),
        "Axis"
    );
    ADD_PROPERTY_TYPE(Angle, (fullAngle), "Revolution", App::Prop_None, "Angle");
    ADD_PROPERTY_TYPE(
        Angle2,
        (emptyAngle),
        "Revolution",
        App::Prop_None,
        "Revolution length in 2nd direction"
    );
    ADD_PROPERTY_TYPE(UpToFace, (nullptr), "Revolution", App::Prop_None, "Face where revolution will end");
    ADD_PROPERTY_TYPE(
        ReferenceAxis,
        (nullptr),
        "Revolution",
        (App::Prop_None),
        "Reference axis of revolution"
    );
<<<<<<< HEAD
=======

>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    ADD_PROPERTY_TYPE(
        FuseOrder,
        (BaseFirst),
        "Compatibility",
        App::Prop_Hidden,
<<<<<<< HEAD
        "Order of fuse operation to preserve compatibility with files created using FreeCAD 1.0"
=======
        "Order of fuse operation to preserve compatibility with filest created using FreeCAD 1.0"
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    );
    FuseOrder.setEnums(FuseOrderEnums);
}

short Revolution::mustExecute() const
{
<<<<<<< HEAD
    if (FuseOrder.isTouched()) {
=======
    if (Placement.isTouched() || ReferenceAxis.isTouched() || Axis.isTouched() || Base.isTouched()
        || UpToFace.isTouched() || Angle.isTouched() || Angle2.isTouched() || FuseOrder.isTouched()) {
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
        return 1;
    }
    return Revolved::mustExecute();
}

App::DocumentObjectExecReturn* Revolution::execute()
{
<<<<<<< HEAD
    return executeRevolved(Part::RevolMode::FuseWithBase);
}

TopoShape Revolution::makeShape(const TopoShape& base, const TopoShape& revolve) const
=======
    if (onlyHaveRefined()) {
        return App::DocumentObject::StdReturn;
    }


    constexpr double maxDegree = 360.0;
    auto method = methodFromString(Type.getValueAsString());

    // Validate parameters
    double angleDeg = Angle.getValue();
    if (angleDeg > maxDegree) {
        return new App::DocumentObjectExecReturn(
            QT_TRANSLATE_NOOP("Exception", "Angle of revolution too large")
        );
    }

    double angle = Base::toRadians<double>(angleDeg);
    if (angle < Precision::Angular() && method == RevolMethod::Angle) {
        return new App::DocumentObjectExecReturn(
            QT_TRANSLATE_NOOP("Exception", "Angle of revolution too small")
        );
    }

    double angle2 = Base::toRadians(Angle2.getValue());
    if (std::fabs(angle + angle2) < Precision::Angular() && method == RevolMethod::TwoAngles) {
        return new App::DocumentObjectExecReturn(
            QT_TRANSLATE_NOOP("Exception", "Angles of revolution nullify each other")
        );
    }

    TopoShape sketchshape = getTopoShapeVerifiedFace();

    // if the Base property has a valid shape, fuse the AddShape into it
    TopoShape base;
    try {
        base = getBaseTopoShape();
    }
    catch (const Base::Exception&) {
        // fall back to support (for legacy features)
    }

    // update Axis from ReferenceAxis
    try {
        updateAxis();
    }
    catch (const Base::Exception& e) {
        return new App::DocumentObjectExecReturn(e.what());
    }

    try {
        // get revolve axis
        Base::Vector3d b = Base.getValue();
        gp_Pnt pnt(b.x, b.y, b.z);
        Base::Vector3d v = Axis.getValue();

        if (v.IsNull()) {
            return new App::DocumentObjectExecReturn(
                QT_TRANSLATE_NOOP("Exception", "Reference axis is invalid")
            );
        }

        gp_Dir dir(v.x, v.y, v.z);

        if (sketchshape.isNull()) {
            return new App::DocumentObjectExecReturn(
                QT_TRANSLATE_NOOP("Exception", "Creating a face from sketch failed")
            );
        }

        this->positionByPrevious();
        auto invObjLoc = getLocation().Inverted();
        pnt.Transform(invObjLoc.Transformation());
        dir.Transform(invObjLoc.Transformation());
        base.move(invObjLoc);
        sketchshape.move(invObjLoc);

        // Check distance between sketchshape and axis - to avoid failures and crashes
        TopExp_Explorer xp;
        xp.Init(sketchshape.getShape(), TopAbs_FACE);
        for (; xp.More(); xp.Next()) {
            if (checkLineCrossesFace(gp_Lin(pnt, dir), TopoDS::Face(xp.Current()))) {
                return new App::DocumentObjectExecReturn(
                    QT_TRANSLATE_NOOP("Exception", "Revolve axis intersects the sketch")
                );
            }
        }

        // Create a fresh support even when base exists so that it can be used for patterns
        TopoShape result(0);
        TopoShape supportface(0);
        try {
            supportface = getSupportFace();
        }
        catch (...) {
            // do nothing, null shape is handle below
        }

        supportface.move(invObjLoc);

        if (method == RevolMethod::ToFace || method == RevolMethod::ToFirst) {
            TopoShape upToFace;
            if (method == RevolMethod::ToFace) {
                getUpToFaceFromLinkSub(upToFace, UpToFace);
                upToFace.move(invObjLoc);
            }
            else {
                // TODO: Implement finding the first face this revolution would intersect with
                return new App::DocumentObjectExecReturn("Revolve up to first is not yet supported");
            }

            if (Reversed.getValue()) {
                dir.Reverse();
            }

            TopExp_Explorer Ex(supportface.getShape(), TopAbs_WIRE);
            if (!Ex.More()) {
                supportface = TopoDS_Face();
            }

            try {
                result = base.makeElementRevolution(
                    base,
                    TopoDS::Face(sketchshape.getShape()),
                    gp_Ax1(pnt, dir),
                    TopoDS::Face(supportface.getShape()),
                    TopoDS::Face(upToFace.getShape()),
                    nullptr,
                    Part::RevolMode::FuseWithBase,
                    Standard_True
                );
            }
            catch (Standard_Failure&) {
                return new App::DocumentObjectExecReturn("Could not revolve the sketch!");
            }
        }
        else {
            bool midplane = Midplane.getValue();
            bool reversed = Reversed.getValue();
            generateRevolution(
                result,
                sketchshape,
                gp_Ax1(pnt, dir),
                angle,
                angle2,
                midplane,
                reversed,
                method
            );
        }

        if (!result.isNull()) {
            // store shape before refinement
            this->rawShape = result;
            result = refineShapeIfActive(result);
            // set the additive shape property for later usage in e.g. pattern
            this->AddSubShape.setValue(result);

            if (!base.isNull()) {
                // In 1.0 there was a bug that caused the order of operations to be reversed.
                // Changing the order may impact geometry order and the results of refine operation,
                // hence we need to support both ways to ensure compatibility.
                if (FuseOrder.getValue() == FeatureFirst) {
                    result = result.makeElementFuse(base);
                }
                else {
                    result = base.makeElementFuse(result);
                }

                // store shape before refinement
                this->rawShape = result;
                result = refineShapeIfActive(result);
            }
            if (!isSingleSolidRuleSatisfied(result.getShape())) {
                return new App::DocumentObjectExecReturn(QT_TRANSLATE_NOOP(
                    "Exception",
                    "Result has multiple solids: enable 'Allow Compound' in the active body."
                ));
            }
            result = getSolid(result);
            this->Shape.setValue(result);
        }
        else {
            return new App::DocumentObjectExecReturn(
                QT_TRANSLATE_NOOP("Exception", "Could not revolve the sketch!")
            );
        }

        // eventually disable some settings that are not valid for the current method
        updateProperties(method);

        return App::DocumentObject::StdReturn;
    }
    catch (Standard_Failure& e) {

        if (std::string(e.GetMessageString()) == "TopoDS::Face") {
            return new App::DocumentObjectExecReturn(QT_TRANSLATE_NOOP(
                "Exception",
                "Could not create face from sketch.\n"
                "Intersecting sketch entities in a sketch are not allowed."
            ));
        }
        else {
            return new App::DocumentObjectExecReturn(e.GetMessageString());
        }
    }
    catch (Base::Exception& e) {
        return new App::DocumentObjectExecReturn(e.what());
    }
}

void Revolution::Restore(Base::XMLReader& reader)
{
    ProfileBased::Restore(reader);

    // For 1.0 and 1.0 only the order was feature first due to a bug
    if (Base::getVersion(reader.ProgramVersion) == Base::Version::v1_0) {
        FuseOrder.setValue(FeatureFirst);
    }
}

bool Revolution::suggestReversed()
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
{
    // In 1.0 there was a bug that caused the order of operations to be reversed.
    // Changing the order may impact geometry order and the results of refine operation,
    // hence we need to support both ways to ensure compatibility.
    if (FuseOrder.getValue() == FeatureFirst) {
        return revolve.makeElementFuse(base);
    }
    return base.makeElementFuse(revolve);
}

bool Revolution::suggestReversedAngle(double angle) const
{
    return angle < 0.0;
}

void Revolution::Restore(Base::XMLReader& reader)
{
    Revolved::Restore(reader);

<<<<<<< HEAD
    // For 1.0 and 1.0 only the order was feature first due to a bug
    if (Base::getVersion(reader.ProgramVersion) == Base::Version::v1_0) {
        FuseOrder.setValue(FeatureFirst);
=======
    throw Base::ValueError("Revolution:: No such method");
}

void Revolution::generateRevolution(
    TopoShape& revol,
    const TopoShape& sketchshape,
    const gp_Ax1& axis,
    const double angle,
    const double angle2,
    const bool midplane,
    const bool reversed,
    RevolMethod method
)
{
    if (method == RevolMethod::Angle || method == RevolMethod::TwoAngles
        || method == RevolMethod::ThroughAll) {
        double angleTotal = angle;
        double angleOffset = 0.;

        if (method == RevolMethod::TwoAngles) {
            // Rotate the face by `angle2`/`angle` to get "second" angle
            angleTotal += angle2;
            angleOffset = angle2 * -1.0;
        }
        else if (method == RevolMethod::ThroughAll) {
            angleTotal = 2 * M_PI;
        }
        else if (midplane) {
            // Rotate the face by half the angle to get Revolution symmetric to sketch plane
            angleOffset = -angle / 2;
        }

        if (fabs(angleTotal) < Precision::Angular()) {
            throw Base::ValueError("Cannot create a revolution with zero angle.");
        }

        gp_Ax1 revolAx(axis);
        if (reversed) {
            revolAx.Reverse();
        }

        TopoShape from = sketchshape;
        if (method == RevolMethod::TwoAngles || midplane) {
            gp_Trsf mov;
            mov.SetRotation(revolAx, angleOffset);
            TopLoc_Location loc(mov);
            from.move(loc);
        }

        // revolve the face to a solid
        // BRepPrimAPI is the only option that allows use of this shape for patterns.
        // See https://forum.freecad.org/viewtopic.php?f=8&t=70185&p=611673#p611673.
        revol = from;
        revol = revol.makeElementRevolve(revolAx, angleTotal);
        revol.Tag = -getID();
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    }
}

}  // namespace PartDesign
