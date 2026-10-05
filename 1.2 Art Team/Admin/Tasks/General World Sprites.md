---
type: art-task
status: backlog
priority: p2
phase: locations
assignee: 
created: 2026-09-04
---

## Why

Dolphin Bay needs smaller objects to fill its spaces. Benches, wells, boats, and garden items make the town feel more lived

## Context

Includes the rule tile height variants. The custom rule tile system extends Unity's RuleTile with TerrainRuleExtension — a 3x3 neighbor grid (NW, N, NE, W, Center, E, SW, S, SE). Each cell checks terrain type, height relation, and edge transition type. Height logic: a tile at height H matches `Same` neighbors at H, `Higher` at H+1, `Lower` at H-1. This lets one sprite sheet handle ground-to-slope-to-wall transitions automatically.

**Terrain tile sheets and matching vault PNGs:**
- `T_outdoor_tiles.png` (Grass.asset) — vault: `Exterior/OutdoorTiles.png`
- `T_exterior_sprites_tiles.png` — vault: `Exterior/Exterior sprites_tiles.png`
- `T_general_path_cobble_tile.png` — vault: `Exterior/General-path-cobble-tile.png`
- `T_sea_wall_dolphin_bay.png` — vault: `Exterior/Sea Wall-Dolphin Bay.png`
- `T_general_fence_tile.png` — vault: `Exterior/General-fence-tile.png`
- `T_dolfin_bay_docks_planks_gr.png` — vault: `Exterior/DolfinBay-Docks-planks-gr.png`
- `T_water_tile.png` — water tile set
- `T_tile_interior_walls_floor_counter.png` — vault: `Interior/Interior_Walls-Floor-Counter-Windows.png`
- `T_img_5633.png` — interior tile set
- `T_railings.png` — railing tiles
- `T_blacktile.png` — utility tile

## What to Make

- [ ] Well — stone or wood
- [ ] Ladder — 
- [ ] Flowers —  multiple colours (3+ variants)
- [ ] Medium bush — 32x32, fill vegetation
- [ ] Garden sprites — watering can, shovel
- [ ] Broken down rubble — other debris variants
- [ ] Outdoor bench — wood
- [ ] Outdoor table — with chairs
- [ ] Hedges — repeating/tileable, trimmed and wild variants
- [ ] Stepping stones — 16x16 path variants
- [ ] Dingy boat — 32x32, at dock
- [ ] Stream / waterfall 
- [ ] Pathway tileset — cobble, dirt, brick variants

## References

[[Art specifications.md]]