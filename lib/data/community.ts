export type CommunityPost = {
  id: string;
  author: { name: string; href: string; avatar?: string; initials?: string; verified?: boolean };
  time: string;
  bodyHtml: string;
  media?: { layout: "single" | "pair" | "trio" | "quad"; images: string[]; alt: string; more?: number };
  tags: string[];
  likes: number;
  comments: number;
  likedBy?: string;
  commentsLabel: string;
};

export type TagCount = { tag: string; count?: number };

export const trendingTags: TagCount[] = [
  {
    "tag": "nextjs",
    "count": 10
  },
  {
    "tag": "javascript",
    "count": 9
  },
  {
    "tag": "frontend",
    "count": 8
  },
  {
    "tag": "eid-al-adha",
    "count": 8
  },
  {
    "tag": "reactjs",
    "count": 6
  }
];

export const categoryGroups: { title: string; items: TagCount[] }[] = [
  {
    "title": "Special Occasions",
    "items": [
      {
        "tag": "demo-days",
        "count": 3
      },
      {
        "tag": "demo-days-spring"
      },
      {
        "tag": "demo-days-fall"
      },
      {
        "tag": "demo-days-winter"
      },
      {
        "tag": "eid-mubarak"
      },
      {
        "tag": "eid-al-adha",
        "count": 8
      },
      {
        "tag": "ramadan"
      },
      {
        "tag": "muharram"
      },
      {
        "tag": "mawlid"
      },
      {
        "tag": "happy-new-year"
      },
      {
        "tag": "independence-day"
      },
      {
        "tag": "graduation",
        "count": 2
      },
      {
        "tag": "birthday"
      },
      {
        "tag": "anniversary"
      },
      {
        "tag": "back-to-school"
      },
      {
        "tag": "summer-break",
        "count": 2
      },
      {
        "tag": "winter-holidays"
      }
    ]
  },
  {
    "title": "Project Showcase",
    "items": [
      {
        "tag": "demo"
      },
      {
        "tag": "project-showcase"
      },
      {
        "tag": "portfolio"
      },
      {
        "tag": "mvp"
      },
      {
        "tag": "prototype"
      },
      {
        "tag": "hackathon"
      },
      {
        "tag": "side-project"
      },
      {
        "tag": "open-source"
      },
      {
        "tag": "code-review"
      },
      {
        "tag": "beta-testing"
      },
      {
        "tag": "launch"
      },
      {
        "tag": "case-study"
      }
    ]
  },
  {
    "title": "Community",
    "items": [
      {
        "tag": "collaboration"
      },
      {
        "tag": "events"
      },
      {
        "tag": "learning"
      },
      {
        "tag": "networking"
      },
      {
        "tag": "mentorship"
      },
      {
        "tag": "pair-programming"
      },
      {
        "tag": "code-buddy"
      },
      {
        "tag": "study-group"
      },
      {
        "tag": "meetup"
      },
      {
        "tag": "webinar"
      }
    ]
  },
  {
    "title": "General",
    "items": [
      {
        "tag": "general"
      },
      {
        "tag": "announcements"
      },
      {
        "tag": "help"
      },
      {
        "tag": "feedback"
      },
      {
        "tag": "discussion"
      },
      {
        "tag": "question"
      },
      {
        "tag": "advice"
      },
      {
        "tag": "tips"
      },
      {
        "tag": "best-practices",
        "count": 1
      },
      {
        "tag": "resources"
      }
    ]
  },
  {
    "title": "Frontend Development",
    "items": [
      {
        "tag": "html",
        "count": 3
      },
      {
        "tag": "html5"
      },
      {
        "tag": "css",
        "count": 3
      },
      {
        "tag": "css3"
      },
      {
        "tag": "javascript",
        "count": 9
      },
      {
        "tag": "typescript"
      },
      {
        "tag": "es6"
      },
      {
        "tag": "react",
        "count": 1
      },
      {
        "tag": "reactjs",
        "count": 6
      },
      {
        "tag": "nextjs",
        "count": 10
      },
      {
        "tag": "vue"
      },
      {
        "tag": "vuejs"
      },
      {
        "tag": "angular"
      },
      {
        "tag": "svelte"
      },
      {
        "tag": "jquery"
      },
      {
        "tag": "alpine"
      },
      {
        "tag": "lit"
      },
      {
        "tag": "stencil"
      },
      {
        "tag": "tailwindcss"
      },
      {
        "tag": "bootstrap"
      },
      {
        "tag": "sass"
      },
      {
        "tag": "scss"
      },
      {
        "tag": "less"
      },
      {
        "tag": "styled-components"
      },
      {
        "tag": "emotion"
      },
      {
        "tag": "chakra-ui"
      },
      {
        "tag": "material-ui"
      },
      {
        "tag": "ant-design"
      },
      {
        "tag": "bulma"
      },
      {
        "tag": "webpack"
      },
      {
        "tag": "vite"
      },
      {
        "tag": "parcel"
      },
      {
        "tag": "rollup"
      },
      {
        "tag": "esbuild"
      },
      {
        "tag": "turbopack"
      },
      {
        "tag": "redux"
      },
      {
        "tag": "mobx"
      },
      {
        "tag": "zustand"
      },
      {
        "tag": "recoil"
      },
      {
        "tag": "context-api"
      },
      {
        "tag": "xstate"
      },
      {
        "tag": "jest"
      },
      {
        "tag": "vitest"
      },
      {
        "tag": "cypress"
      },
      {
        "tag": "playwright"
      },
      {
        "tag": "testing-library"
      },
      {
        "tag": "responsive-design"
      },
      {
        "tag": "accessibility"
      },
      {
        "tag": "a11y",
        "count": 2
      },
      {
        "tag": "performance"
      },
      {
        "tag": "web-vitals"
      },
      {
        "tag": "seo"
      },
      {
        "tag": "pwa"
      },
      {
        "tag": "web-components"
      }
    ]
  },
  {
    "title": "Backend Development",
    "items": [
      {
        "tag": "nodejs"
      },
      {
        "tag": "python"
      },
      {
        "tag": "java"
      },
      {
        "tag": "csharp"
      },
      {
        "tag": "php"
      },
      {
        "tag": "ruby"
      },
      {
        "tag": "go"
      },
      {
        "tag": "rust"
      },
      {
        "tag": "kotlin"
      },
      {
        "tag": "scala"
      },
      {
        "tag": "elixir"
      },
      {
        "tag": "perl"
      },
      {
        "tag": "lua"
      },
      {
        "tag": "express",
        "count": 1
      },
      {
        "tag": "nestjs"
      },
      {
        "tag": "fastify"
      },
      {
        "tag": "koa"
      },
      {
        "tag": "django"
      },
      {
        "tag": "flask"
      },
      {
        "tag": "fastapi"
      },
      {
        "tag": "spring"
      },
      {
        "tag": "spring-boot"
      },
      {
        "tag": "laravel"
      },
      {
        "tag": "symfony"
      },
      {
        "tag": "rails"
      },
      {
        "tag": "gin"
      },
      {
        "tag": "fiber"
      },
      {
        "tag": "actix"
      },
      {
        "tag": "rocket"
      },
      {
        "tag": "phoenix"
      },
      {
        "tag": "rest-api"
      },
      {
        "tag": "graphql"
      },
      {
        "tag": "grpc"
      },
      {
        "tag": "websockets"
      },
      {
        "tag": "api-design"
      },
      {
        "tag": "microservices"
      },
      {
        "tag": "serverless"
      },
      {
        "tag": "lambda"
      },
      {
        "tag": "azure-functions"
      },
      {
        "tag": "jwt"
      },
      {
        "tag": "oauth"
      },
      {
        "tag": "auth0"
      },
      {
        "tag": "passport"
      },
      {
        "tag": "security"
      },
      {
        "tag": "encryption"
      },
      {
        "tag": "cors"
      },
      {
        "tag": "rate-limiting"
      },
      {
        "tag": "validation"
      }
    ]
  },
  {
    "title": "Databases & Data",
    "items": [
      {
        "tag": "mysql"
      },
      {
        "tag": "postgresql"
      },
      {
        "tag": "sqlite"
      },
      {
        "tag": "mariadb"
      },
      {
        "tag": "oracle"
      },
      {
        "tag": "sql-server"
      },
      {
        "tag": "mongodb"
      },
      {
        "tag": "redis"
      },
      {
        "tag": "elasticsearch"
      },
      {
        "tag": "cassandra"
      },
      {
        "tag": "dynamodb"
      },
      {
        "tag": "firebase"
      },
      {
        "tag": "supabase"
      },
      {
        "tag": "couchdb"
      },
      {
        "tag": "neo4j"
      },
      {
        "tag": "prisma"
      },
      {
        "tag": "typeorm"
      },
      {
        "tag": "sequelize"
      },
      {
        "tag": "mongoose",
        "count": 1
      },
      {
        "tag": "drizzle",
        "count": 1
      },
      {
        "tag": "knex"
      },
      {
        "tag": "sqlalchemy"
      },
      {
        "tag": "hibernate"
      },
      {
        "tag": "doctrine"
      },
      {
        "tag": "data-modeling"
      },
      {
        "tag": "sql"
      },
      {
        "tag": "nosql"
      },
      {
        "tag": "migrations"
      },
      {
        "tag": "seeding"
      },
      {
        "tag": "indexing"
      },
      {
        "tag": "optimization"
      },
      {
        "tag": "backup"
      },
      {
        "tag": "replication"
      }
    ]
  },
  {
    "title": "DevOps & Infrastructure",
    "items": [
      {
        "tag": "docker"
      },
      {
        "tag": "kubernetes"
      },
      {
        "tag": "docker-compose"
      },
      {
        "tag": "k8s"
      },
      {
        "tag": "helm"
      },
      {
        "tag": "containers"
      },
      {
        "tag": "microservices"
      },
      {
        "tag": "aws"
      },
      {
        "tag": "azure"
      },
      {
        "tag": "gcp"
      },
      {
        "tag": "digital-ocean"
      },
      {
        "tag": "heroku"
      },
      {
        "tag": "vercel"
      },
      {
        "tag": "netlify"
      },
      {
        "tag": "cloudflare"
      },
      {
        "tag": "railway"
      },
      {
        "tag": "render"
      },
      {
        "tag": "github-actions"
      },
      {
        "tag": "gitlab-ci"
      },
      {
        "tag": "jenkins"
      },
      {
        "tag": "circleci"
      },
      {
        "tag": "travis-ci"
      },
      {
        "tag": "azure-devops"
      },
      {
        "tag": "bitbucket-pipelines"
      },
      {
        "tag": "deployment"
      },
      {
        "tag": "automation"
      },
      {
        "tag": "terraform"
      },
      {
        "tag": "ansible"
      },
      {
        "tag": "pulumi"
      },
      {
        "tag": "cloudformation"
      },
      {
        "tag": "vagrant"
      },
      {
        "tag": "prometheus"
      },
      {
        "tag": "grafana"
      },
      {
        "tag": "elk-stack"
      },
      {
        "tag": "datadog"
      },
      {
        "tag": "new-relic"
      },
      {
        "tag": "sentry"
      },
      {
        "tag": "logging"
      },
      {
        "tag": "monitoring"
      },
      {
        "tag": "alerting"
      },
      {
        "tag": "nginx"
      },
      {
        "tag": "apache"
      },
      {
        "tag": "caddy"
      },
      {
        "tag": "traefik"
      },
      {
        "tag": "load-balancing"
      },
      {
        "tag": "reverse-proxy"
      },
      {
        "tag": "cdn"
      }
    ]
  },
  {
    "title": "Mobile Development",
    "items": [
      {
        "tag": "mobile"
      },
      {
        "tag": "ios"
      },
      {
        "tag": "android"
      },
      {
        "tag": "react-native"
      },
      {
        "tag": "flutter"
      },
      {
        "tag": "dart"
      },
      {
        "tag": "swift"
      },
      {
        "tag": "swiftui"
      },
      {
        "tag": "objective-c"
      },
      {
        "tag": "kotlin"
      },
      {
        "tag": "java-android"
      },
      {
        "tag": "xamarin"
      },
      {
        "tag": "ionic"
      },
      {
        "tag": "cordova"
      },
      {
        "tag": "phonegap"
      },
      {
        "tag": "expo"
      },
      {
        "tag": "mobile-ui"
      },
      {
        "tag": "responsive"
      },
      {
        "tag": "pwa"
      },
      {
        "tag": "hybrid-apps"
      },
      {
        "tag": "native-apps"
      }
    ]
  },
  {
    "title": "Design & UI/UX",
    "items": [
      {
        "tag": "design"
      },
      {
        "tag": "uiux"
      },
      {
        "tag": "ui-design"
      },
      {
        "tag": "ux-design"
      },
      {
        "tag": "figma"
      },
      {
        "tag": "sketch"
      },
      {
        "tag": "adobe-xd"
      },
      {
        "tag": "prototyping"
      },
      {
        "tag": "wireframing"
      },
      {
        "tag": "user-research"
      },
      {
        "tag": "design-system"
      },
      {
        "tag": "branding"
      },
      {
        "tag": "typography"
      },
      {
        "tag": "color-theory"
      },
      {
        "tag": "accessibility"
      },
      {
        "tag": "usability"
      },
      {
        "tag": "interaction-design"
      }
    ]
  },
  {
    "title": "AI & Machine Learning",
    "items": [
      {
        "tag": "ai",
        "count": 2
      },
      {
        "tag": "artificial-intelligence"
      },
      {
        "tag": "machine-learning"
      },
      {
        "tag": "ml"
      },
      {
        "tag": "deep-learning"
      },
      {
        "tag": "neural-networks"
      },
      {
        "tag": "nlp"
      },
      {
        "tag": "computer-vision"
      },
      {
        "tag": "chatgpt",
        "count": 1
      },
      {
        "tag": "openai"
      },
      {
        "tag": "tensorflow"
      },
      {
        "tag": "pytorch"
      },
      {
        "tag": "scikit-learn"
      },
      {
        "tag": "pandas"
      },
      {
        "tag": "numpy"
      },
      {
        "tag": "jupyter"
      },
      {
        "tag": "data-science"
      },
      {
        "tag": "llm"
      },
      {
        "tag": "generative-ai"
      },
      {
        "tag": "prompt-engineering"
      },
      {
        "tag": "langchain"
      }
    ]
  },
  {
    "title": "Tools & Productivity",
    "items": [
      {
        "tag": "git"
      },
      {
        "tag": "github"
      },
      {
        "tag": "gitlab"
      },
      {
        "tag": "bitbucket"
      },
      {
        "tag": "version-control"
      },
      {
        "tag": "vscode",
        "count": 1
      },
      {
        "tag": "webstorm"
      },
      {
        "tag": "intellij"
      },
      {
        "tag": "sublime"
      },
      {
        "tag": "vim"
      },
      {
        "tag": "neovim"
      },
      {
        "tag": "atom"
      },
      {
        "tag": "brackets"
      },
      {
        "tag": "npm"
      },
      {
        "tag": "yarn"
      },
      {
        "tag": "pnpm"
      },
      {
        "tag": "pip"
      },
      {
        "tag": "composer"
      },
      {
        "tag": "maven"
      },
      {
        "tag": "gradle"
      },
      {
        "tag": "cargo"
      },
      {
        "tag": "go-mod"
      },
      {
        "tag": "bundler"
      },
      {
        "tag": "postman"
      },
      {
        "tag": "insomnia"
      },
      {
        "tag": "swagger"
      },
      {
        "tag": "storybook"
      },
      {
        "tag": "chromium-devtools"
      },
      {
        "tag": "debugging"
      },
      {
        "tag": "profiling"
      },
      {
        "tag": "linting"
      },
      {
        "tag": "formatting"
      },
      {
        "tag": "prettier"
      },
      {
        "tag": "eslint"
      },
      {
        "tag": "husky"
      },
      {
        "tag": "lint-staged"
      }
    ]
  },
  {
    "title": "Career & Professional",
    "items": [
      {
        "tag": "career"
      },
      {
        "tag": "jobs"
      },
      {
        "tag": "freelancing"
      },
      {
        "tag": "remote-work"
      },
      {
        "tag": "job-search"
      },
      {
        "tag": "interview-prep"
      },
      {
        "tag": "resume"
      },
      {
        "tag": "portfolio-review"
      },
      {
        "tag": "salary-negotiation"
      },
      {
        "tag": "career-change"
      },
      {
        "tag": "skills-development"
      },
      {
        "tag": "certification"
      },
      {
        "tag": "networking"
      },
      {
        "tag": "mentorship"
      },
      {
        "tag": "leadership"
      },
      {
        "tag": "team-management"
      }
    ]
  }
];

