import Link from "next/link";
import FaqItem from "@/components/shared/FaqItem";

export default function FaqSection() {
  return (
    <section aria-labelledby="mentorship-faq-heading" className="relative bg-[#FAFAF9] dark:bg-neutral-950 py-20 md:py-28">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8 relative z-10">
        <div data-reveal="up">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="mentorship-faq-heading" className="font-display font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50 text-4xl md:text-[44px] md:leading-[1.08]">
              Frequently Asked Questions
            </h2>
            <div className="mt-5">
              <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
                <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                  Everything you need to know about the mentorship program.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-3xl divide-y divide-neutral-100 overflow-hidden rounded-[2rem] border border-neutral-200/60 bg-white shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] dark:divide-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 mt-12 md:mt-16" data-reveal="fade">
          <FaqItem idPrefix="mentorship-faq" index={0} question="Maxa Layga Baahanyahay si aan u qaato Programm-kaan?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    <strong>
      Waxa aad u baahan tahay:
    </strong>
  </p>
  <ol>
    <li>
      In ay kaa go'antahay in{" "}
      <strong>
        asbuucii aad heyso firaaqo 4 ilaa 5 saacadood oo cashar ah
      </strong>
      , iyo waqti aad ku tababarato waxa aad barato (inta badan ardaydu waxay bixiyaan 8 ilaa 10 saacadood guud ahaan)
    </li>
    <li>
      In ay kaa go'antahay barasahda programming-ka in aysan kaa ahayn "waan rabaa kaliya" ee aad latimaado{" "}
      <strong>
        go'aan adag
      </strong>
    </li>
    <li>
      In aad haysto{" "}
      <strong>
        computer iyo internet
      </strong>
    </li>
  </ol>
</FaqItem>
          <FaqItem idPrefix="mentorship-faq" index={1} question="Sidee Dugsiiye iiga caawinayaa shaqo helista?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    Waxaan kuu diyaarinaynaa in aad{" "}
    <strong>
      shaqo u qalanto
    </strong>
    :
  </p>
  <ol>
    <li>
      <strong>
        Projects dhab ah
      </strong>
      {" "}oo aad adigu dhisatay, oo portfolio-gaaga gala
    </li>
    <li>
      <strong>
        Portfolio iyo CV review
      </strong>
      {" "}marka aad shaqo raadinayso
    </li>
    <li>
      <strong>
        Tababar interview
      </strong>
      {" "}iyo hagid inta aad shaqo raadinayso
    </li>
  </ol>
  <p>
    Shirkadaha ayaa go'aansada cidda ay shaqaaleysiinayaan, laakiin annaga shaqadayadu waa in aad u tagto adigoo si buuxda ugu diyaar ah.
  </p>
</FaqItem>
          <FaqItem idPrefix="mentorship-faq" index={2} question="Waqti intee le'eg ayuu qaadanayaa programm-ka?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    Program-ka waxuu qaadanayaa{" "}
    <strong>
      32 toddobaad (ilaa 8 bilood)
    </strong>
    , waxayna ku xiran tahay waqtiga aad geliso. Toddobaadkii waxaad u baahan tahay{" "}
    <strong>
      4 ilaa 5 saacadood oo cashar ah
    </strong>
    , iyo waqti aad ku tababarato waxa aad barato. Inta badan ardaydu waxay bixiyaan{" "}
    <strong>
      8 ilaa 10 saacadood guud ahaan
    </strong>
    .
  </p>
  <p>
    <strong>
      10 Phases-ka program-ka:
    </strong>
  </p>
  <ul>
    <li>
      HTML, CSS, Tailwind & GitHub (Toddobaad 1-7)
    </li>
    <li>
      Modern JavaScript: ES6+, DOM & Async (Toddobaad 8-10)
    </li>
    <li>
      React: Components, Hooks & State (Toddobaad 11-15)
    </li>
    <li>
      MongoDB & NoSQL Fundamentals (Toddobaad 16)
    </li>
    <li>
      Backend: Node.js, Express, MongoDB (Toddobaad 17-18)
    </li>
    <li>
      The Modern Full-Stack MERN Developer (Toddobaad 19-20)
    </li>
    <li>
      TypeScript: Types, Interfaces & Generics (Toddobaad 21)
    </li>
    <li>
      Next.js: Full-Stack React Framework (Toddobaad 22-23)
    </li>
    <li>
      Professional AI Engineer Track: APIs, RAG, multi-agent systems (Toddobaad 24-29)
    </li>
    <li>
      Agentic Coding with Cursor & Claude Code: capstone app (Toddobaad 30-32)
    </li>
  </ul>
</FaqItem>
          <FaqItem idPrefix="mentorship-faq" index={3} question="Sidee loo qaadanayaa cashirada?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    <strong>
      Cashirada sidan ayay u shaqeeyaan:
    </strong>
  </p>
  <ul>
    <li>
      Cashirada oo la duubo qaab{" "}
      <strong>
        interactive
      </strong>
      {" "}ah
    </li>
    <li>
      Section walba waxaa la socon doona{" "}
      <strong>
        exercises iyo notes
      </strong>
    </li>
    <li>
      Qof walba wuxuu qaadan karaa cashirada{" "}
      <strong>
        waqtiga ugu fiican
      </strong>
    </li>
    <li>
      <strong>
        Support joogta ah
      </strong>
      {" "}xiligii aad u baahato
    </li>
  </ul>
</FaqItem>
          <FaqItem idPrefix="mentorship-faq" index={4} question="Ma u baahanahay in aan horey u soo bartay programming?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    <strong>
      Maya
    </strong>
    , program-ka waxaan ka bilaabi doonaa{" "}
    <strong>
      zero
    </strong>
    .
  </p>
  <p>
    <strong>
      Uma baahnid:
    </strong>
  </p>
  <ul>
    <li>
      Qibrad hore
    </li>
    <li>
      Jaamacad
    </li>
    <li>
      Kuliyada IT
    </li>
  </ul>
  <p>
    Waxa kaliya aad u baahan tahay waa{" "}
    <strong>
      computer iyo internet access
    </strong>
    .
  </p>
</FaqItem>
          <FaqItem idPrefix="mentorship-faq" index={5} question="Maxay kaga duwantahay barnaamijkaan kuwa kale?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    <strong>
      Program-kaan waxa uu kaga duwan yahay kuwa kale:
    </strong>
  </p>
  <ul>
    <li>
      Waa program{" "}
      <strong>
        isku xiran
      </strong>
      {" "}oo hal package ah
    </li>
    <li>
      Waxaad helaysaa{" "}
      <strong>
        support joogta ah
      </strong>
    </li>
    <li>
      Waxaad baranaysaa{" "}
      <strong>
        technologies-ka ugu casrisan
      </strong>
    </li>
    <li>
      Waxaa ku jira{" "}
      <strong>
        AI Engineering training
      </strong>
      : Cursor, Claude Code, RAG, iyo multi-agent systems
    </li>
    <li>
      <strong>
        32 toddobaad
      </strong>
      , ma ahan 2 sano
    </li>
  </ul>
</FaqItem>
          <FaqItem idPrefix="mentorship-faq" index={6} question="Maxaan ka faa'idi karaa barnaamijkaan?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    <strong>
      Program-ka wuxuu kuu diyaarinayaa fursado badan:
    </strong>
  </p>
  <ol>
    <li>
      <strong>
        Working as a Developer for a Company
      </strong>
    </li>
    <li>
      <strong>
        Freelancing or Running Your Own Business
      </strong>
    </li>
    <li>
      <strong>
        Building Your Own Products or SaaS
      </strong>
    </li>
    <li>
      <strong>
        Using AI to build faster than anyone else
      </strong>
    </li>
  </ol>
</FaqItem>
        </div>
        <div className="mx-auto mt-14 max-w-3xl text-center md:mt-16" data-reveal="up">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50">
            Ma helin jawaabtii aad raadineysay?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
            Haddii aad qabto su'aalo dheeraad ah, waad nala soo xiriiri kartaa wakhti kasta.
          </p>
          <div className="mx-auto mt-7 flex max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
            <Link className="group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:focus-visible:ring-offset-neutral-950 bg-(--ink) text-white shadow-sm hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 h-[52px] px-7 text-base" href="/contact">
              Contact Us
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </Link>
            <Link className="group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:focus-visible:ring-offset-neutral-950 bg-white text-[#1E1E1E] border border-neutral-200 hover:bg-neutral-50 dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800 h-[52px] px-7 text-base" href="/mentorship#pricing">
              Hada is diiwaan geli!
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
