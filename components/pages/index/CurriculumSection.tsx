import Link from "next/link";
import CurriculumButton from "@/components/home/CurriculumButton";

export default function CurriculumSection() {
  return (
    <section id="curriculum" aria-labelledby="roadmap-heading" className="py-20 md:py-28">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200 mb-5">
              Your 32-Week Roadmap
            </span>
            <h2 id="roadmap-heading" className="font-display font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50 text-4xl md:text-[44px] md:leading-[1.08]">
              10 phases. Zero to AI Engineer.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
              <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                723 lessons across 128+ hours. Every phase builds on the last.
              </span>
              {" "}By week 32, you'll have shipped 6 real apps, including AI chat, RAG, and multi-agent systems.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-16">
          <ol aria-label="Program phases" className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            <li className="group relative">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1rem-1px)] bg-neutral-900 sm:rounded-[calc(1.75rem-1px)]">
                  <img alt="HTML, CSS, Tailwind & GitHub: Ship Your First Website" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/html-css-tailwind-github-ship-your-first-website.webp" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
                  <span aria-hidden="true" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.92)" }} className="absolute left-3.5 top-3 font-display text-3xl font-semibold leading-none tracking-[-0.02em] text-transparent sm:left-5 sm:top-4 sm:text-5xl">
                    01
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3.5 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 sm:text-[11px]">
                      beginner
                    </span>
                    <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold leading-snug tracking-[-0.02em] [text-shadow:0_1px_2px_rgb(var(--ink-rgb)/0.45),0_2px_12px_rgb(var(--ink-rgb)/0.5)] sm:mt-1.5 sm:text-lg lg:text-xl text-white">
                      HTML, CSS, Tailwind & GitHub: Ship Your First Website
                    </h3>
                    <div className="mt-2 flex items-center justify-between gap-2 sm:mt-3.5 sm:gap-3">
                      <div className="flex items-center gap-2.5 text-[11px] text-white/70 sm:gap-3.5 sm:text-[13px]">
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          27h
                        </span>
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z" />
                          </svg>
                          189 lessons
                        </span>
                      </div>
                      <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CurriculumButton index={0} label="View curriculum for HTML, CSS, Tailwind & GitHub: Ship Your First Website" className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] dark:focus-visible:outline-neutral-300 sm:rounded-[1.75rem]" />
            </li>
            <li className="group relative">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1rem-1px)] bg-neutral-900 sm:rounded-[calc(1.75rem-1px)]">
                  <img alt="Modern JavaScript: ES6+, DOM & Async" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/modern-javascript-es6-dom-async.webp" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
                  <span aria-hidden="true" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.92)" }} className="absolute left-3.5 top-3 font-display text-3xl font-semibold leading-none tracking-[-0.02em] text-transparent sm:left-5 sm:top-4 sm:text-5xl">
                    02
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3.5 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 sm:text-[11px]">
                      beginner
                    </span>
                    <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold leading-snug tracking-[-0.02em] [text-shadow:0_1px_2px_rgb(var(--ink-rgb)/0.45),0_2px_12px_rgb(var(--ink-rgb)/0.5)] sm:mt-1.5 sm:text-lg lg:text-xl text-white">
                      Modern JavaScript: ES6+, DOM & Async
                    </h3>
                    <div className="mt-2 flex items-center justify-between gap-2 sm:mt-3.5 sm:gap-3">
                      <div className="flex items-center gap-2.5 text-[11px] text-white/70 sm:gap-3.5 sm:text-[13px]">
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          13h
                        </span>
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z" />
                          </svg>
                          119 lessons
                        </span>
                      </div>
                      <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CurriculumButton index={1} label="View curriculum for Modern JavaScript: ES6+, DOM & Async" className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] dark:focus-visible:outline-neutral-300 sm:rounded-[1.75rem]" />
            </li>
            <li className="group relative">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1rem-1px)] bg-neutral-900 sm:rounded-[calc(1.75rem-1px)]">
                  <img alt="React: Components, Hooks & State" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/react-components-hooks-state.webp" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
                  <span aria-hidden="true" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.92)" }} className="absolute left-3.5 top-3 font-display text-3xl font-semibold leading-none tracking-[-0.02em] text-transparent sm:left-5 sm:top-4 sm:text-5xl">
                    03
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3.5 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 sm:text-[11px]">
                      intermediate
                    </span>
                    <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold leading-snug tracking-[-0.02em] [text-shadow:0_1px_2px_rgb(var(--ink-rgb)/0.45),0_2px_12px_rgb(var(--ink-rgb)/0.5)] sm:mt-1.5 sm:text-lg lg:text-xl text-white">
                      React: Components, Hooks & State
                    </h3>
                    <div className="mt-2 flex items-center justify-between gap-2 sm:mt-3.5 sm:gap-3">
                      <div className="flex items-center gap-2.5 text-[11px] text-white/70 sm:gap-3.5 sm:text-[13px]">
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          20h
                        </span>
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z" />
                          </svg>
                          119 lessons
                        </span>
                      </div>
                      <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CurriculumButton index={2} label="View curriculum for React: Components, Hooks & State" className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] dark:focus-visible:outline-neutral-300 sm:rounded-[1.75rem]" />
            </li>
            <li className="group relative">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1rem-1px)] bg-neutral-900 sm:rounded-[calc(1.75rem-1px)]">
                  <img alt="MongoDB & NoSQL Fundamentals" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/mongodb-nosql-fundamentals.webp" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
                  <span aria-hidden="true" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.92)" }} className="absolute left-3.5 top-3 font-display text-3xl font-semibold leading-none tracking-[-0.02em] text-transparent sm:left-5 sm:top-4 sm:text-5xl">
                    04
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3.5 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 sm:text-[11px]">
                      intermediate
                    </span>
                    <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold leading-snug tracking-[-0.02em] [text-shadow:0_1px_2px_rgb(var(--ink-rgb)/0.45),0_2px_12px_rgb(var(--ink-rgb)/0.5)] sm:mt-1.5 sm:text-lg lg:text-xl text-white">
                      MongoDB & NoSQL Fundamentals
                    </h3>
                    <div className="mt-2 flex items-center justify-between gap-2 sm:mt-3.5 sm:gap-3">
                      <div className="flex items-center gap-2.5 text-[11px] text-white/70 sm:gap-3.5 sm:text-[13px]">
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          4h
                        </span>
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z" />
                          </svg>
                          17 lessons
                        </span>
                      </div>
                      <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CurriculumButton index={3} label="View curriculum for MongoDB & NoSQL Fundamentals" className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] dark:focus-visible:outline-neutral-300 sm:rounded-[1.75rem]" />
            </li>
            <li className="group relative">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1rem-1px)] bg-neutral-900 sm:rounded-[calc(1.75rem-1px)]">
                  <img alt="Backend with Node.js, Express & MongoDB" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/backend-with-node-js-express-mongodb.webp" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
                  <span aria-hidden="true" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.92)" }} className="absolute left-3.5 top-3 font-display text-3xl font-semibold leading-none tracking-[-0.02em] text-transparent sm:left-5 sm:top-4 sm:text-5xl">
                    05
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3.5 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 sm:text-[11px]">
                      intermediate
                    </span>
                    <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold leading-snug tracking-[-0.02em] [text-shadow:0_1px_2px_rgb(var(--ink-rgb)/0.45),0_2px_12px_rgb(var(--ink-rgb)/0.5)] sm:mt-1.5 sm:text-lg lg:text-xl text-white">
                      Backend with Node.js, Express & MongoDB
                    </h3>
                    <div className="mt-2 flex items-center justify-between gap-2 sm:mt-3.5 sm:gap-3">
                      <div className="flex items-center gap-2.5 text-[11px] text-white/70 sm:gap-3.5 sm:text-[13px]">
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          10h
                        </span>
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z" />
                          </svg>
                          37 lessons
                        </span>
                      </div>
                      <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CurriculumButton index={4} label="View curriculum for Backend with Node.js, Express & MongoDB" className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] dark:focus-visible:outline-neutral-300 sm:rounded-[1.75rem]" />
            </li>
            <li className="group relative">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1rem-1px)] bg-neutral-900 sm:rounded-[calc(1.75rem-1px)]">
                  <img alt="The Modern Full-Stack MERN Developer" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/the-modern-full-stack-mern-developer.webp" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
                  <span aria-hidden="true" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.92)" }} className="absolute left-3.5 top-3 font-display text-3xl font-semibold leading-none tracking-[-0.02em] text-transparent sm:left-5 sm:top-4 sm:text-5xl">
                    06
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3.5 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 sm:text-[11px]">
                      intermediate
                    </span>
                    <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold leading-snug tracking-[-0.02em] [text-shadow:0_1px_2px_rgb(var(--ink-rgb)/0.45),0_2px_12px_rgb(var(--ink-rgb)/0.5)] sm:mt-1.5 sm:text-lg lg:text-xl text-white">
                      The Modern Full-Stack MERN Developer
                    </h3>
                    <div className="mt-2 flex items-center justify-between gap-2 sm:mt-3.5 sm:gap-3">
                      <div className="flex items-center gap-2.5 text-[11px] text-white/70 sm:gap-3.5 sm:text-[13px]">
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          8h
                        </span>
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z" />
                          </svg>
                          37 lessons
                        </span>
                      </div>
                      <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CurriculumButton index={5} label="View curriculum for The Modern Full-Stack MERN Developer" className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] dark:focus-visible:outline-neutral-300 sm:rounded-[1.75rem]" />
            </li>
            <li className="group relative">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1rem-1px)] bg-neutral-900 sm:rounded-[calc(1.75rem-1px)]">
                  <img alt="TypeScript: Types, Interfaces & Generics" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/typescript-types-interfaces-generics.webp" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
                  <span aria-hidden="true" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.92)" }} className="absolute left-3.5 top-3 font-display text-3xl font-semibold leading-none tracking-[-0.02em] text-transparent sm:left-5 sm:top-4 sm:text-5xl">
                    07
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3.5 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 sm:text-[11px]">
                      intermediate
                    </span>
                    <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold leading-snug tracking-[-0.02em] [text-shadow:0_1px_2px_rgb(var(--ink-rgb)/0.45),0_2px_12px_rgb(var(--ink-rgb)/0.5)] sm:mt-1.5 sm:text-lg lg:text-xl text-white">
                      TypeScript: Types, Interfaces & Generics
                    </h3>
                    <div className="mt-2 flex items-center justify-between gap-2 sm:mt-3.5 sm:gap-3">
                      <div className="flex items-center gap-2.5 text-[11px] text-white/70 sm:gap-3.5 sm:text-[13px]">
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          3h
                        </span>
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z" />
                          </svg>
                          14 lessons
                        </span>
                      </div>
                      <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CurriculumButton index={6} label="View curriculum for TypeScript: Types, Interfaces & Generics" className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] dark:focus-visible:outline-neutral-300 sm:rounded-[1.75rem]" />
            </li>
            <li className="group relative">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1rem-1px)] bg-neutral-900 sm:rounded-[calc(1.75rem-1px)]">
                  <img alt="Next.js Masterclass: Build Full-Stack Apps with App Router" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/nextjs-app-router-fullstack-somali.webp" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
                  <span aria-hidden="true" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.92)" }} className="absolute left-3.5 top-3 font-display text-3xl font-semibold leading-none tracking-[-0.02em] text-transparent sm:left-5 sm:top-4 sm:text-5xl">
                    08
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3.5 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 sm:text-[11px]">
                      intermediate
                    </span>
                    <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold leading-snug tracking-[-0.02em] [text-shadow:0_1px_2px_rgb(var(--ink-rgb)/0.45),0_2px_12px_rgb(var(--ink-rgb)/0.5)] sm:mt-1.5 sm:text-lg lg:text-xl text-white">
                      Next.js Masterclass: Build Full-Stack Apps with App Router
                    </h3>
                    <div className="mt-2 flex items-center justify-between gap-2 sm:mt-3.5 sm:gap-3">
                      <div className="flex items-center gap-2.5 text-[11px] text-white/70 sm:gap-3.5 sm:text-[13px]">
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          7h
                        </span>
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z" />
                          </svg>
                          28 lessons
                        </span>
                      </div>
                      <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CurriculumButton index={7} label="View curriculum for Next.js Masterclass: Build Full-Stack Apps with App Router" className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] dark:focus-visible:outline-neutral-300 sm:rounded-[1.75rem]" />
            </li>
            <li className="group relative">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1rem-1px)] bg-neutral-900 sm:rounded-[calc(1.75rem-1px)]">
                  <img alt="Professional AI Engineer Track" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/professional-ai-engineer-track.webp" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
                  <span aria-hidden="true" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.92)" }} className="absolute left-3.5 top-3 font-display text-3xl font-semibold leading-none tracking-[-0.02em] text-transparent sm:left-5 sm:top-4 sm:text-5xl">
                    09
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3.5 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 sm:text-[11px]">
                      advanced
                    </span>
                    <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold leading-snug tracking-[-0.02em] [text-shadow:0_1px_2px_rgb(var(--ink-rgb)/0.45),0_2px_12px_rgb(var(--ink-rgb)/0.5)] sm:mt-1.5 sm:text-lg lg:text-xl text-white">
                      Professional AI Engineer Track
                    </h3>
                    <div className="mt-2 flex items-center justify-between gap-2 sm:mt-3.5 sm:gap-3">
                      <div className="flex items-center gap-2.5 text-[11px] text-white/70 sm:gap-3.5 sm:text-[13px]">
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          23h
                        </span>
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z" />
                          </svg>
                          110 lessons
                        </span>
                      </div>
                      <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CurriculumButton index={8} label="View curriculum for Professional AI Engineer Track" className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] dark:focus-visible:outline-neutral-300 sm:rounded-[1.75rem]" />
            </li>
            <li className="group relative">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(1rem-1px)] bg-neutral-900 sm:rounded-[calc(1.75rem-1px)]">
                  <img alt="Agentic Coding with Claude Code: Build & Ship a Real App" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/agentic-coding-with-cursor-build-ship-a-real-app.webp" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
                  <span aria-hidden="true" style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.92)" }} className="absolute left-3.5 top-3 font-display text-3xl font-semibold leading-none tracking-[-0.02em] text-transparent sm:left-5 sm:top-4 sm:text-5xl">
                    10
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3.5 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60 sm:text-[11px]">
                      intermediate
                    </span>
                    <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold leading-snug tracking-[-0.02em] [text-shadow:0_1px_2px_rgb(var(--ink-rgb)/0.45),0_2px_12px_rgb(var(--ink-rgb)/0.5)] sm:mt-1.5 sm:text-lg lg:text-xl text-white">
                      Agentic Coding with Claude Code: Build & Ship a Real App
                    </h3>
                    <div className="mt-2 flex items-center justify-between gap-2 sm:mt-3.5 sm:gap-3">
                      <div className="flex items-center gap-2.5 text-[11px] text-white/70 sm:gap-3.5 sm:text-[13px]">
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          13h
                        </span>
                        <span className="inline-flex items-center gap-1 sm:gap-1.5">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z" />
                          </svg>
                          53 lessons
                        </span>
                      </div>
                      <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CurriculumButton index={9} label="View curriculum for Agentic Coding with Claude Code: Build & Ship a Real App" className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] dark:focus-visible:outline-neutral-300 sm:rounded-[1.75rem]" />
            </li>
          </ol>
        </div>
        <figure className="mt-10 md:mt-12">
          <span role="img" aria-label="5 out of 5 stars" className="inline-flex items-center gap-0.5 text-orange-500">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
            </svg>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
            </svg>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
            </svg>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
            </svg>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
            </svg>
          </span>
          <blockquote className="mt-3 max-w-2xl text-base font-medium leading-6 text-[#1E1E1E] dark:text-neutral-100">
            Barnaamijkan wuxuu ii noqday waddo cad oo ii suuragaliyay inaan ogaado halka aan ka bilaabi lahaa barashada full stack software engineering.
          </blockquote>
          <figcaption className="font-caveat-hand mt-3 text-lg text-neutral-500 dark:text-neutral-400">
            Nasro Muse, Lead Mentorship Program
          </figcaption>
        </figure>
        <div className="mt-14 md:mt-20">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-[#1E1E1E] sm:text-3xl dark:text-neutral-50">
              32 weeks. 6 AI apps. One job title.
            </h3>
            <p className="mt-4 text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
              Everything you need to become a Full Stack AI Engineer: 128+ hours, Cursor & Claude Code training, and live mentorship.
            </p>
            <Link className="group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:focus-visible:ring-offset-neutral-950 bg-(--ink) text-white shadow-sm hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 h-[52px] px-7 text-base mt-8" href="/mentorship">
              Start Your 32 Weeks
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
