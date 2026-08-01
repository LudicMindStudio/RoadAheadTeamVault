---
tags:
Date_Created: 2026-07-21
---
```
> PLEASE TITLE - CharacterName - Profile
```

# Character Brainstorming 

Use this space to draft ideas of the character or link in brainstorming documents 
# Reference Art  

![[Briar-Intern concept art.jpg]]
# Description

## Key Information 

| Age                 | 17                  |
| ------------------- | ------------------- |
| Profession          | Postalworker Intern |
| Relationship Status | Single              |

## Appearance 

Scrawny little bookworm/awkward duck. Ambiguous gender. Around Lakshmi's age, perhaps slightly younger. They take great care of their Guild uniform and wear it with pride, as it represents their dream to become one day a full-fledged postal worker. They should contrast Lakshmi's bright, outgoing appearance, instead leaning toward the look of a "background NPC" - reserved, introverted, and easy to overlook.

**Special item:** Book.
## Core Characteristics

Olevia is an newbie awkward duck who really wants to become a good postal worker. They cannot wait for their exam invitation, so they work extra hard to impress Greg. In contrast to Lakshmi, Olevia is passive and forgettable (hence everyone forgetting their name). They love to daydream and loathe meeting new people. 

They also love to learn neat facts about villages. 

## Essential History 

*Description of any character defining events that occurred before they meet Lakshmi.*

Briar moved from their hometown to Dolphin Bay to become a postal worker. They have arrived a week ago or so before the fog got thick and completely isolated Dolphin Bay from from other villages. They are a bit homesick but are scared to admit it to anyone, lest be considered incompetent at their job. They really have a hard time meeting new people, and often forget other's names, and others forget theirs - that seems fair, one would suppose. 

They want to become a good postal worker, so they work extra hard to prove their worth. If need be, one can skip a night's rest! That's how you make sure other's will remember their name... right? How does it come so easy to Lakshmi? What is she doing better than them?

Briar really enjoys learning of the village history and typically spend their time reading books. They pride in their skill to read complex old books and compile it into simple words. That skill does not really earn you friends though does it?

They enjoy watching Gyo work to learn about dolphins, for he is warmer and less intimidating than Anita.

## Relationships

Brief description of major relationships (lovers, good friends, enemies etc.). What does the character think of other characters 

[[Lakshmi - Profile]] - Strangers, jealous of her easy going nature and natural charm to befriend people easily. Will become friends with her over a quest.

[[Greg - Profile]] - unexpected future friendship. Both are cynical and quiet. 

[[Gyo - Profile]] - would love to befriend. A bit intimidated by Anita.

## Character Behavior 

*Use this space to describe generally what the NPC does during their day (optional table below)*

|           | LOCATION                       | ACTIVITY                | SPECIAL NOTES                                                                                         |
| --------- | ------------------------------ | ----------------------- | ----------------------------------------------------------------------------------------------------- |
| MORNING   | Guild Hall                     | Scrambling Mail, Pacing | dialogue trigger start: BriarPacing = True                                                            |
| AFTERNOON | Under a tree, in a quiet space | Daydreaming             | Trigger Start - Lakshmi_Has_Delivered_Briars_Mail=True<br><br>**paces all night, doesn't go to sleep* |
| EVENING   | Guild Hall                     | Scrambling Mail, Pacing | dialogue trigger start: BriarPacing = True                                                            |
| SPECIAL   | Dolphin Sanctuary              | Observing Gyo work      | Observing from the side, sometimes chatting                                                           |

## Brainstorming Links
[[Act 1 - Quest 1 - Scene 1 (Rough Work)]]
[[Act 1 - Pre-graduation Revision#Quest 3, Scene 2 Practical Test - Meeting the Intern|Quest 3, Scene 2 - Intern Dialogue]]
[[Act 1 - Pre-graduation Revision#Quest 3, Scene 3 Practical Test - Intern Memory|Quest 3, Scene 3 - Intern Memory]]

--- 
# Character Quests

(WIP) BEFIRENDING LAKSHMI

(WIP) HELPING LAKSHMI'S QUEST

--- 
# Character Dialogue 

## Essential Reactions 

INTRODUCTION TO NPC / DELIVER MAIL TO NPC 
	Act 1 [[Quest 3 - Deliver Mail to Intern - Outline]]
	During Lakshmi's postal work exam, Lakshmi practices delivering mail to the Guild's new intern 
		Trigger Start - Lakshmi_Has_Briar_Mail=True, Lakshmi_Interacts_NPC=True  
		On Clear - Lakshmi_Has_Delivered_Briars_Mail=True, Lakshmi_Has_NPCs_Mail=False

|DIA|[[InternRelaxBanter_0]]
	Happens whenever the Intern is relaxing under a tree outside (tied to [[#Character Behavior]])
		Trigger Start - Lakshmi_Has_Delivered_Briars_Mail=True
		On Clear - BriarPacing=True

|DIA|[[InternPacingBanter_0]]
	Happens whenever the Intern is pacing in the Guild Hall (tied to [[#Character Behavior]])
		Trigger Start - Lakshmi_Has_Delivered_Briars_Mail=True
		On Clear - BriarRelaxing=True
## Misc Reactions 

EXAMPLE INTERACTION 
	Brief summary of interaction 
		Conditions -
