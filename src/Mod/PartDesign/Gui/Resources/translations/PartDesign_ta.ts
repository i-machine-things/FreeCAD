<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ta" sourcelanguage="en">
  <context>
    <name>App::Property</name>
    <message>
<<<<<<< HEAD
      <location filename="../../../App/FeatureHelix.cpp" line="82"/>
      <source>The center point of the helix' start; derived from the reference axis.</source>
      <translation>எலிக்ச் தொடக்கத்தின் மையப் புள்ளி; குறிப்பு அச்சில் இருந்து பெறப்பட்டது.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="92"/>
      <source>The helix' direction; derived from the reference axis.</source>
      <translation>எலிக்ச் திசை; குறிப்பு அச்சில் இருந்து பெறப்பட்டது.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="99"/>
      <source>The reference axis of the helix.</source>
      <translation>எலிக்சின் குறிப்பு அச்சு.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="106"/>
      <source>The helix input mode specifies which properties are set by the user.
Dependent properties are then calculated.</source>
      <translation>எலிக்ச் உள்ளீட்டு பயன்முறையானது பயனரால் அமைக்கப்படும் பண்புகளைக் குறிப்பிடுகிறது. 
சார்பு பண்புகள் பின்னர் கணக்கிடப்படுகின்றன.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="118"/>
      <source>The axial distance between two turns.</source>
      <translation>இரண்டு திருப்பங்களுக்கு இடையிலான அச்சு தூரம்.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="125"/>
      <source>The height of the helix' path, not accounting for the extent of the profile.</source>
      <translation>எலிக்ச் பாதையின் உயரம், சுயவிவரத்தின் அளவைக் கணக்கிடவில்லை.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="135"/>
      <source>The number of turns in the helix.</source>
      <translation>எலிக்சில் திருப்பங்களின் எண்ணிக்கை.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="143"/>
      <source>The angle of the cone that forms a hull around the helix.
Non-zero values turn the helix into a conical spiral.
Positive values make the radius grow, negative shrinks.</source>
      <translation>எலிக்சைச் சுற்றி ஒரு மேலோட்டத்தை உருவாக்கும் கூம்பின் கோணம். 
பூச்சியமற்ற மதிப்புகள் எலிக்சை ஒரு கூம்பு சுழலாக மாற்றும். 
நேர்மறை மதிப்புகள் ஆரம் வளர செய்கிறது, எதிர்மறை சுருங்குகிறது.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="156"/>
      <source>The growth of the helix' radius per turn.
Non-zero values turn the helix into a conical spiral.</source>
      <translation>ஒரு முறைக்கு எலிக்ச் ஆரம் வளர்ச்சி. 
பூச்சியமற்ற மதிப்புகள் எலிக்சை ஒரு கூம்பு சுழலாக மாற்றும்.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="167"/>
      <source>Sets the turning direction to left handed,
i.e. counter-clockwise when moving along its axis.</source>
      <translation>திரும்பும் திசையை இடது கைக்கு அமைக்கிறது, 
அதாவது அதன் அச்சில் நகரும் போது எதிரெதிர் திசையில்.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="178"/>
      <source>Determines whether the helix points in the opposite direction of the axis.</source>
      <translation>எலிக்ச் அச்சின் எதிர் திசையில் சுட்டிக்காட்டுகிறதா என்பதை தீர்மானிக்கிறது.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="188"/>
      <source>If set, the result will be the intersection of the profile and the preexisting body.</source>
      <translation>அமைக்கப்பட்டால், இதன் விளைவாக சுயவிவரம் மற்றும் ஏற்கனவே இருக்கும் உடலின் குறுக்குவெட்டு இருக்கும்.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="198"/>
      <source>If false, the tool will propose an initial value for the pitch based on the profile bounding box,
so that self intersection is avoided.</source>
      <translation>தவறு எனில், சுயவிவர எல்லைப் பெட்டியின் அடிப்படையில் சுருதிக்கான ஆரம்ப மதிப்பை கருவி முன்மொழியும், 
அதனால் தன்வய குறுக்குவெட்டு தவிர்க்கப்படுகிறது.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="210"/>
      <source>Fusion Tolerance for the Helix, increase if helical shape does not merge nicely with part.</source>
      <translation>எலிக்சிற்கான ஃப்யூசன் சகிப்புத்தன்மை, எலிகல் வடிவம் பகுதியுடன் நன்றாக ஒன்றிணைக்கவில்லை என்றால் அதிகரிக்கும்.</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="108"/>
      <source>Number of gear teeth</source>
      <translation>கியர் பற்களின் எண்ணிக்கை</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="120"/>
      <source>Pressure angle of gear teeth</source>
      <translation>கியர் பற்களின் அழுத்தக் கோணம்</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="114"/>
      <source>Module of the gear</source>
      <translation>கியரின் தொகுதி</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="129"/>
      <source>True=2 curves with each 3 control points, False=1 curve with 4 control points.</source>
      <translation>ஒவ்வொரு 3 கட்டுப்பாட்டுப் புள்ளிகளுடனும் True=2 வளைவுகள், 4 கட்டுப்பாட்டுப் புள்ளிகளுடன் False=1 வளைவு.</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="137"/>
      <source>True=external Gear, False=internal Gear</source>
      <translation>உண்மை = வெளிப்புற கியர், தவறு = உள் கியர்</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="146"/>
      <source>The height of the tooth from the pitch circle up to its tip, normalized by the module.</source>
      <translation>சுருதி வட்டத்திலிருந்து அதன் முனை வரை பல்லின் உயரம், தொகுதி மூலம் இயல்பாக்கப்படுகிறது.</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="155"/>
      <source>The height of the tooth from the pitch circle down to its root, normalized by the module.</source>
      <translation>சுருதி வட்டத்திலிருந்து அதன் வேர் வரை பல்லின் உயரம், தொகுதி மூலம் இயல்பாக்கப்படுகிறது.</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="164"/>
      <source>The radius of the fillet at the root of the tooth, normalized by the module.</source>
      <translation>பல்லின் வேரில் உள்ள ஃபில்லட்டின் ஆரம், தொகுதி மூலம் இயல்பாக்கப்படுகிறது.</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="173"/>
      <source>The distance by which the reference profile is shifted outwards, normalized by the module.</source>
      <translation>குறிப்பு சுயவிவரம் வெளிப்புறமாக மாற்றப்படும் தூரம், தொகுதி மூலம் இயல்பாக்கப்பட்டது.</translation>
=======
      <location filename="../../../App/FeatureHelix.cpp" line="80"/>
      <source>The center point of the helix' start; derived from the reference axis.</source>
      <translation type="unfinished">The center point of the helix' start; derived from the reference axis.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="90"/>
      <source>The helix' direction; derived from the reference axis.</source>
      <translation type="unfinished">The helix' direction; derived from the reference axis.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="97"/>
      <source>The reference axis of the helix.</source>
      <translation type="unfinished">The reference axis of the helix.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="104"/>
      <source>The helix input mode specifies which properties are set by the user.
Dependent properties are then calculated.</source>
      <translation type="unfinished">The helix input mode specifies which properties are set by the user.
Dependent properties are then calculated.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="116"/>
      <source>The axial distance between two turns.</source>
      <translation type="unfinished">The axial distance between two turns.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="123"/>
      <source>The height of the helix' path, not accounting for the extent of the profile.</source>
      <translation type="unfinished">The height of the helix' path, not accounting for the extent of the profile.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="133"/>
      <source>The number of turns in the helix.</source>
      <translation type="unfinished">The number of turns in the helix.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="141"/>
      <source>The angle of the cone that forms a hull around the helix.
Non-zero values turn the helix into a conical spiral.
Positive values make the radius grow, negative shrinks.</source>
      <translation type="unfinished">The angle of the cone that forms a hull around the helix.
Non-zero values turn the helix into a conical spiral.
Positive values make the radius grow, negative shrinks.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="154"/>
      <source>The growth of the helix' radius per turn.
Non-zero values turn the helix into a conical spiral.</source>
      <translation type="unfinished">The growth of the helix' radius per turn.
Non-zero values turn the helix into a conical spiral.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="165"/>
      <source>Sets the turning direction to left handed,
i.e. counter-clockwise when moving along its axis.</source>
      <translation type="unfinished">Sets the turning direction to left handed,
i.e. counter-clockwise when moving along its axis.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="176"/>
      <source>Determines whether the helix points in the opposite direction of the axis.</source>
      <translation type="unfinished">Determines whether the helix points in the opposite direction of the axis.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="186"/>
      <source>If set, the result will be the intersection of the profile and the preexisting body.</source>
      <translation type="unfinished">If set, the result will be the intersection of the profile and the preexisting body.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="196"/>
      <source>If false, the tool will propose an initial value for the pitch based on the profile bounding box,
so that self intersection is avoided.</source>
      <translation type="unfinished">If false, the tool will propose an initial value for the pitch based on the profile bounding box,
so that self intersection is avoided.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="208"/>
      <source>Fusion Tolerance for the Helix, increase if helical shape does not merge nicely with part.</source>
      <translation type="unfinished">Fusion Tolerance for the Helix, increase if helical shape does not merge nicely with part.</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="106"/>
      <source>Number of gear teeth</source>
      <translation type="unfinished">Number of gear teeth</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="118"/>
      <source>Pressure angle of gear teeth</source>
      <translation type="unfinished">Pressure angle of gear teeth</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="112"/>
      <source>Module of the gear</source>
      <translation type="unfinished">Module of the gear</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="127"/>
      <source>True=2 curves with each 3 control points, False=1 curve with 4 control points.</source>
      <translation type="unfinished">True=2 curves with each 3 control points, False=1 curve with 4 control points.</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="135"/>
      <source>True=external Gear, False=internal Gear</source>
      <translation type="unfinished">True=external Gear, False=internal Gear</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="144"/>
      <source>The height of the tooth from the pitch circle up to its tip, normalized by the module.</source>
      <translation type="unfinished">The height of the tooth from the pitch circle up to its tip, normalized by the module.</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="153"/>
      <source>The height of the tooth from the pitch circle down to its root, normalized by the module.</source>
      <translation type="unfinished">The height of the tooth from the pitch circle down to its root, normalized by the module.</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="162"/>
      <source>The radius of the fillet at the root of the tooth, normalized by the module.</source>
      <translation type="unfinished">The radius of the fillet at the root of the tooth, normalized by the module.</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="171"/>
      <source>The distance by which the reference profile is shifted outwards, normalized by the module.</source>
      <translation type="unfinished">The distance by which the reference profile is shifted outwards, normalized by the module.</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignAdditiveHelix</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="1677"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1678"/>
      <source>Additive Helix</source>
      <translation>சேர்க்கை எலிக்ச்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1679"/>
      <source>Sweeps the selected sketch or profile along a helix and adds it to the body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட ச்கெட்ச் அல்லது சுயவிவரத்தை ஒரு எலிக்ச் மூலம் ச்வீப் செய்து உடலில் சேர்க்கிறது</translation>
=======
      <location filename="../../Command.cpp" line="1660"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1661"/>
      <source>Additive Helix</source>
      <translation type="unfinished">Additive Helix</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1662"/>
      <source>Sweeps the selected sketch or profile along a helix and adds it to the body</source>
      <translation type="unfinished">Sweeps the selected sketch or profile along a helix and adds it to the body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignAdditiveLoft</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="1578"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1579"/>
      <source>Additive Loft</source>
      <translation>சேர்க்கை மாடி</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1580"/>
      <source>Lofts the selected sketch or profile along a path and adds it to the body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட ச்கெட்ச் அல்லது சுயவிவரத்தை ஒரு பாதையில் விரித்து, அதை உடலில் சேர்க்கிறது</translation>
=======
      <location filename="../../Command.cpp" line="1561"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1562"/>
      <source>Additive Loft</source>
      <translation type="unfinished">Additive Loft</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1563"/>
      <source>Lofts the selected sketch or profile along a path and adds it to the body</source>
      <translation type="unfinished">Lofts the selected sketch or profile along a path and adds it to the body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignAdditivePipe</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="1478"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1479"/>
      <source>Additive Pipe</source>
      <translation>சேர்க்கை குழாய்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1480"/>
      <source>Sweeps the selected sketch or profile along a path and adds it to the body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட ச்கெட்ச் அல்லது சுயவிவரத்தை ஒரு பாதையில் துடைத்து, அதை உடலில் சேர்க்கிறது</translation>
=======
      <location filename="../../Command.cpp" line="1461"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1462"/>
      <source>Additive Pipe</source>
      <translation type="unfinished">Additive Pipe</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1463"/>
      <source>Sweeps the selected sketch or profile along a path and adds it to the body</source>
      <translation type="unfinished">Sweeps the selected sketch or profile along a path and adds it to the body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignBody</name>
    <message>
<<<<<<< HEAD
      <location filename="../../CommandBody.cpp" line="93"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="94"/>
      <source>New Body</source>
      <translation>புதிய உடல்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="95"/>
      <source>Creates a new body and activates it</source>
      <translation>ஒரு புதிய உடலை உருவாக்கி அதை செயல்படுத்துகிறது</translation>
=======
      <location filename="../../CommandBody.cpp" line="90"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="91"/>
      <source>New Body</source>
      <translation type="unfinished">New Body</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="92"/>
      <source>Creates a new body and activates it</source>
      <translation type="unfinished">Creates a new body and activates it</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignBoolean</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="2599"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2600"/>
      <source>Boolean Operation</source>
      <translation>பூலியன் ஆபரேசன்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2601"/>
      <source>Applies boolean operations with the selected objects and the active body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட பொருள்கள் மற்றும் செயலில் உள்ள உடலுடன் பூலியன் செயல்பாடுகளைப் பயன்படுத்துகிறது</translation>
=======
      <location filename="../../Command.cpp" line="2576"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2577"/>
      <source>Boolean Operation</source>
      <translation type="unfinished">Boolean Operation</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2578"/>
      <source>Applies boolean operations with the selected objects and the active body</source>
      <translation type="unfinished">Applies boolean operations with the selected objects and the active body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignCS</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="283"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="284"/>
      <source>Local Coordinate System</source>
      <translation>உள்ளக ஒருங்கிணைப்பு அமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="285"/>
      <source>Creates a new local coordinate system</source>
      <translation>புதிய உள்ளக ஒருங்கிணைப்பு அமைப்பை உருவாக்குகிறது</translation>
=======
      <location filename="../../Command.cpp" line="279"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="280"/>
      <source>Local Coordinate System</source>
      <translation type="unfinished">Local Coordinate System</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="281"/>
      <source>Creates a new local coordinate system</source>
      <translation type="unfinished">Creates a new local coordinate system</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignChamfer</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="2005"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2006"/>
      <source>Chamfer</source>
      <translation>முளைமுழுக்கல்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2007"/>
      <source>Applies a chamfer to the selected edges or faces</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட விளிம்புகள் அல்லது முகங்களுக்கு சேம்பரைப் பயன்படுத்துகிறது</translation>
=======
      <location filename="../../Command.cpp" line="1987"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1988"/>
      <source>Chamfer</source>
      <translation type="unfinished">Chamfer</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1989"/>
      <source>Applies a chamfer to the selected edges or faces</source>
      <translation type="unfinished">Applies a chamfer to the selected edges or faces</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignClone</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="493"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="494"/>
      <source>Clone</source>
      <translation>நகலி</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="495"/>
      <source>Copies a solid object parametrically as the base feature of a new body</source>
      <translation>ஒரு புதிய உடலின் அடிப்படை அம்சமாக ஒரு திடமான பொருளை அளவுருவாக நகலெடுக்கிறது</translation>
=======
      <location filename="../../Command.cpp" line="489"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="490"/>
      <source>Clone</source>
      <translation type="unfinished">Clone</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="491"/>
      <source>Copies a solid object parametrically as the base feature of a new body</source>
      <translation type="unfinished">Copies a solid object parametrically as the base feature of a new body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignDraft</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="2034"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2035"/>
      <source>Draft</source>
      <translation>வரைவு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2036"/>
      <source>Applies a draft to the selected faces</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட முகங்களுக்கு வரைவைப் பயன்படுத்துகிறது</translation>
=======
      <location filename="../../Command.cpp" line="2016"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2017"/>
      <source>Draft</source>
      <translation type="unfinished">Draft</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2018"/>
      <source>Applies a draft to the selected faces</source>
      <translation type="unfinished">Applies a draft to the selected faces</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignDuplicateSelection</name>
    <message>
<<<<<<< HEAD
      <location filename="../../CommandBody.cpp" line="754"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="755"/>
      <source>Duplicate &amp;Object</source>
      <translation>நகல் &amp;பொருள்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="756"/>
      <source>Duplicates the selected object and adds it to the active body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட பொருளை நகலெடுத்து செயலில் உள்ள உடலில் சேர்க்கிறது</translation>
=======
      <location filename="../../CommandBody.cpp" line="755"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="756"/>
      <source>Duplicate &amp;Object</source>
      <translation type="unfinished">Duplicate &amp;Object</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="757"/>
      <source>Duplicates the selected object and adds it to the active body</source>
      <translation type="unfinished">Duplicates the selected object and adds it to the active body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignFillet</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="1977"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1978"/>
      <source>Fillet</source>
      <translation>ஃபில்லட்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1979"/>
      <source>Applies a fillet to the selected edges or faces</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட விளிம்புகள் அல்லது முகங்களுக்கு ஃபில்லட்டைப் பயன்படுத்துகிறது</translation>
=======
      <location filename="../../Command.cpp" line="1959"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1960"/>
      <source>Fillet</source>
      <translation type="unfinished">Fillet</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1961"/>
      <source>Applies a fillet to the selected edges or faces</source>
      <translation type="unfinished">Applies a fillet to the selected edges or faces</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignGroove</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="1408"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1409"/>
      <source>Groove</source>
      <translation>பள்ளம்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1410"/>
      <source>Revolves the sketch or profile around a line or axis and removes it from the body</source>
      <translation>ஒரு கோடு அல்லது அச்சில் ச்கெட்ச் அல்லது சுயவிவரத்தை சுழற்றுகிறது மற்றும் அதை உடலில் இருந்து நீக்குகிறது</translation>
=======
      <location filename="../../Command.cpp" line="1391"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1392"/>
      <source>Groove</source>
      <translation type="unfinished">Groove</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1393"/>
      <source>Revolves the sketch or profile around a line or axis and removes it from the body</source>
      <translation type="unfinished">Revolves the sketch or profile around a line or axis and removes it from the body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignHole</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="1301"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1302"/>
      <source>Hole</source>
      <translation>துளை</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1304"/>
      <source>Creates holes in the active body at the center points of circles or arcs of the selected sketch or profile</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட ச்கெட்ச் அல்லது சுயவிவரத்தின் வட்டங்கள் அல்லது வளைவுகளின் மையப் புள்ளிகளில் செயலில் உள்ள உடலில் துளைகளை உருவாக்குகிறது</translation>
=======
      <location filename="../../Command.cpp" line="1284"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1285"/>
      <source>Hole</source>
      <translation type="unfinished">Hole</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1287"/>
      <source>Creates holes in the active body at the center points of circles or arcs of the selected sketch or profile</source>
      <translation type="unfinished">Creates holes in the active body at the center points of circles or arcs of the selected sketch or profile</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignLine</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="223"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="224"/>
      <source>Datum Line</source>
      <translation>டேட்டம் லைன்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="225"/>
      <source>Creates a new datum line</source>
      <translation>புதிய டேட்டம் லைனை உருவாக்குகிறது</translation>
=======
      <location filename="../../Command.cpp" line="219"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="220"/>
      <source>Datum Line</source>
      <translation type="unfinished">Datum Line</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="221"/>
      <source>Creates a new datum line</source>
      <translation type="unfinished">Creates a new datum line</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignLinearPattern</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="2289"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2290"/>
      <source>Linear Pattern</source>
      <translation>நேரியல் முறை</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2291"/>
      <source>Duplicates the selected features or the active body in a linear pattern</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட நற்பொருத்தங்கள் அல்லது செயலில் உள்ள உடலை நேரியல் வடிவத்தில் நகலெடுக்கிறது</translation>
=======
      <location filename="../../Command.cpp" line="2271"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2272"/>
      <source>Linear Pattern</source>
      <translation type="unfinished">Linear Pattern</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2273"/>
      <source>Duplicates the selected features or the active body in a linear pattern</source>
      <translation type="unfinished">Duplicates the selected features or the active body in a linear pattern</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignMigrate</name>
    <message>
<<<<<<< HEAD
      <location filename="../../CommandBody.cpp" line="389"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="390"/>
      <source>Migrate</source>
      <translation>இடம்பெயரும்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="391"/>
      <source>Migrates the document to the modern Part Design workflow</source>
      <translation>ஆவணத்தை நவீன பகுதி வடிவமைப்பு பணிப்பாய்வுக்கு மாற்றுகிறது</translation>
=======
      <location filename="../../CommandBody.cpp" line="385"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="386"/>
      <source>Migrate</source>
      <translation type="unfinished">Migrate</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="387"/>
      <source>Migrates the document to the modern Part Design workflow</source>
      <translation type="unfinished">Migrates the document to the modern Part Design workflow</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignMirrored</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="2232"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2233"/>
=======
      <location filename="../../Command.cpp" line="2214"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2215"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Mirror</source>
      <translation>கண்ணாடி</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="2234"/>
      <source>Mirrors the selected features or active body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட நற்பொருத்தங்கள் அல்லது செயலில் உள்ள உடலைப் பிரதிபலிக்கிறது</translation>
=======
      <location filename="../../Command.cpp" line="2216"/>
      <source>Mirrors the selected features or active body</source>
      <translation type="unfinished">Mirrors the selected features or active body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignMoveFeature</name>
    <message>
<<<<<<< HEAD
      <location filename="../../CommandBody.cpp" line="822"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="823"/>
      <source>Move Object To…</source>
      <translation>பொருளை நகர்த்து…</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="824"/>
      <source>Moves the selected object to another body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட பொருளை மற்றொரு உடலுக்கு நகர்த்துகிறது</translation>
=======
      <location filename="../../CommandBody.cpp" line="821"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="822"/>
      <source>Move Object To…</source>
      <translation type="unfinished">Move Object To…</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="823"/>
      <source>Moves the selected object to another body</source>
      <translation type="unfinished">Moves the selected object to another body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignMoveFeatureInTree</name>
    <message>
<<<<<<< HEAD
      <location filename="../../CommandBody.cpp" line="1019"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1020"/>
      <source>Move Feature After…</source>
      <translation>பிறகு அம்சத்தை நகர்த்து...</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1021"/>
      <source>Moves the selected feature after another feature in the same body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட அம்சத்தை அதே உடலில் உள்ள மற்றொரு அம்சத்திற்குப் பிறகு நகர்த்துகிறது</translation>
=======
      <location filename="../../CommandBody.cpp" line="1016"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1017"/>
      <source>Move Feature After…</source>
      <translation type="unfinished">Move Feature After…</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1018"/>
      <source>Moves the selected feature after another feature in the same body</source>
      <translation type="unfinished">Moves the selected feature after another feature in the same body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignMoveTip</name>
    <message>
<<<<<<< HEAD
      <location filename="../../CommandBody.cpp" line="655"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="656"/>
      <source>Set Tip</source>
      <translation>உதவிக்குறிப்பை அமைக்கவும்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="657"/>
      <source>Moves the tip of the body to the selected feature</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட அம்சத்திற்கு உடலின் நுனியை நகர்த்துகிறது</translation>
=======
      <location filename="../../CommandBody.cpp" line="658"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="659"/>
      <source>Set Tip</source>
      <translation type="unfinished">Set Tip</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="660"/>
      <source>Moves the tip of the body to the selected feature</source>
      <translation type="unfinished">Moves the tip of the body to the selected feature</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignMultiTransform</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="2468"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2469"/>
      <source>Multi-Transform</source>
      <translation>பல உருமாற்றம்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2470"/>
      <source>Applies multiple transformations to the selected features or active body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட நற்பொருத்தங்கள் அல்லது செயலில் உள்ள உடலுக்கு பல மாற்றங்களைப் பயன்படுத்துகிறது</translation>
=======
      <location filename="../../Command.cpp" line="2445"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2446"/>
      <source>Multi-Transform</source>
      <translation type="unfinished">Multi-Transform</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2447"/>
      <source>Applies multiple transformations to the selected features or active body</source>
      <translation type="unfinished">Applies multiple transformations to the selected features or active body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignNewSketch</name>
    <message>
      <location filename="../../Command.cpp" line="573"/>
      <source>PartDesign</source>
<<<<<<< HEAD
      <translation>பகுதி வடிவமைப்பு</translation>
=======
      <translation type="unfinished">PartDesign</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../Command.cpp" line="574"/>
      <source>New Sketch</source>
<<<<<<< HEAD
      <translation>புதிய ச்கெட்ச்</translation>
=======
      <translation type="unfinished">New Sketch</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../Command.cpp" line="575"/>
      <source>Creates a new sketch</source>
<<<<<<< HEAD
      <translation>புதிய ஓவியத்தை உருவாக்குகிறது</translation>
=======
      <translation type="unfinished">Creates a new sketch</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignPad</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="1243"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1244"/>
      <source>Pad</source>
      <translation>நிரப்பிடம்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1245"/>
      <source>Extrudes the selected sketch or profile and adds it to the body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட ச்கெட்ச் அல்லது சுயவிவரத்தை நீட்டி, அதை உடலில் சேர்க்கிறது</translation>
=======
      <location filename="../../Command.cpp" line="1226"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1227"/>
      <source>Pad</source>
      <translation type="unfinished">Pad</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1228"/>
      <source>Extrudes the selected sketch or profile and adds it to the body</source>
      <translation type="unfinished">Extrudes the selected sketch or profile and adds it to the body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignPlane</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="193"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="194"/>
      <source>Datum Plane</source>
      <translation>டேட்டம் வானூர்தி</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="195"/>
      <source>Creates a new datum plane</source>
      <translation>புதிய டேட்டம் விமானத்தை உருவாக்குகிறது</translation>
=======
      <location filename="../../Command.cpp" line="189"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="190"/>
      <source>Datum Plane</source>
      <translation type="unfinished">Datum Plane</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="191"/>
      <source>Creates a new datum plane</source>
      <translation type="unfinished">Creates a new datum plane</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignPocket</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="1272"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1273"/>
      <source>Pocket</source>
      <translation>பாக்கெட்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1274"/>
      <source>Extrudes the selected sketch or profile and removes it from the body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட ச்கெட்ச் அல்லது சுயவிவரத்தை வெளியேற்றி, அதை உடலில் இருந்து நீக்குகிறது</translation>
=======
      <location filename="../../Command.cpp" line="1255"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1256"/>
      <source>Pocket</source>
      <translation type="unfinished">Pocket</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1257"/>
      <source>Extrudes the selected sketch or profile and removes it from the body</source>
      <translation type="unfinished">Extrudes the selected sketch or profile and removes it from the body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignPoint</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="253"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="254"/>
      <source>Datum Point</source>
      <translation>டேட்டம் பாயிண்ட்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="255"/>
      <source>Creates a new datum point</source>
      <translation>புதிய தரவு புள்ளியை உருவாக்குகிறது</translation>
=======
      <location filename="../../Command.cpp" line="249"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="250"/>
      <source>Datum Point</source>
      <translation type="unfinished">Datum Point</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="251"/>
      <source>Creates a new datum point</source>
      <translation type="unfinished">Creates a new datum point</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignPolarPattern</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="2363"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2364"/>
      <source>Polar Pattern</source>
      <translation>போலார் பேட்டர்ன்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2365"/>
      <source>Duplicates the selected features or the active body in a circular pattern</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட அம்சங்களை அல்லது செயலில் உள்ள உடலை வட்ட வடிவில் நகலெடுக்கிறது</translation>
=======
      <location filename="../../Command.cpp" line="2340"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2341"/>
      <source>Polar Pattern</source>
      <translation type="unfinished">Polar Pattern</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2342"/>
      <source>Duplicates the selected features or the active body in a circular pattern</source>
      <translation type="unfinished">Duplicates the selected features or the active body in a circular pattern</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignRevolution</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="1346"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1347"/>
      <source>Revolve</source>
      <translation>சுழலும்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1348"/>
      <source>Revolves the selected sketch or profile around a line or axis and adds it to the body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட ச்கெட்ச் அல்லது சுயவிவரத்தை ஒரு கோடு அல்லது அச்சில் சுழற்றி அதை உடலில் சேர்க்கிறது</translation>
=======
      <location filename="../../Command.cpp" line="1329"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1330"/>
      <source>Revolve</source>
      <translation type="unfinished">Revolve</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1331"/>
      <source>Revolves the selected sketch or profile around a line or axis and adds it to the body</source>
      <translation type="unfinished">Revolves the selected sketch or profile around a line or axis and adds it to the body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignScaled</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="2425"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2426"/>
      <source>Scale</source>
      <translation>அளவுகோல்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2427"/>
      <source>Scales the selected features or the active body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட அம்சங்களை அல்லது செயலில் உள்ள உடலை அளவிடுகிறது</translation>
=======
      <location filename="../../Command.cpp" line="2402"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2403"/>
      <source>Scale</source>
      <translation type="unfinished">Scale</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2404"/>
      <source>Scales the selected features or the active body</source>
      <translation type="unfinished">Scales the selected features or the active body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignShapeBinder</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="317"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="318"/>
      <source>Shape Binder</source>
      <translation>வடிவ பைண்டர்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="319"/>
      <source>Creates a new shape binder</source>
      <translation>புதிய வடிவ பைண்டரை உருவாக்குகிறது</translation>
=======
      <location filename="../../Command.cpp" line="313"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="314"/>
      <source>Shape Binder</source>
      <translation type="unfinished">Shape Binder</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="315"/>
      <source>Creates a new shape binder</source>
      <translation type="unfinished">Creates a new shape binder</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignSubShapeBinder</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="387"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="388"/>
      <source>Sub-Shape Binder</source>
      <translation>துணை வடிவ பைண்டர்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="389"/>
      <source>Creates a reference to geometry from one or more objects, allowing it to be used inside or outside a body. It tracks relative placements, supports multiple geometry types (solids, faces, edges, vertices), and can work with objects in the same or external documents.</source>
      <translation>ஒன்று அல்லது அதற்கு மேற்பட்ட பொருட்களிலிருந்து வடிவவியலுக்கு ஒரு குறிப்பை உருவாக்குகிறது, இது உடலின் உள்ளே அல்லது வெளியே பயன்படுத்த அனுமதிக்கிறது. இது தொடர்புடைய இடங்களை கண்காணிக்கிறது, பல வடிவியல் வகைகளை (திடங்கள், முகங்கள், விளிம்புகள், செங்குத்துகள்) ஆதரிக்கிறது மற்றும் அதே அல்லது வெளிப்புற ஆவணங்களில் உள்ள பொருட்களுடன் வேலை செய்ய முடியும்.</translation>
=======
      <location filename="../../Command.cpp" line="383"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="384"/>
      <source>Sub-Shape Binder</source>
      <translation type="unfinished">Sub-Shape Binder</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="385"/>
      <source>Creates a reference to geometry from one or more objects, allowing it to be used inside or outside a body. It tracks relative placements, supports multiple geometry types (solids, faces, edges, vertices), and can work with objects in the same or external documents.</source>
      <translation type="unfinished">Creates a reference to geometry from one or more objects, allowing it to be used inside or outside a body. It tracks relative placements, supports multiple geometry types (solids, faces, edges, vertices), and can work with objects in the same or external documents.</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignSubtractiveHelix</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="1761"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1762"/>
      <source>Subtractive Helix</source>
      <translation>கழித்தல் எலிக்ச்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1763"/>
      <source>Sweeps the selected sketch or profile along a helix and removes it from the body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட ச்கெட்ச் அல்லது சுயவிவரத்தை ஒரு எலிக்ச் மூலம் துடைத்து உடலில் இருந்து அகற்றும்</translation>
=======
      <location filename="../../Command.cpp" line="1744"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1745"/>
      <source>Subtractive Helix</source>
      <translation type="unfinished">Subtractive Helix</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1746"/>
      <source>Sweeps the selected sketch or profile along a helix and removes it from the body</source>
      <translation type="unfinished">Sweeps the selected sketch or profile along a helix and removes it from the body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignSubtractiveLoft</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="1628"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1629"/>
      <source>Subtractive Loft</source>
      <translation>கழித்தல் மாடி</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1630"/>
      <source>Lofts the selected sketch or profile along a path and removes it from the body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட ச்கெட்ச் அல்லது சுயவிவரத்தை ஒரு பாதையில் விரித்து, அதை உடலில் இருந்து அகற்றும்</translation>
=======
      <location filename="../../Command.cpp" line="1611"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1612"/>
      <source>Subtractive Loft</source>
      <translation type="unfinished">Subtractive Loft</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1613"/>
      <source>Lofts the selected sketch or profile along a path and removes it from the body</source>
      <translation type="unfinished">Lofts the selected sketch or profile along a path and removes it from the body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignSubtractivePipe</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="1528"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1529"/>
      <source>Subtractive Pipe</source>
      <translation>கழித்தல் குழாய்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1530"/>
      <source>Sweeps the selected sketch or profile along a path and removes it from the body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட ச்கெட்ச் அல்லது சுயவிவரத்தை ஒரு பாதையில் துடைத்து உடலில் இருந்து அகற்றும்</translation>
