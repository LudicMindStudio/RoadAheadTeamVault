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

[[Scene 1 - Practical Test - Quest Giver - Scene Outline]]
## General Description

Lakshmi goes up to Greg to take the Practical test
## Event Logic

Trigger Start - LakshmiTalksGregPracticalTest=True 
On Clear - LakshmHasInternLetter=TrCue 

--- 
# Event Script

|DIA|[[PracticalTestGiver]]
	Greg announces next quest
	On Clear - GregSaysHiLakshmi=True

ACTION - Intern Letter Tossed On Desk - Greg
	Sealed letter for intern appears on desk as if it was tossed
	On Clear - TossLetterDesk=True

INVENTORY EFFECT - Intern Letter in Inventory
	S item. Description: Letter to be delivered to the new intern. 
	On Clear - LetterInternAcquired=True

|DIA|[[PracticalTestGiver2]]
	Greg Tells Lakshmi to go see intern with letter
	On Clear - LakshmHasInternLetter=True


