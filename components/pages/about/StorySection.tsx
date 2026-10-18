export default function StorySection() {
  return (
    <section className="max-w-[1160px] mx-auto px-5 md:px-8 pb-24 lg:pb-32">
      <div className="mb-16 max-w-2xl" data-reveal="up">
        <span className="mb-4 block text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
          Our journey
        </span>
        <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-[#1E1E1E] md:text-[44px] md:leading-[1.08] dark:text-neutral-50">
          From one idea to 7,000+ students.
        </h2>
      </div>
      <div className="max-w-3xl" data-reveal="up">
        <div className="flex gap-8" data-reveal="left">
          <div className="w-20 shrink-0 pt-0.5">
            <span className="font-display text-2xl font-semibold tabular-nums tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              2019
            </span>
          </div>
          <div className="relative flex-1 border-l border-neutral-200 pb-12 pl-8 dark:border-neutral-800">
            <span aria-hidden="true" className="absolute top-2.5 -left-[3.5px] h-[7px] w-[7px] rounded-full bg-[#1E1E1E] dark:bg-neutral-100" />
            <h3 className="mb-2 font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              The beginning
            </h3>
            <p className="text-[15px] leading-6 text-[#8D8D8D] dark:text-neutral-400">
              Dugsiiye launched with a simple idea: Somali speakers deserve world-class tech education in their own language.
            </p>
          </div>
        </div>
        <div className="flex gap-8" data-reveal="left">
          <div className="w-20 shrink-0 pt-0.5">
            <span className="font-display text-2xl font-semibold tabular-nums tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              2022
            </span>
          </div>
          <div className="relative flex-1 border-l border-neutral-200 pb-12 pl-8 dark:border-neutral-800">
            <span aria-hidden="true" className="absolute top-2.5 -left-[3.5px] h-[7px] w-[7px] rounded-full bg-[#1E1E1E] dark:bg-neutral-100" />
            <h3 className="mb-2 font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              First 1,000 students
            </h3>
            <p className="text-[15px] leading-6 text-[#8D8D8D] dark:text-neutral-400">
              Students from Mogadishu to Minneapolis were learning to code in Somali. The community proved the demand was real.
            </p>
          </div>
        </div>
        <div className="flex gap-8" data-reveal="left">
          <div className="w-20 shrink-0 pt-0.5">
            <span className="font-display text-2xl font-semibold tabular-nums tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              2023
            </span>
          </div>
          <div className="relative flex-1 border-l border-neutral-200 pb-12 pl-8 dark:border-neutral-800">
            <span aria-hidden="true" className="absolute top-2.5 -left-[3.5px] h-[7px] w-[7px] rounded-full bg-[#1E1E1E] dark:bg-neutral-100" />
            <h3 className="mb-2 font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              Mentorship program launched
            </h3>
            <p className="text-[15px] leading-6 text-[#8D8D8D] dark:text-neutral-400">
              Live weekly sessions, code reviews, and career support. Our graduates started landing real tech jobs.
            </p>
          </div>
        </div>
        <div className="flex gap-8" data-reveal="left">
          <div className="w-20 shrink-0 pt-0.5">
            <span className="font-display text-2xl font-semibold tabular-nums tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              2025
            </span>
          </div>
          <div className="relative flex-1 border-l border-neutral-200 pb-12 pl-8 dark:border-neutral-800">
            <span aria-hidden="true" className="absolute top-2.5 -left-[3.5px] h-[7px] w-[7px] rounded-full bg-[#1E1E1E] dark:bg-neutral-100" />
            <h3 className="mb-2 font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              AI changed the game
            </h3>
            <p className="text-[15px] leading-6 text-[#8D8D8D] dark:text-neutral-400">
              We rebuilt the program around AI. Claude Code, Cursor, and agentic development became the core of the curriculum, not an afterthought.
            </p>
          </div>
        </div>
        <div className="flex gap-8" data-reveal="left">
          <div className="w-20 shrink-0 pt-0.5">
            <span className="font-display text-2xl font-semibold tabular-nums tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              2026
            </span>
          </div>
          <div className="relative flex-1 border-l border-neutral-200 pl-8 dark:border-neutral-800 pb-2">
            <span aria-hidden="true" className="absolute top-2.5 -left-[3.5px] h-[7px] w-[7px] rounded-full bg-[#1E1E1E] dark:bg-neutral-100" />
            <h3 className="mb-2 font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              Full Stack AI Engineer
            </h3>
            <p className="text-[15px] leading-6 text-[#8D8D8D] dark:text-neutral-400">
              The flagship program grew to 10 phases and 125+ hours, ending in an agentic-coding capstone with Claude Code. Students now ship AI chat, RAG systems, and multi-agent apps before they graduate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
