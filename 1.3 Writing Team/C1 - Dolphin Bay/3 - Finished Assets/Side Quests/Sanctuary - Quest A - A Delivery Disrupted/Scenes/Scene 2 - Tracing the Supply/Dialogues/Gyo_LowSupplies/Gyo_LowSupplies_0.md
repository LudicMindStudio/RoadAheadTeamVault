# Characters: Lakshmi, Gyo
## Bundle : Gyo_LowSupplies_0

*[Lakshmi finds Gyo in the kitchen. His knife work is precise as always, but the portions are noticeably smaller than before. The cutting board holds half the usual amount of fish.]*

**Conditions**
{Requires=HelpGyoFishSupply_1=True}

*[He looks up. Manages a tired smile.]*

Gyo{wry}: Ah. The guild's newest investigator. Come to check on our fish situation?

*[He gestures at the sparse cutting board.]*

Gyo{wry}: You'll notice we're on a stricter budget these days. The dolphins are getting their share, but I've had to get... {text_speed=0.6} [creative]{color=gray} {text_speed=1}with the math.

**Sets**
{Lakshmi_Sees_Low_Supplies=True}
{HelpGyoFishSupply_2=True}

**Options**
- [[Gyo_LowSupplies_1]]: How bad is it?
- [[Gyo_LowSupplies_2]]: I heard about the delivery cuts. I'm looking into it.
- [[Gyo_LowSupplies_3]]: Are the dolphins okay?

**Notes**
- [creative]{color=gray}: the pause before it sells the joke in the dark
- text_speed dip on "creative", restore before "with the math"