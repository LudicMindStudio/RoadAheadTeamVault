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

[[Scene 2 - Practical Test - Meeting the Intern - Scene Outline]]
## General Description

Lakshmi fumbles to greet the intern.
## Event Logic

Trigger Start - LakshmiInteractsIntern=True
Trigger Clear - LakshmiFinishesGreetingIntern=True

--- 
# Event Script

|DIA|[[HiInternHereIsYourMail]]
	Lakshmi interacts with intern to deliver mail
	On Clear - HiInternHereIsYourMail=True

Player chooses greeting options in order - Lakshmi
	Player should choose the greeting options in order (out of 4). Previous options should disappear with each choice. The choices are (in correct order): (1) Hello! (2) I'm Lakshmi from the postal guild here to deliver your mail. (3) Thank you for using our services. (4) Have a good day!
	On Clear - FirstGreetingLetterDone=True

|DIA|[[LakshmiSucceedsGreetingLetterIntern]]
	If player gets the correct order 
	On Clear - LakshmiSucceedsGreetingLetterIntern=True

|DIA|[[LakshmiFailsGreetingLetterIntern]]
	If player fails to the correct order 
	On Clear - LakshmiFailsGreetingLetterIntern=True

Remove Letter from Inventory
	Letter for Intern removed from inventory
	On Clear - InternLetterDelivered=True

Screen Shakes
	Lakshmi feels sick, the screen shakes
	On Clear - LakshmiFeelsSickShakeScreen=True

|DIA|[[MemoryEnterIntern]] 
	Lakshmi feels a bit sick and feels herself being pulled into a memory again (first time in game)
	On Clear - InternMemoryPull=True

Enter Memory Screen Effect
	On Clear - InternMemoryEnter=True
