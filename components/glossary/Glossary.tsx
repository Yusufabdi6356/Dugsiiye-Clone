"use client";

import SmartLink from "@/components/ui/SmartLink";
import { useMemo, useState } from "react";
import { glossaryCategories, glossaryTerms } from "@/lib/data/glossary";
import { ArrowUpRightIcon, MagnifyingGlassIcon, XIcon } from "@/components/ui/icons";

const CHIP =
  "inline-flex h-8 min-w-8 items-center justify-center rounded-full border px-3 text-sm font-medium transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300";
const CHIP_ON = `${CHIP} border-transparent bg-(--ink) text-white dark:bg-white dark:text-[#0D1117]`;
const CHIP_OFF = `${CHIP} border-neutral-200 bg-white text-[#1E1E1E] hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800`;

const letterOf = (term: string) => term[0].toUpperCase();
const LETTERS = Array.from(new Set(glossaryTerms.map((t) => letterOf(t.term)))).sort();

export default function Glossary() {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const terms = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossaryTerms.filter(
      (t) =>
        (!letter || letterOf(t.term) === letter) &&
        (!category || t.category === category) &&
        (!q || t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)),
    );
  }, [query, letter, category]);

  const filtered = !!(query || letter || category);
  const reset = () => {
    setQuery("");
    setLetter(null);
    setCategory(null);
  };

  return (
    <section className="container mx-auto max-w-6xl px-4 pb-24">
      <div>
        <div className="relative max-w-xl">
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8D8D8D] dark:text-neutral-400" aria-hidden="true" />
          <input
            type="search"
            className="flex h-11 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-[#1E1E1E] transition-colors dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-neutral-300 dark:hover:border-neutral-700 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#8D8D8D] dark:placeholder:text-neutral-500 focus-visible:outline-none focus-visible:border-neutral-300 focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-0 dark:focus-visible:border-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 w-full pl-11"
            placeholder="Raadi eray"
            aria-label="Raadi eray"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-1.5">
          <button type="button" aria-pressed={letter === null} onClick={() => setLetter(null)} className={letter === null ? CHIP_ON : CHIP_OFF}>
            Dhammaan
          </button>
          {LETTERS.map((l) => (
            <button key={l} type="button" title={`${glossaryTerms.filter((t) => letterOf(t.term) === l).length} eray`} aria-pressed={letter === l} onClick={() => setLetter(letter === l ? null : l)} className={letter === l ? CHIP_ON : CHIP_OFF}>
              {l}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {glossaryCategories.map((c) => (
            <button key={c.slug} type="button" aria-pressed={category === c.slug} onClick={() => setCategory(category === c.slug ? null : c.slug)} className={category === c.slug ? CHIP_ON : CHIP_OFF}>
              {c.slug}
              <span className="ml-1.5 text-xs tabular-nums text-[#8D8D8D] dark:text-neutral-400">{c.count}</span>
            </button>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
            <span className="tabular-nums">{terms.length}</span> eray
          </p>
          {filtered && (
            <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800 dark:focus-visible:ring-neutral-300">
              <XIcon className="h-3 w-3" aria-hidden="true" />
              Nadiifi
            </button>
          )}
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {terms.map((t) => (
            <li key={t.slug}>
              <SmartLink
                className="group flex h-full flex-col rounded-2xl border border-neutral-200/60 bg-white p-5 shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_10px_30px_rgb(var(--ink-rgb)/0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700 dark:focus-visible:ring-neutral-300"
                href={`/waa-maxay/${t.slug}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">Waa Maxay {t.term}?</h3>
                  <ArrowUpRightIcon className="mt-1 h-4 w-4 shrink-0 text-[#8D8D8D] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-neutral-400" aria-hidden="true" />
                </div>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#8D8D8D] dark:text-neutral-400">{t.definition}</p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">{t.category}</p>
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
