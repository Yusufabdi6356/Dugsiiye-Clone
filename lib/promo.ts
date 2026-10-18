"use client";

import { useEffect, useState } from "react";

const PROMO_END = new Date("2026-10-01T00:00:00+03:00").getTime();
const WEEK = 7 * 24 * 60 * 60 * 1000;

export type Remaining = { days: number; hours: number; minutes: number; seconds: number };

export function remaining(now: number): Remaining {
  let end = PROMO_END;
  while (end <= now) end += WEEK;
  const s = Math.floor((end - now) / 1000);
  return { days: Math.floor(s / 86400), hours: Math.floor((s % 86400) / 3600), minutes: Math.floor((s % 3600) / 60), seconds: s % 60 };
}

export const pad2 = (n: number) => String(n).padStart(2, "0");

export function useCountdown(): Remaining | null {
  const [value, setValue] = useState<Remaining | null>(null);
  useEffect(() => {
    setValue(remaining(Date.now()));
    const id = setInterval(() => setValue(remaining(Date.now())), 1000);
    return () => clearInterval(id);
  }, []);
  return value;
}
