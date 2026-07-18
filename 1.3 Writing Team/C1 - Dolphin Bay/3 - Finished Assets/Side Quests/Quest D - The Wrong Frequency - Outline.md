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

## General Description — "The Wrong Frequency"

Anita is convinced she's one breakthrough away from communicating with the dolphins. She's been running experiments for months — different frequencies, different synthesized calls — and nothing is working. The remaining dolphins aren't responding the way she expects. She interprets this as "not the right frequency yet."

Gyo quietly worries she's chasing a dead end. But he won't say it — he believes in her too much.

**This is a relationship quest.** The player helps Anita run experiments, observes the dolphins, and ultimately witnesses the research fail. The real resolution isn't technical — it's Anita sitting with the lesson that not everything can be solved through data. 
## Quest Logic

Trigger Start - Lakshmi_Met_Anita=True, Lakshmi_Known_About_Anita_Dolphin_Calls=True
Trigger Clear - DolphinBay_Research_Failed=True

---

# Quest Scenes

## Scene 1 — "Setup: The New Frequency"

Location: [[Dolphin Bay Sanctuary - Location Outline]]

Anita asks Lakshmi to help set up recording equipment at a specific spot on the pier. Simple task. Anita explains the experiment — she's trying a new frequency range, and the positioning needs to be precise.

**Logic:**
  Trigger Start - DolphinBay_Quest_D_Started=True
  Trigger Clear - DolphinBay_Setup_Complete=True

**Event:** Anita walks Lakshmi through the equipment. Dialogue:
  |DIA|[[SetupExperiment_0]]
    Anita explains the setup. Casual, professional, but Lakshmi can see how much this matters to her.

---

## Scene 2 — "Observation: The Session"

Location: Dolphin pens, pier

Lakshmi observes while Anita runs the experiment. Anita sings, plays synthesized calls, watches the dolphins. The remaining dolphins circle. They don't respond how Anita expects — but Lakshmi might notice something Anita misses: the dolphins ARE responding. Just differently. They linger near the surface longer than usual. They turn toward Anita's voice.

**Logic:**
  Trigger Start - DolphinBay_Setup_Complete=True
  Trigger Clear - DolphinBay_Session_Observed=True

**Event:** Observation session. Dialogue:
  |DIA|[[Anita_Session_0]]
    Anita runs the experiment. Lakshmi watches. Options to notice/comment on dolphin behavior.

**Interactable:** A data sheet Anita fills out during the session.
  [[AnitasDataSheet - Interactable]]

---

## Scene 3 — "The Failure"

Location: Sanctuary pier, evening

The experiment didn't produce the results Anita hoped for. She's on the pier, metronome ticking, staring at the water. Gyo is nearby — close enough for support, far enough to give her space.

The real conversation happens here. Lakshmi can:
- Comfort Anita. Let her process.
- Point out what Lakshmi noticed (that the dolphins DID respond, just differently)
- If Gyo's fog intuition dialogue was triggered earlier, Lakshmi can gently suggest the dolphins might be responding to something beyond frequencies

Anita's arc moment: she doesn't solve it. She sits with not solving it. Gyo is there. The research didn't work — and that has to be okay.

**Logic:**
  Trigger Start - DolphinBay_Session_Observed=True
  Trigger Clear - DolphinBay_Research_Failed=True, DolphinBay_Anita_Accepted_Failure=True

**Event:** Evening on the pier. Dialogue:
  |DIA|[[AnitaNonApology_0]]
    (See Anita's dialogue chains — this is the non-apology conversation, now triggered here.)

---

## What This Unlocks

- `DolphinBay_Helped_With_Research=True`
- `DolphinBay_Research_Failed=True`
- `DolphinBay_Anita_Accepted_Failure=True`

Anita is now ready for the reconciliation conversation in Quest C.
