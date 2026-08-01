---
tags:
Date_Created:
Characters:
---
```
> PLEASE TITLE - Event - Event Number - EventName -  Script
```
# Event Description

## Root Scene

[[Scene 3 - Practical Test - Intern Memory - Scene Outline]]
## General Description

Intern looks around room with mail scattered on floor, trying to fix the mess.
## Event Logic

Trigger Start - InternMemoryStart=True
On Clear - InternMemoryEnd=True

--- 
# Event Script

Intern Looks around - Intern 
	Intern looks around the mess of the room, searching for a package
	On Clear - InternTurns=True

|DIA|[[InternSearchesPackage]]

Gold package shines
	A gold package shines at the top of the mountain of boxes
	On Clear - GoldPackageShines=True

|DIA|[[InternComplains]]

More boxes fall to the ground
	As soon as the player reaches the golden box with the parcel, the top few boxes fall and the intern FALLS to the ground. 
	On Clear - PlayerTouchesGoldPackage=True

|DIA|[[InternPanic]]
	Intern scared of the bigger mess they have made. Hear Greg shout from the other room. 
	On Clear - InternPanic=True

Intern jumps in place - Intern 
	Intern jumps in place after hearing Greg's voice from the other room, panicking
	On Clear - InternPanicJump=True

Intern hides behind boxes - Intern 
	The intern hides suddenly behind a pile of boxes in the room 
	On Clear - InternPanicHide=True

Greg enters the room - Greg 
	Greg enters the room while looking for the intern
	On Clear - GregEnterRoom=True

Greg looks around - Greg 
	Greg looks briefly around looking for the intern and doesn't find them
	On Clear - GregSearchesRoom=True

Greg leaves the room - Greg 
	Greg leaves the room while still looking for the intern
	On Clear - GregLeavesRoom=True

|DIA|[[GregCallsOutIntern]]
	Greg calls out to the intern outside the room but cannot remember their name
	On Clear - GregCallsOut=True

Leave Memory Screen Effect
	On Clear - InternMemoryLeave=True
