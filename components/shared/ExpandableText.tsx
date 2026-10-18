"use client";

import { useState } from "react";

export default function ExpandableText({ text, className, buttonClassName }: { text: string; className: string; buttonClassName: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative mb-6">
      <p className={`${className} ${open ? "" : "line-clamp-4"}`}>{text}</p>
      <button className={buttonClassName} onClick={() => setOpen((o) => !o)}>
        {open ? "See less" : "See more"}
      </button>
    </div>
  );
}
