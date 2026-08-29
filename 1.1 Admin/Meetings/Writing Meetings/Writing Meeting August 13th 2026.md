---
tags:
  - meeting
  - writers
  - dolphin-bay
  - locations
created: 2026-08-13
meeting date: 2026-08-13
---

# Agenda

- Where we are — August = World/Locations
- Discussion points from the [[TRA Meeting Aug 10th 2026]]
- The structure: how we build the full story of Dolphin Bay
- Who writes what
- Deliverables for August

---

## Check-in

How has everyone been? What stood out from the last meeting?

---

## Where We Are

- August = World month. Locations are next
- Character profiles are done and in Finished Assets
- Characters → Locations → Story. Locations drive the Unity scenes
- [[Dolphin Bay Sanctuary - Location Outline]] is the format pilot
- Drafted: the root [[Dolphin Bay - Outline]]. The town's background doc. We fill it in today

---

## Discussion Points

Deferred from the [[TRA Meeting Aug 10th 2026]]. The writers own these.

### The Map

- The relationship chart ([[3. DB NPC Relationships]]) is the social geometry. We turn it into the physical map
- Where do the waterfront houses sit? Garp needs to be on the water
- Who lives at the outskirts? Warren watches for Alfred there
- Does the guild sit central?

### Households & Homes

- Grandpa Dan: own house or the chalet?
- Who lives above their shop? The Bakery: Camie up top, Quinn maybe too. The Clam: Felix boards, Briar maybe?
- Hustle House: in the inn or separate?
- Briar's lodgings

### Scenes vs POIs

- The nesting: Dolphin Bay (village) → Location (scene) → Zone (indoor/outdoor) → POI → Interactable
- A location is a named place with one outline. Indoor and outdoor are zones inside it, joined by a connection (door, path), not split into separate docs
- A POI is a story-flavored spot inside a zone: why it exists, who goes there, what happens. Realized through its interactables
- An interactable is the atomic storyteller. It names its Root Location and Root POI, anchoring up the tree
- Example POIs, town and east:
  - [[The Dolphin Statue - POI]] — East Dolphin Bay
  - [[The Playground - POI]] — East Dolphin Bay
  - [[The Protester Podium - POI]] — near the playground
  - [[The Fish Market - POI]] — East Dolphin Bay
  - [[The Bridges - POI]] — Center Dolphin Bay
  - [[The Sea Wall - POI]] — Center Dolphin Bay
  - [[The Gazebo Garden - POI]] — West Dolphin Bay
  - [[The Fishing Hole - POI]] — East Dolphin Bay
  - [[The Survey Tree - POI]] — Sanctuary Exterior
- The Abandoned Amphitheatre: interior scene or POI?
- What's on a character's map that isn't on our list?

### The Location Outline Format

- The tree, with an example child:
  [[Dolphin Bay - Outline]] → [[East Dolphin Bay - Location Outline]] → [[The Fish Market - POI]] → interactables (the stalls, the fountain, the crates)
- A location outline holds: purpose, vibe, zones (indoor/outdoor), floor layout, connections, POIs, interactables, events — [[Location Outline Template]]
- POIs sit inside a location zone: why it exists, who goes there, what happens, its interactables — [[POI Template]]
- Interactables are the atomic storytellers: Root Location + Root POI — [[Interactable Template]]
- Every home must support its schedules. Hustle House needs the guest table

### History & Lore

- The lore threads (Calamity, Fog's Nature, Postal Guild's Origin) are scaffolds, not content
- Scope: a loose town history first, then per-location history to absorb the threads later

### Economy

- Guild-central model assumed, unbuilt
- Quick check today or its own thread?

---

## The Structure

### The Root: [[Dolphin Bay - Outline]]

- The draft town's background doc
- What it holds: what Dolphin Bay is, its history (the Calamity, the fog, the old world), its identity as a coastal fishing town
- The trunk. Everything expands off it

### The Location Documents

All scaffolded and waiting. Fill what serves the story — not everything needs content.

- The village root:
  - [[Dolphin Bay - Outline]] — the town's background doc
