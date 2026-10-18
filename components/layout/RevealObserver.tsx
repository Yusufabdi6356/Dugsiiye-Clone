"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const STAGGER_MS = 80;
const MAX_DELAY_MS = 480;

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reveal = (el: HTMLElement) => {
      const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.hasAttribute("data-reveal")) : [];
      const delay = Math.min(Math.max(siblings.indexOf(el), 0) * STAGGER_MS, MAX_DELAY_MS);
      el.style.setProperty("--reveal-delay", `${delay}ms`);
      el.classList.add("is-visible");
      window.setTimeout(() => {
        el.removeAttribute("data-reveal");
        el.classList.remove("is-visible");
        el.style.removeProperty("--reveal-delay");
      }, 700 + delay);
    };

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            io.unobserve(e.target);
            reveal(e.target as HTMLElement);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    const watch = (root: ParentNode) => root.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));
    watch(document);

    const mo = new MutationObserver((records) => {
      for (const r of records) {
        r.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return;
          if (n.hasAttribute("data-reveal")) io.observe(n);
          else watch(n);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
