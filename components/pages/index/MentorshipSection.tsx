export default function MentorshipSection() {
  return (
    <section aria-labelledby="mentorship-heading" className="py-20 md:py-28">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200 mb-5">
              Get Live Mentorship
            </span>
            <h2 id="mentorship-heading" className="font-display font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50 text-4xl md:text-[44px] md:leading-[1.08]">
              Get job-ready.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
              <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                Weekly sessions with Mohamud Osman. Code reviews, Q&A, and guidance, all in Somali.
              </span>
              {" "}When you start applying, we back your search: portfolio reviews, CV feedback, interview practice, and career guidance. The offer is yours to earn. We make sure you walk in prepared.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-neutral-800 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] bg-[#F4F4F2] dark:bg-neutral-900 p-5 pb-12 sm:p-10 sm:pb-14 md:p-14 md:pb-16">
            <div className="relative">
              <div className="relative mx-auto max-w-2xl">
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_24px_60px_-36px_rgb(var(--ink-rgb)/0.45)] sm:p-5 dark:border-neutral-800 dark:bg-neutral-950">
                  <div className="mb-4 flex items-center gap-2 border-b border-neutral-200 pb-3 dark:border-neutral-800">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z" />
                    </svg>
                    <span className="text-sm font-medium text-[#1E1E1E] dark:text-neutral-100">
                      Leaderboard
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2" aria-hidden="true">
                    <li className="flex items-center gap-3 rounded-xl border px-3 py-2.5 sm:gap-4 border-neutral-200/70 bg-white dark:border-neutral-800 dark:bg-neutral-900/40">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-[11px] font-semibold bg-neutral-100 text-[#8D8D8D] dark:bg-neutral-800 dark:text-neutral-400">
                        01
                      </span>
                      <span className="h-8 w-8 shrink-0 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                      <span className="h-2.5 rounded-full w-28 bg-neutral-200 dark:bg-neutral-800" />
                      <span className="ml-auto shrink-0 text-xs font-medium tabular-nums text-[#8D8D8D] dark:text-neutral-500">
                        3,120 XP
                      </span>
                    </li>
                    <li className="flex items-center gap-3 rounded-xl border px-3 py-2.5 sm:gap-4 border-neutral-200/70 bg-white dark:border-neutral-800 dark:bg-neutral-900/40">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-[11px] font-semibold bg-neutral-100 text-[#8D8D8D] dark:bg-neutral-800 dark:text-neutral-400">
                        02
                      </span>
                      <span className="h-8 w-8 shrink-0 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                      <span className="h-2.5 rounded-full w-36 bg-neutral-200 dark:bg-neutral-800" />
                      <span className="ml-auto shrink-0 text-xs font-medium tabular-nums text-[#8D8D8D] dark:text-neutral-500">
                        2,780 XP
                      </span>
                    </li>
                    <li className="flex items-center gap-3 rounded-xl border px-3 py-2.5 sm:gap-4 border-neutral-300 bg-neutral-100 dark:border-neutral-600/60 dark:bg-neutral-800">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-[11px] font-semibold bg-(--ink) text-white dark:bg-white dark:text-(--ink)">
                        03
                      </span>
                      <span className="h-8 w-8 shrink-0 rounded-full bg-neutral-400/60 dark:bg-neutral-500/60" />
                      <span className="h-2.5 rounded-full w-24 bg-neutral-400/70 dark:bg-neutral-500/70" />
                      <span className="ml-auto shrink-0 text-xs font-medium tabular-nums text-[#1E1E1E] dark:text-neutral-100">
                        2,450 XP
                      </span>
                    </li>
                    <li className="flex items-center gap-3 rounded-xl border px-3 py-2.5 sm:gap-4 border-neutral-200/70 bg-white dark:border-neutral-800 dark:bg-neutral-900/40">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-[11px] font-semibold bg-neutral-100 text-[#8D8D8D] dark:bg-neutral-800 dark:text-neutral-400">
                        04
                      </span>
                      <span className="h-8 w-8 shrink-0 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                      <span className="h-2.5 rounded-full w-32 bg-neutral-200 dark:bg-neutral-800" />
                      <span className="ml-auto shrink-0 text-xs font-medium tabular-nums text-[#8D8D8D] dark:text-neutral-500">
                        2,110 XP
                      </span>
                    </li>
                    <li className="flex items-center gap-3 rounded-xl border px-3 py-2.5 sm:gap-4 border-neutral-200/70 bg-white dark:border-neutral-800 dark:bg-neutral-900/40">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-[11px] font-semibold bg-neutral-100 text-[#8D8D8D] dark:bg-neutral-800 dark:text-neutral-400">
                        05
                      </span>
                      <span className="h-8 w-8 shrink-0 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                      <span className="h-2.5 rounded-full w-20 bg-neutral-200 dark:bg-neutral-800" />
                      <span className="ml-auto shrink-0 text-xs font-medium tabular-nums text-[#8D8D8D] dark:text-neutral-500">
                        1,940 XP
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_18px_40px_-24px_rgb(var(--ink-rgb)/0.4)] sm:absolute sm:-right-2 sm:-bottom-6 sm:mt-0 sm:w-64 sm:-rotate-2 dark:border-neutral-800 dark:bg-neutral-900">
                  <span className="inline-flex shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200 h-9 w-9">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M192,72V184a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V72A16,16,0,0,1,32,56H176A16,16,0,0,1,192,72Zm58,.25a8.23,8.23,0,0,0-6.63,1.22L209.78,95.86A4,4,0,0,0,208,99.19v57.62a4,4,0,0,0,1.78,3.33l33.78,22.52a8,8,0,0,0,8.58.19,8.33,8.33,0,0,0,3.86-7.17V80A8,8,0,0,0,250,72.25Z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-[#1E1E1E] dark:text-neutral-100">
                      Weekly session starting soon
                    </span>
                    <span className="block text-xs text-[#8D8D8D] dark:text-neutral-400">
                      Live with Mohamud Osman
                    </span>
                  </span>
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
            Dugsiiye waa madal waxbarasho oo casri ah oo bixisa koorsooyin sare iyo hagid. Macallimiinta khubaro ah ayaa ka dhigaya meesha ugu habboon ee lagu hormarin karo xirfadaha casriga.
          </blockquote>
          <figcaption className="font-caveat-hand mt-3 text-lg text-neutral-500 dark:text-neutral-400">
            Faarax Cabdulaahi Cali, Mentorship Program Student
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
