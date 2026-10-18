export type Course = {
  slug: string;
  title: string;
  category: string;
  level: string;
  lessons: number;
  hours: string;
  price: number;
  originalPrice: number;
  yearPrice: number;
  image: string;
  enrollHref: string;
  cover: string;
};

export const INSTRUCTOR = "Mohamud Osman";

export const courses: Course[] = [
  {
    "slug": "nextjs-app-router-fullstack-somali",
    "title": "Next.js Masterclass: Build Full-Stack Apps with App Router",
    "category": "WEB DEVELOPMENT",
    "level": "intermediate",
    "lessons": 28,
    "hours": "6.1",
    "price": 23,
    "originalPrice": 33,
    "yearPrice": 33,
    "image": "/cdn/covers/cards/nextjs-app-router-fullstack-somali.webp",
    "enrollHref": "/course/nextjs-app-router-fullstack-somali",
    "cover": "/cdn/covers/08-nextjs-masterclass.webp"
  },
  {
    "slug": "mern-stack-react-node-mongodb-somali",
    "title": "MERN Stack: Build Full-Stack Apps with React & Node",
    "category": "WEB DEVELOPMENT",
    "level": "intermediate",
    "lessons": 69,
    "hours": "16.7",
    "price": 27,
    "originalPrice": 39,
    "yearPrice": 40,
    "image": "/cdn/covers/cards/mern-stack-react-node-mongodb-somali.webp",
    "enrollHref": "/course/mern-stack-react-node-mongodb-somali",
    "cover": "/cdn/covers/s02-mern-stack.webp"
  },
  {
    "slug": "nodejs-backend-rest-api-somali",
    "title": "Node.js Backend: Build Production-Ready REST APIs",
    "category": "WEB DEVELOPMENT",
    "level": "intermediate",
    "lessons": 37,
    "hours": "9.2",
    "price": 23,
    "originalPrice": 33,
    "yearPrice": 33,
    "image": "/cdn/covers/cards/nodejs-backend-rest-api-somali.webp",
    "enrollHref": "/course/nodejs-backend-rest-api-somali",
    "cover": "/cdn/covers/s05-nodejs-backend.webp"
  },
  {
    "slug": "modern-databases-from-sql-to-nosql",
    "title": "SQL & NoSQL Databases: Complete Developer's Guide",
    "category": "WEB DEVELOPMENT",
    "level": "intermediate",
    "lessons": 37,
    "hours": "7.2",
    "price": 27,
    "originalPrice": 39,
    "yearPrice": 40,
    "image": "/cdn/covers/cards/modern-databases-from-sql-to-nosql.webp",
    "enrollHref": "/course/modern-databases-from-sql-to-nosql",
    "cover": "/cdn/covers/s06-sql-nosql-databases.webp"
  },
  {
    "slug": "react-hooks-frontend-somali",
    "title": "React.js Masterclass: Modern Frontend with Hooks",
    "category": "WEB DEVELOPMENT",
    "level": "intermediate",
    "lessons": 178,
    "hours": "34.1",
    "price": 27,
    "originalPrice": 39,
    "yearPrice": 40,
    "image": "/cdn/covers/cards/react-hooks-frontend-somali.webp",
    "enrollHref": "/course/react-hooks-frontend-somali",
    "cover": "/cdn/covers/s07-reactjs-masterclass.webp"
  },
  {
    "slug": "tailwind-css-modern-websites-somali",
    "title": "Tailwind CSS: Design & Build Modern Websites",
    "category": "WEB DEVELOPMENT",
    "level": "intermediate",
    "lessons": 21,
    "hours": "3",
    "price": 27,
    "originalPrice": 39,
    "yearPrice": 40,
    "image": "/cdn/covers/cards/tailwind-css-modern-websites-somali.webp",
    "enrollHref": "/course/tailwind-css-modern-websites-somali",
    "cover": "/cdn/covers/s08-tailwind-css.webp"
  },
  {
    "slug": "html-the-complete-guide",
    "title": "HTML5 for Beginners: Build Your First Web Pages",
    "category": "WEB DEVELOPMENT",
    "level": "beginner",
    "lessons": 47,
    "hours": "6.2",
    "price": 27,
    "originalPrice": 39,
    "yearPrice": 40,
    "image": "/cdn/covers/cards/html-the-complete-guide.webp",
    "enrollHref": "/course/html-the-complete-guide",
    "cover": "/cdn/covers/s09-html5-beginners.webp"
  },
  {
    "slug": "css-masterclass-flexbox-grid-somali",
    "title": "CSS Masterclass: From Fundamentals to Advanced Styling",
    "category": "WEB DEVELOPMENT",
    "level": "beginner",
    "lessons": 126,
    "hours": "19.7",
    "price": 27,
    "originalPrice": 39,
    "yearPrice": 40,
    "image": "/cdn/covers/cards/css-masterclass-flexbox-grid-somali.webp",
    "enrollHref": "/course/css-masterclass-flexbox-grid-somali",
    "cover": "/cdn/covers/s10-css-masterclass.webp"
  },
  {
    "slug": "javascript-es6-dom-async-somali",
    "title": "JavaScript Masterclass: ES6+, DOM & Async Patterns",
    "category": "WEB DEVELOPMENT",
    "level": "beginner",
    "lessons": 167,
    "hours": "20.9",
    "price": 27,
    "originalPrice": 39,
    "yearPrice": 40,
    "image": "/cdn/covers/cards/javascript-es6-dom-async-somali.webp",
    "enrollHref": "/course/javascript-es6-dom-async-somali",
    "cover": "/cdn/covers/s11-javascript-masterclass.webp"
  }
];

export const featuredCourse: Course = {
  slug: "build-llm-apps-rag-agents-somali",
  title: "AI Engineering Masterclass: Build LLM Apps with RAG & Agents",
  category: "WEB DEVELOPMENT",
  level: "advanced",
  lessons: 111,
  hours: "22.8",
  price: 44,
  originalPrice: 64,
  yearPrice: 69,
  image: "/cdn/covers/s01-ai-engineering-masterclass.webp",
  enrollHref: "/course/build-llm-apps-rag-agents-somali",
  cover: "/cdn/covers/s01-ai-engineering-masterclass.webp",
};

export const CATEGORIES = ["Web Development", "Mobile Development", "Web Design", "Graphic Design", "Data Analysis", "AI", "DevOps"];
export const LEVELS = ["Beginner", "Intermediate", "Advanced"];
