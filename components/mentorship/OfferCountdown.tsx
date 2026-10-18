"use client";

import { Fragment } from "react";
import { pad2, useCountdown } from "@/lib/promo";

const UNITS = [
  ["days", "Days"],
  ["hours", "Hours"],
  ["minutes", "Minutes"],
  ["seconds", "Seconds"],
] as const;

export default function OfferCountdown() {
  const t = useCountdown();
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {UNITS.map(([key, label], i) => (
        <Fragment key={key}>
          {i > 0 && <span className="text-2xl font-light text-foreground/15 -mt-5 select-none">:</span>}
          <div className="flex flex-col items-center">
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-card border border-border shadow-sm">
              <span className="font-display text-2xl sm:text-3xl font-bold tabular-nums tracking-tight text-foreground">{t ? pad2(t[key]) : "00"}</span>
            </div>
            <span className="mt-2 text-[10px] sm:text-[11px] font-medium text-muted-foreground uppercase tracking-[0.12em]">{label}</span>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
