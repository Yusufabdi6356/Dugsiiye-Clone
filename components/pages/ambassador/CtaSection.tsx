export default function CtaSection() {
  return (
    <section className="max-w-[1160px] mx-auto px-5 md:px-8 py-24 lg:py-32">
      <div data-reveal="up">
        <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-neutral-800 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] bg-[#F4F4F2] dark:bg-neutral-900 px-6 py-16 text-center md:px-12 md:py-20">
          <div className="relative">
            <h2 className="mx-auto mb-4 max-w-2xl font-display text-4xl font-semibold tracking-[-0.03em] text-[#1E1E1E] md:text-[44px] md:leading-[1.08] dark:text-neutral-50">
              Your audience trusts you. Reward that trust.
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
              Join 50+ ambassadors already earning commissions while helping Somali learners access world-class coding education.
            </p>
            <a href="#apply" className="group inline-flex h-[52px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-(--ink) px-7 text-base font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-black active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F4F2] dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 dark:focus-visible:ring-offset-neutral-900">
              Apply now
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
