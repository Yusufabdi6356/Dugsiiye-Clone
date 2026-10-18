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
                      <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" />
                    </svg>
                    Data Protection
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                    <span className="bg-linear-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                      Privacy Policy
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    We care about your privacy and are committed to protecting your personal data.
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
                            1. Information We Collect
                          </h2>
                          <p className="text-muted-foreground">
                            We collect the following types of information when you use our platform:
                          </p>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>
                              Account information (name, email, password)
                            </li>
                            <li>
                              Profile information (profile picture, bio)
                            </li>
                            <li>
                              Payment information (processed securely through our payment providers)
                            </li>
                            <li>
                              Course progress and completion data
                            </li>
                            <li>
                              Communication data (messages, support inquiries)
                            </li>
                            <li>
                              Technical data (IP address, browser type, device information)
                            </li>
                          </ul>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            2. How We Use Your Information
                          </h2>
                          <p className="text-muted-foreground">
                            We use your information for the following purposes:
                          </p>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>
                              To provide and maintain our services
                            </li>
                            <li>
                              To process payments and prevent fraud
                            </li>
                            <li>
                              To personalize your learning experience
                            </li>
                            <li>
                              To communicate with you about your account or courses
                            </li>
                            <li>
                              To send you updates and marketing communications (with your consent)
                            </li>
                            <li>
                              To improve our platform and services
                            </li>
                            <li>
                              To comply with legal obligations
                            </li>
                          </ul>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            3. Information Sharing
                          </h2>
                          <p className="text-muted-foreground">
                            We may share your information with:
                          </p>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>
                              Service providers who help us operate our platform
                            </li>
                            <li>
                              Payment processors for secure transactions
                            </li>
                            <li>
                              Legal authorities when required by law
                            </li>
                            <li>
                              Business partners with your explicit consent
                            </li>
                          </ul>
                          <p className="text-muted-foreground">
                            We do not sell your personal information to third parties.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            4. Data Security
                          </h2>
                          <p className="text-muted-foreground">
                            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            5. Your Rights
                          </h2>
                          <p className="text-muted-foreground">
                            Depending on your location, you may have the following rights:
                          </p>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>
                              Access to your personal information
                            </li>
                            <li>
                              Correction of inaccurate data
                            </li>
                            <li>
                              Deletion of your data (in certain circumstances)
                            </li>
                            <li>
                              Restriction of processing
                            </li>
                            <li>
                              Data portability
                            </li>
                            <li>
                              Objection to processing
                            </li>
                            <li>
                              Withdrawal of consent
                            </li>
                          </ul>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            6. Cookies and Similar Technologies
                          </h2>
                          <p className="text-muted-foreground">
                            We use cookies and similar technologies to enhance your experience on our platform. You can manage your cookie preferences through your browser settings.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            7. Changes to This Policy
                          </h2>
                          <p className="text-muted-foreground">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            Contact Information
                          </h2>
                          <p className="text-muted-foreground">
                            If you have questions or concerns about our Privacy Policy, please contact us at:
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
