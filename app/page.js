import CopyButton from '../components/CopyButton';
import AddToWallet from '../components/AddToWallet';
import { MailIcon, ArrowUpRightIcon, FileTextIcon } from '../components/icons';

const CONTRACT = '0x9B97B9f4264D60d4c1e45fFFA680313FC37500dD';
const TICKER = '$PAY3';
const EMAIL = 'masrurahmmedanondo@gmail.com';
const WALLET_URL = 'app.pay3.space';
const WALLET_HREF = 'https://app.pay3.space';
const EXPLORER_HREF = `https://polygonscan.com/address/${CONTRACT}`;

function truncate(addr) {
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

const CHAINS = [
  { name: 'Ethereum', id: '1', color: '#8FA3FF' },
  { name: 'Polygon', id: '137', color: '#B79CFF' },
  { name: 'BNB Chain', id: '56', color: '#F0C64C' },
  { name: 'Arbitrum', id: '42161', color: '#5CC2F2' },
  { name: 'Optimism', id: '10', color: '#FF6A5C' },
  { name: 'Base', id: '8453', color: '#5C8CFF' },
  { name: 'Avalanche', id: '43114', color: '#F27171' },
  { name: 'Linea', id: '59144', color: '#63E0D6' },
  { name: 'Fantom', id: '250', color: '#5FCBEE' },
];

const FEATURES = [
  {
    tag: 'Settlement',
    title: 'Wallet to wallet, final in seconds',
    body: 'Payments move directly between addresses on Polygon and confirm on-chain — no processor in the middle, no multi-day hold.',
  },
  {
    tag: 'Coverage',
    title: 'One address, every use case',
    body: 'The same $PAY3 address works for a tip, an invoice, or a full checkout flow — built for people and for merchants alike.',
  },
  {
    tag: 'Custody',
    title: 'Your keys, your balance',
    body: 'Pay3 never takes custody of funds. Value sits in your wallet until the moment you choose to send it.',
  },
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-brand">
            <img src="/logo.svg" alt="" width={26} height={26} />
            <span>PAY3</span>
          </a>
          <nav className="nav-links">
            <a className="nav-link" href="#proof">
              Contract
            </a>
            <a className="nav-link" href="#wallet">
              Wallet
            </a>
            <a className="nav-link" href="#whitepaper">
              Whitepaper
            </a>
            <a className="nav-link is-cta" href={WALLET_HREF} target="_blank" rel="noopener noreferrer">
              Open app
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <span className="hero-watermark" aria-hidden="true">
            $PAY3
          </span>
          <div className="shell hero-inner">
            <span className="eyebrow">
              <span className="live-dot" aria-hidden="true" />
              Live on Polygon · ERC-20 · 18 decimals
            </span>

            <h1>Every payment leaves a receipt.</h1>

            <p className="hero-sub">
              Pay3 is a decentralized payment protocol built to simplify crypto
              transactions — secure, efficient settlement for people and
              merchants, anywhere in the world.
            </p>

            <div className="hero-actions">
              <AddToWallet />
              <a className="btn btn-outline" href={WALLET_HREF} target="_blank" rel="noopener noreferrer">
                Open the wallet
                <ArrowUpRightIcon width={15} height={15} />
              </a>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} style={{ display: 'flex' }}>
                <span className="marquee-item">
                  TOKEN <strong>PAY3</strong>
                </span>
                <span className="marquee-item">
                  TICKER <strong>$PAY3</strong>
                </span>
                <span className="marquee-item">
                  NETWORK <strong>POLYGON</strong>
                </span>
                <span className="marquee-item">
                  DECIMALS <strong>18</strong>
                </span>
                <span className="marquee-item">
                  CONTRACT <strong>{truncate(CONTRACT)}</strong>
                </span>
              </div>
            ))}
          </div>
        </div>

        <section className="section" id="proof">
          <div className="shell">
            <div className="section-head">
              <span className="tag">Proof of issuance</span>
              <h2>Read the receipt before you trust the ticker.</h2>
              <p>
                Everything below is verifiable on-chain. Copy the contract
                address and check it against Polygonscan before you send
                anything.
              </p>
            </div>

            <div className="receipt-wrap">
              <div className="receipt">
                <div className="receipt-head">
                  <span className="title">PAY3 · PROOF OF ISSUANCE</span>
                  <span className="meta">POLYGON MAINNET</span>
                </div>

                <div className="receipt-stub" />

                <div className="receipt-rows">
                  <div className="receipt-row">
                    <span className="label">Token</span>
                    <div className="value-group">
                      <span className="value">Pay3</span>
                    </div>
                  </div>

                  <div className="receipt-row">
                    <span className="label">Ticker</span>
                    <div className="value-group">
                      <span className="value">{TICKER}</span>
                      <CopyButton value={TICKER} label="ticker" />
                    </div>
                  </div>

                  <div className="receipt-row">
                    <span className="label">Decimals</span>
                    <div className="value-group">
                      <span className="value">18</span>
                    </div>
                  </div>

                  <div className="receipt-row">
                    <span className="label">Network</span>
                    <div className="value-group">
                      <span className="value">Polygon</span>
                    </div>
                  </div>

                  <div className="receipt-row">
                    <span className="label">Contract</span>
                    <div className="value-group">
                      <span className="value" title={CONTRACT}>
                        {truncate(CONTRACT)}
                      </span>
                      <CopyButton value={CONTRACT} label="contract address" />
                    </div>
                  </div>
                </div>

                <div className="receipt-foot">
                  <a href={EXPLORER_HREF} target="_blank" rel="noopener noreferrer">
                    Verify on Polygonscan
                    <ArrowUpRightIcon width={12} height={12} />
                  </a>
                  <span className="stamp">VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-head">
              <span className="tag">How it settles</span>
              <h2>A protocol, not a middleman.</h2>
              <p>Three things Pay3 promises on every transaction.</p>
            </div>

            <div className="ledger">
              {FEATURES.map((f) => (
                <div className="ledger-row" key={f.tag}>
                  <span className="tag">{f.tag}</span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="wallet">
          <div className="shell">
            <div className="section-head">
              <span className="tag">The Pay3 wallet</span>
              <h2>One wallet. Nine chains.</h2>
              <p>
                The Pay3 EVM wallet holds and moves funds across nine major
                chains from a single address — no bridging, no separate seed
                phrase per network.
              </p>
            </div>

            <div className="wallet-panel">
              <div className="wallet-cta">
                <div>
                  <span className="url mono">{WALLET_URL}</span>
                  <p>Open the wallet in your browser to get started.</p>
                </div>
                <a className="btn btn-primary" href={WALLET_HREF} target="_blank" rel="noopener noreferrer">
                  Open the wallet
                  <ArrowUpRightIcon width={15} height={15} />
                </a>
              </div>

              <div className="chains-grid">
                {CHAINS.map((c) => (
                  <div className="chain-chip" key={c.name}>
                    <span className="chain-dot" style={{ background: c.color }} aria-hidden="true" />
                    <span className="name">{c.name}</span>
                    <span className="id mono">{c.id}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="whitepaper">
          <div className="shell">
            <div className="whitepaper">
              <div>
                <h3>
                  Whitepaper
                  <span className="void-stamp">NOT YET ISSUED</span>
                </h3>
                <p>
                  We're still writing it down. Check back soon, or reach the
                  team directly if you need details now.
                </p>
              </div>
              <div className="hero-actions" style={{ marginTop: 0 }}>
                <button className="btn btn-ghost" type="button" disabled aria-disabled="true">
                  <FileTextIcon width={15} height={15} />
                  Read whitepaper
                </button>
                <a className="btn btn-outline" href={`mailto:${EMAIL}`}>
                  <MailIcon width={15} height={15} />
                  Email the team
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/logo.svg" alt="" width={22} height={22} />
              <span>Pay3 — decentralized payment protocol</span>
            </div>

            <div className="contact-row">
              <MailIcon width={14} height={14} />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <CopyButton value={EMAIL} label="email address" dark />
            </div>
          </div>

          <div className="footer-bottom">
            <span>$PAY3 · Polygon · 18 decimals</span>
            <a href="#top">back to top ↑</a>
          </div>

          <p className="disclaimer">
            Pay3 is experimental software provided as-is. Always verify the
            contract address above against Polygonscan before you sign a
            transaction — Pay3 will never DM you first or ask for your seed
            phrase.
          </p>
        </div>
      </footer>
    </>
  );
}
