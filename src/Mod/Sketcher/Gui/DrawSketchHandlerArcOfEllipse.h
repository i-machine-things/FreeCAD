// SPDX-License-Identifier: LGPL-2.1-or-later

/***************************************************************************
 *   Copyright (c) 2022 Abdullah Tahiri <abdullah.tahiri.yo@gmail.com>     *
 *   Copyright (c) 2026 Loke S. Haugsnes <Lokesh@live.no>                  *
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

#pragma once

#include <Gui/Notifications.h>
#include <Gui/Command.h>
#include <Gui/CommandT.h>
#include <Gui/InputHint.h>

#include <Mod/Sketcher/App/SketchObject.h>

#include "DrawSketchHandler.h"
#include "Utils.h"
#include "ViewProviderSketch.h"
#include "SnapManager.h"


#include <Base/Tools.h>
#include <Gui/BitmapFactory.h>
#include <Gui/MainWindow.h>
#include <Mod/Part/App/Geometry2d.h>


#include "DrawSketchDefaultWidgetController.h"
#include "DrawSketchControllableHandler.h"

#include <vector>
#include <algorithm>

// Ellipse governing equation:
// point(t) = origin + majorRad * cos(t) * majorDir + minorRad * sin(t) * minorDir

namespace SketcherGui
{

class DrawSketchHandlerArcOfEllipse;

using DSHArcOfEllipseController = DrawSketchController<
    DrawSketchHandlerArcOfEllipse,
    StateMachines::FourSeekEnd,
    /*PAutoConstraintSize =*/4,
    /*OnViewParametersT =*/OnViewParameters<7>>;

using DrawSketchHandlerArcOfEllipseBase = DrawSketchControllableHandler<DSHArcOfEllipseController>;

class DrawSketchHandlerArcOfEllipse: public DrawSketchHandlerArcOfEllipseBase
{
    Q_DECLARE_TR_FUNCTIONS(SketcherGui::DrawSketchHandlerArcOfEllipse)

<<<<<<< HEAD
    friend DSHArcOfEllipseController;

public:
    explicit DrawSketchHandlerArcOfEllipse()
        : DrawSketchHandlerArcOfEllipseBase()
        , centerPoint({0.0, 0.0})
        , axisPoint({0.0, 0.0})
        , secondRadius(0)
=======
public:
    DrawSketchHandlerArcOfEllipse()
        : Mode(SelectMode::First)
        , EditCurve(34)
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
        , startAngle(0)
        , arcAngle(0)
<<<<<<< HEAD
        , valid(true)
        , secondRadiusSet(false)
        , ellipseGeoId(Sketcher::GeoEnum::GeoUndef)
=======
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    {}

    ~DrawSketchHandlerArcOfEllipse() override = default;

<<<<<<< HEAD
=======
    /// mode table
    enum class SelectMode
    {
        First,
        Second,
        Third,
        Fourth,
        End
    };

