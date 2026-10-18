"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BANNER_ID, BANNER_STORAGE_KEY } from "@/lib/constants";
import { pad2, useCountdown } from "@/lib/promo";

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);
  const t = useCountdown();
  const countdown = t && `${t.days}d ${pad2(t.hours)}:${pad2(t.minutes)}:${pad2(t.seconds)}`;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (document.documentElement.hasAttribute("data-banner-dismissed")) setDismissed(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dismissed || !ref.current) {
      root.style.setProperty("--banner-height", "0px");
      return;
    }
    const el = ref.current;
    const sync = () => root.style.setProperty("--banner-height", `${el.offsetHeight}px`);
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, [dismissed]);

  if (dismissed) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(BANNER_STORAGE_KEY, BANNER_ID);
    } catch {}
    document.documentElement.setAttribute("data-banner-dismissed", "");
    setDismissed(true);
  };

  return (
    <div ref={ref} className="fixed inset-x-0 top-0 z-40 w-full bg-[#FAFAF9]/95 backdrop-blur transition-all duration-300 dark:bg-neutral-950/95 opacity-100 site-banner">
      <div className="w-full animate-in border-b border-neutral-200 bg-[#FAFAF9]/95 backdrop-blur duration-500 fade-in slide-in-from-top dark:border-neutral-800 dark:bg-neutral-950/95" style={{ animationDelay: "0ms" }}>
        <div className="mx-auto max-w-[1160px] px-5 md:px-8">
          <div data-notification-id={BANNER_ID} className="flex items-center gap-3 py-2 sm:gap-4">
            <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
              <p className="min-w-0 truncate text-sm font-medium text-[#1E1E1E] dark:text-neutral-100">30% off all courses</p>
            </div>
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <span className="hidden items-center gap-1.5 text-xs text-[#8D8D8D] sm:inline-flex dark:text-neutral-400">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                </svg>
                <span className="tabular-nums" suppressHydrationWarning>
                  {countdown ?? " "}
                </span>
              </span>
              <Link className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-(--ink) px-4 py-1.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-black active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 dark:focus-visible:ring-neutral-300 dark:focus-visible:ring-offset-neutral-950" href="/courses">
                Browse courses
              </Link>
              <button type="button" onClick={dismiss} className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-[#1E1E1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:text-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:focus-visible:ring-neutral-300" aria-label="Dismiss notification">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