=======
      <location filename="../../Command.cpp" line="1511"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1512"/>
      <source>Subtractive Pipe</source>
      <translation type="unfinished">Subtractive Pipe</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1513"/>
      <source>Sweeps the selected sketch or profile along a path and removes it from the body</source>
      <translation type="unfinished">Sweeps the selected sketch or profile along a path and removes it from the body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignThickness</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="2104"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2105"/>
      <source>Thickness</source>
      <translation>தடிமன்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2106"/>
      <source>Applies thickness and removes the selected faces</source>
      <translation>தடிமனைப் பயன்படுத்துகிறது மற்றும் தேர்ந்தெடுக்கப்பட்ட முகங்களை நீக்குகிறது</translation>
=======
      <location filename="../../Command.cpp" line="2086"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2087"/>
      <source>Thickness</source>
      <translation type="unfinished">Thickness</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2088"/>
      <source>Applies thickness and removes the selected faces</source>
      <translation type="unfinished">Applies thickness and removes the selected faces</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPrimtiveCompAdditive</name>
    <message>
<<<<<<< HEAD
      <location filename="../../CommandPrimitive.cpp" line="76"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="77"/>
      <source>Additive Primitive</source>
      <translation>சேர்க்கை முதற்பொருள்</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="78"/>
      <source>Creates an additive primitive</source>
      <translation>ஒரு சேர்க்கை பழமையான உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="215"/>
      <source>Additive Box</source>
      <translation>சேர்க்கை பெட்டி</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="224"/>
      <source>Additive Cylinder</source>
      <translation>சேர்க்கை சிலிண்டர்</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="233"/>
      <source>Additive Sphere</source>
      <translation>சேர்க்கை கோளம்</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="242"/>
      <source>Additive Cone</source>
      <translation>சேர்க்கை கூம்பு</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="248"/>
      <source>Additive Ellipsoid</source>
      <translation>எலிப்சாய்டு சேர்க்கை</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="254"/>
      <source>Additive Torus</source>
      <translation>சேர்க்கை டோரச்</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="260"/>
      <source>Additive Prism</source>
      <translation>சேர்க்கை ப்ரிசம்</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="266"/>
      <source>Additive Wedge</source>
      <translation>சேர்க்கை ஆப்பு</translation>
=======
      <location filename="../../CommandPrimitive.cpp" line="74"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="75"/>
      <source>Additive Primitive</source>
      <translation type="unfinished">Additive Primitive</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="76"/>
      <source>Creates an additive primitive</source>
      <translation type="unfinished">Creates an additive primitive</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="213"/>
      <source>Additive Box</source>
      <translation type="unfinished">Additive Box</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="222"/>
      <source>Additive Cylinder</source>
      <translation type="unfinished">Additive Cylinder</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="231"/>
      <source>Additive Sphere</source>
      <translation type="unfinished">Additive Sphere</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="240"/>
      <source>Additive Cone</source>
      <translation type="unfinished">Additive Cone</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="246"/>
      <source>Additive Ellipsoid</source>
      <translation type="unfinished">Additive Ellipsoid</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="252"/>
      <source>Additive Torus</source>
      <translation type="unfinished">Additive Torus</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="258"/>
      <source>Additive Prism</source>
      <translation type="unfinished">Additive Prism</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="264"/>
      <source>Additive Wedge</source>
      <translation type="unfinished">Additive Wedge</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPrimtiveCompSubtractive</name>
    <message>
<<<<<<< HEAD
      <location filename="../../CommandPrimitive.cpp" line="284"/>
      <source>PartDesign</source>
      <translation>பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="285"/>
      <source>Subtractive Primitive</source>
      <translation>கழித்தல் ஆதிகாலம்</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="286"/>
      <source>Creates a subtractive primitive</source>
      <translation>கழித்தல் பழமையான ஒன்றை உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="400"/>
      <source>Subtractive Box</source>
      <translation>கழித்தல் பெட்டி</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="409"/>
      <source>Subtractive Cylinder</source>
      <translation>கழித்தல் சிலிண்டர்</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="418"/>
      <source>Subtractive Sphere</source>
      <translation>கழித்தல் கோளம்</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="427"/>
      <source>Subtractive Cone</source>
      <translation>கழித்தல் கூம்பு</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="433"/>
      <source>Subtractive Ellipsoid</source>
      <translation>கழித்தல் நீள்வட்டம்</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="439"/>
      <source>Subtractive Torus</source>
      <translation>கழித்தல் டோரச்</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="445"/>
      <source>Subtractive Prism</source>
      <translation>கழித்தல் பிரிசம்</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="451"/>
      <source>Subtractive Wedge</source>
      <translation>கழித்தல் ஆப்பு</translation>
=======
      <location filename="../../CommandPrimitive.cpp" line="282"/>
      <source>PartDesign</source>
      <translation type="unfinished">PartDesign</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="283"/>
      <source>Subtractive Primitive</source>
      <translation type="unfinished">Subtractive Primitive</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="284"/>
      <source>Creates a subtractive primitive</source>
      <translation type="unfinished">Creates a subtractive primitive</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="398"/>
      <source>Subtractive Box</source>
      <translation type="unfinished">Subtractive Box</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="407"/>
      <source>Subtractive Cylinder</source>
      <translation type="unfinished">Subtractive Cylinder</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="416"/>
      <source>Subtractive Sphere</source>
      <translation type="unfinished">Subtractive Sphere</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="425"/>
      <source>Subtractive Cone</source>
      <translation type="unfinished">Subtractive Cone</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="431"/>
      <source>Subtractive Ellipsoid</source>
      <translation type="unfinished">Subtractive Ellipsoid</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="437"/>
      <source>Subtractive Torus</source>
      <translation type="unfinished">Subtractive Torus</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="443"/>
      <source>Subtractive Prism</source>
      <translation type="unfinished">Subtractive Prism</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="449"/>
      <source>Subtractive Wedge</source>
      <translation type="unfinished">Subtractive Wedge</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>Command</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="339"/>
      <source>Edit Shape Binder</source>
      <translation>வடிவ பைண்டரைத் திருத்து</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="350"/>
      <source>Create Shape Binder</source>
      <translation>வடிவ பைண்டரை உருவாக்கவும்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="443"/>
      <source>Create Sub-Shape Binder</source>
      <translation>துணை வடிவ பைண்டரை உருவாக்கவும்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="513"/>
      <source>Create Clone</source>
      <translation>நகலியை உருவாக்கவும்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1127"/>
      <source>Make Copy</source>
      <translation>நகலெடுக்கவும்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2523"/>
      <source>Convert to Multi-Transform feature</source>
      <translation>மல்டி-ட்ரான்ச்ஃபார்ம் அம்சத்திற்கு மாற்றவும்</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="266"/>
      <source>Sketch on Face</source>
      <translation>முகத்தில் ச்கெட்ச்</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="328"/>
      <source>Make copy</source>
      <translation>நகலெடுக்கவும்</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="530"/>
      <location filename="../../SketchWorkflow.cpp" line="807"/>
      <source>New Sketch</source>
      <translation>புதிய ச்கெட்ச்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2620"/>
      <source>Create Boolean</source>
      <translation>பூலியன் உருவாக்கவும்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="221"/>
      <location filename="../../DlgActiveBody.cpp" line="102"/>
      <source>Add a Body</source>
      <translation>ஒரு உடலைச் சேர்க்கவும்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="526"/>
      <source>Migrate legacy Part Design features to bodies</source>
      <translation>மரபு பகுதி வடிவமைப்பு அம்சங்களை உடல்களுக்கு நகர்த்தவும்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="768"/>
      <source>Duplicate a Part Design object</source>
      <translation>ஒரு பகுதி வடிவமைப்பு பொருளை நகலெடுக்கவும்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1113"/>
      <source>Move a feature inside body</source>
      <translation>உடலின் உள்ளே ஒரு அம்சத்தை நகர்த்தவும்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="722"/>
      <source>Move tip to selected feature</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட அம்சத்திற்கு உதவிக்குறிப்பை நகர்த்தவும்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="927"/>
      <source>Move an object</source>
      <translation>ஒரு பொருளை நகர்த்தவும்</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="261"/>
=======
      <location filename="../../Command.cpp" line="335"/>
      <source>Edit Shape Binder</source>
      <translation type="unfinished">Edit Shape Binder</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="346"/>
      <source>Create Shape Binder</source>
      <translation type="unfinished">Create Shape Binder</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="439"/>
      <source>Create Sub-Shape Binder</source>
      <translation type="unfinished">Create Sub-Shape Binder</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="508"/>
      <source>Create Clone</source>
      <translation type="unfinished">Create Clone</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1110"/>
      <source>Make Copy</source>
      <translation type="unfinished">Make Copy</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2500"/>
      <source>Convert to Multi-Transform feature</source>
      <translation type="unfinished">Convert to Multi-Transform feature</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="253"/>
      <source>Sketch on Face</source>
      <translation type="unfinished">Sketch on Face</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="314"/>
      <source>Make copy</source>
      <translation type="unfinished">Make copy</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="516"/>
      <location filename="../../SketchWorkflow.cpp" line="772"/>
      <source>New Sketch</source>
      <translation type="unfinished">New Sketch</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2597"/>
      <source>Create Boolean</source>
      <translation type="unfinished">Create Boolean</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="222"/>
      <location filename="../../DlgActiveBody.cpp" line="101"/>
      <source>Add a Body</source>
      <translation type="unfinished">Add a Body</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="523"/>
      <source>Migrate legacy Part Design features to bodies</source>
      <translation type="unfinished">Migrate legacy Part Design features to bodies</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="769"/>
      <source>Duplicate a Part Design object</source>
      <translation type="unfinished">Duplicate a Part Design object</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1110"/>
      <source>Move a feature inside body</source>
      <translation type="unfinished">Move a feature inside body</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="723"/>
      <source>Move tip to selected feature</source>
      <translation type="unfinished">Move tip to selected feature</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="926"/>
      <source>Move an object</source>
      <translation type="unfinished">Move an object</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="258"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Mirror</source>
      <translation>கண்ணாடி</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskMultiTransformParameters.cpp" line="301"/>
      <source>Linear Pattern</source>
      <translation>நேரியல் முறை</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="350"/>
      <source>Polar Pattern</source>
      <translation>போலார் பேட்டர்ன்</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="389"/>
      <source>Scale</source>
      <translation>அளவுகோல்</translation>
=======
      <location filename="../../TaskMultiTransformParameters.cpp" line="298"/>
      <source>Linear Pattern</source>
      <translation type="unfinished">Linear Pattern</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="347"/>
      <source>Polar Pattern</source>
      <translation type="unfinished">Polar Pattern</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="386"/>
      <source>Scale</source>
      <translation type="unfinished">Scale</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>Gui::TaskView::TaskWatcherCommands</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Workbench.cpp" line="55"/>
      <source>Face Tools</source>
      <translation>முகம் கருவிகள்</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="56"/>
      <source>Edge Tools</source>
      <translation>எட்ச் கருவிகள்</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="57"/>
      <source>Boolean Tools</source>
      <translation>பூலியன் கருவிகள்</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="58"/>
      <source>Helper Tools</source>
      <translation>உதவி கருவிகள்</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="59"/>
      <source>Modeling Tools</source>
      <translation>மாடலிங் கருவிகள்</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="60"/>
      <source>Create Geometry</source>
      <translation>வடிவவியலை உருவாக்கவும்</translation>
=======
      <location filename="../../Workbench.cpp" line="53"/>
      <source>Face Tools</source>
      <translation type="unfinished">Face Tools</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="54"/>
      <source>Edge Tools</source>
      <translation type="unfinished">Edge Tools</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="55"/>
      <source>Boolean Tools</source>
      <translation type="unfinished">Boolean Tools</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="56"/>
      <source>Helper Tools</source>
      <translation type="unfinished">Helper Tools</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="57"/>
      <source>Modeling Tools</source>
      <translation type="unfinished">Modeling Tools</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="58"/>
      <source>Create Geometry</source>
      <translation type="unfinished">Create Geometry</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>InvoluteGearParameter</name>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="14"/>
      <source>Involute Parameter</source>
<<<<<<< HEAD
      <translation>Involute அளவுரு</translation>
=======
      <translation type="unfinished">Involute Parameter</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="20"/>
      <source>Number of teeth</source>
<<<<<<< HEAD
      <translation>பற்களின் எண்ணிக்கை</translation>
=======
      <translation type="unfinished">Number of teeth</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="40"/>
      <source>Module</source>
<<<<<<< HEAD
      <translation>தொகுதி</translation>
=======
      <translation type="unfinished">Module</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="84"/>
      <source>Pressure angle</source>
<<<<<<< HEAD
      <translation>அழுத்தம் கோணம்</translation>
=======
      <translation type="unfinished">Pressure angle</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="125"/>
      <source>High precision</source>
<<<<<<< HEAD
      <translation>உயர் துல்லியம்</translation>
=======
      <translation type="unfinished">High precision</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="139"/>
      <location filename="../../../InvoluteGearFeature.ui" line="166"/>
      <source>True</source>
<<<<<<< HEAD
      <translation>உண்மை</translation>
=======
      <translation type="unfinished">True</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="144"/>
      <location filename="../../../InvoluteGearFeature.ui" line="171"/>
      <source>False</source>
<<<<<<< HEAD
      <translation>பொய்</translation>
=======
      <translation type="unfinished">False</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="152"/>
      <source>External gear</source>
<<<<<<< HEAD
      <translation>வெளிப்புற கியர்</translation>
=======
      <translation type="unfinished">External gear</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="179"/>
      <source>Addendum coefficient</source>
<<<<<<< HEAD
      <translation>குணகம் சேர்க்கப்பட வேண்டும்</translation>
=======
      <translation type="unfinished">Addendum coefficient</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="199"/>
      <source>Dedendum coefficient</source>
<<<<<<< HEAD
      <translation>குணகம் கொடுக்கப்பட வேண்டும்</translation>
=======
      <translation type="unfinished">Dedendum coefficient</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="219"/>
      <source>Root fillet coefficient</source>
<<<<<<< HEAD
      <translation>ரூட் ஃபில்லட் குணகம்</translation>
=======
      <translation type="unfinished">Root fillet coefficient</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="239"/>
      <source>Profile shift coefficient</source>
<<<<<<< HEAD
      <translation>சுயவிவர மாற்ற குணகம்</translation>
=======
      <translation type="unfinished">Profile shift coefficient</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::DlgActiveBody</name>
    <message>
      <location filename="../../DlgActiveBody.ui" line="14"/>
      <source>Active Body Required</source>
<<<<<<< HEAD
      <translation>செயலில் உள்ள உடல் தேவை</translation>
=======
      <translation type="unfinished">Active Body Required</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../DlgActiveBody.ui" line="20"/>
      <source>To create a new Part Design object, there must be an active body in the document.
Select a body from below, or create a new body.</source>
<<<<<<< HEAD
      <translation>ஒரு புதிய பகுதி வடிவமைப்பு பொருளை உருவாக்க, ஆவணத்தில் செயலில் உள்ள அமைப்பு இருக்க வேண்டும். 
கீழே இருந்து ஒரு உடலைத் தேர்ந்தெடுக்கவும் அல்லது புதிய உடலை உருவாக்கவும்.</translation>
=======
      <translation type="unfinished">To create a new Part Design object, there must be an active body in the document.
Select a body from below, or create a new body.</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../DlgActiveBody.ui" line="35"/>
      <source>Create New Body</source>
<<<<<<< HEAD
      <translation>புதிய உடலை உருவாக்குங்கள்</translation>
    </message>
    <message>
      <location filename="../../DlgActiveBody.cpp" line="53"/>
      <source>Select an active body</source>
      <translation type="unfinished">Select an active body</translation>
=======
      <translation type="unfinished">Create New Body</translation>
    </message>
    <message>
      <location filename="../../DlgActiveBody.cpp" line="52"/>
      <source>Please select</source>
      <translation type="unfinished">Please select</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::DlgPrimitives</name>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="14"/>
      <source>Geometric Primitives</source>
<<<<<<< HEAD
      <translation>வடிவியல் முதற்பொருள்கள்</translation>
=======
      <translation type="unfinished">Geometric Primitives</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="307"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="314"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1274"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1281"/>
      <source>Angle in first direction</source>
<<<<<<< HEAD
      <translation>முதல் திசையில் கோணம்</translation>
=======
      <translation type="unfinished">Angle in first direction</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="333"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="340"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1300"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1307"/>
      <source>Angle in second direction</source>
<<<<<<< HEAD
      <translation>இரண்டாவது திசையில் கோணம்</translation>
=======
      <translation type="unfinished">Angle in second direction</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="62"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="153"/>
      <source>Length</source>
<<<<<<< HEAD
      <translation>நீளம்</translation>
=======
      <translation type="unfinished">Length</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="82"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="173"/>
      <source>Width</source>
<<<<<<< HEAD
      <translation>அகலம்</translation>
=======
      <translation type="unfinished">Width</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="193"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="287"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="505"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1254"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1580"/>
      <source>Height</source>
      <translation>உயரம்</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="267"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="625"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1600"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1749"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1805"/>
      <source>Radius</source>
<<<<<<< HEAD
      <translation>ஆரம்</translation>
=======
      <translation type="unfinished">Radius</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="391"/>
      <source>Rotation angle</source>
<<<<<<< HEAD
      <translation>சுழற்சி கோணம்</translation>
=======
      <translation type="unfinished">Rotation angle</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="465"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="797"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1016"/>
      <source>Radius 1</source>
      <translation>ஆரம் 1</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="485"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="820"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1039"/>
      <source>Radius 2</source>
      <translation>ஆரம் 2</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="551"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1620"/>
      <source>Angle</source>
      <translation>கோணம்</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="674"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="896"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1091"/>
      <source>U parameter</source>
<<<<<<< HEAD
      <translation>உ அளவுரு</translation>
=======
      <translation type="unfinished">U parameter</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="694"/>
      <source>V parameters</source>
<<<<<<< HEAD
      <translation>வி அளவுருக்கள்</translation>
=======
      <translation type="unfinished">V parameters</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="804"/>
      <source>Radius in local z-direction</source>
<<<<<<< HEAD
      <translation>உள்ளக z-திசையில் ஆரம்</translation>
=======
      <translation type="unfinished">Radius in local z-direction</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="827"/>
      <source>Radius in local X-direction</source>
<<<<<<< HEAD
      <translation>உள்ளக X-திசையில் ஆரம்</translation>
=======
      <translation type="unfinished">Radius in local X-direction</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="843"/>
      <source>Radius 3</source>
<<<<<<< HEAD
      <translation>ஆரம் 3</translation>
=======
      <translation type="unfinished">Radius 3</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="850"/>
      <source>Radius in local Y-direction
If zero, it is equal to Radius2</source>
<<<<<<< HEAD
      <translation>உள்ளக Y-திசையில் ஆரம் 
பூச்சியம் என்றால், அது ஆரம்2க்கு சமம்</translation>
=======
      <translation type="unfinished">Radius in local Y-direction
If zero, it is equal to Radius2</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="916"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1111"/>
      <source>V parameter</source>
<<<<<<< HEAD
      <translation>V அளவுரு</translation>
=======
      <translation type="unfinished">V parameter</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1023"/>
      <source>Radius in local XY-plane</source>
<<<<<<< HEAD
      <translation>உள்ளக XY-விமானத்தில் ஆரம்</translation>
=======
      <translation type="unfinished">Radius in local XY-plane</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1046"/>
      <source>Radius in local XZ-plane</source>
<<<<<<< HEAD
      <translation>உள்ளக XZ-விமானத்தில் ஆரம்</translation>
=======
      <translation type="unfinished">Radius in local XZ-plane</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1214"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2290"/>
      <source>Polygon</source>
<<<<<<< HEAD
      <translation>பலகோணம்</translation>
=======
      <translation type="unfinished">Polygon</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1234"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2313"/>
      <source>Circumradius</source>
<<<<<<< HEAD
      <translation>சுற்றளவு</translation>
=======
      <translation type="unfinished">Circumradius</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1353"/>
      <source>X min/max</source>
<<<<<<< HEAD
      <translation>ஃச் நிமிடம்/அதிகபட்சம்</translation>
=======
      <translation type="unfinished">X min/max</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1383"/>
      <source>Y min/max</source>
<<<<<<< HEAD
      <translation>ஒய் நிமிடம்/அதிகபட்சம்</translation>
=======
      <translation type="unfinished">Y min/max</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1413"/>
      <source>Z min/max</source>
<<<<<<< HEAD
      <translation>குறைந்தபட்சம்/அதிகபட்சம்</translation>
=======
      <translation type="unfinished">Z min/max</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1443"/>
      <source>X2 min/max</source>
<<<<<<< HEAD
      <translation>X2 நிமிடம்/அதிகபட்சம்</translation>
=======
      <translation type="unfinished">X2 min/max</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1476"/>
      <source>Z2 min/max</source>
<<<<<<< HEAD
      <translation>Z2 நிமிடம்/அதிகபட்சம்</translation>
=======
      <translation type="unfinished">Z2 min/max</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1560"/>
      <source>Pitch</source>
<<<<<<< HEAD
      <translation>குனிவு</translation>
=======
      <translation type="unfinished">Pitch</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1637"/>
      <source>Coordinate system</source>
<<<<<<< HEAD
      <translation>ஒருங்கிணைப்பு அமைப்பு</translation>
=======
      <translation type="unfinished">Coordinate system</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1709"/>
      <source>Growth</source>
<<<<<<< HEAD
      <translation>வளர்ச்சி</translation>
=======
      <translation type="unfinished">Growth</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1729"/>
      <source>Number of rotations</source>
<<<<<<< HEAD
      <translation>சுழற்சிகளின் எண்ணிக்கை</translation>
=======
      <translation type="unfinished">Number of rotations</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1825"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1947"/>
      <source>Angle 1</source>
<<<<<<< HEAD
      <translation>கோணம் 1</translation>
=======
      <translation type="unfinished">Angle 1</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1842"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1964"/>
      <source>Angle 2</source>
<<<<<<< HEAD
      <translation>கோணம் 2</translation>
=======
      <translation type="unfinished">Angle 2</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1879"/>
      <source>From 3 Points</source>
<<<<<<< HEAD
      <translation>3 புள்ளிகளில் இருந்து</translation>
=======
      <translation type="unfinished">From 3 Points</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1907"/>
      <source>Major radius</source>
<<<<<<< HEAD
      <translation>முக்கிய ஆரம்</translation>
=======
      <translation type="unfinished">Major radius</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1927"/>
      <source>Minor radius</source>
<<<<<<< HEAD
      <translation>சிறிய ஆரம்</translation>
=======
      <translation type="unfinished">Minor radius</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="2005"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2093"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2170"/>
      <source>X</source>
      <translation>ஃச்</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="2025"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2113"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2193"/>
      <source>Y</source>
      <translation>ஒய்</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="2045"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2133"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2216"/>
      <source>Z</source>
      <translation>சட்</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1645"/>
      <source>Right-handed</source>
<<<<<<< HEAD
      <translation>வலது கை</translation>
=======
      <translation type="unfinished">Right-handed</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1650"/>
      <source>Left-handed</source>
<<<<<<< HEAD
      <translation>இடது கை</translation>
=======
      <translation type="unfinished">Left-handed</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="2086"/>
      <source>Start point</source>
<<<<<<< HEAD
      <translation>தொடக்க புள்ளி</translation>
=======
      <translation type="unfinished">Start point</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="2160"/>
      <source>End point</source>
<<<<<<< HEAD
      <translation>இறுதிப் புள்ளி</translation>
=======
      <translation type="unfinished">End point</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::DlgReference</name>
    <message>
      <location filename="../../DlgReference.ui" line="14"/>
      <source>Reference</source>
<<<<<<< HEAD
      <translation>குறிப்பு</translation>
=======
      <translation type="unfinished">Reference</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../DlgReference.ui" line="20"/>
      <source>You selected geometries which are not part of the active body. Please define how to handle those selections. If you do not want those references, cancel the command.</source>
<<<<<<< HEAD
      <translation>செயலில் உள்ள உடலின் பகுதியாக இல்லாத வடிவவியலைத் தேர்ந்தெடுத்துள்ளீர்கள். அந்த தேர்வுகளை எவ்வாறு கையாள்வது என்பதை தயவு செய்து வரையறுக்கவும். அந்த குறிப்புகளை நீங்கள் விரும்பவில்லை என்றால், கட்டளையை ரத்து செய்யவும்.</translation>
=======
      <translation type="unfinished">You selected geometries which are not part of the active body. Please define how to handle those selections. If you do not want those references, cancel the command.</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../DlgReference.ui" line="42"/>
      <source>Make independent copy (recommended)</source>
<<<<<<< HEAD
      <translation>சுயாதீன நகலை உருவாக்கவும் (பரிந்துரைக்கப்பட்டது)</translation>
=======
      <translation type="unfinished">Make independent copy (recommended)</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../DlgReference.ui" line="52"/>
      <source>Make dependent copy</source>
<<<<<<< HEAD
      <translation>சார்பு நகலை உருவாக்கவும்</translation>
=======
      <translation type="unfinished">Make dependent copy</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../DlgReference.ui" line="59"/>
      <source>Create cross-reference</source>
<<<<<<< HEAD
      <translation>குறுக்கு குறிப்பை உருவாக்கவும்</translation>
=======
      <translation type="unfinished">Create cross-reference</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::NoDependentsSelection</name>
    <message>
<<<<<<< HEAD
      <location filename="../../ReferenceSelection.cpp" line="287"/>
      <source>Selecting this will cause circular dependency.</source>
      <translation>இதைத் தேர்ந்தெடுப்பது வட்ட சார்புநிலையை ஏற்படுத்தும்.</translation>
=======
      <location filename="../../ReferenceSelection.cpp" line="285"/>
      <source>Selecting this will cause circular dependency.</source>
      <translation type="unfinished">Selecting this will cause circular dependency.</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskBooleanParameters</name>
    <message>
      <location filename="../../TaskBooleanParameters.ui" line="22"/>
      <source>Add Body</source>
<<<<<<< HEAD
      <translation>உடலைச் சேர்க்கவும்</translation>
=======
      <translation type="unfinished">Add Body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.ui" line="32"/>
      <source>Remove Body</source>
<<<<<<< HEAD
      <translation>உடலை அகற்று</translation>
=======
      <translation type="unfinished">Remove Body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.ui" line="48"/>
      <source>Fuse</source>
<<<<<<< HEAD
      <translation>உருகி</translation>
=======
      <translation type="unfinished">Fuse</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.ui" line="53"/>
      <source>Cut</source>
<<<<<<< HEAD
      <translation>வெட்டு</translation>
=======
      <translation type="unfinished">Cut</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.ui" line="58"/>
      <source>Common</source>
<<<<<<< HEAD
      <translation>பொதுவானது</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.cpp" line="53"/>
      <source>Boolean Parameters</source>
      <translation>பூலியன் அளவுருக்கள்</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.cpp" line="84"/>
=======
      <translation type="unfinished">Common</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.cpp" line="51"/>
      <source>Boolean Parameters</source>
      <translation type="unfinished">Boolean Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.cpp" line="82"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Remove</source>
      <translation>அகற்று</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskBoxPrimitives</name>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskPrimitiveParameters.cpp" line="98"/>
      <source>Subtractive Box Parameters</source>
      <translation type="unfinished">Subtractive Box Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="99"/>
      <source>Additive Box Parameters</source>
      <translation type="unfinished">Additive Box Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="101"/>
      <source>Subtractive Cylinder Parameters</source>
      <translation type="unfinished">Subtractive Cylinder Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="102"/>
      <source>Additive Cylinder Parameters</source>
      <translation type="unfinished">Additive Cylinder Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="104"/>
      <source>Subtractive Sphere Parameters</source>
      <translation type="unfinished">Subtractive Sphere Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="105"/>
      <source>Additive Sphere Parameters</source>
      <translation type="unfinished">Additive Sphere Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="107"/>
      <source>Subtractive Cone Parameters</source>
      <translation type="unfinished">Subtractive Cone Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="108"/>
      <source>Additive Cone Parameters</source>
      <translation type="unfinished">Additive Cone Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="110"/>
      <source>Subtractive Ellipsoid Parameters</source>
      <translation type="unfinished">Subtractive Ellipsoid Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="111"/>
      <source>Additive Ellipsoid Parameters</source>
      <translation type="unfinished">Additive Ellipsoid Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="113"/>
      <source>Subtractive Torus Parameters</source>
      <translation type="unfinished">Subtractive Torus Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="114"/>
      <source>Additive Torus Parameters</source>
      <translation type="unfinished">Additive Torus Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="116"/>
      <source>Subtractive Prism Parameters</source>
      <translation type="unfinished">Subtractive Prism Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="117"/>
      <source>Additive Prism Parameters</source>
      <translation type="unfinished">Additive Prism Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="119"/>
      <source>Subtractive Wedge Parameters</source>
      <translation type="unfinished">Subtractive Wedge Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="120"/>
      <source>Additive Wedge Parameters</source>
      <translation type="unfinished">Additive Wedge Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="123"/>
      <source>Subtractive Primitive Parameters</source>
      <translation type="unfinished">Subtractive Primitive Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="124"/>
      <source>Additive Primitive Parameters</source>
      <translation type="unfinished">Additive Primitive Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="1024"/>
      <location filename="../../TaskPrimitiveParameters.cpp" line="1032"/>
      <location filename="../../TaskPrimitiveParameters.cpp" line="1040"/>
      <source>Invalid wedge parameters</source>
      <translation>தவறான வெட்ச் அளவுருக்கள்</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="1025"/>
      <source>X min must not be equal to X max!</source>
      <translation>ஃச் மணித்துளி ஃச் max க்கு சமமாக இருக்கக்கூடாது!</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="1033"/>
      <source>Y min must not be equal to Y max!</source>
      <translation>ஒய் மணித்துளி ஒய் max க்கு சமமாக இருக்கக்கூடாது!</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="1041"/>
      <source>Z min must not be equal to Z max!</source>
      <translation>சட் மணித்துளி சட் max க்கு சமமாக இருக்கக்கூடாது!</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="1083"/>
      <source>Create primitive</source>
      <translation>பழமையான உருவாக்கவும்</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="1128"/>
      <source>%1 fine dragging</source>
      <translation type="unfinished">%1 fine dragging</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="1131"/>
      <source>%1 coarse dragging</source>
      <translation type="unfinished">%1 coarse dragging</translation>
=======
      <location filename="../../TaskPrimitiveParameters.cpp" line="47"/>
      <source>Primitive Parameters</source>
      <translation type="unfinished">Primitive Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="932"/>
      <location filename="../../TaskPrimitiveParameters.cpp" line="940"/>
      <location filename="../../TaskPrimitiveParameters.cpp" line="948"/>
      <source>Invalid wedge parameters</source>
      <translation type="unfinished">Invalid wedge parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="933"/>
      <source>X min must not be equal to X max!</source>
      <translation type="unfinished">X min must not be equal to X max!</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="941"/>
      <source>Y min must not be equal to Y max!</source>
      <translation type="unfinished">Y min must not be equal to Y max!</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="949"/>
      <source>Z min must not be equal to Z max!</source>
      <translation type="unfinished">Z min must not be equal to Z max!</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="991"/>
      <source>Create primitive</source>
      <translation type="unfinished">Create primitive</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskChamferParameters</name>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="20"/>
      <source>Toggles between selection and preview mode</source>
<<<<<<< HEAD
      <translation>தேர்வு மற்றும் மாதிரிக்காட்சி முறைக்கு இடையில் மாறுகிறது</translation>
=======
      <translation type="unfinished">Toggles between selection and preview mode</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="23"/>
      <source>Select</source>
      <translation>தேர்ந்தெடு</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="33"/>
      <source>- select an item to highlight it
- double-click on an item to see the chamfers</source>
<<<<<<< HEAD
      <translation>- அதை முன்னிலைப்படுத்த ஒரு உருப்படியைத் தேர்ந்தெடுக்கவும் 
- சேம்ஃபர்களைக் காண ஒரு பொருளின் மீது இருமுறை சொடுக்கு செய்யவும்</translation>
=======
      <translation type="unfinished">- select an item to highlight it
- double-click on an item to see the chamfers</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="48"/>
      <source>Type</source>
      <translation>வகை</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="56"/>
      <source>Equal distance</source>
<<<<<<< HEAD
      <translation>சம தூரம்</translation>
=======
      <translation type="unfinished">Equal distance</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="61"/>
      <source>Two distances</source>
<<<<<<< HEAD
      <translation>இரண்டு தூரம்</translation>
=======
      <translation type="unfinished">Two distances</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="66"/>
      <source>Distance and angle</source>
<<<<<<< HEAD
      <translation>தூரம் மற்றும் கோணம்</translation>
=======
      <translation type="unfinished">Distance and angle</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="79"/>
      <source>Flips the direction</source>
<<<<<<< HEAD
      <translation>திசை திருப்புகிறது</translation>
=======
      <translation type="unfinished">Flips the direction</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="119"/>
      <source>Use all edges</source>
<<<<<<< HEAD
      <translation>அனைத்து விளிம்புகளையும் பயன்படுத்தவும்</translation>
=======
      <translation type="unfinished">Use all edges</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="100"/>
      <source>Size</source>
<<<<<<< HEAD
      <translation>அளவு</translation>
=======
      <translation type="unfinished">Size</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="146"/>
      <source>Size 2</source>
<<<<<<< HEAD
      <translation>அளவு 2</translation>
=======
      <translation type="unfinished">Size 2</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="179"/>
      <source>Angle</source>
      <translation>கோணம்</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskChamferParameters.cpp" line="346"/>
      <source>Empty chamfer created!
