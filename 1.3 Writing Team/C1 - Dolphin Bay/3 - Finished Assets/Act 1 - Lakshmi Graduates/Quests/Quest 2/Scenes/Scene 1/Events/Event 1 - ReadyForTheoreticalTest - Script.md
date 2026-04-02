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

[[Scene 1 - Theoretical Test Quest Giver - Scene Outline]]
## General Description

Greg tells Lakshmi that she is ready to do her graduation exam and he tells Lakshmi to sit at the desk and wait to be given the theoretical test.
## Event Logic

Trigger Start - LakshmiTalksGregTheoreticalTest=True
On Clear - TheoreticalTestReady=True

--- 
# Event Script

|DIA|[[LakshmiSaysHiGreg]]
	Greg tells Lakshmi she has to take an exam to graduate as a postal worker 
	On Clear - TheoreticalTestGiver=True

|DIA|[[GregSaysTakeASit]]
	Greg tells Lakshmi she has to take an exam to graduate as a postal worker 
	On Clear - TheoreticalTestReady=True
