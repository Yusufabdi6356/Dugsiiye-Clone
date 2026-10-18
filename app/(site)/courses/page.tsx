import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import FeaturedCoursesSection from "@/components/pages/courses/FeaturedCoursesSection";
import CourseCatalog from "@/components/courses/CourseCatalog";

export const metadata: Metadata = {
  title: "Courses: Learn Full-Stack Development & AI in Somali | Dugsiiye",
  description: "Browse standalone coding courses taught in Somali. From HTML & CSS to React, Node.js, TypeScript, and AI-assisted development with Cursor. Purchase individually or join the 32-week Full Stack AI Engineer program, about 8 months.",
};

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-[#FAFAF9] dark:bg-neutral-950">
        <div className="relative">
          <div className="container max-w-6xl mx-auto px-4 pt-[calc(var(--banner-height,0px)+7rem)] sm:pt-[calc(var(--banner-height,0px)+8rem)] pb-12 lg:pb-16">
            <div className="max-w-2xl" data-reveal="up">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 mb-4 block">
                All Courses
              </span>
              <h1 className="font-display text-4xl md:text-[44px] md:leading-[1.08] font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50 mb-5">
                Pick a skill. Start building.
              </h1>
              <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
                <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                  Standalone courses in Somali. Buy what you need.
                </span>
                {" "}Or{" "}
                <Link className="font-medium text-[#1E1E1E] underline underline-offset-4 transition-colors hover:text-black dark:text-neutral-100 dark:hover:text-white" href="/mentorship">
                  join the Full Stack AI Engineer program (32 weeks)
                </Link>
                {" "}and get everything, including AI-engineering training.
              </p>
            </div>
          </div>
          <FeaturedCoursesSection />
          <CourseCatalog />
        </div>
      </main>
      <Footer />
    </>
  );
}
