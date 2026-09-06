# Engines

Runtimes that can appear on Coin Op 4 Charity stations.

The default is the **web terminal** (Arrrcadé OS) at [coinop4charity.org](https://coinop4charity.org). Extra engines are optional, volunteer-facing, and must follow the same legal-sources rule as the rest of the fleet.

## What belongs here

| Runtime | Role | Staff need this? |
|---|---|---|
| [Arrrcadé OS / web terminal](terminal.md) | Default games, hi-scores, Make → submit → LIVE | Yes — see also `docs/staff-coding/` |
| [Submit runtime](submit-runtime.md) | How a kid-made game must boot, exit, and use the stick | Reviewers only |
| [Ikemen GO](ikemen-go.md) | Optional 2D fighter runtime (MUGEN-compatible) | No |
| [M.U.G.E.N / Elecbyte](mugen.md) | Original engine + file format — **credit only** | No |

## Rules

1. **Terminal first.** Cabinets and tablets boot the browser terminal unless a placement is explicitly built as a fighter cabinet.
2. **Legal assets only.** Owned originals the site already has, public-domain work, homebrew, or titles that passed Arrrcadé OS review. No gray-market ROM packs. No ripped commercial sprites.
3. **Staff guides stay in `docs/staff-coding/` and `docs/restoration/`.** This folder is not an on-site how-to.
4. **Credit the people who made the tools.** See each page. M.U.G.E.N credit lives in [`mugen.md`](mugen.md).

## New cabinets liscensing protocols

MAME / RetroArch catalogs, FightCade, or any “full game” pack built from commercial sprites. If a future cabinet needs one of those, write a new page and a license review first. We recommend to feature and build your own STEM program games and use public domain to enhance productivity and time constraints.
