import SmartLink from "@/components/ui/SmartLink";
import type { Video } from "@/lib/data/youtube";
import { ArrowUpRightIcon, ClockCounterClockwiseIcon, ListNumbersIcon, NotePencilIcon, PlayFillIcon } from "@/components/ui/icons";

const BTN =
  "inline-flex items-center justify-center gap-1.5 rounded-full px-4 text-sm font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:focus-visible:ring-neutral-300 dark:focus-visible:ring-offset-neutral-950 h-9";
const BTN_PRIMARY = `${BTN} bg-(--ink) text-white shadow-sm hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100`;
const BTN_SECONDARY = `${BTN} border border-neutral-200 bg-white text-[#1E1E1E] hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800`;

export default function VideoCard({ video }: { video: Video }) {
  return (
    <article
      data-yt-card="true"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/60 bg-white shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_10px_30px_rgb(var(--ink-rgb)/0.07)] dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
    >
      <SmartLink className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300" href={`/youtube/${video.slug}`}>
        <span className="relative block aspect-video overflow-hidden bg-neutral-900">
          <img src={video.thumbnail} alt="" width="480" height="360" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
          <span className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgb(var(--ink-rgb)/0.26)]" aria-hidden="true" />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-(--ink)/70 via-(--ink)/25 to-transparent" aria-hidden="true" />
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-(--ink)" aria-hidden="true">
            <PlayFillIcon className="ml-0.5 h-5 w-5" />
          </span>
          <span className="absolute bottom-3 right-3 inline-flex items-center rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider tabular-nums text-white backdrop-blur-md">{video.duration}</span>
        </span>
        <h3 className="px-5 pt-5 font-display text-lg font-semibold leading-[1.3] tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">{video.title}</h3>
      </SmartLink>
      <div className="flex flex-1 flex-col px-5 pb-5">
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <span className="inline-flex items-center gap-1.5 text-[13px] text-[#8D8D8D] dark:text-neutral-400">
            <ClockCounterClockwiseIcon className="h-4 w-4" aria-hidden="true" />
            <span className="tabular-nums">{video.duration}</span>
          </span>
          {video.chapters ? (
            <span className="inline-flex items-center gap-1.5 text-[13px] text-[#8D8D8D] dark:text-neutral-400">
              <ListNumbersIcon className="h-4 w-4" aria-hidden="true" />
              <span className="tabular-nums">{video.chapters} cutub</span>
            </span>
          ) : null}
        </div>
        <p className="mt-4 line-clamp-3 border-t border-neutral-100 pt-4 text-sm leading-6 text-[#8D8D8D] dark:border-neutral-800 dark:text-neutral-400">{video.description}</p>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          <a href={`https://www.youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer" className={BTN_PRIMARY}>
            Daawo YouTube
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          {video.blogHref && (
            <SmartLink className={BTN_SECONDARY} href={video.blogHref}>
              <NotePencilIcon className="h-4 w-4" aria-hidden="true" />
              Qoraalka blog-ga
            </SmartLink>
          )}
        </div>
      </div>
    </article>
  );
}
