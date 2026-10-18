import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactSection() {
  return (
    <section className="max-w-[1160px] mx-auto px-5 md:px-8 pb-24 lg:pb-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div data-reveal="up">
          <div className="mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 mb-3 block">
              Get in touch
            </span>
            <h2 className="mb-3 font-display text-3xl font-semibold tracking-[-0.03em] text-[#1E1E1E] md:text-4xl dark:text-neutral-50">
              Multiple ways to reach us.
            </h2>
            <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
              Choose whichever channel works best for you.
            </p>
          </div>
          <div className="divide-y divide-neutral-100 overflow-hidden rounded-2xl border border-neutral-200/60 bg-white shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:divide-neutral-800 dark:border-neutral-800 dark:bg-neutral-900">
            <a href="mailto:info@dugsiiye.com" className="block" data-reveal="left">
              <div className="group flex items-start gap-5 px-5 py-5 transition-colors sm:px-6 hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-[#1E1E1E] transition-colors group-hover:bg-(--ink) group-hover:text-white dark:bg-neutral-800 dark:text-neutral-200 dark:group-hover:bg-white dark:group-hover:text-(--ink)">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 mb-1">
                    Email
                  </div>
                  <div className="mb-0.5 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                    info@dugsiiye.com
                  </div>
                  <div className="text-sm text-[#8D8D8D] dark:text-neutral-400">
                    We'll respond within 24 hours
                  </div>
                </div>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-2 h-4 w-4 shrink-0 text-[#8D8D8D] transition-all group-hover:translate-x-0.5 group-hover:text-[#1E1E1E] dark:text-neutral-500 dark:group-hover:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
              </div>
            </a>
            <a href="https://wa.me/252614251112" target="_blank" rel="noopener noreferrer" className="block" data-reveal="left">
              <div className="group flex items-start gap-5 px-5 py-5 transition-colors sm:px-6 hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-[#1E1E1E] transition-colors group-hover:bg-(--ink) group-hover:text-white dark:bg-neutral-800 dark:text-neutral-200 dark:group-hover:bg-white dark:group-hover:text-(--ink)">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 mb-1">
                    WhatsApp
                  </div>
                  <div className="mb-0.5 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                    +252 61 425 1112
                  </div>
                  <div className="text-sm text-[#8D8D8D] dark:text-neutral-400">
                    Fastest way to reach us
                  </div>
                </div>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mt-2 h-4 w-4 shrink-0 text-[#8D8D8D] transition-all group-hover:translate-x-0.5 group-hover:text-[#1E1E1E] dark:text-neutral-500 dark:group-hover:text-neutral-100" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
              </div>
            </a>
            <div data-reveal="left">
              <div className="group flex items-start gap-5 px-5 py-5 transition-colors sm:px-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-[#1E1E1E] transition-colors group-hover:bg-(--ink) group-hover:text-white dark:bg-neutral-800 dark:text-neutral-200 dark:group-hover:bg-white dark:group-hover:text-(--ink)">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 mb-1">
                    Location
                  </div>
                  <div className="mb-0.5 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                    Mogadishu, Somalia
                  </div>
                  <div className="text-sm text-[#8D8D8D] dark:text-neutral-400">
                    Serving learners worldwide
                  </div>
                </div>
              </div>
            </div>
            <div data-reveal="left">
              <div className="group flex items-start gap-5 px-5 py-5 transition-colors sm:px-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-[#1E1E1E] transition-colors group-hover:bg-(--ink) group-hover:text-white dark:bg-neutral-800 dark:text-neutral-200 dark:group-hover:bg-white dark:group-hover:text-(--ink)">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 mb-1">
                    Hours
                  </div>
                  <div className="mb-0.5 font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                    Mon-Fri · 9AM-6PM EAT
                  </div>
                  <div className="text-sm text-[#8D8D8D] dark:text-neutral-400">
                    East Africa Time
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-neutral-200/80 bg-[#F4F4F2] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h3 className="mb-1 font-display text-base font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              Looking for the mentorship program?
            </h3>
            <p className="mb-4 text-sm text-[#8D8D8D] dark:text-neutral-400">
              Join our 12-month flagship program with live sessions and career support.
            </p>
            <Link className="group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:focus-visible:ring-offset-neutral-950 bg-(--ink) text-white shadow-sm hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 h-9 px-4 text-sm" href="/mentorship">
              Learn more
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div data-reveal="up">
          <div className="rounded-2xl border border-neutral-200/60 bg-white p-8 shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] lg:p-10 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="mb-8">
              <h2 className="mb-2 font-display text-2xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                Send us a message
              </h2>
              <p className="text-sm text-[#8D8D8D] dark:text-neutral-400">
                We'll get back to you as soon as possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
