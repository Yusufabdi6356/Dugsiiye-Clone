"use client";

import SmartLink from "@/components/ui/SmartLink";
import { useState } from "react";
import type { CommunityPost } from "@/lib/data/community";
import { CaretDownIcon, ChatCircleIcon, ClockIcon, HeartFillIcon, HeartIcon, ShareNetworkIcon, VerifiedBadgeIcon } from "@/components/ui/icons";

const CARD =
  "rounded-2xl border border-neutral-200/60 bg-white p-5 shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] transition-all duration-300 lg:p-6 dark:border-neutral-800 dark:bg-neutral-900 hover:border-neutral-300 hover:shadow-[0_10px_30px_rgb(var(--ink-rgb)/0.07)] dark:hover:border-neutral-700";
const PROSE =
  'streamdown-wrapper prose prose-slate dark:prose-invert max-w-none prose-sm [&_a[href^="/community/users/"]]:text-blue-600 [&_a[href^="/community/users/"]]:hover:text-blue-800 [&_a[href^="/community/users/"]]:font-semibold [&_a[href^="/community/users/"]]:bg-blue-50 [&_a[href^="/community/users/"]]:dark:bg-blue-950/30 [&_a[href^="/community/users/"]]:px-1.5 [&_a[href^="/community/users/"]]:py-0.5 [&_a[href^="/community/users/"]]:rounded-md [&_a[href^="/community/users/"]]:no-underline [&_a[href^="/community/users/"]]:transition-all [&_a[href^="/community/users/"]]:duration-200 [&_a[href^="/community/users/"]]:shadow-xs [&_a[href^="/community/users/"]]:hover:shadow [&_pre]:bg-muted [&_pre]:border [&_pre]:border-border [&_pre]:rounded-lg [&_pre]:my-4 [&_pre]:overflow-x-auto [&_code:not(pre_code)]:bg-muted [&_code:not(pre_code)]:px-1.5 [&_code:not(pre_code)]:py-0.5 [&_code:not(pre_code)]:rounded [&_code:not(pre_code)]:text-sm [&_code:not(pre_code)]:font-mono [&_code:not(pre_code)]:border [&_code:not(pre_code)]:border-border [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-2 [&_li]:my-1 [&_table]:border-collapse [&_table]:w-full [&_table]:my-4 [&_th]:border [&_th]:border-border [&_th]:bg-muted [&_th]:px-4 [&_th]:py-2 [&_th]:font-semibold [&_th]:text-left [&_td]:border [&_td]:border-border [&_td]:px-4 [&_td]:py-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-4 [&_blockquote]:text-muted-foreground [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mt-6 [&_h1]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-5 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2 [&_h4]:text-base [&_h4]:font-semibold [&_h4]:mt-3 [&_h4]:mb-2 [&_p]:my-2 [&_p]:leading-relaxed [&_a:not([href^="/community/users/"])]:text-green-600 [&_a:not([href^="/community/users/"])]:hover:text-green-800 [&_a:not([href^="/community/users/"])]:font-medium [&_a:not([href^="/community/users/"])]:underline [&_a:not([href^="/community/users/"])]:decoration-dotted [&_a:not([href^="/community/users/"])]:underline-offset-2 mb-3 leading-relaxed text-[#1E1E1E] dark:text-neutral-100';
const BTN_TAIL =
  "ring-offset-background transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:bg-transparent disabled:text-neutral-500 dark:disabled:bg-transparent dark:disabled:text-neutral-500";
