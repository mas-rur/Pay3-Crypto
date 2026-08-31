"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { investors } from "@/lib/data";

export default function Investors() {
  const [index, setIndex] = useState(0);
  const count = investors.length;

  useEffect(() => {
    if (count <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 5000);
    return () => window.clearInterval(id);
  }, [count]);

  function goTo(i: number) {
    setIndex(((i % count) + count) % count);
  }

  return (
    <section id="investors" className="bg-paper-soft py-16 md:py-20">
      <div className="section">
        <div className="mb-10 max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Investors
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-400">
            Backers and partners supporting Pay3. This section will grow as
            new investments are confirmed.
          </p>
        </div>

        <div className="relative mx-auto max-w-xl overflow-hidden rounded-2xl border border-paper-line bg-white">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {investors.map((investor) => (
              <div
                key={investor.name}
                className="flex w-full shrink-0 flex-col items-center justify-center gap-3 px-8 py-16"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-dashed border-paper-line text-ink-200">
                  <Landmark size={26} />
                </span>
                <p className="text-sm font-medium text-ink-600">
                  {investor.name}
                </p>
                <p className="text-xs text-ink-400">{investor.note}</p>
              </div>
            ))}
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous investor"
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-paper-line bg-white text-ink-600 transition-colors hover:border-ink hover:text-ink"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next investor"
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-paper-line bg-white text-ink-600 transition-colors hover:border-ink hover:text-ink"
              >
                <ChevronRight size={16} />
              </button>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                {investors.map((investor, i) => (
                  <button
                    key={investor.name}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={cn(
                      "h-1.5 w-1.5 rounded-full bg-ink-200 transition-all",
                      i === index && "w-5 bg-brand"
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
