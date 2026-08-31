import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper-line">
      <div className="section flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <Image src="/images/logo.png" alt={`${site.name} logo`} width={24} height={24} />
          <span className="font-display text-sm font-semibold text-ink">
            {site.name}
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-400">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </a>
          ))}
          <Link href="/terms" className="hover:text-ink">
            Terms of Use
          </Link>
          <Link href="/privacy" className="hover:text-ink">
            Privacy Policy
          </Link>
        </nav>

        <p className="text-xs text-ink-400">
          &copy; {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