- Outdoor locations (the engine exterior scenes):
  - [[East Dolphin Bay - Location Outline]] (EastDolphinBay)
  - [[West Dolphin Bay - Location Outline]] (WestDolphinBay)
  - [[Center Dolphin Bay - Location Outline]] (CenterDolphinBay)
  - [[East Outer Dolphin Bay - Location Outline]] (EastOuterDolphinBay)
  - [[West Outer Dolphin Bay - Location Outline]] (WestOuterDolphinBay)
  - [[Path to the Chalet - Location Outline]] (PathToChalet)
  - [[Path to the Sanctuary - Location Outline]] (PathToSanctuary)
  - [[Greg's Chalet Exterior - Location Outline]] (GregChaletExterior)
  - [[Sanctuary Exterior - Location Outline]] (SanctuaryExterior)
- Indoor locations (each hangs off an outdoor parent):
  - [[Sanctuary Interior - Location Outline]] — parent Sanctuary Exterior
  - [[Greg's Chalet - Location Outline]] — parent Greg's Chalet Exterior
  - [[Guild Hall - Location Outline]] — parent Center Dolphin Bay
  - [[Warren's House - Location Outline]] — parent Center Dolphin Bay
  - [[Hustle House - Location Outline]] — parent West Dolphin Bay
  - [[Garp's House - Location Outline]] — parent West Dolphin Bay
  - [[Robert & Lora House - Location Outline]] — parent West Dolphin Bay
  - [[Doran & Shirley House - Location Outline]] — parent West Dolphin Bay
  - [[Gatz's House - Location Outline]] — parent West Dolphin Bay
  - [[Lisa's House - Location Outline]] — parent West Dolphin Bay
  - [[Leaf's Dojo-Casa - Location Outline]] — parent West Dolphin Bay
  - [[The Bakery - Location Outline]] — parent East Dolphin Bay
  - [[The Old Library - Location Outline]] — parent East Dolphin Bay
  - [[The Clam - Location Outline]] — parent East Dolphin Bay
  - [[The Abandoned Amphitheatre - Location Outline]] — parent East Dolphin Bay, scene or POI? OPEN
- POIs, by parent:
  - East Dolphin Bay: [[The Fish Market - POI]], [[The Dolphin Statue - POI]], [[The Playground - POI]], [[The Protester Podium - POI]], [[The Fishing Hole - POI]]
  - West Dolphin Bay: [[The Beach - POI]], [[The Coastal Promenade - POI]], [[The Gazebo Garden - POI]], [[The Greenhouse - POI]]
  - Center Dolphin Bay: [[The Bridges - POI]], [[The Wharf and Docks - POI]], [[The Sea Wall - POI]]
  - Sanctuary Exterior: [[The Pens - POI]], [[The Old Dock - POI]], [[The Survey Tree - POI]]
  - Sanctuary Interior: [[Anita's Lab - POI]], [[Gyo's Kitchen - POI]]
  - Garp's House: [[Garp's Boat Crab-Queen - POI]]
  - East Outer Dolphin Bay: [[The Fin Kayaking Spot - POI]]
- Each scene gets a location outline: purpose, vibe, layout, connections, POIs, interactables, events
- Scenes host the POIs

### The Homes

- A clear section: every home gets its own outline
- The homes list:
  - [[Hustle House - Location Outline]] — Francois + Juliette + Tullia
  - [[Garp's House - Location Outline]] — Garp + Cat + Sammy
  - [[Robert & Lora House - Location Outline]] — Robert + Lora + Elio
  - [[Doran & Shirley House - Location Outline]] — Doran + Shirley
  - [[Greg's Chalet - Location Outline]] — Greg + Lakshmi
  - [[Leaf's Dojo-Casa - Location Outline]] — Leaf
  - [[Warren's House - Location Outline]] — Warren
  - [[Gatz's House - Location Outline]] — Gatz + Proudhon
  - [[Lisa's House - Location Outline]] — Oliver + Lisa
  - [[Grandpa Dan's House - Location Outline]] - Grandpa Dan + (eventually, Briar the intern) — own house or the chalet (own house, added on 2026-08-29) 
  - [[The Bakery - Location Outline]] — Camie above, Quinn maybe
  - [[Dolphin Bay Sanctuary - Location Outline]] — Anita + Gyo
  - [[The Clam - Location Outline]] — Juliette's inn, Felix boards
  - Briar sleeps in a storage room in Guild Hall 
- Each home supports its occupants' schedules

---

## Who Writes What

- Location follows character owner. Anchors are proposals, confirm in the meeting
- Trent: Hustle House (Francois), the Sanctuary (Anita/Gyo — exists)
- Aaron: Garp's, Warren's, Robert & Lora, Doran & Shirley, Gatz's, Leaf's Dojo-Casa
- Corina: the Chalet, Grandpa Dan's once decided
- Arkana: Lisa's House, The Bakery
- The Clam: proposed Aaron (Juliette) + Nina (Quinn) + Trent (Felix)
- POIs can be added from what the lore needs or character-based ideas

---

## Deliverables for August

- [[Dolphin Bay - Outline]] made and filled today
- Location and POI files scaffolded — the tree is the task list
- Home outlines assigned and started
- POIs mapped to their scenes 
- Lore scope decided

---

## Next Meeting

- TBD

---

**Thanks Everyone!**

---

# Recording

https://youtu.be/FY2RH52_UsQ

# Live Notes

- Small crew — two writers present, two absent (one on holiday, back mid-August)
- POI model walked through again: Location (top-level scene) → interior locations → POIs → interactables. POIs derive from character schedules and routines
- Goal is NOT to fill every scaffold file — they show the POIs we already have from characters. Fill selectively, densify the world
- Not all locations need POIs; interiors mostly don't, exteriors benefit most
- Francois gets his own house — distinct from the Clam (Juliette runs the inn)
- Camie lives at the bakery. Quinn's lodging held — bakery or the inn (with Felix + Briar)
- Grandpa Dan → the chalet favored — held for the writer who owns him and Briar
- East/west shop split loosened — locations follow character quirks, not a strict east/west model
- Dolphin Bay history: fishing roots + a soul-searching community ("fishermen plus hippies"). The Calamity didn't change the town much — it kept serving as a place people come to find themselves. Fishing industry collapsed after
- Sanctuary: Anita + Gyo always there, separate from town, researching dolphin intelligence. Fin was raised there as a young dolphin
- The Dolphin Bay outline gets populated with the town's ideas — the source of truth
- Assignments: outdoor outlines populate from the build; the bakery and Lisa are taken; the rest of the list in progress; the Clam may go to the returning writer
- Heights and cliffs: Dolphin Bay sits on plateaued beach cliffs — height for platforming, tree house POI idea
