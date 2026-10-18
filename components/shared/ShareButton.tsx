"use client";

import { useState } from "react";

export default function ShareButton({ className, children }: { className: string; children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: document.title, url });
      else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }
    } catch {}
  };

  return (
    <button className={className} onClick={share} aria-live="polite">
      {copied ? "Link copied!" : children}
    </button>
  );
}
