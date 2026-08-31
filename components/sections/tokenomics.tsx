import DonutChart from "@/components/ui/donut-chart";
import { token, tokenomics } from "@/lib/data";

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="bg-paper-soft py-16 md:py-20">
      <div className="section">
        <div className="mb-10 max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Tokenomics
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-400">
            How the {token.totalSupplyLabel} supply is allocated across the
            Pay3 ecosystem.
          </p>
        </div>

        <div className="grid gap-10 rounded-2xl border border-paper-line bg-white p-6 sm:p-8 md:grid-cols-[260px,1fr] md:gap-14 md:p-10">
          <DonutChart
            data={tokenomics}
            centerLabel="Total supply"
            centerValue="100M"
          />

          <ul className="grid gap-5 sm:grid-cols-2">
            {tokenomics.map((slice) => (
              <li key={slice.label} className="flex gap-3">
                <span
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: slice.color }}
                  aria-hidden="true"
                />
                <div>
                  <div className="flex items-baseline gap-2">
                    <p className="text-sm font-medium text-ink">
                      {slice.label}
                    </p>
                    <p className="text-sm text-ink-400">{slice.percent}%</p>
                  </div>
                  <p className="mt-0.5 text-xs leading-relaxed text-ink-400">
                    {slice.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
