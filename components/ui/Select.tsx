"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CaretDownIcon, CheckIcon } from "./icons";

export type SelectOption = { value: string; label: string };

type Props = {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  triggerClassName: string;
  ariaLabel?: string;
};

const CONTENT_CLASS =
  "relative z-500 min-w-32 overflow-hidden rounded-2xl border border-neutral-200 bg-white text-[#1E1E1E] shadow-[0_10px_30px_rgb(var(--ink-rgb)/0.08)] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=bottom]:translate-y-1";
const OPTION_CLASS =
  "relative flex w-full cursor-default select-none items-center rounded-xl py-2.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-neutral-100 focus:text-[#1E1E1E] dark:focus:bg-neutral-800 dark:focus:text-neutral-50 data-disabled:pointer-events-none data-disabled:opacity-50";

export default function Select({ value, options, onChange, triggerClassName, ariaLabel }: Props) {
  const [open, setOpen] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [active, setActive] = useState(0);
  const trigger = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const current = options.find((o) => o.value === value) ?? options[0];

  useLayoutEffect(() => {
    if (open && trigger.current) setRect(trigger.current.getBoundingClientRect());
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setActive(Math.max(0, options.findIndex((o) => o.value === value)));
    const close = (e: Event) => {
      if (e.type === "scroll" || !(list.current?.contains(e.target as Node) || trigger.current?.contains(e.target as Node))) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowDown") { e.preventDefault(); setActive((i) => Math.min(options.length - 1, i + 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setActive((i) => Math.max(0, i - 1)); }
    };
    document.addEventListener("pointerdown", close);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", close);
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, options, value]);

  useEffect(() => {
    if (open) (list.current?.querySelectorAll<HTMLElement>("[role=option]")[active])?.focus();
  }, [open, active, rect]);

  const pick = (v: string) => {
    onChange(v);
    setOpen(false);
    trigger.current?.focus();
  };

  return (
    <>
      <button
        ref={trigger}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-label={ariaLabel}
        aria-autocomplete="none"
        data-state={open ? "open" : "closed"}
        onClick={() => setOpen((o) => !o)}
        className={triggerClassName}
      >
        <span style={{ pointerEvents: "none" }}>{current?.label}</span>
        <CaretDownIcon className="h-5 w-5 shrink-0 text-[#8D8D8D] dark:text-neutral-400" aria-hidden="true" />
      </button>
      {open && rect &&
        createPortal(
          <div style={{ position: "fixed", left: 0, top: 0, transform: `translate(${rect.left}px, ${rect.bottom}px)`, minWidth: "max-content", zIndex: 500 }}>
            <div ref={list} data-side="bottom" data-align="start" role="listbox" data-state="open" className={CONTENT_CLASS} style={{ display: "flex", flexDirection: "column", outline: "none", minWidth: rect.width }}>
              <div role="presentation" className="p-1 bg-white dark:bg-neutral-900 w-full" style={{ position: "relative", flex: "1 1 0%", overflow: "hidden auto" }}>
                {options.map((o, i) => (
                  <div
                    key={o.value}
                    role="option"
                    aria-selected={o.value === value}
                    data-state={o.value === value ? "checked" : "unchecked"}
                    tabIndex={-1}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => pick(o.value)}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), pick(o.value))}
                    className={OPTION_CLASS}
                  >
                    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                      {o.value === value && (
                        <span aria-hidden="true">
                          <CheckIcon className="h-4 w-4" />
                        </span>
                      )}
                    </span>
                    <span>{o.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
