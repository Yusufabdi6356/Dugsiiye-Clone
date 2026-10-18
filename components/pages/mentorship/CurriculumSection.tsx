import Link from "next/link";

export default function CurriculumSection() {
  return (
    <section id="curriculum" aria-labelledby="curriculum-heading" className="relative bg-[#FAFAF9] dark:bg-neutral-950 py-20 md:py-28">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8">
        <div data-reveal="up">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200 mb-5">
              Your 32-Week Roadmap
            </span>
            <h2 id="curriculum-heading" className="font-display font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50 text-4xl md:text-[44px] md:leading-[1.08]">
              10 phases. Zero to AI Engineer.
            </h2>
            <div className="mt-5">
              <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
                <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                  723 lessons across 128+ hours. Every phase builds on the last.
                </span>
                {" "}By week 32, you'll have shipped 6 real apps including AI chat, RAG, and multi-agent systems.
              </p>
            </div>
            <div className="mt-8">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-[#1E1E1E] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 shrink-0 text-[#1E1E1E] dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
                Everything included: no upsells, no extras
              </span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl md:mt-16">
          <div className="group relative flex gap-6 lg:gap-10 cursor-pointer" data-reveal="left">
            <div className="flex shrink-0 flex-col items-center pt-1">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 border-neutral-200 bg-white text-[#1E1E1E] group-hover:border-(--ink) group-hover:bg-(--ink) group-hover:text-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-(--ink)">
                <span className="font-display text-sm font-semibold tabular-nums">
                  01
                </span>
              </div>
              <div className="mt-0 min-h-[2rem] w-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <div className="flex-1 pb-10">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-(--ink) sm:rounded-[calc(1.75rem-1px)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden sm:absolute sm:inset-y-0 sm:right-0 sm:aspect-auto sm:w-[46%]">
                    <img alt="HTML, CSS, Tailwind & GitHub: Ship Your First Website" decoding="async" className="object-cover object-[50%_18%] transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/html-css-tailwind-github-ship-your-first-website.webp" />
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-(--ink) to-transparent sm:hidden" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-0 hidden sm:block bg-[linear-gradient(90deg,var(--ink)_52%,rgb(var(--ink-rgb)/0.55)_60%,rgb(var(--ink-rgb)/0)_70%)]" />
                  <div aria-hidden="true" className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                  <div className="relative -mt-10 p-5 sm:mt-0 sm:flex sm:min-h-[270px] sm:max-w-[60%] sm:flex-col sm:justify-center sm:p-8 lg:p-10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                      beginner
                    </span>
                    <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-snug tracking-[-0.02em] sm:text-xl lg:text-2xl text-white">
                      HTML, CSS, Tailwind & GitHub: Ship Your First Website
                    </h3>
                    <p className="mt-1.5 line-clamp-2 max-w-xl text-sm leading-6 text-white/70">
                      Build and ship your first real website, taught in Af-Soomaali: HTML, CSS, Flexbox, Grid, and Tailwind, then push to GitHub and go live on Vercel. 27 hands-on hours.
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3 sm:mt-4">
                      <div className="flex items-center gap-3.5 text-[13px] text-white/70">
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          27h
                        </span>
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
            </div>
          </div>
          <div className="group relative flex gap-6 lg:gap-10 cursor-pointer" data-reveal="left">
            <div className="flex shrink-0 flex-col items-center pt-1">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 border-neutral-200 bg-white text-[#1E1E1E] group-hover:border-(--ink) group-hover:bg-(--ink) group-hover:text-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-(--ink)">
                <span className="font-display text-sm font-semibold tabular-nums">
                  02
                </span>
              </div>
              <div className="mt-0 min-h-[2rem] w-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <div className="flex-1 pb-10">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-(--ink) sm:rounded-[calc(1.75rem-1px)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden sm:absolute sm:inset-y-0 sm:right-0 sm:aspect-auto sm:w-[46%]">
                    <img alt="Modern JavaScript: ES6+, DOM & Async" decoding="async" className="object-cover object-[50%_18%] transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/modern-javascript-es6-dom-async.webp" />
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-(--ink) to-transparent sm:hidden" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-0 hidden sm:block bg-[linear-gradient(90deg,var(--ink)_52%,rgb(var(--ink-rgb)/0.55)_60%,rgb(var(--ink-rgb)/0)_70%)]" />
                  <div aria-hidden="true" className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                  <div className="relative -mt-10 p-5 sm:mt-0 sm:flex sm:min-h-[270px] sm:max-w-[60%] sm:flex-col sm:justify-center sm:p-8 lg:p-10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                      beginner
                    </span>
                    <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-snug tracking-[-0.02em] sm:text-xl lg:text-2xl text-white">
                      Modern JavaScript: ES6+, DOM & Async
                    </h3>
                    <p className="mt-1.5 line-clamp-2 max-w-xl text-sm leading-6 text-white/70">
                      Move from static pages to real programming in this Somali-language JavaScript course: functions, arrays, ES6+, async/await, fetch, and DOM manipulation, with 36 hands-on exercises.
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3 sm:mt-4">
                      <div className="flex items-center gap-3.5 text-[13px] text-white/70">
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          13h
                        </span>
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
            </div>
          </div>
          <div className="group relative flex gap-6 lg:gap-10 cursor-pointer" data-reveal="left">
            <div className="flex shrink-0 flex-col items-center pt-1">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 border-neutral-200 bg-white text-[#1E1E1E] group-hover:border-(--ink) group-hover:bg-(--ink) group-hover:text-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-(--ink)">
                <span className="font-display text-sm font-semibold tabular-nums">
                  03
                </span>
              </div>
              <div className="mt-0 min-h-[2rem] w-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <div className="flex-1 pb-10">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-(--ink) sm:rounded-[calc(1.75rem-1px)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden sm:absolute sm:inset-y-0 sm:right-0 sm:aspect-auto sm:w-[46%]">
                    <img alt="React: Components, Hooks & State" decoding="async" className="object-cover object-[50%_18%] transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/react-components-hooks-state.webp" />
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-(--ink) to-transparent sm:hidden" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-0 hidden sm:block bg-[linear-gradient(90deg,var(--ink)_52%,rgb(var(--ink-rgb)/0.55)_60%,rgb(var(--ink-rgb)/0)_70%)]" />
                  <div aria-hidden="true" className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                  <div className="relative -mt-10 p-5 sm:mt-0 sm:flex sm:min-h-[270px] sm:max-w-[60%] sm:flex-col sm:justify-center sm:p-8 lg:p-10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                      intermediate
                    </span>
                    <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-snug tracking-[-0.02em] sm:text-xl lg:text-2xl text-white">
                      React: Components, Hooks & State
                    </h3>
                    <p className="mt-1.5 line-clamp-2 max-w-xl text-sm leading-6 text-white/70">
                      React for Somali speakers: components, hooks, forms, and routing, practiced through real portfolio apps, from todo lists to a complete recipe collection app.
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3 sm:mt-4">
                      <div className="flex items-center gap-3.5 text-[13px] text-white/70">
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          20h
                        </span>
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
            </div>
          </div>
          <div className="group relative flex gap-6 lg:gap-10 cursor-pointer" data-reveal="left">
            <div className="flex shrink-0 flex-col items-center pt-1">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 border-neutral-200 bg-white text-[#1E1E1E] group-hover:border-(--ink) group-hover:bg-(--ink) group-hover:text-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-(--ink)">
                <span className="font-display text-sm font-semibold tabular-nums">
                  04
                </span>
              </div>
              <div className="mt-0 min-h-[2rem] w-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <div className="flex-1 pb-10">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-(--ink) sm:rounded-[calc(1.75rem-1px)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden sm:absolute sm:inset-y-0 sm:right-0 sm:aspect-auto sm:w-[46%]">
                    <img alt="MongoDB & NoSQL Fundamentals" loading="lazy" decoding="async" className="object-cover object-[50%_18%] transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/mongodb-nosql-fundamentals.webp" />
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-(--ink) to-transparent sm:hidden" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-0 hidden sm:block bg-[linear-gradient(90deg,var(--ink)_52%,rgb(var(--ink-rgb)/0.55)_60%,rgb(var(--ink-rgb)/0)_70%)]" />
                  <div aria-hidden="true" className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                  <div className="relative -mt-10 p-5 sm:mt-0 sm:flex sm:min-h-[270px] sm:max-w-[60%] sm:flex-col sm:justify-center sm:p-8 lg:p-10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                      intermediate
                    </span>
                    <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-snug tracking-[-0.02em] sm:text-xl lg:text-2xl text-white">
                      MongoDB & NoSQL Fundamentals
                    </h3>
                    <p className="mt-1.5 line-clamp-2 max-w-xl text-sm leading-6 text-white/70">
                      Learn MongoDB in Somali: documents, CRUD, queries, the aggregation pipeline, and indexing. The NoSQL foundation you need before building real backends.
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3 sm:mt-4">
                      <div className="flex items-center gap-3.5 text-[13px] text-white/70">
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          4h
                        </span>
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
            </div>
          </div>
          <div className="group relative flex gap-6 lg:gap-10 cursor-pointer" data-reveal="left">
            <div className="flex shrink-0 flex-col items-center pt-1">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 border-neutral-200 bg-white text-[#1E1E1E] group-hover:border-(--ink) group-hover:bg-(--ink) group-hover:text-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-(--ink)">
                <span className="font-display text-sm font-semibold tabular-nums">
                  05
                </span>
              </div>
              <div className="mt-0 min-h-[2rem] w-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <div className="flex-1 pb-10">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-(--ink) sm:rounded-[calc(1.75rem-1px)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden sm:absolute sm:inset-y-0 sm:right-0 sm:aspect-auto sm:w-[46%]">
                    <img alt="Backend with Node.js, Express & MongoDB" loading="lazy" decoding="async" className="object-cover object-[50%_18%] transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/backend-with-node-js-express-mongodb.webp" />
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-(--ink) to-transparent sm:hidden" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-0 hidden sm:block bg-[linear-gradient(90deg,var(--ink)_52%,rgb(var(--ink-rgb)/0.55)_60%,rgb(var(--ink-rgb)/0)_70%)]" />
                  <div aria-hidden="true" className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                  <div className="relative -mt-10 p-5 sm:mt-0 sm:flex sm:min-h-[270px] sm:max-w-[60%] sm:flex-col sm:justify-center sm:p-8 lg:p-10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                      intermediate
                    </span>
                    <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-snug tracking-[-0.02em] sm:text-xl lg:text-2xl text-white">
                      Backend with Node.js, Express & MongoDB
                    </h3>
                    <p className="mt-1.5 line-clamp-2 max-w-xl text-sm leading-6 text-white/70">
                      Backend development in Somali: build a real REST API with Node.js and Express, store data in MongoDB, add JWT auth and role-based access, and deploy it live to Render.
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3 sm:mt-4">
                      <div className="flex items-center gap-3.5 text-[13px] text-white/70">
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          10h
                        </span>
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
            </div>
          </div>
          <div className="group relative flex gap-6 lg:gap-10 cursor-pointer" data-reveal="left">
            <div className="flex shrink-0 flex-col items-center pt-1">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 border-neutral-200 bg-white text-[#1E1E1E] group-hover:border-(--ink) group-hover:bg-(--ink) group-hover:text-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-(--ink)">
                <span className="font-display text-sm font-semibold tabular-nums">
                  06
                </span>
              </div>
              <div className="mt-0 min-h-[2rem] w-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <div className="flex-1 pb-10">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-(--ink) sm:rounded-[calc(1.75rem-1px)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden sm:absolute sm:inset-y-0 sm:right-0 sm:aspect-auto sm:w-[46%]">
                    <img alt="The Modern Full-Stack MERN Developer" loading="lazy" decoding="async" className="object-cover object-[50%_18%] transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/the-modern-full-stack-mern-developer.webp" />
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-(--ink) to-transparent sm:hidden" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-0 hidden sm:block bg-[linear-gradient(90deg,var(--ink)_52%,rgb(var(--ink-rgb)/0.55)_60%,rgb(var(--ink-rgb)/0)_70%)]" />
                  <div aria-hidden="true" className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                  <div className="relative -mt-10 p-5 sm:mt-0 sm:flex sm:min-h-[270px] sm:max-w-[60%] sm:flex-col sm:justify-center sm:p-8 lg:p-10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                      intermediate
                    </span>
                    <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-snug tracking-[-0.02em] sm:text-xl lg:text-2xl text-white">
                      The Modern Full-Stack MERN Developer
                    </h3>
                    <p className="mt-1.5 line-clamp-2 max-w-xl text-sm leading-6 text-white/70">
                      Course-dan waxaad ku baran doontaa sida loo dhiso full-stack web apps casri ah adigoo isticmaalaya MongoDB, Express, React, iyo Node.js — laga bilaabo backend ilaa frontend.
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3 sm:mt-4">
                      <div className="flex items-center gap-3.5 text-[13px] text-white/70">
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          8h
                        </span>
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
            </div>
          </div>
          <div className="group relative flex gap-6 lg:gap-10 cursor-pointer" data-reveal="left">
            <div className="flex shrink-0 flex-col items-center pt-1">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 border-neutral-200 bg-white text-[#1E1E1E] group-hover:border-(--ink) group-hover:bg-(--ink) group-hover:text-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-(--ink)">
                <span className="font-display text-sm font-semibold tabular-nums">
                  07
                </span>
              </div>
              <div className="mt-0 min-h-[2rem] w-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <div className="flex-1 pb-10">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-(--ink) sm:rounded-[calc(1.75rem-1px)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden sm:absolute sm:inset-y-0 sm:right-0 sm:aspect-auto sm:w-[46%]">
                    <img alt="TypeScript: Types, Interfaces & Generics" loading="lazy" decoding="async" className="object-cover object-[50%_18%] transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/typescript-types-interfaces-generics.webp" />
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-(--ink) to-transparent sm:hidden" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-0 hidden sm:block bg-[linear-gradient(90deg,var(--ink)_52%,rgb(var(--ink-rgb)/0.55)_60%,rgb(var(--ink-rgb)/0)_70%)]" />
                  <div aria-hidden="true" className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                  <div className="relative -mt-10 p-5 sm:mt-0 sm:flex sm:min-h-[270px] sm:max-w-[60%] sm:flex-col sm:justify-center sm:p-8 lg:p-10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                      intermediate
                    </span>
                    <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-snug tracking-[-0.02em] sm:text-xl lg:text-2xl text-white">
                      TypeScript: Types, Interfaces & Generics
                    </h3>
                    <p className="mt-1.5 line-clamp-2 max-w-xl text-sm leading-6 text-white/70">
                      Learn TypeScript in Af-Soomaali: types, interfaces, generics, and enums. AI tools like Cursor and Claude Code write TypeScript by default, so reading it is no longer optional.
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3 sm:mt-4">
                      <div className="flex items-center gap-3.5 text-[13px] text-white/70">
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          3h
                        </span>
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
            </div>
          </div>
          <div className="group relative flex gap-6 lg:gap-10 cursor-pointer" data-reveal="left">
            <div className="flex shrink-0 flex-col items-center pt-1">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 border-neutral-200 bg-white text-[#1E1E1E] group-hover:border-(--ink) group-hover:bg-(--ink) group-hover:text-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-(--ink)">
                <span className="font-display text-sm font-semibold tabular-nums">
                  08
                </span>
              </div>
              <div className="mt-0 min-h-[2rem] w-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <div className="flex-1 pb-10">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-(--ink) sm:rounded-[calc(1.75rem-1px)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden sm:absolute sm:inset-y-0 sm:right-0 sm:aspect-auto sm:w-[46%]">
                    <img alt="Next.js Masterclass: Build Full-Stack Apps with App Router" loading="lazy" decoding="async" className="object-cover object-[50%_18%] transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/nextjs-app-router-fullstack-somali.webp" />
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-(--ink) to-transparent sm:hidden" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-0 hidden sm:block bg-[linear-gradient(90deg,var(--ink)_52%,rgb(var(--ink-rgb)/0.55)_60%,rgb(var(--ink-rgb)/0)_70%)]" />
                  <div aria-hidden="true" className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                  <div className="relative -mt-10 p-5 sm:mt-0 sm:flex sm:min-h-[270px] sm:max-w-[60%] sm:flex-col sm:justify-center sm:p-8 lg:p-10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                      intermediate
                    </span>
                    <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-snug tracking-[-0.02em] sm:text-xl lg:text-2xl text-white">
                      Next.js Masterclass: Build Full-Stack Apps with App Router
                    </h3>
                    <p className="mt-1.5 line-clamp-2 max-w-xl text-sm leading-6 text-white/70">
                      Next.js with the App Router, taught in Somali: Server Components, Server Actions, and caching, ending in a full-stack MongoDB app with frontend and backend in one project.
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3 sm:mt-4">
                      <div className="flex items-center gap-3.5 text-[13px] text-white/70">
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          7h
                        </span>
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
            </div>
          </div>
          <div className="group relative flex gap-6 lg:gap-10 cursor-pointer" data-reveal="left">
            <div className="flex shrink-0 flex-col items-center pt-1">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 border-neutral-200 bg-white text-[#1E1E1E] group-hover:border-(--ink) group-hover:bg-(--ink) group-hover:text-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-(--ink)">
                <span className="font-display text-sm font-semibold tabular-nums">
                  09
                </span>
              </div>
              <div className="mt-0 min-h-[2rem] w-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <div className="flex-1 pb-10">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-(--ink) sm:rounded-[calc(1.75rem-1px)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden sm:absolute sm:inset-y-0 sm:right-0 sm:aspect-auto sm:w-[46%]">
                    <img alt="Professional AI Engineer Track" loading="lazy" decoding="async" className="object-cover object-[50%_18%] transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/professional-ai-engineer-track.webp" />
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-(--ink) to-transparent sm:hidden" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-0 hidden sm:block bg-[linear-gradient(90deg,var(--ink)_52%,rgb(var(--ink-rgb)/0.55)_60%,rgb(var(--ink-rgb)/0)_70%)]" />
                  <div aria-hidden="true" className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                  <div className="relative -mt-10 p-5 sm:mt-0 sm:flex sm:min-h-[270px] sm:max-w-[60%] sm:flex-col sm:justify-center sm:p-8 lg:p-10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                      advanced
                    </span>
                    <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-snug tracking-[-0.02em] sm:text-xl lg:text-2xl text-white">
                      Professional AI Engineer Track
                    </h3>
                    <p className="mt-1.5 line-clamp-2 max-w-xl text-sm leading-6 text-white/70">
                      The AI phase of the Somali-language Full Stack AI Engineer mentorship: build an AI chat app, a chat-with-PDF RAG system, and a multi-agent system, with nine reviewed exercises and an open challenge.
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3 sm:mt-4">
                      <div className="flex items-center gap-3.5 text-[13px] text-white/70">
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          23h
                        </span>
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
            </div>
          </div>
          <div className="group relative flex gap-6 lg:gap-10 cursor-pointer" data-reveal="left">
            <div className="flex shrink-0 flex-col items-center pt-1">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 border-neutral-200 bg-white text-[#1E1E1E] group-hover:border-(--ink) group-hover:bg-(--ink) group-hover:text-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:group-hover:border-white dark:group-hover:bg-white dark:group-hover:text-(--ink)">
                <span className="font-display text-sm font-semibold tabular-nums">
                  10
                </span>
              </div>
            </div>
            <div className="flex-1 pb-10">
              <div className="rounded-2xl p-px transition-shadow duration-300 sm:rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] dark:group-hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]">
                <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-(--ink) sm:rounded-[calc(1.75rem-1px)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden sm:absolute sm:inset-y-0 sm:right-0 sm:aspect-auto sm:w-[46%]">
                    <img alt="Agentic Coding with Claude Code: Build & Ship a Real App" loading="lazy" decoding="async" className="object-cover object-[50%_18%] transition-transform duration-700 ease-out brightness-[1.8] contrast-[0.8] group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/agentic-coding-with-cursor-build-ship-a-real-app.webp" />
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-(--ink) to-transparent sm:hidden" />
                  </div>
                  <div aria-hidden="true" className="absolute inset-0 hidden sm:block bg-[linear-gradient(90deg,var(--ink)_52%,rgb(var(--ink-rgb)/0.55)_60%,rgb(var(--ink-rgb)/0)_70%)]" />
                  <div aria-hidden="true" className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                  <div className="relative -mt-10 p-5 sm:mt-0 sm:flex sm:min-h-[270px] sm:max-w-[60%] sm:flex-col sm:justify-center sm:p-8 lg:p-10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                      intermediate
                    </span>
                    <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-snug tracking-[-0.02em] sm:text-xl lg:text-2xl text-white">
                      Agentic Coding with Claude Code: Build & Ship a Real App
                    </h3>
                    <p className="mt-1.5 line-clamp-2 max-w-xl text-sm leading-6 text-white/70">
                      Master Claude Code in Af-Soomaali: the Explore, Plan, Code, Commit workflow, plus CLAUDE.md, skills, subagents, MCP, and worktrees, then build and ship a real app.
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-3 sm:mt-4">
                      <div className="flex items-center gap-3.5 text-[13px] text-white/70">
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                          </svg>
                          13h
                        </span>
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
            </div>
          </div>
        </div>
        <div className="mt-10 text-center md:mt-16" data-reveal="up">
          <Link className="group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:focus-visible:ring-offset-neutral-950 bg-(--ink) text-white shadow-sm hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 h-[52px] px-7 text-base" href="/mentorship#pricing">
            Start Your 32 Weeks
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
