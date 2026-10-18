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
                      <path d="M239.43,133l-32-80h0a8,8,0,0,0-9.16-4.84L136,62V40a8,8,0,0,0-16,0V65.58L54.26,80.19A8,8,0,0,0,48.57,85h0v.06L16.57,165a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32a7.92,7.92,0,0,0-.57-3L66.92,93.77,120,82V208H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16H136V78.42L187,67.1,160.57,133a7.92,7.92,0,0,0-.57,3c0,23.31,24.54,32,40,32s40-8.69,40-32A7.92,7.92,0,0,0,239.43,133ZM56,184c-7.53,0-22.76-3.61-23.93-14.64L56,109.54l23.93,59.82C78.76,180.39,63.53,184,56,184Zm144-32c-7.53,0-22.76-3.61-23.93-14.64L200,77.54l23.93,59.82C222.76,148.39,207.53,152,200,152Z" />
                    </svg>
                    Terms & Conditions
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                    <span className="bg-linear-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                      Terms of Service
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Please read these terms carefully before using our platform.
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
                            1. Acceptance of Terms
                          </h2>
                          <p className="text-muted-foreground">
                            By accessing and using Dugsiiye's platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            2. User Accounts
                          </h2>
                          <p className="text-muted-foreground">
                            When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account and password.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            3. Course Access
                          </h2>
                          <p className="text-muted-foreground">
                            Upon successful payment, you will be granted access to the purchased course(s). Course access is personal and non-transferable.
                          </p>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>
                              Access is limited to a single user account
                            </li>
                            <li>
                              Sharing account credentials is prohibited
                            </li>
                            <li>
                              Course materials are protected by copyright
                            </li>
                          </ul>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            4. Payment Terms
                          </h2>
                          <p className="text-muted-foreground">
                            All payments are processed securely through our payment providers. Prices are subject to change, but changes will not affect prior purchases.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            5. Refund Policy
                          </h2>
                          <p className="text-muted-foreground">
                            We offer a 3-day money-back guarantee on course purchases. Refund requests after this period will be evaluated on a case-by-case basis. No refund will be issued if we detect account sharing or concurrent sessions from multiple devices.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            6. Code of Conduct
                          </h2>
                          <p className="text-muted-foreground">
                            Users must:
                          </p>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>
                              Respect other users and instructors
                            </li>
                            <li>
                              Not engage in disruptive behavior
                            </li>
                            <li>
                              Not share copyrighted materials
                            </li>
                            <li>
                              Follow community guidelines
                            </li>
                          </ul>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            7. Intellectual Property
                          </h2>
                          <p className="text-muted-foreground">
                            All content on the platform, including courses, materials, and resources, is protected by copyright and other intellectual property rights.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            8. Limitation of Liability
                          </h2>
                          <p className="text-muted-foreground">
                            Dugsiiye is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            9. Changes to Terms
                          </h2>
                          <p className="text-muted-foreground">
                            We reserve the right to modify these terms at any time. Users will be notified of significant changes.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            Contact Information
                          </h2>
                          <p className="text-muted-foreground">
                            For questions about these Terms of Service, please contact us at:
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
