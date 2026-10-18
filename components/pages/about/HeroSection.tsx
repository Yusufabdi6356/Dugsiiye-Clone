export default function HeroSection() {
  return (
    <section className="max-w-[1160px] mx-auto px-5 md:px-8 pt-28 pb-16 sm:pt-32 lg:pb-20">
      <div className="max-w-3xl" data-reveal="up">
        <span className="mb-4 block text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
          About Dugsiiye
        </span>
        <h1 className="font-display text-[2.25rem] font-semibold leading-[1.04] tracking-[-0.03em] text-[#1E1E1E] sm:text-5xl md:text-[60px] md:leading-[1.06] dark:text-neutral-50">
          Software engineering,
          <br />
          taught in Af-Soomaali.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-7 text-[#8D8D8D] dark:text-neutral-400">
          <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
            Dugsiiye is the Somali-language school that takes you from your first HTML tag to shipped AI apps.
          </span>
          {" "}7,000+ students learn in the language they think in, with live mentorship every week and a curriculum built around the AI tools the industry hires for.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-neutral-200 pt-10 lg:grid-cols-4 dark:border-neutral-800" data-reveal="up">
        <div>
          <div className="mb-2 font-display text-4xl font-semibold tabular-nums tracking-[-0.03em] text-[#1E1E1E] sm:text-5xl dark:text-neutral-50">
            7,000+
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
            Students enrolled
          </div>
        </div>
        <div>
          <div className="mb-2 font-display text-4xl font-semibold tabular-nums tracking-[-0.03em] text-[#1E1E1E] sm:text-5xl dark:text-neutral-50">
            10
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
            Phases, HTML to AI
          </div>
        </div>
        <div>
          <div className="mb-2 font-display text-4xl font-semibold tabular-nums tracking-[-0.03em] text-[#1E1E1E] sm:text-5xl dark:text-neutral-50">
            125+
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
            Hours of video
          </div>
        </div>
        <div>
          <div className="mb-2 font-display text-4xl font-semibold tabular-nums tracking-[-0.03em] text-[#1E1E1E] sm:text-5xl dark:text-neutral-50">
            6
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
            AI apps you ship
          </div>
        </div>
      </div>
    </section>
  );
}
