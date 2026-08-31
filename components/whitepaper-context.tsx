"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type WhitepaperContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const WhitepaperContext = createContext<WhitepaperContextValue | null>(null);

export function WhitepaperProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <WhitepaperContext.Provider value={value}>
      {children}
    </WhitepaperContext.Provider>
  );
}

export function useWhitepaper() {
  const ctx = useContext(WhitepaperContext);
  if (!ctx) {
    throw new Error("useWhitepaper must be used within a WhitepaperProvider");
  }
  return ctx;
}
