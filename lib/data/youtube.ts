export type Video = {
  slug: string;
  youtubeId: string;
  title: string;
  thumbnail: string;
  duration: string;
  chapters?: number;
  description: string;
  keywords: string;
  blogHref?: string;
};

export type Series = { id: string; title: string; description: string; videos: Video[] };

export const youtubeSeries: Series[] = [
  {
    "id": "series-taxanaha-ai",
    "title": "Taxanaha AI",
    "description": "Taxane sharxaya aasaaska AI-ga, laga bilaabo waxa AI yahay ilaa LLMs iyo AI agents.",
    "videos": [
      {
        "slug": "waa-maxay-artificial-intelligence-baro-ai-af-soomaali-ai-1",
        "youtubeId": "G_iVQcfSQe0",
        "title": "Waa Maxay Artificial Intelligence ? Baro AI Af Soomaali | AI #1",
        "thumbnail": "/yt/vi/G_iVQcfSQe0/hqdefault.jpg",
        "duration": "21 daqiiqo",
        "description": "Kani waa muuqaalkii ugu horreeyay ee taxanaha AI ee Dugsiiye, waxaana loogu talagalay qof kasta oo doonaya inuu aasaaska AI-ga si sax ah u fahmo isagoo aan hore wax badan u aqoon.",
        "keywords": "Hordhaca taxanaha barashada AI Af Soomaali · Waa maxay Artificial Intelligence (AI)? Af Soomaali · Narrow AI, AGI iyo Super Intelligence Af Soomaali · Marxaladihii hore ee AI: Rule-book Era Af Soomaali · Taariikhda AI: Expert System Era Af Soomaali · Horumarka Machine Learning Revolution Af Soomaali · Deep Learning Revolution Af Soomaali · Generative AI iyo Large Language Models Af Soomaali · Sida LLMs u shaqeeyaan iyo Attention Mechanism Af Soomaali · Supervised, Unsupervised iyo Reinforcement Learning Af Soomaali · Awoodaha iyo limitations-ka AI ee hadda Af Soomaali",
        "chapters": 11,
        "blogHref": "/blog/waa-maxay-ai"
      },
      {
        "slug": "waa-maxay-llms-large-language-models-ai-3",
        "youtubeId": "O8nDZsqOJ4Q",
        "title": "Waa Maxay LLMs | Large Language Models | AI #3",
        "thumbnail": "/yt/vi/O8nDZsqOJ4Q/hqdefault.jpg",
        "duration": "18 daqiiqo",
        "description": "Kani waa muuqaalka saddexaad ee taxanaha AI, waxaanan ku sharraxayaa sida LLMs-ku u shaqeeyaan. Waxaan ugu talagalay developer-ka iyo qof kasta oo maqlay Large Language Models oo doonaya faham sax ah.",
        "keywords": "Hordhac iyo Fahamka LLMs Af Soomaali · Waa Maxay Large Language Models (LLMs)? Af Soomaali · Maxaa LLMs Ka Dhigaaya Large? Af Soomaali · Core Capabilities Ee LLMs Af Soomaali · Waa Maxay Foundation Models? Af Soomaali · Transformer iyo Attention Mechanism Af Soomaali · Pre-training iyo Fine-tuning Af Soomaali · Auto-regressive Generation iyo Inference Af Soomaali · Open Source vs Closed Source Models Af Soomaali · Gunaanad iyo Casharrada Xiga Af Soomaali",
        "chapters": 10,
        "blogHref": "/blog/waa-maxay-llms"
      },
      {
        "slug": "waa-maxay-ai-engineer-data-scientist-software-engineer-iyo-machine-learning",
        "youtubeId": "PrcrSMTgr5U",
        "title": "Waa Maxay AI Engineer ? Data Scientist Software Engineer Iyo Machine Learning Engineer ? | AI #2",
        "thumbnail": "/yt/vi/PrcrSMTgr5U/hqdefault.jpg",
        "duration": "14 daqiiqo",
        "description": "Kani waa muuqaalka labaad ee taxanaha AI, waxaanan ku kala saarayaa jahwareerka ka jira roles-ka: AI engineer, software engineer, data scientist, machine learning engineer iyo prompt engineer.",
        "keywords": "Hordhaca Casharka iyo AI Roles Af Soomaali · Waa Maxay AI Engineer? Af Soomaali · Traditional Software vs AI Engineering Af Soomaali · Testing iyo Model Validation Af Soomaali · Isbarbardhigga Shaqooyinka AI iyo Data Af Soomaali · Build vs Buy Decision ee AI Af Soomaali · Goorta la Isticmaalo AI APIs Af Soomaali · Goorta La Dhisayo Custom AI Solution Af Soomaali · Soo Koobid iyo Gabagabo Af Soomaali",
        "chapters": 9,
        "blogHref": "/blog/waa-maxay-ai-engineer"
      },
      {
        "slug": "waa-maxay-ai-agent",
        "youtubeId": "AcqrpTMcpxI",
        "title": "Waa Maxay AI Agent ?",
        "thumbnail": "/yt/vi/AcqrpTMcpxI/hqdefault.jpg",
        "duration": "9 daqiiqo",
        "description": "Cashar ka mid ah taxanaha AI ee Dugsiiye, waxaanan ku sharraxayaa waxa uu yahay AI agent iyo farqiga u dhexeeya isaga iyo chatbot-ka.",
        "keywords": "Waa Maxay AI Agent? Af Soomaali · Doorka Tools-ka ee AI Agent Af Soomaali · Farqiga u Dhexeeya Chatbot iyo Agent Af Soomaali · Sida Loop-ka AI Agent u Shaqeeyo Af Soomaali · Tusaalooyinka Isticmaalka AI Agent Af Soomaali · Goorta La Isticmaalo Chatbot ama AI Agent Af Soomaali · Gabagabo iyo Casharka Xiga Af Soomaali",
        "chapters": 7,
        "blogHref": "/blog/waa-maxay-ai-agent"
      },
      {
        "slug": "sidee-ayaad-u-baran-kartaa-ai-2026-ogow-qaybaha-ai",
        "youtubeId": "iylK9IjiTNI",
        "title": "Sidee Ayaad U Baran Kartaa AI 2026? Ogow Qaybaha AI .",
        "thumbnail": "/yt/vi/iylK9IjiTNI/hqdefault.jpg",
        "duration": "7 daqiiqo",
        "description": "Videogan waxaan ka jawaabayaa su'aal aad iigu soo noqnoqotay: sidee AI loo baran karaa? AI-gu laba waji ayuu leeyahay.",
        "keywords": "Labada Waji ee Barashada AI (Core AI vs Applied AI) Af Soomaali · Fahamka Qaybta Applied AI iyo Faa'iidooyinkeeda Af Soomaali · Dhibaatooyinka Luqadda Soomaaliga iyo AI Af Soomaali · Waxyaabaha Loo Baahan Yahay Core AI Af Soomaali · Muhiimadda Applied AI ee Ganacsiyada Af Soomaali · Gunaanadka iyo Doorashada Qaybta Kugu Habboon Af Soomaali",
        "chapters": 6,
        "blogHref": "/blog/sidee-loo-bartaa-ai-2026"
      }
    ]
  },
  {
    "id": "series-full-courses",
    "title": "Full Courses",
    "description": "Koorsooyin buuxa oo saacado badan socda: React, Python, SQL, PHP, React Native iyo Claude Code.",
    "videos": [
      {
        "slug": "dhis-ai-saas-app-next-js-openai-stripe-aws-cashar-buuxa-oo-af-somali-ah",
        "youtubeId": "DKXs1bzV-HA",
        "title": "Dhis AI SaaS App (Next.js + OpenAI + Stripe + AWS) – Cashar Buuxa oo Af-Somali ah",
        "thumbnail": "/yt/vi/DKXs1bzV-HA/hqdefault.jpg",
        "duration": "11 saac 15 daqiiqo",
        "description": "Koorsadan waa mid ka mid ah kuwa ugu dhaadheer ee kanaalka Dugsiiye la soo galiyay, waxaanan ku dhisayaa AI SaaS app oo dhammaystiran.",
        "keywords": "Hordhaca Koorsada Next.js + OpenAI + Stripe + AWS Af Soomaali · Sida uu u Shaqeeyo SaaS App-ka (Demo) Af Soomaali · Shuruudaha Koorsada iyo Waxyaalaha Aad u Baahan Tahay Af Soomaali · Setup-ka Next.js, Tailwind CSS iyo Shadcn Af Soomaali · Sida Loo Isticmaalo Shadcn Components Af Soomaali · Dhisidda Login Page-ka iyo Isku-xirka Google Auth Af Soomaali · Setup-ka NextAuth iyo Google Developer Console Af Soomaali · Qorista Auth Options iyo Isku-xirka Providers-ka Af Soomaali · Setup-ka Prisma ORM iyo MongoDB Atlas Af Soomaali · Helitaanka Session-ka ee Client-ka iyo Server-ka Af Soomaali · Modification-ka Auth Options si loo Helo Roles iyo Credits Af Soomaali · Dhisidda Dashboard Layout iyo Sidebar-ka Af Soomaali · Sameynta Dynamic Sidebar Routes ee Admin iyo User Af Soomaali · Dhisidda User Avatar iyo Log Out Functionality Af Soomaali · Dhisidda Navbar-ka iyo Mobile Menu (Sheet Component) Af Soomaali · Dhisidda Design Page-ka iyo Isku-xirka tldraw Library Af Soomaali · Sameynta Generate Button iyo Loading State Af Soomaali · Sida OpenAI Vision API u Xisaabiso Tokens-ka Af Soomaali · Setup-ka AWS S3 Bucket iyo IAM User Permissions Af Soomaali · Qorista API Route-ka ee Design Generation Af Soomaali · Upload-ka Sawirka ee AWS S3 iyo Beddelidda SVG to PNG Af Soomaali · Sameynta Presigned URL iyo Xisaabinta Cabbirka Sawirka Af Soomaali · Qorista Algorithm-ka Xisaabinta Tokens-ka OpenAI Af Soomaali · Isku-xirka GPT-4 Vision API iyo System Prompting Af Soomaali · Isku-xirka Frontend-ka iyo API-ga Design-ka Af Soomaali · Isticmaalka Prisma Studio si loogu Shubo Credits Af Soomaali · Keydinta Code-ka la Generate-gareeyay ee Database-ka Af Soomaali · Dhisidda Preview Model iyo Iframe-ka Code-ka Af Soomaali · Sameynta Tab Buttons (Preview vs Code View) Af Soomaali · Isticmaalka Prism JS si loo Highlight-gareeyo Code-ka Af Soomaali · Sameynta Copy to Clipboard Hook iyo Sonner Toast Af Soomaali · Sida Loo Dejiyo Pricing Strategy-ga SaaS App-ka Af Soomaali · Akhrinta Code-yadii Hore ee Database-ka (Prisma findMany) Af Soomaali · Dhisidda Data Table (Pagination, Sorting, iyo Filtering) Af Soomaali · Sameynta Actions Column (Preview iyo Delete Functionality) Af Soomaali · Sameynta View Code Page adigoo Isticmaalaya React Query Af Soomaali · Dhisidda Admin Dashboard iyo User List Page Af Soomaali · Dhisidda Update Credit Form (Dialog Component) Af Soomaali · Qorista API Route-ka ee Update User Credit Af Soomaali · Isku-xirka Update Mutation iyo Refreshing Data Af Soomaali · Dhisidda Pricing Page iyo Plans Grid Af Soomaali · Styling-ka Pricing Cards iyo Most Popular Badge Af Soomaali · Dhisidda Payment Modal (Local vs Online Payment) Af Soomaali · Sameynta State Management ee Payment Methods Af Soomaali · Dhisidda Phone Number Input ee Local Payments Af Soomaali · Isku-xirka Stripe Checkout Session (API Route) Af Soomaali · Redirecting User-ka ee Stripe Checkout Page Af Soomaali · Sida Webhooks u Shaqeeyaan iyo Setup-ka Stripe CLI Af Soomaali · Qorista Stripe Webhook API Route (Handling Events) Af Soomaali · Isku-xirka EVC Plus, Zaad, iyo Sahal (Local Payments API) Af Soomaali · Testing-ka Local Payments adigoo Isticmaalaya Real Phone Af Soomaali · Handling Errors iyo Succeeded Payments ee Local API Af Soomaali · Gunaanadka Koorsada iyo Talooyin Mustaqbalka ah Af Soomaali",
        "chapters": 53
      },
      {
        "slug": "baro-react-js-tailwind-redux-full-react-js-course-af-somali-22-hours",
        "youtubeId": "uLvmcgZCN_k",
        "title": "Baro React.js + Tailwind + Redux — Full React.js Course Af Somali 22+ Hours",
        "thumbnail": "/yt/vi/uLvmcgZCN_k/hqdefault.jpg",
        "duration": "22 saac 4 daqiiqo",
        "description": "Koorsadan waa tii ugu dheerayd ee aan soo galiyo, in ka badan labaatan iyo laba saac, waxaanan ku barayaa React.js from start to finish, Tailwind CSS iyo Redux-na way ku dhex jiraan.",
        "keywords": "Hordhaca Koorsada React.js Af Soomaali · Bilaabista Project-ka iyo Create React App Af Soomaali · Sharaxaadda File Structure-ka React Af Soomaali · Fahamka JSX iyo createRoot Af Soomaali · Qawaaniinta JSX iyo Styling Af Soomaali · Hordhaca React Components Af Soomaali · Fahamka Props iyo Gudbinta Xogta Af Soomaali · Conditional Rendering gudaha React Af Soomaali · Rendering Lists iyo Isticmaalka Map Af Soomaali · Maareynta Events gudaha React Af Soomaali · Hordhaca Hook-ga useState Af Soomaali · useState oo Complex ah iyo Objects Af Soomaali · Hordhaca Hook-ga useEffect Af Soomaali · Fetching Data oo ka socota API Af Soomaali · Dhisidda Social Media Project Af Soomaali · Login Component iyo State Lifting Up Af Soomaali · Header Component iyo Logout Functionality Af Soomaali · Create Post Component iyo Form Handling Af Soomaali · Maareynta Posts State iyo Array Spread Af Soomaali · Fahamka iyo Isticmaalka Hook-ga useRef Af Soomaali · Hordhaca Context API iyo useContext Af Soomaali · Hordhaca Hook-ga useReducer Af Soomaali · Samaynta Post Reducer File Af Soomaali · Isku Xirka useReducer iyo Context API Af Soomaali · Delete Post Feature iyo Confirmation Af Soomaali · Hordhaca Shopping Cart Project iyo Router Af Soomaali · Ways-ka Kala Duwan ee Styling-ka Af Soomaali · Setup-ka iyo Isticmaalka React Router v6 Af Soomaali · Dhisidda iyo Styling-ka Header Component Af Soomaali · Dhisidda Products iyo Dummy Data Af Soomaali · CSS Grid iyo Styling-ka Product Cards Af Soomaali · Dhisidda Custom Hook useShop iyo Reducer Af Soomaali · Add to Cart iyo Remove from Cart Af Soomaali · Dhisidda Cart Products Page Af Soomaali · Xisaabinta Total Price iyo Real-time Updates Af Soomaali · Dhisidda Payment Component Af Soomaali · Ku Xiridda Hormuud EVC Plus API Af Soomaali · Isticmaalka React Hot Toast Af Soomaali · Ku Shubidda Project-ka GitHub iyo Vercel Af Soomaali · Hordhaca Project-ka Miss Somalia iyo Redux Af Soomaali · Setup-ka Vite iyo SCSS Preprocessor Af Soomaali · Dhisidda Countdown Timer Component Af Soomaali · Dhisidda Competitors List iyo Grid Af Soomaali · Dhisidda Vote Modal Component Af Soomaali · Hordhaca iyo Setup-ka Redux Toolkit Af Soomaali · Samaynta Modal Slice iyo Competitor Slice Af Soomaali · Add Vote Functionality iyo Local Storage Af Soomaali · Hordhaca Project-ka Netflix Clone iyo Tailwind Af Soomaali · Dhisidda Browse Page iyo TMDb API Af Soomaali · Gebogebada Koorsada iyo Assignment Af Soomaali",
        "chapters": 50,
        "blogHref": "/blog/baro-react-js-af-soomaali"
      },
      {
        "slug": "dhis-web-app-real-ah-php-mysql-ajax-bootstrap-cashar-buuxa-oo-af-somali-ah",
        "youtubeId": "O3yIiPioo9g",
        "title": "Dhis Web App Real Ah (PHP + MySQL + AJAX + Bootstrap) – Cashar Buuxa oo Af-Somali ah",
        "thumbnail": "/yt/vi/O3yIiPioo9g/hqdefault.jpg",
        "duration": "6 saac 25 daqiiqo",
        "description": "Koorsadan waa PHP for Professionals, waana koorso bilow ilaa dhammaad ah oo Af-Soomaali ah.",
        "keywords": "Hordhaca Koorsada PHP for Professionals Af Soomaali · Yaa Isticmaala PHP iyo Muhiimadiisa Af Soomaali · Casharka 1aad: Setup-ka iyo XAMPP Af Soomaali · Ku Shubashada Visual Studio Code Af Soomaali · Syntax-ka PHP iyo Echo Af Soomaali · Variables-ka PHP Af Soomaali · Arrays iyo Array Functions Af Soomaali · For Loops (Daabacaadda 1-10) Af Soomaali · Sida Loops-ka u Shaqeeyaan Af Soomaali · Functions iyo Parameters Af Soomaali · Hordhaca MySQL iyo phpMyAdmin Af Soomaali · Sameynta Tables iyo Insert Data Af Soomaali · Select Queries Af Soomaali · Hordhaca Bootstrap Af Soomaali · Bootstrap Variables iyo Containers Af Soomaali · Bootstrap Forms (Form Group) Af Soomaali · Isku-xirka Database (Connection File) Af Soomaali · Insert Student (POST iyo Query) Af Soomaali · Soo Bandhigidda Data ee Table Af Soomaali · Update Logic (isset, if/else) Af Soomaali · JavaScript DOM Manipulation Af Soomaali · CSS via JavaScript iyo Events Af Soomaali · Hordhaca Project-ka CRUD Af Soomaali · Bootstrap Modal (Popup) Af Soomaali · Hordhaca API iyo Connection Af Soomaali · Functions iyo JSON Response Af Soomaali · Action-Based Routing Af Soomaali · Form Submit iyo Form Data Af Soomaali · Looping Data ee Table Af Soomaali · Edit iyo Delete Buttons (Font Awesome) Af Soomaali · Read Student Info (Update) Af Soomaali · Delete Functionality iyo Confirm Af Soomaali · CRUD Operation Complete Af Soomaali · Expense Management System (Bilow) Af Soomaali · Qorshaynta iyo Admin Template Af Soomaali · Kala Jajabinta Template (Includes) Af Soomaali · Dashboard iyo Expense Page Af Soomaali · Database iyo Stored Procedures Af Soomaali · Register Expense SP iyo API Af Soomaali · Template Routing iyo Form Design Af Soomaali",
        "chapters": 40
      },
      {
        "slug": "baro-react-native-af-soomali-dhis-ios-iyo-android-apps-adiga-oo-qoraya-single",
        "youtubeId": "gbpQWd06h0E",
        "title": "Baro React Native Af Soomali | Dhis IOS Iyo Android Apps Adiga Oo Qoraya Single Code Base",
        "thumbnail": "/yt/vi/gbpQWd06h0E/hqdefault.jpg",
        "duration": "3 saac 54 daqiiqo",
        "description": "Koorsadan waxaan ka bilaabayaa React Native aasaaska ilaa aad ka dhisto app iOS iyo Android labadaba ku shaqeeya, adigoo hal code base qoraya.",
        "keywords": "Hordhac iyo Sharaxaadda React Native Af Soomaali · Agabka iyo Deegaanka Horumarinta (Setup) Af Soomaali · Farqiga u dhexeeya Native Development iyo React Native Af Soomaali · Shirkadaha Isticmaala React Native Af Soomaali · Ku Shubashada Node.js iyo Expo Af Soomaali · Fahamka Faylasha App.js iyo App.json Af Soomaali · Core Components: View, Text, iyo Image Af Soomaali · Isticmaalka TouchableOpacity iyo Buttons Af Soomaali · Sida loo Isticmaalo StyleSheet iyo Styling Af Soomaali · Soo Bandhigista List-yada: ScrollView Af Soomaali · Isticmaalka FlatList ee Performance-ka Fiican Af Soomaali · Platform Specific Styles (iOS vs Android) Af Soomaali · Maareynta State-ka iyo Alert Events Af Soomaali · Abuurista iyo Isticmaalka Custom Components Af Soomaali · Barashada iyo Ku Shubashada Expo Router Af Soomaali · Dynamic Routing iyo Search Parameters Af Soomaali · Sameynta Stack Navigation iyo Layouts Af Soomaali · Sameynta Tab Navigation iyo Icons Af Soomaali · Isticmaalka Modal Presentation Af Soomaali · Bilaabista Project-ka: Task Manager App Af Soomaali · Dhisidda Task List Component Af Soomaali · Sameynta Floating Action Button (FAB) Af Soomaali · Dhisidda Add Task Modal Af Soomaali · Maareynta State-ka ee Tasks-ka Cusub Af Soomaali · Sameynta Delete iyo Toggle Complete Functions Af Soomaali · Kala Qaybinta Active iyo Completed Tasks Af Soomaali · Isticmaalka Async Storage (Local Storage) Af Soomaali · Sameynta Task Detail Page iyo Gunaanad Af Soomaali",
        "chapters": 28
      },
      {
        "slug": "baro-sql-database-dbms-full-database-af-soomaali",
        "youtubeId": "oAVdUdWsWXk",
        "title": "Baro SQL Database | DBMS | Full Database Af Soomaali",
        "thumbnail": "/yt/vi/oAVdUdWsWXk/hqdefault.jpg",
        "duration": "3 saac 33 daqiiqo",
        "description": "Koorsadan waxaan ku barayaa SQL laga bilaabo waxa database-ku yahay ilaa join-yada iyo index performance tuning-ka.",
        "keywords": "Hordhaca Koorsada SQL Af Soomaali · Waa Maxay Database? (DBMS) Af Soomaali · Farqiga u dhexeeya SQL iyo NoSQL Af Soomaali · Terminologies-ka Core-ka ah ee Database-ka Af Soomaali · Fahamka ACID iyo CAP Theorem Af Soomaali · Waa Maxay Normalization? Af Soomaali · Waa Maxay Indexes? Af Soomaali · Sida loo Setup-gareeyo MySQL (Windows) Af Soomaali · Sida loo Setup-gareeyo MySQL (Mac) Af Soomaali · Barashada DBeaver iyo Query-gii ugu Horreeyay Af Soomaali · Sida loo Sameeyo Table (Create Table) Af Soomaali · Sida Data loogu Galiyo Table-ka (Insert Into) Af Soomaali · Sida Data loo soo Akhriyo (Select From) Af Soomaali · Sida Data loo Delete-gareeyo iyo Update-gareeyo Af Soomaali · Isticmaalka Where Clause Af Soomaali · Smart Search iyadoo la Isticmaalayo LIKE Af Soomaali · Conditional Queries (AND, OR, Parenthesis) Af Soomaali · Sorting, Limiting, iyo Renaming Columns Af Soomaali · Barashada Aggregate Functions (Count, Sum, Average, Max, Min) Af Soomaali · Isticmaalka Group By Af Soomaali · SQL Relations (Primary Key & Foreign Key) Af Soomaali · Isku Xirka Tables-ka (Inner Join) Af Soomaali · Left Join iyo Right Join Af Soomaali · Index Performance Tuning (Explain Query) Af Soomaali",
        "chapters": 24
      },
      {
        "slug": "ku-baro-python-af-somali-python-af-soomaali-full-course",
        "youtubeId": "FLCVd8tJA2U",
        "title": "Ku Baro Python Af Somali | Python Af Soomaali Full Course",
        "thumbnail": "/yt/vi/FLCVd8tJA2U/hqdefault.jpg",
        "duration": "3 saac 27 daqiiqo",
        "description": "Koorso Python ah oo dhammaystiran oo Af-Soomaali ah. Waxaa qaadan kara qof kasta oo raba inuu programming barto, iyo qofkii horeba u yaqaannay JavaScript, Java ama C++ oo hadda doonaya inuu Python ku...",
        "keywords": "Hordhaca Koorsada Python Af Soomaali · Waa Maxay Python? Af Soomaali · Meelaha Loo Isticmaalo Python Af Soomaali · Maxaa Loo Bartaa Python? Af Soomaali · Interpreter vs Compiler Af Soomaali · Sida Loo Install-gareeyo Python iyo VS Code Af Soomaali · Variables iyo Data Types Af Soomaali · Operators-ka Python Af Soomaali · Control Flow (If, Else, Elif) Af Soomaali · Loops (For iyo While Loops) Af Soomaali · List Comprehensions Af Soomaali · Data Structures (Lists, Tuples, Sets, Dictionaries) Af Soomaali · String Manipulation iyo Formatting Af Soomaali · Functions iyo Lambda Expressions Af Soomaali · Modules iyo Packages (Importing) Af Soomaali · File Input/Output (Reading & Writing) Af Soomaali · Error Handling (Try/Except) Af Soomaali · Object-Oriented Programming (OOP) - Hordhac Af Soomaali · Abstraction Af Soomaali · Encapsulation Af Soomaali · Inheritance Af Soomaali · Polymorphism Af Soomaali · Gunaanadka Koorsada Af Soomaali",
        "chapters": 23
      },
      {
        "slug": "baro-claude-code-af-soomaali-full-course-skills-agents-iyo-mcp",
        "youtubeId": "XRuSZG_3Jlg",
        "title": "Baro Claude Code Af Soomaali Full Course | Skills | Agents Iyo MCP",
        "thumbnail": "/yt/vi/XRuSZG_3Jlg/hqdefault.jpg",
        "duration": "2 saac",
        "description": "Koorsadan waxaan ku barayaa Claude Code laga bilaabo install-ka ilaa skills, agents iyo MCP, waxaana loogu talagalay developer-ka iyo qof kasta oo doonaya inuu shaqadiisa maalmeedka AI ku fuliyo.",
        "keywords": "Hordhaca Kooraska iyo Isticmaalka Claude Code Af Soomaali · Qiimaha iyo Qorshayaasha Claude (Pricing Plans) Af Soomaali · Sida loo install-gareeyo Claude Code (Mac & Windows) Af Soomaali · Afar qaab oo loo adeegsado Claude Code Af Soomaali · Ku shaqaynta Claude Desktop App iyo Preview-ga Af Soomaali · Isticmaalka Whiteboard-ka iyo Tafatiraadda Code-ka Af Soomaali · Sida loogu dhex isticmaalo VS Code (Extension) Af Soomaali · Ku dhex shaqaynta CLI-ga iyo Amarrada Muhiimka ah Af Soomaali · Fahamka Context-ga iyo Token-yada (/context) Af Soomaali · Maamulista Model-ada kala duwan (/model) Af Soomaali · Isticmaalka Rewind iyo Resume (/rewind & /resume) Af Soomaali · Isticmaalka Codka (Voice) iyo Sawirrada (Images) Af Soomaali · Maamulista Permissions-ka iyo Auto Mode Af Soomaali · Fahamka Memory-ga (Project & User Memory) Af Soomaali · Barashada Skills-ka iyo Sida loo Sameeyo Af Soomaali · Raadinta iyo Soo Degsashada Skills-ka (Find Skill) Af Soomaali · Isticmaalka Hooks-ka iyo Sound Notifications Af Soomaali · Sameynta iyo Adeegsiga Sub-Agents Af Soomaali · Hordhaca MCP (Model Context Protocol) Af Soomaali · Isku-xirka Google Calendar iyo Notion (Connectors) Af Soomaali · Tusaale: Browser Automation iyo Testing (Claude in Chrome) Af Soomaali · Gunaanadka iyo Gabagabada Kooraska Af Soomaali",
        "chapters": 22,
        "blogHref": "/blog/baro-claude-code-af-soomaali"
      },
      {
        "slug": "dhis-ai-agent-next-js-ai-sdk-open-router-kimi-k2-7-code",
        "youtubeId": "7-MWTuO2yr0",
        "title": "Dhis AI Agent | Next.js , AI SDK , Open Router Kimi K2.7 Code",
        "thumbnail": "/yt/vi/7-MWTuO2yr0/hqdefault.jpg",
        "duration": "1 saac 16 daqiiqo",
        "description": "Cashar buuxa oo aan ku dhisayo AI agent aad adigu leedahay, anigoo isticmaalaya Next.js App Router, Vercel AI SDK iyo OpenRouter.",
        "keywords": "Hordhac iyo sharaxaad ku saabsan AI Agent Af Soomaali · Sida loo isticmaalo OpenRouter iyo faa'iidooyinkiisa Af Soomaali · Doorashada moodallada free-ga ah ee OpenRouter Af Soomaali · Sida loo install-gareeyo Next.js application Af Soomaali · Sida loo sameysto API Keys (OpenRouter & Server.def) Af Soomaali · Ku shubista AI SDK, OpenRouter provider iyo Zod Af Soomaali · Sameynta file-ka lib/ai.ts iyo isku xirka API-ga Af Soomaali · Sameynta API route-ka chat-ka (route.ts) Af Soomaali · Diyaarinta front-end-ka iyo isticmaalka useChat hook Af Soomaali · Sida loo kala baxo xogta messages-ka (role iyo parts) Af Soomaali · Sida AI-ga loo siiyo Tools (Weather Tool tusaale ahaan) Af Soomaali · Bedelaada model-ka (Kimi K2.7) iyo xalinta rate limit-ka Af Soomaali · Sameynta Web Search Tool iyadoo la isticmaalayo Server.def Af Soomaali · Qurxinta UI-ga iyo soo bandhigida xaalada AI-ga (busy/thinking) Af Soomaali · Tijaabinta Web Search Tool iyo helitaanka live data Af Soomaali · Gunaanad iyo dhiirigelin ku saabsan horumarinta AI Agents Af Soomaali",
        "chapters": 16
      }
    ]
  },
  {
    "id": "series-claude-code-agentic",
    "title": "Claude Code & Agentic",
    "description": "Qalabka agentic coding iyo sida loo isticmaalo: Claude Code, Cursor, Codex iyo vibe coding.",
    "videos": [
      {
        "slug": "claude-design-caadi-maahan-claude-ai-af-soomaali",
        "youtubeId": "shgoo9xpV8s",
        "title": "Claude Design Caadi Maahan | Claude AI Af Soomaali",
        "thumbnail": "/yt/vi/shgoo9xpV8s/hqdefault.jpg",
        "duration": "1 saac",
        "description": "Videogan waxaan ku tusayaa Claude Design, waxaana loogu talagalay designer-ka, developer-ka doonaya inuu design-ka AI-ga ku sameeyo, iyo qofka presentation-no iyo reports gudbiya.",
        "keywords": "Hordhac iyo Faa'iidooyinka Claude Design Af Soomaali · Sida loo isticmaalo Claude Design iyo Is-diiwaangelinta Af Soomaali · Muhiimadda Design System-ka Af Soomaali · Prototyping iyo Diyaarinta Naqshadda Af Soomaali · Sameynta Design System Cusub oo Dugsii ah Af Soomaali · Doorka UI/UX Designer-ka ee Xilliga AI-ga Af Soomaali · Falanqaynta Qaybaha Design System-ka la Sameeyay Af Soomaali · Sameynta High Fidelity Design System Af Soomaali · Doorashada Habka iyo Midabada Naqshadda Af Soomaali · Eegista Web UI Kit-ka la Diyaariyay Af Soomaali · Diyaarinta Presentation (PowerPoint) oo ku saabsan Cimilada Af Soomaali · Eegista Naqshadda Cusub iyo Sample Page-ka Af Soomaali · Tweak-gareynta iyo Wax-ka-beddelka Naqshadda Af Soomaali · Soo-bandhigista Presentation-ka la Sameeyay Af Soomaali · Bilaabista Mobile App Design (Voice AI Assistant) Af Soomaali · Doorashada Shaashadaha iyo Habka Mobile App-ka Af Soomaali · Falanqaynta Presentation-ka Modern-ka ah Af Soomaali · Sameynta YouTube Animation ka kooban dhowr ilbiriqsi Af Soomaali · Eegista Shaashadaha Mobile App-ka iyo Isku-xirnaantooda Af Soomaali · Daawashada Animation-ka la Sameeyay Af Soomaali · Sida loogu wareejiyo Naqshadda Claude Code (Handoff) Af Soomaali · Falanqaynta Code-ka React-ga ee uu Claude Code soo saaray Af Soomaali · Tijaabinta Application-ka oo Live ah iyo Gunaanad Af Soomaali",
        "chapters": 23
      },
      {
        "slug": "baro-isticmaalka-claude-ai-claude-cowork-claude-design-iyo-clude-code-claude-ai",
        "youtubeId": "5x-RRHNyHHc",
        "title": "Baro Isticmaalka Claude.ai | Claude CoWork , Claude Design Iyo Clude Code | Claude AI Af Soomaali",
        "thumbnail": "/yt/vi/5x-RRHNyHHc/hqdefault.jpg",
        "duration": "58 daqiiqo",
        "description": "Crash course Claude.ai ah oo aan ugu talagalay qof kasta oo professional ah: coder, designer, macallin ama qof hay'ad u shaqeeya. Waxaan kaaga hadlayaa saddexda interface ee Claude:",
        "keywords": "Hordhac Claude.ai Af Soomaali · Claude Co-Work Af Soomaali · Qiimaha Claude.ai Af Soomaali · Claude App iyo Extension Af Soomaali · Noocyada Claude Models Af Soomaali · Habka Codka (Voice Mode) Af Soomaali · Settings-ka Claude Af Soomaali · Isticmaalka Claude ee Shaqada Af Soomaali · Saddexda Qaybood ee Claude Af Soomaali · Maamulka Projects-ka Af Soomaali · Abuurista Artifacts (Presentation) Af Soomaali · Abuurista App-ka Quiz Af Soomaali · Claude Code Af Soomaali · Claude Co-Work: Tusaale Duulimaad Af Soomaali · Claude Co-Work: Tusaale YouTube Af Soomaali · Claude Design Af Soomaali · Claude Code: VS Code Extension Af Soomaali · Claude Code: Tusaale Website Update Af Soomaali",
        "chapters": 18
      },
      {
        "slug": "yaa-fiican-claude-code-cursor-iyo-codex-3-dooda-ayaan-is-barbar-dhigay",
        "youtubeId": "W7hXEFfmAOU",
        "title": "Yaa Fiican Claude Code , Cursor Iyo Codex | 3-dooda Ayaan Is Barbar Dhigay ?",
        "thumbnail": "/yt/vi/W7hXEFfmAOU/hqdefault.jpg",
        "duration": "1 saac",
        "description": "Videogan waxaan isbarbardhigayaa saddex tool oo agentic ah: Claude Code, Cursor iyo Codex, waxaana loogu talagalay developer-ka doonaya inuu ogaado midkee shaqadiisa ku habboon.",
        "keywords": "Hordhaca isbarbardhigga Claude Code, Cursor iyo Codex Af Soomaali · Diyaarinta specification-ka AI Resume Builder Af Soomaali · Xulashada Bun, shadcn iyo design skills Af Soomaali · Tijaabada koowaad: Cursor iyo Grok Af Soomaali · U qaybinta tasks iyo diyaarinta tracker.md Af Soomaali · Dhisidda orchestrator iyo maamulka sub-agents Af Soomaali · Run-gareynta iyo qiimeynta project-ka Cursor Af Soomaali · Isticmaalka CodexBar iyo kharashka tokens-ka Af Soomaali · Tijaabada labaad: Bilaabista Claude Code Af Soomaali · Orchestration-ka iyo parallel tasks ee Claude Code Af Soomaali · Tijaabinta iyo preview-ga application-ka Claude Code Af Soomaali · Habeynta OpenRouter API key iyo environment Af Soomaali · Tijaabada saddexaad: Bilaabista OpenAI Codex Af Soomaali · Caqabadaha xawaaraha iyo verification-ka Codex Af Soomaali · Dhibaatada token limits iyo account switching Af Soomaali · Run-gareynta iyo tijaabinta application-ka Codex Af Soomaali · Isbarbardhigga saddexda natiijo ee lasoo saaray Af Soomaali · Gunaanad: Goormaad isticmaalaysaa tool walba? Af Soomaali",
        "chapters": 18,
        "blogHref": "/blog/claude-code-cursor-codex-yaa-fiican"
      },
      {
        "slug": "cursor-ai-si-qaldan-ayaad-u-isticmaalaysaa-cursor-ai-af-soomaali-crash-course",
        "youtubeId": "r_4RqCWqvs0",
        "title": "Cursor AI Si Qaldan Ayaad U Isticmaalaysaa | Cursor AI Af Soomaali Crash Course",
        "thumbnail": "/yt/vi/r_4RqCWqvs0/hqdefault.jpg",
        "duration": "52 daqiiqo",
        "description": "Crash course-kan waxaan ku barayaa sida saxda ah ee Cursor loo isticmaalo, waxaana loogu talagalay developer-ka doonaya inuu productivity-giisa kordhiyo. Waxaan si cad u sheegayaa:",
        "keywords": "Hordhaca Cursor AI iyo Sida Loo Isticmaalo Af Soomaali · Muhiimadda ay leedahay in la fahmo Code-ka Af Soomaali · Sharraxaadda Interface-ka iyo Settings-ka Cursor Af Soomaali · Sida loo doorto Model-ka iyo API Keys-ka Af Soomaali · Fahamka Indexing-ka iyo Sida uu u Shaqeeyo Af Soomaali · Sida loo isticmaalo Auto-complete iyo Predictions Af Soomaali · Isticmaalka Command K iyo Inline Editing Af Soomaali · Sida loo sameeyo Cursor Rules oo gaar ah Af Soomaali · Dib-u-eegista Isbeddelada (Review Changes) Af Soomaali · Isticmaalka Agent-ka iyo Raadinta Web-ka Af Soomaali · Sida loo tixraaco Files-ka (References) Af Soomaali · Sida UI looga dhisayo Screenshot (Image-to-Code) Af Soomaali · Isku-xirka API-ga iyo JavaScript-ka Af Soomaali · Xallinta Ciladaha CORS Origin Error Af Soomaali · Habaynta iyo Qurxinta Response-ka Model-ka Af Soomaali · Gabagabada iyo Talooyinka Crash Course-ka Af Soomaali",
        "chapters": 16,
        "blogHref": "/blog/baro-cursor-ai-af-soomaali"
      },
      {
        "slug": "tokens-ka-ha-gubin-sida-loo-yareeyo-usage-ka-codex-claude-code-cursor",
        "youtubeId": "FFKp8OBgu3M",
        "title": "Tokens-ka Ha Gubin! Sida Loo Yareeyo Usage-ka Codex, Claude Code & Cursor",
        "thumbnail": "/yt/vi/FFKp8OBgu3M/hqdefault.jpg",
        "duration": "22 daqiiqo",
        "description": "Videogan waxaan kaga hadlayaa usage-ka iyo sida aan tokens-ka u yareeyay anigoon shaqada joojin.",
        "keywords": "Fahamka usage-ka Claude iyo Codex Af Soomaali · Maaraynta tasks-ka adigoo isticmaalaya Notion Af Soomaali · Doorka Fable ee orchestrator-ka shaqada Af Soomaali · Dooro effort-ka saxda ah ee thinking-ka Af Soomaali · Muhiimadda testing-ka iyo verification-ka AI Af Soomaali · Tijaabada GPT cusub iyo Codex limits Af Soomaali · Isticmaalka Codex computer use iyo limits Af Soomaali · Sida loo dhimo kharashka tokens-ka Af Soomaali · Ka shaqaynta dhowr projects hal mar Af Soomaali · Isku xirka Codex iyo Claude Code Af Soomaali · Maaraynta sub-agents iyo gabagabada talooyinka Af Soomaali",
        "chapters": 11
      },
      {
        "slug": "vibe-coding-iyo-agentic-coding-aan-ka-hadalno",
        "youtubeId": "JmwPGeHCW84",
        "title": "Vibe Coding Iyo Agentic Coding Aan Ka Hadalno !",
        "thumbnail": "/yt/vi/JmwPGeHCW84/hqdefault.jpg",
        "duration": "21 daqiiqo",
        "description": "Video-gan waxaan ku kala saarayaa afarta marxaladood ee coding-ku soo maray, iyo sababta dadku isugu qaldaan vibe coding iyo agentic coding.",
        "keywords": "Hordhaca Afarta Marxaladood Ee Coding-ka Af Soomaali · Traditional Coding Muxuu Ahaa? Af Soomaali · AI-Assisted Coding Iyo Copilot Af Soomaali · Vibe Coding Iyo Agentic Coding Af Soomaali · Caqabadihii Traditional Coding-ka Af Soomaali · Khataraha Amniga Ee Vibe Coding Af Soomaali · Doorka Bini'aadamka Ee Agentic Coding Af Soomaali · Goormee La Isticmaalaa Hab Kasta? Af Soomaali · Talooyinka Ku Saabsan Barashada Coding-ka Af Soomaali · Gunaanad Iyo Soo Koobid Af Soomaali",
        "chapters": 10,
        "blogHref": "/blog/vibe-coding-iyo-agentic-coding"
      },
      {
        "slug": "github-waa-u-dhamaatay-cursor-waxay-soo-saartay-github-killer-cursor-origin",
        "youtubeId": "WeG-7RIvimU",
        "title": "Github Waa U Dhamaatay | Cursor Waxay Soo Saartay Github Killer Cursor Origin",
        "thumbnail": "/yt/vi/WeG-7RIvimU/hqdefault.jpg",
        "duration": "16 daqiiqo",
        "description": "Videogan waxaan ku sharxayaa tool-ka cusub ee Cursor soo saartay oo la yiraahdo Origin Code Hosting, kaasoo u shaqeeya sida GitHub oo kale.",
        "keywords": "Hordhaca Cursor Origin iyo Git vs GitHub Af Soomaali · Features-ka Cursor Origin Repos Af Soomaali · Native AI Code Review iyo Extensions Af Soomaali · Abuurista Repo Cusub ee Origin Af Soomaali · Origin CLI Setup iyo Push Code Af Soomaali · Nadiifinta Code-ka iyadoo la Adeegsanayo Agent Af Soomaali · Iskudayga Deployment-ka ee Vercel Af Soomaali · Gabagabo iyo Isbarbardhigga GitHub Af Soomaali",
        "chapters": 8
      },
      {
        "slug": "vibe-coder-vs-agentic-coder-aan-ka-hadalno",
        "youtubeId": "lR-ttA2tz78",
        "title": "Vibe Coder Vs Agentic Coder Aan Ka Hadalno",
        "thumbnail": "/yt/vi/lR-ttA2tz78/hqdefault.jpg",
        "duration": "16 daqiiqo",
        "description": "Videogan waxaan kala saarayaa vibe coder iyo agentic coder, laba erey oo dadku inta badan isku qaldaan.",
        "keywords": "Hordhac: Vibe Coder vs Agentic Coder Af Soomaali · Waayo-aragnimadii ImagineFace iyo ChatGPT Af Soomaali · Soo bixitaankii Cursor iyo doorkiisa Af Soomaali · Soo ifbaxa tools-ka Lovable iyo Bolt Af Soomaali · Xaddidaadda iyo caqabadaha Vibe Coding Af Soomaali · Waa kuma Agentic Coder? Af Soomaali · Saameynta AI ku yeelanayo shaqooyinka Af Soomaali · Sida loogu gudbo Agentic Coder Af Soomaali",
        "chapters": 8
      },
      {
        "slug": "3-program-ai-ah-oo-cusub-ayaan-furnay-agentic-ai-engineering-with-claude-code",
        "youtubeId": "GzWDKVDT-J0",
        "title": "3 Program AI Ah Oo Cusub Ayaan Furnay | Agentic AI Engineering With Claude Code",
        "thumbnail": "/yt/vi/GzWDKVDT-J0/hqdefault.jpg",
        "duration": "11 daqiiqo",
        "description": "Video-gan waxaan ku shaacinayaa saddex barnaamij oo cusub oo Dugsiiye hadda ka furan, waxaanan sharraxayaa qaybta adiga kugu habboon.",
        "keywords": "Hordhaca 3-da Barnaamij Ee Cusub Af Soomaali · Barnaamijka Beginners Iyo 12-ka Phase Af Soomaali · Waxyaabaha Lagu Baranayo AI Engineering Af Soomaali · Agentic Coding With Claude Code Af Soomaali · Parallel Work Iyo Orchestrator Agents Af Soomaali · Designing With AI Iyo Automated Shipping Af Soomaali · Gabagabada Iyo Sida Loogu Soo Biirayo Af Soomaali",
        "chapters": 7
      },
      {
        "slug": "isticmaal-claude-code-qaab-free-ah",
        "youtubeId": "KEQypLGaCGw",
        "title": "Isticmaal Claude Code Qaab Free Ah",
        "thumbnail": "/yt/vi/KEQypLGaCGw/hqdefault.jpg",
        "duration": "12 daqiiqo",
        "description": "Videogan waxaan idin tusayaa sida aad open source models-ka hadda jira, sida GLM-ka cusub, DeepSeek iyo Qwen, ugu isticmaali karto Claude Code adigoon subscription bixin.",
        "keywords": "Hordhac: Isticmaalka Open Source Models ee Claude Code Af Soomaali · Doorashada Models-ka Free-ga ah ee OpenRouter Af Soomaali · Diyaarinta API Keys iyo Environment Variables Af Soomaali · Ku dhex shaqaysiinta GLM Model Claude Code Af Soomaali · U beddelashada iyo Tijaabinta DeepSeek Model Af Soomaali · Isticmaalka Qwen Model iyo Soo Koobid Af Soomaali",
        "chapters": 6
      },
      {
        "slug": "claude-code-waa-available-hada-somalia-claude-ai-af-soomaali",
        "youtubeId": "FLdVN0jRjeI",
        "title": "Claude Code waa available Hada Somalia | Claude AI Af Soomaali",
        "thumbnail": "/yt/vi/FLdVN0jRjeI/hqdefault.jpg",
        "duration": "2 daqiiqo",
        "description": "War farxad leh oo aan la wadaagayo asxaabta Soomaaliyeed: Claude.ai hadda si toos ah ayaa looga isticmaali karaa Soomaaliya.",
        "keywords": "Claude.ai oo laga helayo Soomaaliya Af Soomaali · Doorka Hay'adda Isgaarsiinta Qaranka (NCA) Af Soomaali · Baahida loo qabo hagaajinta Banking System-ka Af Soomaali · Faa'iidooyinka Claude AI iyo Dugsiiye Af Soomaali",
        "chapters": 4
      },
      {
        "slug": "waa-in-claude-code-aan-ku-isticmaalnaa-somalia",
        "youtubeId": "_qkgUVbsAJ4",
        "title": "Waa In Claude Code Aan Ku Isticmaalnaa Somalia",
        "thumbnail": "/yt/vi/_qkgUVbsAJ4/hqdefault.jpg",
        "duration": "1 daqiiqo",
        "description": "Videogan gaaban waxaan kaga hadlayaa xayiraadda saaran Soomaaliya marka la yimaado helitaanka Claude iyo Claude Code, waxaana loogu talagalay developer-rada iyo dadka AI-ga danaynaya ee dalka jooga.",
        "keywords": "Xayiraadda saaran Soomaaliya iyo muhiimadda Claude Af Soomaali · Awoodda Claude Code iyo farriinta Anthropic Af Soomaali · Codsi ku aaddan helitaanka Claude access ee Soomaaliya Af Soomaali",
        "chapters": 3
      }
    ]
  },
  {
    "id": "series-ai-news-reviews",
    "title": "AI News & Reviews",
    "description": "Model-lada cusub, tijaabooyin la sameeyay iyo isbarbardhig u dhexeeya qalabka AI-ga.",
    "videos": [
      {
        "slug": "gpt-6-waa-insane-daawo-adiga-yaabi-doone",
        "youtubeId": "LOP7x7EIevs",
        "title": "GPT-6 Waa Insane Daawo Adiga Yaabi Doone",
        "thumbnail": "/yt/vi/LOP7x7EIevs/hqdefault.jpg",
        "duration": "49 daqiiqo",
        "description": "Videogan waxaan ku falanqaynayaa GPT-6 ee ay OpenAI ku dhawaaqday kadib hype aad u weyn.",
        "keywords": "Hordhaca iyo Ku Dhawaaqista GPT-6 Af Soomaali · Bilowga Agentic Era iyo Kaalinta Claude Sonnet Af Soomaali · Tababarka Cusub iyo Awoodda Computer Use Af Soomaali · Istiraatiijiyadda Announcement-ka iyo Hype-ka OpenAI Af Soomaali · Tusaalaha Codex iyo Xawaaraha Computer Use Af Soomaali · Pre-training, Reinforcement Learning iyo Alignment Af Soomaali · Natiijooyinka Benchmarks-ka ARC-AGI iyo FrontierMath Af Soomaali · Helitaanka Model-ka iyo Qorshaha Soo Dejinta Af Soomaali · Isbarbardhigga Qiimaha iyo Token Efficiency Af Soomaali · Natiijooyinka Cybersecurity iyo CyberGym Af Soomaali · Game Development iyo Abuurista 3D Assets Af Soomaali · Isticmaalka Professional Work iyo Dukumentiyada Af Soomaali · Wadahadalka Caqliga leh iyo Fahamka Su'aalaha Af Soomaali · Qiimaynta Independent Analysis ee AI Models Af Soomaali · Isbarbardhigga Xawaaraha iyo Cost per Task Af Soomaali · Tusaalooyinka Unreal Engine, Blender iyo 3D World Af Soomaali · Gabagabada Muuqaalka iyo Fikradahaaga Af Soomaali",
        "chapters": 17
      },
      {
        "slug": "photoshop-waa-u-dhamaatay-google-nano-banana-wax-malaga-qaban-karo",
        "youtubeId": "Ni5gpiauSfo",
        "title": "Photoshop Waa U dhamaatay | Google Nano Banana Wax Malaga Qaban Karo.",
        "thumbnail": "/yt/vi/Ni5gpiauSfo/hqdefault.jpg",
        "duration": "32 daqiiqo",
        "description": "Video-gan waxaan tijaabinayaa model-ka cusub ee Google ee image editing-ka iyo image generation-ka, oo la yiraahdo Nano Banana ama Gemini 2.5 Flash.",
        "keywords": "Hordhac iyo tijaabada sawirka koowaad Af Soomaali · Gemini 2.5 Flash iyo awoodiisa cusub Af Soomaali · Sida loo isticmaalo Google AI Studio Af Soomaali · Diyaarinta prompt-yada ChatGPT iyo Cloud Af Soomaali · Tijaabada cinematic lighting transfer Af Soomaali · Beddelidda cimilada iyo iftiinka sawirka Af Soomaali · Sida dharka loogu beddelo sawirka (Virtual Try-on) Af Soomaali · Caqabadaha hortaagan model-ka iyo xal u helidda Af Soomaali · Isticmaalka ChatGPT si loo saxo prompt-ka Af Soomaali · Tijaabada guulaystay ee beddelidda dharka Af Soomaali · Farsamada crop-ka ee Pinterest laga soo qaado Af Soomaali · Tusaale kale oo ku saabsan habaynta dharka Af Soomaali · Sida sawirka looga dhigo mid dabiici ah (Natural) Af Soomaali · Gunaanad iyo qorshaha mustaqbalka ee barnaamijyada Af Soomaali",
        "chapters": 14
      },
      {
        "slug": "tips-and-tricks-gpt-astra-sidee-3d-projects-kan-iigu-dhisay",
        "youtubeId": "lXJYSC_7XAU",
        "title": "Tips And Tricks GPT-Astra Sidee 3D Projects-kan Iigu Dhisay",
        "thumbnail": "/yt/vi/lXJYSC_7XAU/hqdefault.jpg",
        "duration": "35 daqiiqo",
        "description": "Videogii hore waxaan idin tusay saddex project oo 3D ah ee aan GPT-6 Astra ku dhisay, markan waxaan idinla wadaagayaa prompt-yada, qalabka iyo habka aan u maray.",
        "keywords": "Hordhaca iyo 3D Projects-ka Af Soomaali · Claude iyo ChatGPT oo Fikrado laga Raadinayo Af Soomaali · Diyaarinta Tech Stack-ka Three.js iyo GSAP Af Soomaali · One-Shot Prompting Codex iyo GPT Af Soomaali · Kharashka iyo Habka Project-yada Cusub Af Soomaali · Isticmaalka OpenStreetMap iyo Real Data Af Soomaali · Diyaarinta Data-da Muqdisho 3D Map Af Soomaali · Tijaabinta Browser-ka iyadoo la Isticmaalayo Playwright Af Soomaali · Ku Xirista GPT mini iyo Three.js Routing Af Soomaali · Isticmaalka Seedance 2.5 Video Generation Af Soomaali · Kharashka Video Generation iyo GSAP Scroll Af Soomaali · Reverse Engineering MCP iyo Fast Iteration Af Soomaali · Natiijada Ugu Dambaysay iyo Gabagabo Af Soomaali",
        "chapters": 13
      },
      {
        "slug": "chatgpt-5-caadi-maahan-is-bar-bardhig-aan-ku-sameeyay-isaga-iyo-claude",
        "youtubeId": "jXTf0_QegkQ",
        "title": "ChatGPT-5 Caadi Maahan | Is bar bardhig aan ku sameeyay isaga iyo claude",
        "thumbnail": "/yt/vi/jXTf0_QegkQ/hqdefault.jpg",
        "duration": "1 saac",
        "description": "Videogan waxaan isbarbardhigayaa ChatGPT-5 iyo Claude anigoo Cursor ku wada isticmaalaya, waxaana loogu talagalay developer-ka doonaya inuu ogaado midka shaqadiisa u qabanaya.",
        "keywords": "Hordhac iyo Saamaynta AI ee Shaqada Developers-ka Af Soomaali · Fursadaha Cusub iyo Isbeddelka Tignoolajiyada Af Soomaali · Isbarbardhigga ChatGPT-5 iyo Claude (Cursor Setup) Af Soomaali · Diyaarinta Next.js Application-ka Af Soomaali · Bilaabidda Project-ka Kowaad: SaaS Landing Page Af Soomaali · Qiimaynta iyo Isbarbardhigga Design-ka Labada Model Af Soomaali · Xallinta Ciladaha iyo Hagaajinta CSS/Tailwind Af Soomaali · Bilaabidda Project-ka Labaad: Full Stack Task Board Af Soomaali · Qorista Code-ka iyo Isku-xirka Database-ka (MongoDB) Af Soomaali · Samaynta Authentication iyo JWT Tokens Af Soomaali · Tijaabinta Application-ka iyo Xallinta Ciladaha API-ga Af Soomaali · Natiijada Labada Project iyo Gunaanad Af Soomaali",
        "chapters": 12
      },
      {
        "slug": "maxaa-kala-socotaa-new-deepseek-harness",
        "youtubeId": "xkLzI99vKyI",
        "title": "Maxaa Kala Socotaa New DeepSeek Harness ?",
        "thumbnail": "/yt/vi/xkLzI99vKyI/hqdefault.jpg",
        "duration": "22 daqiiqo",
        "description": "Videogan waxaan ku sharxayaa waa maxay AI harness, kadibna waxaan tijaabinayaa harness-ka cusub ee DeepSeek soo saartay. Harness-ku waa sida shirkad walba ay tools-ka model-ka u implement-garaysay:",
        "keywords": "Waa maxay AI Harness? Af Soomaali · DeepSeek Harness iyo Qaabka uu u Shaqeeyo Af Soomaali · GitHub Clone iyo Installation-ka Local Repo Af Soomaali · Dooro Agent Mode iyo API Key Setup Af Soomaali · Configure-gareynta OpenRouter iyo Models Af Soomaali · Dhisidda Note-taking App ee Next.js Af Soomaali · La-socodka Tool Calls iyo Token Usage Af Soomaali · Run-gareynta App-ka iyo Kharashka Ku Baxay Af Soomaali · Tijaabinta iyo Review-ga Web App-ka Af Soomaali · Gabagabo iyo Qorshaha Isticmaalka Local Models Af Soomaali",
        "chapters": 10
      },
      {
        "slug": "openai-waa-la-qabtay-fable-meel-uma-socdo-grok-4-5-waa-halis-kimi-k3",
        "youtubeId": "k2BKO_cU-1s",
        "title": "OpenAI Waa La Qabtay | Fable Meel Uma Socdo | Grok 4.5 Waa Halis | Kimi K3",
        "thumbnail": "/yt/vi/k2BKO_cU-1s/hqdefault.jpg",
        "duration": "14 daqiiqo",
        "description": "Videogan waxaa ku jira wararkii toddobaadka ee AI-ga iyo technology-ga, waxaana loogu talagalay qof kasta oo la socda tartanka shirkadaha.",
        "keywords": "Hordhac iyo Tartanka Claude iyo Kimi K3 Af Soomaali · OpenAI Sol iyo Cadaadiska Limits-ka Anthropic Af Soomaali · Subscription Cusub: Limit-yada iyo $100 Credit Af Soomaali · Isbarbardhigga Qiimaha Claude iyo Fable Af Soomaali · Tartanka Frontier, Suuqa iyo Model Chinese Open Source Af Soomaali · Hardware Cusub ee OpenAI iyo Eedda Apple Af Soomaali · Fadeexadda Xogta xAI Grok 4.5 Af Soomaali · Google Gemini oo Dib-u-dhac ku Jira Af Soomaali · Dacwadda Apple iyo Shaqaalihii OpenAI Af Soomaali · Gunaanadka iyo Wararka Toddobaadka Af Soomaali",
        "chapters": 10
      },
      {
        "slug": "gemini-3-7-flash-ayaan-tijaabiyay-waana-amazing",
        "youtubeId": "iwmkML3FdWM",
        "title": "Gemini 3.7 Flash Ayaan Tijaabiyay Waana Amazing",
        "thumbnail": "/yt/vi/iwmkML3FdWM/hqdefault.jpg",
        "duration": "19 daqiiqo",
        "description": "Videogan waxaan tijaabinayaa Gemini 3.7 Flash oo Google soo saartay, waxaana ku isticmaalayaa AntiGravity. Su'aashu waa mid keliya:",
        "keywords": "Hordhaca Gemini 3.7 Flash iyo AntiGravity Af Soomaali · Diyaarinta prompt-ka design improvement Af Soomaali · Ku shaqeynta Gemini Flash gudaha AntiGravity Af Soomaali · Qiimeynta natiijada redesign-ka koowaad Af Soomaali · Dhisidda Resume App cusub from scratch Af Soomaali · Xulashada design theme iyo Next.js setup Af Soomaali · Tijaabinta Glassmorphic design Af Soomaali · Beddelidda style-ka iyo Luxury Swiss theme Af Soomaali · Natiijada kama dambaysta ah iyo gunaanad Af Soomaali",
        "chapters": 9,
        "blogHref": "/blog/gemini-3-7-flash-af-soomaali"
      },
      {
        "slug": "meta-spacex-oo-comeback-crazy-ah-sameeyeen",
        "youtubeId": "LMSnciKQJ2k",
        "title": "Meta & SpaceX oo Comeback CRAZY ah Sameeyeen",
        "thumbnail": "/yt/vi/LMSnciKQJ2k/hqdefault.jpg",
        "duration": "21 daqiiqo",
        "description": "Warbixin technology ah oo aan ku soo koobayo updates-ka toddobaadkan, waxaanan ugu talagalay developer-ka iyo qofka la socda tartanka models-ka.",
        "keywords": "Hordhaca Updates-ka Cusub ee Wiigan Af Soomaali · OpenAI: GPT-5.6 iyo GPT Work Af Soomaali · GPT Live iyo Tarjumaadda Duplex Codka Af Soomaali · Meta Muse 1.1 iyo Multimodal Reasoning Af Soomaali · SpaceX Grok 4.5 iyo Wadashaqaynta Cursor Af Soomaali · Qiimaha iyo Token Efficiency-ga Grok Af Soomaali · TypeScript 7 oo loo Wareejiyay Rust Af Soomaali · Bun oo Lagu Dib-u-Qoray Rust Af Soomaali · Vercel Native SDK iyo Gunaanad Af Soomaali",
        "chapters": 9
      },
      {
        "slug": "yaa-fiican-google-gemeni-grok-iyo-chatgpt-markay-timaado-sawir-sameynta",
        "youtubeId": "mB4FA8FfWOU",
        "title": "Yaa Fiican Google Gemeni , Grok iyo ChatGPT Markay Timaado Sawir Sameynta",
        "thumbnail": "/yt/vi/mB4FA8FfWOU/hqdefault.jpg",
        "duration": "22 daqiiqo",
        "description": "Videogan waxaan ku bilaabayaa wararkii AI-ga, kadibna waxaan tijaabo real ah ku samaynayaa sawir sameynta. Waxaa soo baxay Grok 4.6 oo awood ahaan sare u kacay isagoo isla qiimihii hore ku shaqeeya.",
        "keywords": "Grok 4.6 Updates iyo Awoodiisa Af Soomaali · Google DeepMind iyo Model-ka SL2T Af Soomaali · OpenAI iyo Model-ka GPT Cyber Af Soomaali · Grok Imagine iyo ChatGPT Thumbnail Design Af Soomaali · Tijaabada ChatGPT ee Sawir Sameynta Af Soomaali · Grok vs ChatGPT Image Editing Af Soomaali · Tijaabada Google Gemini Sawir Sameynta Af Soomaali · Isbarbardhigga ChatGPT, Grok iyo Gemini Af Soomaali · Talooyin Ku Saabsan Barashada Coding-ka Af Soomaali",
        "chapters": 9,
        "blogHref": "/blog/ai-sawir-sameynta-chatgpt-grok-gemini"
      },
      {
        "slug": "open-ai-new-model-ayay-soo-saartay-sol-maraykan-waa-kasoo-daray-markan",
        "youtubeId": "h7lU3tSA4V0",
        "title": "Open AI New Model Ayay Soo Saartay Sol | Maraykan Waa Kasoo Daray Markan",
        "thumbnail": "/yt/vi/h7lU3tSA4V0/hqdefault.jpg",
        "duration": "6 daqiiqo",
        "description": "Videogan waxaan ku falanqaynayaa wararkii toddobaadka ee AI-ga, waxaana loogu talagalay qof kasta oo la socda meesha suuqu u socdo. OpenAI waxay soo saartay saddex model oo cusub: Sol, Tera iyo Luna.",
        "keywords": "Hordhac: Maraykanka oo AI model kasta fasax u baahan (OpenAI: Sol, Tera, Luna) Af Soomaali · Sol: model-ka OpenAI ugu awoodda badan & awoodda agentic-ga Af Soomaali · Sharciga Maraykanka: model lama fasixi karo la'aantood Af Soomaali · Shiinaha (Zhipu AI) oo Mythos ku soo saaray Af Soomaali · Dario, dowladda & Apple oo qiimaha kor u qaaday Af Soomaali · iPhone-ka September & suuqa hardware-ka oo adkaaday Af Soomaali · Benchmark: Sol vs Gemini 3.1 & Google oo dib u dhacay Af Soomaali · Gunaanad: Mythos subscription iyo salaan Af Soomaali",
        "chapters": 8
      },
      {
        "slug": "fable-1-5-lama-isticmaali-karo",
        "youtubeId": "lxqttzjwaXc",
        "title": "Fable 1.5 Lama Isticmaali Karo",
        "thumbnail": "/yt/vi/lxqttzjwaXc/hqdefault.jpg",
        "duration": "12 daqiiqo",
        "description": "Videogan waxaan ku falanqaynayaa models-ka cusub ee ay Anthropic soo saartay, Fable iyo Mythos oo halmar la soo bandhigay, Mythos-ka oo ah kan ugu weyn.",
        "keywords": "Hordhaca model-ka cusub ee Anthropic Af Soomaali · Benchmark-yada iyo awoodda Fable Af Soomaali · Tijaabada Fable iyo dhibaatada limit-ka Af Soomaali · Fahamka Tokenizer iyo xisaabinta tokens Af Soomaali · Safeguards-ka iyo xakamaynta model-ka Af Soomaali · Isticmaalka Fable Orchestrator ahaan Af Soomaali · Talooyinka isticmaalka iyo gabagabada Af Soomaali",
        "chapters": 7
      },
      {
        "slug": "openai-iyo-cursor-waa-u-kala-dhamaatay-space-x-iyo-elon-ayaan-sabab-u-ah",
        "youtubeId": "X9v2fsH_WWo",
        "title": "OpenAI Iyo Cursor Waa U kala Dhamaatay | Space X Iyo Elon Ayaan Sabab u ah",
        "thumbnail": "/yt/vi/X9v2fsH_WWo/hqdefault.jpg",
        "duration": "10 daqiiqo",
        "description": "Videogan waxaan kaga hadlayaa OpenAI oo sheegtay inay xiriirka u jari doonto Cursor, kaddib markii SpaceX ay la wareegtay shirkadda.",
        "keywords": "Hordhaca: Khilaafka OpenAI, SpaceX iyo Cursor Af Soomaali · Sida uu u shaqeeyo heshiiska Cursor iyo models-ka AI Af Soomaali · Sababta SpaceX u iibsatay Cursor iyo faa'iidada xogta Af Soomaali · Taariikhda dagaalka Elon Musk iyo Sam Altman Af Soomaali · Data Distillation iyo sababta OpenAI xiriirka u jarayso Af Soomaali · Saamaynta ay ku yeelanayso programmers-ka Cursor isticmaala Af Soomaali · Model-ka Astra iyo gunaanadka muuqaalka Af Soomaali",
        "chapters": 7
      },
      {
        "slug": "waa-maxay-deepseek-oo-openai-iyo-maraykanba-ka-qaylisiiyay",
        "youtubeId": "TwhaqlfiBnE",
        "title": "Waa Maxay DeepSeek? Oo OPENAI Iyo Maraykanba ka Qaylisiiyay",
        "thumbnail": "/yt/vi/TwhaqlfiBnE/hqdefault.jpg",
        "duration": "12 daqiiqo",
        "description": "Videogan waxaan ku qeexayaa waa maxay DeepSeek iyo waxa uu kaga duwan yahay models-kii hore, waxaana loogu talagalay qofka rabo inuu AI-ga computer-kiisa ku run-gareeyo.",
        "keywords": "Hordhaca DeepSeek iyo Local AI Af Soomaali · Parameters-ka Model-ka iyo Hardware-ka Af Soomaali · Sida Reasoning iyo Thinking Mode u Shaqeeyaan Af Soomaali · Saamaynta DeepSeek ku yeelatay OpenAI iyo NVIDIA Af Soomaali · Qorista Code React adoo Isticmaalaya Ollama Af Soomaali · Tijaabinta Su'aalaha Guud iyo VRAM Af Soomaali · Casharrada Live-ka ah iyo Gabagabada Af Soomaali",
        "chapters": 7,
        "blogHref": "/blog/waa-maxay-deepseek"
      },
      {
        "slug": "13-billion-dollar-ayay-nvidia-kula-wareegtay-huggingface",
        "youtubeId": "uzuhAB0dk7k",
        "title": "$13 Billion Dollar Ayay Nvidia Kula Wareegtay Huggingface !",
        "thumbnail": "/yt/vi/uzuhAB0dk7k/hqdefault.jpg",
        "duration": "5 daqiiqo",
        "description": "Videogan waxaan kaga hadlayaa war weyn oo ka soo baxay suuqa AI-ga: shirkadda NVIDIA ayaa la wareegtay Hugging Face.",
        "keywords": "Heshiiska ay NVIDIA kula wareegtay Hugging Face Af Soomaali · Waa maxay doorka shirkadda NVIDIA? Af Soomaali · Hugging Face iyo open source models Af Soomaali · Qiimaha heshiiska iyo tirakoobka Hugging Face Af Soomaali · Mustaqbalka Hugging Face iyo NVIDIA Af Soomaali · Gabagabada iyo chips-ka NVIDIA ee laptops-ka Af Soomaali",
        "chapters": 6
      },
      {
        "slug": "chatgpt-6-oo-hack-gareeyay-huggenface-opus-5-waa-soo-baxay",
        "youtubeId": "GzBMklKURlo",
        "title": "CHATGPT 6 oo Hack Gareeyay Huggenface | Opus 5 Waa Soo Baxay",
        "thumbnail": "/yt/vi/GzBMklKURlo/hqdefault.jpg",
        "duration": "9 daqiiqo",
        "description": "Warbixin technology ah oo toddobaadle ah, waxaanan ku soo koobayaa laba war oo waaweyn. Waxaa loogu talagalay developer-ka iyo qofka la socda halka AI-gu marayo.",
        "keywords": "Hordhaca wararka AI ee toddobaadkan Af Soomaali · Sida GPT-6 u jabsaday Hugging Face Af Soomaali · Isdifaaca Hugging Face iyo open-source models Af Soomaali · Soo bixitaanka model-ka cusub ee Opus 5 Af Soomaali · Isbarbardhigga awoodda Opus 5 iyo GPT-4o Af Soomaali · Gabagabo iyo talooyinka isticmaalka Af Soomaali",
        "chapters": 6
      },
      {
        "slug": "claude-fable-5-ayaan-tijaabiyay",
        "youtubeId": "LeJdrMlaE1c",
        "title": "Claude Fable 5 Ayaan Tijaabiyay",
        "thumbnail": "/yt/vi/LeJdrMlaE1c/hqdefault.jpg",
        "duration": "13 daqiiqo",
        "description": "Video-gan waxaan idinla wadaagayaa tijaabo aan ku sameeyay model-ka cusub ee Anthropic ee Fable 5. Waxaan ugu talagalay developer-ka doonaya inuu ogaado waxa model-ku shaqo ahaan qaban karo.",
        "keywords": "Horudhac iyo Sharaxaadda Claude Fable 5 Af Soomaali · Qiimaha API-ga iyo Tokens-ka Anthropic Af Soomaali · Isbarbardhigga Benchmarks-ka Claude iyo GPT-5 Af Soomaali · Tijaabada Shaqada Project-ka iyo Agentic Coding Af Soomaali · Isticmaalka Computer Use iyo API Keys Af Soomaali · Course-ka Claude Code iyo Gabagabo Af Soomaali",
        "chapters": 6
      },
      {
        "slug": "gpt-6-astra-waa-next-level-projects-kan-isagaa-dhisay",
        "youtubeId": "xeYcxUyzb30",
        "title": "GPT-6-Astra Waa Next Level Projects-kan Isagaa Dhisay",
        "thumbnail": "/yt/vi/xeYcxUyzb30/hqdefault.jpg",
        "duration": "11 daqiiqo",
        "description": "Isbuucan waxaa lagu dhawaaqay GPT-6 Astra, wuxuuna qabsaday wada-hadalka mainstream-ka oo dhan.",
        "keywords": "Hordhaca GPT-6 Astra iyo awoodiisa 3D Af Soomaali · Project 1: Website-ka cabitaanka iyo animation-ka Three.js Af Soomaali · Project 2: Khariidadda 3D ee magaalada Muqdisho Af Soomaali · Project 3: Website-ka 3D animation ee kafeega Af Soomaali · Faa'iidada 3D assets iyo tayada GPT Af Soomaali · Gunaanad iyo casharrada soo socda Af Soomaali",
        "chapters": 6
      },
      {
        "slug": "sakana-ai-model-cusub-oo-ku-awood-ah-fable-5-iyo-mythos-5-ayaa-soo-baxay-fugu",
        "youtubeId": "13Wv_9Yetsc",
        "title": "Sakana AI | Model Cusub Oo Ku Awood Ah Fable 5 iyo Mythos 5 Ayaa Soo Baxay ! | Fugu Model",
        "thumbnail": "/yt/vi/13Wv_9Yetsc/hqdefault.jpg",
        "duration": "12 daqiiqo",
        "description": "Warbixin AI ah oo aan ugu talagalay qofka la socda models-ka cusub iyo developer-ka doonaya inuu ogaado kan shaqadiisa ku habboon.",
        "keywords": "Hordhac iyo Model-ka Sakana AI (Fugu) Af Soomaali · Habka Shaqada Sakana AI iyo Multi-Agent Af Soomaali · Moodallada Open Source ee Shiinaha (GLM-5 & Moonshot) Af Soomaali · Tijaabada Moonshot iyo Dhismaha App-ka Telegram Af Soomaali · Sababta loo Xiray Fable 5 iyo Mythos Af Soomaali · Muhiimadda Open Source AI iyo Gabagabo Af Soomaali",
        "chapters": 6
      },
      {
        "slug": "ai-ma-ina-dili-doontaa-digniinta-cilmi-baare-ka-tagay-anthropic",
        "youtubeId": "x9xp_cQ_WQ0",
        "title": "AI Ma Ina Dili Doontaa? Digniinta Cilmi-baare Ka Tagay Anthropic",
        "thumbnail": "/yt/vi/x9xp_cQ_WQ0/hqdefault.jpg",
        "duration": "12 daqiiqo",
        "description": "Videogan waxaan kaga hadlayaa war maalmahan adduunka gilgishay: cilmi-baare ka shaqayn jiray Anthropic ayaa 8-dii September shaqadii iska casilay, isagoo digniin cad dadweynaha u soo bandhigay.",
        "keywords": "Hordhac: Digniinta khatarta AI Af Soomaali · Is-casilaadda Jacob Coxon ee Anthropic Af Soomaali · Saadaasha cabsida leh ee 10-ka sano Af Soomaali · Jawaabta Dario Amodei iyo xakamaynta AI Af Soomaali · Qawaaniinta caalamiga ah iyo falcelinta shirkadaha Af Soomaali",
        "chapters": 5
      },
      {
        "slug": "anthropic-watermark-waa-halis-xoogan",
        "youtubeId": "8wTEXD5UHUc",
        "title": "Anthropic Watermark Waa Halis Xoogan",
        "thumbnail": "/yt/vi/8wTEXD5UHUc/hqdefault.jpg",
        "duration": "6 daqiiqo",
        "description": "Videogan waxaan kaga hadlayaa go'aanka Anthropic ku dhawaaqday ee ah in jawaabaha model-ladeedu soo saaraan lagu dari doono watermark.",
        "keywords": "Hordhac: Anthropic Watermark iyo shuruucda EU Af Soomaali · Waa maxay AI Watermarking? Af Soomaali · Tusaale: AI content iyo baraha bulshada Af Soomaali · Xalka: Sida looga saaro watermark-ka Af Soomaali · Gemini SynthID iyo gabagabo Af Soomaali",
        "chapters": 5
      },
      {
        "slug": "google-waxay-soo-fasaxday-gemini-3-8-flash-waana-speed-waali-ah",
        "youtubeId": "RB6UZi-bC2Q",
        "title": "Google Waxay Soo Fasaxday Gemini 3.8 Flash Waana Speed Waali Ah",
        "thumbnail": "/yt/vi/RB6UZi-bC2Q/hqdefault.jpg",
        "duration": "3 daqiiqo",
        "description": "Videogan waxaan kaga hadlayaa model-ka cusub ee Gemini 3.8 ee ay Google soo saartay.",
        "keywords": "Hordhaca Model-ka Cusub ee Gemini 3.8 Flash Af Soomaali · Fahamka Reasoning-ka iyo Isbarbardhigga Models-ka Af Soomaali · Qiimaha Token-ka ee Input iyo Output Af Soomaali · Isticmaalka Google Products iyo Adeegyada Kale Af Soomaali · Gabagabada iyo Talooyinka Guud Af Soomaali",
        "chapters": 5
      },
      {
        "slug": "ox-alpha-glm-3-5-flash-waa-opus-killer-anthropic-iyo-openai-war-baa-u-yaala",
        "youtubeId": "E95e7Twoi2k",
        "title": "Ox Alpha | GLM 3.5 Flash Waa Opus Killer Anthropic Iyo OpenAI War Baa U Yaala",
        "thumbnail": "/yt/vi/E95e7Twoi2k/hqdefault.jpg",
        "duration": "4 daqiiqo",
        "description": "Videogan waxaan ka warramayaa model cusub oo shirkadda Shiinaha ee Zhipu AI soo saartay. Maalmahaan waxaa lagu naanaysay OX Alpha, magaciisa rasmiga ahna waa GLM 3.5 Flash.",
        "keywords": "Hordhaca GLM 3.5 Flash (Ox Alpha) Af Soomaali · Chinese AI Chips iyo Tartanka Models-ka Af Soomaali · Natiijooyinka TerminalBench iyo Tijaabada Project-ka Af Soomaali · Qiimaha Raqiiska ah ee Token-nada Af Soomaali · Faa'iidada Coding-ka iyo Gabagabada Af Soomaali",
        "chapters": 5
      },
      {
        "slug": "stripe-waxay-iibsatay-openrouter-8b-dollar-ayuu-ahaa-deal-ka",
        "youtubeId": "uCFwgDYWPxA",
        "title": "Stripe waxay iibsatay OpenRouter ! 8B Dollar Ayuu Ahaa Deal-ka",
        "thumbnail": "/yt/vi/uCFwgDYWPxA/hqdefault.jpg",
        "duration": "3 daqiiqo",
        "description": "Videogan waxaan kaga hadlayaa war cusub oo suuqa teknoolojiyadda ka soo baxay: shirkadda Stripe ayaa la wareegtay OpenRouter.",
        "keywords": "Stripe oo la wareegtay OpenRouter Af Soomaali · Qaabka ay OpenRouter u shaqayso Af Soomaali · Faa'iidada hal API key iyo models-ka Af Soomaali · Heshiiska $8 Bilyan ee Stripe Af Soomaali · Muhiimadda heshiiska iyo gunaanad Af Soomaali",
        "chapters": 5
      },
      {
        "slug": "claude-fable-5-hawadaa-laga-saaray",
        "youtubeId": "L00GtKwd4TU",
        "title": "Claude Fable 5 Hawadaa Laga Saaray !",
        "thumbnail": "/yt/vi/L00GtKwd4TU/hqdefault.jpg",
        "duration": "5 daqiiqo",
        "description": "Warbixin gaaban oo aan ku sheegayo in model-ka Fable 5 ee Anthropic la joojiyay, iyo sababta. Waxaan ugu talagalay qofka isticmaalaya models-ka Claude oo la yaabay markii access-kii ka go'ay.",
        "keywords": "Joojinta Claude Fable 5 iyo sababta Af Soomaali · Ciladda jailbreak-ka iyo doorka Amazon Af Soomaali · Sharciyada AI ee Yurub iyo Maraykanka Af Soomaali · Mustaqbalka AI research iyo gunaanad Af Soomaali",
        "chapters": 4
      },
      {
        "slug": "openai-stops-advancing-new-model",
        "youtubeId": "4Uf5QldAHSw",
        "title": "OpenAI Stops Advancing new model",
        "thumbnail": "/yt/vi/4Uf5QldAHSw/hqdefault.jpg",
        "duration": "3 daqiiqo",
        "description": "Videogan waxaan kaga hadlayaa OpenAI oo ku dhawaaqday inay si ku meel gaar ah u joojisay training-ka models-ka, ugu yaraanna laba isbuuc oo kale.",
        "keywords": "OpenAI oo joojisay training-ka models-ka Af Soomaali · Sababta safety-ga iyo model-ka Astra Af Soomaali · Tartanka shirkadaha Shiinaha iyo uncensored models Af Soomaali",
        "chapters": 3
      }
    ]
  },
  {
    "id": "series-career-learning",
    "title": "Career & Learning",
    "description": "Xirfadaha tech-ka, sida saxda ah ee wax loo barto, iyo meesha AI-gu ku leeyahay shaqada.",
    "videos": [
      {
        "slug": "ai-ayaa-shaqadaada-la-wareegi-doonta-hadii-aadan-xirfadahan-lahayn",
        "youtubeId": "pQuz7QmSmxM",
        "title": "AI Ayaa Shaqadaada La Wareegi Doonta Hadii Aadan Xirfadahan Lahayn .",
        "thumbnail": "/yt/vi/pQuz7QmSmxM/hqdefault.jpg",
        "duration": "32 daqiiqo",
        "description": "Videogan waxaan ka hadlayaa toban soft skill oo lagaa rabo xilliga AI-ga, waxaana loogu talagalay qof kasta oo tech-ga ku jira. Hard skill-ka waad leedahay:",
        "keywords": "Horudhaca Soft Skills-ka Xilliga AI Af Soomaali · Xirfadda 1aad: Communication Af Soomaali · Xirfadda 2aad: Critical Thinking Af Soomaali · Xirfadda 3aad: Adaptability Af Soomaali · Xirfadda 4aad: Emotional Intelligence Af Soomaali · Xirfadda 5aad: Creativity Af Soomaali · Xirfadda 6aad: Collaboration Af Soomaali · Xirfadda 7aad: Decision Making Af Soomaali · Xirfadda 8aad: Learning Mindset Af Soomaali · Xirfadda 9aad: Qaadashada Masuuliyadda Af Soomaali · Xirfadda 10aad: Prompt Engineering Af Soomaali · Gabagabada iyo Muhiimadda Xirfadahan Af Soomaali",
        "chapters": 12,
        "blogHref": "/blog/soft-skills-xilliga-ai"
      },
      {
        "slug": "hadda-baro-xirfadahaan-2026",
        "youtubeId": "iZcRCEVeKao",
        "title": "Hadda Baro Xirfadahaan 2026",
        "thumbnail": "/yt/vi/iZcRCEVeKao/hqdefault.jpg",
        "duration": "21 daqiiqo",
        "description": "Videogan waxaan ku soo bandhigayaa sagaal xirfadood oo aan aaminsanahay inay muhiim yihiin xilliga AI-ga, waxaana loogu talagalay qofka is weydiinaya halka uu xoogga saaro.",
        "keywords": "Hordhac iyo 9-ka Xirfadood ee Tech-ka Af Soomaali · Coding Fundamentals iyo Problem Solving Af Soomaali · AI Engineering iyo API Integrations Af Soomaali · Machine Learning iyo Model Tuning Af Soomaali · Data Engineering iyo Data Pipelines Af Soomaali · Data Science iyo Analytics Af Soomaali · Cloud Computing iyo Infrastructure Design Af Soomaali · MLOps iyo Continuous Integration (CI/CD) Af Soomaali · Cyber Security iyo Threat Analysis Af Soomaali · Blockchain iyo Smart Contracts Af Soomaali · Gunaanad iyo Doorashada Path-kaaga Af Soomaali",
        "chapters": 11,
        "blogHref": "/blog/xirfadaha-2026-xilliga-ai"
      },
      {
        "slug": "ha-bilaabin-ganacsi-adoon-daawan-video-gaan",
        "youtubeId": "tqo1QX0jPoc",
        "title": "Ha Bilaabin Ganacsi Adoon Daawan Video-gaan",
        "thumbnail": "/yt/vi/tqo1QX0jPoc/hqdefault.jpg",
        "duration": "20 daqiiqo",
        "description": "Videogan waxaan ka jawaabayaa su'aasha ah: ma shaqaale baad noqotaa mise ganacsi baad bilaabataa? Waxaan uga hadlayaa khibrad ahaan, maadaama aan afar sano shirkad ka shaqeeyay, afar sano kalena Dugsi...",
        "keywords": "Shaqaale mise Ganacsi? Af Soomaali · Caqabadaha bilaabista ganacsi cusub Af Soomaali · Khatarta ku nagaanshaha shaqaalenimada Af Soomaali · Muhiimadda qaadashada calculated risk Af Soomaali · Farqiga shaqaalaha iyo milkiilaha ganacsiga Af Soomaali · Bilaabista digital business iyo social media Af Soomaali · Xalaalnimada ganacsiga iyo doorashada platform-ka Af Soomaali · SaaS business iyo talooyinka gabagabada Af Soomaali",
        "chapters": 8
      },
      {
        "slug": "challeng-gii-waa-bilowday-diyaar-matahay-noloshaada-badal-3-da-bil-sanadka-ka",
        "youtubeId": "F29iYU2_f_k",
        "title": "Challeng-gii Waa Bilowday Diyaar Matahay? | Noloshaada Badal 3-da Bil Sanadka Ka Harsan",
        "thumbnail": "/yt/vi/F29iYU2_f_k/hqdefault.jpg",
        "duration": "14 daqiiqo",
        "description": "Video-gan waxaan ku dhawaaqayaa challenge saddex bilood ah oo aan ugu talagalay qof kasta oo goals dejistay sannadka bilowgiisa oo aan weli gaarin.",
        "keywords": "Hordhaca challenge-ka 3-da bilood Af Soomaali · Dejinta hadafyada iyo Discord channel Af Soomaali · Hadafka 1-aad: Dhamaystirka koorsada Dugsiiye Af Soomaali · Hadafka 2-aad: Caafimaadka jirka iyo dhisidda murqaha Af Soomaali · Natiijada cabbiraadda jirka iyo metabolic age Af Soomaali · Dejinta hadaf dhab ah oo la gaari karo Af Soomaali · Sida loogu soo biiro challenge-ka iyo isxisaabtanka Af Soomaali",
        "chapters": 7
      },
      {
        "slug": "maxaa-helay-developers-ka-somalida-maxaa-loo-waayay-qof-somali-ah-oo-dhisa-app",
        "youtubeId": "leQcHP9nhqI",
        "title": "Maxaa Helay Developers-ka Somalida | Maxaa Loo Waayay Qof Somali ah Oo Dhisa App Caalami ah ?",
        "thumbnail": "/yt/vi/leQcHP9nhqI/hqdefault.jpg",
        "duration": "10 daqiiqo",
        "description": "Videogan waxaan kaga jawaabayaa post uu qoray Maslax Maxamuud oo Somali Programmers ku weydiiyay maxaa loo waayay hal app oo Soomaali leeyahay oo masraxa caalamka ka muuqda.",
        "keywords": "Maxaa loo waayay app Soomaali oo caalami ah? Af Soomaali · Horumarka dhalinyarada Soomaalida ee dhanka tech-ga Af Soomaali · Cabsida la xiriirta in fikraddaada la xado Af Soomaali · Caqabadda dhisidda business caalami ah Af Soomaali · Dhibaatada payment-ka caalamiga ah ee Soomaaliya Af Soomaali · Tusaalooyinka Soomaalida guuleysatay ee diaspora-da Af Soomaali · Gabagabo iyo xalka caqabadaha jira Af Soomaali",
        "chapters": 7
      },
      {
        "slug": "2026-coding-hadaa-baranaysid-video-gaan-daawo",
        "youtubeId": "6lL7mXCLQz0",
        "title": "2026 Coding Hadaa Baranaysid Video-gaan Daawo",
        "thumbnail": "/yt/vi/6lL7mXCLQz0/hqdefault.jpg",
        "duration": "10 daqiiqo",
        "description": "Video-gan waxaan uga jawaabayaa su'aasha ah: 2026 weli ma mudan tahay in coding la barto? Waxaan ugu talagalay qofka ka welwelsan in AI-gu qorista code-ka la wareego, iyo ardayga hadda go'aan ka gaara...",
        "keywords": "Muhiim ma tahay barashada coding-ka 2026? Af Soomaali · Sida developers-ku ula qabsanayaan AI tools Af Soomaali · Coding-ku waa problem solving iyo logic Af Soomaali · Hab-fakirka xallinta dhibaatada iyo AI Af Soomaali · Shirkadaha AI oo diiradda saaray coding-ka Af Soomaali · Gabagabo iyo muhiimadda problem-solving Af Soomaali",
        "chapters": 6,
        "blogHref": "/blog/coding-2026-ma-mudan-tahay"
      },
      {
        "slug": "programming-ka-si-khaldan-ayaad-u-barataa-sida-saxan-aan-kuu-sheego",
        "youtubeId": "SXiurWz-ack",
        "title": "Programming-ka Si Khaldan Ayaad U barataa | Sida Saxan aan Kuu Sheego !",
        "thumbnail": "/yt/vi/SXiurWz-ack/hqdefault.jpg",
        "duration": "9 daqiiqo",
        "description": "Videogan waxaan kaga hadlayaa khaladaadka ugu waaweyn ee dadka programming-ka baranaya sameeyaan, waxaana loogu talagalay qofka sanad ama laba sano wax baranayay haddana wax dhisi kari waayay.",
        "keywords": "Khaladaadka ugu weyn ee barashada programming-ka Af Soomaali · Sida saxda ah ee note loo qaato Af Soomaali · Fahamka concept-ka iyo logic-ga luuqadaha Af Soomaali · Tababarka maskaxda iyo dhisidda discipline-ka Af Soomaali · Gunaanadka iyo talooyinka ugu dambeeya Af Soomaali",
        "chapters": 5,
        "blogHref": "/blog/sida-saxda-ah-loo-barto-programming"
      }
    ]
  },
  {
    "id": "series-kale",
    "title": "Kale",
    "description": "Videoyo kale oo ku saabsan barnaamijyada Dugsiiye iyo isticmaalka AI-ga.",
    "videos": [
      {
        "slug": "isticmaal-ai-open-source-walba-qaab-free-ah",
        "youtubeId": "JQfo_o5X_rY",
        "title": "Isticmaal AI Open Source Walba Qaab Free Ah",
        "thumbnail": "/yt/vi/JQfo_o5X_rY/hqdefault.jpg",
        "duration": "28 daqiiqo",
        "description": "Cashar gacan-ku-hays ah oo aan ku tusayo sida aad models open source ah kombiyuutarkaaga ugu run-gareyn karto, waana bilaash.",
        "keywords": "Hordhaca Open Source AI Models Af Soomaali · Noocyada Moodallada iyo Cabirka RAM-ka Af Soomaali · Soo Dejinta iyo Rakibidda Ollama Af Soomaali · Ku Run-gareynta DeepSeek-R1 Terminal-ka Af Soomaali · Fahamka Ollama API ee Developers-ka Af Soomaali · Ku Xiridda Ollama Interface-ka Chatbox Af Soomaali · Habeynta Environment Variables ee Windows Af Soomaali · Tijaabinta DeepSeek adoo Adeegsanaya Chatbox Af Soomaali · Fahamka POST Request ee Ollama API Af Soomaali · Tijaabinta API-ga iyadoo la Adeegsanayo Postman Af Soomaali · Fahamka Streaming Response vs JSON Response Af Soomaali · Gunaanad iyo Qorshaha Casharka Cursor Af Soomaali",
        "chapters": 12
      },
      {
        "slug": "ogow-wax-walba-oo-ku-saabsan-programka-full-stack-sofware-engineer-ai",
        "youtubeId": "VG3qXkIpSBk",
        "title": "Ogow Wax Walba Oo Ku Saabsan Programka Full Stack Sofware Engineer + AI",
        "thumbnail": "/yt/vi/VG3qXkIpSBk/hqdefault.jpg",
        "duration": "19 daqiiqo",
        "description": "Videogan waxaan si faahfaahsan uga hadlayaa barnaamijka Full Stack Software Engineer + AI, waxaana loogu talagalay qofka doonaya jadwal cad iyo hagid isku xiran.",
        "keywords": "Hordhaca Barnaamijka Full Stack + AI Af Soomaali · Shuruudaha laga rabo ardayga Af Soomaali · Aasaaska Webka, HTML iyo CSS Af Soomaali · JavaScript, Git iyo GitHub Af Soomaali · Databases iyo Back-end Development Af Soomaali · Barashada AI, LLMs iyo RAG Systems Af Soomaali · Docker, Cloud AWS iyo React Native Af Soomaali · Macallinka barnaamijka iyo khibraddiisa Af Soomaali · Qiimaha barnaamijka iyo Pricing Plans Af Soomaali · Xulashada qorshayaasha iyo xiriirka Dugsiiye Af Soomaali",
        "chapters": 10
      },
      {
        "slug": "wax-walba-oo-ku-saabsan-program-ka-full-stack-software-engineer",
        "youtubeId": "M6B3GPe4pIw",
        "title": "Wax Walba oo Ku Saabsan Program-ka Full Stack Software Engineer",
        "thumbnail": "/yt/vi/M6B3GPe4pIw/hqdefault.jpg",
        "duration": "20 daqiiqo",
        "description": "Video-gan waxaan kaga jawaabayaa su'aalaha ugu badan ee laga qabo barnaamijka Full Stack Software Engineer:",
        "keywords": "Hordhaca barnaamijka Full Stack Software Engineer Af Soomaali · Shuruudaha laga rabo qofka bilaabaya Af Soomaali · Fursadaha shaqo ee barnaamijkan ka dib Af Soomaali · Manhajka barnaamijka iyo heerarka waxbarasho Af Soomaali · Advanced Full Stack, Mobile iyo AI Development Af Soomaali · Muhiimadda maareynta waqtiga ardayga Af Soomaali · Habka casharrada loo qaadanayo iyo mentorship-ka Af Soomaali · Qiimaha barnaamijka, Plans-ka iyo Discount-ka Af Soomaali · Habka isdiiwaangelinta iyo bixinta lacagta Af Soomaali · Su'aalaha guud iyo xiriirka Dugsiiye Af Soomaali",
        "chapters": 10
      },
      {
        "slug": "noqo-ai-engineer-full-stack-somali-ai-engineer-mentorship",
        "youtubeId": "ABDCXO-zrxQ",
        "title": "Noqo AI Engineer | Full Stack Somali AI Engineer Mentorship",
        "thumbnail": "/yt/vi/ABDCXO-zrxQ/hqdefault.jpg",
        "duration": "10 daqiiqo",
        "description": "Video-gan waxaan ku sharraxayaa wax walba oo ku saabsan barnaamijka Full-Stack AI Engineer ee Dugsiiye, iyo cidda loo talagalay.",
        "keywords": "Hordhaca barnaamijka Full-Stack AI Engineer Af Soomaali · Barashada Web Development iyo Frameworks Af Soomaali · AI Integration, Models iyo AI Agents Af Soomaali · Agentic Coding with Cursor iyo Claude Code Af Soomaali · Mentorship-ka iyo qiimaha barnaamijka Af Soomaali · Gunaanadka iyo xiriirka WhatsApp-ka Af Soomaali",
        "chapters": 6
      },
      {
        "slug": "ai-waa-ku-wareeray-xal-ayaan-kuu-hayaa",
        "youtubeId": "v1yZ20snC6Q",
        "title": "AI Waa Ku Wareeray | Xal Ayaan Kuu Hayaa",
        "thumbnail": "/yt/vi/v1yZ20snC6Q/hqdefault.jpg",
        "duration": "10 daqiiqo",
        "description": "Videogan waxaan ka jawaabayaa su'aal uu i soo diray qof multimedia iyo digital skills ku jira oo doonaya roadmap uu AI-ga kula jaan qaado.",
        "keywords": "Hordhac iyo Jahawareerka AI Af Soomaali · Doorashada Tools-ka Kugu Habboon Af Soomaali · Ka Digtoonaanta Hype-ka Af Soomaali · Focus Saarista Field-kaaga Af Soomaali · Talooyinka Ugu Dambeeya iyo Gunaanad Af Soomaali",
        "chapters": 5
      }
    ]
  }
];
