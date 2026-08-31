import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { token } from "@/lib/data";
import { truncateAddress } from "@/lib/utils";
import CopyButton from "@/components/ui/copy-button";

const facts = [
  { label: "Name", value: token.name },
  { label: "Symbol", value: token.symbol },
  { label: "Network", value: token.network },
  { label: "Total Supply", value: token.totalSupplyLabel },
];

export default function TokenDetails() {
  return (
    <section id="token" className="section py-16 md:py-20">
      <div className="mb-10 max-w-lg">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Token details
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-400">
          Everything you need to verify $PAY3 on-chain, in one place.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-white px-6 py-6">
            <p className="text-xs text-ink-400">{fact.label}</p>
            <p className="mt-2 font-display text-lg font-semibold text-ink">
              {fact.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-px overflow-hidden rounded-2xl border border-paper-line bg-white">
        <div className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs text-ink-400">Contract address</p>
            <p className="mt-2 truncate font-mono text-sm text-ink">
              <span className="sm:hidden">
                {truncateAddress(token.contract, 8)}
              </span>
              <span className="hidden sm:inline">{token.contract}</span>
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2.5">
            <CopyButton value={token.contract} />
            <Link
              href={`${token.explorerBase}${token.contract}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-md border border-paper-line px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              PolygonScan
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
