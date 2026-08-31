import Image from "next/image";
import { Zap, ShieldCheck } from "lucide-react";

export default function HeroGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      {/* ambient glow */}
      <div
        className="absolute inset-6 rounded-full bg-gradient-to-br from-brand/25 via-teal/15 to-violet/20 blur-3xl"
        aria-hidden="true"
      />

      {/* outer dashed orbit */}
      <div className="absolute inset-0 animate-spin-slow" aria-hidden="true">
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <circle
            cx="200"
            cy="200"
            r="196"
            fill="none"
            stroke="#C9D2E3"
            strokeWidth="1.5"
            strokeDasharray="2 10"
            strokeLinecap="round"
          />
          <circle cx="200" cy="4" r="6" fill="#2F6FED" />
          <circle cx="382" cy="272" r="4" fill="#2FCFC0" />
        </svg>
      </div>

      {/* inner dashed orbit, counter-rotating */}
      <div
        className="absolute inset-[13%] animate-spin-slow-reverse"
        aria-hidden="true"
      >
        <svg viewBox="0 0 300 300" className="h-full w-full">
          <circle
            cx="150"
            cy="150"
            r="146"
            fill="none"
            stroke="#DCE7FD"
            strokeWidth="1.5"
            strokeDasharray="1 8"
            strokeLinecap="round"
          />
          <circle cx="18" cy="150" r="5" fill="#7C5CFC" />
        </svg>
      </div>

      {/* center coin */}
      <div className="absolute inset-0 flex animate-float items-center justify-center">
        <div className="relative flex h-[188px] w-[188px] items-center justify-center rounded-full border border-white bg-gradient-to-br from-brand via-brand-600 to-violet shadow-glow">
          <div className="flex h-[152px] w-[152px] flex-col items-center justify-center gap-2 rounded-full bg-white">
            <Image
              src="/images/logo.png"
              alt="Pay3 token"
              width={56}
              height={56}
            />
            <span className="font-display text-sm font-semibold tracking-tight text-ink">
              $PAY3
            </span>
          </div>
        </div>
      </div>

      {/* floating stat chips */}
      <div
        className="absolute right-0 top-10 hidden items-center gap-2 rounded-xl border border-paper-line bg-white/90 px-3 py-2 shadow-card backdrop-blur-sm animate-float sm:flex"
        style={{ animationDelay: "0.4s" }}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-brand">
          <Zap size={14} />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-medium text-ink">Sub-second</p>
          <p className="text-[11px] text-ink-400">settlement</p>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-0 hidden items-center gap-2 rounded-xl border border-paper-line bg-white/90 px-3 py-2 shadow-card backdrop-blur-sm animate-float sm:flex"
        style={{ animationDelay: "1.1s" }}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal/10 text-teal">
          <ShieldCheck size={14} />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-medium text-ink">Deployed on</p>
          <p className="text-[11px] text-ink-400">Polygon</p>
        </div>
      </div>
    </div>
  );
}