</source>
      <translation>வெற்று அறை உருவாக்கப்பட்டது!
=======
      <location filename="../../TaskChamferParameters.cpp" line="344"/>
      <source>Empty chamfer created!
</source>
      <translation type="unfinished">Empty chamfer created!
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDlgBooleanParameters</name>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskBooleanParameters.cpp" line="386"/>
      <source>The body list cannot be empty</source>
      <translation>உடல் பட்டியல் காலியாக இருக்கக்கூடாது</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.cpp" line="386"/>
      <source>Empty Body List</source>
      <translation type="unfinished">Empty Body List</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.cpp" line="407"/>
      <source>Boolean: Accept: Input error</source>
      <translation>பூலியன்: ஏற்றுக்கொள்: உள்ளீடு பிழை</translation>
=======
      <location filename="../../TaskBooleanParameters.cpp" line="384"/>
      <source>Empty body list</source>
      <translation type="unfinished">Empty body list</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.cpp" line="384"/>
      <source>The body list cannot be empty</source>
      <translation type="unfinished">The body list cannot be empty</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.cpp" line="399"/>
      <source>Boolean: Accept: Input error</source>
      <translation type="unfinished">Boolean: Accept: Input error</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDlgDatumParameters</name>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskDatumParameters.cpp" line="107"/>
      <source>Incompatible Reference Set</source>
      <translation>பொருந்தாத குறிப்புத் தொகுப்பு</translation>
    </message>
    <message>
      <location filename="../../TaskDatumParameters.cpp" line="109"/>
      <source>There is no attachment mode that fits the current set of references. If you choose to continue, the feature will remain where it is now, and will not be moved as the references change. Continue?</source>
      <translation>தற்போதைய குறிப்புகளின் தொகுப்பிற்குப் பொருந்தக்கூடிய இணைப்பு முறை இல்லை. நீங்கள் தொடரத் தேர்வுசெய்தால், நற்பொருத்தம் இப்போது இருக்கும் இடத்திலேயே இருக்கும், மேலும் குறிப்புகள் மாறும்போது நகர்த்தப்படாது. தொடரவா?</translation>
=======
      <location filename="../../TaskDatumParameters.cpp" line="105"/>
      <source>Incompatible Reference Set</source>
      <translation type="unfinished">Incompatible Reference Set</translation>
    </message>
    <message>
      <location filename="../../TaskDatumParameters.cpp" line="107"/>
      <source>There is no attachment mode that fits the current set of references. If you choose to continue, the feature will remain where it is now, and will not be moved as the references change. Continue?</source>
      <translation type="unfinished">There is no attachment mode that fits the current set of references. If you choose to continue, the feature will remain where it is now, and will not be moved as the references change. Continue?</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDlgFeatureParameters</name>
    <message>
      <location filename="../../TaskFeatureParameters.cpp" line="228"/>
      <source>The feature could not be created with the given parameters.
The geometry may be invalid or the parameters may be incompatible.
Please adjust the parameters and try again.</source>
      <translation type="unfinished">The feature could not be created with the given parameters.
The geometry may be invalid or the parameters may be incompatible.
Please adjust the parameters and try again.</translation>
    </message>
    <message>
      <location filename="../../TaskFeatureParameters.cpp" line="235"/>
      <source>Input error</source>
      <translation type="unfinished">Input error</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDlgShapeBinder</name>
    <message>
      <location filename="../../TaskShapeBinder.cpp" line="440"/>
      <source>Input error</source>
      <translation type="unfinished">Input error</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDraftParameters</name>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="20"/>
      <source>Toggles between selection and preview mode</source>
<<<<<<< HEAD
      <translation>தேர்வு மற்றும் மாதிரிக்காட்சி முறைக்கு இடையில் மாறுகிறது</translation>
=======
      <translation type="unfinished">Toggles between selection and preview mode</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="23"/>
      <source>Select</source>
      <translation>தேர்ந்தெடு</translation>
    </message>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="33"/>
      <source>- select an item to highlight it
- double-click on an item to see the drafts</source>
<<<<<<< HEAD
      <translation>- அதை முன்னிலைப்படுத்த ஒரு உருப்படியைத் தேர்ந்தெடுக்கவும் 
- வரைவுகளைக் காண ஒரு பொருளின் மீது இருமுறை சொடுக்கு செய்யவும்</translation>
=======
      <translation type="unfinished">- select an item to highlight it
- double-click on an item to see the drafts</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="46"/>
      <source>Draft angle</source>
<<<<<<< HEAD
      <translation>வரைவு கோணம்</translation>
=======
      <translation type="unfinished">Draft angle</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="79"/>
      <source>Neutral Plane</source>
<<<<<<< HEAD
      <translation>நடுநிலை வானூர்தி</translation>
=======
      <translation type="unfinished">Neutral Plane</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="96"/>
      <source>Pull Direction</source>
<<<<<<< HEAD
      <translation>திசையை இழுக்கவும்</translation>
=======
      <translation type="unfinished">Pull Direction</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="111"/>
      <source>Reverse pull direction</source>
<<<<<<< HEAD
      <translation>தலைகீழ் இழுக்கும் திசை</translation>
    </message>
    <message>
      <location filename="../../TaskDraftParameters.cpp" line="304"/>
      <source>Empty draft created!
</source>
      <translation>வெற்று வரைவு உருவாக்கப்பட்டது!
=======
      <translation type="unfinished">Reverse pull direction</translation>
    </message>
    <message>
      <location filename="../../TaskDraftParameters.cpp" line="288"/>
      <source>Empty draft created!
</source>
      <translation type="unfinished">Empty draft created!
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDressUpParameters</name>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskDressUpParameters.cpp" line="302"/>
=======
      <location filename="../../TaskDressUpParameters.cpp" line="298"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Select</source>
      <translation>தேர்ந்தெடு</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskDressUpParameters.cpp" line="307"/>
      <source>Confirm Selection</source>
      <translation>தேர்வை உறுதிப்படுத்தவும்</translation>
    </message>
    <message>
      <location filename="../../TaskDressUpParameters.cpp" line="320"/>
      <source>Add All Edges</source>
      <translation>அனைத்து விளிம்புகளையும் சேர்க்கவும்</translation>
    </message>
    <message>
      <location filename="../../TaskDressUpParameters.cpp" line="326"/>
      <source>Adds all edges to the list box (only when in add selection mode)</source>
      <translation>பட்டியல் பெட்டியில் அனைத்து விளிம்புகளையும் சேர்க்கிறது (தேர்வு பயன்முறையில் சேர்க்கும் போது மட்டும்)</translation>
    </message>
    <message>
      <location filename="../../TaskDressUpParameters.cpp" line="335"/>
=======
      <location filename="../../TaskDressUpParameters.cpp" line="303"/>
      <source>Confirm Selection</source>
      <translation type="unfinished">Confirm Selection</translation>
    </message>
    <message>
      <location filename="../../TaskDressUpParameters.cpp" line="316"/>
      <source>Add All Edges</source>
      <translation type="unfinished">Add All Edges</translation>
    </message>
    <message>
      <location filename="../../TaskDressUpParameters.cpp" line="322"/>
      <source>Adds all edges to the list box (only when in add selection mode)</source>
      <translation type="unfinished">Adds all edges to the list box (only when in add selection mode)</translation>
    </message>
    <message>
      <location filename="../../TaskDressUpParameters.cpp" line="331"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Remove</source>
      <translation>அகற்று</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskExtrudeParameters</name>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskExtrudeParameters.cpp" line="1374"/>
      <source>No face selected</source>
      <translation>முகம் எதுவும் தேர்ந்தெடுக்கப்படவில்லை</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="173"/>
      <location filename="../../TaskExtrudeParameters.cpp" line="1143"/>
      <source>Face</source>
      <translation>முகம்</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="77"/>
=======
      <location filename="../../TaskExtrudeParameters.cpp" line="1372"/>
      <source>No face selected</source>
      <translation type="unfinished">No face selected</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="171"/>
      <location filename="../../TaskExtrudeParameters.cpp" line="1141"/>
      <source>Face</source>
      <translation type="unfinished">Face</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="75"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Remove</source>
      <translation>அகற்று</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskExtrudeParameters.cpp" line="354"/>
      <source>Preview</source>
      <translation>முன்னோட்டம்</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="358"/>
      <source>Select Faces</source>
      <translation>முகங்களைத் தேர்ந்தெடுக்கவும்</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="694"/>
      <source>Select reference…</source>
      <translation>குறிப்பைத் தேர்ந்தெடு…</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="604"/>
      <source>No shape selected</source>
      <translation>வடிவம் எதுவும் தேர்ந்தெடுக்கப்படவில்லை</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="687"/>
      <source>Sketch normal</source>
      <translation>ச்கெட்ச் இயல்பானது</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="690"/>
      <source>Face normal</source>
      <translation>சாதாரண முகம்</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="698"/>
      <location filename="../../TaskExtrudeParameters.cpp" line="701"/>
      <source>Custom direction</source>
      <translation>விருப்ப திசை</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="1090"/>
      <source>Click on a shape in the model</source>
      <translation>மாதிரியில் ஒரு வடிவத்தை சொடுக்கு செய்யவும்</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="1361"/>
      <source>One sided</source>
      <translation>ஒரு பக்கம்</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="1362"/>
      <source>Two sided</source>
      <translation>இரண்டு பக்கமும்</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="1363"/>
      <source>Symmetric</source>
      <translation>சமச்சீர்</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="1369"/>
      <source>Click on a face in the model</source>
      <translation>மாதிரியில் ஒரு முகத்தில் சொடுக்கு செய்யவும்</translation>
=======
      <location filename="../../TaskExtrudeParameters.cpp" line="352"/>
      <source>Preview</source>
      <translation type="unfinished">Preview</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="356"/>
      <source>Select Faces</source>
      <translation type="unfinished">Select Faces</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="692"/>
      <source>Select reference…</source>
      <translation type="unfinished">Select reference…</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="602"/>
      <source>No shape selected</source>
      <translation type="unfinished">No shape selected</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="685"/>
      <source>Sketch normal</source>
      <translation type="unfinished">Sketch normal</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="688"/>
      <source>Face normal</source>
      <translation type="unfinished">Face normal</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="696"/>
      <location filename="../../TaskExtrudeParameters.cpp" line="699"/>
      <source>Custom direction</source>
      <translation type="unfinished">Custom direction</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="1088"/>
      <source>Click on a shape in the model</source>
      <translation type="unfinished">Click on a shape in the model</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="1359"/>
      <source>One sided</source>
      <translation type="unfinished">One sided</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="1360"/>
      <source>Two sided</source>
      <translation type="unfinished">Two sided</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="1361"/>
      <source>Symmetric</source>
      <translation type="unfinished">Symmetric</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="1367"/>
      <source>Click on a face in the model</source>
      <translation type="unfinished">Click on a face in the model</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskFeaturePick</name>
    <message>
      <location filename="../../TaskFeaturePick.ui" line="23"/>
      <source>Allow used features</source>
<<<<<<< HEAD
      <translation>பயன்படுத்திய அம்சங்களை அனுமதிக்கவும்</translation>
=======
      <translation type="unfinished">Allow used features</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskFeaturePick.ui" line="30"/>
      <source>Allow External Features</source>
<<<<<<< HEAD
      <translation>வெளிப்புற அம்சங்களை அனுமதிக்கவும்</translation>
=======
      <translation type="unfinished">Allow External Features</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskFeaturePick.ui" line="42"/>
      <source>From other bodies of the same part</source>
<<<<<<< HEAD
      <translation>அதே பகுதியின் மற்ற உடல்களிலிருந்து</translation>
=======
      <translation type="unfinished">From other bodies of the same part</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskFeaturePick.ui" line="49"/>
      <source>From different parts or free features</source>
<<<<<<< HEAD
      <translation>வெவ்வேறு பகுதிகள் அல்லது இலவச அம்சங்களிலிருந்து</translation>
=======
      <translation type="unfinished">From different parts or free features</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskFeaturePick.ui" line="66"/>
      <source>Make independent copy (recommended)</source>
<<<<<<< HEAD
      <translation>சுயாதீன நகலை உருவாக்கவும் (பரிந்துரைக்கப்பட்டது)</translation>
=======
      <translation type="unfinished">Make independent copy (recommended)</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskFeaturePick.ui" line="79"/>
      <source>Make dependent copy</source>
<<<<<<< HEAD
      <translation>சார்பு நகலை உருவாக்கவும்</translation>
=======
      <translation type="unfinished">Make dependent copy</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskFeaturePick.ui" line="89"/>
      <source>Create cross-reference</source>
<<<<<<< HEAD
      <translation>குறுக்கு குறிப்பை உருவாக்கவும்</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="69"/>
      <source>Valid</source>
      <translation>செல்லுபடியாகும்</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="71"/>
      <source>Invalid shape</source>
      <translation>தவறான வடிவம்</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="73"/>
      <source>No wire in sketch</source>
      <translation>ஓவியத்தில் கம்பி இல்லை</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="75"/>
      <source>Sketch already used by other feature</source>
      <translation>ச்கெட்ச் ஏற்கனவே மற்ற அம்சத்தால் பயன்படுத்தப்பட்டது</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="77"/>
      <source>Belongs to another body</source>
      <translation>வேறொரு உடலைச் சேர்ந்தது</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="79"/>
      <source>Belongs to another part</source>
      <translation>மற்றொரு பகுதியைச் சேர்ந்தது</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="81"/>
      <source>Doesn't belong to any body</source>
      <translation>எந்த உடலுக்கும் சொந்தமானது அல்ல</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="83"/>
      <source>Base plane</source>
      <translation>அடிப்படை வானூர்தி</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="85"/>
      <source>Feature is located after the tip of the body</source>
      <translation>நற்பொருத்தம் உடலின் முனைக்குப் பிறகு அமைந்துள்ளது</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="97"/>
      <source>Select Attachment</source>
      <translation type="unfinished">Select Attachment</translation>
=======
      <translation type="unfinished">Create cross-reference</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="67"/>
      <source>Valid</source>
      <translation type="unfinished">Valid</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="69"/>
      <source>Invalid shape</source>
      <translation type="unfinished">Invalid shape</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="71"/>
      <source>No wire in sketch</source>
      <translation type="unfinished">No wire in sketch</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="73"/>
      <source>Sketch already used by other feature</source>
      <translation type="unfinished">Sketch already used by other feature</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="75"/>
      <source>Belongs to another body</source>
      <translation type="unfinished">Belongs to another body</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="77"/>
      <source>Belongs to another part</source>
      <translation type="unfinished">Belongs to another part</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="79"/>
      <source>Doesn't belong to any body</source>
      <translation type="unfinished">Doesn't belong to any body</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="81"/>
      <source>Base plane</source>
      <translation type="unfinished">Base plane</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="83"/>
      <source>Feature is located after the tip of the body</source>
      <translation type="unfinished">Feature is located after the tip of the body</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="95"/>
      <source>Select attachment</source>
      <translation type="unfinished">Select attachment</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskFilletParameters</name>
    <message>
      <location filename="../../TaskFilletParameters.ui" line="20"/>
      <source>Toggles between selection and preview mode</source>
<<<<<<< HEAD
      <translation>தேர்வு மற்றும் மாதிரிக்காட்சி முறைக்கு இடையில் மாறுகிறது</translation>
=======
      <translation type="unfinished">Toggles between selection and preview mode</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskFilletParameters.ui" line="23"/>
      <source>Select</source>
      <translation>தேர்ந்தெடு</translation>
    </message>
    <message>
      <location filename="../../TaskFilletParameters.ui" line="33"/>
      <source>- select an item to highlight it
- double-click on an item to see the fillets</source>
<<<<<<< HEAD
      <translation>- அதை முன்னிலைப்படுத்த ஒரு உருப்படியைத் தேர்ந்தெடுக்கவும் 
- ஃபில்லெட்டுகளைப் பார்க்க ஒரு பொருளின் மீது இருமுறை சொடுக்கு செய்யவும்</translation>
=======
      <translation type="unfinished">- select an item to highlight it
- double-click on an item to see the fillets</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskFilletParameters.ui" line="46"/>
      <source>Radius</source>
<<<<<<< HEAD
      <translation>ஆரம்</translation>
=======
      <translation type="unfinished">Radius</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskFilletParameters.ui" line="62"/>
      <source>Use all edges</source>
<<<<<<< HEAD
      <translation>அனைத்து விளிம்புகளையும் பயன்படுத்தவும்</translation>
    </message>
    <message>
      <location filename="../../TaskFilletParameters.cpp" line="205"/>
      <source>Empty fillet created!</source>
      <translation>வெற்று ஃபில்லட் உருவாக்கப்பட்டது!</translation>
=======
      <translation type="unfinished">Use all edges</translation>
    </message>
    <message>
      <location filename="../../TaskFilletParameters.cpp" line="203"/>
      <source>Empty fillet created!</source>
      <translation type="unfinished">Empty fillet created!</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskHelixParameters</name>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="29"/>
      <source>Valid</source>
<<<<<<< HEAD
      <translation>செல்லுபடியாகும்</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="48"/>
      <location filename="../../TaskHelixParameters.cpp" line="261"/>
      <source>Base X-axis</source>
      <translation>அடிப்படை எக்ச்-அச்சு</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="53"/>
      <location filename="../../TaskHelixParameters.cpp" line="262"/>
      <source>Base Y-axis</source>
      <translation>அடிப்படை Y-அச்சு</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="58"/>
      <location filename="../../TaskHelixParameters.cpp" line="263"/>
      <source>Base Z-axis</source>
      <translation>அடிப்படை Z-அச்சு</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="63"/>
      <location filename="../../TaskHelixParameters.cpp" line="245"/>
=======
      <translation type="unfinished">Valid</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="48"/>
      <location filename="../../TaskHelixParameters.cpp" line="239"/>
      <source>Base X-axis</source>
      <translation type="unfinished">Base X-axis</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="53"/>
      <location filename="../../TaskHelixParameters.cpp" line="240"/>
      <source>Base Y-axis</source>
      <translation type="unfinished">Base Y-axis</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="58"/>
      <location filename="../../TaskHelixParameters.cpp" line="241"/>
      <source>Base Z-axis</source>
      <translation type="unfinished">Base Z-axis</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="63"/>
      <location filename="../../TaskHelixParameters.cpp" line="223"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Horizontal sketch axis</source>
      <translation type="unfinished">Horizontal sketch axis</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="68"/>
<<<<<<< HEAD
      <location filename="../../TaskHelixParameters.cpp" line="244"/>
=======
      <location filename="../../TaskHelixParameters.cpp" line="222"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Vertical sketch axis</source>
      <translation type="unfinished">Vertical sketch axis</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="73"/>
<<<<<<< HEAD
      <location filename="../../TaskHelixParameters.cpp" line="243"/>
=======
      <location filename="../../TaskHelixParameters.cpp" line="221"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Normal sketch axis</source>
      <translation type="unfinished">Normal sketch axis</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="22"/>
      <source>Status</source>
      <translation>நிலை</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="40"/>
      <source>Axis</source>
<<<<<<< HEAD
      <translation>அச்சு</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="78"/>
      <location filename="../../TaskHelixParameters.cpp" line="228"/>
      <source>Select reference…</source>
      <translation>குறிப்பைத் தேர்ந்தெடு…</translation>
=======
      <translation type="unfinished">Axis</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="78"/>
      <location filename="../../TaskHelixParameters.cpp" line="206"/>
      <source>Select reference…</source>
      <translation type="unfinished">Select reference…</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="90"/>
      <source>Mode</source>
<<<<<<< HEAD
      <translation>பயன்முறை</translation>
=======
      <translation type="unfinished">Mode</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="98"/>
      <source>Pitch-Height-Angle</source>
<<<<<<< HEAD
      <translation>பிட்ச்-உயரம்-கோணம்</translation>
=======
      <translation type="unfinished">Pitch-Height-Angle</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="103"/>
      <source>Pitch-Turns-Angle</source>
<<<<<<< HEAD
      <translation>பிட்ச்-டர்ன்ச்-ஆங்கிள்</translation>
=======
      <translation type="unfinished">Pitch-Turns-Angle</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="108"/>
      <source>Height-Turns-Angle</source>
<<<<<<< HEAD
      <translation>உயரம்-திருப்பங்கள்-கோணம்</translation>
=======
      <translation type="unfinished">Height-Turns-Angle</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="113"/>
      <source>Height-Turns-Growth</source>
<<<<<<< HEAD
      <translation>உயரம்-திருப்பங்கள்-வளர்ச்சி</translation>
=======
      <translation type="unfinished">Height-Turns-Growth</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="125"/>
      <source>Pitch</source>
      <translation type="unfinished">Pitch</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="152"/>
      <source>Height</source>
      <translation>உயரம்</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="179"/>
      <source>Turns</source>
<<<<<<< HEAD
      <translation>திருப்புகிறது</translation>
=======
      <translation type="unfinished">Turns</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="203"/>
      <source>Cone angle</source>
<<<<<<< HEAD
      <translation>கூம்பு கோணம்</translation>
=======
      <translation type="unfinished">Cone angle</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="233"/>
      <source>Radial growth</source>
<<<<<<< HEAD
      <translation>ரேடியல் வளர்ச்சி</translation>
=======
      <translation type="unfinished">Radial growth</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="289"/>
      <source>Recompute on change</source>
<<<<<<< HEAD
      <translation>மாற்றத்தை மீண்டும் கணக்கிடுங்கள்</translation>
=======
      <translation type="unfinished">Recompute on change</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="255"/>
      <source>Left handed</source>
<<<<<<< HEAD
      <translation>இடது கை</translation>
=======
      <translation type="unfinished">Left handed</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="265"/>
      <source>Reversed</source>
      <translation type="unfinished">Reversed</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="272"/>
      <source>Remove outside of profile</source>
<<<<<<< HEAD
      <translation>சுயவிவரத்திற்கு வெளியே அகற்று</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.cpp" line="71"/>
      <source>Subtractive Helix Parameters</source>
      <translation type="unfinished">Subtractive Helix Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.cpp" line="72"/>
      <source>Additive Helix Parameters</source>
      <translation type="unfinished">Additive Helix Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.cpp" line="247"/>
      <source>Construction line %1</source>
      <translation>கட்டுமான வரி% 1</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.cpp" line="315"/>
      <source>Warning: helix might be self intersecting</source>
      <translation>எச்சரிக்கை: எலிக்ச் தன்னைத்தானே வெட்டிக்கொள்ளலாம்</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.cpp" line="320"/>
      <source>Error: helix touches itself</source>
      <translation>பிழை: எலிக்ச் தன்னைத் தொடுகிறது</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.cpp" line="372"/>
      <source>Error: unsupported mode</source>
      <translation>பிழை: ஆதரிக்கப்படாத பயன்முறை</translation>
=======
      <translation type="unfinished">Remove outside of profile</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.cpp" line="55"/>
      <source>Helix Parameters</source>
      <translation type="unfinished">Helix Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.cpp" line="225"/>
      <source>Construction line %1</source>
      <translation type="unfinished">Construction line %1</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.cpp" line="293"/>
      <source>Warning: helix might be self intersecting</source>
      <translation type="unfinished">Warning: helix might be self intersecting</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.cpp" line="298"/>
      <source>Error: helix touches itself</source>
      <translation type="unfinished">Error: helix touches itself</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.cpp" line="347"/>
      <source>Error: unsupported mode</source>
      <translation type="unfinished">Error: unsupported mode</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskHoleParameters</name>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskHoleParameters.cpp" line="57"/>
      <source>Counterbore</source>
      <translation>எதிர் போர்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="58"/>
      <source>Countersink</source>
      <translation>கவுண்டர்சிங்க்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="59"/>
      <source>Counterdrill</source>
      <translation>எதிர் துரப்பணம்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="63"/>
      <source>Hole Parameters</source>
      <translation>துளை அளவுருக்கள்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="72"/>
=======
      <location filename="../../TaskHoleParameters.cpp" line="55"/>
      <source>Counterbore</source>
      <translation type="unfinished">Counterbore</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="56"/>
      <source>Countersink</source>
      <translation type="unfinished">Countersink</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="57"/>
      <source>Counterdrill</source>
      <translation type="unfinished">Counterdrill</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="61"/>
      <source>Hole Parameters</source>
      <translation type="unfinished">Hole Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="70"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>None</source>
      <translation>எதுவுமில்லை</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskHoleParameters.cpp" line="73"/>
      <source>ISO metric regular</source>
      <translation>ஐஎச்ஓ மெட்ரிக் வழக்கமானது</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="74"/>
      <source>ISO metric fine</source>
      <translation>ஐஎச்ஓ மெட்ரிக் தண்டம்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="75"/>
      <source>UTS coarse</source>
      <translation>UTS கரடுமுரடான</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="76"/>
      <source>UTS fine</source>
      <translation>UTS நன்றாக உள்ளது</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="77"/>
      <source>UTS extra fine</source>
      <translation>UTS கூடுதல் தண்டம்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="78"/>
      <source>ANSI pipes</source>
      <translation>ANSI குழாய்கள்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="79"/>
      <source>ISO/BSP pipes</source>
      <translation>ISO/BSP குழாய்கள்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="80"/>
      <source>BSW whitworth</source>
      <translation>BSW விட்வொர்த்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="81"/>
      <source>BSF whitworth fine</source>
      <translation>BSF விட்வொர்த் தண்டம்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="82"/>
      <source>ISO tyre valves</source>
      <translation>ISO டயர் வால்வுகள்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="712"/>
=======
      <location filename="../../TaskHoleParameters.cpp" line="71"/>
      <source>ISO metric regular</source>
      <translation type="unfinished">ISO metric regular</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="72"/>
      <source>ISO metric fine</source>
      <translation type="unfinished">ISO metric fine</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="73"/>
      <source>UTS coarse</source>
      <translation type="unfinished">UTS coarse</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="74"/>
      <source>UTS fine</source>
      <translation type="unfinished">UTS fine</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="75"/>
      <source>UTS extra fine</source>
      <translation type="unfinished">UTS extra fine</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="76"/>
      <source>ANSI pipes</source>
      <translation type="unfinished">ANSI pipes</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="77"/>
      <source>ISO/BSP pipes</source>
      <translation type="unfinished">ISO/BSP pipes</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="78"/>
      <source>BSW whitworth</source>
      <translation type="unfinished">BSW whitworth</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="79"/>
      <source>BSF whitworth fine</source>
      <translation type="unfinished">BSF whitworth fine</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="80"/>
      <source>ISO tyre valves</source>
      <translation type="unfinished">ISO tyre valves</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="678"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Medium</source>
      <comment>Distance between thread crest and hole wall, use ISO-273 nomenclature or equivalent if possible</comment>
      <translation>சராசரி</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskHoleParameters.cpp" line="716"/>
=======
      <location filename="../../TaskHoleParameters.cpp" line="682"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Fine</source>
      <comment>Distance between thread crest and hole wall, use ISO-273 nomenclature or equivalent if possible</comment>
      <translation>நன்றாக</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskHoleParameters.cpp" line="720"/>
=======
      <location filename="../../TaskHoleParameters.cpp" line="686"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Coarse</source>
      <comment>Distance between thread crest and hole wall, use ISO-273 nomenclature or equivalent if possible</comment>
      <translation>கரடுமுரடான</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskHoleParameters.cpp" line="726"/>
      <source>Normal</source>
      <comment>Distance between thread crest and hole wall, use ASME B18.2.8 nomenclature or equivalent if possible</comment>
      <translation>இயல்பானது</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="730"/>
=======
      <location filename="../../TaskHoleParameters.cpp" line="692"/>
      <source>Normal</source>
      <comment>Distance between thread crest and hole wall, use ASME B18.2.8 nomenclature or equivalent if possible</comment>
      <translation type="unfinished">Normal</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="696"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Close</source>
      <comment>Distance between thread crest and hole wall, use ASME B18.2.8 nomenclature or equivalent if possible</comment>
      <translation>மூடு</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskHoleParameters.cpp" line="734"/>
      <source>Loose</source>
      <comment>Distance between thread crest and hole wall, use ASME B18.2.8 nomenclature or equivalent if possible</comment>
      <translation>தளர்வான</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="738"/>
      <source>Normal</source>
      <comment>Distance between thread crest and hole wall</comment>
      <translation>இயல்பானது</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="739"/>
=======
      <location filename="../../TaskHoleParameters.cpp" line="700"/>
      <source>Loose</source>
      <comment>Distance between thread crest and hole wall, use ASME B18.2.8 nomenclature or equivalent if possible</comment>
      <translation type="unfinished">Loose</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="704"/>
      <source>Normal</source>
      <comment>Distance between thread crest and hole wall</comment>
      <translation type="unfinished">Normal</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="705"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Close</source>
      <comment>Distance between thread crest and hole wall</comment>
      <translation>மூடு</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskHoleParameters.cpp" line="740"/>
      <source>Wide</source>
      <comment>Distance between thread crest and hole wall</comment>
      <translation>அகலமான</translation>
=======
      <location filename="../../TaskHoleParameters.cpp" line="706"/>
      <source>Wide</source>
      <comment>Distance between thread crest and hole wall</comment>
      <translation type="unfinished">Wide</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskLoftParameters</name>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="20"/>
      <source>Ruled surface</source>
<<<<<<< HEAD
      <translation>ஆளப்பட்ட மேற்பரப்பு</translation>
=======
      <translation type="unfinished">Ruled surface</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="27"/>
      <source>Closed</source>
<<<<<<< HEAD
      <translation>மூடப்பட்டது</translation>
=======
      <translation type="unfinished">Closed</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="34"/>
      <source>Profile</source>
<<<<<<< HEAD
      <translation>சுயவிவரம்</translation>
=======
      <translation type="unfinished">Profile</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="42"/>
      <source>Object</source>
<<<<<<< HEAD
      <translation>பொருள்</translation>
=======
      <translation type="unfinished">Object</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="65"/>
      <source>Add Section</source>
<<<<<<< HEAD
      <translation>பிரிவைச் சேர்க்கவும்</translation>
=======
      <translation type="unfinished">Add Section</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="78"/>
      <source>Remove Section</source>
<<<<<<< HEAD
      <translation>பிரிவை அகற்று</translation>
=======
      <translation type="unfinished">Remove Section</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="103"/>
      <source>List can be reordered by dragging</source>
<<<<<<< HEAD
      <translation>இழுப்பதன் மூலம் பட்டியலை மறுவரிசைப்படுத்தலாம்</translation>
=======
      <translation type="unfinished">List can be reordered by dragging</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="120"/>
      <source>Recompute on change</source>
<<<<<<< HEAD
      <translation>மாற்றத்தை மீண்டும் கணக்கிடுங்கள்</translation>
    </message>
    <message>
      <location filename="../../TaskLoftParameters.cpp" line="64"/>
      <source>Subtractive Loft Parameters</source>
      <translation type="unfinished">Subtractive Loft Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskLoftParameters.cpp" line="65"/>
      <source>Additive Loft Parameters</source>
      <translation type="unfinished">Additive Loft Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskLoftParameters.cpp" line="94"/>
=======
      <translation type="unfinished">Recompute on change</translation>
    </message>
    <message>
      <location filename="../../TaskLoftParameters.cpp" line="48"/>
      <source>Loft Parameters</source>
      <translation type="unfinished">Loft Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskLoftParameters.cpp" line="72"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Remove</source>
      <translation>அகற்று</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskMirroredParameters</name>
    <message>
      <location filename="../../TaskMirroredParameters.ui" line="34"/>
      <source>Plane</source>
<<<<<<< HEAD
      <translation>தளம்</translation>
    </message>
    <message>
      <location filename="../../TaskMirroredParameters.cpp" line="186"/>
=======
      <translation type="unfinished">Plane</translation>
    </message>
    <message>
      <location filename="../../TaskMirroredParameters.cpp" line="184"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Error</source>
      <translation>பிழை</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskMultiTransformParameters</name>
    <message>
      <location filename="../../TaskMultiTransformParameters.ui" line="32"/>
      <source>Transformations</source>
<<<<<<< HEAD
      <translation>உருமாற்றங்கள்</translation>
=======
      <translation type="unfinished">Transformations</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.ui" line="52"/>
      <source>OK</source>
      <translation>சரி</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskMultiTransformParameters.cpp" line="71"/>
=======
      <location filename="../../TaskMultiTransformParameters.cpp" line="69"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Edit</source>
      <translation>திருத்து</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskMultiTransformParameters.cpp" line="74"/>
=======
      <location filename="../../TaskMultiTransformParameters.cpp" line="72"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Delete</source>
      <translation>நீக்கு</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskMultiTransformParameters.cpp" line="77"/>
      <source>Add Mirror Transformation</source>
      <translation>மிரர் உருமாற்றத்தைச் சேர்க்கவும்</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="85"/>
      <source>Add Linear Pattern</source>
      <translation>நேரியல் வடிவத்தைச் சேர்க்கவும்</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="93"/>
      <source>Add Polar Pattern</source>
      <translation>போலார் பேட்டர்னைச் சேர்க்கவும்</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="101"/>
      <source>Add Scale Transformation</source>
      <translation>அளவு மாற்றத்தைச் சேர்க்கவும்</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="104"/>
      <source>Move Up</source>
      <translation>மேலே நகர்த்தவும்</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="107"/>
      <source>Move Down</source>
      <translation>கீழே நகர்த்தவும்</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="139"/>
      <source>Right-click to add a transformation</source>
      <translation>மாற்றத்தைச் சேர்க்க வலது சொடுக்கு செய்யவும்</translation>