    void mouseMove(SnapManager::SnapHandle snapHandle) override
    {
        using std::numbers::pi;
        Base::Vector2d onSketchPos = snapHandle.compute();

        if (Mode == SelectMode::First) {
            setPositionText(onSketchPos);
            seekAndRenderAutoConstraint(sugConstr1, onSketchPos, Base::Vector2d(0.f, 0.f));  // TODO:
                                                                                             // ellipse
                                                                                             // prio 1
        }
        else if (Mode == SelectMode::Second) {
            double rx0 = onSketchPos.x - EditCurve[0].x;
            double ry0 = onSketchPos.y - EditCurve[0].y;
            for (int i = 0; i < 16; i++) {
                double angle = i * pi / 16.0;
                double rx1 = rx0 * cos(angle) + ry0 * sin(angle);
                double ry1 = -rx0 * sin(angle) + ry0 * cos(angle);
                EditCurve[1 + i] = Base::Vector2d(EditCurve[0].x + rx1, EditCurve[0].y + ry1);
                EditCurve[17 + i] = Base::Vector2d(EditCurve[0].x - rx1, EditCurve[0].y - ry1);
            }
            EditCurve[33] = EditCurve[1];

            // Display radius for user
            float radius = (onSketchPos - EditCurve[0]).Length();

            if (showCursorCoords()) {
                SbString text;
                std::string radiusString = lengthToDisplayFormat(radius, 1);
                text.sprintf(" (R%s, R%s)", radiusString.c_str(), radiusString.c_str());
                setPositionText(onSketchPos, text);
            }

            drawEdit(EditCurve);
            seekAndRenderAutoConstraint(
                sugConstr2,
                onSketchPos,
                onSketchPos - centerPoint,
                AutoConstraint::CURVE
            );
        }
        else if (Mode == SelectMode::Third) {
            Base::Vector2d delta12 = axisPoint - centerPoint;

            double a = delta12.Length();

            Base::Vector2d aDir = delta12.Normalize();
            Base::Vector2d bDir(-aDir.y, aDir.x);

            Base::Vector2d delta13 = onSketchPos - centerPoint;
            Base::Vector2d delta13Prime(
                delta13.x * aDir.x + delta13.y * aDir.y,
                delta13.x * bDir.x + delta13.y * bDir.y
            );

            double cosT = max(-1.0, min(1.0, delta13Prime.x / a));
            double sinT = sqrt(max(0.0, 1 - cosT * cosT));

            double b = abs(delta13Prime.y) / sinT;
            if (sinT == 0.0) {
                b = 0.0;
                a = 0.0;
            }

            for (int i = 1; i < 16; i++) {
                double angle = i * pi / 16.0;
                double rx1 = a * cos(angle) * aDir.x + b * sin(angle) * bDir.x;
                double ry1 = a * cos(angle) * aDir.y + b * sin(angle) * bDir.y;
                EditCurve[1 + i] = Base::Vector2d(EditCurve[0].x + rx1, EditCurve[0].y + ry1);
                EditCurve[17 + i] = Base::Vector2d(EditCurve[0].x - rx1, EditCurve[0].y - ry1);
            }
            EditCurve[33] = EditCurve[1];
            EditCurve[17] = EditCurve[16];

            // Display radius for user
            if (showCursorCoords()) {
                SbString text;
                std::string aString = lengthToDisplayFormat(a, 1);
                std::string bString = lengthToDisplayFormat(b, 1);
                text.sprintf(" (R%s, R%s)", aString.c_str(), bString.c_str());
                setPositionText(onSketchPos, text);
            }

            drawEdit(EditCurve);
            seekAndRenderAutoConstraint(sugConstr3, onSketchPos, Base::Vector2d(0.f, 0.f));
        }
        else if (Mode == SelectMode::Fourth) {  // here we differ from ellipse creation
            Base::Vector2d delta12 = axisPoint - centerPoint;

            double a = delta12.Length();

            Base::Vector2d aDir = delta12.Normalize();
            Base::Vector2d bDir(-aDir.y, aDir.x);

            Base::Vector2d delta13 = startingPoint - centerPoint;
            Base::Vector2d delta13Prime(
                delta13.x * aDir.x + delta13.y * aDir.y,
                delta13.x * bDir.x + delta13.y * bDir.y
            );

            double cosT = max(-1.0, min(1.0, delta13Prime.x / a));
            double sinT = sqrt(max(0.0, 1 - cosT * cosT));

            double b = abs(delta13Prime.y) / sinT;

            startAngle = atan2(delta13Prime.y / b, delta13Prime.x / a);

            Base::Vector2d delta14 = onSketchPos - centerPoint;
            Base::Vector2d delta14Prime(
                delta14.x * aDir.x + delta14.y * aDir.y,
                delta14.x * bDir.x + delta14.y * bDir.y
            );
            double angle1 = atan2(delta14Prime.y / b, delta14Prime.x / a) - startAngle;
            double angle2 = angle1 + (angle1 < 0. ? 2 : -2) * pi;

            arcAngle = abs(angle1 - arcAngle) < abs(angle2 - arcAngle) ? angle1 : angle2;

            for (int i = 0; i < 34; i++) {
                double angle = startAngle + i * arcAngle / 33.0;
                double rx1 = a * cos(angle) * aDir.x + b * sin(angle) * bDir.x;
                double ry1 = a * cos(angle) * aDir.y + b * sin(angle) * bDir.y;
                EditCurve[i] = Base::Vector2d(centerPoint.x + rx1, centerPoint.y + ry1);
            }

            // Display radii and angle for user
            if (showCursorCoords()) {
                SbString text;
                std::string aString = lengthToDisplayFormat(a, 1);
                std::string bString = lengthToDisplayFormat(b, 1);
                std::string angleString = angleToDisplayFormat(arcAngle * 180.0 / pi, 1);
                text.sprintf(" (R%s, R%s, %s)", aString.c_str(), bString.c_str(), angleString.c_str());
                setPositionText(onSketchPos, text);
            }

            if (onSketchPos != centerPoint) {
                drawEdit(EditCurve);
            }
            else {
                drawEdit(std::vector<Base::Vector2d>());
            }
            seekAndRenderAutoConstraint(sugConstr4, onSketchPos, Base::Vector2d(0.f, 0.f));
        }
    }

    bool pressButton(Base::Vector2d onSketchPos) override
    {
        using std::numbers::pi;

        if (Mode == SelectMode::First) {
            EditCurve[0] = onSketchPos;
            centerPoint = onSketchPos;
            setAngleSnapping(true, centerPoint);
            Mode = SelectMode::Second;
        }
        else if (Mode == SelectMode::Second
                 && (centerPoint - onSketchPos).Length() >= Precision::Confusion()) {
            EditCurve[1] = onSketchPos;
            axisPoint = onSketchPos;
            Mode = SelectMode::Third;
        }
        else if (Mode == SelectMode::Third && validThirdPoint(onSketchPos)) {
            startingPoint = onSketchPos;
            arcAngle = 0.;
            Mode = SelectMode::Fourth;
        }
        else if (Mode == SelectMode::Fourth && centerPoint != onSketchPos && arcAngle != 0
                 && abs(arcAngle) != 2 * pi) {
            endPoint = onSketchPos;

            setAngleSnapping(false);
            Mode = SelectMode::End;
        }

        updateHint();
        return true;
    }

