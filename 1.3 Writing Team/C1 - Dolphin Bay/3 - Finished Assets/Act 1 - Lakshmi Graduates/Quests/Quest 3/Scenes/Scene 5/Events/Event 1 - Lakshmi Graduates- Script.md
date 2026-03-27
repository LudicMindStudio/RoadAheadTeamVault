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

[[Scene 5 - Practical Test - Lakshmi Graduates Postal School - Scene Outline]]
## General Description

Greg makes a speech and Lakshmi graduates as apostal worker
## Event Logic

Trigger Start - LakshmiTalksGregPracticalTestDone=True
On Clear - LakshmiGraduates=True

--- 
# Event Script

|DIA|[[LakshmiGraduates]]
	Greg congratulates Lakshmi and asks to follow him 
	On Clear - ExampleTag=True


Greg and Lakshmi walk to the blacony - Greg and Lakshmi 
	Greg walks to the balcony at the center of the Guild of the second floor while Lakshmi follows closely behind. Other NPCs within Guild Hall (first and second floow) come in the scene, closer to see Lakshmi.
	On Clear - ExampleTag=True

|DIA|[[LakshmiGraduates2]]
	Greg publicly congratulates Lakshmi
	On Clear - ExampleTag=True

Cheering - Guild Members 
	Guild Members Cheer and Jump, happy for Lakshmi
	On Clear - ExampleTag=True

|DIA|[[LakshmiGraduates3]]
	Greg continues to publicly congratulates Lakshmi part 2
	On Clear - ExampleTag=True

Cheering2 - Guild Members 
	Guild Members Cheer and Jump, happy for Lakshmi part 2
	On Clear - ExampleTag=True

Jump - Lakshmi 
	Lakshmi is excited and jumps in place
	On Clear - ExampleTag=True

|DIA|[[LakshmiGraduates4]]
	Greg continues to publicly congratulates Lakshmi part 3
	On Clear - ExampleTag=True

Cheering NPCs Scatter - Guild Members 
	Guild Members Scatter back to their usual activities
	On Clear - ExampleTag=True

|DIA|[[LakshmiGraduates5]]
	Greg gives Lakshmi next quest
	On Clear - ExampleTag=True


