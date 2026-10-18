"use client";

import { useState } from "react";
import { PlusIcon } from "@/components/ui/icons";

type Props = {
  idPrefix: string;
  index: number;
  question: string;
  questionClassName: string;
  answerClassName: string;
  children: React.ReactNode;
};

export default function FaqItem({ idPrefix, index, question, questionClassName, answerClassName, children }: Props) {
  const [open, setOpen] = useState(false);
  const trigger = `${idPrefix}-trigger-${index}`;
  const panel = `${idPrefix}-panel-${index}`;

  return (
    <div className={`px-5 transition-colors duration-300 sm:px-8${open ? " bg-neutral-50/70 dark:bg-neutral-800/30" : ""}`}>
      <h3>
        <button
          type="button"
          id={trigger}
          aria-expanded={open}
          aria-controls={panel}
          onClick={() => setOpen((o) => !o)}
          className="group flex w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-[-2px] sm:py-6"
        >
          <span className={questionClassName}>{question}</span>
          <PlusIcon
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 transition-all duration-300 ease-out ${open ? "rotate-45 text-[#1E1E1E] dark:text-neutral-100" : "text-neutral-400 group-hover:text-[#1E1E1E] dark:text-neutral-500 dark:group-hover:text-neutral-100"}`}
          />
        </button>
      </h3>
      <div id={panel} role="region" aria-labelledby={trigger} aria-hidden={!open} className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className={answerClassName}>{children}</div>
        </div>
      </div>
    </div>
  );
}
