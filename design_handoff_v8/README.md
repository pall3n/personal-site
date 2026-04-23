# Handoff: patrickallen.xyz — V8 landing page

## Overview

A personal landing page for Patrick Allen's independent design-engineering practice. One page that flips between two "modes" via a central toggle — **Build Week** (a productised, week-long engagement) and **Project Work** (longer embedded contracts) — with the rest of the page (hero, pricing, "right fit if", ship list, leverage, sample scope, work, bio, writing, FAQ) responding to the selection.

V8's differentiator vs. earlier drafts: a personal **"Hello"** intro block (photo + a paragraph of bio) sits _above_ the toggle so the page reads as a personal site, not a SaaS landing page.

---

## About the Design Files

The files in this bundle are **design references created in HTML/React**. They are a faithful prototype of the intended look and behaviour — not code to drop into the repo as-is.

The task is to **recreate this design in the existing Next.js repo**, using its established conventions (folder structure, CSS approach, component patterns, typography loading, etc.). Treat `V8.jsx` and `content.js` as a spec, not a dependency.

The design is a single `"use client"`-shaped React component with one `useState` for the mode. There's no server data required for the first version — all copy lives in `content.js`.

## Fidelity

**High-fidelity.** Colors, spacing, type sizes, line-heights, and letter-spacing are final and should be matched precisely. The one thing that is a placeholder is the avatar (see _Assets_).

---

## Target stack

Next.js (existing repo). Suggested mapping:

- `V8.jsx` → a client component, e.g. `app/page.tsx` + `app/_components/Landing.tsx` (needs `"use client"` for the `useState`).
- `content.js` → `app/_content/site.ts` (typed). Drop the `window.SITE_CONTENT =` wrapper and `export const siteContent = { … }` instead.
- Work images → `public/images/work/image-1.png` … `image-6.png` (already at `/images/work/...` paths in `content.js`).
- Fonts → loaded via `next/font/google` (see _Typography_). Remove the `<link>`-based Google Fonts load used in the prototype.
- Styling: prototype uses inline `style={{…}}` objects. Feel free to port to whatever the repo uses — Tailwind, CSS modules, styled-components. All values are exposed as plain numbers/strings in the JSX so they're easy to translate.

---

## Screens / Views

There's one page. Nine stacked sections, top to bottom:

### 1. Nav

- Full-width, 20px vertical / 36px horizontal padding.
- Left: 28px circle in `#E8621B` + wordmark "Patrick Allen" in **Instrument Serif italic, 22px**.
- Right: status indicator — 7px green dot (`#4A7C48`) + "Taking on work · May–June 2026" in 12px muted text.

### 2. Hello block (THE V8 DIFFERENTIATOR)

- Centred container, `max-width: 1000px`, `60px 36px 20px` padding.
- 2-col grid: `140px 1fr`, `gap: 32px`, `align-items: start`.
- **Avatar**: 140×140 circle. In the prototype it's a placeholder with "PA" in Instrument Serif italic 48px, colored in accent, over a soft-cream background (`#E8DFC7` in light, `#2A1D14` in dark). Replace with a real photo.
- **Text column**:
  - Eyebrow: "HELLO —" · 12px · uppercase · letter-spacing 1.2 · muted.
  - Headline (Instrument Serif 38px, line-height 1.2, letter-spacing -0.6): _"I'm Patrick. I design and build products end-to-end, and I've been doing it for about a decade, mostly for small teams where one person holding the whole picture matters more than an org chart."_ — "Patrick" wrapped in accent color.
  - Subhead (16px, muted, max-width 640px, margin-top 20px): _"Lately I work two ways — a focused Build Week for one specific problem, or a longer Project embedded with your team. Pick whichever fits."_

### 3. Toggle

- Centred. Eyebrow "WHAT ARE YOU HERE FOR?" (12px, uppercase, letter-spacing 1.2, muted).
- Pill-shaped toggle: inline-flex, background `#14100C`, 6px padding, border-radius 200.
  - Thumb: animated `left` from `6` to `50%`, 35% width, accent background, `transition: left .35s cubic-bezier(.4,1.4,.5,1)`, soft glow `0 4px 12px #E8621B66`.
  - Two buttons: "Build Week" and "Project Work". Each is `padding: 14px 40px`, 15px text, `color: #F5ECDB`, `min-width: 180px`. `position: relative; z-index: 1;` so text sits above the thumb.

### 4. Hero

- Centred. Re-keyed on `mode` so it cross-fades on toggle (via React `key={mode}` trick — plain remount, no explicit transition library).
- Headline: Instrument Serif **96px**, weight 400, line-height 0.96, letter-spacing -2.6, max-width 1000, centered.
  - Build Week: "Five focused days. _One real thing_ at the end." (italic phrase in accent)
  - Project Work: "An extra pair of hands that _designs and builds_." (italic phrase in accent)
