"use client";

import { useCallback, useState } from "react";
import EnrollDialog, { PLANS } from "./EnrollDialog";

export default function EnrollButton({ planIndex, className }: { planIndex: number; className: string }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        Enroll Now
      </button>
      {open && <EnrollDialog plan={PLANS[planIndex]} onClose={close} />}
    </>
  );
}
