"use client";

import { useState } from "react";

export default function YouTubeFacade({ videoId, title, className, children }: { videoId: string; title: string; className: string; children: React.ReactNode }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button type="button" aria-label={`Daawo: ${title}`} className={className} onClick={() => setPlaying(true)}>
      {children}
    </button>
  );
}
