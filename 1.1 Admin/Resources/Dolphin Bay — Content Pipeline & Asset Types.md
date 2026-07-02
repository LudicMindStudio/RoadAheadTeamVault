---
tags:
  - reference
  - dolphin-bay
  - asset-pipeline
  - content
  - production
created: 2026-06-17
---
# Dolphin Bay — Content Pipeline & Asset Types

> Reference doc. What the writers and artists need to produce for the December demo — organized by the workstreams: Characters, Story, Location.

---

## The Pipeline

Different per discipline. But mostly flows the same way.

Obsidian/ Aesprite / external program → Import Tools → Unity → Integration  → In-Game → Testable

---

## Characters

The character profile is the root document. It describes who the NPC is. From it, multiple asset types flow.

| What | Produces | Team |
|------|----------|------|
| **Character Profile** — [[Character Profile Template]] | Backstory, appearance, voice, relationships. The source doc everything else comes from. | Writing |
| ├── Dialogue | Per-state conversations: intro, mail delivery reactions, relationship states, quest states. Uses [[Dialogue Template]] | Writing |
| ├── Behaviour Descriptions | Notes on daily routine, where they go, what they do. Feeds into ActionGraph schedules. | Writing |
| ├── Story Outline | Their personal arc. What do they want? How do they change? What flags trigger what? | Writing |
| └── Art Spec | Description of visual appearance that feeds into art production. | Writing |
| **Concept Art** | Prototype sketches, mood exploration | Art |
| **Portrait Art** | Dialogue portrait, UI use | Art |
| **Sprite Sheet** | Idle, walk, custom animations per NPC | Art |

Not every NPC gets every sub-item. Some get full stories. Some get basic dialogue. Some are background.

---

## Story

The main story blocks into acts and quests. Those break into scenes. Scenes contain the actual assets.

| What | Produces | Team |
|------|----------|------|
| **Main Story Arc** — [[Plot Outline Template]] | Full Dolphin Bay story: protest → fog → resolution. Lakshmi's growth. Key mail items. | Trent + Writing |
| ├── Act Outlines — [[Act Outline Template]] | Act-level structure. Quest assignments. | Trent + Writing |
| ├── Quest Outlines — [[Quest Outline Template]] | Per-quest: objectives, scenes, key items, trigger conditions | Writing |
| ├── Scene Outlines — [[Scene Outline Template]] | Per-scene: location, characters present, mood, what happens | Writing |
| ├── Event Scripts — [[Event Script Template]] | Story beats: what triggers, what flags change, action descriptions, scene-specific dialogue | Writing |
| └── Cutscene Scripts — [[Cut Scene Script Template]] | Camera direction, character placement, dialogue timing | Writing + Trent |
| **Story-Specific Art** | Unique objects required by the story. E.g. a special jewel mail item, a protest sign, a key object. | Art |

Most of the story output is dialogue + scene descriptions. The scene descriptions feed implementation (cutscenes, action graph events). The dialogue becomes DialoguePackage assets in Unity.

---

## Location

Locations are the places where the story happens. Writers describe them. Artists build them. Characters live in them.

| What | Produces | Team |
|------|----------|------|
| **Location Descriptions** — [[Location Outline Template]] | Vibe, landmarks, layout, which NPCs are present, time of day specifics | Writing + Trent |
| ├── Tilemaps & Terrain | The base environment: ground, walls, slopes, water | Art |
| ├── Buildings & Props | Houses, stalls, furniture, objects — both generic and character-specific | Art |
| ├── Interactable Specs — [[Interactable Template]] | What the player can touch and what happens when they do | Writing + Trent |
| └── Character-Specific Locations | E.g. Camie's bakery, Greg's chalet. What does this place say about the character? | Writing → Art |

The intersection of character and location: a character's house or workspace reflects their personality. The writers define that. The artists realize it.

---

## Audio (Dolphin Bay specific)

| What | Team |
|------|------|
| Dolphin Bay theme (town, exploration) | Audio |
| Guild Hall theme | Audio |
| Ocean / coastal ambient | Audio |
| Specific SFX needed for story moments | Audio |
| If any writing calls for unique audio (dolphin call, fog sound, etc.) | Audio |

---

## Rough Schedule

From the June 8 workstream planning session:

| Month | Phase | Focus |
|-------|-------|-------|
| June | Blueprint | Story outline, character list, location list, mood boards, style guides |
| July | Characters | Final character portraits, NPC sprites, profile deepening |
| August | World | Location art, tilemaps, scene building begins |
| September | Story | Dialogue production, scene outlines, event scripts |
| October | Assembly | Content integration, first full playthrough |
| November | Polish | Testing, bug fixes, feel tuning |
| December | Ship | Steam demo live |