=======
      <location filename="../../TaskMultiTransformParameters.cpp" line="75"/>
      <source>Add Mirror Transformation</source>
      <translation type="unfinished">Add Mirror Transformation</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="83"/>
      <source>Add Linear Pattern</source>
      <translation type="unfinished">Add Linear Pattern</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="91"/>
      <source>Add Polar Pattern</source>
      <translation type="unfinished">Add Polar Pattern</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="99"/>
      <source>Add Scale Transformation</source>
      <translation type="unfinished">Add Scale Transformation</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="102"/>
      <source>Move Up</source>
      <translation type="unfinished">Move Up</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="105"/>
      <source>Move Down</source>
      <translation type="unfinished">Move Down</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="137"/>
      <source>Right-click to add a transformation</source>
      <translation type="unfinished">Right-click to add a transformation</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPadParameters</name>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskPadParameters.cpp" line="40"/>
      <source>Pad Parameters</source>
      <translation>பேட் அளவுருக்கள்</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="42"/>
      <source>Offset the pad from the face at which the pad will end on side 1</source>
      <translation>பக்க 1 இல் திண்டு முடிவடையும் முகத்தில் இருந்து பேடை ஆஃப்செட் செய்யவும்</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="43"/>
      <source>Offset the pad from the face at which the pad will end on side 2</source>
      <translation>பக்க 2 இல் திண்டு முடிவடையும் முகத்தில் இருந்து பேடை ஆஃப்செட் செய்யவும்</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="44"/>
      <source>Reverses pad direction</source>
      <translation>திண்டு திசையை மாற்றுகிறது</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="73"/>
=======
      <location filename="../../TaskPadParameters.cpp" line="38"/>
      <source>Pad Parameters</source>
      <translation type="unfinished">Pad Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="40"/>
      <source>Offset the pad from the face at which the pad will end on side 1</source>
      <translation type="unfinished">Offset the pad from the face at which the pad will end on side 1</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="41"/>
      <source>Offset the pad from the face at which the pad will end on side 2</source>
      <translation type="unfinished">Offset the pad from the face at which the pad will end on side 2</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="42"/>
      <source>Reverses pad direction</source>
      <translation type="unfinished">Reverses pad direction</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="71"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Dimension</source>
      <translation>பரிமாணம்</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskPadParameters.cpp" line="74"/>
      <source>To last</source>
      <translation>நீடிக்க</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="75"/>
      <source>To first</source>
      <translation>முதலில்</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="76"/>
      <source>Up to face</source>
      <translation>முகம் வரை</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="77"/>
      <source>Up to shape</source>
      <translation>வடிவம் வரை</translation>
=======
      <location filename="../../TaskPadParameters.cpp" line="72"/>
      <source>To last</source>
      <translation type="unfinished">To last</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="73"/>
      <source>To first</source>
      <translation type="unfinished">To first</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="74"/>
      <source>Up to face</source>
      <translation type="unfinished">Up to face</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="75"/>
      <source>Up to shape</source>
      <translation type="unfinished">Up to shape</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPadPocketParameters</name>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="68"/>
      <location filename="../../TaskPadPocketParameters.ui" line="303"/>
      <source>Type</source>
      <translation>வகை</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="76"/>
      <source>Dimension</source>
      <translation>பரிமாணம்</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="84"/>
      <location filename="../../TaskPadPocketParameters.ui" line="313"/>
      <source>Length</source>
<<<<<<< HEAD
      <translation>நீளம்</translation>
=======
      <translation type="unfinished">Length</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="101"/>
      <location filename="../../TaskPadPocketParameters.ui" line="330"/>
      <source>Offset to face</source>
<<<<<<< HEAD
      <translation>நேருக்கு நேர் ஈடுசெய்</translation>
=======
      <translation type="unfinished">Offset to face</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="192"/>
      <location filename="../../TaskPadPocketParameters.ui" line="421"/>
      <source>Select all faces</source>
<<<<<<< HEAD
      <translation>அனைத்து முகங்களையும் தேர்ந்தெடுக்கவும்</translation>
=======
      <translation type="unfinished">Select all faces</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="217"/>
      <location filename="../../TaskPadPocketParameters.ui" line="446"/>
      <source>Select</source>
      <translation>தேர்ந்தெடு</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="255"/>
      <location filename="../../TaskPadPocketParameters.ui" line="484"/>
      <source>Select Face</source>
<<<<<<< HEAD
      <translation>முகத்தைத் தேர்ந்தெடுக்கவும்</translation>
=======
      <translation type="unfinished">Select Face</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="281"/>
      <source>Side 2</source>
<<<<<<< HEAD
      <translation>பக்கம் 2</translation>
=======
      <translation type="unfinished">Side 2</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="512"/>
      <source>Direction</source>
<<<<<<< HEAD
      <translation>திசை</translation>
=======
      <translation type="unfinished">Direction</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="541"/>
      <source>Set a direction or select an edge
from the model as reference</source>
<<<<<<< HEAD
      <translation>ஒரு திசையை அமைக்கவும் அல்லது ஒரு விளிம்பைத் தேர்ந்தெடுக்கவும் 
மாதிரியில் இருந்து குறிப்பு</translation>
=======
      <translation type="unfinished">Set a direction or select an edge
from the model as reference</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="546"/>
      <source>Sketch normal</source>
<<<<<<< HEAD
      <translation>ச்கெட்ச் இயல்பானது</translation>
=======
      <translation type="unfinished">Sketch normal</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="556"/>
      <source>Custom direction</source>
<<<<<<< HEAD
      <translation>விருப்ப திசை</translation>
=======
      <translation type="unfinished">Custom direction</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="569"/>
      <source>Use custom vector for pad direction, otherwise
the sketch plane's normal vector will be used</source>
<<<<<<< HEAD
      <translation>பேட் திசைக்கு தனிப்பயன் திசையன் பயன்படுத்தவும், இல்லையெனில் 
ச்கெட்ச் விமானத்தின் சாதாரண திசையன் பயன்படுத்தப்படும்</translation>
=======
      <translation type="unfinished">Use custom vector for pad direction, otherwise
the sketch plane's normal vector will be used</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="521"/>
      <source>If unchecked, the length will be
measured along the specified direction</source>
<<<<<<< HEAD
      <translation>தேர்வு செய்யாவிட்டால், நீளம் இருக்கும் 
குறிப்பிட்ட திசையில் அளவிடப்படுகிறது</translation>
=======
      <translation type="unfinished">If unchecked, the length will be
measured along the specified direction</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="525"/>
      <source>Length along sketch normal</source>
<<<<<<< HEAD
      <translation>ச்கெட்ச் சாதாரண நீளம்</translation>
=======
      <translation type="unfinished">Length along sketch normal</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="214"/>
      <location filename="../../TaskPadPocketParameters.ui" line="443"/>
      <source>Toggles between selection and preview mode</source>
<<<<<<< HEAD
      <translation>தேர்வு மற்றும் மாதிரிக்காட்சி முறைக்கு இடையில் மாறுகிறது</translation>
=======
      <translation type="unfinished">Toggles between selection and preview mode</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="505"/>
      <source>Reversed</source>
      <translation type="unfinished">Reversed</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="534"/>
      <source>Direction/edge</source>
<<<<<<< HEAD
      <translation>திசை/விளிம்பு</translation>
=======
      <translation type="unfinished">Direction/edge</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="551"/>
      <source>Select reference…</source>
<<<<<<< HEAD
      <translation>குறிப்பைத் தேர்ந்தெடு…</translation>
=======
      <translation type="unfinished">Select reference…</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="582"/>
      <source>X</source>
      <translation>ஃச்</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="589"/>
      <source>X-component of direction vector</source>
<<<<<<< HEAD
      <translation>திசை வெக்டரின் X-கூறு</translation>
=======
      <translation type="unfinished">X-component of direction vector</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="611"/>
      <source>Y</source>
      <translation>ஒய்</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="618"/>
      <source>Y-component of direction vector</source>
<<<<<<< HEAD
      <translation>திசை வெக்டரின் Y-கூறு</translation>
=======
      <translation type="unfinished">Y-component of direction vector</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="640"/>
      <source>Z</source>
      <translation>சட்</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="647"/>
      <source>Z-component of direction vector</source>
<<<<<<< HEAD
      <translation>திசை வெக்டரின் Z-கூறு</translation>
=======
      <translation type="unfinished">Z-component of direction vector</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="118"/>
      <location filename="../../TaskPadPocketParameters.ui" line="347"/>
      <source>Angle to taper the extrusion</source>
<<<<<<< HEAD
      <translation>வெளியேற்றத்தைத் தட்டுவதற்கான கோணம்</translation>
=======
      <translation type="unfinished">Angle to taper the extrusion</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="22"/>
      <source>Mode</source>
<<<<<<< HEAD
      <translation>பயன்முறை</translation>
=======
      <translation type="unfinished">Mode</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="46"/>
      <source>Side 1</source>
<<<<<<< HEAD
      <translation>பக்கம் 1</translation>
=======
      <translation type="unfinished">Side 1</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="121"/>
      <location filename="../../TaskPadPocketParameters.ui" line="350"/>
      <source>Taper angle</source>
<<<<<<< HEAD
      <translation>டேப்பர் கோணம்</translation>
=======
      <translation type="unfinished">Taper angle</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="174"/>
      <location filename="../../TaskPadPocketParameters.ui" line="403"/>
      <source>Select Shape</source>
<<<<<<< HEAD
      <translation>வடிவத்தைத் தேர்ந்தெடுக்கவும்</translation>
=======
      <translation type="unfinished">Select Shape</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="189"/>
      <location filename="../../TaskPadPocketParameters.ui" line="418"/>
      <source>Selects all faces of the shape</source>
<<<<<<< HEAD
      <translation>வடிவத்தின் அனைத்து முகங்களையும் தேர்ந்தெடுக்கிறது</translation>
=======
      <translation type="unfinished">Selects all faces of the shape</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="678"/>
      <source>Recompute on change</source>
<<<<<<< HEAD
      <translation>மாற்றத்தை மீண்டும் கணக்கிடுங்கள்</translation>
=======
      <translation type="unfinished">Recompute on change</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPipeOrientation</name>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="22"/>
      <source>Orientation mode</source>
<<<<<<< HEAD
      <translation>நோக்குநிலை முறை</translation>
=======
      <translation type="unfinished">Orientation mode</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="36"/>
      <source>Standard</source>
      <translation>அடிப்படை</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="41"/>
      <source>Fixed</source>
<<<<<<< HEAD
      <translation>சரி செய்யப்பட்டது</translation>
=======
      <translation type="unfinished">Fixed</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="46"/>
      <source>Frenet</source>
<<<<<<< HEAD
      <translation>ஃப்ரெனெட்</translation>
=======
      <translation type="unfinished">Frenet</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="51"/>
      <source>Auxiliary</source>
<<<<<<< HEAD
      <translation>துணை</translation>
=======
      <translation type="unfinished">Auxiliary</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="56"/>
      <source>Binormal</source>
<<<<<<< HEAD
      <translation>இருவகை</translation>
=======
      <translation type="unfinished">Binormal</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="76"/>
      <source>Curvilinear equivalence</source>
<<<<<<< HEAD
      <translation>வளைவு சமநிலை</translation>
=======
      <translation type="unfinished">Curvilinear equivalence</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="83"/>
      <source>Profile</source>
<<<<<<< HEAD
      <translation>சுயவிவரம்</translation>
=======
      <translation type="unfinished">Profile</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="91"/>
      <source>Object</source>
<<<<<<< HEAD
      <translation>பொருள்</translation>
=======
      <translation type="unfinished">Object</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="125"/>
      <source>Add Edge</source>
<<<<<<< HEAD
      <translation>விளிம்பைச் சேர்க்கவும்</translation>
=======
      <translation type="unfinished">Add Edge</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="144"/>
      <source>Remove Edge</source>
<<<<<<< HEAD
      <translation>விளிம்பை அகற்று</translation>
=======
      <translation type="unfinished">Remove Edge</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="166"/>
      <source>Set the constant binormal vector used to calculate the profiles orientation</source>
<<<<<<< HEAD
      <translation>சுயவிவரங்களின் நோக்குநிலையைக் கணக்கிடப் பயன்படுத்தப்படும் நிலையான இரு இயல்பு திசையனை அமைக்கவும்</translation>
=======
      <translation type="unfinished">Set the constant binormal vector used to calculate the profiles orientation</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="190"/>
      <source>X</source>
      <translation>ஃச்</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="197"/>
      <source>Y</source>
      <translation>ஒய்</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="204"/>
      <source>Z</source>
      <translation>சட்</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskPipeParameters.cpp" line="83"/>
      <source>Subtractive Pipe Section Orientation</source>
      <translation type="unfinished">Subtractive Pipe Section Orientation</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="84"/>
      <source>Additive Pipe Section Orientation</source>
      <translation type="unfinished">Additive Pipe Section Orientation</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="658"/>
=======
      <location filename="../../TaskPipeParameters.cpp" line="575"/>
      <source>Section Orientation</source>
      <translation type="unfinished">Section Orientation</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="603"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Remove</source>
      <translation>அகற்று</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPipeParameters</name>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="20"/>
      <source>Profile</source>
<<<<<<< HEAD
      <translation>சுயவிவரம்</translation>
=======
      <translation type="unfinished">Profile</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="28"/>
      <location filename="../../TaskPipeParameters.ui" line="93"/>
      <source>Object</source>
<<<<<<< HEAD
      <translation>பொருள்</translation>
=======
      <translation type="unfinished">Object</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="51"/>
      <source>Corner transition</source>
<<<<<<< HEAD
      <translation>மூலை மாற்றம்</translation>
=======
      <translation type="unfinished">Corner transition</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="70"/>
      <source>Right corner</source>
<<<<<<< HEAD
      <translation>வலது மூலையில்</translation>
=======
      <translation type="unfinished">Right corner</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="75"/>
      <source>Round corner</source>
<<<<<<< HEAD
      <translation>வட்ட மூலை</translation>
=======
      <translation type="unfinished">Round corner</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="85"/>
      <source>Path to Sweep Along</source>
<<<<<<< HEAD
      <translation>ச்வீப் செய்வதற்கான பாதை</translation>
=======
      <translation type="unfinished">Path to Sweep Along</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="119"/>
      <source>Add edge</source>
<<<<<<< HEAD
      <translation>விளிம்பைச் சேர்க்கவும்</translation>
=======
      <translation type="unfinished">Add edge</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="138"/>
      <source>Remove edge</source>
<<<<<<< HEAD
      <translation>விளிம்பை அகற்று</translation>
=======
      <translation type="unfinished">Remove edge</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="65"/>
      <source>Transformed</source>
<<<<<<< HEAD
      <translation>மாற்றப்பட்டது</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="77"/>
      <source>Subtractive Pipe Parameters</source>
      <translation type="unfinished">Subtractive Pipe Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="78"/>
      <source>Additive Pipe Parameters</source>
      <translation type="unfinished">Additive Pipe Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="112"/>
      <source>Select All</source>
      <translation>அனைத்தையும் தேர்ந்தெடு</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="130"/>
=======
      <translation type="unfinished">Transformed</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="67"/>
      <source>Pipe Parameters</source>
      <translation type="unfinished">Pipe Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="86"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Remove</source>
      <translation>அகற்று</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskPipeParameters.cpp" line="495"/>
      <location filename="../../TaskPipeParameters.cpp" line="616"/>
      <source>Input Error</source>
      <translation>உள்ளீடு பிழை</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="495"/>
      <source>No active body</source>
      <translation>சுறுசுறுப்பான உடல் இல்லை</translation>
=======
      <location filename="../../TaskPipeParameters.cpp" line="444"/>
      <location filename="../../TaskPipeParameters.cpp" line="561"/>
      <source>Input error</source>
      <translation type="unfinished">Input error</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="444"/>
      <source>No active body</source>
      <translation type="unfinished">No active body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPipeScaling</name>
    <message>
      <location filename="../../TaskPipeScaling.ui" line="22"/>
      <source>Transform mode</source>
<<<<<<< HEAD
      <translation>உருமாற்ற முறை</translation>
=======
      <translation type="unfinished">Transform mode</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeScaling.ui" line="36"/>
      <source>Constant</source>
<<<<<<< HEAD
      <translation>மாறா, மாறிலி</translation>
=======
      <translation type="unfinished">Constant</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeScaling.ui" line="41"/>
      <source>Multisection</source>
<<<<<<< HEAD
      <translation>பல பிரிவு</translation>
=======
      <translation type="unfinished">Multisection</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeScaling.ui" line="64"/>
      <source>Add Section</source>
<<<<<<< HEAD
      <translation>பிரிவைச் சேர்க்கவும்</translation>
=======
      <translation type="unfinished">Add Section</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeScaling.ui" line="77"/>
      <source>Remove Section</source>
<<<<<<< HEAD
      <translation>பிரிவை அகற்று</translation>
=======
      <translation type="unfinished">Remove Section</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPipeScaling.ui" line="102"/>
      <source>List can be reordered by dragging</source>
<<<<<<< HEAD
      <translation>இழுப்பதன் மூலம் பட்டியலை மறுவரிசைப்படுத்தலாம்</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="89"/>
      <source>Subtractive Pipe Section Transformation</source>
      <translation type="unfinished">Subtractive Pipe Section Transformation</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="90"/>
      <source>Additive Pipe Section Transformation</source>
      <translation type="unfinished">Additive Pipe Section Transformation</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="948"/>
=======
      <translation type="unfinished">List can be reordered by dragging</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="870"/>
      <source>Section Transformation</source>
      <translation type="unfinished">Section Transformation</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="889"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Remove</source>
      <translation>அகற்று</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPocketParameters</name>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskPocketParameters.cpp" line="40"/>
      <source>Pocket Parameters</source>
      <translation>பாக்கெட் அளவுருக்கள்</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="43"/>
      <source>Offset from the selected face at which the pocket will end on side 1</source>
      <translation>பக்க 1 இல் பாக்கெட் முடிவடையும் தேர்ந்தெடுக்கப்பட்ட முகத்திலிருந்து ஆஃப்செட்</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="46"/>
      <source>Offset from the selected face at which the pocket will end on side 2</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட முகத்திலிருந்து பாக்கெட் 2வது பக்கத்தில் முடிவடையும்</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="48"/>
      <source>Reverses pocket direction</source>
      <translation>பாக்கெட் திசையை மாற்றுகிறது</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="77"/>
=======
      <location filename="../../TaskPocketParameters.cpp" line="38"/>
      <source>Pocket Parameters</source>
      <translation type="unfinished">Pocket Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="41"/>
      <source>Offset from the selected face at which the pocket will end on side 1</source>
      <translation type="unfinished">Offset from the selected face at which the pocket will end on side 1</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="44"/>
      <source>Offset from the selected face at which the pocket will end on side 2</source>
      <translation type="unfinished">Offset from the selected face at which the pocket will end on side 2</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="46"/>
      <source>Reverses pocket direction</source>
      <translation type="unfinished">Reverses pocket direction</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="75"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Dimension</source>
      <translation>பரிமாணம்</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskPocketParameters.cpp" line="78"/>
      <source>Through all</source>
      <translation>அனைத்து மூலம்</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="79"/>
      <source>To first</source>
      <translation>முதலில்</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="80"/>
      <source>Up to face</source>
      <translation>முகம் வரை</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="81"/>
      <source>Up to shape</source>
      <translation>வடிவம் வரை</translation>
=======
      <location filename="../../TaskPocketParameters.cpp" line="76"/>
      <source>Through all</source>
      <translation type="unfinished">Through all</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="77"/>
      <source>To first</source>
      <translation type="unfinished">To first</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="78"/>
      <source>Up to face</source>
      <translation type="unfinished">Up to face</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="79"/>
      <source>Up to shape</source>
      <translation type="unfinished">Up to shape</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskRevolutionParameters</name>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="22"/>
      <source>Type</source>
      <translation>வகை</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="50"/>
<<<<<<< HEAD
      <location filename="../../TaskRevolutionParameters.cpp" line="222"/>
      <source>Base X-axis</source>
      <translation>அடிப்படை எக்ச்-அச்சு</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="55"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="223"/>
      <source>Base Y-axis</source>
      <translation>அடிப்படை Y-அச்சு</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="60"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="224"/>
      <source>Base Z-axis</source>
      <translation>அடிப்படை Z-அச்சு</translation>
=======
      <location filename="../../TaskRevolutionParameters.cpp" line="254"/>
      <source>Base X-axis</source>
      <translation type="unfinished">Base X-axis</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="55"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="255"/>
      <source>Base Y-axis</source>
      <translation type="unfinished">Base Y-axis</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="60"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="256"/>
      <source>Base Z-axis</source>
      <translation type="unfinished">Base Z-axis</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="65"/>
      <source>Horizontal sketch axis</source>
      <translation type="unfinished">Horizontal sketch axis</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="70"/>
      <source>Vertical sketch axis</source>
      <translation type="unfinished">Vertical sketch axis</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="154"/>
      <source>Symmetric to plane</source>
      <translation type="unfinished">Symmetric to plane</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="161"/>
      <source>Reversed</source>
      <translation type="unfinished">Reversed</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="120"/>
      <source>2nd angle</source>
<<<<<<< HEAD
      <translation>2வது கோணம்</translation>
=======
      <translation type="unfinished">2nd angle</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="42"/>
      <source>Axis</source>
<<<<<<< HEAD
      <translation>அச்சு</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="75"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="232"/>
      <source>Select reference…</source>
      <translation>குறிப்பைத் தேர்ந்தெடு…</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="87"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="175"/>
=======
      <translation type="unfinished">Axis</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="75"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="264"/>
      <source>Select reference…</source>
      <translation type="unfinished">Select reference…</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="87"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="197"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Angle</source>
      <translation>கோணம்</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="170"/>
<<<<<<< HEAD
      <location filename="../../TaskRevolutionParameters.cpp" line="149"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="459"/>
      <source>Face</source>
      <translation>முகம்</translation>
=======
      <location filename="../../TaskRevolutionParameters.cpp" line="160"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="491"/>
      <source>Face</source>
      <translation type="unfinished">Face</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="192"/>
      <source>Recompute on change</source>
<<<<<<< HEAD
      <translation>மாற்றத்தை மீண்டும் கணக்கிடுங்கள்</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="177"/>
      <source>To last</source>
      <translation>நீடிக்க</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="180"/>
      <source>Through all</source>
      <translation>அனைத்து மூலம்</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="182"/>
      <source>To first</source>
      <translation>முதலில்</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="183"/>
      <source>Up to face</source>
      <translation>முகம் வரை</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="184"/>
      <source>Two angles</source>
      <translation>இரண்டு கோணங்கள்</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="447"/>
      <source>No face selected</source>
      <translation>முகம் எதுவும் தேர்ந்தெடுக்கப்படவில்லை</translation>
=======
      <translation type="unfinished">Recompute on change</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="199"/>
      <source>To last</source>
      <translation type="unfinished">To last</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="202"/>
      <source>Through all</source>
      <translation type="unfinished">Through all</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="204"/>
      <source>To first</source>
      <translation type="unfinished">To first</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="215"/>
      <source>Up to face</source>
      <translation type="unfinished">Up to face</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="216"/>
      <source>Two angles</source>
      <translation type="unfinished">Two angles</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="479"/>
      <source>No face selected</source>
      <translation type="unfinished">No face selected</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskScaledParameters</name>
    <message>
      <location filename="../../TaskScaledParameters.ui" line="34"/>
      <source>Factor</source>
<<<<<<< HEAD
      <translation>காரணி</translation>
=======
      <translation type="unfinished">Factor</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskScaledParameters.ui" line="48"/>
      <source>Occurrences</source>
<<<<<<< HEAD
      <translation>நிகழ்வுகள்</translation>
=======
      <translation type="unfinished">Occurrences</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskShapeBinder</name>
    <message>
      <location filename="../../TaskShapeBinder.ui" line="22"/>
      <source>Object</source>
<<<<<<< HEAD
      <translation>பொருள்</translation>
=======
      <translation type="unfinished">Object</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskShapeBinder.ui" line="48"/>
      <source>Add Geometry</source>
<<<<<<< HEAD
      <translation>வடிவவியலைச் சேர்க்கவும்</translation>
=======
      <translation type="unfinished">Add Geometry</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskShapeBinder.ui" line="67"/>
      <source>Remove Geometry</source>
<<<<<<< HEAD
      <translation>வடிவவியலை அகற்று</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBinder.cpp" line="61"/>
      <source>Shape Binder Parameters</source>
      <translation>வடிவ பைண்டர் அளவுருக்கள்</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBinder.cpp" line="139"/>
=======
      <translation type="unfinished">Remove Geometry</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBinder.cpp" line="59"/>
      <source>Shape Binder Parameters</source>
      <translation type="unfinished">Shape Binder Parameters</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBinder.cpp" line="137"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Remove</source>
      <translation>அகற்று</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskSketchBasedParameters</name>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskSketchBasedParameters.cpp" line="210"/>
      <source>Face</source>
      <translation>முகம்</translation>
=======
      <location filename="../../TaskSketchBasedParameters.cpp" line="202"/>
      <source>Face</source>
      <translation type="unfinished">Face</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskThicknessParameters</name>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="20"/>
      <source>Toggles between selection and preview mode</source>
<<<<<<< HEAD
      <translation>தேர்வு மற்றும் மாதிரிக்காட்சி முறைக்கு இடையில் மாறுகிறது</translation>
=======
      <translation type="unfinished">Toggles between selection and preview mode</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="23"/>
      <source>Select</source>
      <translation>தேர்ந்தெடு</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="33"/>
      <source>- select an item to highlight it
- double-click on an item to see the features</source>
<<<<<<< HEAD
      <translation>- அதை முன்னிலைப்படுத்த ஒரு உருப்படியைத் தேர்ந்தெடுக்கவும் 
- அம்சங்களைக் காண ஒரு பொருளின் மீது இருமுறை சொடுக்கு செய்யவும்</translation>
=======
      <translation type="unfinished">- select an item to highlight it
- double-click on an item to see the features</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="46"/>
      <source>Thickness</source>
<<<<<<< HEAD
      <translation>தடிமன்</translation>
=======
      <translation type="unfinished">Thickness</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="75"/>
      <source>Mode</source>
<<<<<<< HEAD
      <translation>பயன்முறை</translation>
=======
      <translation type="unfinished">Mode</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="83"/>
      <source>Skin</source>
<<<<<<< HEAD
      <translation>தோல்</translation>
=======
      <translation type="unfinished">Skin</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="88"/>
      <source>Pipe</source>
<<<<<<< HEAD
      <translation>புழம்பு</translation>
=======
      <translation type="unfinished">Pipe</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="93"/>
      <source>Recto verso</source>
<<<<<<< HEAD
      <translation>நேரான உரையாடல்</translation>
=======
      <translation type="unfinished">Recto verso</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="101"/>
      <source>Join type</source>
<<<<<<< HEAD
      <translation>சேர வகை</translation>
=======
      <translation type="unfinished">Join type</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="109"/>
      <source>Arc</source>
<<<<<<< HEAD
      <translation>பரிதி</translation>
=======
      <translation type="unfinished">Arc</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="114"/>
      <location filename="../../TaskThicknessParameters.ui" line="124"/>
      <source>Intersection</source>
<<<<<<< HEAD
      <translation>குறுக்குவெட்டு</translation>
=======
      <translation type="unfinished">Intersection</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="131"/>
      <source>Make thickness inwards</source>
<<<<<<< HEAD
      <translation>உள்நோக்கி தடிமன் செய்யுங்கள்</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.cpp" line="269"/>
      <source>Empty thickness created!
</source>
      <translation>வெற்று தடிமன் உருவாக்கப்பட்டது!
=======
      <translation type="unfinished">Make thickness inwards</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.cpp" line="267"/>
      <source>Empty thickness created!
</source>
      <translation type="unfinished">Empty thickness created!
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskTransformedParameters</name>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="111"/>
      <source>Remove</source>
      <translation>அகற்று</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskTransformedParameters.cpp" line="398"/>
=======
      <location filename="../../TaskTransformedParameters.cpp" line="404"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Normal sketch axis</source>
      <translation type="unfinished">Normal sketch axis</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskTransformedParameters.cpp" line="397"/>
=======
      <location filename="../../TaskTransformedParameters.cpp" line="403"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Vertical sketch axis</source>
      <translation type="unfinished">Vertical sketch axis</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskTransformedParameters.cpp" line="396"/>
=======
      <location filename="../../TaskTransformedParameters.cpp" line="402"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Horizontal sketch axis</source>
      <translation type="unfinished">Horizontal sketch axis</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskTransformedParameters.cpp" line="400"/>
      <location filename="../../TaskTransformedParameters.cpp" line="436"/>
      <source>Construction line %1</source>
      <translation>கட்டுமான வரி% 1</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="414"/>
      <source>Base X-axis</source>
      <translation>அடிப்படை எக்ச்-அச்சு</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="415"/>
      <source>Base Y-axis</source>
      <translation>அடிப்படை Y-அச்சு</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="416"/>
      <source>Base Z-axis</source>
      <translation>அடிப்படை Z-அச்சு</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="450"/>
      <source>Base XY-plane</source>
      <translation>அடிப்படை XY-விமானம்</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="451"/>
      <source>Base YZ-plane</source>
      <translation>அடிப்படை YZ-விமானம்</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="452"/>
      <source>Base XZ-plane</source>
      <translation>அடிப்படை XZ-விமானம்</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="424"/>
      <location filename="../../TaskTransformedParameters.cpp" line="460"/>
      <source>Select reference…</source>
      <translation>குறிப்பைத் தேர்ந்தெடு…</translation>
=======
      <location filename="../../TaskTransformedParameters.cpp" line="406"/>
      <location filename="../../TaskTransformedParameters.cpp" line="442"/>
      <source>Construction line %1</source>
      <translation type="unfinished">Construction line %1</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="420"/>
      <source>Base X-axis</source>
      <translation type="unfinished">Base X-axis</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="421"/>
      <source>Base Y-axis</source>
      <translation type="unfinished">Base Y-axis</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="422"/>
      <source>Base Z-axis</source>
      <translation type="unfinished">Base Z-axis</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="456"/>
      <source>Base XY-plane</source>
      <translation type="unfinished">Base XY-plane</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="457"/>
      <source>Base YZ-plane</source>
      <translation type="unfinished">Base YZ-plane</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="458"/>
      <source>Base XZ-plane</source>
      <translation type="unfinished">Base XZ-plane</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="430"/>
      <location filename="../../TaskTransformedParameters.cpp" line="466"/>
      <source>Select reference…</source>
      <translation type="unfinished">Select reference…</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.ui" line="35"/>
      <source>Transform body</source>
<<<<<<< HEAD
      <translation>உடலை மாற்றும்</translation>
=======
      <translation type="unfinished">Transform body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.ui" line="48"/>
      <source>Transform tool shapes</source>
<<<<<<< HEAD
      <translation>கருவி வடிவங்களை மாற்றவும்</translation>
=======
      <translation type="unfinished">Transform tool shapes</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.ui" line="78"/>
      <source>Add Feature</source>
<<<<<<< HEAD
      <translation>அம்சத்தைச் சேர்க்கவும்</translation>
=======
      <translation type="unfinished">Add Feature</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.ui" line="88"/>
      <source>Remove Feature</source>
<<<<<<< HEAD
      <translation>அம்சத்தை அகற்று</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.ui" line="116"/>
      <source>Recompute on change</source>
      <translation>மாற்றத்தை மீண்டும் கணக்கிடுங்கள்</translation>
=======
      <translation type="unfinished">Remove Feature</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.ui" line="122"/>
      <source>Recompute on change</source>
      <translation type="unfinished">Recompute on change</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.ui" line="106"/>
      <source>List can be reordered by dragging</source>
      <translation type="unfinished">List can be reordered by dragging</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesign_MoveFeature</name>
    <message>
<<<<<<< HEAD
      <location filename="../../CommandBody.cpp" line="909"/>
      <source>Select Body</source>
      <translation>உடலைத் தேர்ந்தெடுக்கவும்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="910"/>
      <source>Select a body from the list</source>
      <translation>பட்டியலில் இருந்து ஒரு உடலைத் தேர்ந்தெடுக்கவும்</translation>
=======
      <location filename="../../CommandBody.cpp" line="908"/>
      <source>Select Body</source>
      <translation type="unfinished">Select Body</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="909"/>
      <source>Select a body from the list</source>
      <translation type="unfinished">Select a body from the list</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesign_MoveFeatureInTree</name>
    <message>
<<<<<<< HEAD
      <location filename="../../CommandBody.cpp" line="1098"/>
      <source>Move Feature After…</source>
      <translation>பிறகு அம்சத்தை நகர்த்து...</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1099"/>
      <source>Select a feature from the list</source>
      <translation>பட்டியலில் இருந்து ஒரு அம்சத்தைத் தேர்ந்தெடுக்கவும்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1186"/>
      <source>Move Tip</source>
      <translation>உதவிக்குறிப்பை நகர்த்தவும்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1192"/>
      <source>Set tip to last feature?</source>
      <translation>கடைசி அம்சத்திற்கு உதவிக்குறிப்பை அமைக்கவா?</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1187"/>
      <source>The moved feature appears after the currently set tip.</source>
      <translation>தற்போது அமைக்கப்பட்ட உதவிக்குறிப்புக்குப் பிறகு நகர்த்தப்பட்ட நற்பொருத்தம் தோன்றும்.</translation>
