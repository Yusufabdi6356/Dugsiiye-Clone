import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="container mx-auto max-w-6xl px-4 pt-[calc(var(--banner-height,0px)+7rem)] pb-10 sm:pt-[calc(var(--banner-height,0px)+8rem)] lg:pb-14">
      <div className="max-w-3xl">
        <span className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z" />
          </svg>
          Kanaalka YouTube
        </span>
        <h1 className="mb-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#1E1E1E] md:text-[44px] dark:text-neutral-50">
          Dugsiiye YouTube: Koorsooyin Coding iyo AI oo Bilaash ah, Af-Soomaali
        </h1>
        <p className="text-base leading-7 text-[#8D8D8D] dark:text-neutral-400">
          <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
            Kanaalka Dugsiiye ee YouTube waxaa laga daawan karaa koorsooyin buuxa oo ku saabsan programming, web development iyo AI, dhammaantoodna Af-Soomaali ah.
          </span>
          {" "}Videoyadu waa bilaash, wax lacag ah lagamana bixiyo. Koorsooyinku waa kuwo dhamaystiran oo aan la soo gaabin: qaarkood waxay socdaan in ka badan 20 saacadood oo hal video ah. Bogganu wuxuu ku hayaa liiska oo dhan, taxane taxane loo kala saaray, mid kastaana wuxuu tusayaa muddada, tirada cutubyada, iyo qoraalka blog-ga marka uu jiro. Kanaalka waxaad ka daawan kartaa{" "}
          <a href="https://youtube.com/@dugsiiye" target="_blank" rel="noopener noreferrer" className="font-medium text-[#1E1E1E] underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-[#1E1E1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-200 dark:focus-visible:ring-neutral-300">
            youtube.com/@dugsiiye
          </a>
          .
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-2">
          <a href="https://youtube.com/@dugsiiye" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 text-sm font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:focus-visible:ring-neutral-300 dark:focus-visible:ring-offset-neutral-950 h-9 bg-(--ink) text-white shadow-sm hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 h-11 px-5">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z" />
            </svg>
            Fur kanaalka
          </a>
          <Link className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 text-sm font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:focus-visible:ring-neutral-300 dark:focus-visible:ring-offset-neutral-950 h-9 border border-neutral-200 bg-white text-[#1E1E1E] hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800 h-11 px-5" href="/blog">
            Qoraallada blog-ga
          </Link>
        </div>
        <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
              Video
            </dt>
            <dd className="mt-0.5 font-display text-2xl font-semibold tracking-[-0.02em] tabular-nums text-[#1E1E1E] dark:text-neutral-50">
              62
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
              Cutub
            </dt>
            <dd className="mt-0.5 font-display text-2xl font-semibold tracking-[-0.02em] tabular-nums text-[#1E1E1E] dark:text-neutral-50">
              724
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
              Qoraal blog ah
            </dt>
            <dd className="mt-0.5 font-display text-2xl font-semibold tracking-[-0.02em] tabular-nums text-[#1E1E1E] dark:text-neutral-50">
              17
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
