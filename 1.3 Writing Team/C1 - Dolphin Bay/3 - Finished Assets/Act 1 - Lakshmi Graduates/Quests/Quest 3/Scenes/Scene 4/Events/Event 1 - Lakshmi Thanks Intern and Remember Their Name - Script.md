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

[[Scene 4 - Practical Test - Remembering the Intern's name - Scene Outline]]
## General Description

Lakshmi tries to thank the intern for steadying her while she had a flashback (intern memory) and tries to recall their name.
## Event Logic

Trigger Start - InternMemoryEnd=True
On Clear - OleviaMailDelivered=True

--- 
# Event Script

|DIA|[[LakshmiThanksIntern_0]]
	Remember the interns name to thank her. Play has the option to encourage Olevia
		On Clear - InternHasName=True 
		On Clear - LakshmiEncouragedIOlvia=True 


