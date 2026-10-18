export default function AudienceSection() {
  return (
    <section aria-labelledby="personas-heading" className="bg-[#FAFAF9] dark:bg-neutral-950 py-20 md:py-28">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200 mb-5">
            Who is this for?
          </span>
          <h2 id="personas-heading" className="font-display font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50 text-4xl md:text-[44px] md:leading-[1.08]">
            Six starting points.
            <br className="hidden sm:block" />
            {" "}One roadmap.
          </h2>
          <div className="mt-5">
            <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
              <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                You don’t need a degree or a head start.
              </span>
              {" "}7,000+ students have taken this path, from complete beginners to working IT professionals, all learning in Somali.
            </p>
          </div>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
            <span className="inline-flex shrink-0 items-center justify-center h-11 w-11 rounded-xl bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120Z" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-100">
              University students
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#8D8D8D] dark:text-neutral-400">
              Semesters of theory and JavaScript still doesn’t click? Learn it in the right order, in Somali.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
            <span className="inline-flex shrink-0 items-center justify-center h-11 w-11 rounded-xl bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.34,85.66a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,88,48V72H208a8,8,0,0,1,0,16H88v24a8,8,0,0,1-13.66,5.66Zm171.32,84.68-32-32A8,8,0,0,0,168,144v24H48a8,8,0,0,0,0,16H168v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,213.66,170.34Z" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-100">
              Career switchers
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#8D8D8D] dark:text-neutral-400">
              Coming from another field with no tech background? Ten phases take you from zero to shipping.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
            <span className="inline-flex shrink-0 items-center justify-center h-11 w-11 rounded-xl bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M240,56v64a8,8,0,0,1-13.66,5.66L200,99.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,188.69,88,162.34,61.66A8,8,0,0,1,168,48h64A8,8,0,0,1,240,56Z" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-100">
              IT professionals leveling up
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#8D8D8D] dark:text-neutral-400">
              Already working in IT? Add AI-assisted development (Cursor, Claude Code, RAG, agents) to your stack.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
            <span className="inline-flex shrink-0 items-center justify-center h-11 w-11 rounded-xl bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Z" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-100">
              Diaspora learners
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#8D8D8D] dark:text-neutral-400">
              Tired of learning in your second language? Every lesson, mentorship session and code review is in Somali.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
            <span className="inline-flex shrink-0 items-center justify-center h-11 w-11 rounded-xl bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM112,72h32a8,8,0,0,1,0,16H112a8,8,0,0,1,0-16ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224Z" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-100">
              Aspiring freelancers
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#8D8D8D] dark:text-neutral-400">
              Want paying clients? You finish with six real apps in your portfolio, not a certificate.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
            <span className="inline-flex shrink-0 items-center justify-center h-11 w-11 rounded-xl bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M205.41,159.07a60.9,60.9,0,0,1-31.83,8.86,71.71,71.71,0,0,1-27.36-5.66A55.55,55.55,0,0,0,136,194.51V224a8,8,0,0,1-8.53,8,8.18,8.18,0,0,1-7.47-8.25V211.31L81.38,172.69A52.5,52.5,0,0,1,63.44,176a45.82,45.82,0,0,1-23.92-6.67C17.73,156.09,6,125.62,8.27,87.79a8,8,0,0,1,7.52-7.52c37.83-2.23,68.3,9.46,81.5,31.25A46,46,0,0,1,103.74,140a4,4,0,0,1-6.89,2.43l-19.2-20.1a8,8,0,0,0-11.31,11.31l53.88,55.25c.06-.78.13-1.56.21-2.33a68.56,68.56,0,0,1,18.64-39.46l50.59-53.46a8,8,0,0,0-11.31-11.32l-49,51.82a4,4,0,0,1-6.78-1.74c-4.74-17.48-2.65-34.88,6.4-49.82,17.86-29.48,59.42-45.26,111.18-42.22a8,8,0,0,1,7.52,7.52C250.67,99.65,234.89,141.21,205.41,159.07Z" />
              </svg>
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-100">
              Complete beginners
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#8D8D8D] dark:text-neutral-400">
              Never written a line of code? The program starts at HTML and CSS, no experience needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