=======
      <location filename="../../CommandBody.cpp" line="1095"/>
      <source>Move Feature After…</source>
      <translation type="unfinished">Move Feature After…</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1096"/>
      <source>Select a feature from the list</source>
      <translation type="unfinished">Select a feature from the list</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1183"/>
      <source>Move Tip</source>
      <translation type="unfinished">Move Tip</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1189"/>
      <source>Set tip to last feature?</source>
      <translation type="unfinished">Set tip to last feature?</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1184"/>
      <source>The moved feature appears after the currently set tip.</source>
      <translation type="unfinished">The moved feature appears after the currently set tip.</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="151"/>
      <source>There are no attachment modes that fit selected objects. Select something else.</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட பொருட்களுக்கு ஏற்ற இணைப்பு முறைகள் எதுவும் இல்லை. வேறு எதையாவது தேர்ந்தெடுக்கவும்.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="164"/>
      <location filename="../../Command.cpp" line="172"/>
      <location filename="../../Command.cpp" line="179"/>
=======
      <location filename="../../Command.cpp" line="146"/>
      <source>Invalid selection</source>
      <translation type="unfinished">Invalid selection</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="147"/>
      <source>There are no attachment modes that fit selected objects. Select something else.</source>
      <translation type="unfinished">There are no attachment modes that fit selected objects. Select something else.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="160"/>
      <location filename="../../Command.cpp" line="168"/>
      <location filename="../../Command.cpp" line="175"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Error</source>
      <translation>பிழை</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../SketchWorkflow.cpp" line="845"/>
      <source>Several sub-elements selected</source>
      <translation>பல துணை கூறுகள் தேர்ந்தெடுக்கப்பட்டன</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="846"/>
      <source>Select a single face as support for a sketch!</source>
      <translation>ஓவியத்திற்கான ஆதரவாக ஒற்றை முகத்தைத் தேர்ந்தெடுக்கவும்!</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="853"/>
      <source>Select a face as support for a sketch!</source>
      <translation>ஓவியத்திற்கான ஆதரவாக முகத்தைத் தேர்ந்தெடுக்கவும்!</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="860"/>
      <source>Need a planar face as support for a sketch!</source>
      <translation>ச்கெட்ச்க்கு ஆதரவாக ஒரு பிளானர் முகம் தேவை!</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="867"/>
      <source>Create a plane first or select a face to sketch on</source>
      <translation>முதலில் ஒரு விமானத்தை உருவாக்கவும் அல்லது ஓவியம் வரைவதற்கு ஒரு முகத்தைத் தேர்ந்தெடுக்கவும்</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="852"/>
      <source>No support face selected</source>
      <translation>உதவி முகம் எதுவும் தேர்ந்தெடுக்கப்படவில்லை</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="859"/>
      <source>No planar support</source>
      <translation>பிளானர் உதவி இல்லை</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="866"/>
      <source>No valid planes in this document</source>
      <translation>இந்த ஆவணத்தில் செல்லுபடியாகும் விமானங்கள் இல்லை</translation>
    </message>
    <message>
      <location filename="../../ViewProviderShapeBinder.cpp" line="97"/>
      <location filename="../../Command.cpp" line="1155"/>
      <location filename="../../ViewProvider.cpp" line="137"/>
      <location filename="../../SketchWorkflow.cpp" line="763"/>
      <location filename="../../ViewProviderDatum.cpp" line="259"/>
      <source>A dialog is already open in the task panel</source>
      <translation>பணிப் பலகத்தில் ஏற்கனவே ஒரு உரையாடல் திறக்கப்பட்டுள்ளது</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1009"/>
      <source>Cannot use this command as there is no solid to subtract from.</source>
      <translation>இதிலிருந்து கழிக்க திடம் இல்லாததால் இந்தக் கட்டளையைப் பயன்படுத்த முடியாது.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1012"/>
      <source>Ensure that the body contains a feature before attempting a subtractive command.</source>
      <translation>கழித்தல் கட்டளையை முயற்சிக்கும் முன் உடலில் ஒரு நற்பொருத்தம் இருப்பதை உறுதிசெய்யவும்.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1036"/>
      <source>Cannot use selected object. Selected object must belong to the active body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட பொருளைப் பயன்படுத்த முடியாது. தேர்ந்தெடுக்கப்பட்ட பொருள் செயலில் உள்ள உடலுக்கு சொந்தமானதாக இருக்க வேண்டும்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="165"/>
      <source>There is no active body. Please activate a body before inserting a datum entity.</source>
      <translation>சுறுசுறுப்பான உடல் இல்லை. டேட்டம் உட்பொருளைச் செருகுவதற்கு முன், உடலைச் செயல்படுத்தவும்.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="150"/>
      <source>Invalid Selection</source>
      <translation type="unfinished">Invalid Selection</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="471"/>
      <source>Sub-shape binder</source>
      <translation>துணை வடிவ பைண்டர்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1068"/>
      <source>No sketch to work on</source>
      <translation>வேலை செய்ய ச்கெட்ச் இல்லை</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1069"/>
      <source>No sketch is available in the document</source>
      <translation>ஆவணத்தில் ச்கெட்ச் எதுவும் இல்லை</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2210"/>
      <source>Select only one feature in an active body.</source>
      <translation type="unfinished">Select only one feature in an active body.</translation>
    </message>
    <message>
      <location filename="../../ViewProviderShapeBinder.cpp" line="98"/>
      <location filename="../../Command.cpp" line="1156"/>
      <location filename="../../ViewProvider.cpp" line="138"/>
      <location filename="../../SketchWorkflow.cpp" line="764"/>
      <location filename="../../ViewProviderDatum.cpp" line="260"/>
      <source>Close this dialog?</source>
      <translation>இந்த உரையாடலை மூடவா?</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1838"/>
      <location filename="../../Command.cpp" line="1873"/>
      <source>Wrong selection</source>
      <translation>தவறான தேர்வு</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1839"/>
      <source>Select an edge, face, or body from a single body.</source>
      <translation>ஒற்றை உடலிலிருந்து விளிம்பு, முகம் அல்லது உடலைத் தேர்ந்தெடுக்கவும்.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1846"/>
      <location filename="../../Command.cpp" line="2209"/>
      <source>Selection is not in the active body</source>
      <translation>தேர்வு செயலில் உள்ள உடலில் இல்லை</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1874"/>
      <source>Shape of the selected part is empty</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட பகுதியின் வடிவம் காலியாக உள்ளது</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1847"/>
      <source>Select an edge, face, or body from an active body.</source>
      <translation>செயலில் உள்ள உடலிலிருந்து விளிம்பு, முகம் அல்லது உடலைத் தேர்ந்தெடுக்கவும்.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1039"/>
      <source>Consider using a shape binder or a base feature to reference external geometry in a body</source>
      <translation>ஒரு உடலில் வெளிப்புற வடிவவியலைக் குறிப்பிட, வடிவ பைண்டர் அல்லது அடிப்படை அம்சத்தைப் பயன்படுத்துவதைக் கவனியுங்கள்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1860"/>
      <source>Wrong object type</source>
      <translation>தவறான பொருள் வகை</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1861"/>
      <source>%1 works only on parts.</source>
      <translation>% 1 பாகங்களில் மட்டுமே வேலை செய்கிறது.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="74"/>
      <source>Part creation failed</source>
      <translation>பகுதி உருவாக்கம் தோல்வியடைந்தது</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="75"/>
      <source>Failed to create a part object.</source>
      <translation>ஒரு பகுதி பொருளை உருவாக்க முடியவில்லை.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="124"/>
      <location filename="../../CommandBody.cpp" line="132"/>
      <location filename="../../CommandBody.cpp" line="148"/>
      <location filename="../../CommandBody.cpp" line="214"/>
      <source>Bad base feature</source>
      <translation>மோசமான அடிப்படை நற்பொருத்தம்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="125"/>
      <source>A body cannot be based on a Part Design feature.</source>
      <translation>ஒரு உடல் பகுதி வடிவமைப்பு அம்சத்தின் அடிப்படையில் இருக்க முடியாது.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="133"/>
      <source>%1 already belongs to a body and cannot be used as a base feature for another body.</source>
      <translation>% 1 ஏற்கனவே ஒரு உடலுக்கு சொந்தமானது மற்றும் மற்றொரு உடலுக்கு அடிப்படை அம்சமாக பயன்படுத்த முடியாது.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="149"/>
      <source>Base feature (%1) belongs to other part.</source>
      <translation>அடிப்படை நற்பொருத்தம் (% 1) மற்ற பகுதிக்கு சொந்தமானது.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="176"/>
      <source>The selected shape consists of multiple solids.
This may lead to unexpected results.</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட வடிவம் பல திடப்பொருட்களைக் கொண்டுள்ளது. 
இது எதிர்பாராத முடிவுகளுக்கு வழிவகுக்கும்.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="182"/>
      <source>The selected shape consists of multiple shells.
This may lead to unexpected results.</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட வடிவம் பல குண்டுகளைக் கொண்டுள்ளது. 
இது எதிர்பாராத முடிவுகளுக்கு வழிவகுக்கும்.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="188"/>
      <source>The selected shape consists of only a shell.
This may lead to unexpected results.</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட வடிவம் ஒரு செல் மட்டுமே கொண்டது. 
இது எதிர்பாராத முடிவுகளுக்கு வழிவகுக்கும்.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="194"/>
      <source>The selected shape consists of multiple solids or shells.
This may lead to unexpected results.</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட வடிவம் பல திடப்பொருட்கள் அல்லது ஓடுகளைக் கொண்டுள்ளது. 
இது எதிர்பாராத முடிவுகளுக்கு வழிவகுக்கும்.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="203"/>
      <source>Base feature</source>
      <translation>அடிப்படை நற்பொருத்தம்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="215"/>
      <source>Body may be based on no more than one feature.</source>
      <translation>உடல் ஒன்றுக்கு மேற்பட்ட அம்சங்களின் அடிப்படையில் இருக்கலாம்.</translation>
=======
      <location filename="../../SketchWorkflow.cpp" line="809"/>
      <source>Several sub-elements selected</source>
      <translation type="unfinished">Several sub-elements selected</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="810"/>
      <source>Select a single face as support for a sketch!</source>
      <translation type="unfinished">Select a single face as support for a sketch!</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="817"/>
      <source>Select a face as support for a sketch!</source>
      <translation type="unfinished">Select a face as support for a sketch!</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="824"/>
      <source>Need a planar face as support for a sketch!</source>
      <translation type="unfinished">Need a planar face as support for a sketch!</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="831"/>
      <source>Create a plane first or select a face to sketch on</source>
      <translation type="unfinished">Create a plane first or select a face to sketch on</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="816"/>
      <source>No support face selected</source>
      <translation type="unfinished">No support face selected</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="823"/>
      <source>No planar support</source>
      <translation type="unfinished">No planar support</translation>
    </message>
    <message>
      <location filename="../../SketchWorkflow.cpp" line="830"/>
      <source>No valid planes in this document</source>
      <translation type="unfinished">No valid planes in this document</translation>
    </message>
    <message>
      <location filename="../../ViewProviderShapeBinder.cpp" line="95"/>
      <location filename="../../Command.cpp" line="1138"/>
      <location filename="../../SketchWorkflow.cpp" line="728"/>
      <location filename="../../ViewProvider.cpp" line="135"/>
      <location filename="../../ViewProviderDatum.cpp" line="257"/>
      <source>A dialog is already open in the task panel</source>
      <translation type="unfinished">A dialog is already open in the task panel</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="992"/>
      <source>Cannot use this command as there is no solid to subtract from.</source>
      <translation type="unfinished">Cannot use this command as there is no solid to subtract from.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="995"/>
      <source>Ensure that the body contains a feature before attempting a subtractive command.</source>
      <translation type="unfinished">Ensure that the body contains a feature before attempting a subtractive command.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1019"/>
      <source>Cannot use selected object. Selected object must belong to the active body</source>
      <translation type="unfinished">Cannot use selected object. Selected object must belong to the active body</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="161"/>
      <source>There is no active body. Please activate a body before inserting a datum entity.</source>
      <translation type="unfinished">There is no active body. Please activate a body before inserting a datum entity.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="467"/>
      <source>Sub-shape binder</source>
      <translation type="unfinished">Sub-shape binder</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1051"/>
      <source>No sketch to work on</source>
      <translation type="unfinished">No sketch to work on</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1052"/>
      <source>No sketch is available in the document</source>
      <translation type="unfinished">No sketch is available in the document</translation>
    </message>
    <message>
      <location filename="../../ViewProviderShapeBinder.cpp" line="96"/>
      <location filename="../../Command.cpp" line="1139"/>
      <location filename="../../SketchWorkflow.cpp" line="729"/>
      <location filename="../../ViewProvider.cpp" line="136"/>
      <location filename="../../ViewProviderDatum.cpp" line="258"/>
      <source>Close this dialog?</source>
      <translation type="unfinished">Close this dialog?</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1821"/>
      <location filename="../../Command.cpp" line="1856"/>
      <source>Wrong selection</source>
      <translation type="unfinished">Wrong selection</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1822"/>
      <source>Select an edge, face, or body from a single body.</source>
      <translation type="unfinished">Select an edge, face, or body from a single body.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1829"/>
      <location filename="../../Command.cpp" line="2191"/>
      <source>Selection is not in the active body</source>
      <translation type="unfinished">Selection is not in the active body</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1857"/>
      <source>Shape of the selected part is empty</source>
      <translation type="unfinished">Shape of the selected part is empty</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1830"/>
      <source>Select an edge, face, or body from an active body.</source>
      <translation type="unfinished">Select an edge, face, or body from an active body.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1022"/>
      <source>Consider using a shape binder or a base feature to reference external geometry in a body</source>
      <translation type="unfinished">Consider using a shape binder or a base feature to reference external geometry in a body</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1843"/>
      <source>Wrong object type</source>
      <translation type="unfinished">Wrong object type</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1844"/>
      <source>%1 works only on parts.</source>
      <translation type="unfinished">%1 works only on parts.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2192"/>
      <source>Please select only one feature in an active body.</source>
      <translation type="unfinished">Please select only one feature in an active body.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="71"/>
      <source>Part creation failed</source>
      <translation type="unfinished">Part creation failed</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="72"/>
      <source>Failed to create a part object.</source>
      <translation type="unfinished">Failed to create a part object.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="125"/>
      <location filename="../../CommandBody.cpp" line="133"/>
      <location filename="../../CommandBody.cpp" line="149"/>
      <location filename="../../CommandBody.cpp" line="215"/>
      <source>Bad base feature</source>
      <translation type="unfinished">Bad base feature</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="126"/>
      <source>A body cannot be based on a Part Design feature.</source>
      <translation type="unfinished">A body cannot be based on a Part Design feature.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="134"/>
      <source>%1 already belongs to a body and cannot be used as a base feature for another body.</source>
      <translation type="unfinished">%1 already belongs to a body and cannot be used as a base feature for another body.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="150"/>
      <source>Base feature (%1) belongs to other part.</source>
      <translation type="unfinished">Base feature (%1) belongs to other part.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="177"/>
      <source>The selected shape consists of multiple solids.
This may lead to unexpected results.</source>
      <translation type="unfinished">The selected shape consists of multiple solids.
This may lead to unexpected results.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="183"/>
      <source>The selected shape consists of multiple shells.
This may lead to unexpected results.</source>
      <translation type="unfinished">The selected shape consists of multiple shells.
This may lead to unexpected results.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="189"/>
      <source>The selected shape consists of only a shell.
This may lead to unexpected results.</source>
      <translation type="unfinished">The selected shape consists of only a shell.
This may lead to unexpected results.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="195"/>
      <source>The selected shape consists of multiple solids or shells.
This may lead to unexpected results.</source>
      <translation type="unfinished">The selected shape consists of multiple solids or shells.
This may lead to unexpected results.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="204"/>
      <source>Base feature</source>
      <translation type="unfinished">Base feature</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="216"/>
      <source>Body may be based on no more than one feature.</source>
      <translation type="unfinished">Body may be based on no more than one feature.</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="230"/>
      <source>Body</source>
<<<<<<< HEAD
      <translation>உடல்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="425"/>
      <source>Nothing to migrate</source>
      <translation>இடம்பெயர்வதற்கு எதுவும் இல்லை</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="614"/>
      <source>Edit '%1' and redefine it to use a Base or Datum plane as the sketch plane.</source>
      <translation type="unfinished">Edit '%1' and redefine it to use a Base or Datum plane as the sketch plane.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="689"/>
      <source>Select exactly one Part Design feature or a body.</source>
      <translation>சரியாக ஒரு பகுதி வடிவமைப்பு நற்பொருத்தம் அல்லது உடலைத் தேர்ந்தெடுக்கவும்.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="697"/>
      <source>Could not determine a body for the selected feature '%s'.</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட அம்சமான '%s'க்கான உடலைத் தீர்மானிக்க முடியவில்லை.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="878"/>
      <source>Only features of a single source body can be moved</source>
      <translation>ஒரு மூல உடலின் அம்சங்களை மட்டுமே நகர்த்த முடியும்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="613"/>
      <source>Sketch plane cannot be migrated</source>
      <translation>ச்கெட்ச் விமானத்தை நகர்த்த முடியாது</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="426"/>
      <source>No Part Design features without body found Nothing to migrate.</source>
      <translation>உடல் இல்லாமல் பகுதி வடிவமைப்பு நற்பொருத்தங்கள் இல்லை இடம்பெயர்வதற்கு எதுவும் இல்லை.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="688"/>
      <location filename="../../CommandBody.cpp" line="696"/>
      <location filename="../../CommandBody.cpp" line="710"/>
      <location filename="../../CommandBody.cpp" line="1064"/>
      <location filename="../../CommandBody.cpp" line="1074"/>
=======
      <translation type="unfinished">Body</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="421"/>
      <source>Nothing to migrate</source>
      <translation type="unfinished">Nothing to migrate</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="692"/>
      <source>Select exactly one Part Design feature or a body.</source>
      <translation type="unfinished">Select exactly one Part Design feature or a body.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="700"/>
      <source>Could not determine a body for the selected feature '%s'.</source>
      <translation type="unfinished">Could not determine a body for the selected feature '%s'.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="877"/>
      <source>Only features of a single source body can be moved</source>
      <translation type="unfinished">Only features of a single source body can be moved</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="616"/>
      <source>Sketch plane cannot be migrated</source>
      <translation type="unfinished">Sketch plane cannot be migrated</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="422"/>
      <source>No Part Design features without body found Nothing to migrate.</source>
      <translation type="unfinished">No Part Design features without body found Nothing to migrate.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="617"/>
      <source>Please edit '%1' and redefine it to use a Base or Datum plane as the sketch plane.</source>
      <translation type="unfinished">Please edit '%1' and redefine it to use a Base or Datum plane as the sketch plane.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="691"/>
      <location filename="../../CommandBody.cpp" line="699"/>
      <location filename="../../CommandBody.cpp" line="711"/>
      <location filename="../../CommandBody.cpp" line="1061"/>
      <location filename="../../CommandBody.cpp" line="1071"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Selection error</source>
      <translation>தேர்வு பிழை</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../CommandBody.cpp" line="711"/>
      <source>Only a solid feature can be the tip of a body.</source>
      <translation>ஒரு திடமான நற்பொருத்தம் மட்டுமே உடலின் முனையாக இருக்க முடியும்.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="847"/>
      <location filename="../../CommandBody.cpp" line="877"/>
      <location filename="../../CommandBody.cpp" line="895"/>
      <source>Features cannot be moved</source>
      <translation>அம்சங்களை நகர்த்த முடியாது</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="848"/>
      <source>Some of the selected features have dependencies in the source body</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட சில நற்பொருத்தங்கள் மூல உடலில் சார்புகளைக் கொண்டுள்ளன</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="896"/>
      <source>There are no other bodies to move to</source>
      <translation>நகர்த்த வேறு உடல்கள் இல்லை</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1065"/>
      <source>Impossible to move the base feature of a body.</source>
      <translation>உடலின் அடிப்படை அம்சத்தை நகர்த்துவது சாத்தியமற்றது.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1075"/>
      <source>Select one or more features from the same body.</source>
      <translation>ஒரே உடலில் இருந்து ஒன்று அல்லது அதற்கு மேற்பட்ட அம்சங்களைத் தேர்ந்தெடுக்கவும்.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1090"/>
      <source>Beginning of the body</source>
      <translation>உடலின் துவக்கம்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1171"/>
      <source>Dependency violation</source>
      <translation>சார்பு மீறல்</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1172"/>
      <source>Early feature must not depend on later feature.

</source>
      <translation>ஆரம்ப நற்பொருத்தம் பிற்கால அம்சத்தைச் சார்ந்திருக்கக் கூடாது.
</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="309"/>
      <source>No previous feature found</source>
      <translation>முந்தைய நற்பொருத்தம் எதுவும் இல்லை</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="310"/>
      <source>It is not possible to create a subtractive feature without a base feature available</source>
      <translation>அடிப்படை நற்பொருத்தம் இல்லாமல் கழித்தல் அம்சத்தை உருவாக்க முடியாது</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="208"/>
      <location filename="../../TaskTransformedParameters.cpp" line="433"/>
=======
      <location filename="../../CommandBody.cpp" line="712"/>
      <source>Only a solid feature can be the tip of a body.</source>
      <translation type="unfinished">Only a solid feature can be the tip of a body.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="846"/>
      <location filename="../../CommandBody.cpp" line="876"/>
      <location filename="../../CommandBody.cpp" line="894"/>
      <source>Features cannot be moved</source>
      <translation type="unfinished">Features cannot be moved</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="847"/>
      <source>Some of the selected features have dependencies in the source body</source>
      <translation type="unfinished">Some of the selected features have dependencies in the source body</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="895"/>
      <source>There are no other bodies to move to</source>
      <translation type="unfinished">There are no other bodies to move to</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1062"/>
      <source>Impossible to move the base feature of a body.</source>
      <translation type="unfinished">Impossible to move the base feature of a body.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1072"/>
      <source>Select one or more features from the same body.</source>
      <translation type="unfinished">Select one or more features from the same body.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1087"/>
      <source>Beginning of the body</source>
      <translation type="unfinished">Beginning of the body</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1168"/>
      <source>Dependency violation</source>
      <translation type="unfinished">Dependency violation</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="1169"/>
      <source>Early feature must not depend on later feature.

</source>
      <translation type="unfinished">Early feature must not depend on later feature.

</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="307"/>
      <source>No previous feature found</source>
      <translation type="unfinished">No previous feature found</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="308"/>
      <source>It is not possible to create a subtractive feature without a base feature available</source>
      <translation type="unfinished">It is not possible to create a subtractive feature without a base feature available</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="240"/>
      <location filename="../../TaskTransformedParameters.cpp" line="439"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Vertical sketch axis</source>
      <translation type="unfinished">Vertical sketch axis</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskRevolutionParameters.cpp" line="209"/>
      <location filename="../../TaskTransformedParameters.cpp" line="434"/>
=======
      <location filename="../../TaskRevolutionParameters.cpp" line="241"/>
      <location filename="../../TaskTransformedParameters.cpp" line="440"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Horizontal sketch axis</source>
      <translation type="unfinished">Horizontal sketch axis</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskRevolutionParameters.cpp" line="211"/>
      <source>Construction line %1</source>
      <translation>கட்டுமான வரி% 1</translation>
    </message>
    <message>
      <location filename="../../TaskSketchBasedParameters.cpp" line="96"/>
      <source>Face</source>
      <translation>முகம்</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="209"/>
      <source>Active Body Required</source>
      <translation>செயலில் உள்ள உடல் தேவை</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="151"/>
      <source>To use Part Design, an active body is required in the document. Activate a body (double-click) or create a new one.

For legacy documents with Part Design objects lacking a body, use the migrate function in Part Design to place them into a body.</source>
      <translation>பகுதி வடிவமைப்பைப் பயன்படுத்த, ஆவணத்தில் செயலில் உள்ள அமைப்பு தேவை. ஒரு உடலை இயக்கவும் (இரு சொடுக்கு செய்யவும்) அல்லது புதிய ஒன்றை உருவாக்கவும். 

உடல் இல்லாத பகுதி வடிவமைப்புப் பொருட்களைக் கொண்ட மரபு ஆவணங்களுக்கு, அவற்றை உடலில் வைக்க பகுதி வடிவமைப்பில் இடம்பெயர்வு செயல்பாட்டைப் பயன்படுத்தவும்.</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="210"/>
      <source>To create a new Part Design object, an active body is required in the document. Activate an existing body (double-click) or create a new one.</source>
      <translation>ஒரு புதிய பகுதி வடிவமைப்பு பொருளை உருவாக்க, ஆவணத்தில் செயலில் உள்ள உடல் தேவை. ஏற்கனவே உள்ள உடலை இயக்கவும் (இரு சொடுக்கு செய்யவும்) அல்லது புதிய ஒன்றை உருவாக்கவும்.</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="272"/>
      <source>Feature is not in a body</source>
      <translation>நற்பொருத்தம் உடலில் இல்லை</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="273"/>
      <source>In order to use this feature it needs to belong to a body object in the document.</source>
      <translation>இந்த அம்சத்தைப் பயன்படுத்த, அது ஆவணத்தில் உள்ள ஒரு பொருளுக்குச் சொந்தமானதாக இருக்க வேண்டும்.</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="319"/>
      <source>Feature is not in a part</source>
      <translation>நற்பொருத்தம் ஒரு பகுதியில் இல்லை</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="320"/>
      <source>In order to use this feature it needs to belong to a part object in the document.</source>
      <translation>இந்த அம்சத்தைப் பயன்படுத்த, அது ஆவணத்தில் உள்ள ஒரு பகுதிப் பொருளுக்குச் சொந்தமானதாக இருக்க வேண்டும்.</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDressUp.cpp" line="64"/>
      <location filename="../../ViewProviderShapeBinder.cpp" line="227"/>
      <location filename="../../ViewProviderTransformed.cpp" line="67"/>
      <location filename="../../ViewProvider.cpp" line="94"/>
      <source>Edit %1</source>
      <translation>திருத்த % 1</translation>
    </message>
    <message>
      <location filename="../../ViewProvider.cpp" line="107"/>
      <source>Set Face Colors</source>
      <translation>முக நிறங்களை அமைக்கவும்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="114"/>
      <location filename="../../ViewProviderDatum.cpp" line="214"/>
      <source>Plane</source>
      <translation>தளம்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="119"/>
      <location filename="../../ViewProviderDatum.cpp" line="209"/>
      <source>Line</source>
      <translation>வரி</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="124"/>
      <location filename="../../ViewProviderDatum.cpp" line="219"/>
      <source>Point</source>
      <translation>புள்ளியம்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="129"/>
      <source>Coordinate System</source>
      <translation>ஒருங்கிணைப்பு அமைப்பு</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="236"/>
      <source>Edit Datum</source>
      <translation>தேதியைத் திருத்தவும்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDressUp.cpp" line="93"/>
      <source>Feature error</source>
      <translation>அம்சப் பிழை</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDressUp.cpp" line="94"/>
      <source>%1 misses a base feature.
This feature is broken and cannot be edited.</source>
      <translation>% 1 அடிப்படை அம்சத்தை தவறவிட்டது. 
இந்த நற்பொருத்தம் உடைந்துவிட்டது மற்றும் திருத்த முடியாது.</translation>
    </message>
    <message>
      <location filename="../../ViewProviderShapeBinder.cpp" line="222"/>
      <source>Edit Shape Binder</source>
      <translation>வடிவ பைண்டரைத் திருத்து</translation>
    </message>
    <message>
      <location filename="../../ViewProviderShapeBinder.cpp" line="352"/>
      <source>Synchronize</source>
      <translation>ஒத்திசைக்கவும்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderShapeBinder.cpp" line="354"/>
      <source>Select Bound Object</source>
      <translation>பிணைக்கப்பட்ட பொருளைத் தேர்ந்தெடுக்கவும்</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="156"/>
      <source>The document "%1" you are editing was designed with an old version of Part Design workbench.</source>
      <translation>நீங்கள் திருத்தும் ஆவணம் "% 1" பகுதி வடிவமைப்பு பணியிடத்தின் பழைய பதிப்புடன் வடிவமைக்கப்பட்டது.</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="163"/>
      <source>Migrate in order to use modern Part Design features?</source>
      <translation>நவீன பகுதி வடிவமைப்பு அம்சங்களைப் பயன்படுத்துவதற்காக நகர்த்தவா?</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="168"/>
      <source>The document "%1" seems to be either in the middle of the migration process from legacy Part Design or have a slightly broken structure.</source>
      <translation>"% 1" ஆவணம் மரபு பகுதி வடிவமைப்பிலிருந்து இடம்பெயர்வு செயல்முறையின் நடுவில் இருப்பதாகவோ அல்லது சற்று உடைந்த கட்டமைப்பைக் கொண்டதாகவோ தெரிகிறது.</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="175"/>
      <source>Make the migration automatically?</source>
      <translation>இடம்பெயர்வை தானாகவே செய்யவா?</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="178"/>
      <source>Note: If you choose to migrate you won't be able to edit the file with an older FreeCAD version.
If you refuse to migrate you won't be able to use new PartDesign features like Bodies and Parts. As a result you also won't be able to use your parts in the assembly workbench.
Although you will be able to migrate any moment later with 'Part Design -&gt; Migrate'.</source>
      <translation>குறிப்பு: நீங்கள் இடம்பெயர்வதைத் தேர்வுசெய்தால், பழைய FreeCAD பதிப்பில் கோப்பைத் திருத்த முடியாது. 
நீங்கள் இடமாற்றம் செய்ய மறுத்தால், உடல்கள் மற்றும் பாகங்கள் போன்ற புதிய பார்ட் டிசைன் அம்சங்களை உங்களால் பயன்படுத்த முடியாது. இதன் விளைவாக, அசெம்பிளி வொர்க் பெஞ்சில் உங்களால் உங்களின் பாகங்களைப் பயன்படுத்த முடியாது. 
'பகுதி வடிவமைப்பு -&gt; இடம்பெயர்வு' மூலம் எந்த நேரத்திலும் நீங்கள் நகர்த்த முடியும்.</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="191"/>
      <source>Migrate Manually</source>
      <translation>கைமுறையாக நகர்த்தவும்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderBoolean.cpp" line="350"/>
      <source>Edit Boolean</source>
      <translation>பூலியனைத் திருத்து</translation>
    </message>
    <message>
      <location filename="../../ViewProviderChamfer.cpp" line="42"/>
      <source>Edit Chamfer</source>
      <translation>சேம்பரைத் திருத்து</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDraft.cpp" line="43"/>
      <source>Edit Draft</source>
      <translation>வரைவைத் திருத்தவும்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderFillet.cpp" line="42"/>
      <source>Edit Fillet</source>
      <translation>ஃபில்லட்டைத் திருத்தவும்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderGroove.cpp" line="45"/>
      <source>Edit Groove</source>
      <translation>பள்ளத்தைத் திருத்தவும்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderHelix.cpp" line="50"/>
      <source>Edit Helix</source>
      <translation>எலிக்ச் திருத்தவும்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderHole.cpp" line="130"/>
      <source>Edit Hole</source>
      <translation>திருத்து துளை</translation>
    </message>
    <message>
      <location filename="../../ViewProviderLinearPattern.cpp" line="40"/>
      <source>Edit Linear Pattern</source>
      <translation>நேரியல் வடிவத்தைத் திருத்து</translation>
    </message>
    <message>
      <location filename="../../ViewProviderLoft.cpp" line="67"/>
      <source>Edit Loft</source>
      <translation>மாடியைத் திருத்தவும்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderMirrored.cpp" line="40"/>
=======
      <location filename="../../TaskRevolutionParameters.cpp" line="243"/>
      <source>Construction line %1</source>
      <translation type="unfinished">Construction line %1</translation>
    </message>
    <message>
      <location filename="../../TaskSketchBasedParameters.cpp" line="94"/>
      <source>Face</source>
      <translation type="unfinished">Face</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="206"/>
      <source>Active Body Required</source>
      <translation type="unfinished">Active Body Required</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="148"/>
      <source>To use Part Design, an active body is required in the document. Activate a body (double-click) or create a new one.

For legacy documents with Part Design objects lacking a body, use the migrate function in Part Design to place them into a body.</source>
      <translation type="unfinished">To use Part Design, an active body is required in the document. Activate a body (double-click) or create a new one.

For legacy documents with Part Design objects lacking a body, use the migrate function in Part Design to place them into a body.</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="207"/>
      <source>To create a new Part Design object, an active body is required in the document. Activate an existing body (double-click) or create a new one.</source>
      <translation type="unfinished">To create a new Part Design object, an active body is required in the document. Activate an existing body (double-click) or create a new one.</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="273"/>
      <source>Feature is not in a body</source>
      <translation type="unfinished">Feature is not in a body</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="274"/>
      <source>In order to use this feature it needs to belong to a body object in the document.</source>
      <translation type="unfinished">In order to use this feature it needs to belong to a body object in the document.</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="320"/>
      <source>Feature is not in a part</source>
      <translation type="unfinished">Feature is not in a part</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="321"/>
      <source>In order to use this feature it needs to belong to a part object in the document.</source>
      <translation type="unfinished">In order to use this feature it needs to belong to a part object in the document.</translation>
    </message>
    <message>
      <location filename="../../ViewProviderShapeBinder.cpp" line="225"/>
      <location filename="../../ViewProviderTransformed.cpp" line="63"/>
      <location filename="../../ViewProviderDressUp.cpp" line="62"/>
      <location filename="../../ViewProvider.cpp" line="92"/>
      <source>Edit %1</source>
      <translation type="unfinished">Edit %1</translation>
    </message>
    <message>
      <location filename="../../ViewProvider.cpp" line="105"/>
      <source>Set Face Colors</source>
      <translation type="unfinished">Set Face Colors</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="112"/>
      <location filename="../../ViewProviderDatum.cpp" line="212"/>
      <source>Plane</source>
      <translation type="unfinished">Plane</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="117"/>
      <location filename="../../ViewProviderDatum.cpp" line="207"/>
      <source>Line</source>
      <translation type="unfinished">Line</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="122"/>
      <location filename="../../ViewProviderDatum.cpp" line="217"/>
      <source>Point</source>
      <translation type="unfinished">Point</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="127"/>
      <source>Coordinate System</source>
      <translation type="unfinished">Coordinate System</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="234"/>
      <source>Edit Datum</source>
      <translation type="unfinished">Edit Datum</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDressUp.cpp" line="91"/>
      <source>Feature error</source>
      <translation type="unfinished">Feature error</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDressUp.cpp" line="92"/>
      <source>%1 misses a base feature.
