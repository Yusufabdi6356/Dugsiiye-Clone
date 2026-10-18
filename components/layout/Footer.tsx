import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-neutral-200 bg-[#F4F5F3] dark:border-neutral-800 dark:bg-neutral-950">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8 pt-16 md:pt-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12 md:gap-8">
          <div className="col-span-2 md:col-span-5">
            <Link className="inline-block" aria-label="Dugsiiye home" href="/">
              <div className="relative h-9 w-[100px]">
                <img alt="Dugsiiye" loading="lazy" decoding="async" className="hidden object-contain dark:block" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/white_green.webp" />
                <img alt="Dugsiiye" loading="lazy" decoding="async" className="block object-contain dark:hidden" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/dark_green.webp" />
              </div>
            </Link>
            <p className="text-[#8D8D8D] dark:text-neutral-400 mt-5 mb-7 max-w-sm text-sm leading-6">
              <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                Become a Full Stack AI Engineer in 32 weeks.
              </span>
              {" "}The only Somali-language program teaching AI-assisted development.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="https://youtube.com/@dugsiiye" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#8D8D8D] transition-colors hover:border-neutral-300 hover:text-[#1E1E1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F5F3] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 dark:focus-visible:ring-offset-neutral-950">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
                <span className="sr-only">
                  YouTube
                </span>
              </a>
              <a href="https://github.com/dugsiiyeinc" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#8D8D8D] transition-colors hover:border-neutral-300 hover:text-[#1E1E1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F5F3] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 dark:focus-visible:ring-offset-neutral-950">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
                <span className="sr-only">
                  GitHub
                </span>
              </a>
              <a href="https://wa.me/252614251112" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#8D8D8D] transition-colors hover:border-neutral-300 hover:text-[#1E1E1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F5F3] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 dark:focus-visible:ring-offset-neutral-950">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="sr-only">
                  WhatsApp
                </span>
              </a>
              <a href="https://facebook.com/dugsiiyeinc" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#8D8D8D] transition-colors hover:border-neutral-300 hover:text-[#1E1E1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F5F3] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 dark:focus-visible:ring-offset-neutral-950">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
                <span className="sr-only">
                  Facebook
                </span>
              </a>
              <a href="https://twitter.com/dugsiiyeinc" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#8D8D8D] transition-colors hover:border-neutral-300 hover:text-[#1E1E1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F5F3] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 dark:focus-visible:ring-offset-neutral-950">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
                <span className="sr-only">
                  Twitter
                </span>
              </a>
              <a href="https://linkedin.com/company/dugsiiyeinc" target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#8D8D8D] transition-colors hover:border-neutral-300 hover:text-[#1E1E1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F5F3] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 dark:focus-visible:ring-offset-neutral-950">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
                <span className="sr-only">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-sm font-semibold text-[#1E1E1E] dark:text-neutral-100">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link className="text-sm text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/mentorship">
                  Mentorship Program
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/courses">
                  Courses
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/youtube">
                  YouTube
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/waa-maxay">
                  Qaamuuska
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/community">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-[#1E1E1E] dark:text-neutral-100">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link className="text-sm text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/ambassador">
                  Ambassador Program
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-[#1E1E1E] dark:text-neutral-100">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link className="text-sm text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/public-privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/public-terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/public-cookies">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link className="text-sm text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/public-refund">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-neutral-200 pt-8 sm:flex-row dark:border-neutral-800">
          <p className="text-sm text-[#8D8D8D] dark:text-neutral-400">
            ©{" "}{new Date().getFullYear()}{" "}Dugsiiye. All rights reserved.
          </p>
          <p className="text-sm text-[#8D8D8D] dark:text-neutral-400">
            Proudly built in Somalia
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none mt-6 select-none overflow-hidden">
        <span className="-mb-[0.24em] block text-center font-display text-[18vw] leading-none font-semibold tracking-[-0.04em] text-neutral-900/[0.04] dark:text-white/[0.05]">
          Dugsiiye
        </span>
      </div>
    </footer>
  );
}
