import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import CommunityFeed from "@/components/community/CommunityFeed";

export const metadata: Metadata = {
  title: "Community: Share, Learn & Build Together | Dugsiiye",
  description: "Connect with fellow Somali developers, share your projects, ask questions, and get help from the Dugsiiye community.",
};

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-[#FAFAF9] dark:bg-neutral-950">
        <div className="relative">
          <section className="container max-w-6xl mx-auto px-4 pt-[calc(var(--banner-height,0px)+7rem)] sm:pt-[calc(var(--banner-height,0px)+8rem)] pb-12 lg:pb-16">
            <div className="max-w-3xl">
              <span className="mb-4 block text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
                Community
              </span>
              <h1 className="font-display text-4xl md:text-[44px] md:leading-[1.08] font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50 mb-5">
                Share. Learn. Build together.
              </h1>
              <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400 max-w-2xl">
                <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                  Connect with fellow Somali developers,
                </span>
                {" "}share your projects, and get help from the community.
              </p>
            </div>
          </section>
          <CommunityFeed />
        </div>
      </main>
      <Footer />
    </>
  );
}
