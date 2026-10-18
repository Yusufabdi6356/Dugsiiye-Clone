import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/pages/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Dugsiiye | #1 Somali Coding Platform",
  description: "Get in touch with Somalia's #1 coding platform. Questions about courses, mentorship, or tech education? We teach coding and AI in Somali. Contact us for support in Somali and English.",
};

export default function Page() {
  return (
    <>
      <div className="mt-(--banner-height,0px)">
        <main className="min-h-screen bg-[#FAFAF9] dark:bg-neutral-950">
          <div className="relative">
            <section className="max-w-[1160px] mx-auto px-5 md:px-8 pt-28 pb-16 sm:pt-32 lg:pb-20">
              <div className="max-w-3xl" data-reveal="up">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400 mb-4 block">
                  Contact
                </span>
                <h1 className="font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#1E1E1E] sm:text-5xl md:text-[56px] md:leading-[1.08] dark:text-neutral-50">
                  Let's talk.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-7 text-[#8D8D8D] dark:text-neutral-400">
                  <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                    Have a question about courses, mentorship, or partnerships?
                  </span>
                  {" "}We'd love to hear from you. Send us a message or reach out directly.
                </p>
              </div>
            </section>
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
