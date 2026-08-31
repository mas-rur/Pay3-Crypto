"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, FileText } from "lucide-react";
import { useWhitepaper } from "./whitepaper-context";
import { whitepaperPlaceholder } from "@/lib/data";

export default function WhitepaperModal() {
  const { isOpen, close } = useWhitepaper();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [isOpen, close]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/50 px-0 backdrop-blur-sm animate-fade-in sm:items-center sm:px-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="whitepaper-title"
        className="flex max-h-[85vh] w-full max-w-2xl origin-bottom flex-col overflow-hidden rounded-t-2xl border border-paper-line bg-white shadow-modal animate-scale-in sm:rounded-2xl"
      >
        <div className="flex items-center justify-between border-b border-paper-line px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand">
              <FileText size={18} strokeWidth={2} />
            </span>
            <div>
              <h2 id="whitepaper-title" className="text-base font-semibold leading-tight text-ink">
                Pay3 Whitepaper
              </h2>
              <p className="text-xs text-ink-400">{whitepaperPlaceholder.updated}</p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Close whitepaper"
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-paper-soft hover:text-ink"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-5">
          <div className="mb-5 rounded-lg border border-dashed border-paper-line bg-paper-soft px-4 py-3 text-xs text-ink-400">
            This is placeholder content. The full whitepaper will replace this
            popup once it is published.
          </div>
          <div className="space-y-6">
            {whitepaperPlaceholder.sections.map((section) => (
              <section key={section.heading}>
                <h3 className="mb-1.5 text-sm font-semibold text-ink">
                  {section.heading}
                </h3>
                <p className="text-sm leading-relaxed text-ink-400">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>

        <div className="border-t border-paper-line px-6 py-4">
          <button
            type="button"
            onClick={close}
            className="w-full rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-800 sm:w-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
