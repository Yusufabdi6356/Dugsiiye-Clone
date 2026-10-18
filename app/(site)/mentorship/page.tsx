import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/pages/mentorship/HeroSection";
import CurriculumSection from "@/components/pages/mentorship/CurriculumSection";
import InstructorSection from "@/components/pages/mentorship/InstructorSection";
import PricingSection from "@/components/pages/mentorship/PricingSection";
import TestimonialsSection from "@/components/pages/mentorship/TestimonialsSection";
import FaqSection from "@/components/pages/mentorship/FaqSection";

export const metadata: Metadata = {
  title: "Become a Full Stack AI Engineer in 32 Weeks | Somali-Language Program | Dugsiiye",
  description: "Become a Full Stack AI Engineer in 32 weeks, about 8 months. 10 phases, 6 AI apps including AI chat, RAG, and multi-agent systems. Built with Cursor, Claude Code, and the AI tools the industry is hiring for. The only Somali-language program teaching AI-engineering. 7,000+ students, career support built in.",
};

export default function Page() {
  return (
    <>
      <main className="relative min-h-screen bg-[#FAFAF9] dark:bg-neutral-950">
        <HeroSection />
        <CurriculumSection />
        <InstructorSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <Footer />
      </main>
    </>
  );
}
