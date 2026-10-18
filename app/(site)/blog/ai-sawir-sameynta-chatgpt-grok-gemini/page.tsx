import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import YouTubeFacade from "@/components/blog/YouTubeFacade";
import ShareButton from "@/components/shared/ShareButton";
import ExpandableText from "@/components/shared/ExpandableText";

export const metadata: Metadata = {
  title: "Yaa Fiican Sawir Sameynta AI: ChatGPT, Grok Imagine iyo Gemini? | Dugsiiye Blog",
  description: "Thumbnails-ka Dugsiiye ee ugu dambeeyay oo dhan AI ayaa sameeyay. Qoraalkan waxaad ku ogaanaysaa tijaabo real ah oo saddexda tool isla shaqo la siiyay, kan guulaystay, iyo prompt-ka sawir fiican lagu helo.",
};

export default function Page() {
  return (
    <>
      <div className="relative min-h-screen bg-[#FAFAF9] dark:bg-neutral-950">
        <div className="relative">
          <div className="container py-2 pt-28 sm:pt-32" style={{ marginTop: "var(--banner-height, 0px)" }}>
            <Link className="inline-flex items-center text-[13px] font-medium text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/blog">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mr-1.5 h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
              </svg>
              Back to Journal
            </Link>
          </div>
          <article className="relative">
            <header className="container max-w-3xl pt-10 pb-12 lg:pt-14 lg:pb-16">
              <div className="mb-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
                <a className="transition-colors hover:text-[#1E1E1E] dark:hover:text-neutral-100" href="/blog/category/artificial-intelligence">
                  Artificial Intelligence
                </a>
                <span className="h-1 w-1 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <time dateTime="2026-08-27T12:57:04.869Z" className="tabular-nums">
                  August 27, 2026
                </time>
              </div>
              <h1 className="mb-6 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#1E1E1E] sm:text-5xl lg:text-[3.25rem] dark:text-neutral-50">
                Yaa Fiican Sawir Sameynta AI: ChatGPT, Grok Imagine iyo Gemini?
              </h1>
              <p className="mb-8 max-w-2xl text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
                Thumbnails-ka Dugsiiye ee ugu dambeeyay oo dhan AI ayaa sameeyay. Qoraalkan waxaad ku ogaanaysaa tijaabo real ah oo saddexda tool isla shaqo la siiyay, kan guulaystay, iyo prompt-ka sawir fiican lagu helo.
              </p>
              <div className="flex items-center justify-between gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                <a className="group flex items-center gap-3" href="/u/mchamoudadev">
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-neutral-100 ring-1 ring-neutral-200 dark:bg-neutral-800 dark:ring-neutral-800">
                    <img alt="Mohamud Osman" loading="lazy" decoding="async" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-[#1E1E1E] transition-opacity group-hover:opacity-80 dark:text-neutral-100">
                      Mohamud Osman
                      <button data-state="closed">
                        <svg viewBox="0 0 40 40" className="h-4 w-4">
                          <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v6.354h6.234L14.638 40l5.36-3.094L25.358 40l2.972-5.15h6.234v-6.354L40 25.359 36.906 20 40 14.64l-5.432-3.137V5.15h-6.234L25.358 0l-5.36 3.094z" fill="currentColor" className="text-primary" />
                          <circle cx="20" cy="20" r="14" fill="currentColor" className="text-primary" />
                          <path d="M17.5 24.33l-5.175-5.175-2.35 2.35L17.5 29.03l12.5-12.5-2.35-2.35z" fill="currentColor" className="text-primary-foreground" />
                        </svg>
                      </button>
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                      3 min read
                    </div>
                  </div>
                </a>
              </div>
            </header>
            <div className="container max-w-5xl mb-14 lg:mb-20">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-[#F4F4F2] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <img alt="Yaa Fiican Sawir Sameynta AI: ChatGPT, Grok Imagine iyo Gemini?" decoding="async" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/blog-thumbs/ai-sawir-sameynta-chatgpt-grok-gemini-v3.png" />
              </div>
            </div>
            <div className="container max-w-4xl">
              <a className="group mb-10 flex items-center justify-between gap-4 rounded-2xl border border-neutral-200/60 bg-white px-5 py-4 shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_10px_30px_rgb(var(--ink-rgb)/0.07)] dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700" href="/youtube/yaa-fiican-google-gemeni-grok-iyo-chatgpt-markay-timaado-sawir-sameynta">
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-100" aria-hidden="true">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="ml-0.5 h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
                      Video-ga casharkan
                    </span>
                    <span className="block truncate text-[15px] font-medium text-[#1E1E1E] dark:text-neutral-100">
                      Yaa Fiican Google Gemeni , Grok iyo ChatGPT Markay Timaado Sawir Sameynta
                    </span>
                    <span className="block text-[13px] tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                      22 daqiiqo · 9 cutub
                    </span>
                  </span>
                </span>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 shrink-0 text-[#8D8D8D] dark:text-neutral-400" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                </svg>
              </a>
              <div className="prose prose-lg mb-16 max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-[-0.02em] prose-headings:text-[#1E1E1E] prose-a:text-[#1E1E1E] hover:prose-a:text-[#8D8D8D] prose-img:rounded-2xl dark:prose-invert dark:prose-headings:text-neutral-50 dark:prose-a:text-neutral-100 dark:hover:prose-a:text-neutral-400">
                <p className="mb-4 leading-relaxed">
                  Thumbnails-ka video-yada Dugsiiye ee ugu dambeeyay haddaad fiiriso, way yar tahay in mid designer sameeyay aad aragto: dhammaan ChatGPT ayaa sameeyay. Marka Grok ay soo saartay Imagine Image 2.0, waxaan is iri aan tijaabiyo: saddexda tool isla shaqo ayaan siiyay, isla sawir iyo isla prompt, si aan u aragno yaa fiican.
                </p>
                <p className="mb-4 leading-relaxed">
                  Video ahaan tijaabada halkan ka daawo:
                </p>
                <span className="not-prose my-6 block overflow-hidden rounded-2xl border border-neutral-200 bg-black dark:border-neutral-800">
                  <span className="relative block aspect-video w-full">
                    <YouTubeFacade videoId="mB4FA8FfWOU" title="Yaa Fiican Google Gemini, Grok iyo ChatGPT Markay Timaado Sawir Sameynta" className="group absolute inset-0 block h-full w-full cursor-pointer">
  <img src="/yt/vi/mB4FA8FfWOU/maxresdefault.jpg" alt="Yaa Fiican Google Gemini, Grok iyo ChatGPT Markay Timaado Sawir Sameynta" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
  <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
  <span className="absolute left-1/2 top-1/2 flex h-16 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#FF0000] shadow-lg transition-transform group-hover:scale-110">
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-8 w-8 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
    </svg>
  </span>
  <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-left text-sm font-medium text-white">
    Yaa Fiican Google Gemini, Grok iyo ChatGPT Markay Timaado Sawir Sameynta
  </span>
</YouTubeFacade>
                  </span>
                </span>
                <h3 className="mt-6 mb-3 font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                  Tijaabada: hal prompt, hal sawir, saddex tool
                </h3>
                <p className="mb-4 leading-relaxed">
                  Shaqadu waxay ahayd YouTube thumbnail live-ka caawa: title-ka "Live stream with MC", design simple oo qurux badan, font modern ah, sawirkayga oo portrait ah, kadibna edit: colors-ka Dugsiiye brand ahaan u isticmaal, live indicator guduud ah ku dar.
                </p>
                <p className="mb-4 leading-relaxed">
                  <strong>
                    Grok Imagine
                  </strong>
                  {" "}(grok.com/imagine, qayb free ah wuu leeyahay). Markii hore video ayuu ii sameeyay halkii sawir, laakiin markii labaad sawir macquul ah ayuu keenay: fast, font size fiican, editing tools-na wuu leeyahay (crop, aspect ratio, brush). Sawirkiisu waa fiican yahay, laakiin edit-ka markaan siiyay, GPT wuu ka hooseeyay.
                </p>
                <p className="mb-4 leading-relaxed">
                  <strong>
                    ChatGPT
                  </strong>
                  . Isla prompt iyo isla sawir. Natiijadu waxay ahayd mid aan la barbardhigi karin: sawirka iyo edit-ka labadaba. Colors-ka Dugsiiye si sax ah ayuu u qaatay, live indicator-ka wuu ku daray, xataa wax yar oo aanan weydiin ayuu soo hagaajiyay. Waa legend, game changer waaye.
                </p>
                <p className="mb-4 leading-relaxed">
                  <strong>
                    Gemini
                  </strong>
                  {" "}(Nano Banana, gemini.google.com ama Google AI Studio). Fast waaye, image editing-kana ilaa xad wuu ku fiican yahay, laakiin natiijadu waxay ahayd mid beginner camal ah marka la barbardhigo GPT.
                </p>
                <h3 className="mt-6 mb-3 font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                  Natiijada
                </h3>
                <p className="mb-4 leading-relaxed">
                  Adigu waa judge-ka, laakiin aniga maalin cad GPT ayaan siinayaa: sawir sameynta iyo image editing-ka, ChatGPT waa number one. Grok wuxuu ku fiican yahay speed-ka, sawirkiisuna wuu fiican yahay. Gemini waa fast oo edit fudud wuu qaban karaa. Saddexdaba si free ah ayaad u tijaabin kartaa.
                </p>
                <h3 className="mt-6 mb-3 font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                  Prompt-ka sawir fiican lagu helo
                </h3>
                <p className="mb-4 leading-relaxed">
                  Waxa natiijada kala saara badanaa waa prompt-ka. Waxa aan mar walba ku daro:
                </p>
                <ol className="list-decimal list-inside mb-4 space-y-2">
                  <li className="text-[#8D8D8D] dark:text-neutral-400">
                    <strong>
                      Waxa la rabo
                    </strong>
                    : "YouTube thumbnail", ma aha "sawir ii samee"
                  </li>
                  <li className="text-[#8D8D8D] dark:text-neutral-400">
                    <strong>
                      Style-ka
                    </strong>
                    : simple, beautiful, modern font
                  </li>
                  <li className="text-[#8D8D8D] dark:text-neutral-400">
                    <strong>
                      Title-ka
                    </strong>
                    {" "}sawirka lagu qorayo
                  </li>
                  <li className="text-[#8D8D8D] dark:text-neutral-400">
                    <strong>
                      Sawirkaaga
                    </strong>
                    : upload garee oo dheh "use this image as a portrait"
                  </li>
                  <li className="text-[#8D8D8D] dark:text-neutral-400">
                    <strong>
                      Brand colors
                    </strong>
                    : "use these colors as brand colors"
                  </li>
                  <li className="text-[#8D8D8D] dark:text-neutral-400">
                    <strong>
                      Edit gaar ah
                    </strong>
                    : intaadan prompt cusub qorin, edit ku samee oo meesha la beddelayo sheeg
                  </li>
                </ol>
                <h3 className="mt-6 mb-3 font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                  Su'aalo badanaa la weydiiyo
                </h3>
                <p className="mb-4 leading-relaxed">
                  <strong>
                    Designer miyaanan u baahnayn haddaba?
                  </strong>
                  {" "}Thumbnails iyo sawirro social media, AI-gu si fiican ayuu u qabanayaa. Design app dhammaystiran iyo brand, qof design taste leh weli waa muhiim. AI-gu wuxuu awood siiyaa qofka xirfadda leh:{" "}
                  <a href="/blog/soft-skills-xilliga-ai" className="text-[#1E1E1E] underline underline-offset-4 transition-colors hover:text-[#8D8D8D] dark:text-neutral-100 dark:hover:text-neutral-400">
                    10-ka Soft Skills ee Xilliga AI-ga
                  </a>
                  .
                </p>
                <p className="mb-4 leading-relaxed">
                  <strong>
                    Coding sidee ugu fudud loo bartaa?
                  </strong>
                  {" "}Su'aashan live-ka ayaa la i weydiiyay. Waddo fudud oo gooni ah ma jirto, laakiin basic-ka ka bilow: web haddaad rabto HTML, programming guud haddaad rabto Python. Aasaaska si fiican u fahan, kadib waddooyinka kale ayaa kuu furmaya.{" "}
                  <a href="/blog/baro-programming-af-soomaali" className="text-[#1E1E1E] underline underline-offset-4 transition-colors hover:text-[#8D8D8D] dark:text-neutral-100 dark:hover:text-neutral-400">
                    Baro Programming Af-Soomaali
                  </a>
                  .
                </p>
              </div>
              <div className="flex items-center gap-4 py-4">
                <ShareButton className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 border border-neutral-200 bg-white text-[#1E1E1E] hover:-translate-y-px hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800 disabled:border-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-500 dark:disabled:border-neutral-800 dark:disabled:bg-neutral-800/50 dark:disabled:text-neutral-500 h-9 px-4 gap-1.5">
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M176,160a39.89,39.89,0,0,0-28.62,12.09l-46.1-29.63a39.8,39.8,0,0,0,0-28.92l46.1-29.63a40,40,0,1,0-8.66-13.45l-46.1,29.63a40,40,0,1,0,0,55.82l46.1,29.63A40,40,0,1,0,176,160Zm0-128a24,24,0,1,1-24,24A24,24,0,0,1,176,32ZM64,152a24,24,0,1,1,24-24A24,24,0,0,1,64,152Zm112,72a24,24,0,1,1,24-24A24,24,0,0,1,176,224Z" />
  </svg>
  Share
</ShareButton>
              </div>
              <div className="my-8 border-b border-t border-neutral-200 py-8 dark:border-neutral-800">
                <div className="relative space-y-8">
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-white shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="shrink-0">
                          <div className="relative aspect-4/5 w-64 overflow-hidden rounded-2xl border border-neutral-200 bg-[#F4F4F2] dark:border-neutral-800 dark:bg-neutral-900">
                            <img alt="Mohamud Osman" loading="lazy" decoding="async" className="object-cover transition duration-500 group-hover:scale-105" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-4">
                            <h1 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50">
                              Mohamud Osman
                            </h1>
                            <button data-state="closed">
                              <svg viewBox="0 0 40 40" className="h-6 w-6">
                                <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v6.354h6.234L14.638 40l5.36-3.094L25.358 40l2.972-5.15h6.234v-6.354L40 25.359 36.906 20 40 14.64l-5.432-3.137V5.15h-6.234L25.358 0l-5.36 3.094z" fill="currentColor" className="text-primary" />
                                <circle cx="20" cy="20" r="14" fill="currentColor" className="text-primary" />
                                <path d="M17.5 24.33l-5.175-5.175-2.35 2.35L17.5 29.03l12.5-12.5-2.35-2.35z" fill="currentColor" className="text-primary-foreground" />
                              </svg>
                            </button>
                          </div>
                          <ExpandableText text="A seasoned software engineer with over 11 years of experience in full-stack development. Mohamed has founded multiple successful startups including Dugsiiye and Imagingface, and has mentored thousands of developers worldwide. His expertise spans from frontend technologies like React and Next.js to backend systems, DevOps, and AI/ML applications." className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400" buttonClassName="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#1E1E1E] underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:text-neutral-100" />
                          <div className="space-y-8">
                            <div className="flex items-center gap-8">
                              <div className="flex items-center gap-3">
                                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200">
                                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z" />
                                  </svg>
                                </span>
                                <div>
                                  <div className="font-display text-2xl font-semibold tabular-nums tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                                    23
                                  </div>
                                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
                                    Articles
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 mt-4">
                              <a target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700" href="https://x.com/mchamoudadev">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                              </a>
                              <a target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700" href="https://github.com/mchamoudadev">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                              </a>
                              <a target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700" href="https://www.linkedin.com/in/mchamoudadev/">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                              </a>
                              <a target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700" href="/">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-white p-8 shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:border-neutral-800 dark:bg-neutral-900">
                    <h2 className="mb-6 font-display text-2xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                      Recent Articles
                    </h2>
                    <div className="space-y-4">
                      <Link className="group block" href="/blog/xirfadaha-2026-xilliga-ai">
                        <div className="-mx-4 flex items-center gap-6 rounded-2xl p-4 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                          <div className="relative aspect-4/3 w-20 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800">
                            <img alt="Hadda Baro Xirfadahan 2026: 9-ka Role ee Coding-ka ee Xilliga AI-ga" loading="lazy" decoding="async" className="object-cover transition duration-500 group-hover:scale-105" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/blog-thumbs/xirfadaha-2026-xilliga-ai-v3.png" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="mb-2 font-display text-lg font-semibold leading-[1.3] tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                              Hadda Baro Xirfadahan 2026: 9-ka Role ee Coding-ka ee Xilliga AI-ga
                            </h3>
                            <time className="text-[11px] font-semibold uppercase tracking-wider tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                              August 27, 2026
                            </time>
                          </div>
                          <div className="shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition-colors group-hover:bg-neutral-200 dark:bg-neutral-800 dark:group-hover:bg-neutral-700">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5 text-[#1E1E1E] transition-transform duration-300 group-hover:translate-x-0.5 dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link className="group block" href="/blog/baro-react-js-af-soomaali">
                        <div className="-mx-4 flex items-center gap-6 rounded-2xl p-4 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                          <div className="relative aspect-4/3 w-20 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800">
                            <img alt="Baro React JS Af-Soomaali: Full Course 22+ Saac oo Bilaash ah" loading="lazy" decoding="async" className="object-cover transition duration-500 group-hover:scale-105" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/blog-thumbs/baro-react-js-af-soomaali-v3.png" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="mb-2 font-display text-lg font-semibold leading-[1.3] tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                              Baro React JS Af-Soomaali: Full Course 22+ Saac oo Bilaash ah
                            </h3>
                            <time className="text-[11px] font-semibold uppercase tracking-wider tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                              August 27, 2026
                            </time>
                          </div>
                          <div className="shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition-colors group-hover:bg-neutral-200 dark:bg-neutral-800 dark:group-hover:bg-neutral-700">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5 text-[#1E1E1E] transition-transform duration-300 group-hover:translate-x-0.5 dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <a className="group block" href="/blog/soft-skills-xilliga-ai">
                        <div className="-mx-4 flex items-center gap-6 rounded-2xl p-4 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                          <div className="relative aspect-4/3 w-20 shrink-0 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800">
                            <img alt="10-ka Soft Skills ee Lagaaga Baahan Yahay Xilliga AI-ga" loading="lazy" decoding="async" className="object-cover transition duration-500 group-hover:scale-105" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/blog-thumbs/soft-skills-xilliga-ai-v3.png" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="mb-2 font-display text-lg font-semibold leading-[1.3] tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                              10-ka Soft Skills ee Lagaaga Baahan Yahay Xilliga AI-ga
                            </h3>
                            <time className="text-[11px] font-semibold uppercase tracking-wider tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                              August 27, 2026
                            </time>
                          </div>
                          <div className="shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition-colors group-hover:bg-neutral-200 dark:bg-neutral-800 dark:group-hover:bg-neutral-700">
                              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5 text-[#1E1E1E] transition-transform duration-300 group-hover:translate-x-0.5 dark:text-neutral-200" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <a className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/u/mchamoudadev">
                      <span>
                        View all articles
                      </span>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                    Discussion{" "}
                    <span className="tabular-nums text-[#8D8D8D] dark:text-neutral-400">
                      (0)
                    </span>
                  </h2>
                </div>
                <div className="mb-8 flex items-center gap-3 rounded-2xl border border-neutral-200/60 bg-white p-4 shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:border-neutral-800 dark:bg-neutral-900">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5 shrink-0 text-[#8D8D8D] dark:text-neutral-400" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z" />
                  </svg>
                  <p className="text-sm text-[#8D8D8D] dark:text-neutral-400">
                    Please{" "}
                    <Link className="font-medium text-[#1E1E1E] underline-offset-4 hover:underline dark:text-neutral-100" href="/auth/login">
                      sign in
                    </Link>
                    {" "}to join the discussion
                  </p>
                </div>
                <div className="space-y-6" />
              </div>
              <div className="mb-20 border-t border-neutral-200 pt-12 dark:border-neutral-800">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
                  More Reading
                </p>
                <h2 className="mb-10 font-display text-4xl font-semibold tracking-[-0.03em] text-[#1E1E1E] md:text-[44px] md:leading-[1.08] dark:text-neutral-50">
                  More like this.
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <a className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAFAF9] sm:rounded-[1.75rem] dark:focus-visible:ring-offset-neutral-950" href="/blog/gemini-3-7-flash-af-soomaali">
                    <article className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-inset ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] sm:rounded-[1.75rem]">
                      <img alt="Gemini 3.7 Flash Waan Tijaabiyay: Ma Ku Fiican Yahay Design-ka?" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/blog-thumbs/gemini-3-7-flash-af-soomaali-v3.png" />
                      <div aria-hidden="true" className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgb(var(--ink-rgb)/0.26)]" />
                      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
                      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-(--ink) via-(--ink)/62 to-transparent" />
                      <span className="absolute right-3.5 top-3.5 inline-flex max-w-[70%] items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md sm:right-4 sm:top-4">
                        <span className="truncate">
                          Artificial Intelligence
                        </span>
                      </span>
                      <div className="relative p-4 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                        <time dateTime="2026-08-27T11:11:41.720Z" className="block text-[11px] font-semibold uppercase tracking-wider tabular-nums text-white/60">
                          Aug 27, 2026
                        </time>
                        <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-[1.3] tracking-[-0.02em] text-white">
                          Gemini 3.7 Flash Waan Tijaabiyay: Ma Ku Fiican Yahay Design-ka?
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/70">
                          Google waxay soo saartay Gemini 3.7 Flash, waxaana ku tijaabiyay AntiGravity design real ah. Qoraalkan waxaad ku ogaanaysaa natiijada, khaladka ugu badan ee design-ka AI-ga, iyo sida prompt fiican wax u beddesho.
                        </p>
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-2 text-[13px] text-white/70">
                            <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-white/15">
                              <img alt="Mohamud Osman" loading="lazy" decoding="async" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg" />
                            </span>
                            <span className="truncate">
                              Mohamud Osman
                            </span>
                            <span className="hidden shrink-0 tabular-nums sm:inline">
                              · 3 min read
                            </span>
                          </div>
                          <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </article>
                  </a>
                  <a className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAFAF9] sm:rounded-[1.75rem] dark:focus-visible:ring-offset-neutral-950" href="/blog/waa-maxay-deepseek">
                    <article className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-inset ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] sm:rounded-[1.75rem]">
                      <img alt="Waa Maxay DeepSeek? Model-ka Reasoning-ka ah ee Adduunka ka Qaylisiiyay" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/blog-thumbs/waa-maxay-deepseek-v3.png" />
                      <div aria-hidden="true" className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgb(var(--ink-rgb)/0.26)]" />
                      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
                      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-(--ink) via-(--ink)/62 to-transparent" />
                      <span className="absolute right-3.5 top-3.5 inline-flex max-w-[70%] items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md sm:right-4 sm:top-4">
                        <span className="truncate">
                          Artificial Intelligence
                        </span>
                      </span>
                      <div className="relative p-4 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                        <time dateTime="2026-08-26T09:47:21.129Z" className="block text-[11px] font-semibold uppercase tracking-wider tabular-nums text-white/60">
                          Aug 26, 2026
                        </time>
                        <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-[1.3] tracking-[-0.02em] text-white">
                          Waa Maxay DeepSeek? Model-ka Reasoning-ka ah ee Adduunka ka Qaylisiiyay
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/70">
                          DeepSeek waa model AI ah oo buuq weyn dhaliyay. Qoraalkan waxaad ku fahmaysaa waxa uu yahay, waxa reasoning models ka duwan yihiin kuwii hore, iyo sida computer-kaaga local-ka ah loogu run-gareeyo.
                        </p>
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-2 text-[13px] text-white/70">
                            <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-white/15">
                              <img alt="Mohamud Osman" loading="lazy" decoding="async" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg" />
                            </span>
                            <span className="truncate">
                              Mohamud Osman
                            </span>
                            <span className="hidden shrink-0 tabular-nums sm:inline">
                              · 3 min read
                            </span>
                          </div>
                          <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </article>
                  </a>
                  <a className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAFAF9] sm:rounded-[1.75rem] dark:focus-visible:ring-offset-neutral-950" href="/blog/waa-maxay-llms">
                    <article className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-inset ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] sm:rounded-[1.75rem]">
                      <img alt="Waa Maxay LLMs (Large Language Models)? Sida ChatGPT iyo Claude u Shaqeeyaan" loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/blog-thumbs/waa-maxay-llms-v3.png" />
                      <div aria-hidden="true" className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgb(var(--ink-rgb)/0.26)]" />
                      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
                      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-(--ink) via-(--ink)/62 to-transparent" />
                      <span className="absolute right-3.5 top-3.5 inline-flex max-w-[70%] items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md sm:right-4 sm:top-4">
                        <span className="truncate">
                          Artificial Intelligence
                        </span>
                      </span>
                      <div className="relative p-4 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
                        <time dateTime="2026-08-26T05:16:47.563Z" className="block text-[11px] font-semibold uppercase tracking-wider tabular-nums text-white/60">
                          Aug 26, 2026
                        </time>
                        <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-[1.3] tracking-[-0.02em] text-white">
                          Waa Maxay LLMs (Large Language Models)? Sida ChatGPT iyo Claude u Shaqeeyaan
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/70">
                          ChatGPT, Claude, Gemini: dhammaan waa Large Language Models. Qoraalkan waxaad ku fahmaysaa waxa ay yihiin, maxay u yihiin large, sida loo tababaro, iyo sida ay jawaabta kuugu soo saaraan.
                        </p>
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-2 text-[13px] text-white/70">
                            <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-white/15">
                              <img alt="Mohamud Osman" loading="lazy" decoding="async" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg" />
                            </span>
                            <span className="truncate">
                              Mohamud Osman
                            </span>
                            <span className="hidden shrink-0 tabular-nums sm:inline">
                              · 4 min read
                            </span>
                          </div>
                          <span aria-hidden="true" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink) sm:flex">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </article>
                  </a>
                </div>
              </div>
            </div>
          </article>
          <Footer />
        </div>
        <div className="fixed bottom-8 right-8 z-50">
          <Link className="group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:focus-visible:ring-offset-neutral-950 bg-(--ink) text-white hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 text-sm h-10 px-5 shadow-[0_10px_30px_rgb(var(--ink-rgb)/0.18)]" href="/blog">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
            </svg>
            <span>
              Back to Journal
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
