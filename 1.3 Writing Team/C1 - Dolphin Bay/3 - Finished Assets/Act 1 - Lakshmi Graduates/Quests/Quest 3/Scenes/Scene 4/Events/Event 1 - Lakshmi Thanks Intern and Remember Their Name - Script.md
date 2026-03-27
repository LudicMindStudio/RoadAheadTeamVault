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

[[Quest 3 - Deliver Mail to Intern - Outline]]
## General Description

Lakshmi tries to thank the intern for steadying her while she had a flashback (intern memory) and tries to recall their name.
## Event Logic

Trigger Start - InternMemoryEnd=True
On Clear - OleviaMailDelivered=True

--- 
# Event Script

|DIA|[[LakshmiThanksIntern]]
	Lakshmi tries to remember the interns name to thank them
		On Clear - InternNameIs=True 

Change NPC Intern name to Olevia from now on
	Change NPC Intern name to Olevia from now on
	On Clear - InternIsOlevia=True

|DIA|[[LakshmiThanksIntern2]]
	Lakshmi cheers up the intern 
	On Clear - HangInThereOlevia=True 

|DIA|[[LakshmiThanksIntern3]]
	Lakshmi goes to see Greg. Thinks to herself that she should do something about the memory flashbacks.
	On Clear - OleviaMailDelivered=True 


