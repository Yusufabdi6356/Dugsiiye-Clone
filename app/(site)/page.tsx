import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/pages/index/HeroSection";
import SkillsSection from "@/components/pages/index/SkillsSection";
import AudienceSection from "@/components/pages/index/AudienceSection";
import OldWaySection from "@/components/pages/index/OldWaySection";
import CurriculumSection from "@/components/pages/index/CurriculumSection";
import AppsSection from "@/components/pages/index/AppsSection";
import MentorshipSection from "@/components/pages/index/MentorshipSection";
import BlogSection from "@/components/pages/index/BlogSection";
import FaqSection from "@/components/pages/index/FaqSection";
import CtaSection from "@/components/pages/index/CtaSection";

export const metadata: Metadata = {
  title: "Dugsiiye: Become a Full Stack AI Engineer in 32 Weeks | #1 Somali Coding Platform",
  description: "Become a Full Stack AI Engineer in 32 weeks, about 8 months, taught in Somali. 10 phases from HTML to AI apps including AI chat, RAG, and multi-agent systems, built with Claude Code, Cursor, and the AI tools the industry is hiring for. The only Somali-language program teaching AI engineering. 7,000+ students, career support built in.",
};

export default function Page() {
  return (
    <>
      <main className="relative min-h-screen bg-[#FAFAF9] dark:bg-neutral-950">
        <div className="relative">
          <HeroSection />
          <SkillsSection />
          <AudienceSection />
          <OldWaySection />
          <CurriculumSection />
          <AppsSection />
          <MentorshipSection />
          <BlogSection />
          <FaqSection />
          <CtaSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