This feature is broken and cannot be edited.</source>
      <translation type="unfinished">%1 misses a base feature.
This feature is broken and cannot be edited.</translation>
    </message>
    <message>
      <location filename="../../ViewProviderShapeBinder.cpp" line="220"/>
      <source>Edit Shape Binder</source>
      <translation type="unfinished">Edit Shape Binder</translation>
    </message>
    <message>
      <location filename="../../ViewProviderShapeBinder.cpp" line="350"/>
      <source>Synchronize</source>
      <translation type="unfinished">Synchronize</translation>
    </message>
    <message>
      <location filename="../../ViewProviderShapeBinder.cpp" line="352"/>
      <source>Select Bound Object</source>
      <translation type="unfinished">Select Bound Object</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="154"/>
      <source>The document "%1" you are editing was designed with an old version of Part Design workbench.</source>
      <translation type="unfinished">The document "%1" you are editing was designed with an old version of Part Design workbench.</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="161"/>
      <source>Migrate in order to use modern Part Design features?</source>
      <translation type="unfinished">Migrate in order to use modern Part Design features?</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="166"/>
      <source>The document "%1" seems to be either in the middle of the migration process from legacy Part Design or have a slightly broken structure.</source>
      <translation type="unfinished">The document "%1" seems to be either in the middle of the migration process from legacy Part Design or have a slightly broken structure.</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="173"/>
      <source>Make the migration automatically?</source>
      <translation type="unfinished">Make the migration automatically?</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="176"/>
      <source>Note: If you choose to migrate you won't be able to edit the file with an older FreeCAD version.
If you refuse to migrate you won't be able to use new PartDesign features like Bodies and Parts. As a result you also won't be able to use your parts in the assembly workbench.
Although you will be able to migrate any moment later with 'Part Design -&gt; Migrate'.</source>
      <translation type="unfinished">Note: If you choose to migrate you won't be able to edit the file with an older FreeCAD version.
If you refuse to migrate you won't be able to use new PartDesign features like Bodies and Parts. As a result you also won't be able to use your parts in the assembly workbench.
Although you will be able to migrate any moment later with 'Part Design -&gt; Migrate'.</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="189"/>
      <source>Migrate Manually</source>
      <translation type="unfinished">Migrate Manually</translation>
    </message>
    <message>
      <location filename="../../ViewProviderBoolean.cpp" line="67"/>
      <source>Edit Boolean</source>
      <translation type="unfinished">Edit Boolean</translation>
    </message>
    <message>
      <location filename="../../ViewProviderChamfer.cpp" line="40"/>
      <source>Edit Chamfer</source>
      <translation type="unfinished">Edit Chamfer</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDraft.cpp" line="41"/>
      <source>Edit Draft</source>
      <translation type="unfinished">Edit Draft</translation>
    </message>
    <message>
      <location filename="../../ViewProviderFillet.cpp" line="40"/>
      <source>Edit Fillet</source>
      <translation type="unfinished">Edit Fillet</translation>
    </message>
    <message>
      <location filename="../../ViewProviderGroove.cpp" line="43"/>
      <source>Edit Groove</source>
      <translation type="unfinished">Edit Groove</translation>
    </message>
    <message>
      <location filename="../../ViewProviderHelix.cpp" line="48"/>
      <source>Edit Helix</source>
      <translation type="unfinished">Edit Helix</translation>
    </message>
    <message>
      <location filename="../../ViewProviderHole.cpp" line="63"/>
      <source>Edit Hole</source>
      <translation type="unfinished">Edit Hole</translation>
    </message>
    <message>
      <location filename="../../ViewProviderLinearPattern.cpp" line="38"/>
      <source>Edit Linear Pattern</source>
      <translation type="unfinished">Edit Linear Pattern</translation>
    </message>
    <message>
      <location filename="../../ViewProviderLoft.cpp" line="65"/>
      <source>Edit Loft</source>
      <translation type="unfinished">Edit Loft</translation>
    </message>
    <message>
      <location filename="../../ViewProviderMirrored.cpp" line="38"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Edit Mirror</source>
      <translation>கண்ணாடியைத் திருத்து</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../ViewProviderMultiTransform.cpp" line="49"/>
      <source>Edit Multi-Transform</source>
      <translation>பல மாற்றங்களைத் திருத்தவும்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderPad.cpp" line="45"/>
      <source>Edit Pad</source>
      <translation>திருத்த திண்டு</translation>
    </message>
    <message>
      <location filename="../../ViewProviderPipe.cpp" line="77"/>
      <source>Edit Pipe</source>
      <translation>குழாய் திருத்தவும்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderPocket.cpp" line="47"/>
      <source>Edit Pocket</source>
      <translation>பாக்கெட்டை திருத்து</translation>
    </message>
    <message>
      <location filename="../../ViewProviderPolarPattern.cpp" line="40"/>
      <source>Edit Polar Pattern</source>
      <translation>துருவ வடிவத்தைத் திருத்து</translation>
    </message>
    <message>
      <location filename="../../ViewProviderPrimitive.cpp" line="52"/>
      <source>Edit Primitive</source>
      <translation>பழமையானதைத் திருத்தவும்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderRevolution.cpp" line="45"/>
      <source>Edit Revolution</source>
      <translation>திருத்து புரட்சி</translation>
    </message>
    <message>
      <location filename="../../ViewProviderScaled.cpp" line="40"/>
      <source>Edit Scale</source>
      <translation>அளவை திருத்தவும்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderThickness.cpp" line="42"/>
      <source>Edit Thickness</source>
      <translation>தடிமன் திருத்தவும்</translation>
=======
      <location filename="../../ViewProviderMultiTransform.cpp" line="47"/>
      <source>Edit Multi-Transform</source>
      <translation type="unfinished">Edit Multi-Transform</translation>
    </message>
    <message>
      <location filename="../../ViewProviderPad.cpp" line="43"/>
      <source>Edit Pad</source>
      <translation type="unfinished">Edit Pad</translation>
    </message>
    <message>
      <location filename="../../ViewProviderPipe.cpp" line="75"/>
      <source>Edit Pipe</source>
      <translation type="unfinished">Edit Pipe</translation>
    </message>
    <message>
      <location filename="../../ViewProviderPocket.cpp" line="45"/>
      <source>Edit Pocket</source>
      <translation type="unfinished">Edit Pocket</translation>
    </message>
    <message>
      <location filename="../../ViewProviderPolarPattern.cpp" line="38"/>
      <source>Edit Polar Pattern</source>
      <translation type="unfinished">Edit Polar Pattern</translation>
    </message>
    <message>
      <location filename="../../ViewProviderPrimitive.cpp" line="49"/>
      <source>Edit Primitive</source>
      <translation type="unfinished">Edit Primitive</translation>
    </message>
    <message>
      <location filename="../../ViewProviderRevolution.cpp" line="43"/>
      <source>Edit Revolution</source>
      <translation type="unfinished">Edit Revolution</translation>
    </message>
    <message>
      <location filename="../../ViewProviderScaled.cpp" line="38"/>
      <source>Edit Scale</source>
      <translation type="unfinished">Edit Scale</translation>
    </message>
    <message>
      <location filename="../../ViewProviderThickness.cpp" line="40"/>
      <source>Edit Thickness</source>
      <translation type="unfinished">Edit Thickness</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>SprocketParameter</name>
    <message>
      <location filename="../../../SprocketFeature.ui" line="14"/>
      <source>Sprocket Parameters</source>
<<<<<<< HEAD
      <translation>ச்ப்ராக்கெட் அளவுருக்கள்</translation>
=======
      <translation type="unfinished">Sprocket Parameters</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="26"/>
      <source>Number of teeth</source>
<<<<<<< HEAD
      <translation>பற்களின் எண்ணிக்கை</translation>
=======
      <translation type="unfinished">Number of teeth</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="52"/>
      <source>Sprocket reference</source>
<<<<<<< HEAD
      <translation>ச்ப்ராக்கெட் குறிப்பு</translation>
=======
      <translation type="unfinished">Sprocket reference</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="66"/>
      <source>ANSI 25</source>
      <translation type="unfinished">ANSI 25</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="71"/>
      <source>ANSI 35</source>
      <translation type="unfinished">ANSI 35</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="76"/>
      <source>ANSI 41</source>
      <translation type="unfinished">ANSI 41</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="81"/>
      <source>ANSI 40</source>
      <translation type="unfinished">ANSI 40</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="86"/>
      <source>ANSI 50</source>
      <translation type="unfinished">ANSI 50</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="91"/>
      <source>ANSI 60</source>
      <translation type="unfinished">ANSI 60</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="96"/>
      <source>ANSI 80</source>
      <translation type="unfinished">ANSI 80</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="101"/>
      <source>ANSI 100</source>
      <translation type="unfinished">ANSI 100</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="106"/>
      <source>ANSI 120</source>
      <translation type="unfinished">ANSI 120</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="111"/>
      <source>ANSI 140</source>
      <translation type="unfinished">ANSI 140</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="116"/>
      <source>ANSI 160</source>
      <translation type="unfinished">ANSI 160</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="121"/>
      <source>ANSI 180</source>
      <translation type="unfinished">ANSI 180</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="126"/>
      <source>ANSI 200</source>
      <translation type="unfinished">ANSI 200</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="131"/>
      <source>ANSI 240</source>
      <translation type="unfinished">ANSI 240</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="136"/>
      <source>Bicycle with derailleur</source>
<<<<<<< HEAD
      <translation>டிரெயில்லருடன் சைக்கிள்</translation>
=======
      <translation type="unfinished">Bicycle with derailleur</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="141"/>
      <source>Bicycle without derailleur</source>
<<<<<<< HEAD
      <translation>தடம்புரளாத சைக்கிள்</translation>
=======
      <translation type="unfinished">Bicycle without derailleur</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="219"/>
      <source>Chain pitch</source>
<<<<<<< HEAD
      <translation>சங்கிலி சுருதி</translation>
=======
      <translation type="unfinished">Chain pitch</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="266"/>
      <source>Chain roller diameter</source>
<<<<<<< HEAD
      <translation>சங்கிலி உருளை விட்டம்</translation>
=======
      <translation type="unfinished">Chain roller diameter</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="310"/>
      <source>Tooth width</source>
<<<<<<< HEAD
      <translation>பல் அகலம்</translation>
=======
      <translation type="unfinished">Tooth width</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="146"/>
      <source>ISO 606 06B</source>
      <translation type="unfinished">ISO 606 06B</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="151"/>
      <source>ISO 606 08B</source>
      <translation type="unfinished">ISO 606 08B</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="156"/>
      <source>ISO 606 10B</source>
      <translation type="unfinished">ISO 606 10B</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="161"/>
      <source>ISO 606 12B</source>
      <translation type="unfinished">ISO 606 12B</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="166"/>
      <source>ISO 606 16B</source>
      <translation type="unfinished">ISO 606 16B</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="171"/>
      <source>ISO 606 20B</source>
      <translation type="unfinished">ISO 606 20B</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="176"/>
      <source>ISO 606 24B</source>
      <translation type="unfinished">ISO 606 24B</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="181"/>
      <source>Motorcycle 420</source>
<<<<<<< HEAD
      <translation>மின்னோடி சைக்கிள் 420</translation>
=======
      <translation type="unfinished">Motorcycle 420</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="186"/>
      <source>Motorcycle 425</source>
<<<<<<< HEAD
      <translation>மின்னோடி சைக்கிள் 425</translation>
=======
      <translation type="unfinished">Motorcycle 425</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="191"/>
      <source>Motorcycle 428</source>
<<<<<<< HEAD
      <translation>மின்னோடி சைக்கிள் 428</translation>
=======
      <translation type="unfinished">Motorcycle 428</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="196"/>
      <source>Motorcycle 520</source>
<<<<<<< HEAD
      <translation>மின்னோடி சைக்கிள் 520</translation>
=======
      <translation type="unfinished">Motorcycle 520</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="201"/>
      <source>Motorcycle 525</source>
<<<<<<< HEAD
      <translation>மின்னோடி சைக்கிள் 525</translation>
=======
      <translation type="unfinished">Motorcycle 525</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="206"/>
      <source>Motorcycle 530</source>
<<<<<<< HEAD
      <translation>மின்னோடி சைக்கிள் 530</translation>
=======
      <translation type="unfinished">Motorcycle 530</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="211"/>
      <source>Motorcycle 630</source>
<<<<<<< HEAD
      <translation>மின்னோடி சைக்கிள் 630</translation>
=======
      <translation type="unfinished">Motorcycle 630</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="238"/>
      <source>0 in</source>
<<<<<<< HEAD
      <translation>0 இன்</translation>
=======
      <translation type="unfinished">0 in</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>TaskHoleParameters</name>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskHoleParameters.ui" line="824"/>
      <source>Live update of changes to the thread
Note that the calculation can take some time</source>
      <translation>தொடரிழையில் மாற்றங்களின் நேரடி புதுப்பிப்பு 
கணக்கீடு சிறிது நேரம் ஆகலாம் என்பதை நினைவில் கொள்க</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="1019"/>
      <source>Thread Depth</source>
      <translation>நூல் ஆழம்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="1072"/>
      <source>Customize thread clearance</source>
      <translation>நூல் அனுமதியைத் தனிப்பயனாக்கு</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="699"/>
      <source>Clearance</source>
      <translation>இசைவு</translation>
=======
      <location filename="../../TaskHoleParameters.ui" line="813"/>
      <source>Live update of changes to the thread
Note that the calculation can take some time</source>
      <translation type="unfinished">Live update of changes to the thread
Note that the calculation can take some time</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="1006"/>
      <source>Thread Depth</source>
      <translation type="unfinished">Thread Depth</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="1059"/>
      <source>Customize thread clearance</source>
      <translation type="unfinished">Customize thread clearance</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="709"/>
      <source>Clearance</source>
      <translation type="unfinished">Clearance</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="65"/>
      <source>Head type</source>
<<<<<<< HEAD
      <translation>தலை வகை</translation>
=======
      <translation type="unfinished">Head type</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="153"/>
      <source>Depth type</source>
<<<<<<< HEAD
      <translation>ஆழம் வகை</translation>
=======
      <translation type="unfinished">Depth type</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="245"/>
      <source>Head diameter</source>
<<<<<<< HEAD
      <translation>தலை விட்டம்</translation>
=======
      <translation type="unfinished">Head diameter</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="293"/>
      <source>Head depth</source>
<<<<<<< HEAD
      <translation>தலை ஆழம்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="668"/>
      <source>Clearance / Passthrough</source>
      <translation>கிளியரன்ச் / பாச்த்ரூ</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="686"/>
      <source>Hole type</source>
      <translation>துளை வகை</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="828"/>
      <source>Update thread view</source>
      <translation>நூல் காட்சியைப் புதுப்பிக்கவும்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="1078"/>
      <source>Custom Clearance</source>
      <translation>தனிப்பயன் இசைவு</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="1091"/>
      <source>Custom Thread clearance value</source>
      <translation>தனிப்பயன் நூல் இசைவு மதிப்பு</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="881"/>
      <source>Direction</source>
      <translation>திசை</translation>
=======
      <translation type="unfinished">Head depth</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="678"/>
      <source>Clearance / Passthrough</source>
      <translation type="unfinished">Clearance / Passthrough</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="683"/>
      <source>Tap drill (to be threaded)</source>
      <translation type="unfinished">Tap drill (to be threaded)</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="688"/>
      <source>Modeled thread</source>
      <translation type="unfinished">Modeled thread</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="696"/>
      <source>Hole type</source>
      <translation type="unfinished">Hole type</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="817"/>
      <source>Update thread view</source>
      <translation type="unfinished">Update thread view</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="1065"/>
      <source>Custom Clearance</source>
      <translation type="unfinished">Custom Clearance</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="1078"/>
      <source>Custom Thread clearance value</source>
      <translation type="unfinished">Custom Thread clearance value</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="868"/>
      <source>Direction</source>
      <translation type="unfinished">Direction</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="49"/>
      <source>Size</source>
<<<<<<< HEAD
      <translation>அளவு</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="712"/>
      <source>Hole clearance
Only available for holes without thread</source>
      <translation>துளை நீக்கம் 
நூல் இல்லாத துளைகளுக்கு மட்டுமே கிடைக்கும்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="88"/>
      <location filename="../../TaskHoleParameters.ui" line="717"/>
=======
      <translation type="unfinished">Size</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="722"/>
      <source>Hole clearance
Only available for holes without thread</source>
      <translation type="unfinished">Hole clearance
Only available for holes without thread</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="88"/>
      <location filename="../../TaskHoleParameters.ui" line="727"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Standard</source>
      <translation>அடிப்படை</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskHoleParameters.ui" line="673"/>
      <source>Tap drill</source>
      <translation type="unfinished">Tap drill</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="678"/>
      <source>Threaded</source>
      <translation type="unfinished">Threaded</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="722"/>
=======
      <location filename="../../TaskHoleParameters.ui" line="732"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Close</source>
      <translation>மூடு</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskHoleParameters.ui" line="727"/>
      <source>Wide</source>
      <translation>அகலமான</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="805"/>
      <source>Whether the hole gets a modelled thread</source>
      <translation type="unfinished">Whether the hole gets a modelled thread</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="808"/>
      <source>Model Thread</source>
      <translation type="unfinished">Model Thread</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="861"/>
      <source>Class</source>
      <translation>வகுப்பு</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="848"/>
      <source>Tolerance class for threaded holes according to hole profile</source>
      <translation>துளை சுயவிவரத்தின் படி திரிக்கப்பட்ட துளைகளுக்கான சகிப்புத்தன்மை வகுப்பு</translation>
=======
      <location filename="../../TaskHoleParameters.ui" line="737"/>
      <source>Wide</source>
      <translation type="unfinished">Wide</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="848"/>
      <source>Class</source>
      <translation type="unfinished">Class</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="835"/>
      <source>Tolerance class for threaded holes according to hole profile</source>
      <translation type="unfinished">Tolerance class for threaded holes according to hole profile</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="552"/>
      <source>Diameter</source>
      <translation>விட்டம்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="574"/>
      <source>Hole diameter</source>
<<<<<<< HEAD
      <translation>துளை விட்டம்</translation>
=======
      <translation type="unfinished">Hole diameter</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="507"/>
      <source>Depth</source>
<<<<<<< HEAD
      <translation>ஆழம்</translation>
=======
      <translation type="unfinished">Depth</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="20"/>
      <source>Hole Parameters</source>
<<<<<<< HEAD
      <translation>துளை அளவுருக்கள்</translation>
=======
      <translation type="unfinished">Hole Parameters</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="95"/>
      <source>Base profile types</source>
<<<<<<< HEAD
      <translation>அடிப்படை சுயவிவர வகைகள்</translation>
=======
      <translation type="unfinished">Base profile types</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="126"/>
      <source>Circles and arcs</source>
<<<<<<< HEAD
      <translation>வட்டங்கள் மற்றும் வளைவுகள்</translation>
=======
      <translation type="unfinished">Circles and arcs</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="131"/>
      <source>Points, circles and arcs</source>
<<<<<<< HEAD
      <translation>புள்ளிகள், வட்டங்கள் மற்றும் வளைவுகள்</translation>
=======
      <translation type="unfinished">Points, circles and arcs</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="136"/>
      <source>Points</source>
<<<<<<< HEAD
      <translation>பிரிவகம்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="170"/>
      <location filename="../../TaskHoleParameters.ui" line="989"/>
=======
      <translation type="unfinished">Points</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="170"/>
      <location filename="../../TaskHoleParameters.ui" line="976"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Dimension</source>
      <translation>பரிமாணம்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="175"/>
      <source>Through all</source>
<<<<<<< HEAD
      <translation>அனைத்து மூலம்</translation>
=======
      <translation type="unfinished">Through all</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="197"/>
      <source>Custom head values</source>
<<<<<<< HEAD
      <translation>தனிப்பயன் தலை மதிப்புகள்</translation>
=======
      <translation type="unfinished">Custom head values</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="367"/>
      <source>Drill angle</source>
      <extracomment>Translate it as short as possible</extracomment>
<<<<<<< HEAD
      <translation>துளை கோணம்</translation>
=======
      <translation type="unfinished">Drill angle</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="403"/>
      <source>Include in depth</source>
      <extracomment>Translate it as short as possible</extracomment>
<<<<<<< HEAD
      <translation>ஆழத்தில் சேர்க்கவும்</translation>
=======
      <translation type="unfinished">Include in depth</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="610"/>
      <source>Switch direction</source>
<<<<<<< HEAD
      <translation>திசை மாறவும்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="773"/>
=======
      <translation type="unfinished">Switch direction</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="662"/>
      <source>&lt;b&gt;Threading&lt;/b&gt;</source>
      <translation type="unfinished">&lt;b&gt;Threading&lt;/b&gt;</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="783"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Thread</source>
      <translation>நூல்</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskHoleParameters.ui" line="905"/>
      <source>&amp;Right hand</source>
      <translation>வலது கை</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="921"/>
      <source>&amp;Left hand</source>
      <translation>இடது கை</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="970"/>
      <source>Thread Depth Type</source>
      <translation>நூல் ஆழம் வகை</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="984"/>
      <source>Hole depth</source>
      <translation>துளை ஆழம்</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="994"/>
      <source>Tapped (DIN76)</source>
      <translation>தட்டப்பட்டது (DIN76)</translation>
=======
      <location filename="../../TaskHoleParameters.ui" line="892"/>
      <source>&amp;Right hand</source>
      <translation type="unfinished">&amp;Right hand</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="908"/>
      <source>&amp;Left hand</source>
      <translation type="unfinished">&amp;Left hand</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="957"/>
      <source>Thread Depth Type</source>
      <translation type="unfinished">Thread Depth Type</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="971"/>
      <source>Hole depth</source>
      <translation type="unfinished">Hole depth</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="981"/>
      <source>Tapped (DIN76)</source>
      <translation type="unfinished">Tapped (DIN76)</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="118"/>
      <source>Cut type for screw heads</source>
<<<<<<< HEAD
      <translation>திருகு தலைகளுக்கான வெட்டு வகை</translation>
=======
      <translation type="unfinished">Cut type for screw heads</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="191"/>
      <source>Check to override the values predefined by the 'Type'</source>
<<<<<<< HEAD
      <translation>'வகை' மூலம் முன் வரையறுக்கப்பட்ட மதிப்புகளை மேலெழுதச் சரிபார்க்கவும்</translation>
=======
      <translation type="unfinished">Check to override the values predefined by the 'Type'</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="306"/>
      <source>For countersinks this is the depth of
the screw's top below the surface</source>
<<<<<<< HEAD
      <translation>கவுண்டர்சிங்குகளுக்கு இது ஆழம் 
திருகு மேற்பரப்பிற்கு கீழே உள்ளது</translation>
=======
      <translation type="unfinished">For countersinks this is the depth of
the screw's top below the surface</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="462"/>
      <source>Countersink angle</source>
<<<<<<< HEAD
      <translation>எதிர்முனை கோணம்</translation>
=======
      <translation type="unfinished">Countersink angle</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="399"/>
      <source>The size of the drill point will be taken into
account for the depth of blind holes</source>
<<<<<<< HEAD
      <translation>துளையிடும் புள்ளியின் அளவு கணக்கில் எடுத்துக்கொள்ளப்படும் 
குருட்டு துளைகளின் ஆழத்தை கணக்கிடுகிறது</translation>
=======
      <translation type="unfinished">The size of the drill point will be taken into
account for the depth of blind holes</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="626"/>
      <source>Tapered</source>
<<<<<<< HEAD
      <translation>குறுகலான</translation>
=======
      <translation type="unfinished">Tapered</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="639"/>
      <source>Taper angle for the hole
90 degree: straight hole
under 90: smaller hole radius at the bottom
over 90: larger hole radius at the bottom</source>
<<<<<<< HEAD
      <translation>துளைக்கான டேப்பர் கோணம் 
90 டிகிரி: நேரான துளை 
90 கீழ்: கீழே சிறிய துளை ஆரம் 
90க்கு மேல்: கீழே பெரிய துளை ஆரம்</translation>
=======
      <translation type="unfinished">Taper angle for the hole
90 degree: straight hole
under 90: smaller hole radius at the bottom
over 90: larger hole radius at the bottom</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="607"/>
      <source>Reverses the hole direction</source>
<<<<<<< HEAD
      <translation>துளை திசையை மாற்றுகிறது</translation>
=======
      <translation type="unfinished">Reverses the hole direction</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>TaskTransformedMessages</name>
    <message>
      <location filename="../../TaskTransformedMessages.ui" line="25"/>
      <source>No message</source>
<<<<<<< HEAD
      <translation>செய்தி இல்லை</translation>
=======
      <translation type="unfinished">No message</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>Workbench</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Workbench.cpp" line="43"/>
      <source>&amp;Sketch</source>
      <translation>&amp;ச்கெட்ச்</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="45"/>
      <source>&amp;Part Design</source>
      <translation>&amp;பகுதி வடிவமைப்பு</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="46"/>
      <source>Datums</source>
      <translation>தேதி</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="47"/>
      <source>Additive Features</source>
      <translation>சேர்க்கை நற்பொருத்தங்கள்</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="48"/>
      <source>Subtractive Features</source>
      <translation>கழித்தல் நற்பொருத்தங்கள்</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="49"/>
      <source>Dress-Up Features</source>
      <translation>ஆடை-அப் நற்பொருத்தங்கள்</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="50"/>
      <source>Transformation Features</source>
      <translation>உருமாற்ற நற்பொருத்தங்கள்</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="51"/>
      <source>Sprocket…</source>
      <translation>ச்ப்ராக்கெட்…</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="52"/>
      <source>Involute Gear</source>
      <translation>இன்வால்யூட் கியர்</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="54"/>
      <source>Shaft Design Wizard</source>
      <translation>தண்டு வடிவமைப்பு வழிகாட்டி</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="62"/>
=======
      <location filename="../../Workbench.cpp" line="41"/>
      <source>&amp;Sketch</source>
      <translation type="unfinished">&amp;Sketch</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="43"/>
      <source>&amp;Part Design</source>
      <translation type="unfinished">&amp;Part Design</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="44"/>
      <source>Datums</source>
      <translation type="unfinished">Datums</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="45"/>
      <source>Additive Features</source>
      <translation type="unfinished">Additive Features</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="46"/>
      <source>Subtractive Features</source>
      <translation type="unfinished">Subtractive Features</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="47"/>
      <source>Dress-Up Features</source>
      <translation type="unfinished">Dress-Up Features</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="48"/>
      <source>Transformation Features</source>
      <translation type="unfinished">Transformation Features</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="49"/>
      <source>Sprocket…</source>
      <translation type="unfinished">Sprocket…</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="50"/>
      <source>Involute Gear</source>
      <translation type="unfinished">Involute Gear</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="52"/>
      <source>Shaft Design Wizard</source>
      <translation type="unfinished">Shaft Design Wizard</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="60"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Measure</source>
      <translation>அளவிடவும்</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../Workbench.cpp" line="63"/>
=======
      <location filename="../../Workbench.cpp" line="61"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Refresh</source>
      <translation>புதுப்பி</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../Workbench.cpp" line="64"/>
      <source>Toggle 3D</source>
      <translation>3Dயை நிலைமாற்று</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="65"/>
      <source>Part Design Helper</source>
      <translation>பகுதி வடிவமைப்பு உதவியாளர்</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="66"/>
      <source>Part Design Modeling</source>
      <translation>பகுதி வடிவமைப்பு மாடலிங்</translation>
=======
      <location filename="../../Workbench.cpp" line="62"/>
      <source>Toggle 3D</source>
      <translation type="unfinished">Toggle 3D</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="63"/>
      <source>Part Design Helper</source>
      <translation type="unfinished">Part Design Helper</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="64"/>
      <source>Part Design Modeling</source>
      <translation type="unfinished">Part Design Modeling</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>WizardShaftTable</name>
    <message>
<<<<<<< HEAD
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="48"/>
      <source>Length [mm]</source>
      <translation>நீளம் [மிமீ]</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="49"/>
      <source>Diameter [mm]</source>
      <translation>விட்டம் [மிமீ]</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="50"/>
      <source>Inner diameter [mm]</source>
      <translation>உள் விட்டம் [மிமீ]</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="51"/>
      <source>Constraint type</source>
      <translation>கட்டுப்பாடு வகை</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="52"/>
      <source>Start edge type</source>
      <translation>தொடக்க விளிம்பு வகை</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="53"/>
      <source>Start edge size</source>
      <translation>தொடக்க விளிம்பு அளவு</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="54"/>
      <source>End edge type</source>
      <translation>இறுதி விளிம்பு வகை</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="55"/>
      <source>End edge size</source>
      <translation>இறுதி விளிம்பு அளவு</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="69"/>
      <source>Shaft Wizard</source>
      <translation>தண்டு வழிகாட்டி</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="77"/>
      <source>Section 1</source>
      <translation>பிரிவு 1</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="78"/>
      <source>Section 2</source>
      <translation>பிரிவு 2</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="82"/>
      <source>Add column</source>
      <translation>நெடுவரிசையைச் சேர்க்கவும்</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="130"/>
      <source>Section %s</source>
      <translation>பிரிவு %s</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="159"/>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="178"/>
=======
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="46"/>
      <source>Length [mm]</source>
      <translation type="unfinished">Length [mm]</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="47"/>
      <source>Diameter [mm]</source>
      <translation type="unfinished">Diameter [mm]</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="48"/>
      <source>Inner diameter [mm]</source>
      <translation type="unfinished">Inner diameter [mm]</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="49"/>
      <source>Constraint type</source>
      <translation type="unfinished">Constraint type</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="50"/>
      <source>Start edge type</source>
      <translation type="unfinished">Start edge type</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="51"/>
      <source>Start edge size</source>
      <translation type="unfinished">Start edge size</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="52"/>
      <source>End edge type</source>
      <translation type="unfinished">End edge type</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="53"/>
      <source>End edge size</source>
      <translation type="unfinished">End edge size</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="67"/>
      <source>Shaft Wizard</source>
      <translation type="unfinished">Shaft Wizard</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="75"/>
      <source>Section 1</source>
      <translation type="unfinished">Section 1</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="76"/>
      <source>Section 2</source>
      <translation type="unfinished">Section 2</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="80"/>
      <source>Add column</source>
      <translation type="unfinished">Add column</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="128"/>
      <source>Section %s</source>
      <translation type="unfinished">Section %s</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="157"/>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="176"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>None</source>
      <translation>எதுவுமில்லை</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="160"/>
      <source>Fixed</source>
      <translation>சரி செய்யப்பட்டது</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="161"/>
=======
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="158"/>
      <source>Fixed</source>
      <translation type="unfinished">Fixed</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="159"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>Force</source>
      <translation>படை</translation>
    </message>
    <message>
<<<<<<< HEAD
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="162"/>
      <source>Bearing</source>
      <translation>தாங்கி</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="163"/>
      <source>Gear</source>
      <translation>பற்சக்கரம்</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="164"/>
      <source>Pulley</source>
      <translation>கப்பி</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="181"/>
      <source>Chamfer</source>
      <translation>முளைமுழுக்கல்</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="182"/>
      <source>Fillet</source>
      <translation>ஃபில்லட்</translation>
=======
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="160"/>
      <source>Bearing</source>
      <translation type="unfinished">Bearing</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="161"/>
      <source>Gear</source>
      <translation type="unfinished">Gear</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="162"/>
      <source>Pulley</source>
      <translation type="unfinished">Pulley</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="179"/>
      <source>Chamfer</source>
      <translation type="unfinished">Chamfer</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="180"/>
      <source>Fillet</source>
      <translation type="unfinished">Fillet</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>TaskWizardShaft</name>
    <message>
<<<<<<< HEAD
      <location filename="../../../WizardShaft/WizardShaft.py" line="60"/>
      <source>All</source>
      <translation>அனைத்தும்</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaft.py" line="120"/>
      <source>Missing Module</source>
      <translation>தொகுதி காணவில்லை</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaft.py" line="126"/>
      <source>The Plot add-on is not installed. Install it to enable this feature.</source>
      <translation>ப்ளாட் செருகு நிரல் நிறுவப்படவில்லை. இந்த அம்சத்தை இயக்க அதை நிறுவவும்.</translation>
=======
      <location filename="../../../WizardShaft/WizardShaft.py" line="58"/>
      <source>All</source>
      <translation type="unfinished">All</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaft.py" line="118"/>
      <source>Missing Module</source>
      <translation type="unfinished">Missing Module</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaft.py" line="124"/>
      <source>The Plot add-on is not installed. Install it to enable this feature.</source>
      <translation type="unfinished">The Plot add-on is not installed. Install it to enable this feature.</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesign_WizardShaftCallBack</name>
    <message>
