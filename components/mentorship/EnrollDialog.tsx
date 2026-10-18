"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CreditCardIcon, PhoneIcon, XIcon } from "@/components/ui/icons";
import { DemoNotice, EYE, EYE_SLASH, isEmail } from "@/components/forms/fields";

export type Plan = { label: string; price: number; note?: string };

export const PLANS: Plan[] = [
  { label: "Monthly", price: 51, note: "$51 oo kaliya ayaad ku bilaabaysaa, kadib $77 bishiiba." },
  { label: "3 months", price: 142 },
  { label: "6 months", price: 259 },
  { label: "Full Program", price: 324 },
];

const METHODS = [
  { id: "card", label: "Credit / Debit Card", Icon: CreditCardIcon },
  { id: "evc", label: "EVC Plus", Icon: PhoneIcon },
  { id: "zaad", label: "ZAAD Service", Icon: PhoneIcon },
  { id: "sahal", label: "Sahal", Icon: PhoneIcon },
] as const;

const INPUT =
  "flex h-11 w-full rounded-xl border bg-white px-4 py-2 text-sm text-[#1E1E1E] transition-colors dark:bg-neutral-900 dark:text-neutral-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-neutral-300 dark:hover:border-neutral-700 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#8D8D8D] dark:placeholder:text-neutral-500 focus-visible:outline-none focus-visible:border-neutral-300 focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-0 dark:focus-visible:border-neutral-500 disabled:cursor-not-allowed disabled:opacity-50";
const LABEL = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
const METHOD_BASE =
  "flex items-center gap-2 rounded-xl border px-2.5 py-2 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300";
const METHOD_ON = "border-neutral-900 bg-neutral-100 dark:border-neutral-100 dark:bg-neutral-800";
const METHOD_OFF = "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700 dark:hover:bg-neutral-800";
const BTN_TAIL =
  "ring-offset-background transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0";

const border = (err?: string) => (err ? "border-red-400 dark:border-red-800" : "border-neutral-200 dark:border-neutral-800");
const STRONG = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

