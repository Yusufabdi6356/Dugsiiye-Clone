export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  thumbnail: string;
  author: string;
  authorAvatar?: string;
  authorInitials?: string;
  readMinutes: number | null;
};

export const blogCategories: { label: string; href: string }[] = [
  {
    "label": "AI Engineering",
    "href": "/blog/category/ai-engineering"
  },
  {
    "label": "Artificial Intelligence",
    "href": "/blog/category/artificial-intelligence"
  },
  {
    "label": "Career Growth",
    "href": "/blog/category/career-growth"
  },
  {
    "label": "Computer Science",
    "href": "/blog/category/computer-science"
  },
  {
    "label": "Cryptocurrency",
    "href": "/blog/category/cryptocurrency"
  },
  {
    "label": "Cybersecurity",
    "href": "/blog/category/cybersecurity"
  },
  {
    "label": "Dark Web & Privacy",
    "href": "/blog/category/dark-web-privacy"
  },
  {
    "label": "Data Science",
    "href": "/blog/category/data-science"
  },
  {
    "label": "DevOps & Cloud",
    "href": "/blog/category/devops-cloud"
  },
  {
    "label": "Ethical Hacking",
    "href": "/blog/category/ethical-hacking"
  },
  {
    "label": "Leadership",
    "href": "/blog/category/leadership"
  },
  {
    "label": "Learning Strategies",
    "href": "/blog/category/learning-strategies"
  },
  {
    "label": "Marketing",
    "href": "/blog/category/marketing"
  },
  {
    "label": "Mobile Development",
    "href": "/blog/category/mobile-development"
  },
  {
    "label": "Network",
    "href": "/blog/category/network"
  },
  {
    "label": "Open Source",
    "href": "/blog/category/open-source"
  },
  {
    "label": "Productivity",
    "href": "/blog/category/productivity"
  },
  {
    "label": "Programming Languages",
    "href": "/blog/category/programming-languages"
  },
  {
    "label": "Scholarship",
    "href": "/blog/category/scholarship"
  },
  {
    "label": "Soft Skills",
    "href": "/blog/category/soft-skills"
  },
  {
    "label": "Software",
    "href": "/blog/category/software"
  },
  {
    "label": "Software Engineering",
    "href": "/blog/category/software-engineering"
  },
  {
    "label": "Web Development",
    "href": "/blog/category/web-development"
  },
  {
    "label": "Web3 & Blockchain",
    "href": "/blog/category/web3-blockchain"
  },
  {
    "label": "Work-Life Balance",
    "href": "/blog/category/work-life-balance"
  }
];

export const blogTags: string[] = ["AI Agents","AI Coding","AI Ethics","AI Tools","API","AWS","Anonymity","App","Authentication","Authorization","Bitcoin","Blockchain","Bug Bounty","C#","C/C++","CTF","CV","Career Tips","Claude","Claude Code","Cloud","Communication","Computer Vision","Critical Thinking","Cryptocurrency","DRY","Dark Web","Data Engineering","Data Science","Database","DeFi","Deep Learning","DevOps","Digital Privacy","Docker","Domain","Encryption","Engineering","Ethereum","Forensics","FutureTechnology","Generative AI","Git","Goal Setting","GraphQL","HTML","Hosting","Interview Prep","JWT","JavaScript","Kubernetes","LLM Models","Leadership","Learning","License","Load Balancing","MIT","MLOPS","Machine Learning","Malware Analysis","Mental Health","Mentorship","Metamask","Mining","Mobile","NFTs","NLP","Network Security","Networking","Node.js","OAuth","OSINT","OSS","P2P","PWA","Penetration Testing","Performance","Personal Growth","Privacy Tools","Problem Solving","Productivity","Python","React","React Native","Reinforcement Learning","Remote Work","Reverse Engineering","Rust","SDLC","SatelliteInternet","Security","Self Improvement","Server","Skill Development","Smart Contracts","Social Engineering","Soft Skills","Starlink","State Management","Success Stories","System Design","Team Building","Testing","Time Management","Tor Network","TypeScript","UI/UX","Unit Testing","VPN","Vulnerability Research","Wallets","Work Culture","YouTube","Zero Knowledge","ambassador","dApps","ethical hacker","gRPC","kotlin","marketing","scholarship","winner"];

