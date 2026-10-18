"use client";

import { useCallback, useState } from "react";
import type { Phase } from "@/lib/data/curriculum";
import CurriculumModal from "./CurriculumModal";

export default function CurriculumButton({ index, label, className }: { index: number; label: string; className: string }) {
  const [phase, setPhase] = useState<Phase | null>(null);
  const close = useCallback(() => setPhase(null), []);

  const open = async () => {
    const { phases } = await import("@/lib/data/curriculum");
    setPhase(phases[index]);
  };

  return (
    <>
      <button type="button" aria-label={label} className={className} onClick={open} />
      {phase && <CurriculumModal phase={phase} onClose={close} />}
    </>
  );
}
