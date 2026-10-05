---
tags:
Date_Created:
---
```
> PLEASE TITLE - CharacterName - Profile
```

# Character Brainstorming 

Use this space to draft ideas of the character or link in brainstorming documents 
# Reference Art  

Include any links to reference art here 
# Description

## Key Information 

| Age                 | {++late 60s++}                     |
| ------------------- | --------------------- |
| Profession          | Retired postal worker |
| Relationship Status | Single?               |

## Appearance 

{--Detailed description of the appearance of the character. What do they physically look like? What do they like to wear? --}

{++Mostly balding, the horseshoe balding. The portrait shows him with his hands behind his back.++}

## Core Characteristics

Description of the vibe of the character. What makes this character tick? 

Grandpa Dan seems cold and secluded. Does not speak much but loves to take care of others. With age, more distant from his profession but loves to bake. Has a bit of a temper, but you can see it only by getting to know him well. Lakshmi loves to probe that side of him.

{++- A cynic in the oldest sense: deep philosophical beliefs under it. He reads the worst in things, analytically, and he is proud of what his long life has taught him.
- His quiet comes from the fog, from old habit, and from a wall inside. The wall is breaking down because of Lakshmi. He sees her as the hope, the thing that could beat the cynicism, and he wants her to win more than he lets on.
- Even when cynical in mind and words, he acts with passion and good intention.++}

## Essential History 

*Description of any character defining events that occurred before they meet Lakshmi*

rough notes:
{~~- Lost family during the Calamity.~>- Family: he mostly does not know about them, and does not talk about it. Maybe they were lost in the fog. An open thread.~~}
- Knows Greg before Calamity. Power team during early Calamity.
- Was a seasoned postal worker, helped Greg find the Guild. Retired. Now mostly spends his days baking bread.
- {~~Deflated baloon today. Age catched up to him and through his cynisism, he lost all hope for future. Maybe its the fog affecting him? ~>hes a bit of a deflated-balloon: the young bones that could stave off the cynisism is gone. He still fights for better things because he knows how bad things can be. A realist, not a quitter.~~}
- Isolated from the villagers, doesnt know anyone from the Guild anymore. Finds it awkward to reconect.
- Will he want to make friends with everyone again? 
{++- Stopped postal work because he got old. Hard work stopped paying off, so he chose to enjoy life. Baking is what relaxes him. "Not really useful anymore. I'm old and all that."
- Pre-Calamity: delivery-truck partners with Greg. They delivered materials to the lab. (See [[Thread - The Calamity]].)
- The disagreement with Greg: telling Lakshmi her past.++}

## Relationships

*Brief description of major relationships (lovers, good friends, enemies etc.). What does the character think of other characters*

[[Greg - Profile]] - besties. Doesn't get along nowadays due to a disagreement in handling Lakshmi's parenting.{++ Still close beneath it, and delivers bread to him and Lakshmi.++}

[[Lakshmi - Profile]] - motherly parents her. Although he doesn't speak much, he takes great care of her. 

[[Briar-Intern - Profile]] - Passingly has seen them. Has no opinion. They are strangers in the beginning. Will grow closer later.

## Character Behavior 

Use this space to describe generally what the NPC does during their day (optional table below)

|           | LOCATION                                                                                  | ACTIVITY                                                                               | SPECIAL NOTES       |
| --------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------- |
| MORNING   | {~~Greg's Chalet~>His home~~}                                                             | {~~Baking~>The later loaf, at home; delivery mornings: up early, bread up to Greg's~~} | {++~3 times a week drop++} |
| AFTERNOON | {~~Fog view besides the Chalet~>Benches near the fog (walks town; some days the beach)~~} | {~~Introspection, looking out~>Sitting with the view~~}                                |                     |
| EVENING   | {~~Greg's Chalet~>His home~~}                                                             | {~~Baking~>Dough prep, small batches~~}                                                |                     |
| SPECIAL   |                                                                                           |                                                                                        |                     |

{++## Daily Schedule


| Time | Activity | Chain | Location | Duration | Variants | Tags |
|---|---|---|---|---|---|---|
| 00:00-08:00 | Sleeps in | `Navigate(Home) > Animate(Sleep) > Wait(300s)` | Home @ GrandpaDansHouseInterior | 300s | | |
| 08:00-11:00 | Bakes the later loaf | `Navigate(Home) > Animate(Baking) > Wait(105s)` | Home @ GrandpaDansHouseInterior | 105s | | spawn |
| 11:00-13:00 | Morning walk and the fog bench | `Navigate(FogBench) > Wait(70s)` | FogBench @ PathToChalet | 70s | | anchor |
| 13:00-15:00 | Wanders town; some days the beach | `Navigate(Town) > Wait(70s)` | Town @ WestDolphinBay | 70s | | |
| 15:00-17:00 | Home kitchen, cooking | `Navigate(Home) > Wait(70s)` | Home @ GrandpaDansHouseInterior | 70s | | |
| 17:00-19:00 | Dusk bench, watching the fog | `Navigate(FogBench) > Wait(70s)` | FogBench @ PathToChalet | 70s | | anchor, player-window |
| 19:00-21:00 | Evening at home | `Navigate(Home) > Wait(70s)` | Home @ GrandpaDansHouseInterior | 70s | | |
| 21:00-24:00 | Sleep | `Navigate(Home) > Animate(Sleep) > Wait(70s)` | Home @ GrandpaDansHouseInterior | 70s | | |
++}

--- 
## Key Items


- A bubbling sourdough starter jar?
- A faded postal badge and old route ledger?
- A worn armchair turned toward the fog view?{--

--}

# Character Quests

CHARACTER SIDE QUEST 1 LINK

---

## Portraits

[[grandpadanportrait.png]]

# Character Dialogue

## Essential Reactions

{++[[IntroToDan_0]] 
	Dan greets Lakshmi his own way, steady and pleased to see her, not quite showing either. 
		Trigger Start - Lakshmi_Interacts_Dan=True, Lakshmi_Met_Dan=False
		On Clear - Lakshmi_Met_Dan=True

[[LakshmiDeliversMailToDan_0]] 
	Lakshmi delivers Dan's mail. He grumbles at it, then softens. 
		Trigger Start - Lakshmi_Has_Dans_Mail=True, Lakshmi_Interacts_Dan=True
		On Clear - Lakshmi_Has_Delivered_Dans_Mail=True, Lakshmi_Has_NPCs_Mail=False++}

## Misc Reactions 

{++[[DanMiscReactions_0]] 
	Dan's default hellos, his dry temper, and the questions he actually asks. 
		Trigger Start - Lakshmi_Met_Dan=True++}
