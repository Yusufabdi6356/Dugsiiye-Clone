import Link from "next/link";

export default function ProgramSection() {
  return (
    <section className="max-w-[1160px] mx-auto px-5 md:px-8 pb-24 lg:pb-32">
      <div className="rounded-[2rem] p-px bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] shadow-[0_24px_60px_-36px_rgb(var(--ink-rgb)/0.45)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)]" data-reveal="up">
        <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-(--ink) shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="grid gap-10 p-7 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:p-16">
            <div className="flex flex-col justify-center">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                What we do
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl md:text-[44px]">
                One program.
                <br />
                Ten phases.
              </h2>
              <p className="mt-6 max-w-lg text-[15px] leading-7 text-white/60">
                The Full Stack AI Engineer mentorship is the spine of Dugsiiye: 10 phases over 32 weeks, about 8 months, from foundations to AI engineering, every lesson in Somali. Each phase ships a real project. The last two put you inside the AI stack itself: chatbots, RAG systems, agents, and the agentic workflow with Claude Code.
              </p>
              <p className="mt-4 max-w-lg text-[15px] leading-7 text-white/60">
                Every phase is also available as a standalone course, so you can start with one skill and grow into the full path.
              </p>
              <div className="mt-8">
                <Link className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-(--ink) transition-transform duration-300 hover:scale-[1.02]" href="/mentorship">
                  Explore the program
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <ol className="divide-y divide-white/10">
                <li className="flex items-baseline gap-4 py-2.5">
                  <span className="w-7 shrink-0 font-display text-sm font-semibold tabular-nums text-white/35">
                    01
                  </span>
                  <span className="text-[15px] font-medium text-white/85">
                    HTML, CSS, Tailwind & GitHub
                  </span>
                </li>
                <li className="flex items-baseline gap-4 py-2.5">
                  <span className="w-7 shrink-0 font-display text-sm font-semibold tabular-nums text-white/35">
                    02
                  </span>
                  <span className="text-[15px] font-medium text-white/85">
                    Modern JavaScript
                  </span>
                </li>
                <li className="flex items-baseline gap-4 py-2.5">
                  <span className="w-7 shrink-0 font-display text-sm font-semibold tabular-nums text-white/35">
                    03
                  </span>
                  <span className="text-[15px] font-medium text-white/85">
                    React
                  </span>
                </li>
                <li className="flex items-baseline gap-4 py-2.5">
                  <span className="w-7 shrink-0 font-display text-sm font-semibold tabular-nums text-white/35">
                    04
                  </span>
                  <span className="text-[15px] font-medium text-white/85">
                    MongoDB & NoSQL
                  </span>
                </li>
                <li className="flex items-baseline gap-4 py-2.5">
                  <span className="w-7 shrink-0 font-display text-sm font-semibold tabular-nums text-white/35">
                    05
                  </span>
                  <span className="text-[15px] font-medium text-white/85">
                    Node.js & Express
                  </span>
                </li>
                <li className="flex items-baseline gap-4 py-2.5">
                  <span className="w-7 shrink-0 font-display text-sm font-semibold tabular-nums text-white/35">
                    06
                  </span>
                  <span className="text-[15px] font-medium text-white/85">
                    MERN Stack
                  </span>
                </li>
                <li className="flex items-baseline gap-4 py-2.5">
                  <span className="w-7 shrink-0 font-display text-sm font-semibold tabular-nums text-white/35">
                    07
                  </span>
                  <span className="text-[15px] font-medium text-white/85">
                    TypeScript
                  </span>
                </li>
                <li className="flex items-baseline gap-4 py-2.5">
                  <span className="w-7 shrink-0 font-display text-sm font-semibold tabular-nums text-white/35">
                    08
                  </span>
                  <span className="text-[15px] font-medium text-white/85">
                    Next.js
                  </span>
                </li>
                <li className="flex items-baseline gap-4 py-2.5">
                  <span className="w-7 shrink-0 font-display text-sm font-semibold tabular-nums text-white/35">
                    09
                  </span>
                  <span className="text-[15px] font-medium text-white/85">
                    AI Engineering
                  </span>
                </li>
                <li className="flex items-baseline gap-4 py-2.5">
                  <span className="w-7 shrink-0 font-display text-sm font-semibold tabular-nums text-white/35">
                    10
                  </span>
                  <span className="text-[15px] font-medium text-white/85">
                    Agentic Coding with Claude Code
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
