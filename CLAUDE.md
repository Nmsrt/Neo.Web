# Neo.Web — CLAUDE.md

Personal retro/vaporwave static site. No framework, no build system, no npm.

## Stack

- **Vanilla HTML / CSS / JS only** — no React, no bundler, no TypeScript
- Deployed on Neocities at `https://neodev.neocities.org`
- Owner: Neo Monserrat — `neo.monserrat@gmail.com`

## File Structure

```
Neo.Web/
├── index.html              # Root page (home)
├── pages/
│   ├── projects.html
│   ├── experience.html
│   ├── skills.html
│   ├── contact.html
│   ├── gaming.html
│   ├── desksetup.html
│   ├── instruments.html
│   └── travel.html
├── css/
│   ├── base.css            # Variables, fonts, resets, dark mode
│   ├── layout.css          # .wrap, .columns, .main-col, .side-col, header, footer
│   ├── components.css      # Sidebar widgets, project cards, ads, etc.
│   ├── responsive.css      # Mobile breakpoints
│   └── pages.css           # Styles for the 4 new content pages
├── js/
│   ├── theme.js            # Must be first script — reads/writes data-theme attr
│   ├── rain.js             # Canvas shooting stars / rain effect
│   ├── counter.js          # Visitor counter
│   ├── menu.js             # Settings bar checkboxes (dark mode, rain toggle)
│   ├── weather.js          # Live Manila weather widget
│   ├── avatar.js           # Avatar hover effect (index only)
│   ├── gaming.js           # Renders GAMING_GENRES + GAMING_IGNS
│   ├── desksetup.js        # Renders DESK_ITEMS grouped by tag
│   ├── instruments.js      # Renders instrumentsData grouped by tag
│   └── travel.js           # Renders travelData grouped by region
├── data/
│   ├── gaming-data.js      # window globals: GAMING_GENRES, GAMING_IGNS
│   ├── desksetup-data.js   # window global: DESK_ITEMS
│   ├── instruments-data.js # window global: instrumentsData
│   └── travel-data.js      # window global: travelData (IIFE)
├── assets/
│   ├── flags/              # Local flag PNGs for travel page
│   ├── projects/           # Project preview images
│   ├── button.svg          # 88×31 site button
│   └── favicon.svg
└── fonts/
    ├── Pixel_NES.woff
    └── pixelfonts/         # NEC_APC3 pixel fonts
```

## Layout Pattern

Every page uses the same two-column grid:

```
.wrap (max-width: 980px)
  header.banner          — glitch h1 "NEO"
  div.columns
    main.main-col        — flex: 1, page content
    aside.side-col       — 190px fixed, sidebar widgets
  footer
div.settings-bar         — fixed at bottom, dark mode + rain toggles
```

Sidebar widget order (every page):
1. `.nav-box` — site nav
2. `.online-box` — status dot
3. `.weather-box` — Manila weather
4. `.counter-box` — visitor counter
5. `.mybutton-box` — 88×31 embed code
6. `.construction-box` — WIP bar + last updated date
7. `.badge-box` — "best viewed at 1024x768"

## Theming

- **Light mode** (default): parchment/aged map — `--accent: #9e1b32` (crimson)
- **Dark mode**: deep space starfield + aurora — `--accent: #7df9ff` (cyan)
- Toggle via `data-theme="dark"` on `<html>` — set by `js/theme.js` before paint
- Dark mode overrides use `[data-theme="dark"]` selectors in `base.css`

Key CSS variables (light):
```
--bg: #f5f0e8
--bg-panel: #efe9dc
--bg-panel-alt: #e8e0cf
--text: #0d0d0d
--accent: #9e1b32
--border: #d9d1bf
```

## Fonts

- **Body + headings**: `NEC_APC3` (pixel font, `font-smooth: never`)
- **Site title glitch**: `Orbitron` (Google Fonts, loaded per-page)
- `image-rendering: pixelated` on body

## Script Load Order (critical)

In every page `<head>`:
```html
<script src="../js/theme.js"></script>  <!-- MUST be first -->
```

At bottom of `<body>` — data files before their render script:
```html
<script src="../data/[page]-data.js"></script>
<script src="../js/[page].js"></script>
<script src="../js/rain.js"></script>
<script src="../js/counter.js"></script>
<script src="../js/menu.js"></script>
<script src="../js/weather.js"></script>
```

## Nav Links

Pages inside `/pages/` link to each other relatively:
```html
<a href="../index.html">Home</a>
<a href="projects.html">Projects</a>
...
<a href="gaming.html">Gaming</a>
<a href="desksetup.html">Desk Setup</a>
<a href="instruments.html">Instruments</a>
<a href="travel.html">Travel</a>
<a href="https://github.com/Nmsrt">GitHub</a>
```

`index.html` (root) uses `pages/` prefix: `<a href="pages/gaming.html">Gaming</a>`

## Data Globals

All data files use `window.*` globals (no modules):

| File | Global | Shape |
|---|---|---|
| `gaming-data.js` | `GAMING_GENRES`, `GAMING_IGNS` | Array of genre objects with `games[]`; array of IGN objects |
| `desksetup-data.js` | `window.DESK_ITEMS` | Array — each item has `id/tag/title/meta/image/specs` |
| `instruments-data.js` | `window.instrumentsData` | Array — each has `tag/title/image/specs/detailSpecs/description` |
| `travel-data.js` | `window.travelData` | IIFE — each dest has `id/name/region/year/flag/images[]` |

Travel images are Cloudinary CDN. Flag images are local at `assets/flags/` (e.g. `japan.png`, `france.png`). Travel render script builds path as `"../assets/flags/" + dest.flag`.

## JS Pattern

All render scripts are IIFEs — no ES modules:
```js
(function () {
  var root = document.getElementById("some-root");
  var data = window.someGlobal || [];
  if (!root || !data.length) return;
  // build DOM with document.createElement
})();
```

## Page Template (new pages)

Copy the full sidebar from any existing page in `/pages/`. Unique parts per page:

| Page | `<title>` | `section-title` | Root element | Data file | Render script |
|---|---|---|---|---|---|
| gaming.html | Gaming — NEO.DEV | ▲ Gaming | `#genres-root` + `#igns-body` | gaming-data.js | gaming.js |
| desksetup.html | Desk Setup — NEO.DEV | ▲ Desk Setup | `#desk-root` | desksetup-data.js | desksetup.js |
| instruments.html | Instruments — NEO.DEV | ▲ Instruments | `#instruments-root` | instruments-data.js | instruments.js |
| travel.html | Travel — NEO.DEV | ▲ Travel | `#travel-root` | travel-data.js | travel.js |

gaming.html structure: `<section id="igns">` (IGN table) above `<section id="gaming">` (genre/game list).

## Related Projects

- `C:\Users\neomo\Codes\Personal-Website` — glassmorphism dark SPA, different stack (vanilla JS + partial injection via `data-include`). Accent: `#ff8a5b` coral / `#7c5cff` purple. Do NOT confuse with Neo.Web.
- `C:\Users\neomo\Codes\Professional-Portfolio` — React + Three.js + GSAP + Vite, deployed at `https://neo-professional-portfolio.vercel.app/`. Cinematic "Voyager Log" theme.

## Key Conventions

- No comments unless the WHY is non-obvious
- No abstractions beyond what the task requires
- When updating nav on any page, update ALL pages (index + all 8 in /pages/)
- `last updated:` date in `.construction-box` — keep current when making changes
- `index.html` construction box still says `2026-06-13` — update when touching that file
