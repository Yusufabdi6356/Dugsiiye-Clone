import Link from "next/link";
import type { Metadata } from "next";
import SignInSection from "@/components/pages/auth-login/SignInSection";

export const metadata: Metadata = {
  title: "Dugsiiye - #1 Somali Coding Platform | Become a Full Stack AI Engineer in Somali",
  description: "Become a Full Stack AI Engineer in 32 weeks, about 8 months. 10 phases, 700+ lessons, 6 AI apps including RAG and multi-agent systems. Built with Cursor and the AI tools the industry is hiring for. Taught in Somali. 7,000+ students, career support built in. Noqo Full Stack AI Engineer Af-Soomaali.",
};

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-[#FAFAF9] dark:bg-neutral-950">
        <div className="grid min-h-screen lg:grid-cols-[1fr_1.1fr]">
          <aside className="relative hidden lg:flex flex-col justify-between overflow-hidden border-r border-neutral-200 bg-[#F4F4F2] p-12 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="relative z-10">
              <Link className="inline-block" href="/">
                <img alt="Dugsiiye" width="120" height="44" decoding="async" className="h-11 w-auto dark:hidden" src="/dark_green.webp" />
                <img alt="Dugsiiye" width="120" height="44" decoding="async" className="h-11 w-auto hidden dark:block" src="/white_green.webp" />
              </Link>
            </div>
            <div className="relative z-10 max-w-md">
              <blockquote>
                <p className="font-display mb-6 text-2xl leading-tight font-semibold tracking-[-0.03em] text-[#1E1E1E] sm:text-3xl dark:text-neutral-50">
                  “Learning shouldn't be limited by language. At Dugsiiye, we're building the future of tech education in Somali.”{" "}
                </p>
                <footer className="flex items-center gap-3">
                  <div className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
                  <div>
                    <div className="text-sm font-semibold text-[#1E1E1E] dark:text-neutral-100">
                      Mohamud Osman
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
                      Founder & Lead Instructor
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            <div className="relative z-10 flex items-center gap-10">
              <div>
                <div className="font-display text-2xl font-semibold tabular-nums tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                  7K+
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
                  Students
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold tabular-nums tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                  700+
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
                  Lessons
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-semibold tabular-nums tracking-[-0.02em] text-[#1E1E1E] dark:text-neutral-50">
                  10
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
                  Phases
                </div>
              </div>
            </div>
          </aside>
          <main className="relative flex flex-col min-h-screen">
            <div className="border-b border-neutral-200 px-6 py-5 lg:hidden dark:border-neutral-800">
              <Link className="inline-block" href="/">
                <img alt="Dugsiiye" width="110" height="40" decoding="async" className="h-10 w-auto dark:hidden" src="/dark_green.webp" />
                <img alt="Dugsiiye" width="110" height="40" decoding="async" className="h-10 w-auto hidden dark:block" src="/white_green.webp" />
              </Link>
            </div>
            <SignInSection />
          </main>
        </div>
      </div>
    </>
  );
}
