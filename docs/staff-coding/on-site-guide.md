# Youth Center Staff Guide  
## Helping Kids Create & Submit Games on Coin Op 4 Charity / ArrrcadeOS

**Coin Op 4 Charity · ArrrcadeOS**  
Practical staff notes for free-play terminal sessions, STEM maker time, and game submissions that may land on club machines.

---

## Purpose

This guide helps **youth center staff and volunteers** support kids who want to:

1. Play the free terminal games on [coinop4charity.org](https://coinop4charity.org)
2. Build a simple game using the **MAKE** tools
3. Submit a playable link for review via **SHARE**

You do **not** need to be a programmer. Your job is to keep the session moving, point kids to the right tool, and use a short checklist before anything is submitted.

What may actually go **LIVE** on club machines is listed in [`docs/game-engines/README.md`](../game-engines/README.md). This page is how to run the session. That page is the floor policy.

---

## Quick Map of the Site

| Area | What it is | Staff use |
|------|------------|-----------|
| **Terminal games** (main page) | Free browser games (Saucer Beam, Circuit Runner, Neon Kaiju, Nyan Cat IV, etc.) | Warm-up / play time |
| **ArrrcadeOS** panel | Maker hub on the same page | Creation time |
| **Captain Code** | Friendly help character with tips | “Ask here first when stuck” |
| **MAKE** tab | Build tools: Scratch, MakeCode Arcade, p5.js, Pixel Pad, Shiprekt Controls, plus Bitsy / PuzzleScript / GDevelop / TIC-80 when you have time | Actual building |
| **SHARE** tab | Submit name, email, title, play link, short how-to-play | End of session |
| **`?kiosk=1`** | Lightweight mode (games + short mission only) | Dedicated arcade tablets and BSP sticks |
| **`?g=1`** | Same kiosk mode, tuned for AT Games Legends Gamer Pro decks | Two-stick cabinets |

**Kiosk tip:** For play-only stations, open `https://coinop4charity.org/?kiosk=1` so the heavy maker UI stays off and games run smoother.

---

## Cabinet stick check (do this before kids arrive)

Two different sticks talk to the same website. Use the matching URL.

| What is plugged in | Open this |
|--------------------|-----------|
| BSP-Y02 / cheap USB arcade stick / tablet | `https://coinop4charity.org/?kiosk=1` |
| AT Games Legends Gamer Pro control deck | `https://coinop4charity.org/?g=1` |

**Buttons on the floor**

- **A** = primary (jump, shoot, punch, rematch)
- **B** = secondary (dash, kick) — never exits the game
- **SELECT** = back to the terminal
- **Hold START ~ half a second** = exit
- Fight Palace: left stick = Player 1, right stick = Player 2. One stick still fights the CPU.

**Five-step field check** (parking lot or back room, before the director is watching)

1. If the Gamer Pro is on **USB**, power the Legends **puck off**. Bluetooth + USB at the same time = dead stick.
2. Open the matching URL above in Chrome.
3. Press **A once**. The browser will not listen to the stick until a button is pressed.
4. Move the stick. The ship / runner / kaiju should move. Badge may say `ARCADE STICK ONLINE` or `GAMER PRO DECK ONLINE`.
5. Click through a couple of LIVE games for ten seconds each: Saucer Beam, Circuit Runner, Happy Fishing, Neon Kaiju, Fight Palace, Nyan Cat IV. After a match in Fight Palace, **A** starts another match. **SELECT** leaves. Then open Neon Kaiju — it should *not* bounce back to Fight Palace.

If up/down is backwards on that one box: press **SELECT + UP**, or add `&y=1` to the URL.

If a button number is wrong on a Gamer Pro, staff with repo access can edit `gamepads.json` next to `index.html`. Do not open the giant terminal file for a button swap.

**Do not** install JoyToKey as the production path. The page reads the stick directly.

---

## Start to Finish (Beginner Path)

Use this order with most first-timers. Keep sessions short: **play → one idea → one tool → save link → share**.

### Step 1 — Play for 5–10 minutes
- Let them try a live terminal game.
- Ask: “What did you like? Moving? Collecting? Jumping?”
- That answer becomes their **first game idea**.

### Step 2 — Open ArrrcadeOS → MAKE
- Scroll to **ARRRCADÉOS** (or jump with the on-page link).
- Choose help level if shown:
  - **LOTS OF HELP** — youngest / first time
  - **SOME HELP** — returning kids
  - **I GOT THIS** — older / confident

### Step 3 — Pick the right tool (keep it simple)

| Kid situation | Start here | Why |
|---------------|------------|-----|
| Never coded, wants blocks | **Scratch** (export with TurboWarp when you package) | Drag-and-drop; huge kid community |
| Wants a “real arcade” feel with blocks or light code | **MakeCode Arcade** | Built for game sprites, scores, buttons |
| Curious about typed code, still simple | **p5.js Editor** | Draw + animate with short JavaScript |
| Just learning “what is a control system?” | **Shiprekt Controls** | In-terminal lessons: move, jump, collide, score, win |
| Only needs a small sprite sketch | **Pixel Pad** | Quick pixel art, copy pattern out |
| Wants a tiny story map | **Bitsy** | Short exploration game, exports HTML |
| Wants a block-push puzzle | **PuzzleScript** | One readable script, exports HTML |
| Older kid, no-code, “real game” look | **GDevelop** | HTML5 export — test on a weak tablet first |
| Tiny retro cart in one file | **TIC-80** | Original carts only |

**Staff rule:** One tool per session for first-timers. Switching tools mid-session usually stalls progress.

**Default two buttons for a first visit:** Scratch or MakeCode Arcade. Bitsy / PuzzleScript if they finish early or hate shooters. GDevelop / TIC-80 for returning older kids. Do not start anyone on MoonScript, LÖVE, or MUGEN.

### Step 4 — Build the smallest possible game
Good first goals (pick one):

- Player moves left/right  
- Something to collect  
- Score goes up  
- Optional: win at a number (e.g. 5)

If it does those things in a browser, it is a **real game** for this program.

### Step 5 — Save a play link
- Scratch / MakeCode / p5 / Bitsy / PuzzleScript / GDevelop / TIC-80: use **Share**, **Publish**, or **Export HTML** in that tool and copy a public play link or file.
- The link must open in a browser **without** requiring staff to log into the kid’s account.
- Prefer a packaged HTML page over “open the editor social site on the cabinet.”

### Step 6 — SHARE on coinop4charity.org
Open **SHARE** and fill:

1. Name  
2. Email (staff or parent/guardian email is fine if the center prefers)  
3. Game title  
4. Play link  
5. How do you play? (one or two sentences)  
6. Check the safety box (friendly for a youth club · original or credited · no personal data collected)

Staff review happens before anything is marked for **LIVE** on machines. Preview Lab first. Then review. Then live. Same rule as [`docs/game-engines/README.md`](../game-engines/README.md).

---

## What “Code” Means Here (Staff Cheat-Sheet)

Kids will hear words that sound scary. Translate them:

| Word they hear | Plain meaning | On this site |
|----------------|---------------|--------------|
| **Blocks** | Puzzle pieces of instructions you snap together | Scratch, MakeCode |
| **Sprite** | The picture that moves (player, coin, enemy) | All tools |
| **Variable** | A labeled box that holds a number (like score) | Score systems |
| **Loop** | “Keep doing this” (draw the screen again and again) | Every game |
| **Collision** | “Did these two things touch?” | Collecting coins |
| **Event** | “When this happens, do that” (key pressed → move) | Controls |
| **JavaScript** | A common language for websites and browser games | p5.js, parts of MakeCode, this terminal |
| **HTML / CSS** | Page structure and look | The coinop4charity site chrome |
| **HTML5 game** | A game that is just a web page | What we actually run on tablets |

### Site games vs “big kid” engines later

- **What kids use here:** browser tools, blocks, short scripts. Games run in Chrome/Safari on a tablet or laptop. Fast to try, free, good for clubs.
- **What this terminal is written in:** mostly **HTML + CSS + JavaScript** in one page so it can run in a kiosk browser without installing Steam or a game engine. That is the default runtime. See [`docs/game-engines/html5.md`](../game-engines/html5.md).
- **Kid tools that export to that page:** Scratch / TurboWarp, MakeCode Arcade, GDevelop, TIC-80, Bitsy, PuzzleScript.
- **Not for this session:** MoonScript, LÖVE, MUGEN / Ikemen. Those are optional cabinet-only paths. They are not kid-submit tools. See [`docs/game-engines/README.md`](../game-engines/README.md).
- **What they can learn later (not required now):**  
  - **Python** — great for tools, data, robots, simple games with extra libraries  
  - **Godot** — free game engine, friendlier step up  
  - **Unity / Unreal Engine** — “big production” engines used in studios; heavy installs, longer projects  

**Staff line:** “Today we build something that runs in the browser. Later, if you love this, engines like Godot are a next mountain—not today’s homework.”

---

## Fast Lanes (Not Cheat Codes)

Call these **fast lanes** or **streamlined resources**—modern shortcuts that still teach the idea.

### 1. Shiprekt Controls (on MAKE)
- Tap steps in order: move → jump → collide → score → win  
- Read the **plain English**, then the **code sample**  
- Press **TRY IT** so they see the idea working  
- **COPY CODE** into notes if they move to Scratch/MakeCode  

Use this when a kid asks “how does moving even work?”

### 2. Captain Code
- Built-in tips for move, draw, score, stuck, share  
- Content filter keeps chat youth-center safe  
- Encourage kids to ask Captain before asking staff for every small snag  

### 3. Official starter tutorials (bookmark these)

| Tool | Fast lane |
|------|-----------|
| Scratch | [scratch.mit.edu/ideas](https://scratch.mit.edu/ideas) — “Getting Started” and animation/game cards |
| MakeCode Arcade | Built-in tutorials on the MakeCode Arcade home screen |
| p5.js | [p5js.org/examples](https://p5js.org/examples/) — start with “Hello” and “Animation” |
| Bitsy | [bitsy.org](https://bitsy.org) — editor + examples |
| PuzzleScript | [puzzlescript.net](https://www.puzzlescript.net) — “You are looking at PuzzleScript” demo |
| GDevelop | Built-in examples inside the editor |
| TIC-80 | [tic80.com](https://tic80.com) — start a blank cart, not a random download pack |

### 4. AI helpers (optional, supervised)

AI can **speed up fixes** and explain errors. It should not replace the kid thinking.

**Good uses**
- “Explain this red error in simple words”  
- “Why doesn’t my sprite move when I press left?”  
- “Give me Scratch blocks idea for collect coins and add score”  
- “Simplify this MakeCode snippet and comment each line”  

**Bad uses**
- “Make a full game for me and I’ll just submit it”  
- Anything that generates mean, violent, or personal content  
- Pasting other kids’ personal info into a chat  

**Staff prompt pattern kids can copy:**

```text
I am a beginner using [Scratch / MakeCode Arcade / p5.js / Bitsy / PuzzleScript].
My goal: player moves left and right and collects coins for score.
What I tried: [one sentence].
What went wrong: [error message or “coin doesn’t disappear”].
Please explain in simple steps and give me the smallest fix only.