# Pay3 landing page

A Next.js (App Router) landing page for the $PAY3 token.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build && npm run start` for a
production build.

## Before you ship this

**`logo.svg` and `font.ttf` were not attached to the request that generated
this project**, so two placeholders stand in for them:

1. **`public/logo.svg`** — a simple placeholder "P3" ticket mark. Replace
   this file with your real `logo.svg` (same filename, same folder) and
   every logo reference on the page updates automatically — nav, favicon,
   footer, and the image MetaMask shows when someone adds the token.
2. **Custom font** — `app/globals.css` already declares an `@font-face`
   for a family called `Pay3 Display` pointing at `public/font.ttf`. Drop
   your real `font.ttf` into `public/` and the whole site switches to it.
   Until then, the page falls back to **Space Grotesk** (headings/body)
   and **IBM Plex Mono** (numbers, addresses, labels), loaded from Google
   Fonts in `app/layout.js`.

## What's on the page

- **Hero** — headline, one-line description, "Add $PAY3 to your wallet"
  button, link to the wallet app.
- **Scrolling ticker strip** — token / ticker / network / decimals /
  contract, on a loop.
- **Proof of issuance receipt** — the signature element: token name,
  ticker, decimals, network, and contract address in a receipt-style
  card, with copy buttons on the ticker and contract, plus a link to
  Polygonscan.
- **How it settles** — three short feature rows (settlement, coverage,
  custody).
- **Wallet section** — links to `app.pay3.space` and lists the 9 EVM
  chains the wallet supports (Ethereum, Polygon, BNB Chain, Arbitrum,
  Optimism, Base, Avalanche, Linea, Fantom — edit this list in
  `app/page.js` → `CHAINS` if your actual chain set differs).
- **Whitepaper** — shown as "not yet issued" per your brief, with a
  disabled button and a direct email link instead. Swap the `disabled`
  button in `app/page.js` for a real `<a href="...">` once the whitepaper
  is live.
- **Footer** — contact email with a copy button, and a short disclaimer
  reminding visitors to verify the contract address before transacting.

## Token details baked into the page

| Field    | Value |
|----------|-------|
| Token    | Pay3 |
| Ticker   | $PAY3 |
| Decimals | 18 |
| Network  | Polygon |
| Contract | `0x9B97B9f4264D60d4c1e45fFFA680313FC37500dD` |

These live as constants at the top of `app/page.js` and inside
`components/AddToWallet.js` — update both files if the contract ever
changes.

## "Add to wallet" button

`components/AddToWallet.js` calls MetaMask (or any injected EVM wallet)
directly:

1. Asks the wallet to switch to Polygon (chain id `0x89`), adding the
   network first if the user doesn't have it yet.
2. Calls `wallet_watchAsset` with the contract, symbol, and decimals
   above, so the token appears in the user's wallet with `logo.svg` as
   its icon.

If no wallet extension is detected, it opens the MetaMask install page
instead.

## Notes

- No UI library or icon package is installed — icons are small inline
  SVG components in `components/icons.js`, kept dependency-free.
- Styling is plain CSS in `app/globals.css` (no Tailwind), using CSS
  variables for the color and type system so the palette is easy to
  retune in one place.
