import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/pages/ambassador/HeroSection";
import BenefitsSection from "@/components/pages/ambassador/BenefitsSection";
import StepsSection from "@/components/pages/ambassador/StepsSection";
import AudienceSection from "@/components/pages/ambassador/AudienceSection";
import ApplySection from "@/components/pages/ambassador/ApplySection";
import CtaSection from "@/components/pages/ambassador/CtaSection";

export const metadata: Metadata = {
  title: "Become a Dugsiiye Ambassador | Earn Commissions | Somali Education",
  description: "Join the Dugsiiye Ambassador Program and earn 5-25% commissions on course referrals. Help Somali learners access quality education while building passive income. Apply now!",
};

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-[#FAFAF9] dark:bg-neutral-950">
        <div className="relative">
          <HeroSection />
          <BenefitsSection />
          <StepsSection />
          <AudienceSection />
          <ApplySection />
          <CtaSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
