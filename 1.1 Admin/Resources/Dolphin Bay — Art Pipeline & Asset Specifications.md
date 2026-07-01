---
tags:
  - reference
  - dolphin-bay
  - art-pipeline
  - assets
  - production
created: 2026-06-19
---

# Dolphin Bay — Art Pipeline & Asset Specifications

> Reference doc. What the artists need to produce for the December demo — organized by the workstreams: Characters, Locations, Story, UI.

---

## The Pipeline

Writers describe → Artists produce → Trent imports into Unity.

The flow: **Concept / Sketch** → **Aseprite / pixel editor** → **PNG export** → **Unity import** → **In-game** → **Testable**

Writers are writing character profiles and scene outlines now. Art specs flow from those. This document describes what the art side of that pipeline produces.

---

## Characters

The character is the root. The writers define who they are. The artists give them a face and a body.

| What | Produces | Depends on |
|------|----------|------------|
| **Concept Art** | Mood exploration, colour palette, silhouette, vibe sketches. Front + profile view for significant characters. 4 expressions (happy, surprised, sad, angry) for main cast. | Character profile from writing |
| ├── **Portrait Art** | 80x48px portrait for dialogue UI. Head ~35px tall. Black outline, consistent palette. Used for every NPC the player talks to. | Concept art → approved design |
| ├── **Walking Sprite** | 32x16px animated sprite (4 directions: up, down, left, right). Black outline, high-saturation. Named characters get unique colours/shapes. Generic NPCs share base + recolour. | Concept art → approved proportions |
| └── **Custom Animations** | Job-specific animations per NPC (e.g. Camie kneading, Greg fishing, child playing). Per-character, per-need. | Writers define behaviours |

**Tiers of character depth (proposed — to be decided in meeting):**

| Tier | Count (approx) | What they get | Example |
|------|---------------|---------------|---------|
| **Full** | 5-6 | Unique portrait + unique walking sprite + custom animation(s) + their own building interior | Greg, Camie, Gatz, Francois, Grandpa Dan |
| **Supporting** | 5-7 | Unique portrait + unique walking sprite (or strong recolour) + appears in shared locations | Receptionist Robert, Lora, Tulia, Old Sailor Garp |
| **Background** | 5-8 | Shared generic portrait + base walking sprite + no unique animations | Students, generic protesters, visitors |

---

## Locations

The world of Dolphin Bay. This is the biggest production surface.

### Macro — The Whole Town

| What | Spec | Priority |
|------|------|----------|
| **Exterior tilemaps** | 16x16 tiles. Grass, dirt, sand, water, cliffs, paths, docks. Existing set needs extension (rounded tiles, grassy patches, garden plots). | High |
| **Buildings (exterior shells)** | 2:1 perspective, consistent with existing town houses + inn + market stands. Need guild hall exterior, character homes. | High |
| **Background parallax** | Distant mountain / village silhouette for horizon. Scrolls with camera. | Medium |
| **Nature fill** | Trees (3+ tiles tall minimum), bushes, flowers, rocks, fences — enough variety to fill without repetition. | High |

### Micro — Individual Interiors & Zones

| What | Details | Priority |
|------|---------|----------|
| **Guild Hall interior** | Walls, floor, counter, reception desk, seating area, mission board. Central hub. | High |
| **Camie's Bakery** | Oven, counter, display case, bread, sitting area. Character telling. | Medium |
| **Greg's Chalet** | Cozy cabin — fireplace, fishing gear, worn furniture. Reflecting an older, solitary lifestyle. | Medium |
| **Generic homes** | Bed, table, lamp, window — shared tileset per home type. | Medium |
| **Docks / Beach area** | Sand tiles, water edge transitions, pier, boats, fishing spots. | High |
| **Market square** | Fountain (done), stalls, benches, central gathering area. | High |
| **Forest path** | Transitional zone between town zones. Trees, dirt path, wildlife details. | Low |

### Props — Shared & Unique

Existing props (barrels, baskets, lamps, mailboxes, trees) are done. New props needed:

| Prop | Category | Notes |
|------|----------|-------|
| Benches | Public | Multiple variations |
| Fruit trees | Nature | With fruit variations |
| Well | Public | Central water source |
| Swing | Playground | For child NPCs area |
| Seesaw | Playground | For child NPCs area |
| Fishing rods | Activity prop | For dock areas |
| Buoys | Docks/water | Visual markers |
| Flower pots | Decoration | Multiple colour variations |
| Gardening plots | Residential | Veggie patches, empty plots |
| Doors | Interior | For all interiors (missing currently) |
| Bath | Interior | Missing currently |

---

## Story-Specific Art

Unique visuals tied to specific story moments. These unlock as the story outline firms up.

| What | Likely needed for | Notes |
|------|-------------------|-------|
| **Splash images** | 5-8 full-screen illustrations for key story beats | Sepia for memory sequences. Frame treatment for dramatic moments. |
| **Key mail items** | The special pieces of mail that drive the plot | At least 3-4 unique visual items (a jewel, a protest letter, a personal keepsake, a mysterious package) |
| **Protest signs & props** | The protest subplot | Hand-drawn style signs per faction character |
| **Memory sequence assets** | Liam's backstory | Young Liam, father, mother, younger Liana, grandma, old beach lady, cat Poki. Sepia palette. |
| **Doodle assets** | Lakshmi's journal, exam notes, etc. | Hand-drawn style, in-universe. Existing ones can be expanded. |

---

## UI & Screens

| What | Status | Notes |
|------|--------|-------|
| Dialogue box | Needs review | Do we have final frame and placement? |
| Portrait window | Needs review | Does it match the 80x48 portrait spec? |
| Mail interface | Needs design | The central gameplay loop needs a UI |
| Inventory / quest log | Needs design | What the player uses to track story progress |
| Title screen | Needs design | Splash image + menu layout |
| Pause / settings | Needs review | Existing or new? |

---

## Rough Schedule

Mirrors the schedule from the June 8 workstream plan. Art leads in the early phases.

| Month | Phase | Art Focus |
|-------|-------|-----------|
| June (now) | **Blueprint** | Style guide gaps filled. NPC visual tiering decided. Location build order locked. Mood boards per area. |
| July | **Characters** | All named character portraits. Priority walking sprites. Concept art for key NPCs. |
| August | **World** | Location art: tilemaps, interiors, props, background parallax. Scene building begins. |
| September | **Story** | Splash images, story-specific props, memory sequence art. Supports writing output. |
| October | **Assembly** | All assets imported and placed. Visual polish pass. Consistency review. |
| November | **Polish** | Lighting, effects, feel tuning, UI refinements. |
| December | **Ship** | Steam demo live. |

---

## Open Questions for the Meeting

1. **Portrait count** — 15-20 NPCs. Do all get unique portraits? Or share generics below the Full tier?
2. **Walking sprite tiering** — Does every NPC with a portrait also need unique walking sprites, or can some share bases?
3. **Location priority** — Which zone gets fully built first for testing? (Probably market square + guild hall since they're the most used)
4. **Style guide gaps** — What's blocking artists from producing consistently? Colour ramps? Perspective guides? Proportion reference?
5. **Memory sequence** — Full new environment or just splash images? Characters need designing.
6. **Passion assignments** — Who wants to own what? Portrait specialist? Tile specialist? Animation?
