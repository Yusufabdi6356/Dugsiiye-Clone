"use client";

import { useRef } from "react";
import { useCart } from "@/components/cart/CartContext";
import { featuredCourse } from "@/lib/data/courses";

export default function FeaturedCoursesSection() {
  const { add } = useCart();
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector<HTMLElement>("[data-carousel-item]");
    if (el && card) el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: "smooth" });
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 mb-20 lg:mb-24">
      <div>
        <div className="mb-8" data-reveal="up">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 mb-3 block">
            Featured
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50">
            Handpicked by our team.
          </h2>
        </div>
        <div data-reveal="up-sm">
          <div data-reveal="up-lg">
            <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200/60 bg-white shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:border-neutral-800 dark:bg-neutral-900">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-0">
                <a className="relative block group" href="/course/build-llm-apps-rag-agents-somali">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F4F4F2] lg:aspect-auto lg:h-full dark:bg-neutral-800">
                    <img alt="AI Engineering Masterclass: Build LLM Apps with RAG & Agents" decoding="async" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/s01-ai-engineering-masterclass.webp" />
                    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 via-black/35 to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md px-3 py-1.5">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Z" />
                        </svg>
                        Featured
                      </span>
                    </div>
                  </div>
                </a>
                <div className="p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 capitalize">
                      advanced
                    </span>
                    <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 capitalize">
                      web development
                    </span>
                  </div>
                  <a className="block group" href="/course/build-llm-apps-rag-agents-somali">
                    <h2 className="mb-3 break-words font-display text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#1E1E1E] sm:mb-4 sm:text-3xl lg:text-[2rem] dark:text-neutral-50">
                      AI Engineering Masterclass: Build LLM Apps with RAG & Agents
                    </h2>
                  </a>
                  <p className="mb-5 line-clamp-3 text-base leading-6 text-[#8D8D8D] sm:mb-6 dark:text-neutral-400">
                    An AI engineering masterclass for Somali speakers: build a chat app, an AI image editor, a chat-with-PDF RAG system, and a multi-agent system with the AI SDK, Pinecone, and Inngest. For developers who already build apps.
                  </p>
                  <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-[#8D8D8D] sm:mb-7 sm:gap-5 sm:text-sm dark:text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z" />
                      </svg>
                      <span className="tabular-nums">
                        111
                      </span>
                      {" "}lessons
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                      </svg>
                      <span className="tabular-nums">
                        22h 48m
                      </span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      by{" "}
                      <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Mohamud Osman
                      </span>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 text-[#1E1E1E] dark:text-neutral-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 border-t border-neutral-100 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-6 dark:border-neutral-800">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-2xl font-semibold tabular-nums tracking-[-0.03em] text-[#1E1E1E] sm:text-3xl dark:text-neutral-50">
                          $44
                        </span>
                        <span className="text-sm tabular-nums text-[#8D8D8D] line-through dark:text-neutral-500">
                          $64
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-[#8D8D8D] dark:text-neutral-400">
                        6 months
                      </p>
                    </div>
                    <div className="flex items-stretch gap-2 w-full sm:w-auto">
                      <button onClick={() => add(featuredCourse.slug)} className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 border border-neutral-200 bg-white text-[#1E1E1E] hover:-translate-y-px hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800 disabled:border-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-500 dark:disabled:border-neutral-800 dark:disabled:bg-neutral-800/50 dark:disabled:text-neutral-500 h-11 px-7 flex-1 sm:flex-none">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 mr-1.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z" />
                        </svg>
                        Cart
                      </button>
                      <a className="flex-1 sm:flex-none" href="/course/build-llm-apps-rag-agents-somali">
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm ring-offset-background transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 bg-(--ink) text-white shadow-sm hover:-translate-y-px hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:shadow-none dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500 h-11 px-7 group font-medium w-full">
                          Enroll now
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-0.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              More featured courses
            </h3>
            <div className="flex gap-1.5">
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 active:translate-y-0 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800" aria-label="Previous" onClick={() => scroll(-1)}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
                </svg>
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 active:translate-y-0 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800" aria-label="Next" onClick={() => scroll(1)}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
              </button>
            </div>
          </div>
          <div ref={track} className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 -mx-1 px-1">
            <a data-carousel-item="true" className="group block w-[78%] max-w-[320px] flex-none snap-start text-left sm:w-[300px] rounded-2xl p-px transition-shadow duration-300 bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] sm:rounded-[1.75rem] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] dark:hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] dark:focus-visible:outline-neutral-300" href="/course/agentic-coding-with-claude-code-build-ship-a-real-app">
              <div className="aspect-[4/5] relative overflow-hidden rounded-[calc(1rem-1px)] bg-neutral-900 sm:rounded-[calc(1.75rem-1px)]">
                <img alt="Agentic Coding with Claude Code: Build & Ship a Real App" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] brightness-[1.8] contrast-[0.8]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/agentic-coding-with-cursor-build-ship-a-real-app.webp" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60 block capitalize">
                    intermediate · web development
                  </span>
                  <h4 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-white [text-shadow:0_1px_2px_rgb(var(--ink-rgb)/0.45),0_2px_12px_rgb(var(--ink-rgb)/0.5)]">
                    Agentic Coding with Claude Code: Build & Ship a Real App
                  </h4>
                  <p className="mt-2 flex items-center gap-1 text-xs text-white/70">
                    by{" "}
                    <span className="font-medium text-white">
                      Mohamud Osman
                    </span>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                  </p>
                  <div className="mt-3 flex items-center gap-3 border-t border-white/15 pt-3">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-display text-lg font-semibold tabular-nums tracking-[-0.02em] text-white">
                          $64
                        </span>
                        <span className="text-xs tabular-nums text-white/50 line-through">
                          $91
                        </span>
                      </div>
                      <p className="text-[11px] text-white/60">
                        6 months
                      </p>
                    </div>
                    <span aria-hidden="true" className="ml-auto inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink)">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a data-carousel-item="true" className="group block w-[78%] max-w-[320px] flex-none snap-start text-left sm:w-[300px] rounded-2xl p-px transition-shadow duration-300 bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] sm:rounded-[1.75rem] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] dark:hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] dark:focus-visible:outline-neutral-300" href="/course/react-native-ios-android-somali">
              <div className="aspect-[4/5] relative overflow-hidden rounded-[calc(1rem-1px)] bg-neutral-900 sm:rounded-[calc(1.75rem-1px)]">
                <img alt="React Native: Build iOS & Android Mobile Apps" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] brightness-[1.8] contrast-[0.8]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/react-native-ios-android-somali.webp" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60 block capitalize">
                    intermediate · mobile development
                  </span>
                  <h4 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-white [text-shadow:0_1px_2px_rgb(var(--ink-rgb)/0.45),0_2px_12px_rgb(var(--ink-rgb)/0.5)]">
                    React Native: Build iOS & Android Mobile Apps
                  </h4>
                  <p className="mt-2 flex items-center gap-1 text-xs text-white/70">
                    by{" "}
                    <span className="font-medium text-white">
                      Mohamud Osman
                    </span>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                  </p>
                  <div className="mt-3 flex items-center gap-3 border-t border-white/15 pt-3">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-display text-lg font-semibold tabular-nums tracking-[-0.02em] text-white">
                          $27
                        </span>
                        <span className="text-xs tabular-nums text-white/50 line-through">
                          $39
                        </span>
                      </div>
                      <p className="text-[11px] text-white/60">
                        6 months
                      </p>
                    </div>
                    <span aria-hidden="true" className="ml-auto inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink)">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a data-carousel-item="true" className="group block w-[78%] max-w-[320px] flex-none snap-start text-left sm:w-[300px] rounded-2xl p-px transition-shadow duration-300 bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] sm:rounded-[1.75rem] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] dark:hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E1E1E] dark:focus-visible:outline-neutral-300" href="/course/build-saas-apps-fullstack-somali">
              <div className="aspect-[4/5] relative overflow-hidden rounded-[calc(1rem-1px)] bg-neutral-900 sm:rounded-[calc(1.75rem-1px)]">
                <img alt="SaaS Engineer: Build & Deploy Full-Stack Apps" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] brightness-[1.8] contrast-[0.8]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/covers/cards/build-saas-apps-fullstack-somali.webp" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60 block capitalize">
                    intermediate · web development
                  </span>
                  <h4 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-snug tracking-[-0.02em] text-white [text-shadow:0_1px_2px_rgb(var(--ink-rgb)/0.45),0_2px_12px_rgb(var(--ink-rgb)/0.5)]">
                    SaaS Engineer: Build & Deploy Full-Stack Apps
                  </h4>
                  <p className="mt-2 flex items-center gap-1 text-xs text-white/70">
                    by{" "}
                    <span className="font-medium text-white">
                      Mohamud Osman
                    </span>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                  </p>
                  <div className="mt-3 flex items-center gap-3 border-t border-white/15 pt-3">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-display text-lg font-semibold tabular-nums tracking-[-0.02em] text-white">
                          $27
                        </span>
                        <span className="text-xs tabular-nums text-white/50 line-through">
                          $39
                        </span>
                      </div>
                      <p className="text-[11px] text-white/60">
                        6 months
                      </p>
                    </div>
                    <span aria-hidden="true" className="ml-auto inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink)">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
