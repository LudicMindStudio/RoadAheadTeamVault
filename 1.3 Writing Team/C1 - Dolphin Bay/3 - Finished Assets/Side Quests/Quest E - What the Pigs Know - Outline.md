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

## General Description — "What the Pigs Know"

Gyo has a secondary research thread — studying how animals react to the fog differently than humans. He's training pigs to forage in foggy conditions and dogs to track scents through low-visibility terrain. The working theory: animals are more resilient to the fog's effects, and understanding why could help everyone.

**This is a world-building scene, not a full quest.** Lakshmi visits the secondary pens, observes a training session, talks to Gyo about his theories. Mostly dialogue and environmental storytelling. No dramatic conclusion — just a conversation that makes the world feel deeper.

## Quest Logic

Trigger Start - Lakshmi_Met_Gyo=True, Lakshmi_In_Sanctuary=True
Trigger Clear - DolphinBay_Learned_About_Animal_Research=True

---

# Quest Scenes

## Scene 1 — "The Secondary Pens"

Location: Secondary animal pens, sanctuary grounds

Gyo is at the pens, working with a dog or a pig. He waves Lakshmi over — clearly happy for the company.

**Logic:**
  Trigger Start - DolphinBay_Quest_E_Started=True
  Trigger Clear - DolphinBay_Learned_About_Animal_Research=True

**Event:** Observation + dialogue:
  |DIA|[[AnimalResearch_0]]
    Gyo explains his animal fog-resilience research. Casual, warm, peppered with anecdotes about the pigs being "surprisingly smart" and the dog having "opinions." 

**What Lakshmi learns:**
- Animals seem less affected by the fog than humans
- Gyo is training them for practical tasks (foraging, search and rescue)
- This is the kind of intuitive, observational research he does best
- There's a quiet hope here: if animals can navigate the fog, maybe understanding how will help people

---

## What This Unlocks

- `DolphinBay_Learned_About_Animal_Research=True`
- Deeper understanding of the fog's mechanics
- Gyo trusts Lakshmi a bit more
