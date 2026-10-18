export type GlossaryTerm = { slug: string; term: string; definition: string; category: string };

export const glossaryCategories: { slug: string; count: number }[] = [
  {
    "slug": "artificial-intelligence",
    "count": 30
  },
  {
    "slug": "programming-languages",
    "count": 14
  },
  {
    "slug": "software-engineering",
    "count": 22
  },
  {
    "slug": "web-development",
    "count": 34
  }
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    "slug": "agent",
    "term": "agent",
    "definition": "Agent waa software AI ah oo hadaf la siiyo, kadibna keligiis tallaabooyinka qaada ilaa shaqadu ka dhammaato. Model-ku waa maskaxda, tools-kuna waa gacmaha uu wax ku qabto.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "agentic",
    "term": "agentic",
    "definition": "Agentic waa sifo, ma aha tool gaar ah. Waxaa lagu tilmaamaa system AI ah oo hadaf la siiyo, kadibna isagu qorshe sameeya, tallaabooyin isku xigxiga qaada, tools isticmaala, natiijadana dib u hubiya, adigoo aan tallaabo kasta u sheegin.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "agentic-coding",
    "term": "agentic coding",
    "definition": "Agentic coding waa hab software lagu dhiso iyadoo AI agent shaqo dhammaystiran loo dhiibo: files-ka wuu akhriyaa, code wuu qoraa, commands wuu fuliyaa, wuu tijaabiyaa, oo ilaa shaqada dhammaato wuu shaqeeyaa. Adigu waxaad tahay engineer-ka qorsheeya oo hubiya.",
    "category": "software-engineering"
  },
  {
    "slug": "ai",
    "term": "AI",
    "definition": "AI (artificial intelligence) waa systems computer ah oo qabta shaqooyin caqli bini'aadam u baahan: luqad fahmid, sawir aqoonsi, saadaalin iyo go'aan gaarid. Maanta inta badan waxaa lagu gaadhaa models xog aad u badan lagu tababaray.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "ai-agent",
    "term": "AI agent",
    "definition": "AI agent waa software shakhsi ahaan shaqo qabsanaya ilaa uu shaqadii aad u dirtay kaaga dhammaynayo. Hadaf ayaad siisaa, isagana wuxuu qaataa tallaabooyinka u baahan si uu natiijada u soo gaadho.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "ai-engineer",
    "term": "AI engineer",
    "definition": "AI engineer waa qofka dhisa application-no AI la falgala oo dhibaatooyin real ah xalliya. Wuxuu ku shaqeeyaa models jira, kuwaas oo uu app-yo iyo systems production ku shaqeeya ku dhex geliyaa.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "anthropic",
    "term": "Anthropic",
    "definition": "Anthropic waa shirkadda AI-ga ee samaysa Claude, Claude Code iyo API-ga models-kooda. Waxay xoogga saartaa amniga AI-ga iyo models-ka coding-ka ku fiican.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "api",
    "term": "API",
    "definition": "API (Application Programming Interface) waa qaabka ay laba barnaamij isku xiraan: mid ayaa codsi diraya, midna wuxuu soo celiyaa jawaab. Shaqooyinka server-ka ku jira ayuu banaanka u soo saaraa si app kastaa uu u isticmaalo.",
    "category": "web-development"
  },
  {
    "slug": "api-key",
    "term": "API key",
    "definition": "API key waa xarfo iyo lambarro adeeg API ah kuu siiyo si markaad wacdo uu kuu aqoonsado. Waa furaha albaabka: qofkii haysta ayaa magacaaga ku isticmaali kara adeegga.",
    "category": "web-development"
  },
  {
    "slug": "array",
    "term": "array",
    "definition": "Array waa hal variable oo qiimayaal badan isku kaydiya. Qiime walba wuxuu leeyahay boos loo yaqaan index, boosuna wuxuu ka bilaabmaa eber, ma aha kow.",
    "category": "programming-languages"
  },
  {
    "slug": "async",
    "term": "async",
    "definition": "Async waa qaab shaqo oo waqti qaadanaysa lagu sugo, barnaamijkuna uusan istaagin. Function markaad async ka dhigto, await ayaad ku sugi kartaa jawaabta intaan la sii gudbin.",
    "category": "programming-languages"
  },
  {
    "slug": "authentication",
    "term": "authentication",
    "definition": "Authentication waa habka lagu hubiyo cidda isticmaaluhu yahay ka hor inta aan la gelin app-ka. Waa jawaabta su'aasha \"yaad tahay?\", oo ka duwan authorization oo ah \"maxaad samayn kartaa?\".",
    "category": "web-development"
  },
  {
    "slug": "automation",
    "term": "automation",
    "definition": "Automation waa in shaqo soo laalaabata si automatic ah loo qabto, adigoo aan mar walba gacanta ku hayn. Script, workflow ama agent AI ah ayaa shaqada qabanaya.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "aws",
    "term": "AWS",
    "definition": "AWS (Amazon Web Services) waa cloud-ka Amazon: server-yo, kayd file-ash iyo boqolaal adeeg oo internet-ka laga kiraysto. S3 waa kaydka file-asha, EC2-na waa server-yada.",
    "category": "software-engineering"
  },
  {
    "slug": "backend",
    "term": "backend",
    "definition": "Backend waa dhinaca app-ka ee user-ku aanu arkin: server-ka, database-ka, logic-ga iyo amniga. Halkaas ayaa xogta lagu kaydiyaa, laguna hubiyaa, kadibna frontend-ka loogu soo diraa API.",
    "category": "web-development"
  },
  {
    "slug": "chatbot",
    "term": "chatbot",
    "definition": "Chatbot waa barnaamij sheeko ahaan kula hadla: su'aal ayaad weydiisaa, jawaab ayuu kuu soo celiyaa. ChatGPT waa chatbot; support-ka website-ka oo su'aalaha ka jawaaba waa chatbot.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "chatgpt",
    "term": "ChatGPT",
    "definition": "ChatGPT waa chatbot AI ah oo shirkadda OpenAI samaysay, kuna dhisan models-ka GPT. Waa AI-ga ugu caansan adduunka, wuxuuna 2022 dadka caadiga ah u furay AI-ga.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "claude",
    "term": "Claude",
    "definition": "Claude waa AI assistant iyo model ay samayso shirkadda Anthropic. Waxaa loo isticmaalaa sheeko, qoraal, falanqayn iyo gaar ahaan coding, waana model-ka ka dambeeya Claude Code.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "claude-code",
    "term": "Claude Code",
    "definition": "Claude Code waa coding agent Anthropic sameysay oo terminal-kaaga ka shaqeeya. Project-ka wuu akhriyaa, files wuu beddelaa, commands wuu fuliyaa, waana ku sii socdaa ilaa shaqada aad u dirtay ay dhammaato.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "cli",
    "term": "CLI",
    "definition": "CLI (Command Line Interface) waa habka barnaamij loola shaqeeyo adigoo amar qoraya, halkii badhan la riixi lahaa. Terminal-ka ayaad amarrada ku qortaa.",
    "category": "software-engineering"
  },
  {
    "slug": "client",
    "term": "client",
    "definition": "Client waa dhinaca app-ka ee isticmaaluhu arko oo taabto: browser-ka, app-ka telefoonka ama barnaamijka desktop-ka. Codsi ayuu u diraa server-ka, jawaabtana wuu soo bandhigaa.",
    "category": "web-development"
  },
  {
    "slug": "cloud",
    "term": "cloud",
    "definition": "Cloud computing waa in servers, kaydin iyo awood xisaabeed lagu kiraysto internet-ka, halkii mashiinno la iibsan lahaa. App-kaagu wuxuu ka shaqeeyaa mashiinno shirkad kale maamusho, adiguna waxaad bixisaa inta aad isticmaasho.",
    "category": "software-engineering"
  },
  {
    "slug": "codex",
    "term": "Codex",
    "definition": "Codex waa agent coding ah oo OpenAI leedahay, kaas oo terminal-kaaga ka shaqeeya. Shaqo ayaad u sheegtaa, isaguna file-asha ayuu akhriyaa, code ayuu qoraa, kadibna wuu tijaabiyaa.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "component",
    "term": "component",
    "definition": "Component waa qayb UI ah oo madaxbannaan oo dib loo isticmaali karo: header, button, card, form. React-ka page kasta components ayaa laga dhisaa, sida dhismo bulukeeti laga dhiso.",
    "category": "web-development"
  },
  {
    "slug": "condition",
    "term": "condition",
    "definition": "Condition waa su'aal run ama been ah oo barnaamijku isweydiiyo si uu u go'aamiyo waxa xiga: \"haddii tanu run tahay, tan samee; haddii kale, taas samee.\"",
    "category": "programming-languages"
  },
  {
    "slug": "container",
    "term": "container",
    "definition": "Container waa xirmo lagu wada galiyo barnaamijkaaga iyo wax walba oo uu u baahan yahay, si uu meel kasta isku si ugu shaqeeyo. Docker ayaa tool-ka ugu caansan ee containers-ka lagu sameeyo.",
    "category": "software-engineering"
  },
  {
    "slug": "context",
    "term": "context",
    "definition": "Context waa wax walba oo model-ku \"arkayo\" markuu jawaab soo saarayo: prompt-kaaga, sheekadii hore, files-ka aad siisay iyo tilmaamaha system-ka. Xadka uu qaadi karo waxaa la yiraahdaa context window.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "css",
    "term": "CSS",
    "definition": "CSS (Cascading Style Sheets) waa luqadda muuqaalka website-ka lagu sameeyo: midabada, fonts-ka, kala dhexaadka, layout-ka iyo responsive-ka. HTML waa qaab-dhismeedka, CSS waa qurxinta.",
    "category": "web-development"
  },
  {
    "slug": "cursor",
    "term": "Cursor",
    "definition": "Cursor waa code editor AI ah oo VS Code ku dhisan. Wuxuu code-kaaga sii saadaaliyaa, wuu beddelaa, agent ahaanna project-ka oo dhan wuu ka shaqayn karaa.",
    "category": "software-engineering"
  },
  {
    "slug": "data-structure",
    "term": "data structure",
    "definition": "Data structure waa qaabka xogta loo habeeyo, loo kaydiyo oo dib loogu heli karo barnaamijka dhexdiisa. Nooc kastaa wuxuu leeyahay meel uu ku fiican yahay iyo qiimo uu ku kaco marka la raadinayo ama la beddelayo.",
    "category": "programming-languages"
  },
  {
    "slug": "database",
    "term": "database",
    "definition": "Database waa nidaam xog lagu kaydiyo, laga soo raadiyo, laguna cusboonaysiiyo si habaysan. Application kasta oo xogtiisu ay ahaato mid joogto ah, sida users, orders iyo posts, database ayuu isticmaalaa.",
    "category": "web-development"
  },
  {
    "slug": "debugging",
    "term": "debugging",
    "definition": "Debugging waa raadinta iyo hagaajinta ciladaha code-ka: meesha ciladdu ka jirto ayaad ogaanaysaa, sababta ayaad fahmaysaa, kadibna waad saxaysaa.",
    "category": "software-engineering"
  },
  {
    "slug": "deepseek",
    "term": "DeepSeek",
    "definition": "DeepSeek waa shirkad Shiineys ah oo soo saartay models AI ah oo open source ah, kuwaas oo computer-kaaga lagu run-gareyn karo. Model-kooda ugu caansan waa R1, kaas oo reasoning sameeya.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "deployment",
    "term": "deployment",
    "definition": "Deployment waa marka barnaamijkaaga aad ka saarto computer-kaaga oo aad internet-ka saarto, si qof kastaa u isticmaali karo. Waa talaabada u dambaysa ee project-ka ka dhigaysa mid nool.",
    "category": "software-engineering"
  },
  {
    "slug": "domain",
    "term": "domain",
    "definition": "Domain waa magaca website-kaaga ee dadku browser-ka ku qoraan, sida dugsiiye.com. Waa magac la xasuusan karo oo lagu beddelay cinwaanka lambarrada ah ee server-ka.",
    "category": "web-development"
  },
  {
    "slug": "fine-tuning",
    "term": "fine-tuning",
    "definition": "Fine-tuning waa in model horay loo tababaray (pre-trained) xog yar oo gaar ah lagu sii tababaro, si uu shaqo gaar ah ugu fiicnaado: qaab hadal, af, ama field sida caafimaadka ama coding-ka.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "framework",
    "term": "framework",
    "definition": "Framework waa code hore loo qoray oo shaqooyinka soo laalaabta kuu diyaariya, qaab-dhismeedna u dhiga project-kaaga. Adiga waxaad ku dhex qortaa qaybta shaqadaada gaarka ah.",
    "category": "web-development"
  },
  {
    "slug": "frontend",
    "term": "frontend",
    "definition": "Frontend waa dhinaca application-ka ee user-ku arko oo taabto: bogagga, badhannada, foomamka iyo dhaqdhaqaaqa shaashadda. Browser-ka ama telefoonka ayuu ku shaqeeyaa.",
    "category": "web-development"
  },
  {
    "slug": "full-stack",
    "term": "full stack",
    "definition": "Full stack waa qofka ka shaqeeya labada dhinac ee app-ka: frontend-ka user-ku arko iyo backend-ka xogta iyo logic-gu ku jiraan. Waxaa lagu daraa database-ka iyo shubidda internet-ka.",
    "category": "software-engineering"
  },
  {
    "slug": "function",
    "term": "function",
    "definition": "Function waa qayb code ah oo shaqo gaar ah qabata, magac leh, oo mar kasta oo aad rabto la wici karo. Xog ayaad siin kartaa (parameters), natiijo ayuuna kuu soo celin karaa (return).",
    "category": "programming-languages"
  },
  {
    "slug": "gemini",
    "term": "Gemini",
    "definition": "Gemini waa taxanaha models-ka AI ee Google, waana magaca app-ka iyo API-ga lagu isticmaalo. Laba nooc oo waaweyn ayuu leeyahay: Pro oo shaqooyinka culus qaada, iyo Flash oo degdeg ah oo jaban.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "git",
    "term": "Git",
    "definition": "Git waa nidaam version control ah oo taariikhda code-kaaga xafida: isbeddel walba, cidda samaysay, waqtiga la sameeyay, iyo sida dib loogu noqon karo.",
    "category": "software-engineering"
  },
  {
    "slug": "github",
    "term": "GitHub",
    "definition": "GitHub waa adeeg internet ah oo code-ka lagu kaydiyo, taariikhdiisana lagu ilaaliyo. Wuxuu ku dhisan yahay Git, oo ah version control: qoraal kasta oo aad beddesho waa la duubaa, dibna waad ugu laaban kartaa.",
    "category": "software-engineering"
  },
  {
    "slug": "hook",
    "term": "hook",
    "definition": "Hook waa function gaar ah oo React ah, magaciisu use ku bilaabmo, oo component-ka siiya awoodo sida state (xog isbeddesha), effects (shaqo la fuliyo markuu component-ku soo baxo), iyo context. useState iyo useEffect waa kuwa ugu caansan.",
    "category": "web-development"
  },
  {
    "slug": "html",
    "term": "HTML",
    "definition": "HTML (HyperText Markup Language) waa luqadda qaab-dhismeedka bogga internet-ka lagu qoro. Tags ayay ka kooban tahay, mid walbana wuxuu sheegaa waxa qaybtaasi tahay: cinwaan, qoraal, sawir, liis ama link.",
    "category": "web-development"
  },
  {
    "slug": "javascript",
    "term": "JavaScript",
    "definition": "JavaScript waa luqadda programming-ka ee websaydka nolol siisa. HTML-ku qaab-dhismeedka ayuu keenaa, CSS-ku quruxda, JavaScript-kuna wuxuu keenaa dhaqdhaqaaqa: button la riixo, xog la soo qaado, bog isbeddela.",
    "category": "programming-languages"
  },
  {
    "slug": "json",
    "term": "JSON",
    "definition": "JSON (JavaScript Object Notation) waa qaab qoraal ah oo xogta lagu kala qaado barnaamijyada. Waa luqadda dhexe ee server-ka iyo frontend-ku isku fahmaan, dadkuna akhriyi karaan.",
    "category": "web-development"
  },
  {
    "slug": "jsx",
    "term": "JSX",
    "definition": "JSX (JavaScript XML) waa qaab qoraal oo HTML u eg oo JavaScript gudaheeda lagu qoro. React components-ku JSX ayay soo celiyaan, kadibna waxaa loo beddelaa JavaScript caadi ah oo browser-ku fahmo.",
    "category": "web-development"
  },
  {
    "slug": "library",
    "term": "library",
    "definition": "Library waa urur code ah oo ku siiya functions iyo components diyaar ah, si aad shaqo gaar ah ugu qabsato adigoon dib u qorin. Adigaa go'aansanaya goorta aad wacayso: library-ga adigaa maamula.",
    "category": "software-engineering"
  },
  {
    "slug": "llm",
    "term": "LLM",
    "definition": "LLM (Large Language Model) waa system AI ah oo lagu tababaray qoraal aad u badan, kaas oo fahma luqadda oo soo saara qoraal bini'aadam u eg. ChatGPT, Claude, Gemini iyo LLaMA dhammaantood LLM ayay ku shaqeeyaan.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "localhost",
    "term": "localhost",
    "definition": "Localhost waa magaca computer-kaaga naftiisa marka network-ka la eegayo. Markaad browser-ka ku qorto localhost, internet-ka ma aadayso: computer-kaaga ayaad wax weydiinaysaa.",
    "category": "web-development"
  },
  {
    "slug": "loop",
    "term": "loop",
    "definition": "Loop waa hab shaqo soo laalaabanaysa hal mar loo qoro, barnaamijkuna ku celceliyo inta aad sheegto. Halkii aad isla sadarka boqol jeer ka qori lahayd, hal mar ayaad qoraysaa.",
    "category": "programming-languages"
  },
  {
    "slug": "machine-learning",
    "term": "machine learning",
    "definition": "Machine learning waa qaybta AI-ga ee mashiinku xogta pattern kaga barto, halkii qofku xeer kasta gacanta ugu qori lahaa. Intii xogtu badnaato ayuu sii fiicnaadaa.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "mcp",
    "term": "MCP",
    "definition": "MCP (Model Context Protocol) waa heshiis caalami ah (protocol) oo agent-ka AI-ga ku xira tools iyo xog dibadda ah: database, GitHub, browser, Notion, Stripe. Waa sida USB-ga AI-ga: hal qaab, tools badan.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "memory",
    "term": "memory",
    "definition": "Memory waa xog la kaydiyo oo agent-ka AI-ga uu mar kasta oo uu shaqo bilaabo dib u akhriyo: xeerarka project-ka, qaabka aad u shaqayso, iyo waxa aad horay u go'aamisay. Claude Code memory-ga waxaa lagu qoraa file-ka CLAUDE.md.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "model",
    "term": "model",
    "definition": "Model waa barnaamij AI ah oo xog aad u badan lagu tababaray (training), si uu su'aal markaad weydiiso jawaab u soo saaro. ChatGPT, Claude, Gemini iyo LLaMA mid walba waa model.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "mongodb",
    "term": "MongoDB",
    "definition": "MongoDB waa database NoSQL ah oo xogta ku kaydiya documents JSON u eg, halkii tables iyo safaf laga isticmaali lahaa. Document walba wuxuu u ekaanayaa object JavaScript ah, waana sababta developers-ka web-ku ay ugu dhaqsi badan qabtaan.",
    "category": "web-development"
  },
  {
    "slug": "mysql",
    "term": "MySQL",
    "definition": "MySQL waa database relational ah oo bilaash ah, kaas oo xogta ku haya tables. SQL ayaa lagula hadlaa, waana database-ka web-ka ugu badan ee la barto.",
    "category": "web-development"
  },
  {
    "slug": "nextjs",
    "term": "Next.js",
    "definition": "Next.js waa framework React ku dhisan oo ay samaysay shirkadda Vercel. Wuxuu React ku daraa routing, server rendering, API routes iyo optimization, si aad application dhammaystiran hal project ku dhisto.",
    "category": "web-development"
  },
  {
    "slug": "nodejs",
    "term": "Node.js",
    "definition": "Node.js waa runtime u ogolaanaya JavaScript inuu ka baxo browser-ka oo uu computer-ka iyo server-ka ka shaqeeyo. Sidaas ayaad hal luqad ugu qori kartaa frontend-ka iyo backend-ka labadaba.",
    "category": "web-development"
  },
  {
    "slug": "npm",
    "term": "npm",
    "definition": "npm (Node Package Manager) waa tool terminal-ka lagu isticmaalo oo packages-ka JavaScript lagu soo shubo, lagu maamulo, scripts-ka project-kana lagu fuliyo. Node.js markaad computer-kaaga ku shubto, npm wuu la socdaa.",
    "category": "web-development"
  },
  {
    "slug": "object",
    "term": "object",
    "definition": "Object waa qaab xog oo xog badan hal meel isugu keena. Qayb kastaa waxay leedahay magac (key) iyo qiime (value), sida magac: \"Xamuud\" iyo age: 22.",
    "category": "programming-languages"
  },
  {
    "slug": "ollama",
    "term": "Ollama",
    "definition": "Ollama waa tool bilaash ah oo models-ka AI ee open source, sida DeepSeek, LLaMA iyo Qwen, computer-kaaga ku run-gareeya. Internet, API key iyo lacag toona uma baahna.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "open-source",
    "term": "open source",
    "definition": "Open source waa software-ka code-kiisa dadweynaha loo furay, si qof kastaa u akhriyo, u isticmaalo, uuna wax uga beddelo shuruudo la caddeeyay. Lidkiisa waa closed source, oo code-ka gudaha shirkadda ku hadho.",
    "category": "software-engineering"
  },
  {
    "slug": "openai",
    "term": "OpenAI",
    "definition": "OpenAI waa shirkadda AI-ga ee samaysay ChatGPT iyo models-ka GPT. Waxay sidoo kale bixisaa API, oo developers-ku awoodda AI-ga kaga dhex dhisaan applications-kooda.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "package",
    "term": "package",
    "definition": "Package waa xirmo code ah oo qof kale diyaariyay, oo aad project-kaaga ku soo dejisato oo isticmaasho, si aadan shaqada mar kale u qorin. Python-ka math iyo Node-ka express labaduba waa packages.",
    "category": "software-engineering"
  },
  {
    "slug": "payment",
    "term": "payment",
    "definition": "Payment app-ka dhexdiisa waa habka lacagta lagu qaado: user-ku plan ayuu doortaa, adeeg lacag bixin ayaa xaqiijiya, kadibna app-kaagu wuxuu furaa waxa uu iibsaday.",
    "category": "web-development"
  },
  {
    "slug": "port",
    "term": "port",
    "definition": "Port waa lambar albaab u ah barnaamij ku shaqeeya computer ama server. Hal computer barnaamijyo badan ayaa ku shaqayn kara, port-kuna wuxuu kala saaraa mid walba halka laga helayo.",
    "category": "web-development"
  },
  {
    "slug": "programming",
    "term": "programming",
    "definition": "Programming waa in computer-ka la siiyo tallaabooyin cad oo uu raaco si dhibaato loo xalliyo. Waxaad ku qortaa luqad sida JavaScript ama Python, computer-kuna wuxuu fuliyaa sidaad u qortay.",
    "category": "programming-languages"
  },
  {
    "slug": "prompt",
    "term": "prompt",
    "definition": "Prompt waa qoraalka aad AI-ga u dirto: su'aasha, amarka ama sharaxaadda shaqada aad rabto inuu qabto. Prompt-ka aad siiso ayaa go'aaminaya jawaabta aad helayso.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "props",
    "term": "props",
    "definition": "Props (properties) waa xogta component waalid ah u dhiibo component ilmo ah, sida attributes HTML oo kale. Component-ku props ayuu qaataa, wuxuuna soo bandhigaa xogtaas.",
    "category": "web-development"
  },
  {
    "slug": "python",
    "term": "Python",
    "definition": "Python waa luqad programming oo syntax-keedu fudud yahay oo English u dhow, loona isticmaalo AI, data analysis, automation iyo backend. Waa luqadda dadka cusub lagu soo dhoweeyo, iyo luqadda adduunka AI-ga ku dhisan yahay.",
    "category": "programming-languages"
  },
  {
    "slug": "query",
    "term": "query",
    "definition": "Query waa weydiin aad database-ka u dirto: xog soo qaad, xog ku dar, xog beddel ama xog tirtir. SQL-ka afarta amar ee aasaasiga ah waa SELECT, INSERT, UPDATE iyo DELETE.",
    "category": "web-development"
  },
  {
    "slug": "rag",
    "term": "RAG",
    "definition": "RAG (Retrieval-Augmented Generation) waa hab model-ka AI-ga xog dibadda ah loogu siiyo intaanu jawaabin: su'aasha markaad weydiiso, qaybaha xogtaada ee la xiriira ayaa marka hore la soo raadiyaa (retrieval), kadibna model-ku jawaabta ayuu ka soo saaraa (generation).",
    "category": "artificial-intelligence"
  },
  {
    "slug": "react",
    "term": "React",
    "definition": "React waa library JavaScript ah oo Meta (Facebook) samaysay, loona isticmaalo dhisidda user interface-ka websites-ka iyo apps-ka. Waa tool-ka frontend-ka ugu caansan adduunka.",
    "category": "web-development"
  },
  {
    "slug": "react-native",
    "term": "React Native",
    "definition": "React Native waa framework ay Meta samaysay oo kuu ogolaanaya inaad mobile applications ku dhisto JavaScript iyo React. Hal mar ayaad code-ka qortaa, iOS iyo Android labadaba ayaad ku fulisaa.",
    "category": "web-development"
  },
  {
    "slug": "reasoning",
    "term": "reasoning",
    "definition": "Reasoning waa marka model-ku intuusan jawaabta ku siin uu marka hore ka fikiro: talaabooyinka wuu kala saaraa, kadibna jawaabta ayuu soo saaraa.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "repository",
    "term": "repository",
    "definition": "Repository, oo la soo gaabiyo repo, waa folder-ka project-kaaga oo Git taariikhdiisa u hayo: file-asha, commits-ka iyo branches-ka oo dhan.",
    "category": "software-engineering"
  },
  {
    "slug": "responsive",
    "term": "responsive",
    "definition": "Responsive waa in boggaagu si fiican ugu shaqeeyo shaashad kasta: telefoon, tablet iyo computer. Isla code-ka ayaa isbeddelaya sida uu isu habeeyo cabbir walba.",
    "category": "web-development"
  },
  {
    "slug": "saas",
    "term": "SaaS",
    "definition": "SaaS (Software as a Service) waa barnaamij internet-ka laga isticmaalo oo si joogto ah ama credits ahaan lagu bixiyo, halkii nuqul la iibsan lahaa oo computer-ka la shubi lahaa.",
    "category": "software-engineering"
  },
  {
    "slug": "security",
    "term": "security",
    "definition": "Security waa ilaalinta app-ka iyo xogta isticmaalayaasha: cidda gali karta, waxa ay arki karto, iyo sida xogtu u kaydsan tahay. Waa qayb ka mid ah dhismaha app-ka, ma aha wax dabadeed lagu daro.",
    "category": "software-engineering"
  },
  {
    "slug": "server",
    "term": "server",
    "definition": "Server waa computer had iyo jeer shaqaynaya oo aqbala requests-ka ka yimaada isticmaalayaasha, database-ka xogta ka soo qaada, jawaabtana soo celiya. Waa dhinaca aan user-ku arkin ee app-ka.",
    "category": "web-development"
  },
  {
    "slug": "skill",
    "term": "skill",
    "definition": "Skill waa xirmo tilmaamo ah (iyo mararka qaar files iyo scripts) oo agent-ka AI-ga baraya sida shaqo gaar ah loo qabto, oo marka loo baahdo si automatic ah loo isticmaalo. Claude Code skills-ka waa qaabka ugu fudud ee agent-ka aqoon cusub loo siiyo.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "software-engineer",
    "term": "software engineer",
    "definition": "Software engineer waa qofka barnaamijyada dhisa: fikrad wuxuu u beddelaa system shaqeeya. Code qorista waa qayb keliya; inta kale waa qorshaynta, tijaabinta, ship-gareynta iyo dayactirka.",
    "category": "software-engineering"
  },
  {
    "slug": "sql",
    "term": "SQL",
    "definition": "SQL (Structured Query Language) waa luqadda xogta database-yada relational, sida MySQL iyo PostgreSQL, lagu soo raadiyo, lagu qoro, laguna beddelo. Afar amar ayaa aasaas ah: SELECT, INSERT, UPDATE, DELETE.",
    "category": "web-development"
  },
  {
    "slug": "state",
    "term": "state",
    "definition": "State waa xogta isbeddesha ee component-ku hayo: tirada, qoraalka form-ka, ama in liiska weli soo dejinayo. Marka state-ku isbeddelo, React-ku wuxuu dib u soo saaraa qaybta bogga ee taas ku xidhan.",
    "category": "web-development"
  },
  {
    "slug": "state-management",
    "term": "state management",
    "definition": "State management waa habka xogta isbeddelaysa ee app-ka loo maamulo: halka la kaydiyo, cidda beddeli karta, iyo sida components-ka kale u ogaadaan isbeddelka.",
    "category": "web-development"
  },
  {
    "slug": "string",
    "term": "string",
    "definition": "String waa qoraal: ereyo, xarfo ama tirooyin qoraal ahaan loo hayo. Quotes ayaa lagu garanayaa, sida \"Salaan\" ama 'Xamuud'.",
    "category": "programming-languages"
  },
  {
    "slug": "sub-agent",
    "term": "sub-agent",
    "definition": "Sub-agent waa agent AI ah oo agent kale (orchestrator-ka) shaqo gooni ah u diro, kaas oo context gaar ah leh, natiijadana soo celiya. Sidaas ayaa shaqo weyn loogu kala jebiyaa qaybo, oo si parallel ah loo qabtaa.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "syntax",
    "term": "syntax",
    "definition": "Syntax waa xeerarka qorista ee luqad kasta oo programming ah: sida amarrada loo qoro, calaamadaha la isticmaalo iyo halka sadarku ku dhammaado. Haddaad hal calaamad ka seegto, code-ku ma fulinayo.",
    "category": "programming-languages"
  },
  {
    "slug": "tailwind",
    "term": "Tailwind",
    "definition": "Tailwind CSS waa framework CSS ah oo ku siiya classes yaryar (utility classes), sida flex, p-4 iyo text-center, si aad design-ka toos ugu qorto HTML-ka gudihiisa, adigoon file CSS ah u kala bixin.",
    "category": "web-development"
  },
  {
    "slug": "terminal",
    "term": "terminal",
    "definition": "Terminal waa barnaamij computer-ka amarro qoran lagu siiyo, halkii mouse lagu isticmaali lahaa. Waxaa sidoo kale la yiraahdaa command line ama CLI (Command Line Interface).",
    "category": "software-engineering"
  },
  {
    "slug": "testing",
    "term": "testing",
    "definition": "Testing waa in la hubiyo in code-kaagu waxa laga rabo sameeyo, intaanu user-ku gacanta ku dhigin. Marmarka qaar gacanta ayaad ku tijaabisaa, laakiin habka ugu wanaagsan waa test qoran oo mar kasta iskiis u shaqeeya.",
    "category": "software-engineering"
  },
  {
    "slug": "token",
    "term": "token",
    "definition": "Token waa qayb yar oo qoraal ah, eray ama qayb eray, oo model-ku qoraalka u kala jaro si uu u fahmo oo u soo saaro. Tokens-ka ayaa lagu xisaabiyaa context-ka iyo lacagta.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "training",
    "term": "training",
    "definition": "Training waa habka model-ka AI-ga xog aad u badan lagu tababaro, si uu qaababka (patterns) u barto oo jawaab u soo saaro. Laba marxaladood ayuu leeyahay: pre-training iyo fine-tuning.",
    "category": "artificial-intelligence"
  },
  {
    "slug": "typescript",
    "term": "TypeScript",
    "definition": "TypeScript waa JavaScript lagu daray types, oo ah in aad qeexdo nooca xogta variable ama function kastaa qaadanayo. Editor-ka iyo compiler-ku khaladka way kuu muujiyaan intaadan code-ka run-gareyn.",
    "category": "programming-languages"
  },
  {
    "slug": "ui",
    "term": "UI",
    "definition": "UI waa soo gaabinta User Interface: qaybta barnaamijka ee user-ku arko oo gacanta ku hayo. Buttons, forms, menus, sawirrada, midabada iyo layout-ka oo dhan waa UI.",
    "category": "web-development"
  },
  {
    "slug": "variable",
    "term": "variable",
    "definition": "Variable waa weel magac leh oo xog lagu kaydiyo si mar dambe loo isticmaalo: magac, tiro, liis. Waa fikradda ugu horreysa ee programming-ka.",
    "category": "programming-languages"
  },
  {
    "slug": "vibe-coding",
    "term": "vibe coding",
    "definition": "Vibe coding waa qaab AI-ga lagu yiraahdo \"application-kan ii dhis\", kadibna wixii uu soo saaro la aqbalo, code-ka la akhriyin, lana fahmin. Natiijada ayaa la fiiriyaa, ma aha habka.",
    "category": "software-engineering"
  },
  {
    "slug": "workflow",
    "term": "workflow",
    "definition": "Workflow waa tallaabooyinka kala horreeya ee shaqo lagu dhammaystiro, iyo cidda ama waxa tallaabo kasta qabta. Marka la qoro oo la habeeyo, isla natiijada ayaa mar kasta soo baxaysa.",
    "category": "software-engineering"
  }
];
