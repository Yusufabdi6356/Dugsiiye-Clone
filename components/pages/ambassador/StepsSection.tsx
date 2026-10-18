export default function StepsSection() {
  return (
    <section className="border-y border-neutral-200 bg-[#F4F4F2] py-24 lg:py-32 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8">
        <div className="mb-16 max-w-2xl" data-reveal="up">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 mb-4 block">
            How it works
          </span>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-[#1E1E1E] md:text-[44px] md:leading-[1.08] dark:text-neutral-50">
            Four steps to start earning.
          </h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div data-reveal="up">
            <div className="mb-4 font-display text-5xl font-semibold tabular-nums tracking-[-0.03em] text-neutral-300 dark:text-neutral-700">
              01
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              Apply
            </h3>
            <p className="text-sm leading-6 text-[#8D8D8D] dark:text-neutral-400">
              Fill out the form below with your details and social presence.
            </p>
          </div>
          <div data-reveal="up">
            <div className="mb-4 font-display text-5xl font-semibold tabular-nums tracking-[-0.03em] text-neutral-300 dark:text-neutral-700">
              02
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              Get approved
            </h3>
            <p className="text-sm leading-6 text-[#8D8D8D] dark:text-neutral-400">
              We review applications within 2-3 business days.
            </p>
          </div>
          <div data-reveal="up">
            <div className="mb-4 font-display text-5xl font-semibold tabular-nums tracking-[-0.03em] text-neutral-300 dark:text-neutral-700">
              03
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              Share & promote
            </h3>
            <p className="text-sm leading-6 text-[#8D8D8D] dark:text-neutral-400">
              Use your unique referral link to promote courses across your channels.
            </p>
          </div>
          <div data-reveal="up">
            <div className="mb-4 font-display text-5xl font-semibold tabular-nums tracking-[-0.03em] text-neutral-300 dark:text-neutral-700">
              04
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              Earn commissions
            </h3>
            <p className="text-sm leading-6 text-[#8D8D8D] dark:text-neutral-400">
              Get paid for every successful enrollment through your link.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
