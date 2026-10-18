import Link from "next/link";

export default function FounderSection() {
  return (
    <section className="max-w-[1160px] mx-auto px-5 md:px-8 pb-24 lg:pb-32">
      <div className="rounded-[2rem] p-px bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] shadow-[0_24px_60px_-36px_rgb(var(--ink-rgb)/0.45)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)]" data-reveal="up">
        <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-(--ink) shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="relative aspect-[4/3] sm:hidden">
            <img alt="Mohamud Osman, founder of Dugsiiye" loading="lazy" decoding="async" className="object-cover object-[50%_20%]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/founder/mohamud-portrait.jpg" />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-(--ink) to-transparent" />
          </div>
          <div className="relative hidden sm:absolute sm:inset-y-0 sm:right-0 sm:block sm:w-[42%]">
            <img alt="Mohamud Osman, founder of Dugsiiye" loading="lazy" decoding="async" className="object-cover object-[50%_22%]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/founder/mohamud-portrait.jpg" />
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,rgb(var(--ink-rgb)/0.55)_28%,rgb(var(--ink-rgb)/0)_60%)]" />
          </div>
          <div className="relative p-7 sm:min-h-[520px] sm:max-w-[58%] sm:p-12 lg:p-16">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
              Founder & Lead Instructor
            </span>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Mohamud Osman
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-white/60">
              <span className="font-medium text-white/90">
                Mohamud teaches what he actually uses to ship. Not theory, not slides from five years ago.
              </span>
              {" "}11 years writing code and he is still building every week, still on the keyboard. Every workflow taught in Dugsiiye is one he runs himself, and he teaches every cohort personally, in Somali.
            </p>
            <div className="mt-10 flex gap-10 border-t border-white/15 pt-8">
              <div>
                <div className="font-display text-3xl font-semibold tabular-nums tracking-[-0.03em] text-white">
                  11
                  <span className="text-xl">
                    yrs
                  </span>
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/50">
                  Engineering
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold tabular-nums tracking-[-0.03em] text-white">
                  7,000+
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/50">
                  Students mentored
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Link className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-sm font-medium text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-(--ink)" href="/mentorship">
                Learn with Mohamud
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