- Subhead: 18px, muted, max-width 640.

### 5. Four-card grid (the "offer")

1200px max-width container, 3-column grid with 16px gaps. Four cards:

- **The Deal** (col 1, row 1): dark card `#14100C` with cream text. Eyebrow "THE DEAL", then price (Instrument Serif 40px in accent), unit line, one-line description (Instrument Serif 20px). CTA button: full-width accent pill "Book a discovery call →".
- **The Week / The Engagement** (cols 2–3, row 1): cream card.
  - Build Week mode: 5-column "day" grid — boxes colored with increasing alpha of accent (`#E8621B20`→`#E8621B80`), each showing "D1"…"D5" and a dot-count. Below, 5-column caption grid with step title + description.
  - Project Work mode: horizontal bar chart (9 bars of accent at varying opacity) + 3-column caption grid (Embed / Ship / Handoff).
- **Right fit if —** (cols 1–2, row 2): cream card. Numbered list, items joined with 1px hairline dividers.
- **Ship list** (col 3, row 2): solid accent card `#E8621B` with dark text. Eyebrow, big serif headline, bulleted deliverables using `→` prefix.

### 6. Leverage block ("How I move this fast")

- Cream card, 36px padding, inside the 1200px container.
- Header row: 2-col grid (`1fr 2fr`), title on left (eyebrow in accent + Instrument Serif 48px heading), body copy right-aligned to baseline.
- 4-column grid below, divided by vertical hairlines. Each cell: monospace mini-index in accent ("01"…"04"), Instrument Serif 22px title, 13px body copy.

### 7. Sample Build Week scope (conditional — Build Week mode only)

- Cream card.
- Header row identical structure to Leverage.
- 3-card strip: "The problem", "The agreement", "The outcome". Outcome card is solid accent — the other two are the softer cream tone.
- Day-by-day table with 3 columns `88px 1fr 2fr` (Day / Focus / Shipped). Days show abbr + Instrument Serif title + 2-col bullet list with `→` prefixes in accent.

### 8. Recent work

- Heading row: "Recent work" (Instrument Serif 52px) + 13px helper text right.
- 3-column grid of `aspect-ratio: 4/3` tiles. Each tile shows the image; on hover, a bottom-up gradient overlay reveals the title (Instrument Serif 22px), client label (11px, 70% opacity), and a 13px problem description.

### 9. Bio + writing + FAQ

- 2-col grid `1.2fr 1fr`, `gap: 48`.
- Left: "A bit more" block — eyebrow + long-form bio in Instrument Serif 28px + chip row of tech stack (`padding 5px 10px`, cream background, hairline border, 12px).
- Right: "Writing" list — four `<a>` items separated by hairlines; date + length eyebrow, title in Instrument Serif 19px.
- Below: "FAQ" heading + `<details>` accordion rows. `<summary>` is Instrument Serif 22px with a `+` marker in accent.

### 10. Footer

- 24px vertical / 36px horizontal padding, top hairline, 12px muted text.
- Left: "© 2026 Patrick Allen".
- Right: Email / Twitter / GitHub links, 20px gap.

---

## Interactions & Behavior

- **Mode toggle** is the only interactive piece. State is `useState("buildweek" | "contract")`.
- Toggle thumb slides via CSS `transition: left .35s cubic-bezier(.4,1.4,.5,1)`.
- The background + text colors swap when mode is `"contract"` — it flips to a dark theme (warm near-black `#1A120C`). This is the **only** thing that changes the page chrome; nav, toggle, and accent-colored cards stay the same. See the `T` object in `V8.jsx` for the light vs dark palette.
- The hero H1 uses `key={mode}` to remount on toggle — not strictly necessary, but keeps the DOM clean.
- Sample Build Week scope block is conditionally rendered (`mode === "buildweek"`).
- The Deal card text and amounts swap; the Engagement card swaps from 5-day grid to bar-chart.
- Work tiles have on-hover gradient + text reveal — pure JS `onMouseEnter`/`onMouseLeave` toggling `opacity` on a child. Port to a CSS hover for a cleaner version.
- FAQ uses native `<details>`. No JS required.

## State management

- One `useState("buildweek")` at the root of `V8`.
- No routing, no URL state, no server data.
- If you want link-shareable modes, sync with `?mode=` via `useSearchParams` + `useRouter().replace`.

---

## Design Tokens

### Colors

**Accent (both modes)**