<<<<<<< HEAD
      <location filename="../../../WizardShaft/WizardShaft.py" line="253"/>
      <source>Shaft design wizard...</source>
      <translation>தண்டு வடிவமைப்பு வழிகாட்டி...</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaft.py" line="256"/>
      <source>Start the shaft design wizard</source>
      <translation>தண்டு வடிவமைப்பு வழிகாட்டியைத் தொடங்கவும்</translation>
=======
      <location filename="../../../WizardShaft/WizardShaft.py" line="251"/>
      <source>Shaft design wizard...</source>
      <translation type="unfinished">Shaft design wizard...</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaft.py" line="254"/>
      <source>Start the shaft design wizard</source>
      <translation type="unfinished">Start the shaft design wizard</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>Exception</name>
    <message>
<<<<<<< HEAD
      <location filename="../../../App/Body.cpp" line="406"/>
      <source>Linked object is not a PartDesign feature</source>
      <translation>இணைக்கப்பட்ட பொருள் பகுதி வடிவமைப்பு நற்பொருத்தம் அல்ல</translation>
    </message>
    <message>
      <location filename="../../../App/Body.cpp" line="415"/>
      <source>Tip shape is empty</source>
      <translation>முனை வடிவம் காலியாக உள்ளது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBase.cpp" line="68"/>
      <source>BaseFeature link is not set</source>
      <translation>அடிப்படை அம்ச இணைப்பு அமைக்கப்படவில்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBase.cpp" line="74"/>
      <source>BaseFeature must be a Part::Feature</source>
      <translation>அடிப்படை நற்பொருத்தம் ஒரு பகுதியாக இருக்க வேண்டும் ::அம்சம்</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBase.cpp" line="84"/>
      <source>BaseFeature has an empty shape</source>
      <translation>அடிப்படை நற்பொருத்தம் வெற்று வடிவத்தைக் கொண்டுள்ளது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBoolean.cpp" line="172"/>
      <source>Cannot do boolean cut without BaseFeature</source>
      <translation>BaseFeature இல்லாமல் பூலியன் கட் செய்ய முடியாது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBoolean.cpp" line="194"/>
      <source>Cannot do boolean with anything but Part::Feature and its derivatives</source>
      <translation>பகுதி::அம்சம் மற்றும் அதன் வழித்தோன்றல்களைத் தவிர வேறு எதையும் பூலியன் செய்ய முடியாது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBoolean.cpp" line="211"/>
      <source>Cannot do boolean operation with invalid base shape</source>
      <translation>தவறான அடிப்படை வடிவத்துடன் பூலியன் செயல்பாட்டைச் செய்ய முடியாது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureRevolved.cpp" line="217"/>
      <location filename="../../../App/FeatureHelix.cpp" line="420"/>
      <location filename="../../../App/FeatureHelix.cpp" line="442"/>
      <location filename="../../../App/FeatureHelix.cpp" line="488"/>
      <location filename="../../../App/FeatureFillet.cpp" line="142"/>
      <location filename="../../../App/FeatureHole.cpp" line="2091"/>
      <location filename="../../../App/FeatureChamfer.cpp" line="196"/>
      <location filename="../../../App/FeatureDraft.cpp" line="335"/>
      <location filename="../../../App/FeatureExtrude.cpp" line="775"/>
      <location filename="../../../App/FeatureExtrude.cpp" line="791"/>
      <location filename="../../../App/FeatureExtrude.cpp" line="804"/>
      <location filename="../../../App/FeaturePipe.cpp" line="537"/>
      <location filename="../../../App/FeaturePipe.cpp" line="571"/>
      <location filename="../../../App/FeaturePipe.cpp" line="600"/>
      <location filename="../../../App/FeatureBoolean.cpp" line="266"/>
      <location filename="../../../App/FeatureLoft.cpp" line="334"/>
      <location filename="../../../App/FeatureLoft.cpp" line="378"/>
      <source>Result has multiple solids: enable 'Allow Compound' in the active body.</source>
      <translation>முடிவு பல திடப்பொருட்களைக் கொண்டுள்ளது: செயலில் உள்ள உடலில் 'கலவையை இசைவு' என்பதை இயக்கவும்.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBoolean.cpp" line="221"/>
      <source>Tool shape is null</source>
      <translation>கருவியின் வடிவம் பூச்யமானது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBoolean.cpp" line="248"/>
      <source>Unsupported boolean operation</source>
      <translation>ஆதரிக்கப்படாத பூலியன் செயல்பாடு</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="353"/>
      <source>Cannot create a pad with a total length of zero.</source>
      <translation>பூச்சியத்தின் மொத்த நீளம் கொண்ட பேடை உருவாக்க முடியாது.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="358"/>
      <source>Cannot create a pocket with a total length of zero.</source>
      <translation>பூச்சியத்தின் மொத்த நீளம் கொண்ட பாக்கெட்டை உருவாக்க முடியாது.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="706"/>
      <source>No extrusion geometry was generated.</source>
      <translation>வெளியேற்ற வடிவியல் உருவாக்கப்படவில்லை.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="730"/>
      <source>Resulting fused extrusion is null.</source>
      <translation>இதன் விளைவாக இணைந்த வெளியேற்றம் பூச்யமானது.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="766"/>
      <location filename="../../../App/FeaturePipe.cpp" line="592"/>
      <location filename="../../../App/FeatureLoft.cpp" line="371"/>
      <location filename="../../../App/FeaturePrimitive.cpp" line="141"/>
      <source>Resulting shape is not a solid</source>
      <translation>விளைந்த வடிவம் திடமானது அல்ல</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureChamfer.cpp" line="176"/>
      <source>Failed to create chamfer</source>
      <translation>சேம்பரை உருவாக்க முடியவில்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureFillet.cpp" line="122"/>
      <location filename="../../../App/FeatureDraft.cpp" line="330"/>
      <source>Resulting shape is null</source>
      <translation>இதன் விளைவாக வடிவம் பூச்யமானது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureChamfer.cpp" line="144"/>
      <source>No edges specified</source>
      <translation>விளிம்புகள் எதுவும் குறிப்பிடப்படவில்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureChamfer.cpp" line="211"/>
      <source>Chamfer failed: OCC kernel error in chamfer computation</source>
      <translation type="unfinished">Chamfer failed: OCC kernel error in chamfer computation</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureChamfer.cpp" line="302"/>
      <source>Size must be greater than zero</source>
      <translation>அளவு பூச்சியத்தை விட அதிகமாக இருக்க வேண்டும்</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureChamfer.cpp" line="313"/>
      <source>Size2 must be greater than zero</source>
      <translation>அளவு2 பூச்சியத்தை விட அதிகமாக இருக்க வேண்டும்</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureChamfer.cpp" line="320"/>
      <source>Angle must be greater than 0 and less than 180</source>
      <translation>கோணம் 0 ஐ விட அதிகமாகவும் 180 க்கு குறைவாகவும் இருக்க வேண்டும்</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureFillet.cpp" line="97"/>
      <source>Fillet not possible on selected shapes</source>
      <translation>தேர்ந்தெடுக்கப்பட்ட வடிவங்களில் ஃபில்லட் சாத்தியமில்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureFillet.cpp" line="105"/>
      <source>Fillet radius must be greater than zero</source>
      <translation>ஃபில்லட் ஆரம் பூச்சியத்தை விட அதிகமாக இருக்க வேண்டும்</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureFillet.cpp" line="159"/>
      <source>Fillet operation failed. The selected edges may contain geometry that cannot be filleted together. Try filleting edges individually or with a smaller radius.</source>
      <translation>ஃபில்லட் செயல்பாடு தோல்வியடைந்தது. தேர்ந்தெடுக்கப்பட்ட விளிம்புகளில் ஒன்றாக நிரப்ப முடியாத வடிவவியல் இருக்கலாம். தனித்தனியாக அல்லது சிறிய ஆரம் கொண்ட விளிம்புகளை நிரப்ப முயற்சிக்கவும்.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1739"/>
=======
      <location filename="../../../App/Body.cpp" line="403"/>
      <source>Linked object is not a PartDesign feature</source>
      <translation type="unfinished">Linked object is not a PartDesign feature</translation>
    </message>
    <message>
      <location filename="../../../App/Body.cpp" line="412"/>
      <source>Tip shape is empty</source>
      <translation type="unfinished">Tip shape is empty</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBase.cpp" line="66"/>
      <source>BaseFeature link is not set</source>
      <translation type="unfinished">BaseFeature link is not set</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBase.cpp" line="72"/>
      <source>BaseFeature must be a Part::Feature</source>
      <translation type="unfinished">BaseFeature must be a Part::Feature</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBase.cpp" line="82"/>
      <source>BaseFeature has an empty shape</source>
      <translation type="unfinished">BaseFeature has an empty shape</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBoolean.cpp" line="75"/>
      <source>Cannot do boolean cut without BaseFeature</source>
      <translation type="unfinished">Cannot do boolean cut without BaseFeature</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBoolean.cpp" line="92"/>
      <source>Cannot do boolean with anything but Part::Feature and its derivatives</source>
      <translation type="unfinished">Cannot do boolean with anything but Part::Feature and its derivatives</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBoolean.cpp" line="104"/>
      <source>Cannot do boolean operation with invalid base shape</source>
      <translation type="unfinished">Cannot do boolean operation with invalid base shape</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureDraft.cpp" line="332"/>
      <location filename="../../../App/FeatureGroove.cpp" line="253"/>
      <location filename="../../../App/FeatureHole.cpp" line="2067"/>
      <location filename="../../../App/FeaturePipe.cpp" line="480"/>
      <location filename="../../../App/FeaturePipe.cpp" line="529"/>
      <location filename="../../../App/FeatureBoolean.cpp" line="159"/>
      <location filename="../../../App/FeatureChamfer.cpp" line="192"/>
      <location filename="../../../App/FeatureFillet.cpp" line="140"/>
      <location filename="../../../App/FeatureExtrude.cpp" line="773"/>
      <location filename="../../../App/FeatureExtrude.cpp" line="789"/>
      <location filename="../../../App/FeatureExtrude.cpp" line="802"/>
      <location filename="../../../App/FeatureLoft.cpp" line="331"/>
      <location filename="../../../App/FeatureLoft.cpp" line="375"/>
      <location filename="../../../App/FeatureRevolution.cpp" line="284"/>
      <source>Result has multiple solids: enable 'Allow Compound' in the active body.</source>
      <translation type="unfinished">Result has multiple solids: enable 'Allow Compound' in the active body.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBoolean.cpp" line="114"/>
      <source>Tool shape is null</source>
      <translation type="unfinished">Tool shape is null</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBoolean.cpp" line="141"/>
      <source>Unsupported boolean operation</source>
      <translation type="unfinished">Unsupported boolean operation</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="351"/>
      <source>Cannot create a pad with a total length of zero.</source>
      <translation type="unfinished">Cannot create a pad with a total length of zero.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="356"/>
      <source>Cannot create a pocket with a total length of zero.</source>
      <translation type="unfinished">Cannot create a pocket with a total length of zero.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="704"/>
      <source>No extrusion geometry was generated.</source>
      <translation type="unfinished">No extrusion geometry was generated.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="728"/>
      <source>Resulting fused extrusion is null.</source>
      <translation type="unfinished">Resulting fused extrusion is null.</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="139"/>
      <location filename="../../../App/FeaturePipe.cpp" line="521"/>
      <location filename="../../../App/FeatureExtrude.cpp" line="764"/>
      <location filename="../../../App/FeatureLoft.cpp" line="368"/>
      <source>Resulting shape is not a solid</source>
      <translation type="unfinished">Resulting shape is not a solid</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureChamfer.cpp" line="172"/>
      <source>Failed to create chamfer</source>
      <translation type="unfinished">Failed to create chamfer</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureDraft.cpp" line="327"/>
      <location filename="../../../App/FeatureFillet.cpp" line="120"/>
      <source>Resulting shape is null</source>
      <translation type="unfinished">Resulting shape is null</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureChamfer.cpp" line="141"/>
      <source>No edges specified</source>
      <translation type="unfinished">No edges specified</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureChamfer.cpp" line="293"/>
      <source>Size must be greater than zero</source>
      <translation type="unfinished">Size must be greater than zero</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureChamfer.cpp" line="304"/>
      <source>Size2 must be greater than zero</source>
      <translation type="unfinished">Size2 must be greater than zero</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureChamfer.cpp" line="311"/>
      <source>Angle must be greater than 0 and less than 180</source>
      <translation type="unfinished">Angle must be greater than 0 and less than 180</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureFillet.cpp" line="95"/>
      <source>Fillet not possible on selected shapes</source>
      <translation type="unfinished">Fillet not possible on selected shapes</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureFillet.cpp" line="103"/>
      <source>Fillet radius must be greater than zero</source>
      <translation type="unfinished">Fillet radius must be greater than zero</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureFillet.cpp" line="157"/>
      <source>Fillet operation failed. The selected edges may contain geometry that cannot be filleted together. Try filleting edges individually or with a smaller radius.</source>
      <translation type="unfinished">Fillet operation failed. The selected edges may contain geometry that cannot be filleted together. Try filleting edges individually or with a smaller radius.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureGroove.cpp" line="101"/>
      <source>Angle of groove too large</source>
      <translation type="unfinished">Angle of groove too large</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureGroove.cpp" line="108"/>
      <source>Angle of groove too small</source>
      <translation type="unfinished">Angle of groove too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1719"/>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
      <source>The requested feature cannot be created. The reason may be that:
  - the active Body does not contain a base shape, so there is no
  material to be removed;
  - the selected sketch does not belong to the active Body.</source>
<<<<<<< HEAD
      <translation>கோரப்பட்ட அம்சத்தை உருவாக்க முடியாது. காரணம் இதுவாக இருக்கலாம்: 
- செயலில் உள்ள உடலில் அடிப்படை வடிவம் இல்லை, எனவே இல்லை 
நீக்கப்பட வேண்டிய பொருள்; 
- தேர்ந்தெடுக்கப்பட்ட ச்கெட்ச் செயலில் உள்ள உடலுக்கு சொந்தமானது அல்ல.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="402"/>
      <source>Failed to obtain profile shape</source>
      <translation>சுயவிவர வடிவத்தைப் பெறுவதில் தோல்வி</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="456"/>
      <source>Creation failed because direction is orthogonal to sketch's normal vector</source>
      <translation>ச்கெட்சின் இயல்பான வெக்டருக்கு திசை ஆர்த்தோகனலாக இருப்பதால் உருவாக்கம் தோல்வியடைந்தது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureRevolved.cpp" line="132"/>
      <location filename="../../../App/FeatureExtrude.cpp" line="479"/>
      <source>Creating a face from sketch failed</source>
      <translation>ச்கெட்சிலிருந்து முகத்தை உருவாக்குவது தோல்வியடைந்தது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureRevolved.cpp" line="152"/>
      <source>Revolve axis intersects the sketch</source>
      <translation>சுழல் அச்சு ஓவியத்தை வெட்டுகிறது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureRevolved.cpp" line="202"/>
      <source>Could not revolve the sketch!</source>
      <translation>ஓவியத்தை சுழற்ற முடியவில்லை!</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureRevolved.cpp" line="69"/>
      <source>Could not create face from sketch.
Intersecting sketch entities in a sketch are not allowed.</source>
      <translation>ச்கெட்சிலிருந்து முகத்தை உருவாக்க முடியவில்லை. 
ச்கெட்ச்சில் குறுக்கிடும் ச்கெட்ச் உறுப்புகள் அனுமதிக்கப்படாது.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="237"/>
      <source>Error: Pitch too small!</source>
      <translation>பிழை: சுருதி மிகவும் சிறியது!</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="242"/>
      <location filename="../../../App/FeatureHelix.cpp" line="265"/>
      <source>Error: height too small!</source>
      <translation>பிழை: உயரம் மிகவும் சிறியது!</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="251"/>
      <source>Error: pitch too small!</source>
      <translation>பிழை: சுருதி மிகவும் சிறியது!</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="256"/>
      <location filename="../../../App/FeatureHelix.cpp" line="270"/>
      <location filename="../../../App/FeatureHelix.cpp" line="279"/>
      <source>Error: turns too small!</source>
      <translation>பிழை: மிகவும் சிறியதாக மாறுகிறது!</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="285"/>
      <source>Error: either height or growth must not be zero!</source>
      <translation>பிழை: உயரம் அல்லது வளர்ச்சி பூச்சியமாக இருக்கக்கூடாது!</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="303"/>
      <source>Error: unsupported mode</source>
      <translation>பிழை: ஆதரிக்கப்படாத பயன்முறை</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="317"/>
      <source>Error: No valid sketch or face</source>
      <translation>பிழை: சரியான ச்கெட்ச் அல்லது முகம் இல்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="330"/>
      <source>Error: Face must be planar</source>
      <translation>பிழை: முகம் சீராக இருக்க வேண்டும்</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="454"/>
      <location filename="../../../App/FeatureHelix.cpp" line="499"/>
      <location filename="../../../App/FeatureHole.cpp" line="2454"/>
      <source>Error: Result is not a solid</source>
      <translation>பிழை: முடிவு உறுதியானது அல்ல</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="415"/>
      <source>Error: There is nothing to subtract</source>
      <translation>பிழை: கழிப்பதற்கு எதுவும் இல்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="437"/>
      <source>Error: Adding the helix failed</source>
      <translation>பிழை: எலிக்சைச் சேர்ப்பதில் தோல்வி</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="472"/>
      <source>Error: Intersecting the helix failed</source>
      <translation>பிழை: எலிக்சை வெட்டுவது தோல்வியடைந்தது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="481"/>
      <source>Error: Subtracting the helix failed</source>
      <translation>பிழை: எலிக்சைக் கழிப்பதில் தோல்வி</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="515"/>
      <source>Error: Could not create face from sketch</source>
      <translation>பிழை: ச்கெட்சிலிருந்து முகத்தை உருவாக்க முடியவில்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1233"/>
      <source>Thread type is invalid</source>
      <translation>நூல் வகை தவறானது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1752"/>
      <source>Hole error: Diameter too small</source>
      <translation type="unfinished">Hole error: Diameter too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1789"/>
      <source>Hole error: Unsupported length specification</source>
      <translation>துளை பிழை: ஆதரிக்கப்படாத நீள விவரக்குறிப்பு</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1795"/>
      <source>Hole error: Invalid hole depth</source>
      <translation>துளை பிழை: தவறான துளை ஆழம்</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1821"/>
      <source>Hole error: Invalid taper angle</source>
      <translation>துளை பிழை: தவறான டேப்பர் கோணம்</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1845"/>
      <source>Hole error: Hole cut diameter too small</source>
      <translation>துளை பிழை: துளை வெட்டு விட்டம் மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1850"/>
      <source>Hole error: Hole cut depth must be less than hole depth</source>
      <translation>துளை பிழை: துளை வெட்டு ஆழம் துளை ஆழத்தை விட குறைவாக இருக்க வேண்டும்</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1857"/>
      <source>Hole error: Hole cut depth must be greater or equal to zero</source>
      <translation>துளை பிழை: துளை வெட்டு ஆழம் பூச்சியத்திற்கு அதிகமாகவோ அல்லது சமமாகவோ இருக்க வேண்டும்</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1887"/>
      <source>Hole error: Invalid countersink</source>
      <translation>துளை பிழை: தவறான எதிர் துவாரம்</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1923"/>
      <source>Hole error: Invalid drill point angle</source>
      <translation>துளை பிழை: தவறான துளை புள்ளி கோணம்</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1940"/>
      <source>Hole error: Invalid drill point</source>
      <translation>துளை பிழை: தவறான துளை புள்ளி</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1977"/>
      <source>Hole error: Could not revolve sketch</source>
      <translation>துளை பிழை: ச்கெட்சை சுழற்ற முடியவில்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1984"/>
      <source>Hole error: Resulting shape is empty</source>
      <translation>துளை பிழை: முடிவு வடிவம் காலியாக உள்ளது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="2007"/>
      <source>Hole error: Finding axis failed</source>
      <translation>துளை பிழை: அச்சைக் கண்டறிவதில் தோல்வி</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="2063"/>
      <location filename="../../../App/FeatureHole.cpp" line="2071"/>
      <source>Boolean operation failed on profile Edge</source>
      <translation>சுயவிவர எட்சில் பூலியன் செயல்பாடு தோல்வியடைந்தது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="2078"/>
      <source>Boolean operation produced non-solid on profile Edge</source>
      <translation>பூலியன் செயல்பாடு சுயவிவர விளிம்பில் திடமற்றது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBoolean.cpp" line="258"/>
      <source>Boolean operation failed</source>
      <translation>பூலியன் செயல்பாடு தோல்வியடைந்தது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="2104"/>
      <source>Could not create face from sketch.
Intersecting sketch entities or multiple faces in a sketch are not allowed for making a pocket up to a face.</source>
      <translation>ச்கெட்சிலிருந்து முகத்தை உருவாக்க முடியவில்லை. 
குறுக்குவெட்டு ச்கெட்ச் உறுப்புகள் அல்லது ச்கெட்ச்சில் பல முகங்கள் ஒரு முகம் வரை பாக்கெட்டை உருவாக்க அனுமதிக்கப்படாது.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="2277"/>
      <source>Thread type out of range</source>
      <translation>நூல் வகை வரம்பிற்கு வெளியே உள்ளது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="2280"/>
      <source>Thread size out of range</source>
      <translation>நூல் அளவு வரம்பிற்கு வெளியே உள்ளது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="2428"/>
      <source>Error: Thread could not be built</source>
      <translation>பிழை: நூலை உருவாக்க முடியவில்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureLoft.cpp" line="193"/>
      <source>Loft: At least one section is needed</source>
      <translation>மாடி: குறைந்தது ஒரு பகுதி தேவை</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureLoft.cpp" line="395"/>
      <source>Loft: A fatal error occurred when making the loft</source>
      <translation>மாடி: மாடியை உருவாக்கும் போது ஒரு அபாயகரமான பிழை ஏற்பட்டது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureLoft.cpp" line="240"/>
      <source>Loft: Creating a face from sketch failed</source>
      <translation>லாஃப்ட்: ச்கெட்சிலிருந்து முகத்தை உருவாக்குவது தோல்வியடைந்தது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="500"/>
      <location filename="../../../App/FeatureLoft.cpp" line="304"/>
      <source>Loft: Failed to create shell</source>
      <translation>மாடி: செல் உருவாக்க முடியவில்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="819"/>
      <source>Could not create face from sketch.
Intersecting sketch entities or multiple faces in a sketch are not allowed.</source>
      <translation>ச்கெட்சிலிருந்து முகத்தை உருவாக்க முடியவில்லை. 
ச்கெட்ச்சில் குறுக்கிடும் ச்கெட்ச் உறுப்புகள் அல்லது பல முகங்கள் அனுமதிக்கப்படாது.</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="211"/>
      <source>Pipe: Could not obtain profile shape</source>
      <translation>குழாய்: சுயவிவர வடிவத்தைப் பெற முடியவில்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="218"/>
      <source>No spine linked</source>
      <translation>முதுகெலும்பு இணைக்கப்படவில்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="233"/>
      <source>No auxiliary spine linked.</source>
      <translation>துணை முதுகெலும்பு இணைக்கப்படவில்லை.</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="255"/>
      <source>Pipe: Only one isolated point is needed if using a sketch with isolated points for section</source>
      <translation>குழாய்: பிரிவிற்கு தனிமைப்படுத்தப்பட்ட புள்ளிகளுடன் ச்கெட்சைப் பயன்படுத்தினால், ஒரு தனிமைப்படுத்தப்பட்ட புள்ளி மட்டுமே தேவைப்படும்</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="264"/>
      <source>Pipe: At least one section is needed when using a single point for profile</source>
      <translation>குழாய்: சுயவிவரத்திற்கு ஒரு புள்ளியைப் பயன்படுத்தும் போது குறைந்தபட்சம் ஒரு பகுதி தேவை</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="282"/>
      <source>Pipe: All sections need to be Part features</source>
      <translation>குழாய்: அனைத்து பிரிவுகளும் பகுதி அம்சங்களாக இருக்க வேண்டும்</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="290"/>
      <source>Pipe: Could not obtain section shape</source>
      <translation>குழாய்: பகுதி வடிவத்தைப் பெற முடியவில்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="298"/>
      <source>Pipe: Only the profile and last section can be vertices</source>
      <translation>குழாய்: சுயவிவரம் மற்றும் கடைசி பகுதி மட்டுமே செங்குத்துகளாக இருக்க முடியும்</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="311"/>
      <source>Multisections need to have the same amount of inner wires as the base section</source>
      <translation>மல்டிசெக்சன்களுக்கு அடிப்படைப் பிரிவின் அதே அளவு உள் கம்பிகள் இருக்க வேண்டும்</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="344"/>
      <source>Path must not be a null shape</source>
      <translation>பாதை சுழிய வடிவமாக இருக்கக்கூடாது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="384"/>
      <source>Pipe could not be built</source>
      <translation>குழாய் அமைக்க முடியவில்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="532"/>
      <source>Pipe: There is nothing to subtract from</source>
      <translation>குழாய்: கழிப்பதற்கு எதுவும் இல்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="584"/>
      <source>Pipe: Invalid Boolean Type</source>
      <translation type="unfinished">Pipe: Invalid Boolean Type</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="614"/>
      <source>A fatal error occurred when making the pipe</source>
      <translation>குழாய் செய்யும் போது ஒரு அபாயகரமான பிழை ஏற்பட்டது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="741"/>
      <source>Invalid element in spine.</source>
      <translation>முதுகெலும்பில் தவறான உறுப்பு.</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="746"/>
      <source>Element in spine is neither an edge nor a wire.</source>
      <translation>முதுகெலும்பில் உள்ள உறுப்பு ஒரு விளிம்பு அல்லது கம்பி அல்ல.</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="759"/>
      <source>Spine is neither an edge nor a wire.</source>
      <translation>முதுகெலும்பு ஒரு விளிம்பு அல்லது கம்பி அல்ல.</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="764"/>
      <source>Invalid spine.</source>
      <translation>தவறான முதுகெலும்பு.</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="103"/>
      <source>Cannot subtract primitive feature without base feature</source>
      <translation>அடிப்படை நற்பொருத்தம் இல்லாமல் பழமையான அம்சத்தைக் கழிக்க முடியாது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureLoft.cpp" line="356"/>
      <location filename="../../../App/FeaturePrimitive.cpp" line="125"/>
      <source>Unknown operation type</source>
      <translation>அறியப்படாத செயல்பாட்டு வகை</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureLoft.cpp" line="364"/>
      <location filename="../../../App/FeaturePrimitive.cpp" line="133"/>
      <source>Failed to perform boolean operation</source>
      <translation>பூலியன் செயல்பாட்டைச் செய்ய முடியவில்லை</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="217"/>
      <source>Length of box too small</source>
      <translation>பெட்டியின் நீளம் மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="222"/>
      <source>Width of box too small</source>
      <translation>பெட்டியின் அகலம் மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="227"/>
      <source>Height of box too small</source>
      <translation>பெட்டியின் உயரம் மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="275"/>
      <source>Radius of cylinder too small</source>
      <translation>சிலிண்டரின் ஆரம் மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="280"/>
      <source>Height of cylinder too small</source>
      <translation>சிலிண்டரின் உயரம் மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="285"/>
      <source>Rotation angle of cylinder too small</source>
      <translation>சிலிண்டரின் சுழற்சி கோணம் மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="342"/>
      <source>Radius of sphere too small</source>
      <translation>கோளத்தின் ஆரம் மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="394"/>
      <location filename="../../../App/FeaturePrimitive.cpp" line="399"/>
      <source>Radius of cone cannot be negative</source>
      <translation>கூம்பின் ஆரம் எதிர்மறையாக இருக்க முடியாது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="404"/>
      <source>Height of cone too small</source>
      <translation>கூம்பின் உயரம் மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="484"/>
      <location filename="../../../App/FeaturePrimitive.cpp" line="489"/>
      <source>Radius of ellipsoid too small</source>
      <translation>நீள்வட்டத்தின் ஆரம் மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="583"/>
      <location filename="../../../App/FeaturePrimitive.cpp" line="588"/>
      <source>Radius of torus too small</source>
      <translation>டோரசின் ஆரம் மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="673"/>
      <source>Polygon of prism is invalid, must have 3 or more sides</source>
      <translation>ப்ரிசத்தின் பலகோணம் தவறானது, 3 அல்லது அதற்கு மேற்பட்ட பக்கங்களைக் கொண்டிருக்க வேண்டும்</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="678"/>
      <source>Circumradius of the polygon, of the prism, is too small</source>
      <translation>ப்ரிசத்தின் பலகோணத்தின் சுற்றளவு மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="683"/>
      <source>Height of prism is too small</source>
      <translation>ப்ரிசத்தின் உயரம் மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="770"/>
      <source>delta x of wedge too small</source>
      <translation>டெல்டா ஃச் ஆப்பு மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="776"/>
      <source>delta y of wedge too small</source>
      <translation>டெல்டா ஒய் ஆப்பு மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="782"/>
      <source>delta z of wedge too small</source>
      <translation>குடைமிளகின் டெல்டா சட் மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="788"/>
      <source>delta z2 of wedge is negative</source>
      <translation>குடைமிளகின் டெல்டா z2 எதிர்மறையானது</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="794"/>
      <source>delta x2 of wedge is negative</source>
      <translation>குடைமிளகின் டெல்டா x2 எதிர்மறையானது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureRevolved.cpp" line="96"/>
      <source>Angle of revolution too large</source>
      <translation>புரட்சியின் கோணம் மிகப் பெரியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureRevolved.cpp" line="103"/>
      <source>Angle of revolution too small</source>
      <translation>புரட்சியின் கோணம் மிகவும் சிறியது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureRevolved.cpp" line="110"/>
      <source>Angles of revolution nullify each other</source>
      <translation>புரட்சியின் கோணங்கள் ஒன்றையொன்று செயலிழக்கச் செய்கின்றன</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureRevolved.cpp" line="126"/>
      <source>Reference axis is invalid</source>
      <translation>குறிப்பு அச்சு தவறானது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="758"/>
      <source>Fusion with base feature failed</source>
      <translation>அடிப்படை அம்சத்துடன் இணைதல் தோல்வியடைந்தது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureTransformed.cpp" line="101"/>
      <source>Transformation feature Linked object is not a Part object</source>
      <translation>உருமாற்ற நற்பொருத்தம் இணைக்கப்பட்ட பொருள் ஒரு பகுதி பொருள் அல்ல</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureTransformed.cpp" line="109"/>
      <source>No features selected to be mirrored.</source>
      <translation type="unfinished">No features selected to be mirrored.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureTransformed.cpp" line="112"/>
      <source>No features selected to be patterned.</source>
      <translation type="unfinished">No features selected to be patterned.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureTransformed.cpp" line="115"/>
      <source>No features selected to be transformed.</source>
      <translation type="unfinished">No features selected to be transformed.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureTransformed.cpp" line="379"/>
      <source>Cannot transform invalid support shape</source>
      <translation>தவறான உதவி வடிவத்தை மாற்ற முடியாது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureTransformed.cpp" line="430"/>
      <source>Shape of additive/subtractive feature is empty</source>
      <translation>சேர்க்கை/கழித்தல் அம்சத்தின் வடிவம் காலியாக உள்ளது</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureTransformed.cpp" line="421"/>
      <source>Only additive and subtractive features can be transformed</source>
      <translation>சேர்க்கை மற்றும் கழித்தல் அம்சங்களை மட்டுமே மாற்ற முடியும்</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureThickness.cpp" line="109"/>
      <source>Invalid face reference</source>
      <translation>தவறான முகக் குறிப்பு</translation>
=======
      <translation type="unfinished">The requested feature cannot be created. The reason may be that:
  - the active Body does not contain a base shape, so there is no
  material to be removed;
  - the selected sketch does not belong to the active Body.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="400"/>
      <source>Failed to obtain profile shape</source>
      <translation type="unfinished">Failed to obtain profile shape</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="454"/>
      <source>Creation failed because direction is orthogonal to sketch's normal vector</source>
      <translation type="unfinished">Creation failed because direction is orthogonal to sketch's normal vector</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureGroove.cpp" line="154"/>
      <location filename="../../../App/FeatureExtrude.cpp" line="477"/>
      <location filename="../../../App/FeatureRevolution.cpp" line="176"/>
      <source>Creating a face from sketch failed</source>
      <translation type="unfinished">Creating a face from sketch failed</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureGroove.cpp" line="115"/>
      <source>Angles of groove nullify each other</source>
      <translation type="unfinished">Angles of groove nullify each other</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureGroove.cpp" line="171"/>
      <location filename="../../../App/FeatureRevolution.cpp" line="193"/>
      <source>Revolve axis intersects the sketch</source>
      <translation type="unfinished">Revolve axis intersects the sketch</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureGroove.cpp" line="263"/>
      <location filename="../../../App/FeatureRevolution.cpp" line="294"/>
      <source>Could not revolve the sketch!</source>
      <translation type="unfinished">Could not revolve the sketch!</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureGroove.cpp" line="275"/>
      <location filename="../../../App/FeatureRevolution.cpp" line="306"/>
      <source>Could not create face from sketch.
Intersecting sketch entities in a sketch are not allowed.</source>
      <translation type="unfinished">Could not create face from sketch.
