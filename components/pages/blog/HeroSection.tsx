export default function HeroSection() {
  return (
    <section className="container max-w-6xl mx-auto px-4 pt-[calc(var(--banner-height,0px)+7rem)] sm:pt-[calc(var(--banner-height,0px)+8rem)] pb-12 lg:pb-16">
      <div className="max-w-3xl">
        <span className="mb-5 block text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
          The Blog
        </span>
        <h1 className="mb-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#1E1E1E] md:text-[44px] dark:text-neutral-50">
          Ideas, tutorials, and insights.
        </h1>
        <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
          <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
            Dive into our latest writing on software engineering, AI, and building a career in tech
          </span>
          , crafted in Somali and English.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=ai-engineering#blog-posts">
            AI Engineering
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=artificial-intelligence#blog-posts">
            Artificial Intelligence
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=career-growth#blog-posts">
            Career Growth
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=computer-science#blog-posts">
            Computer Science
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=cryptocurrency#blog-posts">
            Cryptocurrency
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=cybersecurity#blog-posts">
            Cybersecurity
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=dark-web-privacy#blog-posts">
            Dark Web & Privacy
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=data-science#blog-posts">
            Data Science
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=devops-cloud#blog-posts">
            DevOps & Cloud
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=ethical-hacking#blog-posts">
            Ethical Hacking
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=leadership#blog-posts">
            Leadership
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=learning-strategies#blog-posts">
            Learning Strategies
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=marketing#blog-posts">
            Marketing
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=mobile-development#blog-posts">
            Mobile Development
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=network#blog-posts">
            Network
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=open-source#blog-posts">
            Open Source
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=productivity#blog-posts">
            Productivity
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=programming-languages#blog-posts">
            Programming Languages
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=scholarship#blog-posts">
            Scholarship
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=soft-skills#blog-posts">
            Soft Skills
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=software#blog-posts">
            Software
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=software-engineering#blog-posts">
            Software Engineering
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=web-development#blog-posts">
            Web Development
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=web3-blockchain#blog-posts">
            Web3 & Blockchain
          </a>
          <a className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-800" href="/blog?category=work-life-balance#blog-posts">
            Work-Life Balance
          </a>
        </div>
      </div>
    </section>
  );
}
