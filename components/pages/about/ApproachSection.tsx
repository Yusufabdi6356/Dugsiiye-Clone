export default function ApproachSection() {
  return (
    <section className="max-w-[1160px] mx-auto px-5 md:px-8 pb-24 lg:pb-32">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div data-reveal="up">
          <span className="mb-4 block text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
            Why we exist
          </span>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-[#1E1E1E] md:text-[44px] md:leading-[1.08] dark:text-neutral-50">
            We rebuilt the school for the AI era.
          </h2>
        </div>
        <div className="space-y-4 text-[15px] leading-7 text-[#8D8D8D] dark:text-neutral-400" data-reveal="up">
          <p>
            Most coding programs still teach the old way: months of syntax memorization before you build anything real. The industry moved on. Modern engineers work with AI tools like Claude Code and Cursor, and they ship faster than the curriculum most schools still sell.
          </p>
          <p>
            Dugsiiye was rebuilt from the ground up for this reality. The Full Stack AI Engineer program runs 32 weeks across 10 phases, and it teaches you to code with AI, in Somali, with live mentorship every week.
          </p>
          <p>
            The result: students graduate with deployed apps and AI-engineering skills most working developers do not have yet. That is why our graduates walk into interviews with real, deployed work to show.
          </p>
        </div>
      </div>
    </section>
  );
}
