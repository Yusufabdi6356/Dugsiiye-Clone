"use client";

import { useMemo, useState } from "react";
import { categoryGroups, communityPosts, trendingTags, type TagCount } from "@/lib/data/community";
import Select from "@/components/ui/Select";
import Sheet from "@/components/ui/Sheet";
import { ChatCircleIcon, HashIcon, MagnifyingGlassIcon, SlidersIcon, TrendUpIcon, XBoldIcon, XIcon } from "@/components/ui/icons";
import PostCard from "./PostCard";

type Sort = "recent" | "popular" | "trending";
const SORTS = [
  { value: "recent", label: "Most Recent" },
  { value: "popular", label: "Most Popular" },
  { value: "trending", label: "Trending" },
];

const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300";
const IDLE = "text-[#8D8D8D] hover:bg-neutral-100 hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100";
const ACTIVE = "bg-(--ink) text-white dark:bg-white dark:text-(--ink)";
const COUNT_IDLE = "text-xs tabular-nums shrink-0 ml-2 text-[#8D8D8D]/70 dark:text-neutral-500";
const COUNT_ACTIVE = "text-xs tabular-nums shrink-0 ml-2 text-white/60 dark:text-(--ink)/60";
const FIELD =
  "flex h-11 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-[#1E1E1E] transition-colors dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-neutral-300 dark:hover:border-neutral-700 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#8D8D8D] dark:placeholder:text-neutral-500 focus-visible:outline-none focus-visible:border-neutral-300 focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-0 dark:focus-visible:border-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 pl-10";
const SORT_TRIGGER =
  "h-11 items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-[#1E1E1E] transition-colors dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-neutral-300 dark:hover:border-neutral-700 focus:outline-none focus:border-neutral-300 focus:ring-2 focus:ring-[#1E1E1E] dark:focus:ring-0 dark:focus:border-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 w-[150px] hidden sm:flex";
const MOBILE_FILTER =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 border border-neutral-200 bg-white text-[#1E1E1E] hover:-translate-y-px hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800 disabled:border-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-500 dark:disabled:border-neutral-800 dark:disabled:bg-neutral-800/50 dark:disabled:text-neutral-500 relative h-11 w-11 lg:hidden";

const plain = (html: string) => html.replace(/<[^>]+>/g, " ").toLowerCase();

function Filters({ tag, onTag }: { tag: string | null; onTag: (t: string | null) => void }) {
  const tagButton = (t: TagCount, compact: boolean) => {
    const on = tag === t.tag;
    return (
      <button key={t.tag} onClick={() => onTag(on ? null : t.tag)} className={`w-full flex items-center justify-between px-3 ${compact ? "py-1.5" : "py-2"} rounded-full text-sm transition-all duration-200 ${FOCUS} ${on ? ACTIVE : IDLE}`}>
        {compact ? (
          <span className="truncate">#{t.tag}</span>
        ) : (
          <span className="flex items-center gap-2 truncate">
            <HashIcon className="h-3 w-3 shrink-0" />
            <span className="truncate">{t.tag}</span>
          </span>
        )}
        {t.count !== undefined && <span className={on ? COUNT_ACTIVE : COUNT_IDLE}>{t.count}</span>}
      </button>
    );
  };

  return (
    <>
      <div>
        <div className="flex items-center gap-2 mb-4">
          <TrendUpIcon className="h-4 w-4 text-[#1E1E1E] dark:text-neutral-200" />
          <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">Trending</h3>
        </div>
        <div className="space-y-1">{trendingTags.map((t) => tagButton(t, false))}</div>
      </div>
      <div className="h-px bg-neutral-100 dark:bg-neutral-800" />
      <div>
        <div className="flex items-center gap-2 mb-4">
          <HashIcon className="h-4 w-4 text-[#1E1E1E] dark:text-neutral-200" />
          <h3 className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">Categories</h3>
        </div>
        <button onClick={() => onTag(null)} className={`w-full flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 mb-3 ${FOCUS} ${tag === null ? ACTIVE : IDLE}`}>
          <ChatCircleIcon className="h-3.5 w-3.5" />
          All Posts
        </button>
        <div dir="ltr" className="relative overflow-hidden h-[400px]">
          <div data-radix-scroll-area-viewport="" className="h-full w-full rounded-[inherit]" style={{ overflow: "hidden scroll" }}>
            <div style={{ minWidth: "100%", display: "table" }}>
              <div className="space-y-5 pr-3">
                {categoryGroups.map((g) => (
                  <div key={g.title}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 mb-2 px-1">{g.title}</p>
                    <div className="space-y-0.5">{g.items.map((t) => tagButton(t, true))}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function CommunityFeed() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("recent");
  const [tag, setTag] = useState<string | null>(null);
  const [sheet, setSheet] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const posts = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = communityPosts.filter(
      (p) => (!tag || p.tags.includes(tag)) && (!q || plain(p.bodyHtml).includes(q) || p.author.name.toLowerCase().includes(q) || p.tags.some((t) => t.includes(q))),
    );
    if (sort === "popular") list = [...list].sort((a, b) => b.likes - a.likes);
    if (sort === "trending") list = [...list].sort((a, b) => b.likes + b.comments * 2 - (a.likes + a.comments * 2));
    return list;
  }, [query, sort, tag]);

  const pickTag = (t: string | null) => {
    setTag(t);
    setSheet(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="sticky top-20 z-30 border-y border-neutral-200 bg-[#FAFAF9]/90 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/90">
        <div className="container max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8D8D8D] dark:text-neutral-400" />
              <input className={FIELD} placeholder="Search posts..." value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <Select value={sort} options={SORTS} onChange={(v) => setSort(v as Sort)} triggerClassName={SORT_TRIGGER} ariaLabel="Sort posts" />
            <button className={MOBILE_FILTER} type="button" aria-haspopup="dialog" aria-expanded={sheet} onClick={() => setSheet(true)}>
              <SlidersIcon className="h-4 w-4" />
              {tag && <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-(--ink) dark:bg-white" />}
            </button>
          </div>
          {tag && (
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">Active</span>
              <button onClick={() => setTag(null)} className="inline-flex items-center gap-1.5 rounded-full bg-(--ink) px-3 py-1 text-xs font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100">
                <HashIcon className="h-3 w-3" />
                {tag}
                <XBoldIcon className="h-3 w-3" />
              </button>
              <button onClick={() => setTag(null)} className="ml-1 text-xs font-medium text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100">
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="container max-w-6xl mx-auto px-4 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-12">
          <div className="min-w-0 space-y-4">
            <div className="space-y-4">
              {posts.map((p) => (
                <PostCard key={p.id} post={p} onTag={pickTag} onOpenImage={setLightbox} />
              ))}
              <p className="py-8 text-center text-sm text-[#8D8D8D] dark:text-neutral-400">{posts.length ? "You've reached the end." : "No posts found."}</p>
            </div>
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-40 space-y-8">
              <Filters tag={tag} onTag={pickTag} />
            </div>
          </aside>
        </div>
      </div>
      <Sheet open={sheet} onClose={() => setSheet(false)} side="left" labelledBy="community-filters" className="gap-4 border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900 sm:max-w-sm w-80 p-6">
        <div className="flex flex-col space-y-2 text-center sm:text-left mb-6">
          <h2 id="community-filters" className="font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
            Filters
          </h2>
        </div>
        <div className="space-y-8">
          <Filters tag={tag} onTag={pickTag} />
        </div>
      </Sheet>
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <img src={lightbox} alt="" className="max-h-full max-w-full rounded-2xl object-contain" />
          <button className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20" aria-label="Close">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
}
