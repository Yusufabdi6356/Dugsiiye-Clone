import SmartLink from "@/components/ui/SmartLink";
import type { BlogPost } from "@/lib/data/blog";

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <SmartLink className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAFAF9] sm:rounded-[1.75rem] dark:focus-visible:ring-offset-neutral-950" href={`/blog/${post.slug}`}>
      <article className="relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-inset ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_18px_44px_rgb(var(--ink-rgb)/0.22)] sm:rounded-[1.75rem]">
        <img alt={post.title} loading="lazy" decoding="async" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src={post.thumbnail} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgb(var(--ink-rgb)/0.26)]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-(--ink) via-(--ink)/62 to-transparent" />
        <span className="absolute right-3.5 top-3.5 inline-flex max-w-[70%] items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md sm:right-4 sm:top-4">
          <span className="truncate">
    {post.category}
    </span>
        </span>
        <div className="relative p-4 [text-shadow:0_1px_8px_rgb(var(--ink-rgb)/0.5)] sm:p-5">
          <time dateTime={post.date} className="block text-[11px] font-semibold uppercase tracking-wider tabular-nums text-white/60">
    {post.dateLabel}
    </time>
          <h3 className="mt-1.5 line-clamp-2 font-display text-lg font-semibold leading-[1.3] tracking-[-0.02em] text-white">
    {post.title}
    </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/70">
    {post.excerpt}
    </p>
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2 text-[13px] text-white/70">
              <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full bg-white/15">
                <img alt={post.author} loading="lazy" decoding="async" className="object-cover" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src={post.authorAvatar} />
              </span>
              <span className="truncate">
    {post.author}
    </span>
              <span className="hidden shrink-0 tabular-nums sm:inline">
                ·{" "}{post.readMinutes} min read
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
    </SmartLink>
  );
}
