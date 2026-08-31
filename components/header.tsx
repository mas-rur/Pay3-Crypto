"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, Github, Menu, X } from "lucide-react";
import { nav, site, socials } from "@/lib/data";
import { useWhitepaper } from "./whitepaper-context";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { open: openWhitepaper } = useWhitepaper();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-paper-line bg-white/80 backdrop-blur-md">
      <div className="section flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt={`${site.name} logo`}
            width={30}
            height={30}
            priority
          />
          <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-400 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={socials.github.href}
            target="_blank"
            rel="noreferrer"
            aria-label="Pay3 on GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-paper-line text-ink-600 transition-colors hover:border-ink hover:text-ink"
          >
            <Github size={17} />
          </a>
          <button
            type="button"
            onClick={openWhitepaper}
            className="flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ink-800"
          >
            <FileText size={15} />
            Documentation
          </button>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-ink md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-paper-line bg-white px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-paper-line py-3.5 text-sm text-ink-600"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={socials.github.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-paper-line text-ink-600"
              aria-label="Pay3 on GitHub"
            >
              <Github size={18} />
            </a>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                openWhitepaper();
              }}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white"
            >
              <FileText size={15} />
              Documentation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
