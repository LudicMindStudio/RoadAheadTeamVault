---
tags:
  - DolphinBay
Date_Created: 2026-03-04
Age: 15
Profession: Kid
---

# Character Brainstorming 
[[Little Girl 1 (Cat)]]
# Reference Art  

![[Pasted image 20260710155906.png|290]]
## Portraits

[[cat.png]]

# Description

## Key Information 

| Age                 | 15               |
| ------------------- | ---------------- |
| Profession          | Teen             |
| Relationship Status | Daughter of Garp |
|                     | Sister of Sammy  |
## Appearance 

- she has thick red hair
- brown eyes
- bandana in her hair
- tank top and shorts
## Core Characteristics
Cat (short for Caterina) Everyone calls her Cat because she can be soft and kind but when needed she can be fierce. That's why she's the leader of the kids.  She has developed a love for animals and has been actively working to protect the wildlife around Dolphin Bay. She appreciates the beauty and complexity of all creatures (big or small). She is protective over her hometown. She encourages her brother in his dream of building a turtle sanctuary. She has started to build a little one in their backyard. 
## Essential History 
She lost her mom when her younger brother was born. It's been hard on her but she grew closer to her father, Garp as well as wildlife. She loves her brother and recognizes that Elio has been a great friend to Sammy.  Cat has grown up hearing stories about the ocean as her father is a sailor and she's been telling the same ones to Sammy. 
## Relationships
[[Tullia - Profile]] - Cat doesn't mind being followed by Tullia all the time. They have grown up together and she's learned to love Tullia as she is.

[[Garp - Profile]] - Cat is very close with her Dad. She tells him everything and he listens with an attentive ear. She likes to hang out by the docks to be near her dad. 

[[Sammy - Profile]] - Cat used to be very close with her brother, but these days he's been spending a lot of time with Elio. They mostly hang out together building a mini turtle sanctuary so Abby can have friends. 

[[Francois Hustle]] - Cat doesn't agree with the way Francois is rallying up everyone against the workers of the Dolphin sanctuary. She thinks that thinking and working together would be more successful. 

## Character Behavior 

|           | LOCATION                         | ACTIVITY                                        | SPECIAL NOTES |
| --------- | -------------------------------- | ----------------------------------------------- | ------------- |
| MORNING   | Beach                            | helps her dad setting traps, collecting oysters |               |
| AFTERNOON | Around the village and the docks | Hangs out                                       |               |
| EVENING   | At home                          | Builds mini turtle sanctuary with Sammy         |               |
| SPECIAL   |                                  |                                                 |               |

{++## Daily Schedule

| Time | Activity | Chain | Location | Duration | Variants | Tags |
|---|---|---|---|---|---|---|
| 00:00-05:00 | Sleep | `Navigate(Home) > Animate(Sleep) > Wait(180s)` | Home @ GarpHouseInterior | 180s | | |
| 05:00-08:00 | Beach with Garp: traps, oysters, the food-bag sort | `Navigate(Beach) > Animate(Fishing) > Wait(105s)` | Beach @ WestDolphinBay | 105s | | spawn, anchor |
| 08:00-12:00 | Promenade rounds: crabs, gulls, her squirrel spots | `Navigate(Promenade) > Wait(145s)` | Promenade @ WestDolphinBay | 145s | | |
| 12:00-15:00 | Docks with Tullia and Sammy | `Navigate(Docks) > Wait(105s)` | Docks @ WestDolphinBay | 105s | | player-window |
| 15:00-18:00 | Critter corner at home | `Navigate(Home) > Wait(105s)` | Home @ GarpHouseInterior | 105s | | |
| 18:00-20:00 | On the dock, watching the water | `Navigate(Docks) > Wait(70s)` | Docks @ WestDolphinBay | 70s | | anchor |
| 20:00-22:00 | Home with Sammy: the sanctuary | `Navigate(Home) > Wait(70s)` | Home @ GarpHouseInterior | 70s | | |
| 22:00-24:00 | Sleep | `Navigate(Home) > Animate(Sleep) > Wait(70s)` | Home @ GarpHouseInterior | 70s | | |

Her rounds carry her quirks: sorting seaweed and prepping the animal food baggies on the beach, watching Garp's inspections for rarities, feeding the seagulls, checking for anything the squirrels cache, running gymnastics at the docks, and doing a snail-versus-turtle experiment in with sammy the yard.++}

--- 
## Key Items
- A jar of sea-glass and oyster shells she has collected?
- A tiny turtle hatchling enclosure?
- A worn photograph of her late mom?

# Character Quests
[[CAT- Side Quest Brainstorm]]
CHARACTER SIDE QUEST 1 LINK
[[CatSideQuest1]]

--- 

# Character Dialogue 

## Essential Reactions 

[[IntroToCatAndTullia_0]] 
	Cat is sitting near the docks with Tullia. They are talking among themselves. Lakshmi comes near and Cat calls her out. 
		Trigger Start - Lakshmi_comes_near_the_group=True, Lakshmi_Has_Met_Cat_and_Tullia = False
		On Clear - Lakshmi_Has_Met_Cat_and_Tullia =True
		
[[IntroToCat_0]] 
	Cat talks about her interest in the ocean life. 
		Trigger Start - Lakshmi_Interacts_Cat=True, Lakshmi_Has_Met_Cat_and_Tullia = False
		
[[LakshmiDeliversMailToCat_0]]
	Lakshmi delivers mail to Cat and learns that she is waiting for an answer from the mayor.
		Trigger Start - Lakshmi_Has_Cats_Mail=True, Lakshmi_Interacts_Cat=True  
		On Clear - Lakshmi_Has_Delivered_Cats_Mail=True, Lakshmi_Has_NPCs_Mail=False, Lakshmi_Learns_Cats_Mayor_Quest=True
## Misc Reactions 

EXAMPLE INTERACTION 
	Brief summary of interaction 
		Conditions -

