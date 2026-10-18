"use client";

export default function ScrollToButton({ target, offset = 80, className, children }: { target: string; offset?: number; className: string; children: React.ReactNode }) {
  return (
    <button
      className={className}
      onClick={() => {
        const el = document.getElementById(target);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
      }}
    >
      {children}
    </button>
  );
}
