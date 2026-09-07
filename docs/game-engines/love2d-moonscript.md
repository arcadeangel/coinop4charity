# LÖVE + MoonScript / Lua — optional cabinet path

Not the default. Not for tablets. Not required for Arrrcadé OS submissions.

Use this only on a dedicated cabinet or Raspberry / Orange Pi that can run [LÖVE](https://love2d.org/) as the whole session (attract + game + exit).

## Why it exists at all

MoonScript is a small language that compiles to Lua. It was created by **Leaf Corcoran** ([leafo.net](https://leafo.net), [moonscript.org](https://moonscript.org)), who also founded [itch.io](https://itch.io) (launched 3 March 2013).

itch.io is a digital marketplace for indie games. Coin Op 4 Charity is physical cabinets in Nevada youth spaces. They are not the same project. We credit the language and the open indie-distribution idea. We do not treat itch.io as our engine or our store.

MoonScript here is a nod and a tool for original cabinet games — nothing more.

## Allowed

- Original games written in MoonScript or Lua, compiled / run under LÖVE.
- Public-domain or licensed art and music.
- A staff-exit (hold Start or Esc) that always works.

## Not allowed

- Shipping MoonScript as a requirement for kid submissions.
- Running LÖVE inside the tablet kiosk browser.
- Using this path to load commercial ROM packs.

## Tooling (cabinet builders only)

```bash
# language
luarocks install moonscript

# compile
moonc game.moon

# run with LÖVE (compiled output as main.lua)
love .
```

Keep a compiled `main.lua` in the cabinet image so the machine does not depend on `moonc` being installed on site.

## Credit

MoonScript © Leaf Corcoran.  
itch.io founded by Leaf Corcoran.  
We are not affiliated with itch.io. Contact for that platform is listed by them as support@itch.io.

See also [`CREDITS.md`](../../CREDITS.md).
