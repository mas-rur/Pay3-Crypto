# Pay3 Website

A modern, responsive Next.js website for the Pay3 ($PAY3) token on Polygon.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** for styling
- **lucide-react** for icons
- No heavy chart/carousel/UI libraries \u2014 the donut chart, slider, and modal
  are hand-built, dependency-light components so the project stays fast and
  easy to customize.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata, header/footer shell
  page.tsx           Home page (assembles all sections)
  terms/page.tsx      Terms of Use
  privacy/page.tsx    Privacy Policy
  globals.css         Tailwind + base styles
  icon.png            Favicon (auto-detected by Next.js)

components/
  header.tsx, footer.tsx, hero.tsx, hero-graphic.tsx
  whitepaper-context.tsx / whitepaper-modal.tsx   Docs popup (Context + modal)
  legal-page.tsx        Shared layout for Terms/Privacy
  sections/             Token details, Tokenomics, Team, Investors, Contact
  ui/                   Small reusable pieces (Avatar, CopyButton, DonutChart)

lib/
  data.ts     All editable site content lives here (token info, tokenomics
              split, team, investors, socials, nav, whitepaper text)
  utils.ts    Small helpers (cn, address truncation, number formatting)

public/images/
  logo.png       Your logo, background removed, used across the site
  logo-192.png    Smaller version used for the favicon source
```

## Editing content

Almost everything on the site is driven by **`lib/data.ts`**. Update values
there rather than hunting through components:

- **Token details** \u2014 `token` object (name, symbol, contract address,
  network, total supply).
- **Tokenomics** \u2014 `tokenomics` array. Percentages should add up to 100;
  the donut chart and legend are generated from this list automatically.
- **Team** \u2014 `team` array. Add a `photo` field (e.g. `/images/team/name.jpg`,
  placed in `public/images/team/`) to replace the initials placeholder with a
  real photo.
- **Investors** \u2014 `investors` array. Currently two placeholder slots. Add
  a `logo` image and swap the placeholder markup in
  `components/sections/investors.tsx` once you have real investor logos.
- **Social / contact links** \u2014 `socials` object (GitHub, Instagram, EVM
  wallet link, email).
- **Whitepaper popup** \u2014 `whitepaperPlaceholder` object. This is placeholder
  copy shown in the "Documentation" popup. Replace it with real whitepaper
  content when it's ready \u2014 the modal already supports long, scrollable
  content.

## Legal pages

`app/terms/page.tsx` and `app/privacy/page.tsx` contain a complete,
well-structured starting draft for a Terms of Use and Privacy Policy suited
to a token website. **These are templates, not legal advice** \u2014 have them
reviewed by a qualified lawyer for your jurisdiction before relying on them
publicly.

## Notes

- The contract address and PolygonScan link are pulled from `lib/data.ts` \u2014
  double-check the address before deploying live.
- The hero illustration, donut chart, investor slider, and whitepaper modal
  are all built from scratch with plain React + SVG + Tailwind, so there are
  no extra runtime dependencies to keep updated.
- Replace `public/images/logo.png` with an updated logo any time \u2014 it's
  used for the header, footer, favicon source, and Open Graph image.
