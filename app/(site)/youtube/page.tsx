import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/pages/youtube/HeroSection";
import VideoLibrary from "@/components/youtube/VideoLibrary";

export const metadata: Metadata = {
  title: "Dugsiiye YouTube: Koorsooyin Coding iyo AI oo Bilaash ah, Af-Soomaali",
  description: "62 video oo Af-Soomaali ah oo ku saabsan coding, web development iyo AI. Koorsooyin buuxa oo bilaash ah, taxanaha AI-ga, Claude Code iyo Cursor, iyo warka model-lada cusub. Mid kastaa wuxuu leeyahay muddadiisa iyo cutubyadiisa.",
};

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-[#FAFAF9] dark:bg-neutral-950">
        <HeroSection />
        <VideoLibrary />
        <Footer />
      </main>
    </>
  );
}
