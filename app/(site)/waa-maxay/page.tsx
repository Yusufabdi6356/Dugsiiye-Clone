import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Glossary from "@/components/glossary/Glossary";

export const metadata: Metadata = {
  title: "Waa Maxay? Qaamuuska Technology-ga Af-Soomaali",
  description: "Qaamuus af-Soomaali ah oo lagu sharxayo ereyada technology-ga iyo AI-ga: model, prompt, API, database, framework iyo kuwo kale. Mid walba wuxuu leeyahay sharax gaaban iyo video lagu daawado.",
};

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-[#FAFAF9] dark:bg-neutral-950">
        <div className="relative">
          <section className="container mx-auto max-w-6xl px-4 pb-12 pt-[calc(var(--banner-height,0px)+7rem)] sm:pt-[calc(var(--banner-height,0px)+8rem)] lg:pb-16">
            <div className="max-w-3xl">
              <span className="mb-5 block text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
                Qaamuuska
              </span>
              <h1 className="mb-5 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#1E1E1E] md:text-[44px] dark:text-neutral-50">
                Waa Maxay? Qaamuuska Technology-ga Af-Soomaali
              </h1>
              <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
                <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                  Erey walba oo technology ah oo aad maqasho, halkan ka hel macnihiisa af-Soomaali
                </span>
                , sharax gaaban, tusaale, iyo video lagu daawado meesha uu ereygu kaga hadlayo.
              </p>
            </div>
          </section>
          <Glossary />
          <Footer />
        </div>
      </main>
    </>
  );
}
