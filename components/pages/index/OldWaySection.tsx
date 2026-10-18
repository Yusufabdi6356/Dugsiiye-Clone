export default function OldWaySection() {
  return (
    <section aria-labelledby="problem-heading" className="bg-[#FAFAF9] dark:bg-neutral-950 py-20 md:py-28">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200 mb-5">
              The old way
            </span>
            <h2 id="problem-heading" className="font-display font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50 text-4xl md:text-[44px] md:leading-[1.08]">
              Learning to code the old way isn’t working.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
              <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                The problem was never you.
              </span>
              {" "}It’s four years of theory, tutorials in a second language, and a curriculum that stops before the tools employers now hire for.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] sm:p-7 dark:border-neutral-800 dark:bg-neutral-900">
            <span className="inline-flex shrink-0 items-center justify-center h-11 w-11 rounded-xl bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.59A16.09,16.09,0,0,0,200,75.64ZM184,180.36V216H72V180l48-36v24a8,8,0,0,0,16,0V144.08Zm0-104.72L178.23,80H77.33L72,76V40H184Z" />
              </svg>
            </span>
            <span className="mt-5 block text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
              Too slow
            </span>
            <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400 mt-2.5">
              <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                Four years of university theory, still nothing shipped.
              </span>
              {" "}Mustafe studied programming at university for four years and couldn’t build. Week one of the mentorship, everything finally made sense.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] sm:p-7 dark:border-neutral-800 dark:bg-neutral-900">
            <span className="inline-flex shrink-0 items-center justify-center h-11 w-11 rounded-xl bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M160,129.89,175.06,160H144.94l6.36-12.7v0ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM207.16,188.42l-40-80a8,8,0,0,0-14.32,0L139.66,134.8a62.31,62.31,0,0,1-23.61-10A79.61,79.61,0,0,0,135.6,80H152a8,8,0,0,0,0-16H112V56a8,8,0,0,0-16,0v8H56a8,8,0,0,0,0,16h63.48a63.73,63.73,0,0,1-15.3,34.05,65.93,65.93,0,0,1-9-13.61,8,8,0,0,0-14.32,7.12,81.75,81.75,0,0,0,11.4,17.15A63.62,63.62,0,0,1,56,136a8,8,0,0,0,0,16,79.56,79.56,0,0,0,48.11-16.13,78.33,78.33,0,0,0,28.18,13.66l-19.45,38.89a8,8,0,0,0,14.32,7.16L136.94,176h46.12l9.78,19.58a8,8,0,1,0,14.32-7.16Z" />
              </svg>
            </span>
            <span className="mt-5 block text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
              In the wrong language
            </span>
            <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400 mt-2.5">
              <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                Every tutorial you find is in English.
              </span>
              {" "}You translate before you can even start learning. Dugsiiye is the only Somali-language program teaching AI-assisted development.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] sm:p-7 dark:border-neutral-800 dark:bg-neutral-900">
            <span className="inline-flex shrink-0 items-center justify-center h-11 w-11 rounded-xl bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M219.31,72,184,36.69A15.86,15.86,0,0,0,172.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V83.31A15.86,15.86,0,0,0,219.31,72ZM208,208H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H172.69L208,83.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z" />
              </svg>
            </span>
            <span className="mt-5 block text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
              Already outdated
            </span>
            <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400 mt-2.5">
              <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                Most courses stop before the tools the industry now hires for.
              </span>
              {" "}Cursor, Claude Code, RAG and multi-agent systems are how software gets built today. Here they are the curriculum, not a bonus module.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
