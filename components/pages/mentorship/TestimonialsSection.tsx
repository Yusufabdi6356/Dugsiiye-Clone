import ScrollToButton from "@/components/shared/ScrollToButton";

export default function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="relative bg-[#FAFAF9] dark:bg-neutral-950 py-20 md:py-28">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8 relative z-10">
        <div style={{ opacity: "0", transform: "translateY(20px)" }} data-reveal="up">
          <div className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200 mb-5">
                7,000+ Students
              </span>
              <h2 id="testimonials-heading" className="font-display font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50 text-4xl md:text-[44px] md:leading-[1.08]">
                They started where you are.
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8 md:self-end">
              <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
                <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                  Many of them now build and work in tech.
                </span>
                {" "}Here's what they say about the program.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 rounded-[2rem] p-px md:mt-16 bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.06))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.11)_16%,rgba(255,255,255,0.035)_58%,rgba(255,255,255,0.10)_100%)] shadow-[0_24px_60px_-36px_rgb(var(--ink-rgb)/0.45)] dark:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.75)]" data-reveal="up">
          <figure className="rounded-[calc(2rem-1px)] bg-(--ink) p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-12 lg:p-14">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
              From university to a dev job
            </span>
            <blockquote className="mt-5 max-w-3xl font-display text-xl font-medium leading-snug tracking-[-0.02em] text-white sm:text-2xl lg:text-[28px]">
              “4-ta sano een jaamacada dhiganayay programming-ka waa ii suuro gali wayday. Markaan programm-ka mentorship-ka dugsiiye kusoo biiray asbuucii 1-aad ayay wax walba igu cadaadeen.”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
              <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white/10 ring-1 ring-inset ring-white/20">
                <img alt="Mustafe Hersi" loading="lazy" width="48" height="48" decoding="async" className="h-full w-full object-cover" src="/testimonials/mustafa.webp" />
              </span>
              <span>
                <span className="block text-[15px] font-medium text-white">
                  Mustafe Hersi
                </span>
                <span className="block text-sm text-white/55">
                  Full Stack Developer at Beco
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          <figure className="flex flex-col border-t border-neutral-200 pt-7 dark:border-neutral-800" data-reveal="up">
            <blockquote className="flex-1 text-[15px] leading-7 text-[#1E1E1E] dark:text-neutral-200">
              “Semester 3 anigo ah waan fahmi waayay javascript. Markaa saas ugu soo biiray saan u fahmay javascript inaba caadi mahayn. Cashir walba clear ayuu ahaa.”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3">
              <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-neutral-100 ring-1 ring-inset ring-black/10 dark:bg-neutral-800 dark:ring-white/15">
                <img alt="Istar" loading="lazy" width="36" height="36" decoding="async" className="h-full w-full object-cover" src="/testimonials/istar.webp" />
              </span>
              <span>
                <span className="block text-sm font-medium text-[#1E1E1E] dark:text-neutral-100">
                  Istar
                </span>
                <span className="block text-xs text-[#8D8D8D] dark:text-neutral-400">
                  Mentorship Program Student
                </span>
              </span>
            </figcaption>
          </figure>
          <figure className="flex flex-col border-t border-neutral-200 pt-7 dark:border-neutral-800" data-reveal="up">
            <blockquote className="flex-1 text-[15px] leading-7 text-[#1E1E1E] dark:text-neutral-200">
              “Aad ayan ugu qanacsanahay dadaalka layaabka leh. Courses badan oo maraykan iyo india-ba waa soo maray, waxaa aan kula kulmay dugsiiye waa qaab ka duwan qaababka kale.”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3">
              <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-neutral-100 ring-1 ring-inset ring-black/10 dark:bg-neutral-800 dark:ring-white/15">
                <img alt="Khalid Maalin" loading="lazy" width="36" height="36" decoding="async" className="h-full w-full object-cover" src="/testimonials/kalid.webp" />
              </span>
              <span>
                <span className="block text-sm font-medium text-[#1E1E1E] dark:text-neutral-100">
                  Khalid Maalin
                </span>
                <span className="block text-xs text-[#8D8D8D] dark:text-neutral-400">
                  IT Professional
                </span>
              </span>
            </figcaption>
          </figure>
          <figure className="flex flex-col border-t border-neutral-200 pt-7 dark:border-neutral-800" data-reveal="up">
            <blockquote className="flex-1 text-[15px] leading-7 text-[#1E1E1E] dark:text-neutral-200">
              “Barnaamijkan wuxuu ii noqday waddo cad oo ii suuragaliyay inaan ogaado halka aan ka bilaabi lahaa barashada full stack software engineering.”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3">
              <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-neutral-100 ring-1 ring-inset ring-black/10 dark:bg-neutral-800 dark:ring-white/15">
                <img alt="Nasro Muse" loading="lazy" width="36" height="36" decoding="async" className="h-full w-full object-cover" src="/testimonials/nasro.webp" />
              </span>
              <span>
                <span className="block text-sm font-medium text-[#1E1E1E] dark:text-neutral-100">
                  Nasro Muse
                </span>
                <span className="block text-xs text-[#8D8D8D] dark:text-neutral-400">
                  Lead Mentorship Program
                </span>
              </span>
            </figcaption>
          </figure>
          <figure className="flex flex-col border-t border-neutral-200 pt-7 dark:border-neutral-800" data-reveal="up">
            <blockquote className="flex-1 text-[15px] leading-7 text-[#1E1E1E] dark:text-neutral-200">
              “Dugsiiye waa madal waxbarasho oo casri ah oo bixisa koorsooyin sare iyo hagid. Macallimiinta khubaro ah ayaa ka dhigaya meesha ugu habboon ee lagu hormarin karo xirfadaha casriga.”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3">
              <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-neutral-100 ring-1 ring-inset ring-black/10 dark:bg-neutral-800 dark:ring-white/15">
                <img alt="Faarax Cabdulaahi Cali" loading="lazy" width="36" height="36" decoding="async" className="h-full w-full object-cover" src="/testimonials/faarax.webp" />
              </span>
              <span>
                <span className="block text-sm font-medium text-[#1E1E1E] dark:text-neutral-100">
                  Faarax Cabdulaahi Cali
                </span>
                <span className="block text-xs text-[#8D8D8D] dark:text-neutral-400">
                  Mentorship Program Student
                </span>
              </span>
            </figcaption>
          </figure>
          <figure className="flex flex-col border-t border-neutral-200 pt-7 dark:border-neutral-800" data-reveal="up">
            <blockquote className="flex-1 text-[15px] leading-7 text-[#1E1E1E] dark:text-neutral-200">
              “Dugsiiye waxa kaliya oon ku arkay waxa weeye inaad si dhab ah oo kala danbeyn leh oo isla xisaabtan leh aan wax ugu bartay.”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3">
              <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-neutral-100 ring-1 ring-inset ring-black/10 dark:bg-neutral-800 dark:ring-white/15">
                <img alt="Ayaan Jaamac" loading="lazy" width="36" height="36" decoding="async" className="h-full w-full object-cover" src="/testimonials/ayan.webp" />
              </span>
              <span>
                <span className="block text-sm font-medium text-[#1E1E1E] dark:text-neutral-100">
                  Ayaan Jaamac
                </span>
                <span className="block text-xs text-[#8D8D8D] dark:text-neutral-400">
                  Mentorship Program Student
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
        <div className="mt-14 flex justify-center md:mt-16" data-reveal="up">
          <ScrollToButton target="pricing" className="inline-flex items-center justify-center whitespace-nowrap rounded-full ring-offset-background transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 bg-(--ink) text-white shadow-sm hover:-translate-y-px hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:shadow-none dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500 group h-[52px] px-7 text-base font-medium">
  Hada is diiwaan geli
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
  </svg>
</ScrollToButton>
        </div>
      </div>
    </section>
  );
}
