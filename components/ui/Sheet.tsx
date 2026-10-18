"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "./icons";

const OVERLAY =
  "fixed inset-0 z-50 bg-(--ink)/25 backdrop-blur-sm dark:bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0";
const BASE =
  "fixed z-50 text-[#1E1E1E] shadow-[0_20px_60px_rgb(var(--ink-rgb)/0.14)] transition ease-in-out dark:text-neutral-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500";
const SIDES = {
  left: "inset-y-0 left-0 h-full rounded-r-2xl border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
  right: "inset-y-0 right-0 h-full rounded-l-2xl data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
};
const CLOSE =
  "absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-[#8D8D8D] transition-colors hover:bg-neutral-100 hover:text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100";

type Props = {
  open: boolean;
  onClose: () => void;
  side: "left" | "right";
  className: string;
  labelledBy?: string;
  children: React.ReactNode;
};

export default function Sheet({ open, onClose, side, className, labelledBy, children }: Props) {
  const [mounted, setMounted] = useState(open);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKey);
      };
    }
    const t = setTimeout(() => setMounted(false), 300);
    return () => clearTimeout(t);
  }, [open, onClose]);

  if (!mounted) return null;
  const state = open ? "open" : "closed";

  return createPortal(
    <>
      <div data-state={state} onClick={onClose} className={OVERLAY} style={{ pointerEvents: "auto" }} aria-hidden="true" />
      <div role="dialog" aria-modal="true" aria-labelledby={labelledBy} data-state={state} className={`${BASE} ${SIDES[side]} ${className}`} tabIndex={-1} style={{ pointerEvents: "auto" }}>
        {children}
        <button type="button" onClick={onClose} className={CLOSE}>
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>,
    document.body,
  );
}
