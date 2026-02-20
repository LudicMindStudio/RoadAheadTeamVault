In general, it's good to keep in mind that the tiles in our game are 16x16 pixels. This is not a hard limit, but it should be used to get an idea of scale. For example, the sprites for characters walking on the map are two tiles tall and one wide. So if you were to make a sprite for a door, it should be roughly the same size.



Terminology
---

The graphics in the game fall into a few categories. More might be added later.

---
- Concept Art:
UNDER CONTRUCTION

For now, we can be pretty flexible with this, but I do want to get some specifications depending on the type of art being produced (Environment, characters etc)

---
- Objects:
Stand alone objects that will be placed around the map.
examples: trees, plants, boxes, houses, rocks, statues

As mentioned above, using 16x16 is a good rough estimate, but it is not a hard rule.

Small: 16x16 (rocks, bushes, boxes)
Medium: 16x32 or 32x16 (Doors, characters, Book shelf)
Big: 32x32 (Larger bookshelf, Statues etc)

You can of course make objects much bigger than that, but the scale above should be a rough reference.

---

- Tiles:
Graphics that will be used to build the terrain of a map. They conform to a grid.

Size specifications: 16x16 (This is a hard rule)

Requirements:
UNDER CONSTRUCTION

---
- Portraits:
Character portraits that show up during dialogue.

There aren't any hard rules for portraits, but rather general guidelines. Use a 80x48 pixel rectangle as a general guideline



---
- Walking Sprites:
Sprites of characters while they are walking on the map.

---
- UI (User Interface):
Graphics for menus, dialogue boxes, fonts etc

Graphics specifications will be on a case by case basis. Just keep in mind that the ratio of the screen is 16x9

---
Splash images:

Pre-rendered scenes. Typically used to tell important story parts



---

TEMPORARY STUFF

- In general, when I say something has to be some amount of tiles tall/wide, it refers to a 16x16 square. Basically the same size as the tiles in tile sets.

- Keep in mind that our characters are 2 tiles tall. We don't have to be too picky with the scale of our sprites, but we should try to make that the sizes make some sense. For example, some of the tree sprites are just as tall as the character sprites so it makes them look oddly small. They should be at least 3 tiles tall. It can also be made wider.

- For now, I broke the list into three and assigned them to one person each. Check which one you are assigned to. You can approach them in which ever order, but I did put priorities for them.

- Tile sets now need to have vertical walls with them. We need to be able to make elevated platforms.