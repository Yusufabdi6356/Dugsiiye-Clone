export default function HeroSection() {
  return (
    <section className="max-w-[1160px] mx-auto px-5 md:px-8 pt-28 pb-20 sm:pt-32 lg:pb-28">
      <div className="max-w-3xl" data-reveal="up">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 mb-4 block">
          Ambassador Program
        </span>
        <h1 className="font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#1E1E1E] sm:text-5xl md:text-[56px] md:leading-[1.08] dark:text-neutral-50">
          Earn while helping Somali learners grow.
        </h1>
        <p className="mt-6 mb-10 max-w-2xl text-lg leading-7 text-[#8D8D8D] dark:text-neutral-400">
          <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
            Share Dugsiiye with your audience and earn 5-25% commission on every enrollment.
          </span>
          {" "}Help build the next generation of Somali developers. It's that simple.
        </p>
        <a href="#apply" className="group inline-flex h-[52px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-(--ink) px-7 text-base font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-black active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 dark:focus-visible:ring-offset-neutral-950">
          Apply now
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
