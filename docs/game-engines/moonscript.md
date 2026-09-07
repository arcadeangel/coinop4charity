# MoonScript

Optional language for **dedicated cabinets only**. Not the Arrrcadé OS default. Not for tablets or kid submissions.

## Credit

**MoonScript** was created by **Leaf Corcoran**.

- Language: [moonscript.org](https://moonscript.org)
- Author: [leafo.net](https://leafo.net)
- Compiles to Lua

Leaf Corcoran also founded **[itch.io](https://itch.io)** (launched 3 March 2013), a digital marketplace for indie games.

Coin Op 4 Charity places physical arcade and coin-op machines in Nevada youth centers. We are **not affiliated** with Leaf Corcoran, MoonScript, or itch.io. Their listed contact for itch.io is support@itch.io.

See [`CREDITS.md`](../../CREDITS.md).

## Where it fits here

| Use | Yes / no |
|-----|----------|
| Browser terminal / tablets / Preview Lab | No — those stay HTML5 |
| Kid game submissions | No — too much toolchain |
| Dedicated Pi or PC cabinet running [LÖVE](https://love2d.org/) | Yes — original games only |
| Loading commercial ROMs | No |

Runtime notes: [`love2d-moonscript.md`](love2d-moonscript.md)  
Floor policy: [`README.md`](README.md)

## Why it is optional

MoonScript is cleaner than raw Lua and fits small arcade games. It needs `moonc` plus a Lua runtime (we use LÖVE on cabinets). Youth-center staff and most submitters will not install that. Keep a compiled `main.lua` on any cabinet that uses it so the site does not depend on the compiler.

```bash
luarocks install moonscript
moonc game.moon
# ship the .lua with LÖVE as main.lua
love .
```

## Allowed content

Original code, art, and music — or assets you have written permission to use in a youth space. Same legal line as every other engine on this project.