const ACTION = `inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ${BTN_TAIL} h-9 px-4`;
const VIEW_POST = `inline-flex items-center justify-center whitespace-nowrap rounded-full ${BTN_TAIL} h-9 px-4 text-xs font-medium text-[#8D8D8D] hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100`;
const COMMENTS = `inline-flex items-center whitespace-nowrap rounded-full font-medium ${BTN_TAIL} h-10 px-5 py-2 w-full justify-between text-sm text-[#8D8D8D] hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100`;
const FILL_IMG: React.CSSProperties = { position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" };
const GRID_IMG = "object-cover transition-transform group-hover:scale-105";

function GridImage({ src, alt, className, onOpen, children }: { src: string; alt: string; className: string; onOpen: () => void; children?: React.ReactNode }) {
  return (
    <div className={`relative cursor-pointer group ${className}`} onClick={onOpen}>
      <img alt={alt} loading="lazy" decoding="async" className={GRID_IMG} style={FILL_IMG} src={src} />
      {children}
    </div>
  );
}

function Media({ media, onOpen }: { media: NonNullable<CommunityPost["media"]>; onOpen: (i: number) => void }) {
  const { layout, images, alt, more } = media;
  if (layout === "single") {
    return (
      <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
        <div className="relative w-full cursor-pointer group" onClick={() => onOpen(0)}>
          <img alt={alt} width="0" height="0" decoding="async" className="w-full h-auto max-h-[600px] min-h-[200px] object-contain bg-[#F4F4F2] dark:bg-neutral-900 transition-transform group-hover:scale-[1.01]" style={{ width: "100%", height: "auto" }} src={images[0]} />
        </div>
      </div>
    );
  }
  if (layout === "trio") {
    return (
      <div className="grid grid-cols-3 gap-1 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 h-80">
        <GridImage src={images[0]} alt={alt} className="col-span-2 h-full" onOpen={() => onOpen(0)} />
        <div className="flex flex-col gap-1 h-full">
          <GridImage src={images[1]} alt={alt} className="flex-1" onOpen={() => onOpen(1)} />
          <GridImage src={images[2]} alt={alt} className="flex-1" onOpen={() => onOpen(2)} />
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 h-80">
      {images.map((src, i) => (
        <GridImage key={src} src={src} alt={alt} className="h-full" onOpen={() => onOpen(i)}>
          {more && i === images.length - 1 ? (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity group-hover:bg-black/50">
              <span className="text-white font-semibold text-xl">+{more}</span>
            </div>
          ) : null}
        </GridImage>
      ))}
    </div>
  );
}

export default function PostCard({ post, onTag, onOpenImage }: { post: CommunityPost; onTag?: (tag: string) => void; onOpenImage: (src: string) => void }) {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const { author } = post;

  const share = async () => {
    const url = `${window.location.origin}/community/posts/${post.id}`;
    try {
      if (navigator.share) await navigator.share({ url });
      else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    } catch {}
  };

  return (
    <div className={CARD}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <SmartLink className="shrink-0" href={author.href}>
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 transition-all hover:ring-2 hover:ring-neutral-200 dark:hover:ring-neutral-700">
              {author.avatar ? (
                <img className="aspect-square h-full w-full rounded-full object-cover" alt={author.name} src={author.avatar} />
              ) : (
                <span className="flex h-full w-full items-center justify-center rounded-full bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-200">{author.initials}</span>
              )}
            </span>
          </SmartLink>
          <div>
            <div className="flex items-center space-x-2">
              <SmartLink className="text-sm font-medium transition-colors text-[#1E1E1E] hover:text-black dark:text-neutral-100 dark:hover:text-white" href={author.href}>
                {author.name}
              </SmartLink>
              {author.verified && (
                <button data-state="closed" title="Verified">
                  <VerifiedBadgeIcon />
                </button>
              )}
            </div>
            <div className="flex items-center space-x-2 text-xs text-[#8D8D8D] dark:text-neutral-400">
              <ClockIcon className="h-3 w-3" />
              <span>{post.time}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className={PROSE}>
          <div className="space-y-4 whitespace-normal" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
        </div>
      </div>
      {post.media && (
        <div className="mb-4">
          <Media media={post.media} onOpen={(i) => onOpenImage(post.media!.images[i])} />
        </div>
      )}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.map((t) => (
            <span key={t} onClick={() => onTag?.(t)} className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-[#8D8D8D] dark:bg-neutral-800 dark:text-neutral-400 cursor-pointer">
              #{t}
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center justify-between border-t border-neutral-100 pt-3 dark:border-neutral-800">
        <div className="flex items-center space-x-4">
          <button onClick={() => setLiked((l) => !l)} aria-pressed={liked} className={`${ACTION} ${liked ? "text-red-600 dark:text-red-400" : "text-[#8D8D8D] hover:text-red-600 dark:text-neutral-400 dark:hover:text-red-400"}`}>
            {liked ? <HeartFillIcon className="h-4 w-4 mr-2" /> : <HeartIcon className="h-4 w-4 mr-2" />}
            <span className="tabular-nums">{post.likes + (liked ? 1 : 0)}</span>
          </button>
          <button className={`${ACTION} text-[#8D8D8D] hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100`}>
            <ChatCircleIcon className="h-4 w-4 mr-2" />
            <span className="tabular-nums">{post.comments}</span>
          </button>
          <button onClick={share} className={`${ACTION} text-[#8D8D8D] hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100`}>
            <ShareNetworkIcon className="h-4 w-4 mr-2" />
            <span>{copied ? "Copied!" : "Share"}</span>
          </button>
        </div>
        <SmartLink href={`/community/posts/${post.id}`}>
          <button className={VIEW_POST}>View post</button>
        </SmartLink>
      </div>
      {post.likedBy && (
        <div className="pt-2">
          <div className="text-sm text-[#8D8D8D] dark:text-neutral-400 ">{post.likedBy}</div>
        </div>
      )}
      <div className="border-t border-neutral-100 dark:border-neutral-800">
        <div className="p-4">
          <SmartLink href={`/community/posts/${post.id}`} className={COMMENTS}>
            <div className="flex items-center space-x-2">
              <ChatCircleIcon className="h-4 w-4" />
              <span>{post.commentsLabel}</span>
            </div>
            <CaretDownIcon className="h-4 w-4" />
          </SmartLink>
        </div>
      </div>
    </div>
  );
}
