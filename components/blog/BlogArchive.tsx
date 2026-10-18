"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { blogCategories, blogPosts, blogTags } from "@/lib/data/blog";
import { CaretLeftIcon, CaretRightIcon, MagnifyingGlassIcon, SlidersIcon, XBoldIcon } from "@/components/ui/icons";
import BlogPostCard from "./BlogPostCard";

const PER_PAGE = 12;
const FILTERS_BTN =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 border border-neutral-200 text-[#1E1E1E] hover:-translate-y-px hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-800 disabled:border-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-500 dark:disabled:border-neutral-800 dark:disabled:bg-neutral-800/50 dark:disabled:text-neutral-500 px-5 py-2 h-11 gap-2";
const TAG_BASE =
  "inline-flex h-8 items-center rounded-full border px-3 text-xs font-medium transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300";
const TAG_ON = "border-(--ink) bg-(--ink) text-white hover:bg-black dark:border-white dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100";
const TAG_OFF = "border-neutral-200 bg-white text-[#8D8D8D] hover:border-neutral-300 hover:bg-neutral-50 hover:text-[#1E1E1E] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-100";
const ACTIVE_CHIP =
  "inline-flex items-center gap-1.5 rounded-full bg-(--ink) px-3 py-1 text-xs font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-black active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 dark:focus-visible:ring-offset-neutral-950";
const PAGE_NAV =
  "inline-flex h-9 items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800";
const PAGE_NUM =
  "inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium tabular-nums transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300";
const PAGE_ON = "bg-(--ink) text-white hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100";
const PAGE_OFF = "text-[#8D8D8D] hover:bg-neutral-100 hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100";

const categoryLabel = (slug: string) => blogCategories.find((c) => c.href.endsWith(`/${slug}`))?.label;

export default function BlogArchive() {
  return (
    <Suspense fallback={<Archive params={new URLSearchParams()} />}>
      <ArchiveFromUrl />
    </Suspense>
  );
}

function ArchiveFromUrl() {
  return <Archive params={useSearchParams()} />;
}

function Archive({ params }: { params: URLSearchParams }) {
  const router = useRouter();
  const pathname = usePathname();
  const search = params.get("search") ?? "";
  const tag = params.get("tag");
  const category = params.get("category");
  const page = Math.max(1, parseInt(params.get("page") ?? "1", 10) || 1);

  const [draft, setDraft] = useState(search);
  const [filtersOpen, setFiltersOpen] = useState(!!tag);
  useEffect(() => setDraft(search), [search]);

  const update = (next: Record<string, string | null>, scroll = false) => {
    const q = new URLSearchParams(params.toString());
    for (const [k, v] of Object.entries(next)) {
      if (v) q.set(k, v);
      else q.delete(k);
    }
    if (!("page" in next)) q.delete("page");
    const qs = q.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ""}${scroll ? "#blog-posts" : ""}`, { scroll: false });
    if (scroll) document.getElementById("blog-posts")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (draft === search) return;
    const t = setTimeout(() => update({ search: draft.trim() || null }), 350);
    return () => clearTimeout(t);
  }, [draft]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    const t = tag?.toLowerCase();
    const cat = category ? categoryLabel(category)?.toLowerCase() : null;
    return blogPosts.filter((p) => {
      const hay = `${p.title} ${p.excerpt} ${p.category}`.toLowerCase();
      return (!q || hay.includes(q)) && (!t || hay.includes(t)) && (!cat || p.category.toLowerCase() === cat);
    });
  }, [search, tag, category]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pages);
  const shown = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  const first = Math.max(1, current - 2);
  const pageNumbers = Array.from({ length: Math.min(pages, current + 2) - first + 1 }, (_, i) => first + i);
  const activeCount = (tag ? 1 : 0) + (category ? 1 : 0);

  return (
    <>
      <section className="container max-w-6xl mx-auto px-4 mb-12">
        <div className="w-full">
          <div className="flex items-center gap-3">
            <form className="relative flex-1" onSubmit={(e) => (e.preventDefault(), update({ search: draft.trim() || null }))}>
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8D8D8D] dark:text-neutral-400" aria-hidden="true" />
              <input
                type="search"
                className="flex rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-[#1E1E1E] transition-colors dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-neutral-300 dark:hover:border-neutral-700 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#8D8D8D] dark:placeholder:text-neutral-500 focus-visible:outline-none focus-visible:border-neutral-300 focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-0 dark:focus-visible:border-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 w-full pl-11 h-11"
                placeholder="Search articles..."
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
              />
            </form>
            <button onClick={() => setFiltersOpen((o) => !o)} aria-expanded={filtersOpen} className={`${FILTERS_BTN} ${filtersOpen ? "bg-neutral-50 dark:bg-neutral-800" : "bg-white dark:bg-neutral-900"}`}>
              <SlidersIcon className="h-4 w-4" aria-hidden="true" />
              Filters
              {activeCount > 0 && (
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-(--ink) text-[10px] font-semibold tabular-nums text-white dark:bg-white dark:text-(--ink)">{activeCount}</span>
              )}
            </button>
          </div>
          {activeCount > 0 && (
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">Active</span>
              {category && (
                <button onClick={() => update({ category: null })} className={ACTIVE_CHIP}>
                  {categoryLabel(category) ?? category}
                  <XBoldIcon className="h-3 w-3" aria-hidden="true" />
                </button>
              )}
              {tag && (
                <button onClick={() => update({ tag: null })} className={ACTIVE_CHIP}>
                  #{tag}
                  <XBoldIcon className="h-3 w-3" aria-hidden="true" />
                </button>
              )}
            </div>
          )}
          {filtersOpen && (
            <div className="overflow-hidden" style={{ height: "auto" }}>
              <div className="pt-6 space-y-6">
                <div>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {blogTags.map((t) => {
                      const on = tag?.toLowerCase() === t.toLowerCase();
                      return (
                        <button key={t} onClick={() => update({ tag: on ? null : t })} className={`${TAG_BASE} ${on ? TAG_ON : TAG_OFF}`}>
                          #{t}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="container max-w-6xl mx-auto px-4 pb-24" id="blog-posts">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="mb-2 font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">No posts found</p>
            <p className="text-sm text-[#8D8D8D] dark:text-neutral-400">Try different filters or browse all posts</p>
          </div>
        ) : (
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#8D8D8D] dark:text-neutral-400">
                Showing{" "}
                <span className="font-medium tabular-nums text-[#1E1E1E] dark:text-neutral-100">
                  {(current - 1) * PER_PAGE + 1}-{(current - 1) * PER_PAGE + shown.length}
                </span>{" "}
                of <span className="font-medium tabular-nums text-[#1E1E1E] dark:text-neutral-100">{filtered.length}</span> articles
              </p>
              <div className="flex items-center gap-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
              {shown.map((p) => (
                <BlogPostCard key={p.slug} post={p} />
              ))}
            </div>
            {pages > 1 && (
              <div className="flex items-center justify-between border-t border-neutral-200 pt-8 dark:border-neutral-800">
                <div className="text-sm text-[#8D8D8D] dark:text-neutral-400">
                  Page <span className="font-medium tabular-nums text-[#1E1E1E] dark:text-neutral-100">{current}</span> of{" "}
                  <span className="font-medium tabular-nums text-[#1E1E1E] dark:text-neutral-100">{pages}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {current > 1 && (
                    <button onClick={() => update({ page: String(current - 1) }, true)} className={PAGE_NAV}>
                      <CaretLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      Previous
                    </button>
                  )}
                  {pageNumbers.map((n) => (
                    <button key={n} onClick={() => update({ page: n === 1 ? null : String(n) }, true)} aria-current={n === current ? "page" : undefined} className={`${PAGE_NUM} ${n === current ? PAGE_ON : PAGE_OFF}`}>
                      {n}
                    </button>
                  ))}
                  {current < pages && (
                    <button onClick={() => update({ page: String(current + 1) }, true)} className={PAGE_NAV}>
                      Next
                      <CaretRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
}
