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

One line summary of the event 
## Event Logic

Trigger Start - ExampleTag=True
On Clear - ExampleTag=True

--- 
# Event Script

Lakshmi chooses greeting options in order - Lakshmi
	Player chooses greeting options in order (out of 4). Previous choices should disappear with each choice.
	On Clear - ExampleTag=True

|DIA|[[DIALOGUE_1_LakshmiGivesLetterIntern]]
	Lakshmi gives letter
	On Clear - ExampleTag=True

|DIA|[[DIALOGUE_1_LakshmiSucceedsGreetingLetterIntern]]
	If player gets 4/4 correct
	On Clear - LakshmiSucceedsGreetingLetterIntern=True

|DIA|[[DIALOGUE_1_LakshmiFailsGreetingLetterIntern]]
	If player gets 3/4 or less correct
	On Clear - LakshmiFailsGreetingLetterIntern=True

Remove Letter from Inventory
	Letter for Intern removed from inventory
	On Clear - ExampleTag=True

