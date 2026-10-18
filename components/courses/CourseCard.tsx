"use client";

import SmartLink from "@/components/ui/SmartLink";
import type { Course } from "@/lib/data/courses";
import { useCart } from "@/components/cart/CartContext";

const pad = (n: number) => String(n).padStart(2, "0");

export default function CourseCard({ course, index }: { course: Course; index: number }) {
  const { add } = useCart();
  return (
    <article className="group rounded-2xl p-px transition-shadow duration-300 bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] sm:rounded-[1.75rem] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] dark:hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
      <div className="aspect-[4/5] relative overflow-hidden rounded-[calc(1rem-1px)] bg-neutral-900 sm:rounded-[calc(1.75rem-1px)]">
        <img alt={course.title} loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] brightness-[1.8] contrast-[0.8]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src={course.image} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)]">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
            <span className="tabular-nums">
    {pad(index + 1)}
    </span>
            <span className="h-px w-4 bg-white/30" />
            <span className="truncate">
    {course.category}
    </span>
            <span className="ml-auto shrink-0 capitalize">
    {course.level}
    </span>
          </div>
          <SmartLink className="mt-2 block before:absolute before:inset-0 before:content-[''] focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] dark:focus-visible:outline-neutral-300" href={course.enrollHref}>
            <h3 className="line-clamp-2 font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-white [text-shadow:0_1px_2px_rgb(var(--ink-rgb)/0.45),0_2px_12px_rgb(var(--ink-rgb)/0.5)] lg:text-xl">
    {course.title}
    </h3>
          </SmartLink>
          <div className="mt-3 flex items-center gap-3.5 text-[13px] tabular-nums text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z" />
              </svg>
    {course.lessons} lessons
    </span>
            <span className="inline-flex items-center gap-1.5">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
              </svg>
    {course.hours}h
    </span>
          </div>
          <div className="relative z-10 mt-4 flex items-center justify-between gap-3 border-t border-white/15 pt-4">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[22px] font-semibold leading-none tabular-nums tracking-[-0.02em] text-white">
    ${course.price}
    </span>
              <span className="text-[12px] leading-none tabular-nums text-white/50 line-through">
    ${course.originalPrice}
    </span>
            </div>
            <div className="flex items-center gap-1.5">
              <button type="button" className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-(--ink)" aria-label="Add to cart" onClick={() => add(course.slug)}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z" />
                </svg>
              </button>
              <SmartLink className="group/cta inline-flex h-9 items-center justify-center gap-1 rounded-full bg-white px-4 text-xs font-medium text-(--ink) transition-all duration-200 hover:-translate-y-px hover:bg-neutral-100 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] dark:focus-visible:outline-neutral-300" href={course.enrollHref}>
                Enroll now
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3 w-3 transition-transform group-hover/cta:translate-x-0.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
              </SmartLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
