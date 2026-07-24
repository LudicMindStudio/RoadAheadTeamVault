---
tags:
  - DolphinBay
  - Sanctuary
Date_Created: 2026-07-07
---

```
> PLEASE TITLE - Quest QuestNumber - QuestName - Outline
```

# Quest Description

## Root Act

Dolphin Bay Village Story (Act 2)

## General Description — "The One That Got Away"

Gyo is working on a new feeding experiment and needs a specific ingredient — something unusual that's hard to get because of the protest disruptions. Maybe a particular fish that only comes from a specific spot. Maybe a fruit or seaweed that grows in an area the protesters frequent.

**This is a favor quest.** Low stakes. Lakshmi tracks down the ingredient, navigates the town's tensions to get it, and Gyo makes something special with it. No plot implications — just relationship building. Gyo trusts Lakshmi more. She gets to see him in his element.

## Quest Logic

Trigger Start - Lakshmi_Met_Gyo=True, (DolphinBay_Helped_With_Research=True OR DolphinBay_Fish_Supply_Resolved=True)
Trigger Clear - DolphinBay_Found_Ingredient_For_Gyo=True

---

# Quest Scenes

## Scene 1 — "Gyo's Request"

Location: Sanctuary kitchen

Gyo mentions — casually, but with that specific tone of someone who's been thinking about this for a while — that he's trying to source something. He describes it with the enthusiasm of a man talking about a rare wine.

**Logic:**
  Trigger Start - DolphinBay_Quest_F_Started=True
  Trigger Clear - Gyo_Asked_For_Ingredient=True

**Dialogue:**
  |DIA|[[Gyo_SpecialIngredient_0]]
    Gyo describes the ingredient. What it is. Why he needs it. Why the protest has made it hard to get. He's not asking directly — but he absolutely is.

---

## Scene 2 — "Tracking It Down"

Location: Dolphin Bay town / waterfront / wherever it makes sense

Lakshmi investigates. The challenge is social — she has to navigate the town's tensions. Maybe the ingredient comes from a fisherman who's sympathetic to Francois. Maybe it grows near the protest site and she has to ask permission. The resolution is talking to people, not combat.

**Logic:**
  Trigger Start - Gyo_Asked_For_Ingredient=True
  Trigger Clear - Gyo_Ingredient_Found=True

---

## Scene 3 — "The Tasting"

Location: Sanctuary living quarters

Lakshmi returns. Gyo is genuinely moved — he didn't think she'd actually do it. He prepares something special with the ingredient. Offers Lakshmi a taste. A quiet moment of connection.

**Logic:**
  Trigger Start - Gyo_Ingredient_Found=True
  Trigger Clear - DolphinBay_Found_Ingredient_For_Gyo=True

**Event/Dialogue:**
  |DIA|[[Gyo_Tasting_0]]
    Gyo makes something. They eat. Quiet conversation. Maybe Gyo talks about why the sanctuary matters to him in a way he hasn't before.

---

## What This Unlocks

- `DolphinBay_Found_Ingredient_For_Gyo=True`
- Gyo trusts Lakshmi more
- May unlock additional dialogue options with Gyo
