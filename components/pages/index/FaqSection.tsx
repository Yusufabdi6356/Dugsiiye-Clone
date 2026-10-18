import Link from "next/link";
import FaqItem from "@/components/shared/FaqItem";

export default function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-[#FAFAF9] dark:bg-neutral-950 py-20 md:py-28">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <h2 id="faq-heading" className="font-display font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50 text-4xl md:text-[44px] md:leading-[1.08]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 md:self-end">
            <div className="mt-6">
              <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
                Find answers to common questions about Dugsiiye.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 divide-y divide-neutral-100 overflow-hidden rounded-[2rem] border border-neutral-200/60 bg-white shadow-[0_1px_3px_rgb(var(--ink-rgb)/0.03),0_6px_16px_rgb(var(--ink-rgb)/0.05)] md:mt-16 dark:divide-neutral-800 dark:border-neutral-800 dark:bg-neutral-900">
          <FaqItem idPrefix="faq" index={0} question="Dugsiiye muxuu qabtaa?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    Dugsiiye waa{" "}
    <strong>
      madal waxbarasho
    </strong>
    {" "}(mentorship platform) oo diiradda saarta barashada{" "}
    <strong>
      Full-Stack Software Engineering
    </strong>
    .
  </p>
  <p>
    Waxaan bixinaa barnaamij mentorship ah oo dhameystiran:
  </p>
  <ul>
    <li>
      HTML, CSS, JavaScript
    </li>
    <li>
      React, Node.js, MongoDB
    </li>
    <li>
      Next.js, Docker, AWS
    </li>
    <li>
      AI Applications
    </li>
  </ul>
  <p>
    Si ardaydu u noqdaan developers dhab ah oo dhisa software casri ah.
  </p>
</FaqItem>
          <FaqItem idPrefix="faq" index={1} question="Sideen ugu soo biiri karaa barnaamijka Mentorship-ka?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    Si aad ugu soo biirto:
  </p>
  <ol>
    <li>
      Booqo websaytka{" "}
      <strong>
        dugsiiye.com
      </strong>
    </li>
    <li>
      Ka dooro{" "}
      <strong>
        'Join Mentorship'
      </strong>
      {" "}ama{" "}
      <strong>
        'Apply Now'
      </strong>
    </li>
    <li>
      Buuxi foomka diiwaangelinta
    </li>
    <li>
      Marka codsigaaga la hubiyo, waxaa lagu soo diri doonaa:{" "}
      <ul>
        <li>
          Faahfaahinta lacag bixinta
        </li>
        <li>
          Tallaabooyinka ku xiga
        </li>
        <li>
          Galitaanka platform-ka iyo casharrada
        </li>
      </ul>
    </li>
  </ol>
</FaqItem>
          <FaqItem idPrefix="faq" index={2} question="Barnaamijka Mentorship-ka muxuu ka kooban yahay?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    Barnaamijku wuxuu ka kooban yahay cutubyo isku xiran oo laga bilaabo aasaaska web development ilaa dhismaha apps production-level ah.
  </p>
  <p>
    <strong>
      Waxaad baran doontaa:
    </strong>
  </p>
  <ul>
    <li>
      <strong>
        Frontend:
      </strong>
      {" "}HTML, CSS, JavaScript, React
    </li>
    <li>
      <strong>
        Backend:
      </strong>
      {" "}Node.js, Express, MongoDB
    </li>
    <li>
      <strong>
        Cloud Deployment:
      </strong>
      {" "}Docker, AWS
    </li>
    <li>
      <strong>
        Projects & Portfolio Building
      </strong>
    </li>
    <li>
      <strong>
        AI & SaaS App Development
      </strong>
    </li>
  </ul>
  <p>
    <strong>
      Sidoo kale waxaad heli doontaa:
    </strong>
  </p>
  <ul>
    <li>
      Support joogto ah
    </li>
    <li>
      Live mentorship
    </li>
    <li>
      Community group (WhatsApp & Discord)
    </li>
  </ul>
</FaqItem>
          <FaqItem idPrefix="faq" index={3} question="Sidee caawinaad u heli karaa?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    Haddii aad u baahan tahay caawinaad, waxaad la xiriiri kartaa team-ka support-ga:
  </p>
  <ul>
    <li>
      <strong>
        WhatsApp group-ka rasmiga ah
      </strong>
      {" "}ee ardayda
    </li>
    <li>
      <strong>
        Email:
      </strong>
      {" "}info@dugsiiye.com
    </li>
    <li>
      <strong>
        Discord / Platform Chat
      </strong>
    </li>
  </ul>
  <p>
    Waxaa jira mentors iyo assistants{" "}
    <strong>
      had iyo jeer diyaar
    </strong>
    {" "}u ah inay kaa caawiyaan su'aal kasta.
  </p>
</FaqItem>
          <FaqItem idPrefix="faq" index={4} question="Ma heli karaa taageero haddii aanan horay u baran programming?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    <strong>
      Haa
    </strong>
    , barnaamijku waa{" "}
    <strong>
      beginner-friendly
    </strong>
    . Waxaan ku bilaabaynaa aasaaska HTML & CSS ilaa heer aad dhisi karto Full-Stack applications.
  </p>
  <p>
    Macallimiinta iyo mentors-ka ayaa si joogto ah kuula socon doona si aadan u lumin.
  </p>
</FaqItem>
          <FaqItem idPrefix="faq" index={5} question="Maxaan ku heli doonaa marka aan dhameeyo mentorship-ka?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    Markaad dhammayso barnaamijka, waxaad heli doontaa:
  </p>
  <ul>
    <li>
      <strong>
        Portfolio buuxa
      </strong>
      {" "}oo aad ku muujin karto shaqooyinkaaga
    </li>
    <li>
      <strong>
        Certificate of Completion
      </strong>
    </li>
    <li>
      <strong>
        Support & Job Guidance
      </strong>
    </li>
    <li>
      Fursad aad kaga mid noqoto{" "}
      <strong>
        Dugsiiye Mentors
      </strong>
      {" "}ama{" "}
      <strong>
        Trainers
      </strong>
    </li>
  </ul>
</FaqItem>
          <FaqItem idPrefix="faq" index={6} question="Barnaamijku intee le'eg ayuu socdaa?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    Barnaamijku wuxuu socdaa{" "}
    <strong>
      12 bilood
    </strong>
    , iyadoo kuxiran jadwalka ardayga.
  </p>
  <p>
    Waxaad si iskeed ah u dhigan kartaa:
  </p>
  <ul>
    <li>
      Casharrada recorded
    </li>
    <li>
      Live sessions
    </li>
  </ul>
  <p>
    Iyadoo mentor-kaagu kuu dejin doono jadwal habboon.
  </p>
</FaqItem>
          <FaqItem idPrefix="faq" index={7} question="Ma heli karaa lacag celin haddii aanan sii wadan karin?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    <strong>
      Haa
    </strong>
    , haddii aadan sii wadan karin barashada sababo muhiim ah, waxaad codsan kartaa:
  </p>
  <ul>
    <li>
      Refund
    </li>
    <li>
      Re-enrollment wareegga xiga
    </li>
  </ul>
  <p>
    Iyadoo lagu saleeyo siyaasadda{" "}
    <strong>
      Dugsiiye Refund Policy
    </strong>
    .
  </p>
</FaqItem>
          <FaqItem idPrefix="faq" index={8} question="Ma jiraan fursado shaqo ama internship ah?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    <strong>
      Haa
    </strong>
    , ardayda dhammeeya mentorship-ka waxaa la siiyaa:
  </p>
  <ul>
    <li>
      Job support
    </li>
    <li>
      Project collaborations
    </li>
    <li>
      Fursado internship remote ah
    </li>
  </ul>
  <p>
    Si ay ugu tijaabiyaan xirfadahooda.
  </p>
</FaqItem>
          <FaqItem idPrefix="faq" index={9} question="Maxaa Dugsiiye uga duwan koorsooyinka kale?" questionClassName="font-display text-base font-semibold tracking-[-0.01em] text-[#1E1E1E] md:text-lg dark:text-neutral-100" answerClassName="max-w-2xl pb-6 text-sm leading-6 text-neutral-600 dark:text-neutral-300 [&_p]:mt-2.5 [&_p:first-child]:mt-0 [&_strong]:font-semibold [&_strong]:text-[#1E1E1E] dark:[&_strong]:text-neutral-50 [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:pl-4 [&_ol]:mt-2 [&_ol]:space-y-1 [&_ol]:pl-4 [&_li]:list-disc [&_ol_li]:list-decimal [&_li]:pl-1 [&_li]:marker:text-neutral-400 dark:[&_li]:marker:text-neutral-500">
  <p>
    Dugsiiye{" "}
    <strong>
      ma aha kaliya course
    </strong>
    , waa{" "}
    <strong>
      mentorship & community
    </strong>
    .
  </p>
  <p>
    <strong>
      Waxaan diiradda saarnaa:
    </strong>
  </p>
  <ul>
    <li>
      Project-based learning
    </li>
    <li>
      Support dhab ah
    </li>
    <li>
      Natiijo la taaban karo
    </li>
  </ul>
  <p>
    Arday badan ayaa maanta noqday{" "}
    <strong>
      developers
    </strong>
    ,{" "}
    <strong>
      trainers
    </strong>
    , iyo{" "}
    <strong>
      tech leaders
    </strong>
    {" "}kadib barnaamijka Dugsiiye.
  </p>
</FaqItem>
        </div>
        <div className="mt-14 text-center md:mt-16">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-[#1E1E1E] dark:text-neutral-50">
            Ma helin jawaabtii aad raadineysay?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
            Haddii aad qabto su'aalo dheeraad ah, waad nala soo xiriiri kartaa.
          </p>
          <div className="mx-auto mt-7 flex max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:items-center">
            <Link className="group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:focus-visible:ring-offset-neutral-950 bg-(--ink) text-white shadow-sm hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 h-12 px-6 text-[15px]" href="/mentorship">
              Start Your Journey Today
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </Link>
            <a href="https://wa.me/252614251112" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-6 text-[15px] font-medium text-[#1E1E1E] transition-all duration-200 hover:-translate-y-px hover:bg-neutral-50 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF9] dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800 dark:focus-visible:ring-offset-neutral-950">
              Talk to Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
