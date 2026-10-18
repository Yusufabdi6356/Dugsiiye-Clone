export default function AppsSection() {
  return (
    <section aria-labelledby="ai-apps-heading" className="py-20 md:py-28">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200 mb-5">
              Build With AI Tools
            </span>
            <h2 id="ai-apps-heading" className="font-display font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50 text-4xl md:text-[44px] md:leading-[1.08]">
              Ship 6 real apps, not toy projects.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
              <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                HTML, CSS, Tailwind, JavaScript, React, Node.js, MongoDB, TypeScript & Next.js, taught in Somali across 10 phases.
              </span>
              {" "}Master Cursor and Claude Code agentic workflows and the AI-engineering stack: APIs, RAG, and multi-agent systems.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-neutral-800 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] bg-[#F4F4F2] dark:bg-neutral-900 p-5 sm:p-10 md:p-14">
            <div className="relative">
              <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_24px_60px_-36px_rgb(var(--ink-rgb)/0.45)] dark:border-neutral-800 dark:bg-neutral-950">
                <div className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
                  <span className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  </span>
                  <span className="truncate text-xs font-medium text-[#8D8D8D] dark:text-neutral-400">
                    app/page.tsx
                  </span>
                  <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[11px] font-medium text-[#1E1E1E] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z" />
                    </svg>
                    Cursor · Claude Code
                  </span>
                </div>
                <div className="flex">
                  <div className="hidden w-44 shrink-0 flex-col gap-1 border-r border-neutral-200 p-3 sm:flex dark:border-neutral-800">
                    <span className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] bg-neutral-100 font-medium text-[#1E1E1E] dark:bg-neutral-900 dark:text-neutral-100">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 shrink-0" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H164a4,4,0,0,1,4,4V228a4,4,0,0,0,4,4h28a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Zm-4.19,108.31a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216A61.14,61.14,0,0,1,106,214a8,8,0,1,1,4.3-15.41c4.38,1.2,15,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56,20.56,0,0,1,9-14.95c11.84-8,30.71-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.09,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150.05,179,147.81,196.31ZM88,152.53A8.17,8.17,0,0,1,79.73,160H68v47.73A8.17,8.17,0,0,1,60.53,216,8,8,0,0,1,52,208V160H40.27A8.17,8.17,0,0,1,32,152.53,8,8,0,0,1,40,144H80A8,8,0,0,1,88,152.53Z" />
                      </svg>
                      app/page.tsx
                    </span>
                    <span className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] text-[#8D8D8D] dark:text-neutral-500">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 shrink-0" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H164a4,4,0,0,1,4,4V228a4,4,0,0,0,4,4h28a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Zm-4.19,108.31a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216A61.14,61.14,0,0,1,106,214a8,8,0,1,1,4.3-15.41c4.38,1.2,15,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56,20.56,0,0,1,9-14.95c11.84-8,30.71-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.09,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150.05,179,147.81,196.31ZM88,152.53A8.17,8.17,0,0,1,79.73,160H68v47.73A8.17,8.17,0,0,1,60.53,216,8,8,0,0,1,52,208V160H40.27A8.17,8.17,0,0,1,32,152.53,8,8,0,0,1,40,144H80A8,8,0,0,1,88,152.53Z" />
                      </svg>
                      lib/rag.ts
                    </span>
                    <span className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] text-[#8D8D8D] dark:text-neutral-500">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 shrink-0" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H164a4,4,0,0,1,4,4V228a4,4,0,0,0,4,4h28a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Zm-4.19,108.31a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216A61.14,61.14,0,0,1,106,214a8,8,0,1,1,4.3-15.41c4.38,1.2,15,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56,20.56,0,0,1,9-14.95c11.84-8,30.71-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.09,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150.05,179,147.81,196.31ZM88,152.53A8.17,8.17,0,0,1,79.73,160H68v47.73A8.17,8.17,0,0,1,60.53,216,8,8,0,0,1,52,208V160H40.27A8.17,8.17,0,0,1,32,152.53,8,8,0,0,1,40,144H80A8,8,0,0,1,88,152.53Z" />
                      </svg>
                      lib/agent.ts
                    </span>
                    <span className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] text-[#8D8D8D] dark:text-neutral-500">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 shrink-0" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H164a4,4,0,0,1,4,4V228a4,4,0,0,0,4,4h28a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Zm-4.19,108.31a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216A61.14,61.14,0,0,1,106,214a8,8,0,1,1,4.3-15.41c4.38,1.2,15,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56,20.56,0,0,1,9-14.95c11.84-8,30.71-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.09,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150.05,179,147.81,196.31ZM88,152.53A8.17,8.17,0,0,1,79.73,160H68v47.73A8.17,8.17,0,0,1,60.53,216,8,8,0,0,1,52,208V160H40.27A8.17,8.17,0,0,1,32,152.53,8,8,0,0,1,40,144H80A8,8,0,0,1,88,152.53Z" />
                      </svg>
                      lib/tools.ts
                    </span>
                    <span className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] text-[#8D8D8D] dark:text-neutral-500">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 shrink-0" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H164a4,4,0,0,1,4,4V228a4,4,0,0,0,4,4h28a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Zm-4.19,108.31a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216A61.14,61.14,0,0,1,106,214a8,8,0,1,1,4.3-15.41c4.38,1.2,15,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56,20.56,0,0,1,9-14.95c11.84-8,30.71-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.09,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150.05,179,147.81,196.31ZM88,152.53A8.17,8.17,0,0,1,79.73,160H68v47.73A8.17,8.17,0,0,1,60.53,216,8,8,0,0,1,52,208V160H40.27A8.17,8.17,0,0,1,32,152.53,8,8,0,0,1,40,144H80A8,8,0,0,1,88,152.53Z" />
                      </svg>
                      lib/embeddings.ts
                    </span>
                    <span className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] text-[#8D8D8D] dark:text-neutral-500">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 shrink-0" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H164a4,4,0,0,1,4,4V228a4,4,0,0,0,4,4h28a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Zm-4.19,108.31a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216A61.14,61.14,0,0,1,106,214a8,8,0,1,1,4.3-15.41c4.38,1.2,15,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56,20.56,0,0,1,9-14.95c11.84-8,30.71-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.09,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150.05,179,147.81,196.31ZM88,152.53A8.17,8.17,0,0,1,79.73,160H68v47.73A8.17,8.17,0,0,1,60.53,216,8,8,0,0,1,52,208V160H40.27A8.17,8.17,0,0,1,32,152.53,8,8,0,0,1,40,144H80A8,8,0,0,1,88,152.53Z" />
                      </svg>
                      api/chat/route.ts
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 py-4 pr-4 pl-2 sm:py-6 sm:pr-6" aria-hidden="true">
                    <div className="flex h-7 items-center gap-2 rounded-md pl-2">
                      <span className="w-5 shrink-0 text-right font-mono text-[10px] leading-none text-neutral-300 dark:text-neutral-700">
                        1
                      </span>
                      <span className="flex flex-1 items-center gap-2">
                        <span className="h-2 rounded-full w-16 bg-neutral-200 dark:bg-neutral-800" />
                        <span className="h-2 rounded-full w-28 bg-neutral-200 dark:bg-neutral-800" />
                      </span>
                    </div>
                    <div className="flex h-7 items-center gap-2 rounded-md pl-2">
                      <span className="w-5 shrink-0 text-right font-mono text-[10px] leading-none text-neutral-300 dark:text-neutral-700">
                        2
                      </span>
                      <span className="flex flex-1 items-center gap-2">
                        <span className="h-2 rounded-full w-20 bg-neutral-200 dark:bg-neutral-800" />
                        <span className="h-2 rounded-full w-36 bg-neutral-200 dark:bg-neutral-800" />
                      </span>
                    </div>
                    <div className="flex h-7 items-center gap-2 rounded-md pl-2">
                      <span className="w-5 shrink-0 text-right font-mono text-[10px] leading-none text-neutral-300 dark:text-neutral-700">
                        3
                      </span>
                      <span className="flex flex-1 items-center gap-2" />
                    </div>
                    <div className="flex h-7 items-center gap-2 rounded-md pl-2">
                      <span className="w-5 shrink-0 text-right font-mono text-[10px] leading-none text-neutral-300 dark:text-neutral-700">
                        4
                      </span>
                      <span className="flex flex-1 items-center gap-2">
                        <span className="h-2 rounded-full w-24 bg-neutral-200 dark:bg-neutral-800" />
                        <span className="h-2 rounded-full w-16 bg-neutral-200 dark:bg-neutral-800" />
                        <span className="h-2 rounded-full w-10 bg-neutral-200 dark:bg-neutral-800" />
                      </span>
                    </div>
                    <div className="flex h-7 items-center gap-2 rounded-md pl-2">
                      <span className="w-5 shrink-0 text-right font-mono text-[10px] leading-none text-neutral-300 dark:text-neutral-700">
                        5
                      </span>
                      <span className="flex flex-1 items-center gap-2 ml-4">
                        <span className="h-2 rounded-full w-32 bg-neutral-200 dark:bg-neutral-800" />
                        <span className="h-2 rounded-full w-20 bg-neutral-200 dark:bg-neutral-800" />
                      </span>
                    </div>
                    <div className="flex h-7 items-center gap-2 rounded-md pl-2 bg-neutral-100 dark:bg-neutral-800/70">
                      <span className="w-5 shrink-0 text-right font-mono text-[10px] leading-none text-neutral-300 dark:text-neutral-700">
                        6
                      </span>
                      <span className="flex flex-1 items-center gap-2 ml-8">
                        <span className="h-2 rounded-full w-28 bg-neutral-500/80 dark:bg-neutral-400/80" />
                        <span className="h-2 rounded-full w-40 bg-neutral-200 dark:bg-neutral-800" />
                      </span>
                    </div>
                    <div className="flex h-7 items-center gap-2 rounded-md pl-2">
                      <span className="w-5 shrink-0 text-right font-mono text-[10px] leading-none text-neutral-300 dark:text-neutral-700">
                        7
                      </span>
                      <span className="flex flex-1 items-center gap-2 ml-8">
                        <span className="h-2 rounded-full w-20 bg-neutral-200 dark:bg-neutral-800" />
                        <span className="h-2 rounded-full w-14 bg-neutral-200 dark:bg-neutral-800" />
                      </span>
                    </div>
                    <div className="flex h-7 items-center gap-2 rounded-md pl-2">
                      <span className="w-5 shrink-0 text-right font-mono text-[10px] leading-none text-neutral-300 dark:text-neutral-700">
                        8
                      </span>
                      <span className="flex flex-1 items-center gap-2 ml-4">
                        <span className="h-2 rounded-full w-24 bg-neutral-200 dark:bg-neutral-800" />
                      </span>
                    </div>
                    <div className="flex h-7 items-center gap-2 rounded-md pl-2">
                      <span className="w-5 shrink-0 text-right font-mono text-[10px] leading-none text-neutral-300 dark:text-neutral-700">
                        9
                      </span>
                      <span className="flex flex-1 items-center gap-2">
                        <span className="h-2 rounded-full w-12 bg-neutral-200 dark:bg-neutral-800" />
                      </span>
                    </div>
                    <div className="flex h-7 items-center gap-2 rounded-md pl-2">
                      <span className="w-5 shrink-0 text-right font-mono text-[10px] leading-none text-neutral-300 dark:text-neutral-700">
                        10
                      </span>
                      <span className="flex flex-1 items-center gap-2" />
                    </div>
                    <div className="flex h-7 items-center gap-2 rounded-md pl-2">
                      <span className="w-5 shrink-0 text-right font-mono text-[10px] leading-none text-neutral-300 dark:text-neutral-700">
                        11
                      </span>
                      <span className="flex flex-1 items-center gap-2">
                        <span className="h-2 rounded-full w-28 bg-neutral-200 dark:bg-neutral-800" />
                        <span className="h-2 rounded-full w-24 bg-neutral-200 dark:bg-neutral-800" />
                      </span>
                    </div>
                    <div className="flex h-7 items-center gap-2 rounded-md pl-2">
                      <span className="w-5 shrink-0 text-right font-mono text-[10px] leading-none text-neutral-300 dark:text-neutral-700">
                        12
                      </span>
                      <span className="flex flex-1 items-center gap-2 ml-4">
                        <span className="h-2 rounded-full w-36 bg-neutral-200 dark:bg-neutral-800" />
                        <span className="h-2 rounded-full w-16 bg-neutral-200 dark:bg-neutral-800" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            Dugsiiye waxa kaliya oon ku arkay waxa weeye inaad si dhab ah oo kala danbeyn leh oo isla xisaabtan leh aan wax ugu bartay.
          </blockquote>
          <figcaption className="font-caveat-hand mt-3 text-lg text-neutral-500 dark:text-neutral-400">
            Ayaan Jaamac, Mentorship Program Student
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
