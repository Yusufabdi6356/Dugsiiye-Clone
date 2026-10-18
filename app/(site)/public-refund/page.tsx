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
                      <path d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z" />
                    </svg>
                    Money Back
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                    <span className="bg-linear-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                      Refund Policy
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    We want you to be completely satisfied with your purchase. Here's our refund policy.
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
                            1. Refund Eligibility
                          </h2>
                          <p className="text-muted-foreground">
                            We offer a 3-day money-back guarantee on course purchases. If you're not satisfied with a course, you can request a refund within 3 days of purchase under the following conditions:
                          </p>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>
                              You have completed less than 30% of the course content
                            </li>
                            <li>
                              You have a valid reason for dissatisfaction (e.g., course content doesn't match description, technical issues)
                            </li>
                            <li>
                              The request is made within 3 days of the purchase date
                            </li>
                            <li>
                              No suspicious account activity has been detected (account sharing or concurrent sessions from multiple devices)
                            </li>
                          </ul>
                          <p className="text-muted-foreground mt-4">
                            <strong>
                              No refund will be issued
                            </strong>
                            {" "}if we detect account sharing, credential sharing, or simultaneous logins from multiple users on the same account.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            2. Refund Process
                          </h2>
                          <p className="text-muted-foreground">
                            To request a refund, please follow these steps:
                          </p>
                          <ol className="list-decimal pl-6 text-muted-foreground">
                            <li>
                              Log in to your account
                            </li>
                            <li>
                              Go to "Purchase History" in your account settings
                            </li>
                            <li>
                              Find the course you want to request a refund for
                            </li>
                            <li>
                              Click "Request Refund" and fill out the refund request form
                            </li>
                            <li>
                              Submit your request
                            </li>
                          </ol>
                          <p className="text-muted-foreground mt-4">
                            We will review your request and respond within 3 business days.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            3. Refund Processing Time
                          </h2>
                          <p className="text-muted-foreground">
                            If your refund request is approved:
                          </p>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>
                              Credit/debit card refunds typically process within 5-10 business days
                            </li>
                            <li>
                              Mobile money refunds typically process within 3-5 business days
                            </li>
                            <li>
                              Other payment methods may have different processing times
                            </li>
                          </ul>
                          <p className="text-muted-foreground mt-4">
                            The time it takes for the refund to appear in your account depends on your payment provider's policies.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            4. Non-Refundable Items
                          </h2>
                          <p className="text-muted-foreground">
                            The following purchases are not eligible for refunds:
                          </p>
                          <ul className="list-disc pl-6 text-muted-foreground">
                            <li>
                              Subscriptions after the first 3 days
                            </li>
                            <li>
                              Courses where more than 30% of the content has been accessed
                            </li>
                            <li>
                              Bundle purchases that have been partially accessed
                            </li>
                            <li>
                              Purchases made more than 3 days ago
                            </li>
                          </ul>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            5. Special Circumstances
                          </h2>
                          <p className="text-muted-foreground">
                            In special circumstances (e.g., technical issues, account problems), we may extend the refund period or make exceptions to our policy. These will be evaluated on a case-by-case basis.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            6. Changes to This Policy
                          </h2>
                          <p className="text-muted-foreground">
                            We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website.
                          </p>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold">
                            Contact Information
                          </h2>
                          <p className="text-muted-foreground">
                            If you have questions about our Refund Policy, please contact our support team at:
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
