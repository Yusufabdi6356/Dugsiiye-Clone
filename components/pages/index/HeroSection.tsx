import Link from "next/link";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-[#FAFAF9] pt-[calc(var(--banner-height,0px)+7rem)] md:pt-[calc(var(--banner-height,0px)+9rem)] dark:bg-neutral-950">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white py-1.5 pl-2 pr-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <span className="flex -space-x-2">
              <span className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white dark:border-neutral-900">
                <img alt="" loading="lazy" decoding="async" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/testimonials/faarax.webp" />
              </span>
              <span className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white dark:border-neutral-900">
                <img alt="" loading="lazy" decoding="async" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/testimonials/ayan.webp" />
              </span>
              <span className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white dark:border-neutral-900">
                <img alt="" loading="lazy" decoding="async" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/testimonials/mustafa.webp" />
              </span>
              <span className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white dark:border-neutral-900">
                <img alt="" loading="lazy" decoding="async" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/testimonials/nasro.webp" />
              </span>
              <span className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white dark:border-neutral-900">
                <img alt="" loading="lazy" decoding="async" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/testimonials/kalid.webp" />
              </span>
            </span>
            <span className="text-sm text-[#8D8D8D] dark:text-neutral-400">
              Join{" "}
              <span className="font-semibold text-[#1E1E1E] dark:text-neutral-100">
                7,000+
              </span>
              {" "}students learning to build with AI
            </span>
          </div>
          <h1 id="hero-heading" className="mt-7 font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#1E1E1E] sm:text-5xl md:text-[64px] md:leading-[1.1] dark:text-neutral-50">
            Become a Full Stack
            <br />
            AI Engineer.
          </h1>
          <p className="mx-auto mt-6 max-w-[40rem] text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
            Go from zero to shipping 6 real apps in 32 weeks, about 8 months, including AI chat, RAG, and multi-agent systems, using Cursor, Claude Code, and the AI tools the industry is hiring for. All taught in Somali.
          </p>
          <div className="mx-auto mt-9 flex max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
            <Link className="group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:focus-visible:ring-offset-neutral-950 bg-(--ink) text-white shadow-sm hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 h-[52px] px-7 text-base" href="/mentorship">
              Start Your 32 Weeks
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 transition-transform group-hover:translate-x-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </Link>
            <Link className="group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:focus-visible:ring-offset-neutral-950 bg-white text-[#1E1E1E] border border-neutral-200 hover:bg-neutral-50 dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800 h-[52px] px-7 text-base" href="/courses">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40.55,110.58-52,36A8,8,0,0,1,104,164V92a8,8,0,0,1,12.55-6.58l52,36a8,8,0,0,1,0,13.16Z" />
              </svg>
              Explore Courses
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-[#1E1E1E] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 shrink-0 text-[#1E1E1E] dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M220,169.09l-92,53.65L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,169.09Z" />
                <path d="M220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09Z" />
                <path d="M28,86.91l96,56a8,8,0,0,0,8.06,0l96-56a8,8,0,0,0,0-13.82l-96-56a8,8,0,0,0-8.06,0l-96,56a8,8,0,0,0,0,13.82Z" />
              </svg>
              10 Phases
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-[#1E1E1E] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 shrink-0 text-[#1E1E1E] dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,48H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z" />
              </svg>
              32 Weeks
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-[#1E1E1E] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 shrink-0 text-[#1E1E1E] dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48ZM172,96a12,12,0,1,1-12,12A12,12,0,0,1,172,96ZM96,184H80a16,16,0,0,1,0-32H96ZM84,120a12,12,0,1,1,12-12A12,12,0,0,1,84,120Zm60,64H112V152h32Zm32,0H160V152h16a16,16,0,0,1,0,32Z" />
              </svg>
              6 AI Apps
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-[#1E1E1E] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 shrink-0 text-[#1E1E1E] dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z" />
              </svg>
              7,000+ Students
            </span>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-neutral-800 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] bg-[#F4F4F2] dark:bg-neutral-900 mt-14 md:mt-20">
          <div className="relative">
            <div aria-hidden="true" className="relative h-[250px] px-6 py-8 sm:h-[340px] md:h-[350px] md:px-8 lg:h-[440px] xl:h-[500px]">
              <div className="absolute left-1/2 top-4 h-[490px] w-[900px] origin-top -translate-x-1/2 scale-[0.44] sm:top-6 sm:scale-[0.62] md:top-8 md:scale-[0.7] lg:scale-[0.88] xl:scale-100">
                <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_18px_40px_-18px_rgb(var(--ink-rgb)/0.3)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] absolute left-4 top-[70px] z-20 w-[420px] rotate-[-3deg]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                      <span className="h-2 w-2 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                      <span className="h-2 w-2 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                    </div>
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium tracking-wide text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                      Phase 03 · Lesson 12
                    </span>
                  </div>
                  <div className="relative mt-4 flex h-28 items-center justify-center overflow-hidden rounded-xl bg-(--ink)">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-10 w-10 text-white/90" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40.55,110.58-52,36A8,8,0,0,1,104,164V92a8,8,0,0,1,12.55-6.58l52,36a8,8,0,0,1,0,13.16Z" />
                    </svg>
                    <div className="absolute inset-x-3 bottom-2.5 flex items-center gap-2">
                      <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                        <div className="h-full w-[68%] rounded-full bg-white/90" />
                      </div>
                      <span className="text-[9px] font-medium tabular-nums text-white/70">
                        12:40
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 font-display text-sm font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-100">
                    Build an AI Chat App
                  </p>
                  <p className="mt-1 text-[11px] text-neutral-400 dark:text-neutral-500">
                    React · Next.js · Claude API
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 dark:text-neutral-500">
                      <span>
                        Progress
                      </span>
                      <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                        68%
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                      <div className="h-full w-[68%] rounded-full bg-[#1E1E1E] dark:bg-neutral-100" />
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white shadow-[0_18px_40px_-18px_rgb(var(--ink-rgb)/0.3)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] p-4 absolute right-4 top-[30px] z-10 w-[330px] rotate-[2deg]">
                  <div className="rounded-xl border border-neutral-200 px-5 py-6 text-center dark:border-neutral-800">
                    <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-neutral-100 dark:bg-neutral-800">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-6 w-6 text-[#1E1E1E] dark:text-neutral-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
                      </svg>
                    </span>
                    <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                      Certificate
                    </p>
                    <p className="mt-3 font-display text-base font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-100">
                      Amina Yusuf
                    </p>
                    <p className="mt-1 text-[11px] text-neutral-400 dark:text-neutral-500">
                      has completed the program
                    </p>
                    <p className="mt-4 font-display text-sm font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-100">
                      Full Stack AI Engineer
                    </p>
                    <p className="mt-3 text-[10px] text-neutral-400 dark:text-neutral-500">
                      Dugsiiye · 32 Weeks
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_18px_40px_-18px_rgb(var(--ink-rgb)/0.3)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] absolute left-[290px] top-[250px] z-30 w-[440px] rotate-[-2deg]">
                  <div className="flex items-center gap-2">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 text-[#1E1E1E] dark:text-neutral-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z" />
                    </svg>
                    <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400 dark:text-neutral-500">
                      Weekly League
                    </span>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-semibold tabular-nums bg-(--ink) text-white dark:bg-white dark:text-(--ink)">
                        1
                      </span>
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-neutral-100 text-[9px] font-semibold text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                        AY
                      </span>
                      <span className="text-xs font-semibold text-[#1E1E1E] dark:text-neutral-100">
                        Amina Yusuf
                      </span>
                      <span className="ml-auto text-[11px] font-medium tabular-nums text-[#1E1E1E] dark:text-neutral-100">
                        1,240
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-semibold tabular-nums bg-neutral-100 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500">
                        2
                      </span>
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-neutral-100 text-[9px] font-semibold text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                        BO
                      </span>
                      <span className="text-xs text-neutral-400 dark:text-neutral-500">
                        Bilal Omar
                      </span>
                      <span className="ml-auto text-[11px] font-medium tabular-nums text-neutral-400 dark:text-neutral-500">
                        1,180
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-semibold tabular-nums bg-neutral-100 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-500">
                        3
                      </span>
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-neutral-100 text-[9px] font-semibold text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                        HA
                      </span>
                      <span className="text-xs text-neutral-400 dark:text-neutral-500">
                        Hodan Ali
                      </span>
                      <span className="ml-auto text-[11px] font-medium tabular-nums text-neutral-400 dark:text-neutral-500">
                        1,050
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section aria-label="Technologies you'll learn" className="max-w-[1160px] mx-auto px-5 md:px-8">
        <div className="border-t border-neutral-200 py-10 text-center md:py-12 dark:border-neutral-800">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
            What you'll learn
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              Cursor
            </li>
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              Claude Code
            </li>
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              AI Agents
            </li>
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              React
            </li>
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              Next.js
            </li>
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              Node.js
            </li>
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              TypeScript
            </li>
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              MongoDB
            </li>
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              JavaScript
            </li>
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              HTML
            </li>
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              CSS
            </li>
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              Tailwind
            </li>
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              Git
            </li>
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              GitHub
            </li>
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              Vercel
            </li>
            <li className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              RAG
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
