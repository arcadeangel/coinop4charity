# Youth Center Staff Guide  
## Helping Kids Create & Submit Games on Coin Op 4 Charity / ArrrcadeOS

**Coin Op 4 Charity · Arcade Angels · ArrrcadeOS**  
Practical staff notes for free-play terminal sessions, STEM maker time, and game submissions that may land on club machines.

---

## Purpose

This guide helps **youth center staff and volunteers** support kids who want to:

1. Play the free terminal games on [coinop4charity.org](https://coinop4charity.org)
2. Build a simple game using the **MAKE** tools
3. Submit a playable link for review via **SHARE**

You do **not** need to be a programmer. Your job is to keep the session moving, point kids to the right tool, and use a short checklist before anything is submitted.

---

## Quick Map of the Site

| Area | What it is | Staff use |
|------|------------|-----------|
| **Terminal games** (main page) | Free browser games (Saucer Beam, Circuit Runner, Neon Kaiju, etc.) | Warm-up / play time |
| **ArrrcadeOS** panel | Maker hub on the same page | Creation time |
| **Captain Code** | Friendly help character with tips | “Ask here first when stuck” |
| **MAKE** tab | Build tools: Scratch, MakeCode Arcade, p5.js, Pixel Pad, Shiprekt Controls | Actual building |
| **SHARE** tab | Submit name, email, title, play link, short how-to-play | End of session |
| **`?kiosk=1`** | Lightweight mode (games + short mission only) | Dedicated arcade tablets |

**Kiosk tip:** For play-only stations, open `https://coinop4charity.org/?kiosk=1` so the heavy maker UI stays off and games run smoother.

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
| Never coded, wants blocks | **Scratch** | Drag-and-drop; huge kid community |
| Wants a “real arcade” feel with blocks or light code | **MakeCode Arcade** | Built for game sprites, scores, buttons |
| Curious about typed code, still simple | **p5.js Editor** | Draw + animate with short JavaScript |
| Just learning “what is a control system?” | **Shiprekt Controls** | In-terminal lessons: move, jump, collide, score, win |
| Only needs a small sprite sketch | **Pixel Pad** | Quick pixel art, copy pattern out |

**Staff rule:** One tool per session for first-timers. Switching tools mid-session usually stalls progress.

### Step 4 — Build the smallest possible game
Good first goals (pick one):

- Player moves left/right  
- Something to collect  
- Score goes up  
- Optional: win at a number (e.g. 5)

If it does those things in a browser, it is a **real game** for this program.

### Step 5 — Save a play link
- Scratch / MakeCode / p5: use **Share** or **Publish** in that tool and copy the public link.
- The link must open in a browser **without** requiring staff to log into the kid’s account.

### Step 6 — SHARE on coinop4charity.org
Open **SHARE** and fill:

1. Name  
2. Email (staff or parent/guardian email is fine if the center prefers)  
3. Game title  
4. Play link  
5. How do you play? (one or two sentences)  
6. Check the safety box (friendly for a youth club · original or credited · no personal data collected)

Staff review happens before anything is marked for **LIVE** on machines.

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

### Site games vs “big kid” engines later

- **What kids use here:** browser tools, blocks, short scripts. Games run in Chrome/Safari on a tablet or laptop. Fast to try, free, good for clubs.
- **What this terminal is written in:** mostly **HTML + CSS + JavaScript** in one page so it can run offline-ish in a kiosk browser without installing Steam or a game engine.
- **What they can learn later (not required now):**  
  - **Python** — great for tools, data, robots, simple games with extra libraries  
  - **Godot** — free game engine, friendlier step up  
  - **Unity / Unreal Engine** — “big production” engines used in studios; heavy installs, longer projects  

**Staff line:** “Today we build something that runs in the browser. Later, if you love this, engines like Godot or Unreal are a next mountain—not today’s homework.”

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
I am a beginner using [Scratch / MakeCode Arcade / p5.js].
My goal: player moves left and right and collects coins for score.
What I tried: [one sentence].
What went wrong: [error message or “coin doesn’t disappear”].
Please explain in simple steps and give me the smallest fix only.
```

**Youth-center norms**
- Prefer staff-approved AI tools on center devices  
- Keep prompts about **code and game behavior**, not personal stories  
- Kid should still be able to explain what their game does  

---

## Staff Assist Script (When They’re Stuck)

1. **What tool are you in?** (Scratch / MakeCode / p5 / Shiprekt)  
2. **What should happen?** (one sentence)  
3. **What happens instead?**  
4. **Did you save / remix / share so the link still works?**  
5. Try one change only, then test again  

If still stuck: open Captain Code, or use the AI prompt pattern above with the kid watching.

---

## Submission Checklist (Staff)

Before clicking **SEND FOR REVIEW**:

- [ ] Game opens in a private/incognito window without extra login  
- [ ] Controls work on a keyboard or on-screen buttons as described  
- [ ] No mean, adult, or personal-data collection behavior  
- [ ] Title and “how do you play?” match the actual game  
- [ ] Link is the **play** link, not an edit-only project URL  
- [ ] Kid knows staff may request changes before LIVE  

---

## Suggested Session Lengths

| Block | Time | Focus |
|-------|------|--------|
| Play | 10 min | Terminal games, pick a mechanic |
| Make | 25–40 min | One tool, one small game |
| Share | 10 min | Link + form + checklist |
| Optional | 5 min | Show Shiprekt or Captain tip for next time |

---

## Safety & Club Fit

- Games for this program should be **friendly for a youth club**  
- Prefer original work or clearly credited remixes  
- No collecting names, locations, or photos inside the game  
- Staff may reject or request edits; that is normal quality control before machines  

---

## One-Page Wall Card (Copy / Print)

**CREATE A GAME — COIN OP 4 CHARITY**

1. Play a terminal game — notice what you like  
2. Open **ArrrcadeOS → MAKE**  
3. Choose **Scratch** (blocks) or **MakeCode Arcade**  
4. Make: move + collect + score  
5. Share / publish → copy play link  
6. Open **SHARE** on coinop4charity.org → send for review  

**Stuck?** Ask **Captain Code**.  
**Curious how controls work?** Open **Shiprekt Controls**.  
**Play-only tablet?** Use `coinop4charity.org/?kiosk=1`.

---

## Related Docs

- Tablet / kiosk setup guides in `docs/restoration/` (tablet station + BSP-Y02 controller)  
- Field notes: project `journal.md` on GitHub  
- Site: [coinop4charity.org](https://coinop4charity.org)  
- Source: [github.com/arcadeangel/coinop4charity](https://github.com/arcadeangel/coinop4charity)

---

*Guide version aligned with ArrrcadeOS terminal v3.1.x · For youth center staff & volunteers · Keep language simple, sessions short, and links playable.*
