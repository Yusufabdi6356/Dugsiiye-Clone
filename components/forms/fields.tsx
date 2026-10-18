"use client";

import Link from "next/link";
import { useState } from "react";

const INPUT_BASE =
  "flex w-full rounded-xl border bg-white px-4 py-2 text-sm text-[#1E1E1E] transition-colors dark:bg-neutral-900 dark:text-neutral-100 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-neutral-300 dark:hover:border-neutral-700 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#8D8D8D] dark:placeholder:text-neutral-500 focus-visible:outline-none focus-visible:border-neutral-300 focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-0 dark:focus-visible:border-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 h-11";
const BORDER_OK = "border-neutral-200 dark:border-neutral-800";
const BORDER_ERR = "border-red-400 dark:border-red-800";
const LABEL = "peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400";
export const SUBMIT =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full ring-offset-background transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:hover:translate-y-0 bg-(--ink) text-white shadow-sm hover:-translate-y-px hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 disabled:bg-neutral-200 disabled:text-neutral-500 disabled:shadow-none dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500 px-5 py-2";

export const EYE =
  "M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z";
export const EYE_SLASH =
  "M53.92,34.62A8,8,0,1,0,42.08,45.38L61.32,66.55C25,88.84,9.38,123.2,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208a127.11,127.11,0,0,0,52.07-10.83l22,24.21a8,8,0,1,0,11.84-10.76Zm47.33,75.84,41.67,45.85a32,32,0,0,1-41.67-45.85ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.16,133.16,0,0,1,25,128c4.69-8.79,19.66-33.39,47.35-49.38l18,19.75a48,48,0,0,0,63.66,70l14.73,16.2A112,112,0,0,1,128,192Zm6-95.43a8,8,0,0,1,3-15.72,48.16,48.16,0,0,1,38.77,42.64,8,8,0,0,1-7.22,8.71,6.39,6.39,0,0,1-.75,0,8,8,0,0,1-8-7.26A32.09,32.09,0,0,0,134,96.57Zm113.28,34.69c-.42.94-10.55,23.37-33.36,43.8a8,8,0,1,1-10.67-11.92A132.77,132.77,0,0,0,231.05,128a133.15,133.15,0,0,0-23.12-30.77C185.67,75.19,158.78,64,128,64a118.37,118.37,0,0,0-19.36,1.57A8,8,0,1,1,106,49.79,134,134,0,0,1,128,48c34.88,0,66.57,13.26,91.66,38.35,18.83,18.83,27.3,37.62,27.65,38.41A8,8,0,0,1,247.31,131.26Z";

export function ErrorText({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  if (!children) return null;
  return <p className={`${className}text-xs text-red-600 dark:text-red-400`}>{children}</p>;
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  error?: string;
  labelAside?: React.ReactNode;
};

export function TextField({ id, label, error, labelAside, className = "", ...input }: FieldProps) {
  const labelEl = (
    <label className={LABEL} htmlFor={id}>
      {label}
    </label>
  );
  return (
    <div className="space-y-1.5">
      {labelAside ? (
        <div className="flex items-center justify-between">
          {labelEl}
          {labelAside}
        </div>
      ) : (
        labelEl
      )}
      <input id={id} name={id} className={`${INPUT_BASE} ${className} ${error ? BORDER_ERR : BORDER_OK}`.replace(/\s+/g, " ").trim()} {...input} />
      <ErrorText>{error}</ErrorText>
    </div>
  );
}

export function PasswordField({ id, label, error, labelAside, ...input }: FieldProps) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="space-y-1.5">
      {labelAside ? (
        <div className="flex items-center justify-between">
          <label className={LABEL} htmlFor={id}>
            {label}
          </label>
          {labelAside}
        </div>
      ) : (
        <label className={LABEL} htmlFor={id}>
          {label}
        </label>
      )}
      <div className="relative">
        <input type={visible ? "text" : "password"} id={id} name={id} className={`${INPUT_BASE} pr-10 ${error ? BORDER_ERR : BORDER_OK}`} {...input} />
        <button type="button" onClick={() => setVisible((v) => !v)} aria-label={visible ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" tabIndex={-1}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d={visible ? EYE_SLASH : EYE} />
          </svg>
        </button>
      </div>
      <ErrorText>{error}</ErrorText>
    </div>
  );
}

export function TextAreaField({ id, label, error, ...rest }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { id: string; label: string; error?: string }) {
  return (
    <div className="space-y-1.5">
      <label className={LABEL} htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        className={`flex min-h-[80px] w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1E1E1E] transition-colors dark:text-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-700 placeholder:text-[#8D8D8D] dark:placeholder:text-neutral-500 focus-visible:outline-none focus-visible:border-neutral-300 focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-0 dark:focus-visible:border-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 resize-none dark:bg-neutral-800 ${error ? BORDER_ERR : "border-neutral-200 dark:border-neutral-700/60"}`}
        {...rest}
      />
      <ErrorText>{error}</ErrorText>
    </div>
  );
}

export function TermsCheckbox({ checked, onChange, error }: { checked: boolean; onChange: (v: boolean) => void; error?: string }) {
  const state = checked ? "checked" : "unchecked";
  return (
    <div className="pt-2">
      <div className="flex items-start gap-2.5">
        <button
          type="button"
          role="checkbox"
          aria-checked={checked}
          data-state={state}
          id="terms"
          onClick={() => onChange(!checked)}
          className={`peer h-4 w-4 shrink-0 rounded-[5px] border-2 transition-colors hover:border-neutral-400 dark:hover:border-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-(--ink) data-[state=checked]:bg-(--ink) data-[state=checked]:text-white dark:data-[state=checked]:border-white dark:data-[state=checked]:bg-white dark:data-[state=checked]:text-(--ink) mt-0.5 ${error ? BORDER_ERR : "border-neutral-300 dark:border-neutral-600"}`}
        >
          {checked && (
            <span data-state="checked" className="flex items-center justify-center text-current" style={{ pointerEvents: "none" }}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
              </svg>
            </span>
          )}
        </button>
        <label htmlFor="terms" className="cursor-pointer text-xs leading-relaxed text-[#8D8D8D] dark:text-neutral-400">
          I agree to the{" "}
          <Link className="font-medium text-[#1E1E1E] underline underline-offset-2 dark:text-neutral-100" href="/public-terms">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="font-medium text-[#1E1E1E] underline underline-offset-2 dark:text-neutral-100" href="/public-privacy">
            Privacy Policy
          </Link>
        </label>
      </div>
      <ErrorText className="mt-2 ">{error}</ErrorText>
    </div>
  );
}

export function DemoNotice({ show, children }: { show: boolean; children: React.ReactNode }) {
  if (!show) return null;
  return (
    <div role="status" className="rounded-xl border border-neutral-200/60 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900">
      <p className="text-sm leading-relaxed text-[#1E1E1E] dark:text-neutral-100">{children}</p>
      <p className="mt-1 text-xs leading-relaxed text-[#8D8D8D] dark:text-neutral-400">This is a frontend-only clone, so nothing was sent.</p>
    </div>
  );
}

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
