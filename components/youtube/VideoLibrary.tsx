"use client";

import { useMemo, useState } from "react";
import { youtubeSeries } from "@/lib/data/youtube";
import { MagnifyingGlassIcon } from "@/components/ui/icons";
import VideoCard from "./VideoCard";

const total = youtubeSeries.reduce((n, s) => n + s.videos.length, 0);

export default function VideoLibrary() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const series = useMemo(
    () =>
      youtubeSeries
        .map((s) => ({ ...s, videos: q ? s.videos.filter((v) => `${v.title} ${v.description} ${v.keywords}`.toLowerCase().includes(q)) : s.videos }))
        .filter((s) => s.videos.length > 0),
    [q],
  );
  const count = series.reduce((n, s) => n + s.videos.length, 0);

  return (
    <>
      <section className="container mx-auto mb-12 max-w-6xl px-4">
        <div className="w-full">
          <div className="relative">
            <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8D8D8D] dark:text-neutral-400" aria-hidden="true" />
            <input
              type="search"
              placeholder="Raadi video, tusaale: React, Claude Code, AI agent"
              aria-label="Raadi videoyada kanaalka"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 w-full rounded-xl border border-neutral-200 bg-white pl-11 pr-11 text-sm text-[#1E1E1E] transition-colors placeholder:text-[#8D8D8D] hover:border-neutral-300 focus-visible:border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:placeholder:text-neutral-500 dark:hover:border-neutral-700 dark:focus-visible:border-neutral-500 dark:focus-visible:ring-0 [&::-webkit-search-cancel-button]:hidden"
            />
          </div>
          <p className="mt-3 text-sm text-[#8D8D8D] dark:text-neutral-400" aria-live="polite">
            <span className="font-medium tabular-nums text-[#1E1E1E] dark:text-neutral-100">{q ? count : total}</span> {q ? `video oo la helay` : "video oo dhammaystiran"}
          </p>
        </div>
      </section>
      <div className="container mx-auto max-w-6xl px-4 pb-24">
        {series.map((s) => (
          <section key={s.id} data-yt-section="true" id={s.id} className="scroll-mt-32 border-t border-neutral-200 pt-12 first:border-t-0 first:pt-0 dark:border-neutral-800 [&+section]:mt-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-[#1E1E1E] md:text-3xl dark:text-neutral-50">{s.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#8D8D8D] dark:text-neutral-400">
                {s.description} <span className="tabular-nums">{s.videos.length} video.</span>
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {s.videos.map((v) => (
                <VideoCard key={v.slug} video={v} />
              ))}
            </div>
          </section>
        ))}
        {series.length === 0 && <p className="py-16 text-center text-sm text-[#8D8D8D] dark:text-neutral-400">Wax video ah lama helin.</p>}
      </div>
    </>
  );
}