function Field({ id, label, error, children }: { id?: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <label className={LABEL} htmlFor={id}>
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
}

export default function EnrollDialog({ plan, onClose }: { plan: Plan; onClose: () => void }) {
  const [method, setMethod] = useState<(typeof METHODS)[number]["id"]>("card");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const wallet = METHODS.find((m) => m.id === method)!;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const next: Record<string, string> = {};
    if (!d.firstName?.trim()) next.firstName = "Required";
    if (!d.lastName?.trim()) next.lastName = "Required";
    if (!isEmail(d.email?.trim() ?? "")) next.email = "Please enter a valid email";
    if (!d.phone?.trim()) next.phone = "Required";
    if (!STRONG.test(d.password ?? "")) next.password = "8+ chars, uppercase, lowercase, number, symbol.";
    if (method !== "card" && !d.paymentPhone?.trim()) next.paymentPhone = "Required";
    setErrors(next);
    setDone(Object.keys(next).length === 0);
  };

  return createPortal(
    <>
      <div data-state="open" onClick={onClose} className="fixed inset-0 z-250 bg-(--ink)/30 backdrop-blur-sm dark:bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enroll-title"
        data-state="open"
        className="fixed left-[50%] top-[10%] z-250 grid w-full gap-4 rounded-2xl border border-neutral-200 bg-white text-[#1E1E1E] shadow-[0_20px_60px_rgb(var(--ink-rgb)/0.14)] duration-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] overflow-y-auto translate-x-[-50%] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-w-3xl max-h-[92dvh] p-0"
      >
        <div className="flex flex-col space-y-1.5 text-center sm:text-left border-b border-neutral-200 px-6 pt-5 pb-3 dark:border-neutral-800">
          <h2 id="enroll-title" className="font-display text-lg font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
            Enroll in Full Stack AI Engineer
          </h2>
          <p className="text-sm text-[#8D8D8D] dark:text-neutral-400">
            <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">{plan.label}</span>
            <span className="tabular-nums text-[#8D8D8D] dark:text-neutral-400">: ${plan.price}</span>
          </p>
        </div>
        <form className="px-6 py-4 space-y-3" onSubmit={submit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <Field id="firstName" label="First name" error={errors.firstName}>
                  <input className={`${INPUT} ${border(errors.firstName)}`} id="firstName" name="firstName" autoComplete="given-name" required />
                </Field>
                <Field id="lastName" label="Last name" error={errors.lastName}>
                  <input className={`${INPUT} ${border(errors.lastName)}`} id="lastName" name="lastName" autoComplete="family-name" required />
                </Field>
              </div>
              <Field id="email" label="Email" error={errors.email}>
                <input className={`${INPUT} ${border(errors.email)}`} id="email" name="email" autoComplete="email" required type="email" />
              </Field>
              <Field id="phone" label="Phone" error={errors.phone}>
                <input className={`${INPUT} ${border(errors.phone)}`} id="phone" name="phone" placeholder="+252..." autoComplete="tel" required type="tel" />
              </Field>
              <div className="space-y-1">
                <label className={LABEL} htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input className={`${INPUT} ${border(errors.password)} pr-10`} id="password" name="password" autoComplete="new-password" required minLength={8} type={showPassword ? "text" : "password"} />
                  <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" tabIndex={-1} aria-label={showPassword ? "Hide password" : "Show password"}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d={showPassword ? EYE_SLASH : EYE} />
                    </svg>
                  </button>
                </div>
                <p className={errors.password ? "text-xs text-red-600 dark:text-red-400" : "hidden sm:block text-xs text-[#8D8D8D] dark:text-neutral-400"}>8+ chars, uppercase, lowercase, number, symbol.</p>
              </div>
            </div>
            <div className="space-y-2.5">
              <div className="space-y-1">
                <label className={LABEL}>Payment method</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {METHODS.map(({ id, label, Icon }) => (
                    <button key={id} type="button" aria-pressed={method === id} onClick={() => setMethod(id)} className={`${METHOD_BASE} ${method === id ? METHOD_ON : METHOD_OFF}`}>
                      <Icon className="h-4 w-4 flex-shrink-0 text-[#1E1E1E] dark:text-neutral-200" aria-hidden="true" />
                      <span className="truncate text-xs font-medium text-[#1E1E1E] dark:text-neutral-100">{label}</span>
                    </button>
                  ))}
                </div>
              </div>
              {method !== "card" && (
                <Field id="paymentPhone" label={`${wallet.label} phone`} error={errors.paymentPhone}>
                  <input className={`${INPUT} ${border(errors.paymentPhone)}`} id="paymentPhone" name="paymentPhone" placeholder="Wallet phone number" required type="tel" />
                </Field>
              )}
              <div className="space-y-1">
                <label className={LABEL} htmlFor="discountCode">
                  Discount code (optional)
                </label>
                <div className="flex gap-2">
                  <input className={`${INPUT} ${border()}`} id="discountCode" name="discountCode" placeholder="Have a code?" />
                  <button type="button" className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ${BTN_TAIL} border border-neutral-200 bg-white text-[#1E1E1E] hover:-translate-y-px hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800 disabled:border-neutral-200 disabled:bg-neutral-100 disabled:text-neutral-500 dark:disabled:border-neutral-800 dark:disabled:bg-neutral-800/50 dark:disabled:text-neutral-500 h-10 px-5 py-2 shrink-0`}>
                    Apply
                  </button>
                </div>
              </div>
              <DemoNotice show={done}>Looks good! Enrollment and payments aren&apos;t available in this demo.</DemoNotice>
            </div>
          </div>
          <div className="space-y-2 border-t border-neutral-200 pt-3 dark:border-neutral-800">
            {plan.note && <p className="text-center text-xs text-[#8D8D8D] dark:text-neutral-400">{plan.note}</p>}
            <p className="text-center text-[11px] leading-tight text-[#8D8D8D] dark:text-neutral-400">
              By enrolling, you agree to the{" "}
              <Link className="underline underline-offset-2 hover:text-[#1E1E1E] dark:hover:text-neutral-100" href="/public-terms">
                Terms
              </Link>{" "}
              and{" "}
              <Link className="underline underline-offset-2 hover:text-[#1E1E1E] dark:hover:text-neutral-100" href="/public-privacy">
                Privacy Policy
              </Link>
              .
            </p>
            <button type="submit" className={`inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium ${BTN_TAIL} bg-(--ink) text-white shadow-sm hover:-translate-y-px hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:shadow-none dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500 px-5 py-2 h-12 w-full text-[15px]`}>
              Enroll &amp; Pay ${plan.price}
            </button>
          </div>
        </form>
        <button type="button" onClick={onClose} className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-[#8D8D8D] transition-colors hover:bg-neutral-100 hover:text-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100">
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>,
    document.body,
  );
}
