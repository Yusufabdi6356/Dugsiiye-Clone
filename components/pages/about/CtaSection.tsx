import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="max-w-[1160px] mx-auto px-5 md:px-8 pb-24 lg:pb-32">
      <div className="rounded-[2rem] p-px bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] shadow-[0_24px_60px_-36px_rgb(var(--ink-rgb)/0.45)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)]" data-reveal="up">
        <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-(--ink) shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] px-6 py-16 text-center md:px-12 md:py-20">
          <h2 className="mx-auto mb-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.03em] text-white md:text-[44px] md:leading-[1.08]">
            32 weeks from now, you could be a Full Stack AI Engineer.
          </h2>
          <p className="mx-auto mb-9 max-w-xl text-base leading-6 text-white/60">
            10 phases. Real shipped apps. Claude Code and the AI tools the industry hires for. All in Af-Soomaali.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-(--ink) transition-transform duration-300 hover:scale-[1.02]" href="/mentorship">
              Start Your 32 Weeks
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </Link>
            <Link className="inline-flex h-12 items-center rounded-full border border-white/25 px-7 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10" href="/courses">
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
