import Link from "next/link";

export default function ApplySection() {
  return (
    <section id="apply" className="scroll-mt-28 border-y border-neutral-200 bg-[#F4F4F2] py-24 lg:py-32 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div data-reveal="up">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 mb-4 block">
              Apply now
            </span>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] text-[#1E1E1E] md:text-[44px] md:leading-[1.08] dark:text-neutral-50 mb-6">
              Ready to get started?
            </h2>
            <p className="mb-10 max-w-lg text-[15px] leading-7 text-[#8D8D8D] dark:text-neutral-400">
              Fill out the form and we'll review your application within 2-3 business days. Once approved, you'll get your unique referral link and dashboard access.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 shrink-0 text-[#1E1E1E] dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
                <span className="text-sm text-[#8D8D8D] dark:text-neutral-400">
                  Unique referral link & dashboard
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 shrink-0 text-[#1E1E1E] dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
                <span className="text-sm text-[#8D8D8D] dark:text-neutral-400">
                  5-25% commission per enrollment
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 shrink-0 text-[#1E1E1E] dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
                <span className="text-sm text-[#8D8D8D] dark:text-neutral-400">
                  Real-time analytics & tracking
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 shrink-0 text-[#1E1E1E] dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
                <span className="text-sm text-[#8D8D8D] dark:text-neutral-400">
                  Exclusive discount codes for your audience
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 shrink-0 text-[#1E1E1E] dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
                <span className="text-sm text-[#8D8D8D] dark:text-neutral-400">
                  Priority support from our team
                </span>
              </div>
            </div>
          </div>
          <div data-reveal="up">
            <div className="rounded-2xl border border-neutral-200/60 bg-white p-8 text-center shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] sm:p-10 dark:border-neutral-800 dark:bg-neutral-950">
              <h3 className="mb-3 font-display text-2xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                Sign in to apply
              </h3>
              <p className="mx-auto mb-8 max-w-sm text-[15px] leading-6 text-[#8D8D8D] dark:text-neutral-400">
                Create an account or log in to submit your ambassador application.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/auth/register?redirect=%2Fambassador" rel="nofollow">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm ring-offset-background transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 bg-(--ink) text-white shadow-sm hover:-translate-y-px hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:shadow-none dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500 h-11 w-full px-7 font-medium sm:w-auto">
                    Create account
                  </button>
                </Link>
                <Link href="/auth/login?redirect=%2Fambassador" rel="nofollow">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm ring-offset-background transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 border border-neutral-200 bg-white text-[#1E1E1E] hover:-translate-y-px hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800 disabled:border-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-500 dark:disabled:border-neutral-800 dark:disabled:bg-neutral-800/50 dark:disabled:text-neutral-500 h-11 w-full px-7 font-medium sm:w-auto">
                    Sign in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