export const communityPosts: CommunityPost[] = [
  {
    "id": "6ab2a5d4e08ee3c5160ebf95",
    "author": {
      "name": "Abdullahi Daud",
      "href": "/community/users/6a1a9256d96096df3ee51552",
      "avatar": "/cdn/avatars/6a1a9256d96096df3ee51552-1781546830868.jpg"
    },
    "time": "1 day ago",
    "bodyHtml": "<p>Finance Tracker – User Testing</p><p>Waxaan sameeyay Finance Tracker, oo ah web application loogu talagalay in lagu maareeyo dakhliga iyo kharashaadka qofka.</p><p>Marka ugu horreysa:</p><p>Samee Register / Create account.\nKadib samee Login adigoo isticmaalaya account-ka aad sameysatay.</p><p>Fiiro gaar ah: Gmail dhab ah looma baahna. Waxaad isticmaali kartaa email tijaabo ah oo format sax ah leh, tusaale: <a class=\"wrap-anywhere font-medium text-primary underline\" data-incomplete=\"false\" data-streamdown=\"link\" href=\"mailto:test@gmail.com\" rel=\"noopener noreferrer\" target=\"_blank\">test@gmail.com</a>.</p><p>Kadib waxaad tijaabin kartaa:</p><p>Dashboard &amp; financial summary\nIncome iyo expense transactions\nCategories\nProfile &amp; profile image\nLight/Dark mode\nMobile &amp; desktop responsive design</p><p>Inta aad tijaabinayso, fadlan ii soo sheeg:</p><p>Haddii error kuu soo baxo\nHaddii button ama feature uusan shaqeyn\nHaddii wax mobile/desktop si khaldan uga muuqdo\nHaddii aad leedahay suggestion UI/UX ah</p><p>Test URL: <a class=\"wrap-anywhere font-medium text-primary underline\" data-incomplete=\"false\" data-streamdown=\"link\" href=\"https://finance-tracker-dz0a.onrender.com/\" rel=\"noopener noreferrer\" target=\"_blank\">https://finance-tracker-dz0a.onrender.com</a></p><p>Mahadsanid waqtiga aad gelisay testing-ka 🙌</p>",
    "media": {
      "layout": "quad",
      "images": [
        "/cdn/community/posts/6a1a9256d96096df3ee51552/00e10afd-a271-4846-aa67-3033a60fda8c.jpg",
        "/cdn/community/posts/6a1a9256d96096df3ee51552/c160e84f-2676-45b4-96e9-da5fbe07ea8f.jpg",
        "/cdn/community/posts/6a1a9256d96096df3ee51552/9f5eead8-2e27-4f38-90bc-c4e20fb7ed8f.jpg",
        "/cdn/community/posts/6a1a9256d96096df3ee51552/9703c3a6-33f7-4a63-8bd5-705c928fa84e.jpg"
      ],
      "alt": "Community post image by Abdullahi",
      "more": 1
    },
    "tags": [
      "reactjs"
    ],
    "likes": 0,
    "comments": 0,
    "commentsLabel": "No comments yet"
  },
  {
    "id": "6a92a95cba889a9de7778834",
    "author": {
      "name": "Abdirahman mohamed",
      "href": "/community/users/samafale",
      "avatar": "/cdn/avatars/62d09ed9d777c7b72b2e4340-1785727251184.jpg"
    },
    "time": "26 days ago",
    "bodyHtml": "<p>Maalin kaloo xiisaheeda wadato waxan is heynaa  Document Object Model (Dom)</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/62d09ed9d777c7b72b2e4340/8f14973d-71a6-45a5-800d-2039834f1813.jpg"
      ],
      "alt": "Community post image by Abdirahman"
    },
    "tags": [
      "javascript"
    ],
    "likes": 5,
    "comments": 0,
    "likedBy": "Abdirahman and 4 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "6a8ea6cc259d19c7a51e0f17",
    "author": {
      "name": "Hassan mahad",
      "href": "/community/users/61e939d031cf554a7e45d869",
      "avatar": "/cdn/avatars/61e939d031cf554a7e45d869-1785759753301.jpg"
    },
    "time": "29 days ago",
    "bodyHtml": "<p>maanta waxaa ii dhamaan raba js</p>",
    "tags": [
      "javascript"
    ],
    "likes": 3,
    "comments": 0,
    "likedBy": "Abdulaziz and 2 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "6a4bb78d07d25f6a616526e2",
    "author": {
      "name": "Hayat mohamud Hassan",
      "href": "/community/users/hayatcraft",
      "avatar": "/cdn/avatars/65e9b3d7d6d7397b064c4c08-1748405457171.webp"
    },
    "time": "3 months ago",
    "bodyHtml": "<p>ASc guys kan waa projecte chat-app oo aan 2 week ugu danbay ka shaqaynayay aniga oo isticmalaayo openRouter free model kooda ayan dhis  <a class=\"wrap-anywhere font-medium text-primary underline\" data-incomplete=\"false\" data-streamdown=\"link\" href=\"https://chat-app-4qir.vercel.app/chat\" rel=\"noopener noreferrer\" target=\"_blank\">https://chat-app-4qir.vercel.app/chat</a></p>",
    "media": {
      "layout": "quad",
      "images": [
        "/cdn/community/posts/65e9b3d7d6d7397b064c4c08/af4b6429-adc0-4818-9b9c-e89434e72f90.jpg",
        "/cdn/community/posts/65e9b3d7d6d7397b064c4c08/106f17c9-3a22-41ad-8638-282b76aabe58.jpg",
        "/cdn/community/posts/65e9b3d7d6d7397b064c4c08/e277f22d-4b53-41fb-8a19-33ea7587c88e.jpg",
        "/cdn/community/posts/65e9b3d7d6d7397b064c4c08/16afa96f-7204-4200-aff1-144d73ab77f3.jpg"
      ],
      "alt": "Community post image by Hayat"
    },
    "tags": [
      "nextjs",
      "ai",
      "drizzle"
    ],
    "likes": 7,
    "comments": 1,
    "likedBy": "Ahmed Abdisalam and 6 others liked this",
    "commentsLabel": "1 comment"
  },
  {
    "id": "6a2516401b08268674bda1e6",
    "author": {
      "name": "Mansour Mohamed",
      "href": "/community/users/mansormd",
      "avatar": "/cdn/avatars/68fdfbceb29c5df8bd908be5-1784347437467.jpg"
    },
    "time": "4 months ago",
    "bodyHtml": "<p>Asc aqriste marka hore alxmdulilah for everything  aad ban ugu faraxsanahay heerka aan manta joogo  iyo meeshan ka imid sida ay aheed farqiga udhaxaya tan xigta waxaan u mahad celinaya dugsiiye ugu horeeyo ustad hmouda iyo dhaman macliniinta &amp; ardayda inta kadib manta waxaan so gaba gabeeyay 80% projectgii ugu danbeyay ee js onlyone ka ahaa dadal iyo wafajin allah kadib waxaa amaantas iyo mahdsa iska leh (Dugsiiye) maxay yelay waxay galisay juhdi dadal si jiil tayeysan loo so saari laha , intaas kadib project gayga wuxuu ku sabsan yahy (islamic Modren) kaso xoga aan ku saarayo Quran ka yo xadiithta in laga bogto iwm welcome to - <a class=\"wrap-anywhere font-medium text-primary underline\" data-incomplete=\"false\" data-streamdown=\"link\" href=\"https://islamic-modren.vercel.app/\" rel=\"noopener noreferrer\" target=\"_blank\">https://islamic-modren.vercel.app/</a> Share it and earn reward from Allah.</p>",
    "media": {
      "layout": "quad",
      "images": [
        "/cdn/community/posts/68fdfbceb29c5df8bd908be5/694f0648-e9b0-4984-bd5f-514f624f396c.jpg",
        "/cdn/community/posts/68fdfbceb29c5df8bd908be5/469e6872-da34-4e0c-8403-5764796a5f67.jpg",
        "/cdn/community/posts/68fdfbceb29c5df8bd908be5/c51c4cbc-26b0-4124-891e-3f609198a82f.jpg",
        "/cdn/community/posts/68fdfbceb29c5df8bd908be5/802a8b4f-cac8-4599-b2cc-443cda53952b.jpg"
      ],
      "alt": "Community post image by Mansour",
      "more": 1
    },
    "tags": [
      "javascript",
      "css",
      "html"
    ],
    "likes": 10,
    "comments": 3,
    "likedBy": "Mohamed Ahmed and 9 others liked this",
    "commentsLabel": "3 comments"
  },
  {
    "id": "699302525f6918f3bb2d7686",
    "author": {
      "name": "Mansour Mohamed",
      "href": "/community/users/mansormd",
      "avatar": "/cdn/avatars/68fdfbceb29c5df8bd908be5-1784347437467.jpg"
    },
    "time": "7 months ago",
    "bodyHtml": "<p>Asc aqriste /to ad ban ugu faraxsanhy inaan heerkan so gaaro marka hore  ilahey ba  mahad iska leh i waafajiyay heerkan meshan iyo meel ka sarayso rabigay waanka rajaynayaaa kadib waxaan umhadnaqaya Dugsiiye taso sbb u aheyd inan fahmo calmka dev. waxaan meshan kuso gudbiyay project kaso share aan ku aheyn Qof kamida ardayda dugsiiye\n<a class=\"wrap-anywhere font-medium text-primary underline\" data-incomplete=\"false\" data-streamdown=\"link\" href=\"http://wadajir-ecru.vercel.app/\" rel=\"noopener noreferrer\" target=\"_blank\">http://wadajir-ecru.vercel.app/</a></p>",
    "media": {
      "layout": "trio",
      "images": [
        "/cdn/community/posts/68fdfbceb29c5df8bd908be5/bc166fcf-15e9-4d56-a8ab-9a93e46832ed.jpg",
        "/cdn/community/posts/68fdfbceb29c5df8bd908be5/5c303675-bb40-4db6-89d2-9b12ad9c96dc.jpg",
        "/cdn/community/posts/68fdfbceb29c5df8bd908be5/fe7d6cfb-17f0-45f7-8ab8-25b3ebf454b5.jpg"
      ],
      "alt": "Community post image by mansour"
    },
    "tags": [
      "html",
      "css"
    ],
    "likes": 7,
    "comments": 1,
    "likedBy": "Abdullahi and 6 others liked this",
    "commentsLabel": "1 comment"
  },
  {
    "id": "693541b26c4d1eb0ad724bce",
    "author": {
      "name": "Apdiqafaar Abdulaahi",
      "href": "/community/users/apdiqafaar",
      "avatar": "/cdn/avatars/65dae08fb734c97fda18209d-1765098250848.jpg"
    },
    "time": "10 months ago",
    "bodyHtml": "<p>Asc dhamantiin waan idinwada slamaaya, projectigan oo aam isbuucii udambeeyay ka shaqeenayay ayaan ku dhisay Full Functional Ai chatbot, waxaana is Nextjs, Ai sdk Replicate Message Streaming Betterauth oo si deeply ah u isticmaaly check it dhaamntiin  <a class=\"wrap-anywhere font-medium text-primary underline\" data-incomplete=\"false\" data-streamdown=\"link\" href=\"https://ai-chat-bot-xi-two.vercel.app/\" rel=\"noopener noreferrer\" target=\"_blank\">https://ai-chat-bot-xi-two.vercel.app</a>  hadii aad codeka ubaahantihiina github: <a class=\"wrap-anywhere font-medium text-primary underline\" data-incomplete=\"false\" data-streamdown=\"link\" href=\"https://github.com/apdyqafaar/ai-chat-bot\" rel=\"noopener noreferrer\" target=\"_blank\">https://github.com/apdyqafaar/ai-chat-bot</a></p>",
    "media": {
      "layout": "trio",
      "images": [
        "/cdn/community/posts/65dae08fb734c97fda18209d/429bb36c-f399-49cd-a821-da8cb5c94194.jpg",
        "/cdn/community/posts/65dae08fb734c97fda18209d/c0ee4db3-2822-472e-bbc2-99a21453b5d3.jpg",
        "/cdn/community/posts/65dae08fb734c97fda18209d/0db9df31-ee7f-455e-b0f5-da3c7725b213.jpg"
      ],
      "alt": "Community post image by Apdiqafaar"
    },
    "tags": [
      "nextjs",
      "chatgpt",
      "ai"
    ],
    "likes": 18,
    "comments": 5,
    "likedBy": "Apdiqafaar and 17 others liked this",
    "commentsLabel": "5 comments"
  },
  {
    "id": "6901358a10d80a595551c478",
    "author": {
      "name": "Anonymous",
      "href": "#",
      "initials": "A"
    },
    "time": "11 months ago",
    "bodyHtml": "<p>cabasho ayaan qaba course aya iga dhacday siden ku xalin karaa?</p>",
    "tags": [
      "javascript"
    ],
    "likes": 1,
    "comments": 0,
    "likedBy": "Abdalla liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "68e1157582f43c4f66e28cc2",
    "author": {
      "name": "Mohamed Abdirahim Mohamed",
      "href": "/community/users/moabdirahim_01",
      "avatar": "/cdn/avatars/65a92685747d3c74a73b5540-1754418029758.webp"
    },
    "time": "12 months ago",
    "bodyHtml": "<p>🚀 Excited to share that I’ve completed my 𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹 𝗙𝗶𝗻𝗮𝗻𝗰𝗲 𝗧𝗿𝗮𝗰𝗸𝗲𝗿 𝗔𝗽𝗽!\nA full-stack project that helps users manage their 𝗶𝗻𝗰𝗼𝗺𝗲, and 𝗲𝘅𝗽𝗲𝗻𝘀𝗲𝘀a simple and secure way.</p><p>🛠️ Tech Stack:\n𝗙𝗿𝗼𝗻𝘁𝗲𝗻𝗱: React + TailwindCSS + shadcn\n𝗕𝗮𝗰𝗸𝗲𝗻𝗱: Node.js + Express + MongoDB\n𝗘𝘅𝘁𝗿𝗮𝘀: JWT Authentication, Swagger API Docs, Cloudinary integration</p><p>✨ Features:\n✔️ Add &amp; categorize transactions\n✔️ Visualize spending trends\n✔️ Secure login &amp; profile management</p><p>👉 The app is now live — check it out here: <a class=\"wrap-anywhere font-medium text-primary underline\" data-incomplete=\"false\" data-streamdown=\"link\" href=\"https://personal-finance-tracker-api-tcxh.onrender.com/\" rel=\"noopener noreferrer\" target=\"_blank\">https://personal-finance-tracker-api-tcxh.onrender.com/</a></p><p>I’d love to hear your thoughts, feedback, and suggestions! 💡</p><p>#WebDevelopment #MERN #FinanceTracker #FullStack</p>",
    "media": {
      "layout": "quad",
      "images": [
        "/cdn/community/posts/65a92685747d3c74a73b5540/c41bce43-286c-42d2-99ca-346d1f0779a4.jpg",
        "/cdn/community/posts/65a92685747d3c74a73b5540/0c4814e0-d79e-42eb-91bf-2ea541ecf0e1.jpg",
        "/cdn/community/posts/65a92685747d3c74a73b5540/7c44d0b2-2d57-49c9-8ac1-685197653954.jpg",
        "/cdn/community/posts/65a92685747d3c74a73b5540/0253a213-1390-4090-8c69-395e8b983835.jpg"
      ],
      "alt": "Community post image by Mohamed Abdirahim"
    },
    "tags": [
      "reactjs",
      "javascript",
      "best-practices",
      "mongoose",
      "express"
    ],
    "likes": 15,
    "comments": 2,
    "likedBy": "Mohamed Abdirahim and 14 others liked this",
    "commentsLabel": "2 comments"
  },
  {
    "id": "68a1b257479e7925d967a950",
    "author": {
      "name": "Waqti User",
      "href": "/community/users/66bec207d9388cd704bae3ca",
      "initials": "WU"
    },
    "time": "about 1 year ago",
    "bodyHtml": "<p>i was building e-commerce website using vanilla JS but i have encountered problem.</p><p>the problem is, when i tried filtering the product in the product page \"i mean user needs to filter products according to his interest \" i did saved his filter choice as an array in object, later on i could not figure out, how i can show the products that match the filtered choice if any one could help please help me thanks #javascript</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/66bec207d9388cd704bae3ca/b6e8904b-d4e7-4bb6-9597-17cbbebfebec.jpg"
      ],
      "alt": "Community post image by Waqti"
    },
    "tags": [
      "javascript",
      "frontend"
    ],
    "likes": 14,
    "comments": 0,
    "likedBy": "Dugsiiye and 13 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "688cd2d5bd022d7dfdfb2284",
    "author": {
      "name": "Abdihakim Adan",
      "href": "/community/users/shiine",
      "avatar": "/cdn/avatars/65c8b285f85cff6bbd293aae-1737087281502.webp"
    },
    "time": "about 1 year ago",
    "bodyHtml": "<p>🚀 My Next.js Journey – Todo App Completed!\nAfter a week of diving deep into Next.js 15, I’m excited to share that I’ve completed and deployed my full-featured Todo App! 🎉</p><p>🔧 Features:</p><p>✅ Add, update, delete, and toggle todos</p><p>⚡ Server Actions for performance</p><p>🔍 Search &amp; filter</p><p>🗂 Sort by priority (low/medium/high)</p><p>🕒 Real-time timestamps (e.g. \"2 hours ago\")</p><p>🌗 Light &amp; dark mode support</p><p>🔐 Auth with login/register</p><p>📊 Dashboard for task management</p><p>🌐 Live demo: <a class=\"wrap-anywhere font-medium text-primary underline\" data-incomplete=\"false\" data-streamdown=\"link\" href=\"https://lnkd.in/eJFHibfm\" rel=\"noopener noreferrer\" target=\"_blank\">https://lnkd.in/eJFHibfm</a>\n💻 Code: <a class=\"wrap-anywhere font-medium text-primary underline\" data-incomplete=\"false\" data-streamdown=\"link\" href=\"https://lnkd.in/eZis5fD9\" rel=\"noopener noreferrer\" target=\"_blank\">https://lnkd.in/eZis5fD9</a></p><p>This project helped me solidify concepts like SSR, SSG, Server Actions, Suspense, SEO, MongoDB integration, and much more.</p><p>Insha’Allah, more projects and learning updates coming soon! 🚀\n#shiinedev hashtag#dugsiiye</p>",
    "media": {
      "layout": "quad",
      "images": [
        "/cdn/community/posts/65c8b285f85cff6bbd293aae/c1a49179-5225-4beb-9b74-11c43f3c26a0.jpg",
        "/cdn/community/posts/65c8b285f85cff6bbd293aae/237c60fc-2da2-42dc-8d5d-92848e1f3ef2.jpg",
        "/cdn/community/posts/65c8b285f85cff6bbd293aae/d185d0c4-5a8f-49a8-a43e-642181634a8e.jpg",
        "/cdn/community/posts/65c8b285f85cff6bbd293aae/873f7ab8-2e5d-455a-9468-e889d127c521.jpg"
      ],
      "alt": "Community post image by Abdihakim "
    },
    "tags": [
      "nextjs",
      "frontend"
    ],
    "likes": 11,
    "comments": 1,
    "likedBy": "Meecaad and 10 others liked this",
    "commentsLabel": "1 comment"
  },
  {
    "id": "6889257ac1f06724d64ae52d",
    "author": {
      "name": "Abdihakim Adan",
      "href": "/community/users/shiine",
      "avatar": "/cdn/avatars/65c8b285f85cff6bbd293aae-1737087281502.webp"
    },
    "time": "about 1 year ago",
    "bodyHtml": "<p>🚀 My Next.js Journey – todo app</p><p>Today I made major improvements to my Next.js Todo App 💪</p><p>Here’s what I implemented:</p><p>🔹 Priority Levels</p><p>– Added priority field (low, medium, high)</p><p>– Included selector in the form</p><p>– Sorted todos by priority</p><p>🔹 Search</p><p>– Search todos</p><p>🔹 Bulk Operations</p><p>– Select multiple todos via checkboxes</p><p>– Delete in bulk using an array of IDs</p><p>– Mark all as complete/incomplete</p><p>🔹 Real-time Timestamps</p><p>– Displayed relative times like “created 2 hours ago”</p><p>– Tracked updatedAt on every update</p><p>I'm enjoying every step of building and learning in public 🛠️</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/65c8b285f85cff6bbd293aae/ee869c03-5414-4e11-acb3-e5de57e17905.jpg"
      ],
      "alt": "Community post image by Abdihakim "
    },
    "tags": [
      "nextjs"
    ],
    "likes": 6,
    "comments": 0,
    "likedBy": "Dugsiiye and 5 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "6887f499d434ad3620ad21f4",
    "author": {
      "name": "Abdihakim Adan",
      "href": "/community/users/shiine",
      "avatar": "/cdn/avatars/65c8b285f85cff6bbd293aae-1737087281502.webp"
    },
    "time": "about 1 year ago",
    "bodyHtml": "<p>Today I implemented the UI for my Todo app using Next.js! 🚀\n✅ Add new todos\n✅ Delete todos\n✅ Toggle completion</p><p>Bit by bit, everything is coming together Insha Allah!\n#shiindedev</p>",
    "media": {
      "layout": "pair",
      "images": [
        "/cdn/community/posts/65c8b285f85cff6bbd293aae/d2c814eb-b611-42b4-ae31-77b4265293e0.jpg",
        "/cdn/community/posts/65c8b285f85cff6bbd293aae/f8955600-3bd0-4fd0-b42f-9b3418b9a7cd.jpg"
      ],
      "alt": "Community post image by Abdihakim "
    },
    "tags": [
      "nextjs"
    ],
    "likes": 4,
    "comments": 0,
    "likedBy": "Dugsiiye and 3 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "68868168d434ad3620a9b3ed",
    "author": {
      "name": "Abdihakim Adan",
      "href": "/community/users/shiine",
      "avatar": "/cdn/avatars/65c8b285f85cff6bbd293aae-1737087281502.webp"
    },
    "time": "about 1 year ago",
    "bodyHtml": "<p>📌Building Data Layer &amp; Server Actions in My Next.js Todo App\n🚀 Progress update on my Todo App!\nToday I focused on the backend logic, specifically:\n✅ Implemented a clean data layer to manage interactions with MongoDB\n✅ Used Next.js Server Actions to handle creating and deleting todos securely\n✅ Ensured everything works seamlessly with TypeScript\nThese improvements make the app more maintainable, secure, and scalable — and it's great practice for real-world fullstack projects!\nMore to come tomorrow, InshaAllah! 💻✨\nhashtag #shiinedev</p>",
    "media": {
      "layout": "pair",
      "images": [
        "/cdn/community/posts/65c8b285f85cff6bbd293aae/68bce7b2-19a9-4665-b197-7cc47a20fbdd.jpg",
        "/cdn/community/posts/65c8b285f85cff6bbd293aae/bf995a8e-2ec5-4c15-be5e-2ddb1851c119.jpg"
      ],
      "alt": "Community post image by Abdihakim "
    },
    "tags": [
      "nextjs"
    ],
    "likes": 4,
    "comments": 0,
    "likedBy": "Abdale and 3 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "68851ddfd434ad3620a647ed",
    "author": {
      "name": "Abdihakim Adan",
      "href": "/community/users/shiine",
      "avatar": "/cdn/avatars/65c8b285f85cff6bbd293aae-1737087281502.webp"
    },
    "time": "about 1 year ago",
    "bodyHtml": "<p>📌 Starting My Next.js Todo App Project</p><p>🚀 Today I started building a Todo App with Next.js as part of my learning journey!</p><p>🛠 What I did today:</p><p>✅ Set up the project structure</p><p>✅ Connected the app to MongoDB</p><p>✅ Declared necessary TypeScript types for todos</p><p>I’m excited to keep expanding this project as I apply what I’ve been learning about fullstack development with Next.js.</p><p>More updates coming soon, InshaAllah!</p><p>hashtag#shiinedev hashtag#dugsiiye hashtag#Nextjs hashtag#LearnInPublic hashtag#React hashtag#FullstackDevelopment hashtag#MongoDB hashtag#TypeScript hashtag#100DaysOfCode</p>",
    "media": {
      "layout": "pair",
      "images": [
        "/cdn/community/posts/65c8b285f85cff6bbd293aae/6a67fd83-3e12-4382-90dd-575dc26b41ca.jpg",
        "/cdn/community/posts/65c8b285f85cff6bbd293aae/fdbf4c49-3d42-4b2d-ab53-e04a93a186df.jpg"
      ],
      "alt": "Community post image by Abdihakim "
    },
    "tags": [
      "nextjs",
      "frontend",
      "react"
    ],
    "likes": 5,
    "comments": 0,
    "likedBy": "Mohamedsalad and 4 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "6883d4cfd434ad3620a3553b",
    "author": {
      "name": "Abdihakim Adan",
      "href": "/community/users/shiine",
      "avatar": "/cdn/avatars/65c8b285f85cff6bbd293aae-1737087281502.webp"
    },
    "time": "about 1 year ago",
    "bodyHtml": "<p>📌 Continuing My Next.js Learning Journey</p><p>🚀 Today I'm continuing my Next.js course, focusing on the following key areas:</p><p>⿡ Data Fetching &amp; Caching – Learning how to efficiently load and cache data\n⿢ SEO, Meta Data &amp; Open Graph – Optimizing pages for search engines and social sharing\n⿣ Font Optimization – Improving performance by loading fonts smartly\n⿤ Image Optimization – Using next/image to serve high-quality, fast-loading images\n⿥ Middlewares – Controlling requests and routing logic before reaching your pages (e.g., auth checks, redirects)</p><p>✨ InshaAllah, my goal is to deepen my understanding of performance and best practices in Next.js, while learning in public.\n#shiinedev hashtag#dugsiiye hashtag#Nextjs hashtag#LearnInPublic hashtag#FrontendDevelopment hashtag#React hashtag#100DaysOfCode hashtag#SEO hashtag#WebPerformance</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/65c8b285f85cff6bbd293aae/f130c322-61e0-41c1-a985-eb67f91f77f4.jpg"
      ],
      "alt": "Community post image by Abdihakim "
    },
    "tags": [
      "reactjs",
      "nextjs",
      "frontend"
    ],
    "likes": 3,
    "comments": 0,
    "likedBy": "Omar and 2 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "68827ca107ee96cd570c4b31",
    "author": {
      "name": "Abdihakim Adan",
      "href": "/community/users/shiine",
      "avatar": "/cdn/avatars/65c8b285f85cff6bbd293aae-1737087281502.webp"
    },
    "time": "about 1 year ago",
    "bodyHtml": "<p>🚀 my NextjsJourney</p><p>Today I explored powerful features in Next.js that make fullstack development feel seamless:</p><p>✅ SSR (Server-Side Rendering) – Pages rendered on request, great for dynamic content.\n✅ SSG (Static Site Generation) – Pre-rendered pages for fast performance and caching.\n✅ Streaming with Suspense – Load UI parts progressively for better user experience.\n✅ Server Actions – Handle logic on the server without needing API endpoints.\n✅ Form Handling – Built-in support for submitting forms using Server Actions.</p><p>✨ These tools unlock a new level of interactivity and performance. I’m really enjoying how fullstack-friendly Next.js&nbsp;has&nbsp;become.</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/65c8b285f85cff6bbd293aae/6d1ca498-b9d1-4f96-9311-9eccd9bae13a.jpg"
      ],
      "alt": "Community post image by Abdihakim "
    },
    "tags": [
      "reactjs",
      "nextjs"
    ],
    "likes": 4,
    "comments": 0,
    "likedBy": "Abdullahi and 3 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "688132f38007d26f4f384b72",
    "author": {
      "name": "Abdihakim Adan",
      "href": "/community/users/shiine",
      "avatar": "/cdn/avatars/65c8b285f85cff6bbd293aae-1737087281502.webp"
    },
    "time": "about 1 year ago",
    "bodyHtml": "<p>🚀 Day 1 of my Nextjs Journey – Understanding Routing &amp; APIs with App Router!</p><p>Maanta waxaan bartay sida Next.js (App Router) uu u maareeyo routingka iyo API endpoints si casri ah oo fudud.</p><p>🧭 Waxa aan fahmay:</p><p>🔹 Static Pages  :\nWaxaad abuuri kartaa pages si toos ah loogu heli karo URL sida \"/abou\"t.</p><p>🔹 Nested Layouts:\nNext.js wuxuu kuu ogolaanayaa inaad yeelato layouts kala duwan oo is dul saaran, sida marka aad rabto sidebar gaar ah gudaha dashboard.</p><p>🔹 Grouped Routes*:\nWaxaad abuuri kartaa routes kala duwan (sida admin iyo public) adigoo aan URL-ka waxba ka beddelin, taas oo fududeysa kala soocida access.*</p><p>🔹 Dynamic Routes:\nWaxaan baray sida loo sameeyo URL-yada dynamic ee la xiriira id-ga sida \"/product/1\".</p><p>🔹 Catch-All Routes:\nWaxaad qabsan kartaa paths kala duwan oo aan horay loo sii qeexin, sida /\"docs/setup/mac\" ama \"/docs\".</p><p>🔹 Static API Routes:\nNext.js wuxuu kuu ogolaanayaa inaad dhisto API-yada fudud sida \"/api/hello\" si aad JSON u so celiso.</p><p>🔹 Dynamic API Routes:\nAPI-yada qaata id ama parameter, sida /\"api/products/42\", waa la abuuri karaa si toos ah.</p><p>✨ Waxaan la dhacay sida Next.js uu isugu darayo frontend &amp; backend development hal meel oo isku dhafan. Waxaa dareemay in wax kasta ay u socdaan si fudud!</p><p>🎯 Waxaan sii wadi doonaa safarkan public learningka ah, anigoo maalin kasta wax baranaya .</p><p>#shinedev\n#LearnInPublic #Nextjs #React #FrontendDevelopment #AppRouter #DevJourney</p>",
    "media": {
      "layout": "pair",
      "images": [
        "/cdn/community/posts/65c8b285f85cff6bbd293aae/d71e0685-e669-47bf-9a1d-709fd2b46a03.jpg",
        "/cdn/community/posts/65c8b285f85cff6bbd293aae/c57c879b-0eca-4f24-a5fb-357416748646.jpg"
      ],
      "alt": "Community post image by Abdihakim "
    },
    "tags": [
      "nextjs",
      "frontend"
    ],
    "likes": 6,
    "comments": 0,
    "likedBy": "Abdullahi and 5 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "687fd9b5d1c209229d9e54a0",
    "author": {
      "name": "Abdullahi Ali",
      "href": "/community/users/accoder",
      "avatar": "/cdn/avatars/639c81a39ab9117c774aa3ed-1749164301572.webp"
    },
    "time": "about 1 year ago",
    "bodyHtml": "<p>Hey, Team React_js!\nHere are some quick mental rules to remember when building smart components:</p><p>--&gt; Want screen to update?\n--&gt; Yes .\n--&gt;  Use useState()</p><p>--&gt;  want to remember value?\n--&gt; Yes .\n--&gt; Use useRef()</p><p>--&gt; Want to touch the DOM?\n--&gt; Yes .\n--&gt; Use useRef()</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/639c81a39ab9117c774aa3ed/12b4ea6a-de86-425e-b5fc-0054a985c015.jpg"
      ],
      "alt": "Community post image by Abdullahi"
    },
    "tags": [
      "reactjs"
    ],
    "likes": 0,
    "comments": 0,
    "commentsLabel": "No comments yet"
  },
  {
    "id": "687bec9544a228a64fa90029",
    "author": {
      "name": "zakaria jama Haibe",
      "href": "/community/users/67d25cd5f7451d0133a95b67",
      "avatar": "/cdn/avatars/67d25cd5f7451d0133a95b67-1741839997278.webp"
    },
    "time": "about 1 year ago",
    "bodyHtml": "<p>Habeen wanaagsan Team DUGSIIYE.</p>",
    "media": {
      "layout": "pair",
      "images": [
        "/cdn/community/posts/67d25cd5f7451d0133a95b67/0c4dc3ff-9286-4e24-9644-4473c79b7d71.jpg",
        "/cdn/community/posts/67d25cd5f7451d0133a95b67/41ee1825-cf58-46ab-b2d9-034f7a6fbe3f.jpg"
      ],
      "alt": "Community post image by zakaria "
    },
    "tags": [
      "summer-break"
    ],
    "likes": 4,
    "comments": 0,
    "likedBy": "zakaria and 3 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "6877cccc08a8d747f3846471",
    "author": {
      "name": "Maxamedmumin User",
      "href": "/community/users/mucaawiye",
      "avatar": "/cdn/avatars/6561408dae840f8adabe3aa1-1752641969617.webp"
    },
    "time": "about 1 year ago",
    "bodyHtml": "<p>asc waxaan rabaa qof ama dad badan hanoqono laakin dad dhameeyi Reactjs aa rabaa oo practice sameyno oo maalin walbo project sameyno halki project malmo ama isbuc ha qato waa cadi lakin ani waxan raba dad dadaalayo oo marnaba caajisenin oo wax badan oo faido ah internetka isla radino websiteka dhiseno animation qatar in u sameyno hadaba hada tahay qof aan caajisenin kana goantahay so dhawow groupka telegram ku soo biir\n<a class=\"wrap-anywhere font-medium text-primary underline\" data-incomplete=\"false\" data-streamdown=\"link\" href=\"https://t.me/+UwtzGTYBCcZlYTA0\" rel=\"noopener noreferrer\" target=\"_blank\">https://t.me/+UwtzGTYBCcZlYTA0</a></p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/6561408dae840f8adabe3aa1/4a1fae88-c0fe-47b3-abde-7e82ae0e9392.jpg"
      ],
      "alt": "Community post image by Maxamedmumin"
    },
    "tags": [
      "frontend",
      "reactjs js collabration learntogather frontenddev"
    ],
    "likes": 1,
    "comments": 0,
    "likedBy": "Mohamedsalad liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "6870e9d9e8dad4c6b610cabd",
    "author": {
      "name": "Abdullahi Saed",
      "href": "/community/users/abdsaed",
      "avatar": "/cdn/avatars/679a6c8488a989ffc530c83f-1779371231429.jpg"
    },
    "time": "about 1 year ago",
    "bodyHtml": "<p>Asc akhyaareey,Jumca kareem.</p><p>xaaladihina kawarama,Qolkaan habeenkii lashaaciyay maa ugu dambeesay isticmaalkiisa 😂.</p>",
    "tags": [
      "a11y"
    ],
    "likes": 3,
    "comments": 0,
    "likedBy": "Abdullahi and 2 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "68570d4d50051035ef5200dc",
    "author": {
      "name": "Anonymous",
      "href": "#",
      "initials": "A"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>ma ahay anonymous ?</p>",
    "tags": [
      "a11y"
    ],
    "likes": 2,
    "comments": 0,
    "likedBy": "Sharafdin and Faarax liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "6855403278838b1f9d7ebf5a",
    "author": {
      "name": "hawa muhumed ali",
      "href": "/community/users/dagan",
      "initials": "hm"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>ma ii jeda tijaabo waye</p>",
    "tags": [
      "demo-days"
    ],
    "likes": 2,
    "comments": 1,
    "likedBy": "Mohamed and hamse liked this",
    "commentsLabel": "1 comment"
  },
  {
    "id": "68541170931bc3f67638f7c3",
    "author": {
      "name": "Mohamed Ali",
      "href": "/community/users/67af805aee5a542614ca0541",
      "avatar": "/cdn/avatars/67af805aee5a542614ca0541-1750339336320.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>casariye wacan family dugsiiye</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/67af805aee5a542614ca0541/336dc6c5-44d3-4905-82a5-54ec4cfa5361.jpg"
      ],
      "alt": "Community post image by Mohamed"
    },
    "tags": [
      "html",
      "css",
      "vscode"
    ],
    "likes": 8,
    "comments": 0,
    "likedBy": "Abdikani and 7 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "68528e448b526b0ef364c381",
    "author": {
      "name": "Abdullahi Ali",
      "href": "/community/users/accoder",
      "avatar": "/cdn/avatars/639c81a39ab9117c774aa3ed-1749164301572.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>🚀 React useReducer.\nINTA AN KA SHAQEYNAYAY EXERCISE #14 WAXA LA KULME BIG CHALLENGE 😁, KAS O AH DYNAMICALLY UPDATE ANY FIELDS  QADAN KARAN , ADIGA MALA KULANTAY QAYBTA COMMENT-GA LMME KNOW..🥳.</p><p>XALKU WUXU AHA KALIYA LINE-KAN : { ...state, [action.field]: action.value }.</p><p>MUXU LA MICNO YAHAY :</p><ul class=\"list-inside list-disc whitespace-normal\" data-streamdown=\"unordered-list\">\n<li class=\"py-1 [&amp;>p]:inline\" data-streamdown=\"list-item\">MARKA HORE ISO CELI WIXI STATE-KA KU JIRAY</li>\n<li class=\"py-1 [&amp;>p]:inline\" data-streamdown=\"list-item\">THEN IGA HUBI FIELDS-KA NAME MIYA EMAIL...</li>\n<li class=\"py-1 [&amp;>p]:inline\" data-streamdown=\"list-item\">HDI U NOQDO FIRSTNAME HA IGA SIDAYN UPDATE DHEH</li>\n<li class=\"py-1 [&amp;>p]:inline\" data-streamdown=\"list-item\">HADI KALE HAKU MASHQULIN</li>\n</ul>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/639c81a39ab9117c774aa3ed/69d66ede-7b43-4061-97ce-f50cbf857e43.jpg"
      ],
      "alt": "Community post image by Abdullahi"
    },
    "tags": [
      "reactjs",
      "javascript",
      "frontend"
    ],
    "likes": 13,
    "comments": 0,
    "likedBy": "Abdale and 12 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "68525b44b802252d1f841295",
    "author": {
      "name": "Mohamedsalad User",
      "href": "/community/users/66e4549d126036c882f4e17c",
      "initials": "MU"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>ASC TEAM DUGSIYE</p>",
    "tags": [
      "javascript"
    ],
    "likes": 6,
    "comments": 0,
    "likedBy": "Ayanle and 5 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "685190313aa53175808d38ab",
    "author": {
      "name": "Omar Tood",
      "href": "/community/users/omartood",
      "avatar": "/cdn/avatars/642079d3c7a3cbe9a0d4ae4e-1760183113097.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Asc Team Cawa Live Youtube ayan lenaahay waxan kudhisi donaa project html css, team-ka html css maraya hadii ay jiran waxan fila inaad ka faa'ideysan dontaan</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/642079d3c7a3cbe9a0d4ae4e/22a5dbb9-e491-472b-8927-fda480cbd01f.jpg"
      ],
      "alt": "Community post image by Omar Tood"
    },
    "tags": [
      "#live demo"
    ],
    "likes": 13,
    "comments": 0,
    "likedBy": "Abdullahi and 12 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "68504d865b23305a1e8d671f",
    "author": {
      "name": "Abdullahi Ali",
      "href": "/community/users/accoder",
      "avatar": "/cdn/avatars/639c81a39ab9117c774aa3ed-1749164301572.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Hey #TeamReactJS 👋\nI’m looking for collaboration with anyone interested in practicing the basics of React especially:\n🔹 useState\n🔹 useEffect\n🔹 useReducer</p><div class=\"my-4 flex flex-col space-y-2\" data-streamdown=\"table-wrapper\"><div class=\"flex items-center justify-end gap-1\"><div class=\"relative\"><button class=\"cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50\" title=\"Copy table\" type=\"button\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-copy\" aria-hidden=\"true\"><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/></svg></button></div><div class=\"relative\"><button class=\"cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50\" title=\"Download table\" type=\"button\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-download\" aria-hidden=\"true\"><path d=\"M12 15V3\"/><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><path d=\"m7 10 5 5 5-5\"/></svg></button></div></div><div class=\"overflow-x-auto\"><table class=\"w-full border-collapse border border-border\" data-streamdown=\"table-wrapper\"><thead class=\"bg-muted/80\" data-streamdown=\"table-header\"><tr class=\"border-border border-b\" data-streamdown=\"table-row\"><th class=\"whitespace-nowrap px-4 py-2 text-left font-semibold text-sm\" data-streamdown=\"table-header-cell\">🔹 and working with components.</th></tr></thead><tbody class=\"divide-y divide-border bg-muted/40\" data-streamdown=\"table-body\"><tr class=\"border-border border-b\" data-streamdown=\"table-row\"><td class=\"px-4 py-2 text-sm\" data-streamdown=\"table-cell\">Goal-Ku Waxa Waye learning together by building practical mini-projects</td></tr><tr class=\"border-border border-b\" data-streamdown=\"table-row\"><td class=\"px-4 py-2 text-sm\" data-streamdown=\"table-cell\">Hadi Ad Arinkaas DanaynaySid  let’s connect! 💻✨</td></tr></tbody></table></div></div>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/639c81a39ab9117c774aa3ed/3d6bb689-e274-48ef-a288-73c25e7f68ba.jpg"
      ],
      "alt": "Community post image by Abdullahi"
    },
    "tags": [
      "reactjs js collabration learntogather frontenddev"
    ],
    "likes": 3,
    "comments": 5,
    "likedBy": "mchamuudadev and 2 others liked this",
    "commentsLabel": "5 comments"
  },
  {
    "id": "6850108e5b23305a1e8c8ad1",
    "author": {
      "name": "Faarax Cabdulaahi",
      "href": "/community/users/faaraxcabdulaahicali",
      "avatar": "/cdn/avatars/656b5a66e0a6f12d1995e493-1736977548849.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Day 1 of 100: Kicking Off My MERN Stack Journey and streak journey 🚀💻</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/656b5a66e0a6f12d1995e493/b1157994-10f3-40fe-9928-eb115482c5c9.jpg"
      ],
      "alt": "Community post image by Faarax"
    },
    "tags": [
      "fullstack"
    ],
    "likes": 4,
    "comments": 0,
    "likedBy": "Abdale and 3 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "684f26b95b23305a1e8a4a5f",
    "author": {
      "name": "Saacid Yusuf Hussein",
      "href": "/community/users/shiikhulkulli",
      "initials": "SY"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>streak 001🔥</p><p>testing</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/66e588a5126036c882f5f6b2/77ae8043-61ce-4deb-a6f5-dd81f72548d0.jpg"
      ],
      "alt": "Community post image by Saacid"
    },
    "tags": [
      "trending"
    ],
    "likes": 1,
    "comments": 0,
    "likedBy": "mchamuudadev liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "684f25d05b23305a1e8a4722",
    "author": {
      "name": "ABDIRSAK ABDULAHI",
      "href": "/community/users/geele_cakood",
      "avatar": "/cdn/avatars/67b57bac3bf5bef6b60f7a2f-1750236978682.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>tijaabo KK</p>",
    "tags": [
      "summer-break",
      "graduation"
    ],
    "likes": 0,
    "comments": 0,
    "commentsLabel": "No comments yet"
  },
  {
    "id": "684f12cc2466b5931f6c44ff",
    "author": {
      "name": "Anonymous",
      "href": "#",
      "initials": "A"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>anonymously</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/626e5f5aed6fc588a5b1087e/1504b003-5b49-420d-b0f5-0cbb0497b5ba.jpg"
      ],
      "alt": "Community post image by mchamuudadev"
    },
    "tags": [
      "eid-al-adha"
    ],
    "likes": 0,
    "comments": 0,
    "commentsLabel": "No comments yet"
  },
  {
    "id": "684da764e124124f1a3f9ab3",
    "author": {
      "name": "Abdullahi Ali",
      "href": "/community/users/accoder",
      "avatar": "/cdn/avatars/639c81a39ab9117c774aa3ed-1749164301572.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Do you, as a programmer, take notes while coding?</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/639c81a39ab9117c774aa3ed/a2008717-e777-4bfa-9147-00f419675d76.jpg"
      ],
      "alt": "Community post image by Abdullahi"
    },
    "tags": [
      "reacjs"
    ],
    "likes": 5,
    "comments": 1,
    "likedBy": "Abdullahi and 4 others liked this",
    "commentsLabel": "1 comment"
  },
  {
    "id": "684aebbff5131964952264d4",
    "author": {
      "name": "Usama Abdikarim Ashkir",
      "href": "/community/users/osama_abdi",
      "avatar": "/cdn/avatars/61ed2ba931cf554a7e45fa71-1749739823711.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Asc dhaman team dugsiiye caawo jimco waxa idin leyhy jimco wangsan, aana kuwada salino nabigena muxumed naxariis io nabad galyo dushiisa allaha yeelo</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/61ed2ba931cf554a7e45fa71/655a28be-1ce7-4c50-a246-4e2782bfe72c.jpg"
      ],
      "alt": "Community post image by Usama"
    },
    "tags": [],
    "likes": 3,
    "comments": 0,
    "likedBy": "Usama and 2 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "684346cc3ca82a0b0cded7c9",
    "author": {
      "name": "Burhaan Cabdulaahi",
      "href": "/community/users/67c2c8ab8618e725fb916b1d",
      "avatar": "/cdn/avatars/67c2c8ab8618e725fb916b1d-1776329097808.jpg"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>ASC team  dugsiiye Eid mubarak</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/67c2c8ab8618e725fb916b1d/f1bdb9af-2783-489e-8d44-2c09f7461200.jpg"
      ],
      "alt": "Community post image by Burhaan"
    },
    "tags": [],
    "likes": 8,
    "comments": 0,
    "likedBy": "Omar and 6 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "6843454f3ca82a0b0cded2be",
    "author": {
      "name": "Abdullahi Abdirashid Mohamed",
      "href": "/community/users/6453db61d99fc406c3bc008a",
      "avatar": "/cdn/avatars/6453db61d99fc406c3bc008a-1736981520648.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Eid Mubarak team dugsiiye\nCafimad iyo farxad ku ciida dhamantiin</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/6453db61d99fc406c3bc008a/91624336-3ebd-455a-a7e6-eaaf3c51428c.jpg"
      ],
      "alt": "Community post image by Abdullahi"
    },
    "tags": [
      "demo-days",
      "eid-al-adha"
    ],
    "likes": 15,
    "comments": 0,
    "likedBy": "Istar and 13 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "68431c8a3ca82a0b0cde6e2d",
    "author": {
      "name": "Abdisamed Abdi",
      "href": "/community/users/gure",
      "initials": "AA"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Ciid mubarak dhamaan team-ka dugsiiya iyo ardayda.</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/6352e50e51fc436dc1ef71c8/1095044b-c868-4d60-984d-08ed73ee1fed.jpg"
      ],
      "alt": "Community post image by Abdisamed20"
    },
    "tags": [
      "javascript",
      "eid-al-adha",
      "demo-days"
    ],
    "likes": 11,
    "comments": 0,
    "likedBy": "Abdullahi and 9 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "6843146c3ca82a0b0cde3ca8",
    "author": {
      "name": "Istar Elmi",
      "href": "/community/users/istarelmi",
      "avatar": "/cdn/avatars/63cad70e671f7db8f52af36a-1737093604887.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>ciid Adxaa dhamaan my family Dugsiiye\nAllah naga aqbalo 10 beri aan soonay\nAllah na waafajiyo sanadka xigga i.n</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/63cad70e671f7db8f52af36a/c6cbc318-74cd-44db-af55-137492678a00.jpg"
      ],
      "alt": "Community post image by Istar"
    },
    "tags": [],
    "likes": 15,
    "comments": 2,
    "likedBy": "Maxamad and 13 others liked this",
    "commentsLabel": "2 comments"
  },
  {
    "id": "684225820651683c511260df",
    "author": {
      "name": "ISMAIL QASIM",
      "href": "/community/users/ismail",
      "avatar": "/cdn/avatars/6789c132475c616ce5e06356-1749164074487.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Ciid Wanaagsan Family Dugsiiye Ciid Al Adxaa Mubaarak</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/6789c132475c616ce5e06356/e7b6d54b-f20e-45fd-babd-04dd27720465.jpg"
      ],
      "alt": "Community post image by ISMAIL"
    },
    "tags": [
      "eid-al-adha #backend"
    ],
    "likes": 12,
    "comments": 4,
    "likedBy": "Adnan and 10 others liked this",
    "commentsLabel": "4 comments"
  },
  {
    "id": "684224bb0651683c51125bd8",
    "author": {
      "name": "Adnan Mohamed",
      "href": "/community/users/mradnan",
      "avatar": "/cdn/avatars/659ebeb195987c7cc72990c7-1749163467961.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Km4 iyo dhafar</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/659ebeb195987c7cc72990c7/86315e68-54ed-4a37-acd6-7a307034c334.jpg"
      ],
      "alt": "Community post image by Adnan"
    },
    "tags": [],
    "likes": 5,
    "comments": 0,
    "likedBy": "Adnan and 3 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "6842224c0651683c51124ae7",
    "author": {
      "name": "Adnan Mohamed",
      "href": "/community/users/mradnan",
      "avatar": "/cdn/avatars/659ebeb195987c7cc72990c7-1749163467961.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Sawir ka ugu shidan 💥💥</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/659ebeb195987c7cc72990c7/65fd7a60-16c5-4ba4-9157-f6a6f56895d9.jpg"
      ],
      "alt": "Community post image by Adnan"
    },
    "tags": [
      "eid-al-adha"
    ],
    "likes": 9,
    "comments": 0,
    "likedBy": "Adnan and 8 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "684221b10651683c5112453a",
    "author": {
      "name": "Omar Tood",
      "href": "/community/users/omartood",
      "avatar": "/cdn/avatars/642079d3c7a3cbe9a0d4ae4e-1760183113097.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>War isiiya Team</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/642079d3c7a3cbe9a0d4ae4e/ee8ac6fd-9b90-4b37-bbfc-9e0b917ae819.jpg"
      ],
      "alt": "Community post image by Omar jibril abdulkadir"
    },
    "tags": [
      "artificial intelligence"
    ],
    "likes": 11,
    "comments": 1,
    "likedBy": "Abdihakim and 10 others liked this",
    "commentsLabel": "1 comment"
  },
  {
    "id": "68421f6f0651683c51122d5c",
    "author": {
      "name": "Abdullahi Ali",
      "href": "/community/users/accoder",
      "avatar": "/cdn/avatars/639c81a39ab9117c774aa3ed-1749164301572.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Hi Team Js</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/639c81a39ab9117c774aa3ed/98d3a2c6-239a-445d-b909-7d29f51d41f9.jpg"
      ],
      "alt": "Community post image by Abdullahi"
    },
    "tags": [
      "eid-al-adha",
      "graduation",
      "frontend"
    ],
    "likes": 9,
    "comments": 0,
    "likedBy": "Mohamud and 8 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "68421eb90651683c51122377",
    "author": {
      "name": "Abdihakim Adan",
      "href": "/community/users/shiine",
      "avatar": "/cdn/avatars/65c8b285f85cff6bbd293aae-1737087281502.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Eid Mubarak</p>",
    "tags": [
      "eid-al-adha"
    ],
    "likes": 8,
    "comments": 0,
    "likedBy": "Omar and 7 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "68421ea10651683c511222a4",
    "author": {
      "name": "Adnan Mohamed",
      "href": "/community/users/mradnan",
      "avatar": "/cdn/avatars/659ebeb195987c7cc72990c7-1749163467961.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Ciid wanaagsan sxbta</p>",
    "media": {
      "layout": "single",
      "images": [
        "/cdn/community/posts/659ebeb195987c7cc72990c7/5d018e9d-99f1-4359-bd6a-2c1c6fc7d3b4.jpg"
      ],
      "alt": "Community post image by Adnandil"
    },
    "tags": [
      "eid-al-adha"
    ],
    "likes": 7,
    "comments": 0,
    "likedBy": "Adnan and 6 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "68421dd90651683c51121920",
    "author": {
      "name": "Sharafdin Yusuf",
      "href": "/community/users/sharafdin",
      "avatar": "/cdn/avatars/61decd1031cf554a7e452d06-1736830758646.webp",
      "verified": true
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Ciid Wanaagsan Dugsiiye Community!</p>",
    "tags": [],
    "likes": 10,
    "comments": 0,
    "likedBy": "Sharafdin and 9 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "68421d8f0651683c511216cd",
    "author": {
      "name": "Mohamud Osman",
      "href": "/community/users/mchamoudadev",
      "avatar": "/cdn/avatars/61cd787c502bb43f7dcc3141-1785441462541.jpg",
      "verified": true
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Ciid wanaagsan dhamman team Dugsiiye #.</p>",
    "media": {
      "layout": "pair",
      "images": [
        "/cdn/community/posts/61cd787c502bb43f7dcc3141/3080f068-0459-4d74-a7a9-2423428269c1.jpg",
        "/cdn/community/posts/67951cf84ec27a8e8cde2a49/3ea4b60a-2b0b-4340-8f06-dde70ce553e9.jpg"
      ],
      "alt": "Community post image by Mc updated"
    },
    "tags": [
      "forntend",
      "eid-al-adha",
      "#forntentend"
    ],
    "likes": 39,
    "comments": 14,
    "likedBy": "Maryan and 37 others liked this",
    "commentsLabel": "14 comments"
  },
  {
    "id": "68421d8b0651683c51121679",
    "author": {
      "name": "Zakaria Elmi",
      "href": "/community/users/zakidev",
      "initials": "ZE"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Dugsiiye BIiri xoolo ma uqalana Aqayaarta😂</p>",
    "tags": [],
    "likes": 5,
    "comments": 0,
    "likedBy": "Mohamud and 4 others liked this",
    "commentsLabel": "No comments yet"
  },
  {
    "id": "68421cc80651683c51121217",
    "author": {
      "name": "Omar Tood",
      "href": "/community/users/omartood",
      "avatar": "/cdn/avatars/642079d3c7a3cbe9a0d4ae4e-1760183113097.webp"
    },
    "time": "over 1 year ago",
    "bodyHtml": "<p>Ciid wanagsan dhaman team Dugsiiye Meel kasto aad Dunida ka joogtan</p>",
    "tags": [],
    "likes": 9,
    "comments": 2,
    "likedBy": "Mohamud and 8 others liked this",
    "commentsLabel": "2 comments"
  }
];
