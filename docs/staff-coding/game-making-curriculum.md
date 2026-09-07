# Youth Center Staff Guide  
## Game-Making Curriculum (Short Sessions + AI Fast Lanes)

**Coin Op 4 Charity · ArrrcadeOS**  
Practical staff notes for free-play terminal sessions, STEM maker time, and game submissions that may land on club machines.

Use this **with** [`on-site-guide.md`](on-site-guide.md). That page is how to run the room (tools, SHARE form, checklist). This page is **what to teach across four short visits** so a county of kids can finish something — not so one student survives a coding boot camp.

---

## Purpose

This curriculum helps **youth center staff and volunteers** run maker time that is:

1. **Short** — 45–75 minutes, not a month parked on one bug  
2. **Results-focused** — a friend can play it before the kid leaves  
3. **Modern** — visual tools + supervised AI, the same pattern working people use  
4. **Open to artists and storytellers** — pixels, maps, and dialogue count as making  

You do **not** need to be a programmer. Your job is to pick today’s one mechanic, cut the project when the clock says so, and point stuck kids at Captain Code / an approved AI helper instead of watching them grind.

What may actually go **LIVE** on club machines is listed in [`docs/game-engines/README.md`](../game-engines/README.md). Floor policy lives there. Session flow lives in [`on-site-guide.md`](on-site-guide.md).

---

## Staff Stance

You are not training junior engineers. You are handing kids **the tools people actually use now**: a visual editor or a small web file, an AI copilot for stalls, art/sound helpers, and a place to show the work (the terminal, a club machine, a phone).

Logic still matters. They should be able to say *why the ball bounced*. They should not spend three weeks reinventing sine while an artist kid walks out.

| Staff does | Kid does | AI / Captain Code does |
|------------|----------|------------------------|
| Names the **one** mechanic for today | Changes numbers and look until it feels like theirs | Drafts the next small fix, explains an error |
| Stops a stall at 8–15 minutes | Decides art, story, rules | Never owns the idea |
| Hits “ship” around minute 40 | Shows a friend | Gets cut if it writes the whole game |

**Stuck rule:** 8 minutes of honest try → ask Captain Code or the staff-approved model → change **one** thing. Still broken at 15 minutes → staff simplifies the goal. Nobody “earns” a feature by suffering.

**Staff line:** “Today we ship something that runs in the browser. Later, if you love this, Godot is a next mountain — not today’s homework.”

---

## Who This Is For (Three Lanes, Same Room)

Do not sort kids into “real coder” vs “just art.” Same four sessions. Different costume.

| Lane | They light up when… | First tool | “Done” looks like |
|------|---------------------|------------|-------------------|
| **Maker / logic** | Things bounce, score, collide | Scratch or MakeCode Arcade | Move + collect + score |
| **Artist** | Sprites, color, cabinets, stickers | Pixel Pad → drop art into Scratch / MakeCode | Their drawing is the player |
| **Storyteller** | Rooms, dialogue, “what happens if” | Bitsy (or PuzzleScript if they like rules) | A short map with a beginning and an end |

One tool per kid per session. Switching mid-session stalls the room. Default first-visit buttons are still **Scratch** or **MakeCode Arcade**. Bitsy / PuzzleScript if they finish early or hate shooters. See the tool table in [`on-site-guide.md`](on-site-guide.md).

---

## Clock for Every Session

Same clock every visit. Do not invent a new structure.

| Block | Time | Focus |
|-------|------|--------|
| Play the target | 3–10 min | Terminal game or last week’s build. “What did you like?” |
| Name one steal | 2 min | One sentence. One mechanic. |
| Make | 25–40 min | Numbers first (speed, color, size), then one new behavior |
| Ship + name | 8–10 min | Title + their name. Playable link. SHARE if ready. |
| Say the idea | 2 min | Kid explains what happens in the game in plain words |

**AI is legal the whole Make block**, on center-approved tools only. Tape this prompt to the desk:

```text
I am a beginner using [Scratch / MakeCode Arcade / p5.js / Bitsy / PuzzleScript].
My goal: [one sentence].
What I tried: [one sentence].
What went wrong: [error or “the coin does not disappear”].
Do not rewrite the whole game.
Explain in simple steps and give the smallest fix only.
```

---

## Four-Visit Arc (Not a Month)

Visit 1 can stand alone. Visits 2–4 are for kids who come back. A kid who only attends once still leaves with a moving thing and their name on it.

### Visit 1 — One thing moves  
**Target feel:** catch a falling square, eat dots, paddle under a ball.  
**Not yet:** Pong as a full sport. Not Asteroids.

Teach only:

- a loop that keeps going  
- `x` changes by speed  
- `if` it hits something, do one thing  
- draw a rectangle or their Pixel Pad sprite  

| What they see | What they’re learning |
|---------------|-----------------------|
| The square falls | A number changes every frame |
| It resets at the bottom | An `if` |
| Their sprite is the player | Art is part of the program |

**Ship:** player moves or object falls, and they changed at least one number (speed or color).  
**Artist lane:** Pixel Pad first, then drop the sprite in.  
**Story lane:** one room in Bitsy, avatar walks.

### Visit 2 — Pong-class (first real game)  
**Target feel:** two paddles or paddle + wall, a ball that bounces, a score.

Pong is the correct first *game* because each piece is one idea:

| What they see | What they’re learning |
|---------------|-----------------------|
| Paddle follows input | Events / “when key pressed” |
| Ball bounces | Flip a number (`vy = -vy`) |
| Score goes up | A labeled box (variable) |
| Best of 5 / play again | A second screen or a win number |

Keep it ugly. Then **one** upgrade they choose: faster ball, shrinking paddle, or their own art on the paddle.

