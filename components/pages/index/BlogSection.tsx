import Link from "next/link";

export default function BlogSection() {
  return (
    <section aria-labelledby="blog-heading" className="bg-[#FAFAF9] dark:bg-neutral-950 py-20 md:py-28">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200 mb-5">
              Journal
            </span>
            <h2 id="blog-heading" className="font-display font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50 text-4xl md:text-[44px] md:leading-[1.08]">
              Latest from our blog.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
              <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                Coding tips, AI insights, and tech news,
              </span>
              {" "}written in Somali.
            </p>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:mt-16">
          <Link className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAFAF9] sm:rounded-[1.75rem] dark:focus-visible:ring-offset-neutral-950" href="/blog/ai-sawir-sameynta-chatgpt-grok-gemini">
            <article className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-inset ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] sm:rounded-[1.75rem]">
              <img alt="Yaa Fiican Sawir Sameynta AI: ChatGPT, Grok Imagine iyo Gemini?" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/blog-thumbs/ai-sawir-sameynta-chatgpt-grok-gemini-v3.png" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgb(var(--ink-rgb)/0.26)]" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-(--ink) via-(--ink)/62 to-transparent" />
              <span className="absolute right-3.5 top-3.5 inline-flex max-w-[70%] items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md sm:right-4 sm:top-4">
                <span className="truncate">
                  Artificial Intelligence
                </span>
              </span>
              <div className="relative p-4 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                <time dateTime="2026-08-27T12:57:04.869Z" className="block text-[11px] font-semibold uppercase tracking-wider tabular-nums text-white/60">
                  Aug 27, 2026
                </time>
                <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-[1.3] tracking-[-0.02em] text-white">
                  Yaa Fiican Sawir Sameynta AI: ChatGPT, Grok Imagine iyo Gemini?
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/70">
                  Thumbnails-ka Dugsiiye ee ugu dambeeyay oo dhan AI ayaa sameeyay. Qoraalkan waxaad ku ogaanaysaa tijaabo real ah oo saddexda tool isla shaqo la siiyay, kan guulaystay, iyo prompt-ka sawir fiican lagu helo.
                </p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2 text-[13px] text-white/70">
                    <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-white/15">
                      <img alt="Mohamud Osman" loading="lazy" decoding="async" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg" />
                    </span>
                    <span className="truncate">
                      Mohamud Osman
                    </span>
                  </div>
                  <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Link>
          <Link className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAFAF9] sm:rounded-[1.75rem] dark:focus-visible:ring-offset-neutral-950" href="/blog/xirfadaha-2026-xilliga-ai">
            <article className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-inset ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] sm:rounded-[1.75rem]">
              <img alt="Hadda Baro Xirfadahan 2026: 9-ka Role ee Coding-ka ee Xilliga AI-ga" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/blog-thumbs/xirfadaha-2026-xilliga-ai-v3.png" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgb(var(--ink-rgb)/0.26)]" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-(--ink) via-(--ink)/62 to-transparent" />
              <span className="absolute right-3.5 top-3.5 inline-flex max-w-[70%] items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md sm:right-4 sm:top-4">
                <span className="truncate">
                  Career Growth
                </span>
              </span>
              <div className="relative p-4 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                <time dateTime="2026-08-27T12:57:04.846Z" className="block text-[11px] font-semibold uppercase tracking-wider tabular-nums text-white/60">
                  Aug 27, 2026
                </time>
                <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-[1.3] tracking-[-0.02em] text-white">
                  Hadda Baro Xirfadahan 2026: 9-ka Role ee Coding-ka ee Xilliga AI-ga
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/70">
                  Suuqa shaqadu wuu adag yahay, laakiin xirfado gaar ah ayaa xilliga AI-ga ku anfacaya. Qoraalkan waxaad ku ogaanaysaa 9-ka role ee coding-ka, tools-ka mid walba u baahan yahay, iyo kuwa ugu mudan in laga bilaabo.
                </p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2 text-[13px] text-white/70">
                    <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-white/15">
                      <img alt="Mohamud Osman" loading="lazy" decoding="async" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg" />
                    </span>
                    <span className="truncate">
                      Mohamud Osman
                    </span>
                  </div>
                  <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Link>
          <Link className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAFAF9] sm:rounded-[1.75rem] dark:focus-visible:ring-offset-neutral-950" href="/blog/baro-react-js-af-soomaali">
            <article className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-inset ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] sm:rounded-[1.75rem]">
              <img alt="Baro React JS Af-Soomaali: Full Course 22+ Saac oo Bilaash ah" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/blog-thumbs/baro-react-js-af-soomaali-v3.png" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgb(var(--ink-rgb)/0.26)]" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-(--ink) via-(--ink)/62 to-transparent" />
              <span className="absolute right-3.5 top-3.5 inline-flex max-w-[70%] items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md sm:right-4 sm:top-4">
                <span className="truncate">
                  Web Development
                </span>
              </span>
              <div className="relative p-4 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                <time dateTime="2026-08-27T12:57:04.822Z" className="block text-[11px] font-semibold uppercase tracking-wider tabular-nums text-white/60">
                  Aug 27, 2026
                </time>
                <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-[1.3] tracking-[-0.02em] text-white">
                  Baro React JS Af-Soomaali: Full Course 22+ Saac oo Bilaash ah
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/70">
                  React waa library-ga ugu caansan ee frontend-ka. Halkan waxaad ka helaysaa full course Af-Soomaali ah oo 22 saac ka badan: hooks, Redux, Tailwind, iyo afar project real ah oo ay ku jiraan Netflix clone iyo shopping cart Hormuud EVC Plus ku xiran.
                </p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2 text-[13px] text-white/70">
                    <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-white/15">
                      <img alt="Mohamud Osman" loading="lazy" decoding="async" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg" />
                    </span>
                    <span className="truncate">
                      Mohamud Osman
                    </span>
                  </div>
                  <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div className="mt-12 flex justify-center md:mt-14">
          <Link className="group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:focus-visible:ring-offset-neutral-950 bg-white text-[#1E1E1E] border border-neutral-200 hover:bg-neutral-50 dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800 h-12 px-6 text-[15px]" href="/blog">
            Read More Articles
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
