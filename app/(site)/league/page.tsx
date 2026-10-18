import Link from "next/link";
import type { Metadata } from "next";
import PodiumSection from "@/components/pages/league/PodiumSection";
import StandingsSection from "@/components/pages/league/StandingsSection";

export const metadata: Metadata = {
  title: "Weekly Lessons League: Dugsiiye",
  description: "Every lesson scores points and the board resets Monday. See which Dugsiiye students are leading the Weekly Lessons League this week.",
};

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-[#FAFAF9] dark:bg-neutral-950">
        <main className="mx-auto max-w-5xl px-4 pt-[calc(var(--banner-height,0px)+7rem)] pb-10 sm:pt-[calc(var(--banner-height,0px)+8rem)]">
          <PodiumSection />
          <StandingsSection />
          <section className="mt-12 rounded-[2rem] border border-neutral-200/80 bg-[#F4F4F2] p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
              Want your name on this board?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-[#8D8D8D] dark:text-neutral-400">
              The league is open to Dugsiiye mentorship students. Join the program, complete lessons, and climb the ranks every week.
            </p>
            <Link className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-(--ink) px-6 text-[15px] font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 dark:focus-visible:ring-offset-neutral-950" href="/mentorship">
              Join the mentorship
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
