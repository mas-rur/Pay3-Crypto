import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export default function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="section py-14 md:py-20">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-1.5 text-sm text-ink-400 transition-colors hover:text-ink"
      >
        <ArrowLeft size={15} />
        Back to Pay3
      </Link>

      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-ink-400">Last updated: {updated}</p>
        <p className="mt-6 text-[15px] leading-relaxed text-ink-400">
          {intro}
        </p>

        <div className="mt-10 space-y-10">{children}</div>
      </div>
    </div>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-ink">{heading}</h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-400">
        {children}
      </div>
    </section>
  );
}
