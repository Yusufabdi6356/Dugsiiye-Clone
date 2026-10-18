"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Phase } from "@/lib/data/curriculum";
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, PlayCircleIcon, PlayIcon, PlusIcon, XBoldIcon } from "@/components/ui/icons";

const SECTION_BASE =
  "overflow-hidden rounded-2xl border bg-white shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] transition-all duration-300 dark:bg-neutral-800/60";
const NUM_BASE = "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-display text-xs font-semibold tabular-nums transition-colors";
const pad = (n: number) => String(n).padStart(2, "0");

function Section({ section, index, open, onToggle }: { section: Phase["sections"][number]; index: number; open: boolean; onToggle: () => void }) {
  return (
    <div className={`${SECTION_BASE} ${open ? "border-neutral-300 dark:border-neutral-700" : "border-neutral-200/60 hover:border-neutral-300 dark:border-neutral-700/60 dark:hover:border-neutral-600"}`}>
      <button onClick={onToggle} aria-expanded={open} className="group flex w-full items-center gap-3 p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300">
        <div className={`${NUM_BASE} ${open ? "bg-(--ink) text-white dark:bg-white dark:text-(--ink)" : "bg-neutral-100 text-[#1E1E1E] group-hover:bg-(--ink) group-hover:text-white dark:bg-neutral-800 dark:text-neutral-200 dark:group-hover:bg-white dark:group-hover:text-(--ink)"}`}>{pad(index + 1)}</div>
        <div className="flex-1 min-w-0">
          <h4 className="truncate font-display text-[13px] font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">{section.title}</h4>
          <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[#8D8D8D] dark:text-neutral-400">
            <span>
              <span className="tabular-nums">{section.lessons}</span> lessons
            </span>
            <span className="h-0.5 w-0.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <span className="tabular-nums">{section.duration}</span>
            {section.previews ? (
              <>
                <span className="h-0.5 w-0.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">{section.previews} free previews</span>
              </>
            ) : null}
          </div>
        </div>
        <PlusIcon className={`h-4 w-4 shrink-0 text-[#8D8D8D] transition-transform duration-200 dark:text-neutral-400${open ? " rotate-45" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <div className="overflow-hidden" style={{ height: "auto" }}>
          <div className="border-t border-neutral-100 dark:border-neutral-800">
            <div className="p-1.5">
              {section.items.map((l, i) => (
                <div key={i} className="flex items-center gap-2.5 rounded-xl px-2 py-2 text-sm">
                  <span className="w-5 shrink-0 text-right text-[11px] font-semibold tabular-nums text-[#8D8D8D] dark:text-neutral-500">{pad(i + 1)}</span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200">
                    <PlayCircleIcon className="h-4 w-4" />
                  </span>
                  <div className="flex-1 min-w-0">
                    {l.preview ? (
                      <>
                        <span className="block truncate text-[13px] font-medium text-[#1E1E1E] dark:text-neutral-100">{l.title}</span>
                        <span className="inline-block text-[9px] font-semibold uppercase tracking-wider text-[#1E1E1E] dark:text-neutral-100">Free preview</span>
                      </>
                    ) : (
                      <span className="block truncate text-[13px] text-[#8D8D8D] dark:text-neutral-400">{l.title}</span>
                    )}
                  </div>
                  {l.duration ? <span className="shrink-0 text-[11px] tabular-nums text-[#8D8D8D] dark:text-neutral-400">{l.duration}</span> : 0}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CurriculumModal({ phase, onClose }: { phase: Phase; onClose: () => void }) {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());
  const allOpen = openSet.size === phase.sections.length;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const toggle = (i: number) =>
    setOpenSet((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });

  return createPortal(
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-200" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={phase.title} onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div className="relative w-full max-w-[40rem] animate-in fade-in zoom-in-95 duration-200">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_10px_30px_rgb(var(--ink-rgb)/0.07)] dark:border-neutral-800 dark:bg-neutral-900">
            <div className="relative border-b border-neutral-100 p-6 pb-5 dark:border-neutral-800">
              <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-[#1E1E1E] transition-colors hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700">
                <XBoldIcon className="h-4 w-4" />
              </button>
              <div className="flex gap-5">
                <div className="relative hidden h-30 w-24 shrink-0 overflow-hidden rounded-xl bg-[#F4F4F2] ring-1 ring-inset ring-black/10 sm:block dark:bg-neutral-800 dark:ring-white/15">
                  <img alt={phase.title} loading="lazy" decoding="async" className="object-cover" src={phase.image} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px" }} />
                </div>
                <div className="flex-1 min-w-0 pr-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-semibold uppercase capitalize tracking-wider text-[#8D8D8D] dark:text-neutral-400">{phase.level}</span>
                  </div>
                  <h2 className="mb-2 line-clamp-2 font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">{phase.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-[#8D8D8D] dark:text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <ClockIcon className="h-4 w-4" />
                      <span className="tabular-nums">{phase.hours}</span> hours
                    </span>
                    <span className="flex items-center gap-1.5">
                      <PlayIcon className="h-4 w-4" />
                      <span className="tabular-nums">{phase.lessons}</span> lessons
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[#1E1E1E] dark:text-neutral-100">
                      <CheckCircleIcon className="h-4 w-4" />
                      Included
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#8D8D8D] dark:text-neutral-400">{phase.description}</p>
            </div>
            <div className="subtle-scrollbar max-h-[50vh] overflow-y-auto bg-[#F4F4F2] dark:bg-neutral-950">
              <div className="p-6">
                <div className="mb-5">
                  <h3 className="mb-2 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">Curriculum</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-[#8D8D8D] dark:text-neutral-400">
                      <span>
                        <span className="font-medium tabular-nums text-[#1E1E1E] dark:text-neutral-100">{phase.sections.length}</span> sections
                      </span>
                      <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                      <span>
                        <span className="font-medium tabular-nums text-[#1E1E1E] dark:text-neutral-100">{phase.lessons}</span> lessons
                      </span>
                      <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                      <span>
                        <span className="font-medium tabular-nums text-[#1E1E1E] dark:text-neutral-100">{phase.totalDuration}</span> total
                      </span>
                    </div>
                    <button
                      onClick={() => setOpenSet(allOpen ? new Set() : new Set(phase.sections.map((_, i) => i)))}
                      className="text-xs font-medium text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:text-neutral-400 dark:hover:text-neutral-100"
                    >
                      {allOpen ? "Collapse all" : "Expand all"}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  {phase.sections.map((s, i) => (
                    <Section key={i} section={s} index={i} open={openSet.has(i)} onToggle={() => toggle(i)} />
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-neutral-100 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#1E1E1E] dark:text-neutral-100">This module + all others included</p>
                  <p className="text-xs text-[#8D8D8D] dark:text-neutral-400">One program, all courses, live mentorship</p>
                </div>
                <Link className="shrink-0" href="/mentorship" onClick={onClose}>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium ring-offset-background transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 bg-(--ink) text-white shadow-sm hover:-translate-y-px hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:shadow-none dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500 py-2 group h-12 px-6 text-[15px]">
                    Join Program
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root") ?? document.body,
  );
}
