import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/pages/about/HeroSection";
import ProgramSection from "@/components/pages/about/ProgramSection";
import ApproachSection from "@/components/pages/about/ApproachSection";
import ValuesSection from "@/components/pages/about/ValuesSection";
import FounderSection from "@/components/pages/about/FounderSection";
import StorySection from "@/components/pages/about/StorySection";
import CtaSection from "@/components/pages/about/CtaSection";

export const metadata: Metadata = {
  title: "About Dugsiiye: The Somali AI Coding Program | Learn to Code With AI",
  description: "Founded by Mohamud Osman Hamud. Dugsiiye gets Somali speakers to Full Stack AI Engineer in 32 weeks, about 8 months: 10 phases, 125+ hours, real AI apps built with Claude Code, Cursor, and the modern AI-engineering stack. 7,000+ students, career support built in. The only Somali-language program where you learn to code with AI.",
};

export default function Page() {
  return (
    <>
      <div className="mt-(--banner-height,0px)">
        <main className="min-h-screen bg-[#FAFAF9] dark:bg-neutral-950">
          <HeroSection />
          <ProgramSection />
          <ApproachSection />
          <ValuesSection />
          <FounderSection />
          <StorySection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