export const blogPosts: BlogPost[] = [
  {
    "slug": "ai-sawir-sameynta-chatgpt-grok-gemini",
    "title": "Yaa Fiican Sawir Sameynta AI: ChatGPT, Grok Imagine iyo Gemini?",
    "category": "Artificial Intelligence",
    "date": "2026-08-27T12:57:04.869Z",
    "dateLabel": "Aug 27, 2026",
    "excerpt": "Thumbnails-ka Dugsiiye ee ugu dambeeyay oo dhan AI ayaa sameeyay. Qoraalkan waxaad ku ogaanaysaa tijaabo real ah oo saddexda tool isla shaqo la siiyay, kan guulaystay, iyo prompt-ka sawir fiican lagu helo.",
    "thumbnail": "/cdn/blog-thumbs/ai-sawir-sameynta-chatgpt-grok-gemini-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "xirfadaha-2026-xilliga-ai",
    "title": "Hadda Baro Xirfadahan 2026: 9-ka Role ee Coding-ka ee Xilliga AI-ga",
    "category": "Career Growth",
    "date": "2026-08-27T12:57:04.846Z",
    "dateLabel": "Aug 27, 2026",
    "excerpt": "Suuqa shaqadu wuu adag yahay, laakiin xirfado gaar ah ayaa xilliga AI-ga ku anfacaya. Qoraalkan waxaad ku ogaanaysaa 9-ka role ee coding-ka, tools-ka mid walba u baahan yahay, iyo kuwa ugu mudan in laga bilaabo.",
    "thumbnail": "/cdn/blog-thumbs/xirfadaha-2026-xilliga-ai-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 4,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "baro-react-js-af-soomaali",
    "title": "Baro React JS Af-Soomaali: Full Course 22+ Saac oo Bilaash ah",
    "category": "Web Development",
    "date": "2026-08-27T12:57:04.822Z",
    "dateLabel": "Aug 27, 2026",
    "excerpt": "React waa library-ga ugu caansan ee frontend-ka. Halkan waxaad ka helaysaa full course Af-Soomaali ah oo 22 saac ka badan: hooks, Redux, Tailwind, iyo afar project real ah oo ay ku jiraan Netflix clone iyo shopping cart Hormuud EVC Plus ku xiran.",
    "thumbnail": "/cdn/blog-thumbs/baro-react-js-af-soomaali-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "soft-skills-xilliga-ai",
    "title": "10-ka Soft Skills ee Lagaaga Baahan Yahay Xilliga AI-ga",
    "category": "Career Growth",
    "date": "2026-08-27T11:11:41.740Z",
    "dateLabel": "Aug 27, 2026",
    "excerpt": "Hard skill kaligiis ma shaqaynayo xilligan AI-ga la joogo. Qoraalkan waxaad ku baranaysaa 10-ka soft skills ee AI-gu kaa qaadan karin, iyo sababta ay kuu yihiin furaha shaqada iyo horumarka.",
    "thumbnail": "/cdn/blog-thumbs/soft-skills-xilliga-ai-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 4,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "gemini-3-7-flash-af-soomaali",
    "title": "Gemini 3.7 Flash Waan Tijaabiyay: Ma Ku Fiican Yahay Design-ka?",
    "category": "Artificial Intelligence",
    "date": "2026-08-27T11:11:41.720Z",
    "dateLabel": "Aug 27, 2026",
    "excerpt": "Google waxay soo saartay Gemini 3.7 Flash, waxaana ku tijaabiyay AntiGravity design real ah. Qoraalkan waxaad ku ogaanaysaa natiijada, khaladka ugu badan ee design-ka AI-ga, iyo sida prompt fiican wax u beddesho.",
    "thumbnail": "/cdn/blog-thumbs/gemini-3-7-flash-af-soomaali-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "claude-code-cursor-codex-yaa-fiican",
    "title": "Claude Code, Cursor iyo Codex: Yaa Fiican? Isbarbardhig real ah",
    "category": "Software Engineering",
    "date": "2026-08-27T11:11:41.676Z",
    "dateLabel": "Aug 27, 2026",
    "excerpt": "Saddexda agentic coding tools ee ugu caansan ayaan hal specification siiyay: hal project, saddex agent. Qoraalkan waxaad ku ogaanaysaa yaa speed badan, yaa quality fiican, iyo goormaad mid walba isticmaalaysaa.",
    "thumbnail": "/cdn/blog-thumbs/claude-code-cursor-codex-yaa-fiican-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "coding-2026-ma-mudan-tahay",
    "title": "Coding 2026: Weli Ma Mudan Tahay In La Barto?",
    "category": "Career Growth",
    "date": "2026-08-26T09:47:21.145Z",
    "dateLabel": "Aug 26, 2026",
    "excerpt": "AI-gu code ayuu qori karaa, marka maxaad coding u baranaysaa 2026? Jawaabtu waa haa, laakiin ma aha sidii hore. Qoraalkan waxaad ku fahmaysaa waxa runtii la baranayo iyo sababta ay u tahay tallaabada ugu muhiimsan.",
    "thumbnail": "/cdn/blog-thumbs/coding-2026-ma-mudan-tahay-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "waa-maxay-deepseek",
    "title": "Waa Maxay DeepSeek? Model-ka Reasoning-ka ah ee Adduunka ka Qaylisiiyay",
    "category": "Artificial Intelligence",
    "date": "2026-08-26T09:47:21.129Z",
    "dateLabel": "Aug 26, 2026",
    "excerpt": "DeepSeek waa model AI ah oo buuq weyn dhaliyay. Qoraalkan waxaad ku fahmaysaa waxa uu yahay, waxa reasoning models ka duwan yihiin kuwii hore, iyo sida computer-kaaga local-ka ah loogu run-gareeyo.",
    "thumbnail": "/cdn/blog-thumbs/waa-maxay-deepseek-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "sida-saxda-ah-loo-barto-programming",
    "title": "Sida Saxda ah ee Loo Barto Programming-ka: Khaladaadka Joogtada ah iyo Xalkooda",
    "category": "Learning Strategies",
    "date": "2026-08-26T09:47:21.104Z",
    "dateLabel": "Aug 26, 2026",
    "excerpt": "Koorsooyin badan ayaad dhammaysay, haddana wax ma dhisi kartid? Qoraalkan waxaad ku ogaanaysaa khaladaadka barashada programming-ka ugu badan iyo habka saxda ah ee wax lagu barto.",
    "thumbnail": "/cdn/blog-thumbs/sida-saxda-ah-loo-barto-programming-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "baro-claude-code-af-soomaali",
    "title": "Baro Claude Code Af-Soomaali: Skills, Agents iyo MCP (Full Course)",
    "category": "AI Engineering",
    "date": "2026-08-26T06:57:55.898Z",
    "dateLabel": "Aug 26, 2026",
    "excerpt": "Claude Code waa tool agentic-ka ah ee ugu shaac baxay dunida technology-ga. Qoraalkan waxaad ku helaysaa koorso dhammaystiran oo Af-Soomaali ah: install-ka, context-ga, memory-ga, skills-ka, sub-agents iyo MCP.",
    "thumbnail": "/cdn/blog-thumbs/baro-claude-code-af-soomaali-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "baro-cursor-ai-af-soomaali",
    "title": "Baro Cursor AI Af-Soomaali: Sida Saxda ah ee Loo Isticmaalo",
    "category": "AI Engineering",
    "date": "2026-08-26T06:57:55.888Z",
    "dateLabel": "Aug 26, 2026",
    "excerpt": "Cursor waa code editor AI ah oo wax badan ka beddelay sida software-ka loo dhiso. Qoraalkan waxaad ku baranaysaa features-ka ugu muhiimsan, qofka uu anfacayo, iyo khaladka dadku ugu badan galaan.",
    "thumbnail": "/cdn/blog-thumbs/baro-cursor-ai-af-soomaali-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 4,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "vibe-coding-iyo-agentic-coding",
    "title": "Vibe Coding iyo Agentic Coding: Farqiga iyo Afartii Xilli ee Coding-ka",
    "category": "Software Engineering",
    "date": "2026-08-26T06:57:55.849Z",
    "dateLabel": "Aug 26, 2026",
    "excerpt": "Dad badan ayaa isku qalda vibe coding iyo agentic coding. Qoraalkan waxaad ku fahmaysaa afarta xilli ee uu coding-ku soo maray, farqiga u dhexeeya, iyo goorta mid kasta la isticmaalo.",
    "thumbnail": "/cdn/blog-thumbs/vibe-coding-iyo-agentic-coding-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 5,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "learn-coding-in-somali",
    "title": "Learn Coding in Somali: The Complete Path from Zero to AI Engineer",
    "category": "Learning Strategies",
    "date": "2026-08-26T05:16:47.630Z",
    "dateLabel": "Aug 26, 2026",
    "excerpt": "Yes, you can learn to code fully in Somali. Here is the complete path: structured courses, a real mentor, and a community, from your first HTML tag to shipping AI apps.",
    "thumbnail": "/cdn/blog-thumbs/learn-coding-in-somali-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "ku-baro-python-af-soomaali",
    "title": "Ku Baro Python Af-Soomaali: Full Course oo Bilaash ah",
    "category": "Programming Languages",
    "date": "2026-08-26T05:16:47.622Z",
    "dateLabel": "Aug 26, 2026",
    "excerpt": "Python waa luuqadda ugu fudud ee la bilaabo, waana luuqadda AI-ga. Halkan waxaad ka helaysaa full course Af-Soomaali ah oo bilaash ah, iyo waddada kuu horseedaysa AI Engineering.",
    "thumbnail": "/cdn/blog-thumbs/ku-baro-python-af-soomaali-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "baro-javascript-af-soomaali",
    "title": "Baro JavaScript Af-Soomaali: Luuqadda Ugu Shaqada Badan",
    "category": "Programming Languages",
    "date": "2026-08-26T05:16:47.613Z",
    "dateLabel": "Aug 26, 2026",
    "excerpt": "JavaScript waa luuqadda ugu isticmaalka badan dunida. Halkan waxaad ku baranaysaa waxa ay tahay, maxay muhiim u tahay, iyo sida aad Af-Soomaali ugu baran karto.",
    "thumbnail": "/cdn/blog-thumbs/baro-javascript-af-soomaali-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "baro-html-af-soomaali",
    "title": "Baro HTML Af-Soomaali: Casharkaaga Ugu Horreeya",
    "category": "Web Development",
    "date": "2026-08-26T05:16:47.604Z",
    "dateLabel": "Aug 26, 2026",
    "excerpt": "HTML waa tallaabada ugu horreysa ee web development. Halkan waxaad ku baranaysaa waxa HTML yahay, sida uu u shaqeeyo, iyo sida aad maanta u qori karto code-kaaga ugu horreeya, Af-Soomaali.",
    "thumbnail": "/cdn/blog-thumbs/baro-html-af-soomaali-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "baro-programming-af-soomaali",
    "title": "Baro Programming Af-Soomaali: Halkee Laga Bilaabaa?",
    "category": "Learning Strategies",
    "date": "2026-08-26T05:16:47.593Z",
    "dateLabel": "Aug 26, 2026",
    "excerpt": "Ma rabtaa inaad barato programming laakiin ma garanaysid halka laga bilaabo? Tallaabo tallaabo ayaan kuugu sheegaynaa sida aad Af-Soomaali ugu baran karto, adigoo ka bilaabaya eber.",
    "thumbnail": "/cdn/blog-thumbs/baro-programming-af-soomaali-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "sidee-loo-bartaa-ai-2026",
    "title": "Sidee Ayaad U Baran Kartaa AI 2026? Core AI iyo Applied AI",
    "category": "AI Engineering",
    "date": "2026-08-26T05:16:47.583Z",
    "dateLabel": "Aug 26, 2026",
    "excerpt": "AI laba waji buu leeyahay: Core AI oo ah in models la tababaro, iyo Applied AI oo ah in models-ka jira wax lagu dhiso. Qoraalkan waxaad ku ogaanaysaa kan adiga kugu habboon iyo halka laga bilaabo.",
    "thumbnail": "/cdn/blog-thumbs/sidee-loo-bartaa-ai-2026-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "waa-maxay-llms",
    "title": "Waa Maxay LLMs (Large Language Models)? Sida ChatGPT iyo Claude u Shaqeeyaan",
    "category": "Artificial Intelligence",
    "date": "2026-08-26T05:16:47.563Z",
    "dateLabel": "Aug 26, 2026",
    "excerpt": "ChatGPT, Claude, Gemini: dhammaan waa Large Language Models. Qoraalkan waxaad ku fahmaysaa waxa ay yihiin, maxay u yihiin large, sida loo tababaro, iyo sida ay jawaabta kuugu soo saaraan.",
    "thumbnail": "/cdn/blog-thumbs/waa-maxay-llms-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 4,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "waa-maxay-ai-engineer",
    "title": "Waa Maxay AI Engineer? Farqiga AI Engineer, Data Scientist iyo ML Engineer",
    "category": "AI Engineering",
    "date": "2026-08-26T05:16:47.553Z",
    "dateLabel": "Aug 26, 2026",
    "excerpt": "AI engineer, data scientist, machine learning engineer iyo prompt engineer: roles-kan waa lagu wareeraa. Qoraalkan waxaad ku fahmaysaa shaqada uu mid kastaa qabto iyo kan adiga kugu habboon.",
    "thumbnail": "/cdn/blog-thumbs/waa-maxay-ai-engineer-v3.png",
    "author": "Mohamud Osman",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "sidee-loo-noqdaa-ai-engineer",
    "title": "Sidee Loo Noqdaa AI Engineer",
    "category": "AI Engineering",
    "date": "2026-07-21T17:12:26.793Z",
    "dateLabel": "Jul 21, 2026",
    "excerpt": "Sanadihii u dambeeyay, Garaad Gacmeedku wuxuu noqday mid ka mid ah tiknoolajiyada ugu kobaca badan dunida. Shirkado waaweyn iyo kuwo yaryarba waxay maanta raadinayaan AI Engineers si ay u dhisaan nidaamyo caqli badan oo xalliya dhibaatooyin dhab ah.",
    "thumbnail": "/cdn/uploads/1784653885702-ai.jpeg",
    "author": "Sharafdin Yusuf",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "sida-loo-yareeyo-token-ka-claude-code",
    "title": "Sida Loo Yareeyo Token-ka Claude Code",
    "category": "Artificial Intelligence",
    "date": "2026-06-26T17:35:03.382Z",
    "dateLabel": "Jun 26, 2026",
    "excerpt": "Waa run in Claude Code limit-kiisa ciyow la gaaro, gaar ahaan haddii aad isticmaasho plans-ka yar-yar sida midka 20-ka dollar ah. Laakiin inta badan caqabadu waxay noqon kartaa sida aad u isticmaasho.",
    "thumbnail": "/cdn/uploads/1782494876884-cluade-2-05.jpg.jpeg",
    "author": "Sharafdin Yusuf",
    "readMinutes": 4,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "injineernimada-ka-dambeysa-youtube",
    "title": "Injineernimada Ka Dambeysa YouTube",
    "category": "Software Engineering",
    "date": "2026-06-26T17:27:31.844Z",
    "dateLabel": "Jun 26, 2026",
    "excerpt": "YouTube waa madal aad u weyn, waxaana maalin kasta la soo geliyaa muuqaallo aad u farabadan. Mareegtan waxay maamushaa tiro aad u badan oo isticmaaleyaal iyo faylal ah, taas oo u baahan injineernimo heer sare ah si wax walba si habsami leh ugu shaqeeyaan.",
    "thumbnail": "/cdn/uploads/1782494588104-eby.png",
    "author": "Mohamud Osman",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "llm-models-ka-ugu-fiican-ee-coding",
    "title": "LLM Models-ka ugu fiican ee coding",
    "category": "Artificial Intelligence",
    "date": "2026-05-27T15:04:02.545Z",
    "dateLabel": "May 27, 2026",
    "excerpt": "Ranking cusub ee LM Arena wuxuu muujinayaa sida ay AI models-ku maanta u kala awood badan yihiin, gaar ahaan dhinaca coding-ka iyo xalinta dhibaatooyinka adag. Waxa ugu yaabka badan waa in 10-ka model ee ugu sarreeya ay si weyn u maamulayaan models-ka shirkadda Anthropic ee Claude Opus.",
    "thumbnail": "/cdn/uploads/1779894183618-llm.webp",
    "author": "Mohamud Osman",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "ai-tools-ka-developers-ka",
    "title": "AI Tools-ka Developers-ka",
    "category": "Artificial Intelligence",
    "date": "2026-05-27T15:02:47.075Z",
    "dateLabel": "May 27, 2026",
    "excerpt": "Ai tools fara badan ayaa jira hadana hadan soo qaadano kuwooda ugu muhiimsan ka developer ahaan waa kuwan:. Qof kasta oo developer ah maanta wuu ogyahay in AI uu noqday qayb muhiim ah oo ka mid ah shaqada maalinlaha ah.",
    "thumbnail": "/cdn/uploads/1779894111021-at.webp",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "soft-skills-ka-casriga-ai",
    "title": "Soft Skills-ka Casriga AI",
    "category": "Career Growth",
    "date": "2026-05-27T15:01:22.906Z",
    "dateLabel": "May 27, 2026",
    "excerpt": "Xilli AI ah ayaa lagu jiraa, waqti ay ku dhowaad wax walba saameyn ku leeyihiin aalado sida Claude, ChatGPT iyo Google Gemini. Shaqooyinka way is beddelayaan, habka wax loo barto wuu is beddelay, xitaa sida dadka isu fahmaan way is beddeshay.",
    "thumbnail": "/cdn/uploads/1779894053446-ss.webp",
    "author": "Sharafdin Yusuf",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "xirfadaha-casriga-ai",
    "title": "Xirfadaha Casriga AI",
    "category": "Career Growth",
    "date": "2026-05-27T14:59:33.766Z",
    "dateLabel": "May 27, 2026",
    "excerpt": "Waxaa jira walaac iyo su’aalo badan oo laga qabo xirfadaha leh mustaqbal wanaagsan xilligan uu AI si degdeg ah u korayo. Dad badan waxay is weydiinayaan waxa ay baran lahaayeen si ay ula jaan qaadaan isbeddelka.",
    "thumbnail": "/cdn/uploads/1779893930268-xc.webp",
    "author": "Sharafdin Yusuf",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-claude-code",
    "title": "Waa Maxay Claude Code",
    "category": "Artificial Intelligence",
    "date": "2026-05-27T14:57:28.051Z",
    "dateLabel": "May 27, 2026",
    "excerpt": "Claude Code waa qalab (tool) loogu talagalay inuu si toos ah ula shaqeeyo dadka koodhka qora(Developers). Waa caawiye AI ah oo ku dhex nool meesha aad koodhka ku qorto ee loo yaqaanno Terminal-ka.",
    "thumbnail": "/cdn/uploads/1779893841266-cl.webp",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-predictive-analytics",
    "title": "Waa Maxay Predictive Analytics",
    "category": "Data Science",
    "date": "2026-04-12T16:28:55.093Z",
    "dateLabel": "Apr 12, 2026",
    "excerpt": "Predictive Analytics waa qayb ka mid ah Data Science oo isticmaasha xogta hore si ay u saadaaliso waxa dhici doona mustaqbalka. Ma ahan sixir ama qiyaas iska caadi ah.",
    "thumbnail": "/cdn/uploads/1776011178935-pa.jpg",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-mlops",
    "title": "Waa Maxay MLOps",
    "category": "DevOps & Cloud",
    "date": "2026-04-12T16:24:27.320Z",
    "dateLabel": "Apr 12, 2026",
    "excerpt": "MLOps waa habka isku xira sayniska xogta (Data Science) iyo maamulka software-ka. Haddii Data Science-ku yahay dhisidda moodalka AI-ga, MLOps waa farsamada hubinaysa in moodalkaas uu si joogto ah ugu shaqeeyo dunida dhabta ah.",
    "thumbnail": "/cdn/uploads/1776010776615-mlop.webp",
    "author": "Mohamud Osman",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg"
  },
  {
    "slug": "waa-maxay-data-engineering",
    "title": "Waa Maxay Data Engineering",
    "category": "Data Science",
    "date": "2026-04-12T16:17:46.728Z",
    "dateLabel": "Apr 12, 2026",
    "excerpt": "Data Engineering waa laf-dhabarta ka dambaysa dhammaan mashaariicda AI-da iyo Data Science-ka. Haddii Data Science-ku yahay falanqaynta xogta, Data Engineering waa dhisidda nidaamka xogtaas soo qaadaya, sifeeyeyna, una diyaarinaya mishiinnada.",
    "thumbnail": "/cdn/uploads/1776010369673-de.jpg",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-reinforcement-learning",
    "title": "Waa Maxay Reinforcement Learning",
    "category": "Artificial Intelligence",
    "date": "2026-03-16T19:23:57.438Z",
    "dateLabel": "Mar 16, 2026",
    "excerpt": "Reinforcement Learning waa nooc ka mid ah AI-da oo wax ku barta tijaabo iyo qalad. Haddii AI-da kale lagu baro xog la diyaariyay, noocan wuxuu wax ku bartaa isaga oo la falgalaya deegaanka uu ku jiro.",
    "thumbnail": "/cdn/uploads/1773688974930-rl.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-computer-vision",
    "title": "Waa Maxay Computer Vision",
    "category": "Artificial Intelligence",
    "date": "2026-03-16T19:22:20.994Z",
    "dateLabel": "Mar 16, 2026",
    "excerpt": "Computer Vision waa qayb ka mid ah AI-da oo kombuyuutarka baraysa inuu u arko dunida sida ay dadku u arkaan. Haddii AI-da kale ay ku fiican tahay akhriska iyo qoraalka, Computer Vision waxay xoogga saartaa fahanka sawirada iyo muuqaallada.",
    "thumbnail": "/cdn/uploads/1773688937930-cv.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "ai-ethics",
    "title": "AI Ethics",
    "category": "Artificial Intelligence",
    "date": "2026-03-16T19:20:54.240Z",
    "dateLabel": "Mar 16, 2026",
    "excerpt": "Horumarka weyn ee laga gaaray AI-da wuxuu keenayaa su’aalo muhiim ah oo ku saabsan sida loo isticmaalo. Ethics-ka AI ama anshaxa AI waa xeerarka lagu xaqiijinayo in tiknoolojiyaddan loo isticmaalo si nabad ah oo caddaalad ah.",
    "thumbnail": "/cdn/uploads/1773688849034-ethics.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-deep-learning",
    "title": "Waa Maxay Deep Learning",
    "category": "Artificial Intelligence",
    "date": "2026-03-16T19:19:14.847Z",
    "dateLabel": "Mar 16, 2026",
    "excerpt": "Deep Learning waa qayb aad u muhiim ah oo ka mid ah AI-da. Waxay keentay in kombuyuutarku uu maanta qaban karo shaqooyin dhib badan oo markii hore dadka kaliya ku koobnaa.",
    "thumbnail": "/cdn/uploads/1773688751896-deep.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-openclaw",
    "title": "Waa Maxay OpenClaw",
    "category": "Artificial Intelligence",
    "date": "2026-03-16T19:17:22.411Z",
    "dateLabel": "Mar 16, 2026",
    "excerpt": "Dunida tiknoolojiyadda waxaa maanta ugu hadal hayn badan barnaamij cusub oo la yiraahdo OpenClaw. Waa caawiye AI ah oo aad u casri ah, kaas oo bilaash ah.",
    "thumbnail": "/cdn/uploads/1773688613525-open.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-data-science",
    "title": "Waa Maxay Data Science",
    "category": "Artificial Intelligence",
    "date": "2026-03-16T19:15:56.854Z",
    "dateLabel": "Mar 16, 2026",
    "excerpt": "Dunida casriga ah waxaa lagu tilmaamaa in xogta (Data) ay tahay dahabka cusub ama shidaalka cusub. Laakiin dahabkaas waa mid aan faa'iido lahayn haddii aan la farsameyn oo aan laga soo saarin macluumaad qiimo leh.",
    "thumbnail": "/cdn/uploads/1773688546576-data.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-nlp-natural-language-processing",
    "title": "Waa Maxay NLP (Natural Language Processing)",
    "category": "Artificial Intelligence",
    "date": "2026-03-16T19:07:22.483Z",
    "dateLabel": "Mar 16, 2026",
    "excerpt": "Dunida tiknoolojiyadda waxaa jira caqabad weyn oo u dhaxeysa dadka iyo kombuyuutarrada. Dadku waxay ku hadlaan luqado sida Soomaali ama Ingiriis, halka kombuyuutarku uu fahmo oo kaliya lambarro (Zero iyo One).",
    "thumbnail": "/cdn/uploads/1773687982036-nlp.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-generative-ai",
    "title": "Waa Maxay Generative AI",
    "category": "Artificial Intelligence",
    "date": "2026-03-16T19:04:22.047Z",
    "dateLabel": "Mar 16, 2026",
    "excerpt": "Generative AI waa erayga ugu badan ee maanta laga hadal hayo dunida tiknoolojiyadda, waana nooc ka mid ah caqliga macmal (AI) oo awood u leh inuu abuuro waxyaabo cusub halkii uu kaliya falanqeyn lahaa xogta jirta.",
    "thumbnail": "/cdn/uploads/1773687856257-gen.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-ai-agents",
    "title": "Waa Maxay AI Agents",
    "category": "Artificial Intelligence",
    "date": "2026-03-16T19:02:19.969Z",
    "dateLabel": "Mar 16, 2026",
    "excerpt": "Dunida tiknoolojiyadda waxaa qabsaday isbeddel cusub oo la yiraahdo AI Agents. Dad badan waxay u malaynayaan in AI-gu uu yahay kaliya wax su’aalo la weydiiyo",
    "thumbnail": "/cdn/uploads/1773687714304-unnamed.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-authentication-iyo-authorization",
    "title": "Waa Maxay Authentication iyo Authorization",
    "category": "Software",
    "date": "2026-01-15T18:49:59.147Z",
    "dateLabel": "Jan 15, 2026",
    "excerpt": "Dunida amniga digital-ka ah, waxaa jira labo hab oo had iyo jeer is garab socda balse shaqooyin kala duwan qabta, kuwaas oo ah Authentication iyo Authorization. In kasta oo dad badani ay labadan erey isku khaldaan, mid kastaa wuxuu leeyahay mas'uuliyad gaar",
    "thumbnail": "/cdn/uploads/1768502947169-XW3cSbd1Qaz7Km9DOM-1WugYAbnZEpU5.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-dry-dont-repeat-yourself",
    "title": "Waa Maxay DRY (Don't Repeat Yourself)",
    "category": "Software",
    "date": "2026-01-15T18:47:50.129Z",
    "dateLabel": "Jan 15, 2026",
    "excerpt": "DRY (Don't Repeat Yourself) waa mid ka mid ah mabaadi'da aasaasiga ah ee Software Engineering-ka. Fikraddan waxaa markii ugu horreysay lagu soo bandhigay buugga caanka ah ee The Pragmatic Programmer.",
    "thumbnail": "/cdn/uploads/1768502813816-EHvtLTTe6oFCkaqjNuM3C7aBnzI0UXkX.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-graphql",
    "title": "Waa Maxay GraphQL",
    "category": "Web Development",
    "date": "2026-01-15T18:45:48.519Z",
    "dateLabel": "Jan 15, 2026",
    "excerpt": "GraphQL waa luqad (Query Language) loo isticmaalo API-yada, waxaana sameysay shirkadda Facebook (Meta) sannadkii 2012. Ujeeddada ugu weyn ee loo sameeyay waxay ahayd in xal loo helo dhibaatooyinka REST API-ga, gaar ahaan markay timaaddo",
    "thumbnail": "/cdn/uploads/1768502727873-5kPqoavM7qpr8xwrWcqcdDd0b-HhfGsJ.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-load-balancing",
    "title": "Waa Maxay Load Balancing",
    "category": "Software",
    "date": "2026-01-15T18:44:33.820Z",
    "dateLabel": "Jan 15, 2026",
    "excerpt": "Load Balancing (Dheellitirka Xamuulka) waa farsamo muhiim ah oo loo isticmaalo in lagu qaybiyo taraafikada (traffic) ama codsiyada soo galaya server-yada kala duwan. Ujeeddada ugu weyn waa in looga hortago in hal server",
    "thumbnail": "/cdn/uploads/1768502668369-m6DsT7JKpv5tMzq8eUcaQrh_pE_N7cpL.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-grpc-google-remote-procedure-call",
    "title": "Waa Maxay gRPC (Google Remote Procedure Call)",
    "category": "Web Development",
    "date": "2026-01-15T18:41:25.998Z",
    "dateLabel": "Jan 15, 2026",
    "excerpt": "gRPC (Google Remote Procedure Call) waa nidaam casri ah oo xawaare sare leh oo ay samaysay shirkadda Google, kaas oo loo adeegsado in lagu wada xiriiriyo adeegyada kala duwan ee software-ka (Microservices).",
    "thumbnail": "/cdn/uploads/1768502198100-XtZMIQgDm2G9I28KwZuyPoeRguhPZu1e.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-docker-iyo-containerization",
    "title": "Waa Maxay Docker iyo Containerization",
    "category": "DevOps & Cloud",
    "date": "2026-01-15T18:35:13.207Z",
    "dateLabel": "Jan 15, 2026",
    "excerpt": "Docker iyo Containerization waa kacaanka ugu weyn ee dhacay tobankii sano ee la soo dhaafay dhinaca software-ka. Waa farsamo u oggolaanaysa in app-kaaga iyo wax walba oo uu u baahan yahay",
    "thumbnail": "/cdn/uploads/1768502045091-k30IqHFonivjtBw-OboinGggJbfwb7D2.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-pwa-progressive-web-app",
    "title": "Waa Maxay PWA (Progressive Web App)",
    "category": "Mobile Development",
    "date": "2025-12-31T02:37:30.019Z",
    "dateLabel": "Dec 31, 2025",
    "excerpt": "PWA (Progressive Web App) waa isku-dhaf ka kooban website-yada caadiga ah iyo apps-ka mobile-ka. Waa website loo dhisay inuu u dhaqmo sidii inuu yahay app caadi ah oo ku dhex jira taleefankaaga, isagoo ku siinaya hufnaan degdeg ah, la isku halleyn karo, oo soo jiidasho leh.",
    "thumbnail": "/cdn/uploads/1767148631015-Vq5kZhF55hn2TqhU8yTvUSS_NQBuH1j.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-unit-testing",
    "title": "Waa Maxay Unit Testing",
    "category": "Software",
    "date": "2025-12-31T02:36:15.679Z",
    "dateLabel": "Dec 31, 2025",
    "excerpt": "Unit Testing waa habka ugu hooseeya uguna muhiimsan ee loo tijaabiyo software-ka, halkaas oo qayb kasta oo yar oo koodka ka mid ah (sida hal function, method, ama class) gooni loogu tijaabiyo si loo hubiyo inay u shaqaynayso sidii loogu talagalay. Magaca \"Unit\"",
    "thumbnail": "/cdn/uploads/1767148546611-ZsAUJBnpbe-CpQUQ7kPu9c7RoQpqLuuU.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-state-management",
    "title": "Waa Maxay State Management",
    "category": "Web Development",
    "date": "2025-12-31T02:34:04.754Z",
    "dateLabel": "Dec 31, 2025",
    "excerpt": "State Management waa habka loo maareeyo loona qaybiyo xogta isbedbedesha ee uu app-ku isticmaalayo xilli kasta. \"State\" waa sawirka xogta app-ka ee daqiiqad gaar ah—tusaale: ma login buu yahay user-ku? Maxaa ugu jira dambiisha adeegga (cart)? Mise fariin cusub ayaa",
    "thumbnail": "/cdn/uploads/1767148399388-VEGItZkJylx1G4lqcGx_OWKQ6Q85Liv4.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-software-development-life-cycle-sdlc",
    "title": "Waa Maxay Software Development Life Cycle (SDLC)",
    "category": "Software",
    "date": "2025-12-31T02:32:20.868Z",
    "dateLabel": "Dec 31, 2025",
    "excerpt": "Software Development Life Cycle (SDLC) waa hab-raaca rasmiga ah ama \"khariidadda\" loo raaco dhismaha software tayo leh. Ma aha oo kaliya in koodka la qoro, balse waa geedi-socod ka kooban wejiyo is xiga oo hubinaya in barnaamijka la dhisayo",
    "thumbnail": "/cdn/uploads/1767148323245-dRIuaZrwe_fWicJQ03Z2QtWGpD8PUGZY.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-open-source",
    "title": "Waa Maxay Open Source",
    "category": "Open Source",
    "date": "2025-12-31T02:31:00.876Z",
    "dateLabel": "Dec 31, 2025",
    "excerpt": "Open Source waa \"software-ka isha furan,\" taas oo micnaheedu yahay in koodka asalka ah ee lagu dhisay (source code) uu yahay mid qof kasta u furan oo la heli karo. Halkii shirkad gaar ahi ay koodka qarin lahayd",
    "thumbnail": "/cdn/uploads/1767148235845-9lNkqYMElFqomithgeCneafUOzUh7Q8u.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-system-design",
    "title": "Waa Maxay System Design",
    "category": "Software",
    "date": "2025-12-31T02:29:14.185Z",
    "dateLabel": "Dec 31, 2025",
    "excerpt": "System Design waa “qaabka maskaxda” ee lagu dhiso software ballaaran oo shaqeynaya, la isku halleyn karo, isla markaana u adkeysan kara isticmaalayaal badan. Haddii coding-ku yahay inaad qorto koodka",
    "thumbnail": "/cdn/uploads/1767148090477-Jif7wweWsTaUTj-QdkN7Ejuj28xHbo8L.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-oauth",
    "title": "Waa Maxay OAuth",
    "category": "Cybersecurity",
    "date": "2025-12-31T02:26:55.872Z",
    "dateLabel": "Dec 31, 2025",
    "excerpt": "OAuth waa nidaam oggolaansho (authorization) oo u oggolaanaya app ama adeeg inuu helo xogtaada adigoon siin password-kaaga. Waa sababta aad marar badan u aragto batoonka leh: “Continue with Google” ama “Login with Facebook.”",
    "thumbnail": "/cdn/uploads/1767147969644-sY2rB5ffWJDhhVl-lWDmXolvxa2crzeC.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-jwt-json-web-token",
    "title": "Waa Maxay JWT (JSON Web Token)",
    "category": "Cybersecurity",
    "date": "2025-12-31T02:25:12.540Z",
    "dateLabel": "Dec 31, 2025",
    "excerpt": "JWT (JSON Web Token) waa tiknooloojiyad (farsamo) casri ah oo loo adeegsado Aqoonsiga Isticmaalaha (Authentication) iyo Ogolaanshaha Galitaanka (Authorization), gaar ahaan web apps, mobile apps, iyo APIs.",
    "thumbnail": "/cdn/uploads/1767147872212-CXaXAW__cRru06laVC2oOQMdKqtGnieo.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "10-ka-programming-languages-ugu-fiican-2026",
    "title": "10-ka Programming Languages Ugu Fiican 2026",
    "category": "Programming Languages",
    "date": "2025-12-04T17:08:32.420Z",
    "dateLabel": "Dec 4, 2025",
    "excerpt": "Dib u eegista 10-ka luqadood ee ugu fiican 2026—Python, TypeScript, Go, Rust iyo kuwo kale. Ogow sababta ay muhiim u yihiin iyo halka ay ka shaqeeyaan.",
    "thumbnail": "/cdn/uploads/1764867505961-10-programn-83.jpg",
    "author": "Sharafdin Yusuf",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "deep-learning-maskaxda-qoto-dheer-ee-garaadka-macmalka",
    "title": "🧠 Deep Learning: Maskaxda Qoto Dheer ee Garaadka Macmalka",
    "category": "Artificial Intelligence",
    "date": "2025-11-17T07:03:56.913Z",
    "dateLabel": "Nov 17, 2025",
    "excerpt": "Deep Learning waa farsamo Garaadka Macmalka oo isticmaasha neural networks badan si ay u barato xog qoto dheer. Waxay fahmaysaa sawir, cod, iyo qoraal iyadoo baranaysa qaabab xogeed. Waa sax ah, awood badan, balse u baahan xog iyo GPU xoog leh. Waqtiga soo socda way sii caqli badnaan doontaa.",
    "thumbnail": "/cdn/uploads/1763359633239-WhatsApp-Image-2025-11-09-at-20.31.25.jpeg",
    "author": "Omar Tood",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/642079d3c7a3cbe9a0d4ae4e-1760183113097.webp"
  },
  {
    "slug": "waa-maxay-cloud-computing",
    "title": "Waa Maxay Cloud Computing",
    "category": "DevOps & Cloud",
    "date": "2025-11-11T14:33:42.935Z",
    "dateLabel": "Nov 11, 2025",
    "excerpt": "Haddii aan dib ugu noqono waayihii hore, software kasta iyo xog kasta waxaa lagu kaydin jiray kombiyuutar qof leeyahay — server yar ama mid weyn oo xafiis yaal.",
    "thumbnail": "/cdn/uploads/1762871591971-6PRwDZfsmGoN6qYK4KsT_nU_5OFKDvAH.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-domain-and-hosting",
    "title": "Waa Maxay Domain & Hosting",
    "category": "DevOps & Cloud",
    "date": "2025-11-11T14:30:25.432Z",
    "dateLabel": "Nov 11, 2025",
    "excerpt": "Marka aad dhiseyso website, laba eray oo mar walba aad aragto waa Domain iyo Hosting. Labaduba waa muhiim, balse inta badan waa la isku khaldaa — mid waa cinwaanka webka, midna waa gurigiisa.",
    "thumbnail": "/cdn/uploads/1762871416346-kHewrlw4bjp7sN2QeFOSbaAOwWub0EUa.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "transformers-maskaxda-cusub-ee-barashada-qotada-dheer-deep-learning",
    "title": "🤖 Transformers: Maskaxda Cusub ee Barashada Qotada Dheer (Deep Learning)",
    "category": "Artificial Intelligence",
    "date": "2025-11-07T19:11:10.162Z",
    "dateLabel": "Nov 7, 2025",
    "excerpt": "Transformers waa qaab-dhismeedka ugu awoodda badan ee dhisa AI sida GPT iyo BERT. Waxay adeegsadaan *Attention Mechanism* si ay u fahmaan xiriirka iyo macnaha xogta. Waxay ka kooban yihiin Encoder & Decoder, Self-Attention, iyo Positional Encoding.",
    "thumbnail": "/cdn/uploads/1762542107383-WhatsApp-Image-2025-11-04-at-18.59.49.jpeg",
    "author": "Omar Tood",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/642079d3c7a3cbe9a0d4ae4e-1760183113097.webp"
  },
  {
    "slug": "waa-maxay-ai-agent",
    "title": "Waa Maxay AI Agent? Farqiga u dhexeeya Chatbot iyo Agent",
    "category": "Artificial Intelligence",
    "date": "2025-11-07T18:41:36.679Z",
    "dateLabel": "Nov 7, 2025",
    "excerpt": "AI agent meel walba ayaa looga hadlayaa. Qoraalkan waxaad ku fahmaysaa waxa agent yahay, sida uu shaqada kuugu qabto, iyo goorta aad u baahan tahay agent iyo goorta chatbot kugu filan yahay.",
    "thumbnail": "/cdn/blog-thumbs/waa-maxay-ai-agent-v3.png",
    "author": "Mohamed Ahmed",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/65a8224c3456e49449d19c4a-1755068566892.webp"
  },
  {
    "slug": "internet-ka-ka-yimaada-cirka-satellite-internet",
    "title": "Internet-ka Ka Yimaada Cirka (Satellite Internet)",
    "category": "Network",
    "date": "2025-11-04T17:02:27.817Z",
    "dateLabel": "Nov 4, 2025",
    "excerpt": "Miyaad ogtahay in maanta aad heli karto internet xawaare sare leh xitaa haddii aad joogto meel aan tower iyo fiilo midna lahayn? Waa tan sababta — Satellite Internet!",
    "thumbnail": "/cdn/uploads/1762275302257-settelite.jpg",
    "author": "Abdinasir Mursal",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/639cc2839ab9117c774ac5da-1763620452618.jpg"
  },
  {
    "slug": "waa-maxay-html",
    "title": "Waa Maxay HTML",
    "category": "Web Development",
    "date": "2025-11-01T11:28:05.737Z",
    "dateLabel": "Nov 1, 2025",
    "excerpt": "Haddii web-ka loo eego sida guri, HTML waa tiirarka iyo darbiyada. Waa halka wax walba ka bilaabmaan. Waa luuqadda dhismaha ee web-ka lagu sameeyo — HyperText Markup Language.",
    "thumbnail": "/cdn/uploads/1761996478038-vcrU1jtbxiNzM4w7G5OAFoIvc7irWC0U.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-dugsiiye-ambassador-program",
    "title": "Waa Maxay Dugsiiye Ambassador Program",
    "category": "Marketing",
    "date": "2025-10-25T16:37:41.526Z",
    "dateLabel": "Oct 25, 2025",
    "excerpt": "Waxaa hadda la bilaabay Dugsiiye Ambassador Program — barnaamij loogu talagalay dadka jecel inay waxbarashada iyo hal-abuurka gaarsiiyaan bulshada inteeda kale.",
    "thumbnail": "/cdn/uploads/1761410254704-2cOQpMKSkekK_2QHEX80DHzV1xAdoGRW.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-javascript",
    "title": "Waa Maxay JavaScript",
    "category": "Programming Languages",
    "date": "2025-10-25T16:31:28.744Z",
    "dateLabel": "Oct 25, 2025",
    "excerpt": "JavaScript waa luuqadda nolosha siisay web-ka. Haddii HTML ay tahay laf-dhabarta dhismaha, CSS ay tahay qurxinta, JavaScript waa maskaxda dhaqaajisa — waa halka ficilka, isbeddelka iyo falcelinta dhabta ah ay ka bilaabmaan.",
    "thumbnail": "/cdn/uploads/1761409778569-mbujTyLmoW3I3p-mDmY6-j0rfpWo1HDO.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "sahra-iidle-oo-ku-guuleysatay-full-scholarship",
    "title": "Sahra Iidle Oo Ku Guuleysatay Full Scholarship",
    "category": "Scholarship",
    "date": "2025-10-24T20:00:09.832Z",
    "dateLabel": "Oct 24, 2025",
    "excerpt": "Waxaan hambalyo iyo bogaadin u direynaa Sahra Iidle, oo noqotay ardaydii kaalinta koowaad ka gashay Bootcamp-kii Data Science & Machine Learning ee ay soo qabanqaabisay Dugsiiye.",
    "thumbnail": "/cdn/uploads/1761335876337-_PmdUh8V6r6KFEMHGLiAFz7pPJGCc4Qg.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-typescript",
    "title": "Waa maxay TypeScript",
    "category": "Programming Languages",
    "date": "2025-10-24T19:56:17.165Z",
    "dateLabel": "Oct 24, 2025",
    "excerpt": "TypeScript waa superset ka mid ah JavaScript oo ay sameysay Microsoft si ay u xoojiso amniga iyo nadiifnimada code-ka.",
    "thumbnail": "/cdn/uploads/1761335486120-fnwUKXCnIrz1YzowWP3Zb5SBnm0FHt57.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-tailwind-css",
    "title": "Waa Maxay Tailwind CSS",
    "category": "Web Development",
    "date": "2025-10-15T08:23:38.909Z",
    "dateLabel": "Oct 15, 2025",
    "excerpt": "Tailwind CSS waa CSS framework casri ah oo ku dhisan fikradda utility-first — taasoo micnaheedu tahay in halkii aad CSS file weyn qori lahayd, aad si toos ah ugu qurxin karto qayb kasta oo HTML ah adigoo isticmaalaya class-yo yar-yar oo diyaarsan.",
    "thumbnail": "/cdn/uploads/1760516589633-w3vk4xlXJvyoij4mguGAxc5mKfGA11vq.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-react-native",
    "title": "Waa Maxay React Native",
    "category": "Mobile Development",
    "date": "2025-10-15T08:22:07.040Z",
    "dateLabel": "Oct 15, 2025",
    "excerpt": "React Native waa framework ay dhistay Meta (Facebook) si loogu sameeyo mobile applications iyadoo la adeegsanayo JavaScript iyo React.",
    "thumbnail": "/cdn/uploads/1760516490032-d-29Up_c6_e1hLuDxS8JHTRwHtv0Xf1F.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-expressjs",
    "title": "Waa Maxay ExpressJS",
    "category": "Web Development",
    "date": "2025-10-13T08:49:27.854Z",
    "dateLabel": "Oct 13, 2025",
    "excerpt": "Express.js waa framework fudud oo xoog badan oo loogu talagalay Node.js. Waa qalab ka dhigay dhisida backend iyo APIs mid sahlan, nadiif ah, isla markaana la fahmi karo.",
    "thumbnail": "/cdn/uploads/1760345237112-express-js.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-nodejs",
    "title": "Waa Maxay NodeJS",
    "category": "Programming Languages",
    "date": "2025-10-12T08:05:06.779Z",
    "dateLabel": "Oct 12, 2025",
    "excerpt": "Node.js waa JavaScript runtime environment oo kuu oggolaanaya inaad JavaScript ku run gareyso dhinaca server-ka, halkii ay hore ugu shaqeyn jirtay oo keliya browser-ka.",
    "thumbnail": "/cdn/uploads/1760256239530-SShHZYFXPv-A78ObbiPcV8gPblPna0Mk.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-mongodb",
    "title": "Waa Maxay MongoDB",
    "category": "Web Development",
    "date": "2025-10-08T21:47:33.890Z",
    "dateLabel": "Oct 9, 2025",
    "excerpt": "MongoDB waa NoSQL Database casri ah oo loo dhisay si uu u maareeyo xogta. Haddii database-yadii hore (SQL) ay ku khasbayeen in xog kasta ay yeelato table iyo rows, MongoDB waxay keentay xorriyad buuxda: xog walba waa document JSON ah.",
    "thumbnail": "/cdn/uploads/1759959965842-559141111-1129762332615630-420c5e10.jpg",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-prisma",
    "title": "Waa Maxay Prisma",
    "category": "Web Development",
    "date": "2025-10-08T21:45:40.716Z",
    "dateLabel": "Oct 9, 2025",
    "excerpt": "Prisma waa ORM (Object Relational Mapper) casri ah oo loogu talagalay in uu fududeeyo sida developers-ka ula macaamilaan database-yada. Halkii aad ku qori lahayd SQL queries gacantaada,",
    "thumbnail": "/cdn/uploads/1759959838636-557423380-1128097956115401-dc7039a9.jpg",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-docker",
    "title": "Waa Maxay Docker",
    "category": "DevOps & Cloud",
    "date": "2025-10-08T21:43:01.003Z",
    "dateLabel": "Oct 9, 2025",
    "excerpt": "Docker waa tiknoolajiyo beddeshay sida software-ka loo dhiso, loo tijaabiyo, loona deploy gareeyo. Haddii hore lagu tiirsanaa virtual machines (VMs) oo culus, Docker wuxuu keenay fikradda containers —goob uu barnaamijkaagu",
    "thumbnail": "/cdn/uploads/1759959675299-557052823-1126226396302557-8f6fe473.jpg",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-git-and-github",
    "title": "Waa Maxay Git & GitHub",
    "category": "DevOps & Cloud",
    "date": "2025-10-02T20:06:46.353Z",
    "dateLabel": "Oct 2, 2025",
    "excerpt": "Git waa version control system – waa nidaam lagu maamulo code iyo isbeddelladiisa. Marka developer uu wax ka beddelo code, Git wuxuu xafidaa taariikhda isbeddelkaas (commit), si hadhow loo arko waxa la beddelay,",
    "thumbnail": "/cdn/uploads/1759435577256-tttH6xN8gLqeRUaImrQsvDKl1lDKxiGB.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-devops",
    "title": "Waa Maxay DevOps",
    "category": "DevOps & Cloud",
    "date": "2025-10-02T20:04:55.832Z",
    "dateLabel": "Oct 2, 2025",
    "excerpt": "DevOps waa eray ka kooban laba: Development iyo Operations. Waa falsafad iyo hab shaqo lagu mideeyo kooxda horumarinta software-ka iyo kooxda maamula nidaamyada (operations).",
    "thumbnail": "/cdn/uploads/1759435475078-XAMn9y2Zh6r7jiy4Y3aVFJDM5kyBj4b3.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-full-stack-development",
    "title": "Waa Maxay Full-Stack Development",
    "category": "Web Development",
    "date": "2025-10-02T20:03:29.125Z",
    "dateLabel": "Oct 2, 2025",
    "excerpt": "Full-Stack Development waa marka developer uu isku mar yaqaan dhinaca hore ee software-ka (Frontend) iyo dhinaca gadaal ee qarsoon (Backend). Waa xirfad isku dhafan oo qofka ka dhigta inuu ka shaqeyn karo dhammaan meelaha software-ka, laga bilaabo muuqaalka user-ku arko ilaa server-ka xogta kaydiya.",
    "thumbnail": "/cdn/uploads/1759435383476-sjgJn19QP0-s44RduVXF-NOzKMrxVD7Z.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-frontend-development",
    "title": "Waa Maxay Frontend Development",
    "category": "Web Development",
    "date": "2025-10-02T20:00:39.153Z",
    "dateLabel": "Oct 2, 2025",
    "excerpt": "Frontend Development waa wajiga hore ee software-ka — waa waxa user-ku arko oo gacantiisa ku taabto. Haddii Backend uu yahay mishiinka gadaashiisa ka shaqeeya,",
    "thumbnail": "/cdn/uploads/1759434619837-rAcfrBw0T4XbUx5HlnaMyZhTPmMQNdMV.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-backend-development",
    "title": "Waa Maxay Backend Development",
    "category": "Web Development",
    "date": "2025-10-02T19:48:48.995Z",
    "dateLabel": "Oct 2, 2025",
    "excerpt": "Backend Development waa laf-dhabarta software-ka. Waa halka hawlaha qarsoon oo dhan ka socdaan, inkasta oo user-ka kaliya uu arko interface-ka quruxda badan ee frontend-ka.",
    "thumbnail": "/cdn/uploads/1759434437693-Wr3shE3gL0NwfbmXyOJb4YU3MocbkRQx.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-machine-learning",
    "title": "Waa Maxay Machine Learning",
    "category": "Artificial Intelligence",
    "date": "2025-10-02T19:45:39.702Z",
    "dateLabel": "Oct 2, 2025",
    "excerpt": "Machine Learning waa qayb ka mid ah AI, waana habka mashiin lagu baro xog si uu iskiis u sameeyo go’aan ama saadaal.",
    "thumbnail": "/cdn/uploads/1759434032521-EbZWRP6Zu1lCmibh4Jk3QbdwZ-QQDLD2.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-ai",
    "title": "Waa Maxay Artificial Intelligence (AI)? Baro Af-Soomaali",
    "category": "Artificial Intelligence",
    "date": "2025-10-02T19:39:34.251Z",
    "dateLabel": "Oct 2, 2025",
    "excerpt": "AI meel walba ayaa looga hadlayaa, laakiin waa maxay dhab ahaantii? Qoraalkan waxaad ku fahmaysaa waxa AI iyo machine learning yihiin, sida loo tababaro, iyo xadidnaanta ay leeyihiin, Af-Soomaali oo fudud.",
    "thumbnail": "/cdn/blog-thumbs/waa-maxay-ai-v3.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-web-30",
    "title": "Waa Maxay Web 3.0",
    "category": "Web3 & Blockchain",
    "date": "2025-10-02T09:55:51.899Z",
    "dateLabel": "Oct 2, 2025",
    "excerpt": "Web 3.0 waa marxaladda cusub ee internet-ka. Si loo fahmo, waa inaan dib u eegnaa safarka uu internet-ku soo maray.",
    "thumbnail": "/cdn/uploads/1759398944218-pPT9d61fSul-Nmi_EppCrA4sM1jR0ffJ.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-nft",
    "title": "Waa Maxay NFT",
    "category": "Web3 & Blockchain",
    "date": "2025-10-02T09:53:59.700Z",
    "dateLabel": "Oct 2, 2025",
    "excerpt": "NFT ama Non-Fungible Token waa fikrad ka dhalatay Blockchain. Haddii si fudud loo dhigo, waa token digital ah oo muujinaya lahaansho gaar ah.",
    "thumbnail": "/cdn/uploads/1759398809362-7NbKYz0QaewKg1hUp4Ufrdfxp-M-QZ2g.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-smart-contracts",
    "title": "Waa Maxay Smart Contracts",
    "category": "Web3 & Blockchain",
    "date": "2025-10-02T09:51:43.644Z",
    "dateLabel": "Oct 2, 2025",
    "excerpt": "Smart Contracts waa fikrad ka dhalatay Blockchain, gaar ahaan Ethereum. Haddii si fudud loo dhigo, waa heshiis ku qoran code",
    "thumbnail": "/cdn/uploads/1759398670384-lC7U_YHzU-CPuEUjKTaJ97z4QRHafDYA.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-software-engineering",
    "title": "Waa Maxay Software Engineering",
    "category": "Computer Science",
    "date": "2025-10-02T09:48:43.085Z",
    "dateLabel": "Oct 2, 2025",
    "excerpt": "Software Engineering waa cilmiga iyo farsamada lagu dhiso software adag, lagu hago, laguna ilaaliyo si uu u noqdo mid hufan, ammaan ah",
    "thumbnail": "/cdn/uploads/1759398454384-coFRgZRT5QGU7_rjqz8Cz6f_c2jg5oeQ.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-blockchain",
    "title": "Waa Maxay Blockchain",
    "category": "Web3 & Blockchain",
    "date": "2025-10-02T09:46:06.651Z",
    "dateLabel": "Oct 2, 2025",
    "excerpt": "Blockchain waa tiknoolajiyada ka mid ah kuwa dunida beddelay. Haddii si fudud loo dhigo, waa hab lagu kaydiyo xog si loo wadaago",
    "thumbnail": "/cdn/uploads/1759398340908-pHmYwwKwMLcWdTzEeP9mfcFH0PVKJT-H.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-data-structure",
    "title": "Waa Maxay Data Structure",
    "category": "Programming Languages",
    "date": "2025-10-02T09:43:49.880Z",
    "dateLabel": "Oct 2, 2025",
    "excerpt": "Data Structures waa eray muhiim ah oo developers si joogto ah u adeegsadaan. Haddii si fudud loo dhigo",
    "thumbnail": "/cdn/uploads/1759398142453-7j5m4fG3H-msCio0OiBVYYHlsUHJt8_z.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-algorithm",
    "title": "Waa Maxay Algorithm",
    "category": "Programming Languages",
    "date": "2025-09-29T00:43:03.941Z",
    "dateLabel": "Sep 29, 2025",
    "excerpt": "Algorithm waa eray programmers iyo mathematicians si joogto ah u adeegsadaan, Haddii aan si fudud u dhigno waa “hab-raac” cad oo xal loogu helo dhibaato.",
    "thumbnail": "/cdn/uploads/1759106437421-usQZoRHFSCs2QCxGPVzVse_9pueuvYmO.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-cryptography",
    "title": "Waa Maxay Cryptography",
    "category": "Cybersecurity",
    "date": "2025-09-29T00:39:50.956Z",
    "dateLabel": "Sep 29, 2025",
    "excerpt": "Cryptography waa cilmiga xogta si ammaan ah loogu qariyo . Haddii si fudud loo dhigo, waa farsamo dadka iyo nidaamyada digital-ka u adeegsadaan si xog sir ah u gudbiyaan. Taariikh ahaan, boqorradii iyo jeneraalladii hore waxay farriimo qarsoodi ah ku qori jireen code ama xarfo beddelan",
    "thumbnail": "/cdn/uploads/1759106232325-2XoCWmUDCFyPRddgMIACy0zY_KrJBJQC.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "farqiga-u-dhaxeeya-library-and-framework",
    "title": "Farqiga U Dhaxeeya Library & Framework",
    "category": "Web Development",
    "date": "2025-09-29T00:35:10.539Z",
    "dateLabel": "Sep 29, 2025",
    "excerpt": "Marka laga hadlayo dhisidda software, waxaa jira laba eray oo developers-ka si joogto ah u adeegsadaan: Library iyo Framework. Labaduba waa code hore loo diyaariyay oo loogu talagalay in ay ka caawiyaan dhisida software, balse farqi muhiim ah ayaa u dhexeeya, inkasta oo badanaa lagu wareero.",
    "thumbnail": "/cdn/uploads/1759105947414-VA6n-TFhkjhs_XG4EksOK9N2PDzJV-St.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "xogtu-waa-shidaalka-cusub",
    "title": "Xogtu Waa Shidaalka Cusub",
    "category": "Artificial Intelligence",
    "date": "2025-09-29T00:31:44.537Z",
    "dateLabel": "Sep 29, 2025",
    "excerpt": "Xogaha la abuuro, la kaydiyo, lana isticmaalo waxay gaartay heer aan hore loo arag. Sannadka 2025 waxaa lagu qiyaasaa in xogta caalamka ay gaartay 147 zettabytes.",
    "thumbnail": "/cdn/uploads/1759105739549-OTWL-YiJHzE9Q895fe5fcou0UeaudHp6.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-cicd",
    "title": "Waa Maxay CI/CD",
    "category": "DevOps & Cloud",
    "date": "2025-09-29T00:28:12.075Z",
    "dateLabel": "Sep 29, 2025",
    "excerpt": "CI/CD waa labo erey oo software developers-ka ay maalin kasta ku shaqeeyaan, balse dadka ku cusub mararka qaarkood waxay u muuqdaan wax aan la fahmin.",
    "thumbnail": "/cdn/uploads/1759105498413-QPI9fqWXbcopWxJRQizr7qfKaXTldlHf.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-api",
    "title": "Waa Maxay API",
    "category": "Web Development",
    "date": "2025-09-28T14:11:04.277Z",
    "dateLabel": "Sep 28, 2025",
    "excerpt": "API waa erey in badan la maqlo, balse badanaa si fudud looma fahmo. Erayga oo buuxa waa Application Programming Interface. Haddii si caadi ah loo dhigo, waa albaabka barnaamijyada ay ku wada hadlaan. Ma aha qofka isticmaala software-ka ee waa koodhka iyo barnaamijyada kale oo is dhexgal sameenaya.",
    "thumbnail": "/cdn/uploads/1756492105085-api-34.jpg",
    "author": "Sharafdin Yusuf",
    "readMinutes": 2,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-reverse-engineering-sideese-loo-adeegsadaa",
    "title": "Waa Maxay Reverse Engineering, Sideese Loo Adeegsadaa",
    "category": "Cybersecurity",
    "date": "2025-02-27T13:43:23.756Z",
    "dateLabel": "Feb 27, 2025",
    "excerpt": "Dunida casriga ah, reverse engineering waa farsamo muhiim ah oo lagu falanqeeyo software, hardware, iyo nidaamyo kale si loo fahmo sida ay u shaqeeyaan. Farsamadan waxaa loo adeegsadaa amniga internet-ka, cilmi baarista teknolojiyadda, iyo horumarinta software.",
    "thumbnail": "/cdn/uploads/1740663726343-dalla-e-2025-02-27-16-41-4-97286466.webp",
    "author": "Sharafdin Yusuf",
    "readMinutes": 4,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-mit-license-maxaase-aan-u-doortaa",
    "title": "Waa Maxay MIT License, Maxaase Aan U Doortaa",
    "category": "Open Source",
    "date": "2025-01-14T16:25:04.014Z",
    "dateLabel": "Jan 14, 2025",
    "excerpt": "Mararka qaarkood, marka aan horumariyo barnaamij ama kood, waxaan isweydiiyaa: “Sidee baan dadka ugu fududeyn karaa inay adeegsadaan, wax ka bartaan, ama xataa wax ka beddelaan arrintan aan sameeyay?” Aniga oo aad u jecel xurriyadda iyo il-furnaanta (open-source), waxaan doortay MIT License.",
    "thumbnail": "/cdn/uploads/1736871880629-mit_license_logo_by_excaliburzero-d9ur2lg.png",
    "author": "Sharafdin Yusuf",
    "readMinutes": 3,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "10-ka-programming-languages-ugu-fiican-2025",
    "title": "10-ka Programming Languages Ugu Fiican 2025",
    "category": "Programming Languages",
    "date": "2025-01-14T07:43:06.360Z",
    "dateLabel": "Jan 14, 2025",
    "excerpt": "Beri hore, caalamka barnaamij-samayntu wuxuu ahaa meel si gaar ah loo yaqaan, inta badanna waxaa loo arkayay xirfad adag oo ay helaan dad kooban.",
    "thumbnail": "/cdn/uploads/1736840557116-pexels-luis-gomes-166706-546819.jpg",
    "author": "Sharafdin Yusuf",
    "readMinutes": 9,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "sidee-loo-noqdaa-ethical-hacker",
    "title": "Sidee Loo Noqdaa Ethical Hacker",
    "category": "Cybersecurity",
    "date": "2025-01-14T07:26:47.483Z",
    "dateLabel": "Jan 14, 2025",
    "excerpt": "Erayga ‘hacker’ waxa uu markii hore qeexayay barnaamij-sameeye (programmer) xirfad leh ee aad u yaqaana code-ka mishiinka iyo hababka hawlgalka (operating systems) ee kombuyuutarka.",
    "thumbnail": "/cdn/uploads/1736839987930-pexels-mikhail-nilov-69639-30033d9e.jpg",
    "author": "Sharafdin Yusuf",
    "readMinutes": 14,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-computer-science",
    "title": "Waa Maxay Computer Science",
    "category": "Computer Science",
    "date": "2025-01-14T07:01:53.451Z",
    "dateLabel": "Jan 14, 2025",
    "excerpt": "Computer Science waa barashada kombuyuutarrada, oo ay ku jiraan aragtida xisaabinta ( computational theory ), naqshadaynta hardware iyo software, algorithmyada iyo habka dadku ula falgalaan tignolojiyada ( technology ).",
    "thumbnail": "/cdn/uploads/1736838097003-pexels-danny-meneses-340146-943096.jpg",
    "author": "Sharafdin Yusuf",
    "readMinutes": 6,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-programming-language",
    "title": "Waa Maxay Programming Language",
    "category": "Programming Languages",
    "date": "2025-01-14T06:53:21.871Z",
    "dateLabel": "Jan 14, 2025",
    "excerpt": "Sida aan ognahay, si aan ula xiriirno qof, waxaan u baahanahay luqad gaar ah, si la mid ah si aan ula xiriirno kombuyuutarrada, programmers ka sidoo kale waxay u baahan yihiin luqad, taas ayaa waxaa loo yaqaan ‘Programming Language’.",
    "thumbnail": "/cdn/uploads/1736837542542-waa-maxay-programming-language.webp",
    "author": "Sharafdin Yusuf",
    "readMinutes": 7,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  },
  {
    "slug": "waa-maxay-hacking",
    "title": "Waa Maxay Hacking",
    "category": "Cybersecurity",
    "date": "2025-01-14T06:39:32.809Z",
    "dateLabel": "Jan 14, 2025",
    "excerpt": "Erayga ‘Hacker’ waxa loo alifay in lagu qeexo khubarada u isticmaalay xirfadahooda si ay dib ugu horumariyaan nidaamyada guud, iyaga oo nidaamyadaas u kordhinaya waxtarkooda una oggolaanaya in ay qabtaan hawlo badan.",
    "thumbnail": "/cdn/uploads/1736836437896-waa-maxay-hacking.webp",
    "author": "Sharafdin Yusuf",
    "readMinutes": 15,
    "authorAvatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp"
  }
];
