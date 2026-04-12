# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static marketing website for **IAuAI** (iauai.fr), an AI consulting firm targeting French SMEs/ETIs. No build step, no package manager, no framework — pure HTML, CSS, and vanilla JavaScript, deployed as-is.

## Running locally

Open any `.html` file directly in a browser, or serve the root directory with any static HTTP server:

```bash
python -m http.server 8080
# or
npx serve .
```

There are no tests, no linting config, and no CI pipeline.

## File structure and architecture

```
index.html                  # Homepage — self-contained (inline CSS + JS)
quiz.html                   # AI maturity quiz — uses assets/site.css
mentions-legales.html       # Legal notice
politique-confidentialite.html  # Privacy policy
cgv.html                    # General terms and conditions
assets/
  site.css                  # Shared stylesheet (used by quiz.html and legal pages)
  i18n.js                   # Core i18n engine (attribute-based translation)
  homepage-i18n.js          # Homepage translation strings + init logic
  legal-pages-i18n.js       # Legal pages full-content translation (innerHTML swap)
logo_iauai_clair.png        # Light logo (used on dark backgrounds)
logo_iauai_sombre.png       # Dark logo
```

**Important**: `index.html` has its CSS and JS inlined — it does **not** load `assets/site.css`. The other pages load `assets/site.css` from a `<link>` tag.

## i18n system

Three distinct approaches are used across the site:

### 1. Attribute-based (`assets/i18n.js`) — used in `quiz.html`
Elements carry `data-fr`, `data-en`, `data-es`, `data-zh`, `data-ar` attributes. The engine swaps `textContent` (or `innerHTML` if `data-html` is also present) at runtime.

```html
<span data-fr="Accueil" data-en="Home"></span>
```

### 2. JS-object strings (`assets/homepage-i18n.js`) — used in `index.html`
All translations live in a `page` object keyed by locale. The script injects translated strings into DOM elements by selector or property.

### 3. Full-content swap (`assets/legal-pages-i18n.js`) — used in legal pages
A `translate` object maps page keys (`mentions`, `privacy`, `terms`) to locale objects containing `title`, `description`, `back`, `footer`, and `main` (full HTML). The script replaces `document.title`, the meta description, and `.page-content` innerHTML wholesale.

**Locale detection order**: `?lang=` URL parameter → `localStorage.iauai_lang` → `navigator.language` → fallback `fr`

**Supported locales**: `fr`, `en`, `es`, `zh`, `ar` (Arabic is RTL; `body.rtl` class is toggled accordingly)

## Design tokens

Defined as CSS custom properties (duplicated in inline styles on pages that don't load `site.css`):

| Token | Value | Role |
|---|---|---|
| `--navy` | `#1A2E4A` | Primary dark blue |
| `--ocre` | `#C4852A` | Accent / CTA |
| `--green` | `#2D6A4F` | Secondary accent |
| `--chalk` | `#F5F2EC` | Page background |
| `--anthracite` | `#2B2B2B` | Body text |

**Fonts**: Sora (headings), Inter (body), JetBrains Mono (labels/accents) — loaded from Google Fonts.

## Known structural issue

`assets/legal-pages-i18n.js` has a structural bug: the IIFE closes at line ~60 (`)();`), but `normalize`, `getLocale`, `pageKey`, and the `translate` object are defined *after* the closing parenthesis, outside the IIFE. This means those declarations are globals and the function references inside the IIFE's `apply()` closure rely on hoisting. Be careful when editing this file — keep all supporting functions either inside the IIFE or ensure they are declared before the IIFE executes.

## Content placeholders

Legal pages (`mentions-legales.html`, `politique-confidentialite.html`, `cgv.html`) contain `<span class="placeholder">` elements marking company details not yet filled in (legal form, registration number, address, etc.). These are rendered with a distinct style and should be replaced with real data before going live.
