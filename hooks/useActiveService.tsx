"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

/**
 * The hero slider's "Explore service" button needs to select the matching
 * tab in the services section and scroll there — this small context is the
 * shared bit of state both organisms read/write, so neither needs to know
 * about the other directly.
 */
const ActiveServiceContext = createContext<{
  index: number;
  setIndex: (i: number) => void;
} | null>(null);

export function ActiveServiceProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);
  const value = useMemo(() => ({ index, setIndex }), [index]);
  return <ActiveServiceContext.Provider value={value}>{children}</ActiveServiceContext.Provider>;
}

export function useActiveService() {
  const ctx = useContext(ActiveServiceContext);
  if (!ctx) throw new Error("useActiveService must be used within ActiveServiceProvider");
  return ctx;
}
