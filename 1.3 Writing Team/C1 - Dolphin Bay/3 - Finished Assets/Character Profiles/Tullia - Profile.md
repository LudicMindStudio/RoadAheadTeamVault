---
tags:
Date_Created: 2026-03-09
Age: 13
Profession: Kid
---

# Character Brainstorming 

Use this space to draft ideas of the character or link in brainstorming documents 
# Reference Art  
[[Tullia_ConceptArt.jpeg]]
# Description

## Key Information 

| Age                 |         |
| ------------------- | ------- |
| Profession          | student |
| Relationship Status |         |

## Appearance 

 - long braided hair
- dark eyes
- white t-shirt
## Core Characteristics

Description of the vibe of the character. What makes this character tick? 
## Essential History 

Description of any character defining events that occurred before they meet Lakshmi 
## Relationships

Brief description of major relationships (lovers, good friends, enemies etc.). What does the character think of other characters 
## Character Behavior 

Use this space to describe generally what the NPC does during their day (optional table below)

|           | LOCATION | ACTIVITY | SPECIAL NOTES |
| --------- | -------- | -------- | ------------- |
| MORNING   |          |          |               |
| AFTERNOON |          |          |               |
| EVENING   |          |          |               |
| SPECIAL   |          |          |               |

--- 
# Character Quests

CHARACTER SIDE QUEST 1 LINK

--- 
# Character Dialogue 

## Essential Reactions 

INTRODUCTION TO NPC 
	Brief summary of intro conversation 
	Conditions - (START) First interaction with NPC 

DELIVERED MAIL TO NPC
	Brief summary of DELIVERED MAIL TO NPC
		Conditions - (START) Lakshmi must have mail for NPC
## Misc Reactions 

EXAMPLE INTERACTION 
	Brief summary of interaction 
		Conditions -





## Core Characteristics 

Description of the vibe of the character. What makes this character tick? 
Tullia (mean shy is romanian) Follows Cat around. Stays behind her during interactions with other characters. Does not talk much to Lakshmi as she is rather shy but is curious as to what Lakshmi is up to. 
## Essential History 

Tullia is wary of strangers. 
## Relationships

She is part of the group of kids in Dolphin Bay. She feels the closest towards Cat. 
## Brainstorming Links
[[Little Girl 2 (Tullia)]]

--- 
# Character Dialogue 


[[LakshmiDeliversMailToTullia_0]]
	Tullia is alone near her residence and Lakshmi find her.
		Trigger Start - Lakshmi_Has_Tullias_Mail=True, Lakshmi_Interacts_NPC=True  
		On Clear - Lakshmi_Has_Delivered_Tullias_Mail=True, Lakshmi_Has_NPCs_Mail=False


[[LakshmiInteractWithTulliaAlone_0]]
	Tullia is walking in Dolphin Bay by herself
			Trigger Start - Lakshmi_Has_Tullias_Mail=False, Lakshmi_Interacts_Tullia=True
			On Clear - Lakshmi_ Finds_Tullia_Interesting = True

