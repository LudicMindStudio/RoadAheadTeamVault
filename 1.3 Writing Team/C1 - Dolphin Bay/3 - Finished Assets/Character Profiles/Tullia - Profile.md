---
tags:
Date_Created: 2026-03-09
Age: 9
Profession: kid
---

# Reference Art Links

[[Tullia_ConceptArt.jpeg]]
# Description

## Appearance 

 - long braided hair
- dark eyes
- white t-shirt
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

DIALOGUE_0 ONE
	Brief summary of Dialogue One 
		Trigger Start - ExampleTag=True
		On Clear - ExampleTag=True 

DELIVERED MAIL TO NPC
	Brief summary of DELIVERED MAIL TO NPC
		Trigger Start - Lakshmi_Has_NPCs_Mail=True, Lakshmi_Interacts_NPC=True  
		On Clear - Lakshmi_Has_Delivered_NPCs_Mail=True, Lakshmi_Has_NPCs_Mail=False

LakshmiMeetsTullia_0 ONE
	Tullia is sitting near the docks with Cat. They are talking among themselves. Lakshmi comes near and Cat calls her out. 
		Trigger Start - Lakshmi_comes_near_the_group=True
		On Clear - Lakshmi_Has_Met_Cat_and_Tullia =True 

LakshmiDeliversMailToTullia_0
	Tullia is alone near her residence and Lakshmi find her.
		Trigger Start - Lakshmi_Has_Tullias_Mail=True, Lakshmi_Interacts_NPC=True  
		On Clear - Lakshmi_Has_Delivered_Tullias_Mail=True, Lakshmi_Has_NPCs_Mail=False