**Ship:** someone else in the room can play a round without you explaining.  
**AI use:** “why does the ball fall through the paddle?” — not “write Pong.”

### Visit 3 — Breakout-class (a list of things)  
**Target feel:** bricks, coins, or story rooms you can clear.

Now the program is bigger than one object.

| What they see | What they’re learning |
|---------------|-----------------------|
| Many bricks / coins | A list (or many clones / instances) |
| One disappears | Delete / hide on collision |
| Level ends | “When the list is empty” |

**Artist lane:** they draw the brick / coin sheet.  
**Story lane:** three Bitsy rooms and an ending line. That is the same idea as a list of rooms.

**Ship:** collect 5 / clear a row / reach the last room.  
**Do not** start gravity platformers or a full fighter this visit.

### Visit 4 — Fly / shoot / their fantasy  
**Target feel:** a tiny Asteroids, a one-screen runner, a short “talk and walk,” or a dress-up of Circuit Runner / Saucer Beam energy.

Only now:

- face a direction and move that way  
- wrap or stay on screen  
- spawn something that goes away after a while  
- optional: one enemy or one obstacle pattern  

Do **ship + one rock + one shot** before three rocks that split.

Then pick **their** costume on the same skeleton:

- top-down shooter with their art  
- endless runner (timers + patterns)  
- tiny story map with one rule  
- kaiju stomp (big sprite, “did these rectangles touch?”)

**Ship:** SHARE form if the link opens with no extra login. Preview Lab first. Then review. Then LIVE. Same rule as [`docs/game-engines/README.md`](../game-engines/README.md).

---

## What I Would Not Start With

- Full Asteroids on visit 1 (rotation + wrap + bullets + many rocks)  
- Platformers (gravity + jump feel is a trap in 45 minutes)  
- Full fighters (hitboxes, two players, cancel windows)  
- 3D, Unity, Unreal, “let’s build an engine”  
- MoonScript, LÖVE, MUGEN / Ikemen as kid-submit tools  
- A month on one syntax error so they “learn discipline”

Those are optional later for the one kid who asks. They are not the handshake.

---

## AI Fast Lanes (Supervised)

Call these **fast lanes**, not cheat codes. Same idea as the Fast Lanes section in [`on-site-guide.md`](on-site-guide.md).

**Good uses**

- Explain a red error in simple words  
- “Why doesn’t my sprite move when I press left?”  
- Smallest Scratch / MakeCode change for collect + score  
- “Comment each line of this snippet”  
- Turn a kid’s spoken story into a *checklist* of rooms (they still build the rooms)

**Bad uses**

- “Make a full game and I’ll submit it”  
- Mean, adult, or personal content  
- Pasting other kids’ names, photos, or addresses into a chat  
- Generating a commercial ROM wrapper and calling it original

**Youth-center norms**

- Staff-approved tools on center devices only  
- Prompts stay on **code and game behavior**, not personal life  
- Kid must still explain what the game does before SHARE  
- If the model writes 40 lines, staff keeps **five** and deletes the rest

Captain Code on the terminal is the first ask. Off-site models are optional and supervised.

---

## Staff Assist Script (Curriculum Version)

1. **What tool?** Scratch / MakeCode / Bitsy / Pixel Pad / Shiprekt  
2. **What should happen?** One sentence.  
3. **What happens instead?**  
4. **Have we been stuck more than 8 minutes?** If yes → Captain Code or the desk prompt.  
5. **Can we cut the goal and still ship in 10 minutes?** If yes, cut it.  
6. **Can they tell a friend how to play?** If yes, SHARE checklist in [`on-site-guide.md`](on-site-guide.md).

---

## What “Done” Means (Results)

A session worked if **most** kids in the room can point at the screen and say:

- what the player does  
- what they changed  
- how someone else plays it  

A session failed if one kid has a perfect engine and twelve kids have a blank editor.

High scores, certificates, and the rest are bonuses. The floor is a playable link and a sentence of how-to-play.

---

## One-Page Wall Card (Copy / Print)

**MAKE A GAME IN ONE VISIT — COIN OP 4 CHARITY**

1. Play a terminal game — notice what you like  
2. Steal **one** mechanic (move, bounce, collect, or a short story room)  
3. Open **ArrrcadeOS → MAKE** — Scratch, MakeCode, or Bitsy  
4. Change a number before you add a feature  
5. Stuck 8 minutes? Ask **Captain Code** or use the desk prompt  
6. Put your name on it → copy a play link → **SHARE**

**Artists:** Pixel Pad is a real start.  
**Story kids:** one map with an ending is a real game.  
**Play-only tablet?** `coinop4charity.org/?kiosk=1`

---

## Related Docs

- How to run the room / SHARE checklist: [`docs/staff-coding/on-site-guide.md`](on-site-guide.md)  
- Engine / floor policy: [`docs/game-engines/README.md`](../game-engines/README.md)  
  HTML5 is what we run. Scratch, MakeCode, GDevelop, TIC-80, Bitsy, PuzzleScript export to that. MoonScript and MUGEN are not kid-submit tools.  
- Default runtime: [`docs/game-engines/html5.md`](../game-engines/html5.md)  
- Tablet / kiosk setup guides in `docs/restoration/` (tablet station + BSP-Y02 controller)  
- Field notes: project `journal.md` on GitHub  
- Site: [coinop4charity.org](https://coinop4charity.org)  
- Source: [github.com/arcadeangel/coinop4charity](https://github.com/arcadeangel/coinop4charity)

---

*Guide version aligned with ArrrcadeOS terminal v3.1.x · For youth center staff & volunteers · Keep language simple, sessions short, AI supervised, and links playable.*