Intersecting sketch entities in a sketch are not allowed.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="235"/>
      <source>Error: Pitch too small!</source>
      <translation type="unfinished">Error: Pitch too small!</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="240"/>
      <location filename="../../../App/FeatureHelix.cpp" line="263"/>
      <source>Error: height too small!</source>
      <translation type="unfinished">Error: height too small!</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="249"/>
      <source>Error: pitch too small!</source>
      <translation type="unfinished">Error: pitch too small!</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="254"/>
      <location filename="../../../App/FeatureHelix.cpp" line="268"/>
      <location filename="../../../App/FeatureHelix.cpp" line="277"/>
      <source>Error: turns too small!</source>
      <translation type="unfinished">Error: turns too small!</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="283"/>
      <source>Error: either height or growth must not be zero!</source>
      <translation type="unfinished">Error: either height or growth must not be zero!</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="301"/>
      <source>Error: unsupported mode</source>
      <translation type="unfinished">Error: unsupported mode</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="315"/>
      <source>Error: No valid sketch or face</source>
      <translation type="unfinished">Error: No valid sketch or face</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="328"/>
      <source>Error: Face must be planar</source>
      <translation type="unfinished">Error: Face must be planar</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="443"/>
      <location filename="../../../App/FeatureHelix.cpp" line="484"/>
      <location filename="../../../App/FeatureHole.cpp" line="2422"/>
      <source>Error: Result is not a solid</source>
      <translation type="unfinished">Error: Result is not a solid</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="413"/>
      <source>Error: There is nothing to subtract</source>
      <translation type="unfinished">Error: There is nothing to subtract</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="419"/>
      <location filename="../../../App/FeatureHelix.cpp" line="449"/>
      <location filename="../../../App/FeatureHelix.cpp" line="490"/>
      <source>Error: Result has multiple solids</source>
      <translation type="unfinished">Error: Result has multiple solids</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="434"/>
      <source>Error: Adding the helix failed</source>
      <translation type="unfinished">Error: Adding the helix failed</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="466"/>
      <source>Error: Intersecting the helix failed</source>
      <translation type="unfinished">Error: Intersecting the helix failed</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="475"/>
      <source>Error: Subtracting the helix failed</source>
      <translation type="unfinished">Error: Subtracting the helix failed</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="506"/>
      <source>Error: Could not create face from sketch</source>
      <translation type="unfinished">Error: Could not create face from sketch</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1224"/>
      <source>Thread type is invalid</source>
      <translation type="unfinished">Thread type is invalid</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1764"/>
      <source>Hole error: Unsupported length specification</source>
      <translation type="unfinished">Hole error: Unsupported length specification</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1770"/>
      <source>Hole error: Invalid hole depth</source>
      <translation type="unfinished">Hole error: Invalid hole depth</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1796"/>
      <source>Hole error: Invalid taper angle</source>
      <translation type="unfinished">Hole error: Invalid taper angle</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1820"/>
      <source>Hole error: Hole cut diameter too small</source>
      <translation type="unfinished">Hole error: Hole cut diameter too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1825"/>
      <source>Hole error: Hole cut depth must be less than hole depth</source>
      <translation type="unfinished">Hole error: Hole cut depth must be less than hole depth</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1832"/>
      <source>Hole error: Hole cut depth must be greater or equal to zero</source>
      <translation type="unfinished">Hole error: Hole cut depth must be greater or equal to zero</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1862"/>
      <source>Hole error: Invalid countersink</source>
      <translation type="unfinished">Hole error: Invalid countersink</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1898"/>
      <source>Hole error: Invalid drill point angle</source>
      <translation type="unfinished">Hole error: Invalid drill point angle</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1915"/>
      <source>Hole error: Invalid drill point</source>
      <translation type="unfinished">Hole error: Invalid drill point</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1952"/>
      <source>Hole error: Could not revolve sketch</source>
      <translation type="unfinished">Hole error: Could not revolve sketch</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1959"/>
      <source>Hole error: Resulting shape is empty</source>
      <translation type="unfinished">Hole error: Resulting shape is empty</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1972"/>
      <source>Error: Adding the thread failed</source>
      <translation type="unfinished">Error: Adding the thread failed</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1983"/>
      <source>Hole error: Finding axis failed</source>
      <translation type="unfinished">Hole error: Finding axis failed</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="2039"/>
      <location filename="../../../App/FeatureHole.cpp" line="2047"/>
      <source>Boolean operation failed on profile Edge</source>
      <translation type="unfinished">Boolean operation failed on profile Edge</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="2054"/>
      <source>Boolean operation produced non-solid on profile Edge</source>
      <translation type="unfinished">Boolean operation produced non-solid on profile Edge</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureBoolean.cpp" line="151"/>
      <source>Boolean operation failed</source>
      <translation type="unfinished">Boolean operation failed</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="2080"/>
      <source>Could not create face from sketch.
Intersecting sketch entities or multiple faces in a sketch are not allowed for making a pocket up to a face.</source>
      <translation type="unfinished">Could not create face from sketch.
Intersecting sketch entities or multiple faces in a sketch are not allowed for making a pocket up to a face.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="2245"/>
      <source>Thread type out of range</source>
      <translation type="unfinished">Thread type out of range</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="2248"/>
      <source>Thread size out of range</source>
      <translation type="unfinished">Thread size out of range</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="2396"/>
      <source>Error: Thread could not be built</source>
      <translation type="unfinished">Error: Thread could not be built</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureLoft.cpp" line="191"/>
      <source>Loft: At least one section is needed</source>
      <translation type="unfinished">Loft: At least one section is needed</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureLoft.cpp" line="392"/>
      <source>Loft: A fatal error occurred when making the loft</source>
      <translation type="unfinished">Loft: A fatal error occurred when making the loft</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureLoft.cpp" line="238"/>
      <source>Loft: Creating a face from sketch failed</source>
      <translation type="unfinished">Loft: Creating a face from sketch failed</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="444"/>
      <location filename="../../../App/FeatureLoft.cpp" line="301"/>
      <source>Loft: Failed to create shell</source>
      <translation type="unfinished">Loft: Failed to create shell</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="817"/>
      <source>Could not create face from sketch.
Intersecting sketch entities or multiple faces in a sketch are not allowed.</source>
      <translation type="unfinished">Could not create face from sketch.
Intersecting sketch entities or multiple faces in a sketch are not allowed.</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="203"/>
      <source>Pipe: Could not obtain profile shape</source>
      <translation type="unfinished">Pipe: Could not obtain profile shape</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="210"/>
      <source>No spine linked</source>
      <translation type="unfinished">No spine linked</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="225"/>
      <source>No auxiliary spine linked.</source>
      <translation type="unfinished">No auxiliary spine linked.</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="248"/>
      <source>Pipe: Only one isolated point is needed if using a sketch with isolated points for section</source>
      <translation type="unfinished">Pipe: Only one isolated point is needed if using a sketch with isolated points for section</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="257"/>
      <source>Pipe: At least one section is needed when using a single point for profile</source>
      <translation type="unfinished">Pipe: At least one section is needed when using a single point for profile</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="275"/>
      <source>Pipe: All sections need to be Part features</source>
      <translation type="unfinished">Pipe: All sections need to be Part features</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="283"/>
      <source>Pipe: Could not obtain section shape</source>
      <translation type="unfinished">Pipe: Could not obtain section shape</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="293"/>
      <source>Pipe: Only the profile and last section can be vertices</source>
      <translation type="unfinished">Pipe: Only the profile and last section can be vertices</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="306"/>
      <source>Multisections need to have the same amount of inner wires as the base section</source>
      <translation type="unfinished">Multisections need to have the same amount of inner wires as the base section</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="339"/>
      <source>Path must not be a null shape</source>
      <translation type="unfinished">Path must not be a null shape</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="379"/>
      <source>Pipe could not be built</source>
      <translation type="unfinished">Pipe could not be built</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="436"/>
      <source>Result is not a solid</source>
      <translation type="unfinished">Result is not a solid</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="475"/>
      <source>Pipe: There is nothing to subtract from</source>
      <translation type="unfinished">Pipe: There is nothing to subtract from</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="543"/>
      <source>A fatal error occurred when making the pipe</source>
      <translation type="unfinished">A fatal error occurred when making the pipe</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="672"/>
      <source>Invalid element in spine.</source>
      <translation type="unfinished">Invalid element in spine.</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="677"/>
      <source>Element in spine is neither an edge nor a wire.</source>
      <translation type="unfinished">Element in spine is neither an edge nor a wire.</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="698"/>
      <source>Spine is not connected.</source>
      <translation type="unfinished">Spine is not connected.</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="704"/>
      <source>Spine is neither an edge nor a wire.</source>
      <translation type="unfinished">Spine is neither an edge nor a wire.</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePipe.cpp" line="709"/>
      <source>Invalid spine.</source>
      <translation type="unfinished">Invalid spine.</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="101"/>
      <source>Cannot subtract primitive feature without base feature</source>
      <translation type="unfinished">Cannot subtract primitive feature without base feature</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="123"/>
      <location filename="../../../App/FeaturePipe.cpp" line="505"/>
      <location filename="../../../App/FeatureLoft.cpp" line="353"/>
      <source>Unknown operation type</source>
      <translation type="unfinished">Unknown operation type</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="131"/>
      <location filename="../../../App/FeaturePipe.cpp" line="513"/>
      <location filename="../../../App/FeatureLoft.cpp" line="361"/>
      <source>Failed to perform boolean operation</source>
      <translation type="unfinished">Failed to perform boolean operation</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="215"/>
      <source>Length of box too small</source>
      <translation type="unfinished">Length of box too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="220"/>
      <source>Width of box too small</source>
      <translation type="unfinished">Width of box too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="225"/>
      <source>Height of box too small</source>
      <translation type="unfinished">Height of box too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="273"/>
      <source>Radius of cylinder too small</source>
      <translation type="unfinished">Radius of cylinder too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="278"/>
      <source>Height of cylinder too small</source>
      <translation type="unfinished">Height of cylinder too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="283"/>
      <source>Rotation angle of cylinder too small</source>
      <translation type="unfinished">Rotation angle of cylinder too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="340"/>
      <source>Radius of sphere too small</source>
      <translation type="unfinished">Radius of sphere too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="392"/>
      <location filename="../../../App/FeaturePrimitive.cpp" line="397"/>
      <source>Radius of cone cannot be negative</source>
      <translation type="unfinished">Radius of cone cannot be negative</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="402"/>
      <source>Height of cone too small</source>
      <translation type="unfinished">Height of cone too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="482"/>
      <location filename="../../../App/FeaturePrimitive.cpp" line="487"/>
      <source>Radius of ellipsoid too small</source>
      <translation type="unfinished">Radius of ellipsoid too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="581"/>
      <location filename="../../../App/FeaturePrimitive.cpp" line="586"/>
      <source>Radius of torus too small</source>
      <translation type="unfinished">Radius of torus too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="671"/>
      <source>Polygon of prism is invalid, must have 3 or more sides</source>
      <translation type="unfinished">Polygon of prism is invalid, must have 3 or more sides</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="676"/>
      <source>Circumradius of the polygon, of the prism, is too small</source>
      <translation type="unfinished">Circumradius of the polygon, of the prism, is too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="681"/>
      <source>Height of prism is too small</source>
      <translation type="unfinished">Height of prism is too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="768"/>
      <source>delta x of wedge too small</source>
      <translation type="unfinished">delta x of wedge too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="774"/>
      <source>delta y of wedge too small</source>
      <translation type="unfinished">delta y of wedge too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="780"/>
      <source>delta z of wedge too small</source>
      <translation type="unfinished">delta z of wedge too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="786"/>
      <source>delta z2 of wedge is negative</source>
      <translation type="unfinished">delta z2 of wedge is negative</translation>
    </message>
    <message>
      <location filename="../../../App/FeaturePrimitive.cpp" line="792"/>
      <source>delta x2 of wedge is negative</source>
      <translation type="unfinished">delta x2 of wedge is negative</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureRevolution.cpp" line="123"/>
      <source>Angle of revolution too large</source>
      <translation type="unfinished">Angle of revolution too large</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureRevolution.cpp" line="130"/>
      <source>Angle of revolution too small</source>
      <translation type="unfinished">Angle of revolution too small</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureRevolution.cpp" line="137"/>
      <source>Angles of revolution nullify each other</source>
      <translation type="unfinished">Angles of revolution nullify each other</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureGroove.cpp" line="146"/>
      <location filename="../../../App/FeatureRevolution.cpp" line="168"/>
      <source>Reference axis is invalid</source>
      <translation type="unfinished">Reference axis is invalid</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrude.cpp" line="756"/>
      <source>Fusion with base feature failed</source>
      <translation type="unfinished">Fusion with base feature failed</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureTransformed.cpp" line="99"/>
      <source>Transformation feature Linked object is not a Part object</source>
      <translation type="unfinished">Transformation feature Linked object is not a Part object</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureTransformed.cpp" line="106"/>
      <source>No originals linked to the transformed feature.</source>
      <translation type="unfinished">No originals linked to the transformed feature.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureTransformed.cpp" line="346"/>
      <source>Cannot transform invalid support shape</source>
      <translation type="unfinished">Cannot transform invalid support shape</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureTransformed.cpp" line="397"/>
      <source>Shape of additive/subtractive feature is empty</source>
      <translation type="unfinished">Shape of additive/subtractive feature is empty</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureTransformed.cpp" line="388"/>
      <source>Only additive and subtractive features can be transformed</source>
      <translation type="unfinished">Only additive and subtractive features can be transformed</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureThickness.cpp" line="107"/>
      <source>Invalid face reference</source>
      <translation type="unfinished">Invalid face reference</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesign_InvoluteGear</name>
    <message>
<<<<<<< HEAD
      <location filename="../../../InvoluteGearFeature.py" line="62"/>
      <source>Involute Gear</source>
      <translation>இன்வால்யூட் கியர்</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="66"/>
      <source>Creates or edits the involute gear definition</source>
      <translation>உள்ளடக்கிய கியர் வரையறையை உருவாக்குகிறது அல்லது திருத்துகிறது</translation>
=======
      <location filename="../../../InvoluteGearFeature.py" line="60"/>
      <source>Involute Gear</source>
      <translation type="unfinished">Involute Gear</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="64"/>
      <source>Creates or edits the involute gear definition</source>
      <translation type="unfinished">Creates or edits the involute gear definition</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesign_Sprocket</name>
    <message>
<<<<<<< HEAD
      <location filename="../../../SprocketFeature.py" line="65"/>
      <source>Sprocket</source>
      <translation>ச்ப்ராக்கெட்</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.py" line="69"/>
      <source>Creates or edits the sprocket definition.</source>
      <translation>ச்ப்ராக்கெட் வரையறையை உருவாக்குகிறது அல்லது திருத்துகிறது.</translation>
=======
      <location filename="../../../SprocketFeature.py" line="63"/>
      <source>Sprocket</source>
      <translation type="unfinished">Sprocket</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.py" line="67"/>
      <source>Creates or edits the sprocket definition.</source>
      <translation type="unfinished">Creates or edits the sprocket definition.</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPreviewParameters</name>
    <message>
      <location filename="../../TaskPreviewParameters.ui" line="20"/>
      <source>Show final result</source>
<<<<<<< HEAD
      <translation>இறுதி முடிவைக் காட்டு</translation>
=======
      <translation type="unfinished">Show final result</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
    <message>
      <location filename="../../TaskPreviewParameters.ui" line="27"/>
      <source>Show preview overlay</source>
<<<<<<< HEAD
      <translation>முன்னோட்ட மேலடுக்கைக் காட்டு</translation>
    </message>
    <message>
      <location filename="../../TaskFeatureParameters.cpp" line="52"/>
      <source>Preview</source>
      <translation>முன்னோட்டம்</translation>
=======
      <translation type="unfinished">Show preview overlay</translation>
    </message>
    <message>
      <location filename="../../TaskFeatureParameters.cpp" line="48"/>
      <source>Preview</source>
      <translation type="unfinished">Preview</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesign_WizardShaft</name>
    <message>
<<<<<<< HEAD
      <location filename="../../../WizardShaft/WizardShaft.py" line="225"/>
      <source>Shaft Design Wizard</source>
      <translation>தண்டு வடிவமைப்பு வழிகாட்டி</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaft.py" line="228"/>
      <source>Starts the shaft design wizard</source>
      <translation>தண்டு வடிவமைப்பு வழிகாட்டியைத் தொடங்குகிறது</translation>
=======
      <location filename="../../../WizardShaft/WizardShaft.py" line="223"/>
      <source>Shaft Design Wizard</source>
      <translation type="unfinished">Shaft Design Wizard</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaft.py" line="226"/>
      <source>Starts the shaft design wizard</source>
      <translation type="unfinished">Starts the shaft design wizard</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesign::FeatureAddSub</name>
    <message>
<<<<<<< HEAD
      <location filename="../../../App/FeatureAddSub.cpp" line="87"/>
      <source>Failure while computing removed volume preview: %1</source>
      <translation>நீக்கப்பட்ட தொகுதி முன்னோட்டத்தை கணக்கிடுவதில் தோல்வி: % 1</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureAddSub.cpp" line="125"/>
      <source>Resulting shape is empty. That may indicate that no material will be removed or a problem with the model.</source>
      <translation>முடிவு வடிவம் காலியாக உள்ளது. இது எந்தப் பொருளும் அகற்றப்படாது அல்லது மாதிரியில் ஒரு சிக்கலைக் குறிக்கலாம்.</translation>
=======
      <location filename="../../../App/FeatureAddSub.cpp" line="84"/>
      <source>Failure while computing removed volume preview: %1</source>
      <translation type="unfinished">Failure while computing removed volume preview: %1</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureAddSub.cpp" line="105"/>
      <source>Resulting shape is empty. That may indicate that no material will be removed or a problem with the model.</source>
      <translation type="unfinished">Resulting shape is empty. That may indicate that no material will be removed or a problem with the model.</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignCompDatums</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="2667"/>
      <source>Create Datum</source>
      <translation>டேட்டமை உருவாக்கவும்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2668"/>
      <source>Creates a datum object or local coordinate system</source>
      <translation>தரவு பொருள் அல்லது உள்ளக ஒருங்கிணைப்பு அமைப்பை உருவாக்குகிறது</translation>
=======
      <location filename="../../Command.cpp" line="2644"/>
      <source>Create Datum</source>
      <translation type="unfinished">Create Datum</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2645"/>
      <source>Creates a datum object or local coordinate system</source>
      <translation type="unfinished">Creates a datum object or local coordinate system</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>CmdPartDesignCompSketches</name>
    <message>
<<<<<<< HEAD
      <location filename="../../Command.cpp" line="2702"/>
      <source>Create Datum</source>
      <translation>டேட்டமை உருவாக்கவும்</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2703"/>
      <source>Creates a datum object or local coordinate system</source>
      <translation>தரவு பொருள் அல்லது உள்ளக ஒருங்கிணைப்பு அமைப்பை உருவாக்குகிறது</translation>
=======
      <location filename="../../Command.cpp" line="2679"/>
      <source>Create Datum</source>
      <translation type="unfinished">Create Datum</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2680"/>
      <source>Creates a datum object or local coordinate system</source>
      <translation type="unfinished">Creates a datum object or local coordinate system</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesign_CompPrimitiveAdditive</name>
    <message>
<<<<<<< HEAD
      <location filename="../../CommandPrimitive.cpp" line="217"/>
      <source>Creates an additive box by its width, height, and length</source>
      <translation>அதன் அகலம், உயரம் மற்றும் நீளம் ஆகியவற்றின் அடிப்படையில் ஒரு சேர்க்கை பெட்டியை உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="226"/>
      <source>Creates an additive cylinder by its radius, height, and angle</source>
      <translation>அதன் ஆரம், உயரம் மற்றும் கோணத்தின் மூலம் ஒரு சேர்க்கை உருளையை உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="235"/>
      <source>Creates an additive sphere by its radius and various angles</source>
      <translation>அதன் ஆரம் மற்றும் பல்வேறு கோணங்களில் ஒரு சேர்க்கை கோளத்தை உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="244"/>
      <source>Creates an additive cone</source>
      <translation>ஒரு சேர்க்கை கூம்பை உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="250"/>
      <source>Creates an additive ellipsoid</source>
      <translation>ஒரு சேர்க்கை நீள்வட்டத்தை உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="256"/>
      <source>Creates an additive torus</source>
      <translation>ஒரு சேர்க்கை டோரசை உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="262"/>
      <source>Creates an additive prism</source>
      <translation>ஒரு சேர்க்கை ப்ரிசத்தை உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="268"/>
      <source>Creates an additive wedge</source>
      <translation>ஒரு சேர்க்கை ஆப்பு உருவாக்குகிறது</translation>
=======
      <location filename="../../CommandPrimitive.cpp" line="215"/>
      <source>Creates an additive box by its width, height, and length</source>
      <translation type="unfinished">Creates an additive box by its width, height, and length</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="224"/>
      <source>Creates an additive cylinder by its radius, height, and angle</source>
      <translation type="unfinished">Creates an additive cylinder by its radius, height, and angle</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="233"/>
      <source>Creates an additive sphere by its radius and various angles</source>
      <translation type="unfinished">Creates an additive sphere by its radius and various angles</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="242"/>
      <source>Creates an additive cone</source>
      <translation type="unfinished">Creates an additive cone</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="248"/>
      <source>Creates an additive ellipsoid</source>
      <translation type="unfinished">Creates an additive ellipsoid</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="254"/>
      <source>Creates an additive torus</source>
      <translation type="unfinished">Creates an additive torus</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="260"/>
      <source>Creates an additive prism</source>
      <translation type="unfinished">Creates an additive prism</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="266"/>
      <source>Creates an additive wedge</source>
      <translation type="unfinished">Creates an additive wedge</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesign_CompPrimitiveSubtractive</name>
    <message>
<<<<<<< HEAD
      <location filename="../../CommandPrimitive.cpp" line="402"/>
      <source>Creates a subtractive box by its width, height and length</source>
      <translation>அதன் அகலம், உயரம் மற்றும் நீளம் மூலம் கழித்தல் பெட்டியை உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="411"/>
      <source>Creates a subtractive cylinder by its radius, height and angle</source>
      <translation>அதன் ஆரம், உயரம் மற்றும் கோணம் மூலம் கழித்தல் சிலிண்டரை உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="420"/>
      <source>Creates a subtractive sphere by its radius and various angles</source>
      <translation>அதன் ஆரம் மற்றும் பல்வேறு கோணங்களால் கழித்தல் கோளத்தை உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="429"/>
      <source>Creates a subtractive cone</source>
      <translation>கழித்தல் கூம்பை உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="435"/>
      <source>Creates a subtractive ellipsoid</source>
      <translation>கழித்தல் நீள்வட்டத்தை உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="441"/>
      <source>Creates a subtractive torus</source>
      <translation>கழித்தல் டோரசை உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="447"/>
      <source>Creates a subtractive prism</source>
      <translation>கழித்தல் ப்ரிசத்தை உருவாக்குகிறது</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="453"/>
      <source>Creates a subtractive wedge</source>
      <translation>கழித்தல் ஆப்பு உருவாக்குகிறது</translation>
=======
      <location filename="../../CommandPrimitive.cpp" line="400"/>
      <source>Creates a subtractive box by its width, height and length</source>
      <translation type="unfinished">Creates a subtractive box by its width, height and length</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="409"/>
      <source>Creates a subtractive cylinder by its radius, height and angle</source>
      <translation type="unfinished">Creates a subtractive cylinder by its radius, height and angle</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="418"/>
      <source>Creates a subtractive sphere by its radius and various angles</source>
      <translation type="unfinished">Creates a subtractive sphere by its radius and various angles</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="427"/>
      <source>Creates a subtractive cone</source>
      <translation type="unfinished">Creates a subtractive cone</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="433"/>
      <source>Creates a subtractive ellipsoid</source>
      <translation type="unfinished">Creates a subtractive ellipsoid</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="439"/>
      <source>Creates a subtractive torus</source>
      <translation type="unfinished">Creates a subtractive torus</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="445"/>
      <source>Creates a subtractive prism</source>
      <translation type="unfinished">Creates a subtractive prism</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="451"/>
      <source>Creates a subtractive wedge</source>
      <translation type="unfinished">Creates a subtractive wedge</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDlgPrimitiveParameters</name>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskPrimitiveParameters.cpp" line="1180"/>
      <source>Attachment</source>
      <translation>இணைப்பு</translation>
=======
      <location filename="../../TaskPrimitiveParameters.cpp" line="1007"/>
      <source>Attachment</source>
      <translation type="unfinished">Attachment</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDlgRevolutionParameters</name>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskRevolutionParameters.cpp" line="803"/>
      <source>Revolution Parameters</source>
      <translation>புரட்சி அளவுருக்கள்</translation>
=======
      <location filename="../../TaskRevolutionParameters.cpp" line="835"/>
      <source>Revolution Parameters</source>
      <translation type="unfinished">Revolution Parameters</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDlgGrooveParameters</name>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskRevolutionParameters.cpp" line="813"/>
      <source>Groove Parameters</source>
      <translation>பள்ளம் அளவுருக்கள்</translation>
=======
      <location filename="../../TaskRevolutionParameters.cpp" line="845"/>
      <source>Groove Parameters</source>
      <translation type="unfinished">Groove Parameters</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskTransformedMessages</name>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskTransformedMessages.cpp" line="39"/>
      <source>Transformed Feature Messages</source>
      <translation>மாற்றப்பட்ட அம்ச செய்திகள்</translation>
=======
      <location filename="../../TaskTransformedMessages.cpp" line="37"/>
      <source>Transformed Feature Messages</source>
      <translation type="unfinished">Transformed Feature Messages</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderBody</name>
    <message>
<<<<<<< HEAD
      <location filename="../../ViewProviderBody.cpp" line="199"/>
      <source>Active Body</source>
      <translation>சுறுசுறுப்பான உடல்</translation>
=======
      <location filename="../../ViewProviderBody.cpp" line="122"/>
      <source>Active Body</source>
      <translation type="unfinished">Active Body</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderChamfer</name>
    <message>
<<<<<<< HEAD
      <location filename="../../ViewProviderChamfer.h" line="44"/>
      <source>Chamfer Parameters</source>
      <translation>சேம்பர் அளவுருக்கள்</translation>
=======
      <location filename="../../ViewProviderChamfer.h" line="43"/>
      <source>Chamfer Parameters</source>
      <translation type="unfinished">Chamfer Parameters</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderDatum</name>
    <message>
<<<<<<< HEAD
      <location filename="../../ViewProviderDatum.cpp" line="115"/>
      <source>Datum Plane Parameters</source>
      <translation>டேட்டம் பிளேன் அளவுருக்கள்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="120"/>
      <source>Datum Line Parameters</source>
      <translation>டேட்டம் லைன் அளவுருக்கள்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="125"/>
      <source>Datum Point Parameters</source>
      <translation>டேட்டம் பாயிண்ட் அளவுருக்கள்</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="130"/>
      <source>Local Coordinate System Parameters</source>
      <translation>உள்ளக ஒருங்கிணைப்பு அமைப்பு அளவுருக்கள்</translation>
=======
      <location filename="../../ViewProviderDatum.cpp" line="113"/>
      <source>Datum Plane Parameters</source>
      <translation type="unfinished">Datum Plane Parameters</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="118"/>
      <source>Datum Line Parameters</source>
      <translation type="unfinished">Datum Line Parameters</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="123"/>
      <source>Datum Point Parameters</source>
      <translation type="unfinished">Datum Point Parameters</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="128"/>
      <source>Local Coordinate System Parameters</source>
      <translation type="unfinished">Local Coordinate System Parameters</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderDraft</name>
    <message>
<<<<<<< HEAD
      <location filename="../../ViewProviderDraft.h" line="45"/>
      <source>Draft Parameters</source>
      <translation>வரைவு அளவுருக்கள்</translation>
=======
      <location filename="../../ViewProviderDraft.h" line="44"/>
      <source>Draft Parameters</source>
      <translation type="unfinished">Draft Parameters</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderFillet</name>
    <message>
<<<<<<< HEAD
      <location filename="../../ViewProviderFillet.h" line="44"/>
      <source>Fillet Parameters</source>
      <translation>ஃபில்லட் அளவுருக்கள்</translation>
=======
      <location filename="../../ViewProviderFillet.h" line="43"/>
      <source>Fillet Parameters</source>
      <translation type="unfinished">Fillet Parameters</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderLinearPattern</name>
    <message>
<<<<<<< HEAD
      <location filename="../../ViewProviderLinearPattern.h" line="41"/>
      <source>Linear Pattern Parameters</source>
      <translation>நேரியல் வடிவ அளவுருக்கள்</translation>
=======
      <location filename="../../ViewProviderLinearPattern.h" line="40"/>
      <source>Linear Pattern Parameters</source>
      <translation type="unfinished">Linear Pattern Parameters</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGuii::ViewProviderMirrored</name>
    <message>
<<<<<<< HEAD
      <location filename="../../ViewProviderMirrored.h" line="41"/>
      <source>Mirror Parameters</source>
      <translation>மிரர் அளவுருக்கள்</translation>
=======
      <location filename="../../ViewProviderMirrored.h" line="40"/>
      <source>Mirror Parameters</source>
      <translation type="unfinished">Mirror Parameters</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderMultiTransform</name>
    <message>
<<<<<<< HEAD
      <location filename="../../ViewProviderMultiTransform.h" line="41"/>
      <source>Multi-Transform Parameters</source>
      <translation>பல உருமாற்ற அளவுருக்கள்</translation>
=======
      <location filename="../../ViewProviderMultiTransform.h" line="40"/>
      <source>Multi-Transform Parameters</source>
      <translation type="unfinished">Multi-Transform Parameters</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderPolarPattern</name>
    <message>
<<<<<<< HEAD
      <location filename="../../ViewProviderPolarPattern.h" line="41"/>
      <source>Polar Pattern Parameters</source>
      <translation>போலார் பேட்டர்ன் அளவுருக்கள்</translation>
=======
      <location filename="../../ViewProviderPolarPattern.h" line="40"/>
      <source>Polar Pattern Parameters</source>
      <translation type="unfinished">Polar Pattern Parameters</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderScaled</name>
    <message>
<<<<<<< HEAD
      <location filename="../../ViewProviderScaled.h" line="41"/>
      <source>Scale Parameters</source>
      <translation>அளவுருக்கள்</translation>
=======
      <location filename="../../ViewProviderScaled.h" line="40"/>
      <source>Scale Parameters</source>
      <translation type="unfinished">Scale Parameters</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderThickness</name>
    <message>
<<<<<<< HEAD
      <location filename="../../ViewProviderThickness.h" line="44"/>
      <source>Thickness Parameters</source>
      <translation>தடிமன் அளவுருக்கள்</translation>
=======
      <location filename="../../ViewProviderThickness.h" line="43"/>
      <source>Thickness Parameters</source>
      <translation type="unfinished">Thickness Parameters</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPatternParameters</name>
    <message>
<<<<<<< HEAD
      <location filename="../../TaskPatternParameters.cpp" line="148"/>
      <source>Direction 2</source>
      <translation>திசை 2</translation>
    </message>
    <message>
      <location filename="../../TaskPatternParameters.cpp" line="267"/>
      <source>Select a direction reference (edge, face, datum line)</source>
      <translation>திசைக் குறிப்பைத் தேர்ந்தெடுக்கவும் (விளிம்பு, முகம், தரவுக் கோடு)</translation>
    </message>
    <message>
      <location filename="../../TaskPatternParameters.cpp" line="355"/>
      <source>Invalid selection. Select an edge, planar face, or datum line.</source>
      <translation>தவறான தேர்வு. விளிம்பு, சமதள முகம் அல்லது டேட்டம் லைனைத் தேர்ந்தெடுக்கவும்.</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskFeatureParameters</name>
    <message>
      <location filename="../../TaskFeatureParameters.cpp" line="138"/>
      <source>%1 fine dragging</source>
      <translation type="unfinished">%1 fine dragging</translation>
    </message>
    <message>
      <location filename="../../TaskFeatureParameters.cpp" line="141"/>
      <source>%1 coarse dragging</source>
      <translation type="unfinished">%1 coarse dragging</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDlgFeatureParameters</name>
    <message>
      <location filename="../../TaskFeatureParameters.cpp" line="264"/>
      <source>The feature could not be created with the given parameters.
The geometry may be invalid or the parameters may be incompatible.
Adjust the parameters and try again.</source>
      <translation type="unfinished">The feature could not be created with the given parameters.
The geometry may be invalid or the parameters may be incompatible.
Adjust the parameters and try again.</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDlgShapeBinder</name>
    <message>
      <location filename="../../TaskShapeBinder.cpp" line="443"/>
      <source>Input Error</source>
      <translation>உள்ளீடு பிழை</translation>
=======
      <location filename="../../TaskPatternParameters.cpp" line="130"/>
      <source>Direction 2</source>
      <translation type="unfinished">Direction 2</translation>
    </message>
    <message>
      <location filename="../../TaskPatternParameters.cpp" line="246"/>
      <source>Select a direction reference (edge, face, datum line)</source>
      <translation type="unfinished">Select a direction reference (edge, face, datum line)</translation>
    </message>
    <message>
      <location filename="../../TaskPatternParameters.cpp" line="332"/>
      <source>Invalid selection. Select an edge, planar face, or datum line.</source>
      <translation type="unfinished">Invalid selection. Select an edge, planar face, or datum line.</translation>
>>>>>>> 145529fe741292ff0b3977a01195bf0247425794
    </message>
  </context>
</TS>
