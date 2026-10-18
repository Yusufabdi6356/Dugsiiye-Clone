"use client";

import { useRouter } from "next/navigation";
import Sheet from "@/components/ui/Sheet";
import { XIcon } from "@/components/ui/icons";
import { money, priceFor, useCart, type Duration } from "@/components/cart/CartContext";

const PRIMARY =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full ring-offset-background transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 bg-(--ink) text-white shadow-sm hover:-translate-y-px hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:shadow-none dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500";
const DURATION_BASE =
  "px-4 py-2.5 text-sm font-medium rounded-full border transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300";
const DURATION_ON = "border-(--ink) bg-(--ink) text-white dark:border-white dark:bg-white dark:text-(--ink)";
const DURATION_OFF = "border-neutral-200 bg-white text-[#1E1E1E] hover:bg-neutral-50 dark:border-neutral-700/60 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700";
const LABEL: Record<Duration, string> = { "6m": "6 Months", "1y": "1 Year" };

export default function CartDrawer() {
  const router = useRouter();
  const { items, duration, setDuration, remove, clear, open, setOpen } = useCart();
  const close = () => setOpen(false);
  const total = items.reduce((n, c) => n + priceFor(c, duration), 0);

  return (
    <Sheet open={open} onClose={close} side="right" labelledBy="cart-title" className="flex flex-col w-full sm:max-w-md p-0 gap-0 bg-[#FAFAF9] border-l border-neutral-200 dark:bg-neutral-950 dark:border-neutral-800">
      <div className="flex flex-col text-center sm:text-left px-6 py-5 border-b border-neutral-200 dark:border-neutral-800 space-y-0">
        <div className="flex items-center justify-between pr-9">
          <h2 id="cart-title" className="font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
            Your cart
          </h2>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
            {items.length} {items.length === 1 ? "item" : "items"}
          </span>
        </div>
      </div>
      {items.length === 0 ? (
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-xs">
            <div className="w-16 h-16 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mx-auto mb-5">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-6 w-6 text-[#1E1E1E] dark:text-neutral-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z" />
              </svg>
            </div>
            <h3 className="font-display text-base font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50 mb-1.5">Your cart is empty</h3>
            <p className="text-sm text-[#8D8D8D] dark:text-neutral-400 mb-6">Browse our catalog and add courses to get started.</p>
            <button
              onClick={() => {
                close();
                router.push("/courses");
              }}
              className={`${PRIMARY} text-sm font-medium h-10 px-5 py-2 w-full`}
            >
              Browse Courses
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="px-6 py-5 border-b border-neutral-200 dark:border-neutral-800">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 mb-3">Access Duration</p>
            <div className="grid grid-cols-2 gap-2">
              {(["6m", "1y"] as const).map((d) => (
                <button key={d} onClick={() => setDuration(d)} className={`${DURATION_BASE} ${duration === d ? DURATION_ON : DURATION_OFF}`}>
                  {LABEL[d]}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-2">
            {items.map((c) => (
              <div key={c.slug} className="flex items-start gap-4 py-4 border-b border-neutral-100 dark:border-neutral-800 last:border-0">
                <div className="w-20 h-14 rounded-xl overflow-hidden bg-[#F4F4F2] dark:bg-neutral-800 shrink-0">
                  <img alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" src={c.cover} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[13px] font-semibold text-[#1E1E1E] dark:text-neutral-50 leading-tight line-clamp-2 mb-0.5">{c.title}</h4>
                  <p className="text-[11px] text-[#8D8D8D] dark:text-neutral-400 mb-1.5">Mohamud Osman</p>
                  <p className="font-display text-[13px] font-semibold tracking-[-0.02em] tabular-nums text-[#1E1E1E] dark:text-neutral-50">{money(priceFor(c, duration))}</p>
                </div>
                <button onClick={() => remove(c.slug)} className="h-7 w-7 flex items-center justify-center rounded-full text-[#8D8D8D] transition-colors hover:bg-neutral-100 hover:text-[#1E1E1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 shrink-0" aria-label="Remove from cart">
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="border-t border-neutral-200 dark:border-neutral-800 px-6 py-5 space-y-4 bg-white dark:bg-neutral-900">
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-[#8D8D8D] dark:text-neutral-400">Subtotal · {LABEL[duration]}</span>
              <span className="font-display text-2xl font-semibold tracking-[-0.03em] tabular-nums text-[#1E1E1E] dark:text-neutral-50">{money(total)}</span>
            </div>
            <button
              onClick={() => {
                close();
                router.push("/auth/login?redirect=%2Fcheckout");
              }}
              className={`${PRIMARY} px-5 py-2 w-full h-11 text-[15px] font-semibold`}
            >
              Checkout
            </button>
            <button onClick={clear} className="w-full rounded-full text-xs text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:text-neutral-400 dark:hover:text-neutral-100">
              Clear cart
            </button>
          </div>
        </>
      )}
    </Sheet>
  );
}
