import Link from "next/link";
import type { Metadata } from "next";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Page not found | Dugsiiye",
};

export default function NotFound() {
  return (
    <>
      <AnnouncementBanner />
      <Navbar />
      <main className="min-h-screen bg-background flex flex-col">
        <section className="flex-1 flex items-center">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-24">
            <div className="max-w-3xl">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
                Error · 404
              </div>
              <h1 className="font-display text-[5rem] sm:text-[8rem] lg:text-[10rem] font-extrabold tracking-[-0.05em] leading-[0.85] text-foreground mb-8">
                {"Not found"}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12">
                The page you’re looking for doesn’t exist, has moved, or was never here in the first place.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity" href="/">
                  Back to home
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                  </svg>
                </Link>
                <Link className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-border text-foreground text-sm font-medium hover:bg-accent transition-colors" href="/courses">
                  Browse courses
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-border">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-10">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-5">
              Looking for something specific?
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
              <li>
                <Link className="group flex items-center justify-between py-4 border-b border-border/60 hover:border-foreground transition-colors" href="/mentorship">
                  <span className="text-base text-foreground">
                    Mentorship
                  </span>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 -rotate-[135deg] text-muted-foreground group-hover:text-foreground transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link className="group flex items-center justify-between py-4 border-b border-border/60 hover:border-foreground transition-colors" href="/courses">
                  <span className="text-base text-foreground">
                    Courses
                  </span>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 -rotate-[135deg] text-muted-foreground group-hover:text-foreground transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link className="group flex items-center justify-between py-4 border-b border-border/60 hover:border-foreground transition-colors" href="/blog">
                  <span className="text-base text-foreground">
                    Blog
                  </span>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 -rotate-[135deg] text-muted-foreground group-hover:text-foreground transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link className="group flex items-center justify-between py-4 border-b border-border/60 hover:border-foreground transition-colors" href="/contact">
                  <span className="text-base text-foreground">
                    Contact
                  </span>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 -rotate-[135deg] text-muted-foreground group-hover:text-foreground transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
