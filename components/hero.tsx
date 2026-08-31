"use client";

import Link from "next/link";
import { ArrowUpRight, FileText, ShieldCheck, Sparkles } from "lucide-react";
import HeroGraphic from "./hero-graphic";
import { token } from "@/lib/data";
import { useWhitepaper } from "./whitepaper-context";

export default function Hero() {
  const { open: openWhitepaper } = useWhitepaper();

  return (
    <section className="section grid items-center gap-14 py-16 md:grid-cols-2 md:py-24">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-paper-line bg-paper-soft px-3 py-1.5 text-xs text-ink-600">
          <Sparkles size={13} className="text-brand" />
          <span className="font-medium text-ink">Live</span>
          <span className="h-1 w-1 rounded-full bg-ink-200" />
          <span>{token.symbol} is deployed on {token.network}</span>
        </div>

        <h1 className="max-w-lg text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
          The payment layer for Web3
        </h1>

        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-400">
          Pay3 is a utility token built on Polygon for fast, low-cost
          payments across the decentralized web — without the fees or
          delays of legacy rails.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={openWhitepaper}
            className="flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-800"
          >
            <FileText size={16} />
            Documentation
          </button>
          <Link
            href={`${token.explorerBase}${token.contract}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-paper-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            View Contract
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-2 text-xs text-ink-400">
          <ShieldCheck size={14} className="text-teal" />
          <span>
            Deployed on {token.network} · Total supply{" "}
            {token.totalSupplyLabel}
          </span>
        </div>
      </div>

      <HeroGraphic />
    </section>
  );
}
