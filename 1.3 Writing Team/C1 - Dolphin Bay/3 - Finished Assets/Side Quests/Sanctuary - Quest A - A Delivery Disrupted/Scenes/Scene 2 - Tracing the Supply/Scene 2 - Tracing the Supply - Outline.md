---
tags:
Date_Created: 2026-07-18
---

```
> PLEASE TITLE - Scene SceneNumber - SceneName - Outline
```

# Scene Description

## Root Quest

[[Sanctuary - Quest A - A Delivery Disrupted - Outline]]

## Root Location

[[Dolphin Bay Sanctuary - Location Outline]]

## Character List

[[Lakshmi - Profile]]
[[Gyo - Profile]]

## Setting Specifics

Sanctuary kitchen. The cutting board holds noticeably smaller fish portions than normal. Gyo's knife work is still precise but the math has changed — he's stretching supplies. The kitchen feels leaner than it should. Less fish in the cold storage. Supplemental scraps set aside for the pigs and geese.

## General Description

Lakshmi visits the sanctuary kitchen and finds Gyo working with reduced supplies. He confirms the situation Warren described — deliveries have been light for weeks. Gyo is stretching rations, getting creative with portions, but he can only hold out another week or so before hard decisions need to be made.

Gyo doesn't name Francois directly. He's careful — non-confrontational by nature. But the situation is real and getting worse.

Lakshmi can ask how bad it really is, tell Gyo she's looking into it, or ask about the dolphins' welfare.

## Quest Logic

Trigger Start - HelpGyoFishSupply_1=True
Trigger Clear - HelpGyoFishSupply_2=True

## Actor Behaviours

Gyo is in the sanctuary kitchen during his normal morning fish prep block (08:00-09:00). His usual knife work and portioning is affected by the reduced supply — portions are smaller, prep takes less time. His normal feeding schedule continues but with rationed amounts. His 09:00 secondary animal rounds (pigs, dogs) are also affected — scraps instead of proper feed.

He is available for this dialogue during the prep window. The state variant for `DolphinBay_Protest_Active=True` is active here — Gyo is in rationing mode.

Anita is not present in the kitchen during this scene. She is at her lab desk per her normal morning schedule.

---

# Scene Events

Lakshmi enters the sanctuary kitchen. Gyo is cutting fish, but the portions are visibly smaller. He looks up, manages a tired smile, and acknowledges that Lakshmi has probably heard about the fish situation.

The conversation covers the severity of the shortage, what the dolphins are going through, and what Gyo's options are. Lakshmi can offer to help or suggest alternatives.

After the conversation, Lakshmi has enough information to act — either by confronting Francois, arranging alternative supply through Garp, or convincing the fishermen directly.

---

# Scene Dialogues

Gyo confirms the low supplies and explains the severity.
	|DIA|[[Gyo_LowSupplies_0]]
		Trigger Start - HelpGyoFishSupply_1=True
		On Clear - HelpGyoFishSupply_2=True

---

# Scene Interactables


