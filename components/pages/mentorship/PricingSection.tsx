import OfferCountdown from "@/components/mentorship/OfferCountdown";
import EnrollButton from "@/components/mentorship/EnrollButton";

export default function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="relative scroll-mt-20 bg-[#FAFAF9] dark:bg-neutral-950 py-20 md:py-28">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8">
        <div data-reveal="up">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200 mb-5">
              Pricing
            </span>
            <h2 id="pricing-heading" className="font-display font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50 text-4xl md:text-[44px] md:leading-[1.08]">
              32 weeks from now, you could be a Full Stack AI Engineer.
            </h2>
            <div className="mt-5">
              <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
                <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                  Every plan includes all 10 phases, live mentorship, Claude Code and Cursor training, and career support.
                </span>
                {" "}Pick the one that fits.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 mb-8 max-w-2xl md:mt-16 md:mb-12" data-reveal="up-sm">
          <div className="rounded-2xl border border-neutral-200/60 bg-white shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:border-neutral-800 dark:bg-neutral-900 flex flex-col items-center p-5 sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 mb-5 text-center">
              Limited Launch Pricing
            </p>
            <div className="flex flex-col items-center ">
              <div className="inline-flex items-center gap-2 mb-5">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 text-muted-foreground" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                </svg>
                <p className="text-sm font-medium text-muted-foreground tracking-tight">
                  Offer ends in
                </p>
              </div>
              <OfferCountdown />
            </div>
          </div>
        </div>
        <div className="mx-auto grid items-stretch gap-5 lg:gap-6 max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative h-full" data-reveal="up">
            <div className="h-full rounded-[1.75rem] p-px bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:bg-neutral-800 dark:shadow-none">
              <div className="flex h-full flex-col rounded-[calc(1.75rem-1px)] p-6 sm:p-7 lg:p-8 bg-white dark:bg-neutral-900">
                <div className="mb-4 flex h-6 items-center" />
                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                    Monthly
                  </h3>
                  <p className="mt-1 text-sm text-[#8D8D8D] dark:text-neutral-400">
                    1 month access
                  </p>
                </div>
                <div className="mb-6 border-b pb-6 border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-5xl font-semibold tracking-[-0.03em] tabular-nums text-[#1E1E1E] dark:text-neutral-50">
                      $51
                    </span>
                    <span className="text-base font-medium text-[#8D8D8D] dark:text-neutral-400">
                      /mo
                    </span>
                  </div>
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="text-sm tabular-nums line-through text-[#8D8D8D] dark:text-neutral-500">
                      $103
                    </span>
                    <span className="rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-100">
                      Save 50%
                    </span>
                  </div>
                  <p aria-hidden="true" className="mt-2.5 text-xs">
                    {" "}
                  </p>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-[#8D8D8D] dark:text-neutral-400">
                  Stay flexible and learn at your own pace with full program availability.
                </p>
                <ul className="mb-7 space-y-3">
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Weekly Live Mentoring Sessions
                      </span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-[#8D8D8D] dark:text-neutral-400">
                        Get help, ask questions, and stay on track every week.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Group Mentoring Sessions
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Access to All Core Materials
                      </span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-[#8D8D8D] dark:text-neutral-400">
                        Full access to the complete curriculum, from web foundations to AI agents and RAG systems.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Weekly Q&A Sessions
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Community Support
                      </span>
                    </span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <p className="mb-3 text-[13px] leading-5 text-[#8D8D8D] dark:text-neutral-400">
                    $51 oo kaliya ayaad ku bilaabaysaa, kadib $77 bishiiba.
                  </p>
                  <div className="flex items-center gap-2">
                    <EnrollButton planIndex={0} className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:shadow-none dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500 px-7 h-12 w-full rounded-full text-[15px] font-medium transition-all duration-200 hover:-translate-y-px active:translate-y-0 bg-(--ink) text-white shadow-sm hover:bg-black dark:border dark:border-neutral-700/60 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full" data-reveal="up">
            <div className="h-full rounded-[1.75rem] p-px bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:bg-neutral-800 dark:shadow-none">
              <div className="flex h-full flex-col rounded-[calc(1.75rem-1px)] p-6 sm:p-7 lg:p-8 bg-white dark:bg-neutral-900">
                <div className="mb-4 flex h-6 items-center" />
                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                    3 months
                  </h3>
                  <p className="mt-1 text-sm text-[#8D8D8D] dark:text-neutral-400">
                    3 months access
                  </p>
                </div>
                <div className="mb-6 border-b pb-6 border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-5xl font-semibold tracking-[-0.03em] tabular-nums text-[#1E1E1E] dark:text-neutral-50">
                      $142
                    </span>
                    <span className="text-base font-medium text-[#8D8D8D] dark:text-neutral-400">
                      /3mo
                    </span>
                  </div>
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="text-sm tabular-nums line-through text-[#8D8D8D] dark:text-neutral-500">
                      $306
                    </span>
                    <span className="rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-100">
                      Save 54%
                    </span>
                  </div>
                  <p className="mt-2.5 text-xs tabular-nums text-[#8D8D8D] dark:text-neutral-500">
                    $47 per month equivalent
                  </p>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-[#8D8D8D] dark:text-neutral-400">
                  Stay consistent and build strong learning momentum.
                </p>
                <ul className="mb-7 space-y-3">
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Weekly Live Mentoring Sessions
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Group Mentoring Sessions
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Access to All Core Materials
                      </span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-[#8D8D8D] dark:text-neutral-400">
                        Full access to the complete curriculum, from web foundations to AI agents and RAG systems.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Exclusive Group Projects
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Weekly Q&A Sessions
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Community Support
                      </span>
                    </span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <div className="flex items-center gap-2">
                    <EnrollButton planIndex={1} className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:shadow-none dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500 px-7 h-12 w-full rounded-full text-[15px] font-medium transition-all duration-200 hover:-translate-y-px active:translate-y-0 bg-(--ink) text-white shadow-sm hover:bg-black dark:border dark:border-neutral-700/60 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full" data-reveal="up">
            <div className="h-full rounded-[1.75rem] p-px bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:bg-neutral-800 dark:shadow-none">
              <div className="flex h-full flex-col rounded-[calc(1.75rem-1px)] p-6 sm:p-7 lg:p-8 bg-white dark:bg-neutral-900">
                <div className="mb-4 flex h-6 items-center" />
                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                    6 months
                  </h3>
                  <p className="mt-1 text-sm text-[#8D8D8D] dark:text-neutral-400">
                    6 months access
                  </p>
                </div>
                <div className="mb-6 border-b pb-6 border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-5xl font-semibold tracking-[-0.03em] tabular-nums text-[#1E1E1E] dark:text-neutral-50">
                      $259
                    </span>
                    <span className="text-base font-medium text-[#8D8D8D] dark:text-neutral-400">
                      /6mo
                    </span>
                  </div>
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="text-sm tabular-nums line-through text-[#8D8D8D] dark:text-neutral-500">
                      $623
                    </span>
                    <span className="rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-100">
                      Save 58%
                    </span>
                  </div>
                  <p className="mt-2.5 text-xs tabular-nums text-[#8D8D8D] dark:text-neutral-500">
                    $43 per month equivalent
                  </p>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-[#8D8D8D] dark:text-neutral-400">
                  Complete the full learning journey from foundations to advanced AI systems.
                </p>
                <ul className="mb-7 space-y-3">
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Private 1:1 Mentoring — monthly 30-min call
                      </span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-[#8D8D8D] dark:text-neutral-400">
                        Direct feedback on your projects and development progress.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Group Mentoring Sessions
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Access to All Core Materials
                      </span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-[#8D8D8D] dark:text-neutral-400">
                        Full access to the complete curriculum, from web foundations to AI agents and RAG systems.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Exclusive Group Projects
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Weekly Q&A Sessions
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-[#1E1E1E] dark:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-[#1E1E1E] dark:text-neutral-100">
                        Community Support
                      </span>
                    </span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <div className="flex items-center gap-2">
                    <EnrollButton planIndex={2} className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:shadow-none dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500 px-7 h-12 w-full rounded-full text-[15px] font-medium transition-all duration-200 hover:-translate-y-px active:translate-y-0 bg-(--ink) text-white shadow-sm hover:bg-black dark:border dark:border-neutral-700/60 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full z-10" data-reveal="up">
            <div className="h-full rounded-[1.75rem] p-px bg-[linear-gradient(180deg,rgba(0,0,0,0.30),rgba(0,0,0,0.10))] shadow-[0_28px_56px_-24px_rgb(var(--ink-rgb)/0.55)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)] lg:scale-[1.02]">
              <div className="flex h-full flex-col rounded-[calc(1.75rem-1px)] p-6 sm:p-7 lg:p-8 bg-(--ink) shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
                <div className="mb-4 flex h-6 items-center">
                  <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    Recommended
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-white">
                    Full Program
                  </h3>
                  <p className="mt-1 text-sm text-white/55">
                    8 months access
                  </p>
                </div>
                <div className="mb-6 border-b pb-6 border-white/15">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-5xl font-semibold tracking-[-0.03em] tabular-nums text-white">
                      $324
                    </span>
                    <span className="text-base font-medium text-white/55">
                      /8mo
                    </span>
                  </div>
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="text-sm tabular-nums line-through text-white/40">
                      $822
                    </span>
                    <span className="rounded-full px-2 py-0.5 text-xs font-semibold tabular-nums bg-white/15 text-white">
                      Save 61%
                    </span>
                  </div>
                  <p className="mt-2.5 text-xs tabular-nums text-white/50">
                    $41 per month equivalent
                  </p>
                </div>
                <ul className="mb-7 space-y-3">
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-white/90" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-white/90">
                        Covers the complete 32 week program, from HTML to AI engineer
                      </span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-white/65">
                        One payment, no renewals. Your access never expires mid journey.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-white/90" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-white/90">
                        8 months of full access, mentoring, and community
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-white/90" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-white/90">
                        Everything in the 6 months plan is included
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-1 h-3.5 w-3.5 shrink-0 text-white/90" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                    <span className="leading-snug">
                      <span className="block font-medium text-white/90">
                        The lowest cost per month of any plan
                      </span>
                    </span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <div className="flex items-center gap-2">
                    <EnrollButton planIndex={3} className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:shadow-none dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500 px-7 h-12 w-full rounded-full text-[15px] font-medium transition-all duration-200 hover:-translate-y-px active:translate-y-0 bg-white text-(--ink) shadow-sm hover:bg-neutral-100 dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
