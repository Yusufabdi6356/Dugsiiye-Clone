"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, LEVELS, courses } from "@/lib/data/courses";
import Select from "@/components/ui/Select";
import { MagnifyingGlassIcon, StackIcon } from "@/components/ui/icons";
import CourseCard from "./CourseCard";

const TRIGGER =
  "flex items-center justify-between border px-4 py-2 text-sm text-[#1E1E1E] transition-colors dark:text-neutral-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-neutral-300 dark:hover:border-neutral-700 focus:outline-none focus:border-neutral-300 focus:ring-2 focus:ring-[#1E1E1E] dark:focus:ring-0 dark:focus:border-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 h-11 w-full rounded-xl border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900";
const CATEGORY_OPTIONS = [{ value: "all", label: "All Categories" }, ...CATEGORIES.map((c) => ({ value: c, label: c }))];
const LEVEL_OPTIONS = [{ value: "all", label: "All Levels" }, ...LEVELS.map((l) => ({ value: l, label: l }))];

export default function CourseCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter(
      (c) =>
        (category === "all" || c.category.toLowerCase() === category.toLowerCase()) &&
        (level === "all" || c.level.toLowerCase() === level.toLowerCase()) &&
        (!q || c.title.toLowerCase().includes(q)),
    );
  }, [query, category, level]);

  return (
    <div className="container max-w-6xl mx-auto px-4 pb-24">
      <div className="mb-10">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50">{query.trim() ? "Search results" : "Explore all courses"}</h2>
            <p className="mt-1 text-sm text-[#8D8D8D] dark:text-neutral-400">
              <span className="tabular-nums">{list.length}</span> courses available
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8D8D8D] dark:text-neutral-400" />
            <input
              className="flex w-full border px-4 py-2 text-sm text-[#1E1E1E] transition-colors dark:text-neutral-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-neutral-300 dark:hover:border-neutral-700 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#8D8D8D] dark:placeholder:text-neutral-500 focus-visible:outline-none focus-visible:border-neutral-300 focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-0 dark:focus-visible:border-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 h-11 rounded-xl border-neutral-200 bg-white pl-11 dark:border-neutral-800 dark:bg-neutral-900"
              placeholder="Search courses..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <Select value={category} options={CATEGORY_OPTIONS} onChange={setCategory} triggerClassName={`${TRIGGER} sm:w-48`} ariaLabel="Category" />
          <Select value={level} options={LEVEL_OPTIONS} onChange={setLevel} triggerClassName={`${TRIGGER} sm:w-40`} ariaLabel="Level" />
        </div>
      </div>
      {list.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {list.map((c) => (
            <div key={c.slug} data-reveal="up">
              <CourseCard course={c} index={courses.indexOf(c)} />
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-neutral-200/60 bg-white shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:border-neutral-800 dark:bg-neutral-900 py-20 text-center">
          <span className="mx-auto mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200">
            <StackIcon className="h-5 w-5" />
          </span>
          <h3 className="mb-2 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">No courses found</h3>
          <p className="text-sm text-[#8D8D8D] dark:text-neutral-400">Try adjusting your filters or search</p>
        </div>
      )}
    </div>
  );
}
