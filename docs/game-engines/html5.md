# HTML5 / JavaScript — default engine

This is the runtime on the floor.

Arrrcadé OS, the neon terminal, tablet stations, Preview Lab, and kid submissions all run as a page in a kiosk browser. Scratch, MakeCode, GDevelop, Bitsy, and most other kid tools are only allowed if they **export to this**.

MoonScript and MUGEN are not HTML5. They stay on dedicated cabinets. See the other files in this folder.

## Why this is default

- Youth-center tablets (Onn, BSP-Y02 companion screens, Galaxy Tab A9+, and similar) are browsers, not game consoles.
- Low RAM is already a constraint. A static page plus a small canvas game is what we can support.
- Staff can open a URL. Kids can submit a playable link. No compiler on site.
- Preview Lab on [coinop4charity.org](https://coinop4charity.org) already assumes a playable web link.

## What to submit

- A page that runs in a current Chromium-based kiosk browser.
- Keyboard / HID stick controls when the station has a stick (see `docs/restoration/BSP-Y02_Web_Arcade_Controller_Guide.pdf`).
- No account wall, no store, no install, no chat.
- Art, code, and music you made, public domain, or licensed for youth-center use.

Authoring tools that export HTML5 are listed below. Raw canvas / JS is also fine if it passes the same review.

## Kid tools that export here

| Tool | File in this folder | Who it’s for |
|------|---------------------|--------------|
| Scratch (TurboWarp export) | [scratch-turbowarp.md](scratch-turbowarp.md) | Younger kids, school clubs |
| MakeCode Arcade | [makecode-arcade.md](makecode-arcade.md) | Classroom sprites / tiles |
| GDevelop | [gdevelop.md](gdevelop.md) | Older kids, no-code → HTML5 |
| TIC-80 | [tic-80.md](tic-80.md) | Tiny original fantasy-console carts |
| Bitsy | [bitsy.md](bitsy.md) | Small safe story / exploration games |

## What not to submit

- Commercial ROM collections wrapped in a JS emulator (still HTML5 — still a no).
- Heavy Unity WebGL builds that will freeze a low-RAM tablet.
- Games that need a separate desktop app, account, or chat.
- Anything that phones home with kid data.

## Review

Preview Lab first. Then review. Then live on stations.

1. Language and content OK for youth spaces.
2. Legal source of every asset.
3. Start / exit / attract a staff member can explain in one minute.
4. Works with an HID arcade stick where the station has one.

## Related

- Floor policy: [README.md](README.md)
- Terminal product: `index.html` at the repo root (kiosk boot notes live under `docs/restoration/` and `docs/staff-coding/`)
- Credits: [`CREDITS.md`](../../CREDITS.md)