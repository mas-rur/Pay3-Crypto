// ---------------------------------------------------------------------------
// Single source of truth for site content.
// Update the values here to change what appears across the site.
// ---------------------------------------------------------------------------

export const site = {
  name: "Pay3",
  ticker: "$PAY3",
  domain: "pay3.space",
  tagline: "The payment layer for Web3",
  description:
    "Pay3 ($PAY3) is a utility token on Polygon built for fast, low-cost payments across the decentralized web.",
};

export const token = {
  name: "Pay3",
  symbol: "$PAY3",
  contract: "0x9b97b9f4264d60d4c1e45fffa680313fc37500dd",
  network: "Polygon",
  totalSupply: 100_000_000,
  totalSupplyLabel: "100,000,000 PAY3",
  explorerBase: "https://polygonscan.com/token/",
};

export type Allocation = {
  label: string;
  percent: number;
  color: string;
  description: string;
};

export const tokenomics: Allocation[] = [
  {
    label: "Ecosystem",
    percent: 25,
    color: "#2FCFC0",
    description: "Grants, integrations, and growth of the Pay3 network.",
  },
  {
    label: "Public Sale",
    percent: 20,
    color: "#2F6FED",
    description: "Distributed to the public during token sale rounds.",
  },
  {
    label: "Reserve",
    percent: 20,
    color: "#0B1220",
    description: "Held in reserve for long-term protocol stability.",
  },
  {
    label: "Team & Advisors",
    percent: 15,
    color: "#7C5CFC",
    description: "Subject to vesting for core contributors and advisors.",
  },
  {
    label: "Liquidity",
    percent: 10,
    color: "#AEB4BF",
    description: "Seeded into exchange and DEX liquidity pools.",
  },
  {
    label: "Marketing & Partnership",
    percent: 10,
    color: "#F2A93B",
    description: "Partnerships, campaigns, and community programs.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Masrur Ahmmed",
    role: "Founder & CEO",
    bio: "Blockchain developer with 5+ years of experience building decentralized applications and smart contracts.",
    initials: "MA",
  },
];

export type Investor = {
  name: string;
  note: string;
};

// Placeholder investor slots. Replace with real logos and names once
// investment partners are confirmed.
export const investors: Investor[] = [
  {
    name: "Investor slot 1",
    note: "Logo coming soon",
  },
  {
    name: "Investor slot 2",
    note: "Logo coming soon",
  },
];

export const socials = {
  github: {
    label: "@mecozx",
    href: "https://github.com/mecozx",
  },
  instagram: {
    label: "@pay3.mecozx",
    href: "https://instagram.com/pay3.mecozx",
  },
  wallet: {
    label: "app.pay3.space",
    href: "https://app.pay3.space",
  },
  email: {
    label: "team@pay3.space",
    href: "mailto:team@pay3.space",
  },
};

export const nav = [
  { label: "Token", href: "#token" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Team", href: "#team" },
  { label: "Investors", href: "#investors" },
  { label: "Contact", href: "#contact" },
];

// Placeholder whitepaper content shown inside the documentation popup.
// Replace with the real whitepaper copy when it is ready.
export const whitepaperPlaceholder = {
  updated: "Draft \u2014 not yet published",
  sections: [
    {
      heading: "Abstract",
      body: "Pay3 is a utility token deployed on Polygon, designed to make peer-to-peer and merchant payments across Web3 faster and cheaper than traditional rails. This document outlines the motivation, mechanics, and roadmap for the Pay3 network. This is placeholder text \u2014 the full whitepaper will be published here soon.",
    },
    {
      heading: "1. Introduction",
      body: "Existing payment infrastructure, both traditional and on-chain, remains fragmented, slow, or expensive for everyday use. Pay3 aims to close that gap by combining Polygon's low transaction costs with a token designed specifically for payment use cases. Full background and problem statement will be added in the final version of this document.",
    },
    {
      heading: "2. Utility",
      body: "$PAY3 is intended to be used for transaction fees, merchant settlement, and incentive programs within the Pay3 ecosystem. Detailed utility mechanics, staking design, and fee structures are still being finalized and will be published in a future revision.",
    },
    {
      heading: "3. Token Distribution",
      body: "A total supply of 100,000,000 PAY3 is allocated across public sale, ecosystem growth, team and advisors, marketing and partnerships, reserve, and liquidity. See the Tokenomics section on this site for the current breakdown.",
    },
    {
      heading: "4. Roadmap",
      body: "Milestones covering network launch, exchange listings, partnership integrations, and governance will be detailed here as they are confirmed.",
    },
    {
      heading: "5. Disclaimer",
      body: "This document is a placeholder and does not constitute financial advice or a final commitment of features, dates, or figures. Please refer to the published whitepaper, once available, before making any decisions.",
    },
  ],
};
