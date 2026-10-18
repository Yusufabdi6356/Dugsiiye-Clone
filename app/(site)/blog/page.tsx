import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/pages/blog/HeroSection";
import BlogArchive from "@/components/blog/BlogArchive";
import AuthorsSection from "@/components/pages/blog/AuthorsSection";

export const metadata: Metadata = {
  title: "Blog: Somali Tech Tutorials, AI Guides & Coding Tips | Dugsiiye",
  description: "Tutorials, guides, and deep dives on AI, coding, and software engineering, written in Somali and English. Learn about Cursor, agentic coding, RAG, React, Node.js, TypeScript, and more.",
};

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-[#FAFAF9] dark:bg-neutral-950">
        <div className="relative">
          <HeroSection />
          <BlogArchive />
          <AuthorsSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
