import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF9] dark:bg-neutral-950">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8 pt-[calc(var(--banner-height,0px)+7rem)] pb-16 md:pt-[calc(var(--banner-height,0px)+9rem)] md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div data-reveal="up-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E1E1E] dark:bg-neutral-100" aria-hidden="true" />
              Enrollment Open
            </span>
          </div>
          <h1 className="mt-7 font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#1E1E1E] sm:text-5xl md:text-[64px] md:leading-[1.1] dark:text-neutral-50" data-reveal="up-lg">
            Become a Full Stack
            <br />
            AI Engineer.
          </h1>
          <p className="mx-auto mt-6 max-w-[40rem] text-base leading-6 text-[#8D8D8D] dark:text-neutral-400" data-reveal="up">
            <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
              10 phases. 32 weeks, about 8 months.
            </span>
            {" "}You'll go from zero to shipping 6 real AI apps, including AI chat, RAG, and multi-agent systems, using Cursor, Claude Code, and the AI tools the industry is hiring for. The only Somali-language program that gets you to Full Stack AI Engineer.
          </p>
          <div className="mx-auto mt-9 flex max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center" data-reveal="up">
            <Link className="group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:focus-visible:ring-offset-neutral-950 bg-(--ink) text-white shadow-sm hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 h-[52px] px-7 text-base w-full sm:w-auto" href="/mentorship#pricing">
              Start Learning Today
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3" data-reveal="fade">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-[#1E1E1E] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 shrink-0 text-[#1E1E1E] dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z" />
              </svg>
              10 Phases
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-[#1E1E1E] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 shrink-0 text-[#1E1E1E] dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z" />
              </svg>
              32 Weeks
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-[#1E1E1E] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 shrink-0 text-[#1E1E1E] dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z" />
              </svg>
              6 AI Apps
            </span>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-4xl md:mt-20" data-reveal="up-lg">
          <div className="rounded-[2rem] p-px shadow-[0_24px_60px_-36px_rgb(var(--ink-rgb)/0.45)] bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)]">
            <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-(--ink)">
              <div role="button" tabIndex={0} aria-label="Play the program intro video" className="group relative aspect-video cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white">
                <img alt="Still from the program intro video: the course roadmap on screen with Mohamud Osman presenting" decoding="async" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/assets/mentorship-intro-poster.jpg" />
                <div aria-hidden="true" className="absolute inset-0 bg-black/20" />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/70 via-black/25 to-transparent" />
                <div aria-hidden="true" className="absolute inset-0 shadow-[inset_0_0_60px_rgb(var(--ink-rgb)/0.2),inset_0_1px_0_rgba(255,255,255,0.08)]" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="relative flex h-11 w-16 items-center justify-center sm:h-14 sm:w-20">
                    <span className="absolute inset-0 rounded-xl bg-[#f03] opacity-60 blur-lg motion-safe:animate-pulse [animation-duration:2.4s]" />
                    <span className="relative flex h-11 w-16 items-center justify-center rounded-xl bg-[#f03] text-white shadow-[0_8px_28px_rgba(255,0,51,0.45)] transition-[transform,background-color] duration-300 ease-out group-hover:scale-110 group-hover:bg-[#ff1f4d] sm:h-14 sm:w-20">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5 sm:h-6 sm:w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                      </svg>
                    </span>
                  </span>
                </div>
                <span className="absolute top-3 right-3 rounded-md bg-black/85 px-2 py-1 text-xs font-semibold tabular-nums text-white shadow-[0_2px_8px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:top-4 sm:right-4 sm:px-2.5 sm:text-sm">
                  5:50
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/70 sm:text-[11px]">
                    Program Intro
                  </span>
                  <p className="mt-1 truncate text-sm font-medium text-white sm:text-base">
                    See how the 32 weeks work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1160px] mx-auto px-5 md:px-8">
        <div className="border-t border-neutral-200 py-14 md:py-20 dark:border-neutral-800">
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:border-neutral-800 dark:bg-neutral-900" data-reveal="up">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5 text-neutral-400 dark:text-neutral-500" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z" />
              </svg>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                AI-Powered Development
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#8D8D8D] dark:text-neutral-400">
                Learn to build with Cursor, Claude Code, and the AI agents top engineers use daily. This isn't theory, it's how the industry works now.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:border-neutral-800 dark:bg-neutral-900" data-reveal="up">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5 text-neutral-400 dark:text-neutral-500" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z" />
              </svg>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                32 Weeks, 6 AI Apps
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#8D8D8D] dark:text-neutral-400">
                Ship a portfolio of deployed projects, including AI chat, RAG, and multi-agent systems. Employers see proof, not promises.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:border-neutral-800 dark:bg-neutral-900" data-reveal="up">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5 text-neutral-400 dark:text-neutral-500" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" />
              </svg>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                Live Mentorship & Career Support
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#8D8D8D] dark:text-neutral-400">
                Weekly sessions with Mohamud Osman, plus code reviews, portfolio guidance, and interview practice. We prepare you for the job market, in Somali.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
