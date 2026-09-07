# Game engines — floor policy

How software gets onto Coin Op 4 Charity stations.

This folder is **not** restoration. Screwdrivers stay in [`docs/restoration/`](../restoration/README.md). Compilers and browsers live here.

The live terminal at [coinop4charity.org](https://coinop4charity.org) is a browser kiosk. That is the default path for every youth-center tablet and most Pi terminals.

A separate `terminal.md` (if present) is **ops** for that kiosk — boot flags, scores, attract. It is not a substitute for this folder.

---

## What can run on the floor

| Engine | Where | Kid submit? | Status |
|--------|--------|-------------|--------|
| **HTML5 / JS** | Tablets, Pi kiosks, Preview Lab | Yes | **Default runtime** |
| **Scratch / TurboWarp** | Same, via HTML export | Yes — younger kids | Kid tool → HTML5 |
| **MakeCode Arcade** | Same, via HTML export | Yes | Kid tool → HTML5 |
| **GDevelop** | Same if export is light | Yes, with review | Kid tool → HTML5 |
| **TIC-80** | Terminal or cabinet | Yes — original carts | Open fantasy console |
| **Bitsy** | Terminal / Preview Lab | Yes | Kid tool → HTML5 |
| **LÖVE + MoonScript or Lua** | Dedicated cabinet only | No | Optional builder path |
| **MUGEN / Ikemen GO** | Dedicated cabinet only | No | Optional, locked down |
| Retro emulators + commercial ROM packs | Nowhere | No | **No** |

If a company will not license the cause, we do not need their catalog. No gray-market ROM packs. No “just this once.”

---

## Files in this folder

| File | Purpose |
|------|---------|
| [html5.md](html5.md) | Default runtime and submission format |
| [scratch-turbowarp.md](scratch-turbowarp.md) | Scratch → packaged HTML |
| [makecode-arcade.md](makecode-arcade.md) | Classroom sprite games |
| [gdevelop.md](gdevelop.md) | No-code HTML5 export |
| [tic-80.md](tic-80.md) | Open fantasy console, original carts |
| [bitsy.md](bitsy.md) | Tiny story / exploration games |
| [moonscript.md](moonscript.md) | MoonScript language + Leaf Corcoran credit |
| [love2d-moonscript.md](love2d-moonscript.md) | LÖVE runtime for cabinets |
| [mugen-ikemen.md](mugen-ikemen.md) | Fighting-engine cabinet rules |

---

## Review before anything goes live

1. Language and content appropriate for youth spaces.
2. Legal source of every asset (code, art, music, characters).
3. Start / exit / attract behavior a staff member can explain in one minute.
4. Works with HID arcade sticks where the station has one (see BSP-Y02 guide under restoration).
5. Preview Lab first. Then review. Then live.

Questions: open an issue on this repo or use the form on the terminal.