    bool releaseButton(Base::Vector2d onSketchPos) override
    {
        Q_UNUSED(onSketchPos);

        using std::numbers::pi;

        if (Mode == SelectMode::End) {
            unsetCursor();
            resetPositionText();

            Base::Vector2d delta12 = axisPoint - centerPoint;

            double a = delta12.Length();

            Base::Vector2d aDir = delta12.Normalize();
            Base::Vector2d bDir(-aDir.y, aDir.x);

            Base::Vector2d delta13 = startingPoint - centerPoint;
            Base::Vector2d delta13Prime(
                delta13.x * aDir.x + delta13.y * aDir.y,
                delta13.x * bDir.x + delta13.y * bDir.y
            );

            double cosT = max(-1.0, min(1.0, delta13Prime.x / a));
            double sinT = sqrt(max(0.0, 1 - cosT * cosT));

            double b = abs(delta13Prime.y) / sinT;

            Base::Vector2d delta14 = endPoint - centerPoint;
            Base::Vector2d delta14Prime(
                delta14.x * aDir.x + delta14.y * aDir.y,
                delta14.x * bDir.x + delta14.y * bDir.y
            );
            double angle1 = atan2(delta14Prime.y / b, delta14Prime.x / a) - startAngle;
            double angle2 = angle1 + (angle1 < 0. ? 2 : -2) * pi;

            arcAngle = abs(angle1 - arcAngle) < abs(angle2 - arcAngle) ? angle1 : angle2;

            bool isOriginalArcCCW = true;

            if (arcAngle > 0) {
                endAngle = startAngle + arcAngle;
            }
            else {
                endAngle = startAngle;
                startAngle += arcAngle;
                isOriginalArcCCW = false;
            }

            Base::Vector2d majAxisDir, minAxisDir, minAxisPoint, majAxisPoint;
            // We always create a CCW ellipse, because we want our XY reference system to be in the
            // +X +Y direction Our normal will then always be in the +Z axis (local +Z axis of the
            // sketcher)

            if (a > b) {
                // force second semidiameter to be perpendicular to first semidiamater
                majAxisDir = axisPoint - centerPoint;
                Base::Vector2d perp(-majAxisDir.y, majAxisDir.x);
                perp.Normalize();
                perp.Scale(abs(b));
                minAxisPoint = centerPoint + perp;
                majAxisPoint = centerPoint + majAxisDir;
            }
            else {
                // force second semidiameter to be perpendicular to first semidiamater
                minAxisDir = axisPoint - centerPoint;
                Base::Vector2d perp(minAxisDir.y, -minAxisDir.x);
                perp.Normalize();
                perp.Scale(abs(b));
                majAxisPoint = centerPoint + perp;
                minAxisPoint = centerPoint + minAxisDir;
                endAngle += pi / 2;
                startAngle += pi / 2;
            }

            int currentgeoid = getHighestCurveIndex();

            try {
                Gui::Command::openCommand(QT_TRANSLATE_NOOP("Command", "Add sketch arc of ellipse"));

                Gui::cmdAppObjectArgs(
                    sketchgui->getObject(),
                    "addGeometry(Part.ArcOfEllipse"
                    "(Part.Ellipse(App.Vector(%f,%f,0),App.Vector(%f,%f,0),App."
                    "Vector(%f,%f,0)),%f,%f),%s)",
                    majAxisPoint.x,
                    majAxisPoint.y,
                    minAxisPoint.x,
                    minAxisPoint.y,
                    centerPoint.x,
                    centerPoint.y,
                    startAngle,
                    endAngle,
                    constructionModeAsBooleanText()
                );

                currentgeoid++;

                Gui::cmdAppObjectArgs(sketchgui->getObject(), "exposeInternalGeometry(%d)", currentgeoid);
            }
            catch (const Base::Exception&) {
                Gui::NotifyError(
                    sketchgui,
                    QT_TRANSLATE_NOOP("Notifications", "Error"),
                    QT_TRANSLATE_NOOP("Notifications", "Failed to add arc of ellipse")
                );
                Gui::Command::abortCommand();

                tryAutoRecomputeIfNotSolve(sketchgui->getObject<Sketcher::SketchObject>());

                return false;
            }

            Gui::Command::commitCommand();

            // add auto constraints for the center point
            if (!sugConstr1.empty()) {
                createAutoConstraints(sugConstr1, currentgeoid, Sketcher::PointPos::mid);
                sugConstr1.clear();
            }

            // add suggested constraints for arc
            if (!sugConstr2.empty()) {
                createAutoConstraints(sugConstr2, currentgeoid, Sketcher::PointPos::none);
                sugConstr2.clear();
            }

            // add suggested constraints for start of arc
            if (!sugConstr3.empty()) {
                createAutoConstraints(
                    sugConstr3,
                    currentgeoid,
                    isOriginalArcCCW ? Sketcher::PointPos::start : Sketcher::PointPos::end
                );
                sugConstr3.clear();
            }

            // add suggested constraints for start of arc
            if (!sugConstr4.empty()) {
                createAutoConstraints(
                    sugConstr4,
                    currentgeoid,
                    isOriginalArcCCW ? Sketcher::PointPos::end : Sketcher::PointPos::start
                );
                sugConstr4.clear();
            }

            tryAutoRecomputeIfNotSolve(sketchgui->getObject<Sketcher::SketchObject>());

            ParameterGrp::handle hGrp = App::GetApplication().GetParameterGroupByPath(
                "User parameter:BaseApp/Preferences/Mod/Sketcher"
            );
            bool continuousMode = hGrp->GetBool("ContinuousCreationMode", true);
            if (continuousMode) {
                // This code enables the continuous creation mode.
                Mode = SelectMode::First;
                EditCurve.clear();
                drawEdit(EditCurve);
                EditCurve.resize(34);
                applyCursor();
                /* this is ok not to call to purgeHandler
                 * in continuous creation mode because the
                 * handler is destroyed by the quit() method on pressing the
                 * right button of the mouse */
            }
            else {
                sketchgui->purgeHandler();  // no code after this line, Handler get deleted in
                                            // ViewProvider
            }
        }

        updateHint();

        return true;
    }

private:
    QString getCrosshairCursorSVGName() const override
    {
        return QStringLiteral("Sketcher_Pointer_Create_ArcOfEllipse");
    }

protected:
    SelectMode Mode;
    std::vector<Base::Vector2d> EditCurve;
    Base::Vector2d centerPoint, axisPoint, startingPoint, endPoint;
    double startAngle, endAngle, arcAngle;
    std::vector<AutoConstraint> sugConstr1, sugConstr2, sugConstr3, sugConstr4;

>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
private:
    std::list<Gui::InputHint> getToolHints() const override
    {
        using enum Gui::InputHint::UserInput;

        return Gui::lookupHints<SelectMode>(
            state(),
            {
<<<<<<< HEAD
                {.state = SelectMode::SeekFirst,
=======
                {.state = SelectMode::First,
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
                 .hints =
                     {
                         {tr("%1 pick ellipse center point"), {MouseLeft}},
                     }},
<<<<<<< HEAD
                {.state = SelectMode::SeekSecond,
=======
                {.state = SelectMode::Second,
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
                 .hints =
                     {
                         {tr("%1 pick axis point"), {MouseLeft}},
                     }},
<<<<<<< HEAD
                {.state = SelectMode::SeekThird,
=======
                {.state = SelectMode::Third,
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
                 .hints =
                     {
                         {tr("%1 pick arc start point"), {MouseLeft}},
                     }},
<<<<<<< HEAD
                {.state = SelectMode::SeekFourth,
=======
                {.state = SelectMode::Fourth,
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
                 .hints =
                     {
                         {tr("%1 pick arc end point"), {MouseLeft}},
                     }},
            });
    }

<<<<<<< HEAD
    void updateDataAndDrawToPosition(Base::Vector2d onSketchPos) override
    {
        using std::numbers::pi;
        valid = true;
        switch (state()) {
            case SelectMode::SeekFirst: {
                centerPoint = onSketchPos;
                toolWidgetManager.drawPositionAtCursor(onSketchPos);
                seekAndRenderAutoConstraint(sugConstraints[0], onSketchPos, Base::Vector2d(0.f, 0.f));
            } break;
            case SelectMode::SeekSecond: {
                axisPoint = onSketchPos;
                if ((axisPoint - centerPoint).Length() < Precision::Confusion()) {
                    valid = false;
                    break;
                }

                toolWidgetManager.drawDirectionAtCursor(onSketchPos, centerPoint);
                seekAndRenderAutoConstraint(
                    sugConstraints[1],
                    onSketchPos,
                    onSketchPos - centerPoint,
                    AutoConstraint::CURVE
                );
            } break;
            case SelectMode::SeekThird: {
                double a = firstRadius();
                Base::Vector2d aDir = firstAxis();
                Base::Vector2d bDir = secondAxis();

                Base::Vector2d delta13 = onSketchPos - centerPoint;
                Base::Vector2d delta13Prime(
                    delta13.x * aDir.x + delta13.y * aDir.y,
                    delta13.x * bDir.x + delta13.y * bDir.y
                );

                if (!secondRadiusSet) {
                    double cosT = std::max(-1.0, std::min(1.0, delta13Prime.x / a));
                    double sinT = std::sqrt(std::max(0.0, 1 - cosT * cosT));

                    if (sinT < Precision::Confusion()) {
                        valid = false;
                        break;
                    }

                    secondRadius = std::abs(delta13Prime.y) / sinT;
                    if (std::abs(delta13Prime.y) < Precision::Confusion()) {
                        valid = false;
                        break;
                    }
                }

                startAngle = std::atan2(delta13Prime.y / secondRadius, delta13Prime.x / a);
                toolWidgetManager.drawWidthHeightAtCursor(onSketchPos, firstRadius(), secondRadius);
                seekAndRenderAutoConstraint(sugConstraints[2], onSketchPos, Base::Vector2d(0.f, 0.f));
            } break;
            case SelectMode::SeekFourth: {
                Base::Vector2d aDir = firstAxis();
                Base::Vector2d bDir = secondAxis();
                Base::Vector2d delta14 = onSketchPos - centerPoint;
                Base::Vector2d delta14Prime(
                    delta14.x * aDir.x + delta14.y * aDir.y,
                    delta14.x * bDir.x + delta14.y * bDir.y
                );

                double angle1
                    = std::atan2(delta14Prime.y / secondRadius, delta14Prime.x / firstRadius())
                    - startAngle;
                double angle2 = angle1 + (angle1 < 0. ? 2 : -2) * pi;

                arcAngle = std::abs(angle1 - arcAngle) < std::abs(angle2 - arcAngle) ? angle1
                                                                                     : angle2;
                if (abs(arcAngle) < Precision::Confusion()) {
                    valid = false;
                    break;
                }

                toolWidgetManager.drawDoubleAtCursor(onSketchPos, arcAngle, Base::Unit::Angle);
                seekAndRenderAutoConstraint(sugConstraints[3], onSketchPos, Base::Vector2d(0.f, 0.f));
            } break;
            default:
                return;
        }

        CreateAndDrawShapeGeometry();
    }

    void executeCommands() override
    {
        try {
            openCommand(QT_TRANSLATE_NOOP("Command", "Add sketch arc of ellipse"));

            ellipseGeoId = getHighestCurveIndex() + 1;

            createShape(true);

            commandAddShapeGeometryAndConstraints();

            Gui::cmdAppObjectArgs(sketchgui->getObject(), "exposeInternalGeometry(%d)", ellipseGeoId);

            commitCommand();
        }
        catch (const Base::Exception&) {
            Gui::NotifyError(
                sketchgui,
                QT_TRANSLATE_NOOP("Notifications", "Error"),
                QT_TRANSLATE_NOOP("Notifications", "Failed to add arc of ellipse")
            );

            abortCommand();
            THROWM(
                Base::RuntimeError,
                QT_TRANSLATE_NOOP(
                    "Notifications",
                    "Tool execution aborted"
                ) "\n"
            )  // This prevents constraints from being
               // applied on non existing geometry
        }
    }

    void generateAutoConstraints() override
    {
        auto& ac1 = sugConstraints[0];
        auto& ac2 = sugConstraints[1];
        auto& ac3 = sugConstraints[2];
        auto& ac4 = sugConstraints[3];

        if (!ac1.empty()) {
            generateAutoConstraintsOnElement(ac1, ellipseGeoId, Sketcher::PointPos::mid);
        }

        if (!ac2.empty()) {
            generateAutoConstraintsOnElement(ac2, ellipseGeoId, Sketcher::PointPos::none);
        }

        if (!ac3.empty()) {
            generateAutoConstraintsOnElement(
                ac3,
                ellipseGeoId,
                (arcAngle > 0) ? Sketcher::PointPos::start : Sketcher::PointPos::end
            );
        }

        if (!ac4.empty()) {
            generateAutoConstraintsOnElement(
                ac4,
                ellipseGeoId,
                (arcAngle > 0) ? Sketcher::PointPos::end : Sketcher::PointPos::start
            );
        }

        // Ensure temporary autoconstraints do not generate a redundancy and that the geometry
        // parameters are accurate This is particularly important for adding widget mandated
        // constraints.
        removeRedundantAutoConstraints();
    }

    void createAutoConstraints() override
    {
        // execute python command to create autoconstraints
        createGeneratedAutoConstraints(true);

        sugConstraints[0].clear();
        sugConstraints[1].clear();
        sugConstraints[2].clear();
        sugConstraints[3].clear();
    }

    std::string getToolName() const override
    {
        return "DSH_ArcOfEllipse";
    }

    QString getCrosshairCursorSVGName() const override
    {
        return QStringLiteral("Sketcher_Pointer_Create_ArcOfEllipse");
    }

    QPixmap getToolIcon() const override
    {
        return Gui::BitmapFactory().pixmap("Sketcher_CreateElliptical_Arc");
    }

    bool canGoToNextMode() override
    {
        if (!valid) {
            return false;
        }
        return true;
    }

    void angleSnappingControl() override
    {
        setAngleSnapping(false);
    }

    void createShape(bool onlyeditoutline) override
    {
        Q_UNUSED(onlyeditoutline);

        ShapeGeometry.clear();

        if (!valid) {
            return;
        }

        if (state() == SelectMode::SeekSecond) {
            addEllipseToShapeGeometry(
                toVector3d(centerPoint),
                toVector3d(firstAxis()),
                firstRadius(),
                firstRadius() / 2,
                isConstructionMode()
            );
        }

        Ellipse ellipse = getEllipse();

        if (state() == SelectMode::SeekThird) {
            addEllipseToShapeGeometry(
                toVector3d(centerPoint),
                toVector3d(ellipse.majorAxis),
                ellipse.majorRadius,
                ellipse.minorRadius,
                isConstructionMode()
            );
        }

        if (state() == SelectMode::SeekFourth || state() == SelectMode::End) {
            addArcOfEllipseToShapeGeometry(
                toVector3d(centerPoint),
                toVector3d(ellipse.majorAxis),
                ellipse.majorRadius,
                ellipse.minorRadius,
                ellipse.startAngle,
                ellipse.endAngle,
                isConstructionMode()
            );
        }
    }

private:
    Base::Vector2d centerPoint, axisPoint;
    double secondRadius, startAngle, arcAngle;
    bool valid, secondRadiusSet;
    int ellipseGeoId;

    double firstRadius() const
    {
        return (centerPoint - axisPoint).Length();
    }

    Base::Vector2d firstAxis() const
    {
        return (axisPoint - centerPoint).Normalize();
    }

    Base::Vector2d secondAxis() const
    {
        return firstAxis().Rotate(std::numbers::pi / 2);
    }

    struct Ellipse
    {
        double majorRadius;
        double minorRadius;
        Base::Vector2d majorAxis;
        Base::Vector2d minorAxis;
        double startAngle;
        double endAngle;
    };

    Ellipse getEllipse() const
    {
        double ellipseStartAngle = (firstRadius() >= secondRadius)
            ? startAngle
            : startAngle - std::numbers::pi / 2;
        return Ellipse {
            .majorRadius = std::max(firstRadius(), secondRadius),
            .minorRadius = std::min(firstRadius(), secondRadius),
            .majorAxis = (firstRadius() >= secondRadius) ? firstAxis() : secondAxis(),
            .minorAxis = (firstRadius() >= secondRadius) ? secondAxis() : firstAxis(),
            .startAngle = (arcAngle > 0) ? ellipseStartAngle : arcAngle + ellipseStartAngle,
            .endAngle = (arcAngle > 0) ? arcAngle + ellipseStartAngle : ellipseStartAngle,
        };
=======
    bool validThirdPoint(Base::Vector2d onSketchPos)
    {
        Base::Vector2d delta12 = axisPoint - centerPoint;

        double a = delta12.Length();

        Base::Vector2d aDir = delta12.Normalize();
        Base::Vector2d bDir(-aDir.y, aDir.x);

        Base::Vector2d delta13 = onSketchPos - centerPoint;
        Base::Vector2d delta13Prime(
            delta13.x * aDir.x + delta13.y * aDir.y,
            delta13.x * bDir.x + delta13.y * bDir.y
        );

        double cosT = max(-1.0, min(1.0, delta13Prime.x / a));
        return cosT != -1.0 && cosT != 1.0 && delta13Prime.y != 0;
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    }
};

template<>
auto DSHArcOfEllipseController::getState(int labelindex) const
{
    switch (labelindex) {
        case OnViewParameter::First:
        case OnViewParameter::Second:
            return SelectMode::SeekFirst;
            break;
        case OnViewParameter::Third:
        case OnViewParameter::Fourth:
            return SelectMode::SeekSecond;
            break;
        case OnViewParameter::Fifth:
        case OnViewParameter::Sixth:
            return SelectMode::SeekThird;
            break;
        case OnViewParameter::Seventh:
            return SelectMode::SeekFourth;
            break;
        default:
            THROWM(Base::ValueError, "OnViewParameter index without an associated machine state")
    }
}

template<>
void DSHArcOfEllipseController::configureOnViewParameters()
{
    onViewParameters[OnViewParameter::First]->setLabelType(Gui::SoDatumLabel::DISTANCEX);
    onViewParameters[OnViewParameter::Second]->setLabelType(Gui::SoDatumLabel::DISTANCEY);

    onViewParameters[OnViewParameter::Third]->setLabelType(
        Gui::SoDatumLabel::RADIUS,
        Gui::EditableDatumLabel::Function::Dimensioning
    );
    onViewParameters[OnViewParameter::Fourth]->setLabelType(
        Gui::SoDatumLabel::ANGLE,
        Gui::EditableDatumLabel::Function::Dimensioning
    );

    onViewParameters[OnViewParameter::Fifth]->setLabelType(
        Gui::SoDatumLabel::RADIUS,
        Gui::EditableDatumLabel::Function::Dimensioning
    );
    onViewParameters[OnViewParameter::Sixth]->setLabelType(
        Gui::SoDatumLabel::ANGLE,
        Gui::EditableDatumLabel::Function::Dimensioning
    );

    onViewParameters[OnViewParameter::Seventh]->setLabelType(
        Gui::SoDatumLabel::ANGLE,
        Gui::EditableDatumLabel::Function::Dimensioning
    );
}

template<>
void DSHArcOfEllipseController::doEnforceControlParameters(Base::Vector2d& onSketchPos)
{
    handler->updateDataAndDrawToPosition(
        onSketchPos
    );  // ensure that the member variables are updated to date values before enforcing parameters
    switch (handler->state()) {
        case SelectMode::SeekFirst: {
            auto& firstParam = onViewParameters[OnViewParameter::First];
            auto& secondParam = onViewParameters[OnViewParameter::Second];

            if (firstParam->isSet) {
                onSketchPos.x = firstParam->getValue();
            }

            if (secondParam->isSet) {
                onSketchPos.y = secondParam->getValue();
            }
        } break;
        case SelectMode::SeekSecond: {
            auto& firstRadiusParam = onViewParameters[OnViewParameter::Third];
            auto& angleParam = onViewParameters[OnViewParameter::Fourth];

            if (!firstRadiusParam->isSet && !angleParam->isSet) {
                return;
            }

            double firstRadius = handler->firstRadius();
            auto firstAxis = handler->firstAxis();

            if (firstRadiusParam->isSet) {
                firstRadius = firstRadiusParam->getValue();
                if (firstRadius < Precision::Confusion() && firstRadiusParam->hasFinishedEditing) {
                    unsetOnViewParameter(firstRadiusParam.get());
                    return;
                }
            }

            if (angleParam->isSet) {
                double angle = Base::toRadians(angleParam->getValue());
                firstAxis = {cos(angle), sin(angle)};
            }

            onSketchPos = handler->centerPoint + firstRadius * firstAxis;
        } break;
        case SelectMode::SeekThird: {
            auto& secondRadiusParam = onViewParameters[OnViewParameter::Fifth];
            auto& startAngleParam = onViewParameters[OnViewParameter::Sixth];

            if (!secondRadiusParam->isSet && !startAngleParam->isSet) {
                return;
            }

            double secondRadius = handler->secondRadius;
            auto startAngle = handler->startAngle;

            if (secondRadiusParam->isSet) {
                secondRadius = secondRadiusParam->getValue();
                handler->secondRadiusSet = true;
                if (secondRadius < Precision::Confusion() && secondRadiusParam->hasFinishedEditing) {
                    handler->secondRadiusSet = false;
                    unsetOnViewParameter(secondRadiusParam.get());
                    return;
                }
            }

            if (startAngleParam->isSet) {
                startAngle = Base::toRadians(startAngleParam->getValue());
            }

            onSketchPos = handler->centerPoint
                + handler->firstRadius() * std::cos(startAngle) * handler->firstAxis()
                + secondRadius * std::sin(startAngle) * handler->secondAxis();
        } break;
        case SelectMode::SeekFourth: {
            auto& arcAngleParam = onViewParameters[OnViewParameter::Seventh];

            if (!arcAngleParam->isSet) {
                return;
            }

            double arcAngle = Base::toRadians(arcAngleParam->getValue());
            if (std::fmod(std::abs(arcAngle), 2 * std::numbers::pi) < Precision::Confusion()
                && arcAngleParam->hasFinishedEditing) {
                unsetOnViewParameter(arcAngleParam.get());
                return;
            }
            // Help it to not flip on changes over pi radians,
            // since then the other direction is shorter and will be used instead
            handler->arcAngle = arcAngle;

            double endAngle = handler->startAngle + arcAngle;

            double xPrime = handler->firstRadius() * std::cos(endAngle);
            double yPrime = handler->secondRadius * std::sin(endAngle);

            Base::Vector2d delta = handler->firstAxis() * xPrime + handler->secondAxis() * yPrime;

            onSketchPos = handler->centerPoint + delta;

        } break;
        default:
            break;
    }
}

template<>
void DSHArcOfEllipseController::adaptParameters(Base::Vector2d onSketchPos)
{
    switch (handler->state()) {
        case SelectMode::SeekFirst: {
            auto& firstParam = onViewParameters[OnViewParameter::First];
            auto& secondParam = onViewParameters[OnViewParameter::Second];

            if (!firstParam->isSet) {
                setOnViewParameterValue(OnViewParameter::First, onSketchPos.x);
            }

            if (!secondParam->isSet) {
                setOnViewParameterValue(OnViewParameter::Second, onSketchPos.y);
            }

            bool sameSign = onSketchPos.x * onSketchPos.y > 0.;
            firstParam->setLabelAutoDistanceReverse(!sameSign);
            secondParam->setLabelAutoDistanceReverse(sameSign);
            firstParam->setPoints(Base::Vector3d(), toVector3d(onSketchPos));
            secondParam->setPoints(Base::Vector3d(), toVector3d(onSketchPos));
        } break;
        case SelectMode::SeekSecond: {
            auto& firstRadiusParam = onViewParameters[OnViewParameter::Third];
            auto& angleParam = onViewParameters[OnViewParameter::Fourth];

            if (!firstRadiusParam->isSet) {
                setOnViewParameterValue(OnViewParameter::Third, handler->firstRadius());
            }

            if (!angleParam->isSet) {
                setOnViewParameterValue(
                    OnViewParameter::Fourth,
                    Base::toDegrees(handler->firstAxis().Angle()),
                    Base::Unit::Angle
                );
            }

            Base::Vector3d start = toVector3d(handler->centerPoint);
            Base::Vector3d end = toVector3d(onSketchPos);

            firstRadiusParam->setPoints(start, end);
            angleParam->setPoints(start, Base::Vector3d());
            angleParam->setLabelRange(handler->firstAxis().Angle());
        } break;
        case SelectMode::SeekThird: {
            auto& secondRadiusParam = onViewParameters[OnViewParameter::Fifth];
            auto& startAngleParam = onViewParameters[OnViewParameter::Sixth];

            if (!secondRadiusParam->isSet) {
                setOnViewParameterValue(
                    OnViewParameter::Fifth,
                    handler->valid ? handler->secondRadius : 0
                );
            }

            if (!startAngleParam->isSet) {
                setOnViewParameterValue(
                    OnViewParameter::Sixth,
                    Base::toDegrees(handler->startAngle),
                    Base::Unit::Angle
                );
            }

            Base::Vector3d start = toVector3d(handler->centerPoint);
            startAngleParam->setPoints(start, Base::Vector3d());
            startAngleParam->setLabelStartAngle(handler->firstAxis().Angle());
            startAngleParam->setLabelRange(handler->startAngle);

            Base::Vector3d end = toVector3d(
                handler->centerPoint + handler->secondAxis() * handler->secondRadius
            );
            secondRadiusParam->setPoints(start, end);
            if (!handler->valid) {
                secondRadiusParam->setPoints(start, start);
            }
        } break;
        case SelectMode::SeekFourth: {
            auto& arcAngleParam = onViewParameters[OnViewParameter::Seventh];

            if (!arcAngleParam->isSet) {
                setOnViewParameterValue(
                    OnViewParameter::Seventh,
                    Base::toDegrees(handler->arcAngle),
                    Base::Unit::Angle
                );
            }

            Base::Vector3d start = toVector3d(handler->centerPoint);

            arcAngleParam->setPoints(start, Base::Vector3d());
            arcAngleParam->setLabelStartAngle(handler->firstAxis().Angle() + handler->startAngle);
            arcAngleParam->setLabelRange(handler->arcAngle);
        } break;
        default:
            break;
    }
}

template<>
void DSHArcOfEllipseController::computeNextDrawSketchHandlerMode()
{
    switch (handler->state()) {
        case SelectMode::SeekFirst: {
            auto& firstParam = onViewParameters[OnViewParameter::First];
            auto& secondParam = onViewParameters[OnViewParameter::Second];

            if (firstParam->hasFinishedEditing && secondParam->hasFinishedEditing) {
                handler->setNextState(SelectMode::SeekSecond);
            }
        } break;
        case SelectMode::SeekSecond: {
            auto& thirdParam = onViewParameters[OnViewParameter::Third];
            auto& fourthParam = onViewParameters[OnViewParameter::Fourth];

            if (thirdParam->hasFinishedEditing && fourthParam->hasFinishedEditing) {
                handler->setNextState(SelectMode::SeekThird);
            }
        } break;
        case SelectMode::SeekThird: {
            auto& fifthParam = onViewParameters[OnViewParameter::Fifth];
            auto& sixthParam = onViewParameters[OnViewParameter::Sixth];

            if (fifthParam->hasFinishedEditing && sixthParam->hasFinishedEditing) {
                handler->setNextState(SelectMode::SeekFourth);
            }
        } break;
        case SelectMode::SeekFourth: {
            auto& seventh = onViewParameters[OnViewParameter::Seventh];

            if (seventh->hasFinishedEditing) {
                handler->setNextState(SelectMode::End);
            }
        } break;
        default:
            break;
    }
}

template<>
void DSHArcOfEllipseController::addConstraints()
{
    App::DocumentObject* obj = handler->sketchgui->getObject();

    int firstCurve = handler->ellipseGeoId;
    int majorLine = firstCurve + 1;
    int minorLine = firstCurve + 2;

    bool isFirstMajor = handler->firstRadius() > handler->secondRadius;

    double majorRadius = std::max(handler->firstRadius(), handler->secondRadius);
    double minorRadius = std::min(handler->firstRadius(), handler->secondRadius);

    using namespace Sketcher;

    bool x0set = onViewParameters[OnViewParameter::First]->isSet;
    bool y0set = onViewParameters[OnViewParameter::Second]->isSet;
    bool firstAxisSet = onViewParameters[OnViewParameter::Fourth]->isSet;
    bool majorRadiusSet = isFirstMajor ? onViewParameters[OnViewParameter::Third]->isSet
                                       : onViewParameters[OnViewParameter::Fifth]->isSet;
    bool minorRadiusSet = isFirstMajor ? onViewParameters[OnViewParameter::Fifth]->isSet
                                       : onViewParameters[OnViewParameter::Third]->isSet;
    // cant constrain the angles

    auto constraintx0 = [&]() {
        ConstraintToAttachment(
            GeoElementId(firstCurve, PointPos::mid),
            GeoElementId::VAxis,
            handler->centerPoint.x,
            obj
        );
    };

    auto constrainty0 = [&]() {
        ConstraintToAttachment(
            GeoElementId(firstCurve, PointPos::mid),
            GeoElementId::HAxis,
            handler->centerPoint.y,
            obj
        );
    };

    auto constraintMajorRadius = [&]() {
        Gui::cmdAppObjectArgs(
            obj,
            "addConstraint(Sketcher.Constraint('Distance',%d,%d,%d,%d,%f)) ",
            majorLine,
            1,
            firstCurve,
            3,
            majorRadius
        );
    };

    // we are constraining the first line not the major line as this is what the user inputs
    auto constraintFirstAngle = [&]() {
        Gui::cmdAppObjectArgs(
            obj,
            "addConstraint(Sketcher.Constraint('Angle',%d,%f)) ",
            (majorRadius == handler->firstRadius()) ? majorLine : minorLine,
            handler->firstAxis().Angle()
        );
    };

    auto constraintMinorRadius = [&]() {
        Gui::cmdAppObjectArgs(
            obj,
            "addConstraint(Sketcher.Constraint('Distance',%d,%d,%d,%d,%f)) ",
            minorLine,
            1,
            firstCurve,
            3,
            minorRadius
        );
    };

    if (handler->AutoConstraints.empty()) {  // No valid diagnosis. Every constraint can be added.
        if (x0set && y0set && handler->centerPoint.IsNull(Precision::Confusion())) {
            ConstraintToAttachment(GeoElementId(firstCurve, PointPos::mid), GeoElementId::RtPnt, 0., obj);
        }
        else {
            if (x0set) {
                constraintx0();
            }

            if (y0set) {
                constrainty0();
            }
        }

        if (majorRadiusSet) {
            constraintMajorRadius();
        }
        if (firstAxisSet) {
            constraintFirstAngle();
        }

        if (minorRadiusSet) {
            constraintMinorRadius();
        }
    }
    else {  // Valid diagnosis. Must check which constraints may be added.
        auto centerPointInfo = handler->getPointInfo(GeoElementId(firstCurve, PointPos::mid));

        if (x0set && centerPointInfo.isXDoF()) {
            constraintx0();

            handler->diagnoseWithAutoConstraints();  // ensure we have recalculated parameters after
                                                     // each constraint addition
            // get updated point position
            centerPointInfo = handler->getPointInfo(GeoElementId(firstCurve, PointPos::mid));
        }

        if (y0set && centerPointInfo.isYDoF()) {
            constrainty0();

            handler->diagnoseWithAutoConstraints();  // ensure we have recalculated parameters after
                                                     // each constraint addition
            // get updated point position
            centerPointInfo = handler->getPointInfo(GeoElementId(firstCurve, PointPos::mid));
        }

        centerPointInfo = handler->getPointInfo(GeoElementId(firstCurve, PointPos::mid));

        int majorDoFs = handler->getLineDoFs(majorLine);

        if (majorRadiusSet && majorDoFs > 0) {
            constraintMajorRadius();
            handler->diagnoseWithAutoConstraints();
            majorDoFs = handler->getLineDoFs(majorLine);
        }

        if (firstAxisSet && majorDoFs > 0 && majorRadius == handler->firstRadius()) {
            constraintFirstAngle();
            handler->diagnoseWithAutoConstraints();
        }

        int minorDoFs = handler->getLineDoFs(minorLine);

        if (minorRadiusSet && minorDoFs > 0) {
            constraintMinorRadius();
            handler->diagnoseWithAutoConstraints();
            minorDoFs = handler->getLineDoFs(minorLine);
        }

        if (firstAxisSet && minorDoFs > 0 && majorRadius != handler->firstRadius()) {
            constraintFirstAngle();
        }
    }
}

}  // namespace SketcherGui