- `#E8621B` — primary accent (orange)
- `#14100C` — near-black (Deal card bg, toggle bg)
- `#4A7C48` — status dot

**Light mode (Build Week)**

- `#F4F0E8` — page bg
- `#1E160F` — page text
- `#F5ECDB` — card surface
- `#E8DFC7` — softer card surface (avatar bg, day cells, problem/agreement cards)
- `#E0D6BF` — work tile placeholder bg
- `#FEFBF2` — on-accent text (used on the solid accent card)
- `rgba(30,22,15,.55)` — muted text
- `rgba(30,22,15,.12)` — hairline

**Dark mode (Project Work)**

- `#1A120C` — page bg
- `#F5ECDB` — page text
- `#241812` — card surface
- `#2A1D14` — softer card surface
- `#2A1D14` — work tile placeholder bg
- `rgba(245,236,219,.55)` — muted text
- `rgba(245,236,219,.12)` — hairline

### Typography

- **Instrument Serif** (Google Fonts, supports italic) — all display / editorial type: wordmark, hero, section headings, card titles, bio quote, writing titles, FAQ questions, the "PA" avatar fallback.
- **Inter** (Google Fonts, 400/500/600) — body + UI.
- **JetBrains Mono** (Google Fonts, 400/500) — monospace labels (day codes, leverage index, client tag).

In Next.js:

```ts
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
export const serif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});
export const sans = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
});
export const mono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});
```

Then reference via `style={{ fontFamily: "var(--font-serif)" }}` or set up Tailwind families.

### Spacing

- Page horizontal padding: **36px**.
- Hello block max-width: **1000px**, padding `60px 36px 20px`.
- Content blocks max-width: **1200px**.
- Card gap (4-col grid): **16px**. Tile gap (work): **12px**.
- Card padding: **28px** (small), **32–36px** (large).
- Section vertical rhythm: **40–60px** between blocks.

### Type scale

- Hero: 96px / 0.96 / -2.6
- Section heading: 48–52px / 1.02 / -1.2
- Card big serif: 32–40px
- Sub-heading: 28px (bio), 22px (leverage items), 20–22px (day row titles)
- Body: 15–18px
- Meta / eyebrow: 11–13px, uppercase, letter-spacing 1.2

### Border radius

- Cards: **4px**
- Chips / inner tiles: **2–3px**
- Toggle pill: **200** (fully rounded)
- Status dot, avatar: **50%**

### Shadows

- Toggle thumb: `0 4px 12px #E8621B66`
- Toggle track: inset `0 2px 4px rgba(0,0,0,.3)`

---

## Assets

- `images/work/image-1.png` … `image-6.png` — work tile images. These are the real screenshots Patrick wants to use. In Next.js, put them at `public/images/work/` so they resolve at `/images/work/image-N.png` (that's what `content.js` already references).
- **Avatar**: currently a "PA" placeholder rendered in CSS. Patrick will supply a real headshot — swap the placeholder `<div>` for a `<Image src="/images/avatar.jpg" fill />` (or whatever fits the codebase).
- Fonts: Google Fonts (Instrument Serif, Inter, JetBrains Mono). Use `next/font/google`.
- No icons; the page uses text, `→`, and `+` arrows only.

---

## Files in this bundle

- `V8.jsx` — the component source. Single file, ~275 lines.
- `content.js` — all page copy and data (`window.SITE_CONTENT = {...}`). Rename/restructure as you see fit.
- `preview.html` — a standalone single-file preview of V8. Open in a browser (or serve the folder with `npx serve .`) to see exactly what the design looks like. This is the ground truth for pixel-matching.
- `images/work/` — the six work-tile screenshots.
- `screenshots/`:
  - `v8-light.png` — hero (Build Week / light mode)
  - `v8-dark.png` — hero (Project Work / dark mode)
  - `v8-light-cards.png` — the 4-card grid area
- `README.md` — this file.

---

## Notes on translation

- The prototype uses inline style objects. Most values are plain numbers — `padding: 28` becomes `p-7` in Tailwind, `fontSize: 96` becomes `text-[96px]`, etc.
- The "Deal" dark card stays dark in **both** modes — it's deliberately always `#14100C`, not theme-responsive. Same for the toggle.
- The accent card ("Ship list") and the sample-scope "Outcome" card stay `#E8621B` in both modes.
- Everything else swaps between `T.bg/card/cardSoft/text/subtle/hairline`.
- In `V8.jsx` the theme palette lives in a single `T` object computed from `const dark = mode === "contract";`. Port that structure — it keeps both palettes in one place.
- Page keeps a subtle cross-mode transition via `transition: "background .5s ease, color .5s ease"` on the root. Nice touch; preserve it.
