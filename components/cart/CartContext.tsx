"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { courses, featuredCourse, type Course } from "@/lib/data/courses";

export type Duration = "6m" | "1y";

type CartState = {
  items: Course[];
  duration: Duration;
  open: boolean;
  add: (slug: string) => void;
  remove: (slug: string) => void;
  clear: () => void;
  setDuration: (d: Duration) => void;
  setOpen: (open: boolean) => void;
  has: (slug: string) => boolean;
};

const STORAGE_KEY = "dugsiiye-clone-cart";
const CATALOG = new Map([...courses, featuredCourse].map((c) => [c.slug, c]));
const CartContext = createContext<CartState | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [duration, setDuration] = useState<Duration>("6m");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved?.slugs) setSlugs(saved.slugs.filter((s: string) => CATALOG.has(s)));
      if (saved?.duration === "1y") setDuration("1y");
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ slugs, duration }));
    } catch {}
  }, [slugs, duration]);

  const add = useCallback((slug: string) => {
    setSlugs((s) => (s.includes(slug) ? s : [...s, slug]));
    setOpen(true);
  }, []);
  const remove = useCallback((slug: string) => setSlugs((s) => s.filter((x) => x !== slug)), []);
  const clear = useCallback(() => setSlugs([]), []);

  const value = useMemo<CartState>(
    () => ({
      items: slugs.map((s) => CATALOG.get(s)!).filter(Boolean),
      duration,
      open,
      add,
      remove,
      clear,
      setDuration,
      setOpen,
      has: (slug) => slugs.includes(slug),
    }),
    [slugs, duration, open, add, remove, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

export const priceFor = (c: Course, d: Duration) => (d === "1y" ? c.yearPrice : c.price);
export const money = (n: number) => `$${n.toFixed(2)}`;
