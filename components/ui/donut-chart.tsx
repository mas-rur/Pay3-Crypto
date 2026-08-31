import type { Allocation } from "@/lib/data";

const SIZE = 220;
const STROKE = 30;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const GAP = 4;

export default function DonutChart({
  data,
  centerLabel,
  centerValue,
}: {
  data: Allocation[];
  centerLabel: string;
  centerValue: string;
}) {
  let cumulative = 0;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[260px]">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="h-full w-full -rotate-90"
      >
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="#F1F3F6"
          strokeWidth={STROKE}
        />
        {data.map((slice) => {
          const sliceLength = (slice.percent / 100) * CIRCUMFERENCE;
          const dashArray = `${Math.max(sliceLength - GAP, 0)} ${
            CIRCUMFERENCE - sliceLength + GAP
          }`;
          const dashOffset = -cumulative;
          cumulative += sliceLength;

          return (
            <circle
              key={slice.label}
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke={slice.color}
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
            />
          );
        })}
      </svg>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-2xl font-semibold text-ink">
          {centerValue}
        </span>
        <span className="text-xs text-ink-400">{centerLabel}</span>
      </div>
    </div>
  );
}
