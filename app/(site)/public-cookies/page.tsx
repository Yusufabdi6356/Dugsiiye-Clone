import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Dugsiiye - #1 Somali Coding Platform | Become a Full Stack AI Engineer in Somali",
  description: "Become a Full Stack AI Engineer in 32 weeks, about 8 months. 10 phases, 700+ lessons, 6 AI apps including RAG and multi-agent systems. Built with Cursor and the AI tools the industry is hiring for. Taught in Somali. 7,000+ students, career support built in. Noqo Full Stack AI Engineer Af-Soomaali.",
};

export default function Page() {
  return (
    <>
      <div className="mt-(--banner-height,0px)">
        <div className="relative min-h-screen bg-gray-50/80 dark:bg-background">
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#aca6a636_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e577_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f40_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1d_1px,transparent_1px)] bg-size-[320px_320px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000000_70%,transparent_100%)] pointer-events-none" />
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#aca6a636_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e577_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f40_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1d_1px,transparent_1px)] bg-size-[320px_320px] mask-[radial-gradient(ellipse_80%_50%_at_50%_100%,#000000_70%,transparent_100%)] pointer-events-none" />
          <div className="fixed left-1/2 top-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-muted opacity-10 blur-[100px] pointer-events-none" />
          <div className="relative">
            <section className="relative py-20 overflow-hidden">
              <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                  <div className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-xs border border-foreground/20">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="mr-2 h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M164.49,163.51a12,12,0,1,1-17,0A12,12,0,0,1,164.49,163.51Zm-81-8a12,12,0,1,0,17,0A12,12,0,0,0,83.51,155.51Zm9-39a12,12,0,1,0-17,0A12,12,0,0,0,92.49,116.49Zm48-1a12,12,0,1,0,0,17A12,12,0,0,0,140.49,115.51ZM232,128A104,104,0,1,1,128,24a8,8,0,0,1,8,8,40,40,0,0,0,40,40,8,8,0,0,1,8,8,40,40,0,0,0,40,40A8,8,0,0,1,232,128Zm-16.31,7.39A56.13,56.13,0,0,1,168.5,87.5a56.13,56.13,0,0,1-47.89-47.19,88,88,0,1,0,95.08,95.08Z" />
                    </svg>
                    Website Data
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                    <span className="bg-linear-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                      Cookie Policy
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Information about how we use cookies and similar technologies on our platform.
                  </p>
                </div>
              </div>
            </section>
            <section className="relative py-16">
              <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <div className="text-[#1E1E1E] shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:border-neutral-800 dark:text-neutral-100 relative overflow-hidden rounded-xl border border-foreground/10 bg-white/80 dark:bg-card/40 backdrop-blur-xs p-8 transition-all duration-300">
                    <div className="absolute inset-0 bg-linear-to-br from-foreground/5 via-transparent to-transparent dark:from-foreground/10" />
                    <div className="relative prose prose-lg dark:prose-invert max-w-none">
                      <div className="space-y-12">
                        <section>
                          <h2 className="text-2xl font-bold">
                            1. What Are Cookies?
                          </h2>
                          <p className="text-muted-foreground">
                            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            2. How We Use Cookies
                          </h2>
                          <p className="text-muted-foreground">
                            We use cookies and similar technologies for the following purposes:
                          </p>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>
                              <strong>
                                Essential cookies:
                              </strong>
                              {" "}These are necessary for the website to function properly and cannot be switched off in our systems.
                            </li>
                            <li>
                              <strong>
                                Performance cookies:
                              </strong>
                              {" "}These help us understand how visitors interact with our website by collecting and reporting information anonymously.
                            </li>
                            <li>
                              <strong>
                                Functional cookies:
                              </strong>
                              {" "}These enable the website to provide enhanced functionality and personalization.
                            </li>
                            <li>
                              <strong>
                                Targeting cookies:
                              </strong>
                              {" "}These may be set through our site by our advertising partners to build a profile of your interests and show you relevant ads on other sites.
                            </li>
                          </ul>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            3. Types of Cookies We Use
                          </h2>
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-xl font-semibold">
                                Essential Cookies
                              </h3>
                              <ul className="list-disc pl-6 text-muted-foreground">
                                <li>
                                  Authentication cookies that identify you when you log in
                                </li>
                                <li>
                                  Security cookies that help maintain the security of our platform
                                </li>
                                <li>
                                  Session cookies that remember your preferences
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold">
                                Performance Cookies
                              </h3>
                              <ul className="list-disc pl-6 text-muted-foreground">
                                <li>
                                  Analytics cookies that help us understand how users interact with our site
                                </li>
                                <li>
                                  Cookies that measure the effectiveness of our content
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold">
                                Functional Cookies
                              </h3>
                              <ul className="list-disc pl-6 text-muted-foreground">
                                <li>
                                  Cookies that remember your preferences and settings
                                </li>
                                <li>
                                  Cookies that personalize your experience
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold">
                                Targeting Cookies
                              </h3>
                              <ul className="list-disc pl-6 text-muted-foreground">
                                <li>
                                  Cookies used by social media platforms
                                </li>
                                <li>
                                  Cookies used for targeted advertising
                                </li>
                              </ul>
                            </div>
                          </div>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            4. How to Control Cookies
                          </h2>
                          <p className="text-muted-foreground">
                            You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
                          </p>
                          <p className="text-muted-foreground mt-4">
                            <strong>
                              Browser controls:
                            </strong>
                            {" "}Most browsers allow you to control cookies through their settings. These settings are typically found in the "options" or "preferences" menu of your browser.
                          </p>
                          <p className="text-muted-foreground mt-4">
                            <strong>
                              Opt-out of third-party cookies:
                            </strong>
                            {" "}You can opt-out of third-party cookies used for advertising through the Network Advertising Initiative or the Digital Advertising Alliance.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            5. Changes to This Cookie Policy
                          </h2>
                          <p className="text-muted-foreground">
                            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            Contact Information
                          </h2>
                          <p className="text-muted-foreground">
                            If you have questions about our Cookie Policy, please contact us at:
                          </p>
                          <p className="text-muted-foreground">
                            Email: info@dugsiiye.com
                            <br />
                            Address: Mogadishu, Somalia
                          </p>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
