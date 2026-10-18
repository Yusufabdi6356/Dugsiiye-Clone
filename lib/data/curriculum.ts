export type Lesson = { title: string; duration: string | null; preview?: boolean };
export type CurriculumSection = { title: string; lessons: number; duration: string; previews?: number; items: Lesson[] };
export type Phase = {
  title: string;
  level: string;
  image: string;
  hours: number;
  lessons: number;
  description: string;
  totalDuration: string;
  sections: CurriculumSection[];
};

export const phases: Phase[] = [
 {
  "title": "HTML, CSS, Tailwind & GitHub: Ship Your First Website",
  "level": "beginner",
  "image": "/cdn/covers/01-html-css-tailwind-github.webp",
  "hours": 27,
  "lessons": 189,
  "description": "Build and ship your first real website, taught in Af-Soomaali: HTML, CSS, Flexbox, Grid, and Tailwind, then push to GitHub and go live on Vercel. 27 hands-on hours.",
  "totalDuration": "27h",
  "sections": [
   {
    "title": "Welcome & Setup",
    "lessons": 11,
    "duration": "38:23",
    "items": [
     {
      "title": "Welcome to Dugsiiye",
      "duration": "2:17",
      "preview": true
     },
     {
      "title": "How Levels Work",
      "duration": "3:58",
      "preview": true
     },
     {
      "title": "How to Upgrade Your Level",
      "duration": "1:29",
      "preview": true
     },
     {
      "title": "Weekly Live Zoom Meetings",
      "duration": "1:30",
      "preview": true
     },
     {
      "title": "How to Create a Discord Account",
      "duration": "8:57",
      "preview": true
     },
     {
      "title": "Joining the Dugsiiye Discord",
      "duration": "2:54",
      "preview": true
     },
     {
      "title": "How to Submit Your Exercises",
      "duration": "2:00",
      "preview": true
     },
     {
      "title": "Tracking Your Exercise Progress",
      "duration": "5:55",
      "preview": true
     },
     {
      "title": "Using Code Practice in Your Lessons",
      "duration": "3:40",
      "preview": true
     },
     {
      "title": "The Lessons League & Public Leaderboard",
      "duration": "4:24",
      "preview": true
     },
     {
      "title": "How to Get Support",
      "duration": "1:19",
      "preview": true
     }
    ],
    "previews": 11
   },
   {
    "title": "How the Web Works",
    "lessons": 3,
    "duration": "32:34",
    "items": [
     {
      "title": "The evolution of the Internet and how it differs from the World Wide Web",
      "duration": "11:35"
     },
     {
      "title": "How the Web Works",
      "duration": "8:36"
     },
     {
      "title": "Detailed breakdown of front-end, back-end, and full-stack development roles",
      "duration": "12:23"
     }
    ]
   },
   {
    "title": "Environment Setup",
    "lessons": 1,
    "duration": "5:42",
    "items": [
     {
      "title": "Installing Google Chrome",
      "duration": "5:42"
     }
    ]
   },
   {
    "title": "HTML Basics",
    "lessons": 11,
    "duration": "1h 16m",
    "items": [
     {
      "title": "Windows Computers | Creating Your First HTML File",
      "duration": "9:34"
     },
     {
      "title": "Mac Computers | Creating Your First HTML File",
      "duration": "4:43"
     },
     {
      "title": "Writing your first HTML Code",
      "duration": "11:30"
     },
     {
      "title": "Add Title to your page",
      "duration": "6:35"
     },
     {
      "title": "Adding Image To your Web Page",
      "duration": "8:10"
     },
     {
      "title": "Exercise #1",
      "duration": "3:32"
     },
     {
      "title": "Understanding HTML Tags",
      "duration": "9:00"
     },
     {
      "title": "Anchor Tag",
      "duration": "4:39"
     },
     {
      "title": "Adding images to the website",
      "duration": "9:14"
     },
     {
      "title": "Understanding HTML lists",
      "duration": "7:46"
     },
     {
      "title": "Exercise #2",
      "duration": "1:42"
     }
    ]
   },
   {
    "title": "More on HTML Basics",
    "lessons": 2,
    "duration": "14:25",
    "items": [
     {
      "title": "HTML Tables",
      "duration": "12:04"
     },
     {
      "title": "Exercise #3",
      "duration": "2:21"
     }
    ]
   },
   {
    "title": "HTML Forms",
    "lessons": 7,
    "duration": "49:09",
    "items": [
     {
      "title": "Understanding the various input types and their specific use cases",
      "duration": "7:33"
     },
     {
      "title": "HTML form basics",
      "duration": "11:08"
     },
     {
      "title": "Understanding text areas and dropdowns",
      "duration": "7:12"
     },
     {
      "title": "Understanding radio input",
      "duration": "6:15"
     },
     {
      "title": "Understanding checkbox input",
      "duration": "4:43"
     },
     {
      "title": "HTML validation",
      "duration": "6:11"
     },
     {
      "title": "Exercise #4",
      "duration": "6:07"
     }
    ]
   },
   {
    "title": "HTML Attributes",
    "lessons": 8,
    "duration": "1h 6m",
    "items": [
     {
      "title": "Understanding HTML Attributes: Part 1",
      "duration": "12:32"
     },
     {
      "title": "Understanding HTML Attributes: Part 2",
      "duration": "9:35"
     },
     {
      "title": "Adding Audio into Our Webpage",
      "duration": "13:54"
     },
     {
      "title": "Adding Video into Our Webpage",
      "duration": "8:16"
     },
     {
      "title": "Exercise #5",
      "duration": "1:40"
     },
     {
      "title": "Embed YouTube Videos into Our Webpage",
      "duration": "12:51"
     },
     {
      "title": "Embed Google Maps into Our Webpage",
      "duration": "6:29"
     },
     {
      "title": "Exercise #6",
      "duration": "0:54"
     }
    ]
   },
   {
    "title": "Semantic HTML",
    "lessons": 7,
    "duration": "1h 9m",
    "items": [
     {
      "title": "Understanding Semantic HTML",
      "duration": "11:24"
     },
     {
      "title": "header | Building a Simple Personal Blog Page Using HTML Semantic Tags: Part 1",
      "duration": "12:20"
     },
     {
      "title": "main | Building a Simple Personal Blog Page Using HTML Semantic Tags: Part 2",
      "duration": "9:51"
     },
     {
      "title": "aside | Building a Simple Personal Blog Page Using HTML Semantic Tags: Part 3",
      "duration": "8:09"
     },
     {
      "title": "footer | Building a Simple Personal Blog Page Using HTML Semantic Tags: Part 4",
      "duration": "5:59"
     },
     {
      "title": "Exercise #7",
      "duration": "5:13"
     },
     {
      "title": "An introduction to using HTML validators to check the markup's correctness.",
      "duration": "17:00"
     }
    ]
   },
   {
    "title": "HTML Wrap-Up Assignment: Important",
    "lessons": 1,
    "duration": "11:29",
    "items": [
     {
      "title": "HTML Wrap-Up Assignment: Important",
      "duration": "11:29"
     }
    ]
   },
   {
    "title": "Transitioning to Visual Studio Code",
    "lessons": 7,
    "duration": "45:39",
    "items": [
     {
      "title": "Downloading and Installing Visual Studio Code",
      "duration": "4:26"
     },
     {
      "title": "Understanding the Layout of Visual Studio Code",
      "duration": "8:10"
     },
     {
      "title": "Creating New Files and Folders in VS Code",
      "duration": "7:18"
     },
     {
      "title": "Understanding Visual Studio Code Extensions",
      "duration": "8:09"
     },
     {
      "title": "Visual Studio Code Settings Explained",
      "duration": "2:18"
     },
     {
      "title": "Navigating Visual Studio Code",
      "duration": "9:24"
     },
     {
      "title": "Understanding Visual Studio Code Emmet",
      "duration": "5:54"
     }
    ]
   },
   {
    "title": "Introduction to CSS: Styling Your Web Pages",
    "lessons": 9,
    "duration": "1h 22m",
    "items": [
     {
      "title": "Introduction to CSS: Styling Your Web Pages",
      "duration": "10:50"
     },
     {
      "title": "Understanding CSS Syntax",
      "duration": "10:44"
     },
     {
      "title": "Including Inline CSS Style in HTML Documents",
      "duration": "8:09"
     },
     {
      "title": "Including Internal Stylesheets in HTML Documents",
      "duration": "10:28"
     },
     {
      "title": "Using External CSS",
      "duration": "10:09"
     },
     {
      "title": "CSS Exercise #1",
      "duration": "4:29"
     },
     {
      "title": "Understanding CSS Selectors: Element and ID Selectors",
      "duration": "11:07"
     },
     {
      "title": "Utilizing CSS Class Selectors",
      "duration": "10:55"
     },
     {
      "title": "CSS Exercise #2",
      "duration": "5:47"
     }
    ]
   },
   {
    "title": "Mastering Colors in CSS",
    "lessons": 6,
    "duration": "1h 5m",
    "items": [
     {
      "title": "CSS Color Property",
      "duration": "10:38"
     },
     {
      "title": "Using HEX code and keyword color models",
      "duration": "8:49"
     },
     {
      "title": "Using RGB and RGBA",
      "duration": "20:13"
     },
     {
      "title": "Using HLS and HLSA",
      "duration": "9:36"
     },
     {
      "title": "Mini-Project: Colorful Company Profile Page",
      "duration": "14:56"
     },
     {
      "title": "CSS Exercise #3",
      "duration": "1:46"
     }
    ]
   },
   {
    "title": "Mastering Fonts in CSS",
    "lessons": 4,
    "duration": "19:30",
    "items": [
     {
      "title": "Font Properties",
      "duration": "9:44"
     },
     {
      "title": "CSS Exercise #4",
      "duration": "1:18"
     },
     {
      "title": "Text Properties",
      "duration": "6:57"
     },
     {
      "title": "CSS Exercise #5",
      "duration": "1:31"
     }
    ]
   },
   {
    "title": "Margin | Padding | Border",
    "lessons": 7,
    "duration": "40:34",
    "items": [
     {
      "title": "Margin Property Part #1",
      "duration": "12:11"
     },
     {
      "title": "Margin Property Part #2",
      "duration": "4:46"
     },
     {
      "title": "CSS Exercise #6",
      "duration": "1:23"
     },
     {
      "title": "Padding Property",
      "duration": "3:35"
     },
     {
      "title": "CSS Exercise #7",
      "duration": "1:47"
     },
     {
      "title": "Border Property",
      "duration": "13:00"
     },
     {
      "title": "CSS Exercise #8",
      "duration": "3:52"
     }
    ]
   },
   {
    "title": "Width and Height",
    "lessons": 2,
    "duration": "14:26",
    "items": [
     {
      "title": "Width and Height Properties",
      "duration": "11:24"
     },
     {
      "title": "CSS Exercise #9",
      "duration": "3:02"
     }
    ]
   },
   {
    "title": "Display and Background Properties",
    "lessons": 5,
    "duration": "40:50",
    "items": [
     {
      "title": "Display Property",
      "duration": "13:50"
     },
     {
      "title": "CSS Exercise #10",
      "duration": "0:46"
     },
     {
      "title": "Background Properties",
      "duration": "10:49"
     },
     {
      "title": "Designing a Profile Card",
      "duration": "12:42"
     },
     {
      "title": "CSS Exercise #11",
      "duration": "2:43"
     }
    ]
   },
   {
    "title": "Introduction to CSS Positioning Types",
    "lessons": 7,
    "duration": "1h 1m",
    "items": [
     {
      "title": "Introduction to CSS Positioning Types",
      "duration": "14:44"
     },
     {
      "title": "Absolute Positioning",
      "duration": "16:44"
     },
     {
      "title": "CSS Exercise #12",
      "duration": "1:20"
     },
     {
      "title": "Fixed Positioning",
      "duration": "14:58"
     },
     {
      "title": "CSS Exercise #13",
      "duration": "0:56"
     },
     {
      "title": "Sticky Positioning",
      "duration": "11:37"
     },
     {
      "title": "CSS Exercise #14",
      "duration": "1:18"
     }
    ]
   },
   {
    "title": "CSS Box Model",
    "lessons": 3,
    "duration": "29:20",
    "items": [
     {
      "title": "CSS Box Model Part #1",
      "duration": "14:12"
     },
     {
      "title": "CSS Box Model Part #2",
      "duration": "13:00"
     },
     {
      "title": "CSS Exercise #15",
      "duration": "2:08"
     }
    ]
   },
   {
    "title": "CSS Flex Box",
    "lessons": 8,
    "duration": "1h 11m",
    "items": [
     {
      "title": "CSS Flex Box",
      "duration": "20:58"
     },
     {
      "title": "Flex Property Explained",
      "duration": "8:56"
     },
     {
      "title": "CSS Exercise #16",
      "duration": "1:58"
     },
     {
      "title": "Centering a Modal Dialog Box",
      "duration": "16:04"
     },
     {
      "title": "Designing a Navigation Bar Using CSS Flexbox",
      "duration": "15:02"
     },
     {
      "title": "Centering a Div",
      "duration": "4:24"
     },
     {
      "title": "CSS Exercise #17",
      "duration": "1:21"
     },
     {
      "title": "CSS Exercise #18",
      "duration": "2:38"
     }
    ]
   },
   {
    "title": "CSS Grid",
    "lessons": 10,
    "duration": "1h 37m",
    "items": [
     {
      "title": "Introduction to CSS Grid",
      "duration": "7:34"
     },
     {
      "title": "Setting Up the Live Server Extension and Firefox Browser",
      "duration": "12:14"
     },
     {
      "title": "Defining Grid Columns and Rows",
      "duration": "20:38"
     },
     {
      "title": "Grid Gaps",
      "duration": "3:03"
     },
     {
      "title": "The fr unit",
      "duration": "5:52"
     },
     {
      "title": "CSS Exercise #19",
      "duration": "0:48"
     },
     {
      "title": "Introduction to Spanning",
      "duration": "19:05"
     },
     {
      "title": "Creating a Magazine-Style Grid Layout Part #1",
      "duration": "15:58"
     },
     {
      "title": "Creating a Magazine-Style Grid Layout Part #2",
      "duration": "10:36"
     },
     {
      "title": "CSS Exercise #20",
      "duration": "1:20"
     }
    ]
   },
   {
    "title": "Cloning a Website Layout Project",
    "lessons": 11,
    "duration": "1h 30m",
    "items": [
     {
      "title": "Cloning a Website Layout Project Overview",
      "duration": "6:22"
     },
     {
      "title": "Setting the Grid Layout of the Page",
      "duration": "8:17"
     },
     {
      "title": "How to Import Google Fonts into Your Project?",
      "duration": "5:38"
     },
     {
      "title": "Installing Super Handy Chrome Extensions for Fonts and Colors",
      "duration": "8:11"
     },
     {
      "title": "Setting Up a Blog Grid",
      "duration": "10:50"
     },
     {
      "title": "Styling the Blog Title",
      "duration": "6:39"
     },
     {
      "title": "Styling the Blog Date and Category Badge",
      "duration": "15:08"
     },
     {
      "title": "Styling the Instagram Header",
      "duration": "11:38"
     },
     {
      "title": "Styling the Follow Button",
      "duration": "12:00"
     },
     {
      "title": "Styling the User Gallery",
      "duration": "3:45"
     },
     {
      "title": "CSS Exercise #21",
      "duration": "1:42"
     }
    ]
   },
   {
    "title": "Responsive Design",
    "lessons": 8,
    "duration": "1h 23m",
    "items": [
     {
      "title": "Fluid Layouts in Responsive Design",
      "duration": "8:42"
     },
     {
      "title": "Using Relative Units",
      "duration": "9:44"
     },
     {
      "title": "Flexible Images in Responsive Design",
      "duration": "6:06"
     },
     {
      "title": "Understanding and Using em and rem Units in CSS",
      "duration": "15:16"
     },
     {
      "title": "Using rem Units in CSS",
      "duration": "11:20"
     },
     {
      "title": "Using Breakpoints and Media Queries",
      "duration": "19:34"
     },
     {
      "title": "Using Media Query Breakpoints",
      "duration": "10:44"
     },
     {
      "title": "CSS Exercise #22",
      "duration": "1:48"
     }
    ]
   },
   {
    "title": "Responsive Flexbox",
    "lessons": 5,
    "duration": "39:40",
    "items": [
     {
      "title": "Setting Up the Markup",
      "duration": "7:01"
     },
     {
      "title": "Styling the Product Card",
      "duration": "12:01"
     },
     {
      "title": "Responsive Product Design for Phones",
      "duration": "8:12"
     },
     {
      "title": "Responsive Product Design for Tablets and Large Screens",
      "duration": "11:11"
     },
     {
      "title": "CSS Exercise #23",
      "duration": "1:15"
     }
    ]
   },
   {
    "title": "Responsive Grid",
    "lessons": 3,
    "duration": "32:36",
    "items": [
     {
      "title": "Responsive Grid Products",
      "duration": "14:30"
     },
     {
      "title": "Making Predictable Grid Columns",
      "duration": "17:16"
     },
     {
      "title": "CSS Exercise #24",
      "duration": "0:50"
     }
    ]
   },
   {
    "title": "Complete Responsive Design Project",
    "lessons": 20,
    "duration": "3h 31m",
    "items": [
     {
      "title": "Overview of HTML Template Inspirations",
      "duration": "3:46"
     },
     {
      "title": "Building the Desktop Navigation",
      "duration": "10:43"
     },
     {
      "title": "Designing the Mobile Menus",
      "duration": "18:14"
     },
     {
      "title": "Exploring Font Awesome Icons",
      "duration": "12:29"
     },
     {
      "title": "Building the Hamburger Menu",
      "duration": "11:12"
     },
     {
      "title": "Making Mobile Menus",
      "duration": "14:35"
     },
     {
      "title": "Showing the Cross Icon Using Z-Index",
      "duration": "6:29"
     },
     {
      "title": "Creating Mobile Menu Actions",
      "duration": "10:15"
     },
     {
      "title": "Making the Hamburger Menu Functional Using JavaScript #1",
      "duration": "12:08"
     },
     {
      "title": "Making the Hamburger Menu Functional Using JavaScript #2",
      "duration": "9:57"
     },
     {
      "title": "Making the Hero Section",
      "duration": "19:09"
     },
     {
      "title": "Making the Hero Section Responsive",
      "duration": "8:11"
     },
     {
      "title": "Making the Yoga Section",
      "duration": "10:57"
     },
     {
      "title": "Styling the Yoga Section",
      "duration": "6:37"
     },
     {
      "title": "Making the Yoga Section Responsive",
      "duration": "4:04"
     },
     {
      "title": "Building Info Boxes Section",
      "duration": "10:32"
     },
     {
      "title": "Making Info Box Section Responsive and Final Touches",
      "duration": "6:50"
     },
     {
      "title": "Making the Perfect Condition Section",
      "duration": "15:01"
     },
     {
      "title": "Making Write to Us Sections",
      "duration": "10:05"
     },
     {
      "title": "Making the Footer Section and Some Adjustments",
      "duration": "10:33"
     }
    ]
   },
   {
    "title": "Git and GitHub",
    "lessons": 10,
    "duration": "1h 11m",
    "items": [
     {
      "title": "Intro to Git and GitHub",
      "duration": "12:49"
     },
     {
      "title": "Setting Up Permanent GitHub Authentication with HTTPS",
      "duration": "2:28"
     },
     {
      "title": "Basic Git Commands",
      "duration": "12:01"
     },
     {
      "title": "Setting Up New Repository and Configuring VS Code Terminal",
      "duration": "7:41"
     },
     {
      "title": "For Mac Computers | Configuring VS Code Terminal",
      "duration": "2:22"
     },
     {
      "title": "Pushing Code to GitHub",
      "duration": "18:09"
     },
     {
      "title": "Understanding GitHub Interface",
      "duration": "2:30"
     },
     {
      "title": "Pushing Changes to GitHub",
      "duration": "3:06"
     },
     {
      "title": "Deploying Our Website to Vercel",
      "duration": "4:00"
     },
     {
      "title": "Pushing the Changes to GitHub and Vercel",
      "duration": "6:46"
     }
    ]
   },
   {
    "title": "HTML and CSS Final Project Preview 😍",
    "lessons": 1,
    "duration": "8:25",
    "items": [
     {
      "title": "HTML and CSS Final Project Preview",
      "duration": "8:25"
     }
    ]
   },
   {
    "title": "Tailwind CSS",
    "lessons": 12,
    "duration": "2h 23m",
    "items": [
     {
      "title": "Introduction to Tailwind CSS",
      "duration": "12:35"
     },
     {
      "title": "Colors",
      "duration": "12:13"
     },
     {
      "title": "Spacing",
      "duration": "9:41"
     },
     {
      "title": "Borders",
      "duration": "13:37"
     },
     {
      "title": "Typography",
      "duration": "11:03"
     },
     {
      "title": "Width and Height",
      "duration": "20:58"
     },
     {
      "title": "Flexbox",
      "duration": "10:50"
     },
     {
      "title": "Product Card Example",
      "duration": "17:32"
     },
     {
      "title": "Grid Basics",
      "duration": "8:37"
     },
     {
      "title": "Grid Rows in Tailwind CSS",
      "duration": "5:14"
     },
     {
      "title": "Responsive Design",
      "duration": "10:15"
     },
     {
      "title": "Build a Responsive Card",
      "duration": "11:01"
     }
    ]
   }
  ]
 },
 {
  "title": "Modern JavaScript: ES6+, DOM & Async",
  "level": "beginner",
  "image": "/cdn/covers/02-modern-javascript.webp",
  "hours": 13,
  "lessons": 119,
  "description": "Move from static pages to real programming in this Somali-language JavaScript course: functions, arrays, ES6+, async/await, fetch, and DOM manipulation, with 36 hands-on exercises.",
  "totalDuration": "13h",
  "sections": [
   {
    "title": "JavaScript Basics",
    "lessons": 18,
    "duration": "2h 9m",
    "items": [
     {
      "title": "Introduction to JavaScript",
      "duration": "8:46"
     },
     {
      "title": "What is JavaScript Used For?",
      "duration": "9:25"
     },
     {
      "title": "The Browser Console",
      "duration": "4:48"
     },
     {
      "title": "Written JavaScript Code Directly in an HTML File",
      "duration": "6:00"
     },
     {
      "title": "Written Separate JavaScript File",
      "duration": "3:56"
     },
     {
      "title": "What is a Variable and How to Declare It",
      "duration": "10:16"
     },
     {
      "title": "Difference Between let and const",
      "duration": "8:14"
     },
     {
      "title": "Data Types",
      "duration": "7:55"
     },
     {
      "title": "Operators | Arithmetic Operators",
      "duration": "10:06"
     },
     {
      "title": "Sidee Exercise-ka Usoo Gudbinaysaa ?",
      "duration": null
     },
     {
      "title": "Exercise #1",
      "duration": "1:24"
     },
     {
      "title": "Comparison Operators Explained",
      "duration": "8:50"
     },
     {
      "title": "Equal and Not Equal",
      "duration": "14:57"
     },
     {
      "title": "Greater Than or Less Than",
      "duration": "11:32"
     },
     {
      "title": "Exercise #2",
      "duration": "0:53"
     },
     {
      "title": "Logical Operators",
      "duration": "11:08"
     },
     {
      "title": "Exercise #3",
      "duration": "1:21"
     },
     {
      "title": "String Operators",
      "duration": "9:49"
     }
    ]
   },
   {
    "title": "JavaScript Functions",
    "lessons": 9,
    "duration": "59:28",
    "items": [
     {
      "title": "Functions and Scope",
      "duration": "11:30"
     },
     {
      "title": "Function Parameters and Arguments",
      "duration": "9:49"
     },
     {
      "title": "Example of Function Parameters and Arguments",
      "duration": "6:10"
     },
     {
      "title": "Function Return Values",
      "duration": "7:31"
     },
     {
      "title": "Function Expression",
      "duration": "5:10"
     },
     {
      "title": "Exercise #4",
      "duration": "2:03"
     },
     {
      "title": "Arrow Function (ES6)",
      "duration": "3:07"
     },
     {
      "title": "Exercise #5",
      "duration": "0:47"
     },
     {
      "title": "Scope",
      "duration": "13:21"
     }
    ]
   },
   {
    "title": "Arrays and Objects",
    "lessons": 11,
    "duration": "1h 3m",
    "items": [
     {
      "title": "Arrays and Objects",
      "duration": "12:14"
     },
     {
      "title": "Exercise #6",
      "duration": "0:42"
     },
     {
      "title": "Array Methods",
      "duration": "10:49"
     },
     {
      "title": "Exercise #7",
      "duration": "0:52"
     },
     {
      "title": "Objects",
      "duration": "14:56"
     },
     {
      "title": "Exercise #8",
      "duration": "0:44"
     },
     {
      "title": "Adding and Modifying Properties",
      "duration": "3:46"
     },
     {
      "title": "Methods in Objects",
      "duration": "5:47"
     },
     {
      "title": "Exercise #9",
      "duration": "0:51"
     },
     {
      "title": "Arrays of Objects",
      "duration": "11:04"
     },
     {
      "title": "Exercise #10",
      "duration": "1:36"
     }
    ]
   },
   {
    "title": "Loops",
    "lessons": 12,
    "duration": "59:02",
    "items": [
     {
      "title": "For Loop",
      "duration": "15:09"
     },
     {
      "title": "More on For Loop",
      "duration": "5:21"
     },
     {
      "title": "Exercise #11",
      "duration": "0:49"
     },
     {
      "title": "Meaningful Example Using Arrays",
      "duration": "9:53"
     },
     {
      "title": "Exercise #12",
      "duration": "1:04"
     },
     {
      "title": "While Loop",
      "duration": "6:24"
     },
     {
      "title": "Exercise #13",
      "duration": "0:32"
     },
     {
      "title": "Do While Loop",
      "duration": "7:49"
     },
     {
      "title": "Exercise #14",
      "duration": "0:32"
     },
     {
      "title": "For Of Loop",
      "duration": "4:33"
     },
     {
      "title": "For In Loop",
      "duration": "5:33"
     },
     {
      "title": "Exercise #15",
      "duration": "1:23"
     }
    ]
   },
   {
    "title": "Conditional Statements (if-else)",
    "lessons": 7,
    "duration": "30:50",
    "items": [
     {
      "title": "Conditional Statements (if-else)",
      "duration": "5:52"
     },
     {
      "title": "if-else Statement",
      "duration": "3:42"
     },
     {
      "title": "Exercise #16",
      "duration": "1:06"
     },
     {
      "title": "else if Statement",
      "duration": "7:41"
     },
     {
      "title": "Exercise #17",
      "duration": "2:25"
     },
     {
      "title": "Ternary Operator",
      "duration": "9:14"
     },
     {
      "title": "Exercise #18",
      "duration": "0:50"
     }
    ]
   },
   {
    "title": "Higher-Order Array Methods",
    "lessons": 7,
    "duration": "31:22",
    "items": [
     {
      "title": "forEach() Method",
      "duration": "10:20"
     },
     {
      "title": "Exercise #19",
      "duration": "0:31"
     },
     {
      "title": "map() Method",
      "duration": "7:12"
     },
     {
      "title": "Exercise #20",
      "duration": "1:21"
     },
     {
      "title": "filter() Method",
      "duration": "5:41"
     },
     {
      "title": "reduce() Method",
      "duration": "5:45"
     },
     {
      "title": "Exercise #21",
      "duration": "0:32"
     }
    ]
   },
   {
    "title": "ES6 Basics",
    "lessons": 9,
    "duration": "31:18",
    "items": [
     {
      "title": "Template Literals",
      "duration": "5:13"
     },
     {
      "title": "Array Destructuring",
      "duration": "4:47"
     },
     {
      "title": "Exercise #22",
      "duration": "0:45"
     },
     {
      "title": "Object Destructuring",
      "duration": "3:21"
     },
     {
      "title": "Exercise #23",
      "duration": "0:43"
     },
     {
      "title": "Default Parameters",
      "duration": "2:50"
     },
     {
      "title": "Exercise #24",
      "duration": "1:56"
     },
     {
      "title": "Spread and Rest Operators",
      "duration": "9:41"
     },
     {
      "title": "Exercise #25",
      "duration": "2:02"
     }
    ]
   },
   {
    "title": "Asynchronous Programming",
    "lessons": 18,
    "duration": "2h 21m",
    "items": [
     {
      "title": "Understanding Asynchronous Programming",
      "duration": "10:05"
     },
     {
      "title": "Non-Blocking Example (Asynchronous)",
      "duration": "10:56"
     },
     {
      "title": "Exercise #26",
      "duration": "1:24"
     },
     {
      "title": "Introduction to Promises",
      "duration": "14:22"
     },
     {
      "title": "Exercise #27",
      "duration": "1:31"
     },
     {
      "title": "Using Async/Await",
      "duration": "7:20"
     },
     {
      "title": "Exercise #28",
      "duration": "0:52"
     },
     {
      "title": "Understanding JSON with Non-Blocking Code",
      "duration": "8:18"
     },
     {
      "title": "Fetching Data Example Using fetch",
      "duration": "16:05"
     },
     {
      "title": "Exercise #29",
      "duration": "1:31"
     },
     {
      "title": "Understanding Callbacks",
      "duration": "8:42"
     },
     {
      "title": "More on Callbacks",
      "duration": "9:01"
     },
     {
      "title": "Exercise #30",
      "duration": "1:16"
     },
     {
      "title": "Introduction to HTTP Requests",
      "duration": "7:15"
     },
     {
      "title": "Making HTTP Requests with fetch",
      "duration": "17:51"
     },
     {
      "title": "Making HTTP Requests using the POST Method",
      "duration": "12:34"
     },
     {
      "title": "Exploring the network Tab",
      "duration": "10:56"
     },
     {
      "title": "Exercise #31",
      "duration": "1:41"
     }
    ]
   },
   {
    "title": "Introduction to the DOM (Document Object Model)",
    "lessons": 13,
    "duration": "1h 19m",
    "items": [
     {
      "title": "Introduction to the DOM (Document Object Model)",
      "duration": "7:15"
     },
     {
      "title": "Selecting DOM Elements #1",
      "duration": "14:43"
     },
     {
      "title": "Selecting DOM Elements #2",
      "duration": "6:39"
     },
     {
      "title": "Exercise #32",
      "duration": "0:54"
     },
     {
      "title": "Manipulating DOM Elements",
      "duration": "9:11"
     },
     {
      "title": "Exercise #33",
      "duration": "0:41"
     },
     {
      "title": "Adding Elements",
      "duration": "10:00"
     },
     {
      "title": "Removing Elements",
      "duration": "3:59"
     },
     {
      "title": "Exercise #34",
      "duration": "0:40"
     },
     {
      "title": "Modifying Element Attributes",
      "duration": "8:28"
     },
     {
      "title": "Modifying Element Styles",
      "duration": "8:58"
     },
     {
      "title": "Implementing Light and Dark Mode",
      "duration": "5:29"
     },
     {
      "title": "Exercise #35",
      "duration": "2:34"
     }
    ]
   },
   {
    "title": "DOM Events and Event Handling in JavaScript",
    "lessons": 8,
    "duration": "1h 13m",
    "items": [
     {
      "title": "Basic Click Event",
      "duration": "12:29"
     },
     {
      "title": "Removing Event Listeners",
      "duration": "5:22"
     },
     {
      "title": "Handling the change Event",
      "duration": "12:31"
     },
     {
      "title": "Preventing Default Actions",
      "duration": "9:07"
     },
     {
      "title": "Form Validation: The HTML Part",
      "duration": "7:05"
     },
     {
      "title": "Username Validation",
      "duration": "9:33"
     },
     {
      "title": "Email Validation",
      "duration": "11:09"
     },
     {
      "title": "Password and Confirm Password Validation",
      "duration": "6:01"
     }
    ]
   },
   {
    "title": "Advanced Form Validation",
    "lessons": 7,
    "duration": "48:35",
    "items": [
     {
      "title": "Advanced Username Validation",
      "duration": "18:09"
     },
     {
      "title": "Showing Up Success and Error Messages",
      "duration": "6:37"
     },
     {
      "title": "Advanced Email Validation",
      "duration": "6:01"
     },
     {
      "title": "Advanced Password Validation",
      "duration": "5:54"
     },
     {
      "title": "Advanced Password Confirmation",
      "duration": "6:20"
     },
     {
      "title": "Fixing Username Space and Password Confirmation Initial State Using .trim() Method",
      "duration": "3:32"
     },
     {
      "title": "Exercise #36",
      "duration": "2:02"
     }
    ]
   }
  ]
 },
 {
  "title": "React: Components, Hooks & State",
  "level": "intermediate",
  "image": "/cdn/covers/03-react.webp",
  "hours": 20,
  "lessons": 119,
  "description": "React for Somali speakers: components, hooks, forms, and routing, practiced through real portfolio apps, from todo lists to a complete recipe collection app.",
  "totalDuration": "20h",
  "sections": [
   {
    "title": "Introduction to React and Modern Development Tools",
    "lessons": 10,
    "duration": "1h 40m",
    "items": [
     {
      "title": "What is React?",
      "duration": "7:25"
     },
     {
      "title": "Benefits of Using React",
      "duration": "14:52"
     },
     {
      "title": "Declarative vs. Imperative Programming in React",
      "duration": "12:17"
     },
     {
      "title": "Installing Node.js and npm",
      "duration": "5:55"
     },
     {
      "title": "Using Vite to Bootstrap a React Project",
      "duration": "8:29"
     },
     {
      "title": "Installing Packages and Running the Development Server",
      "duration": "8:02"
     },
     {
      "title": "Intro to JSX",
      "duration": "8:31"
     },
     {
      "title": "Understanding JSX Rules",
      "duration": "15:02"
     },
     {
      "title": "Understanding JSX Rules part #2",
      "duration": "10:05"
     },
     {
      "title": "Understanding JSX Rules part #3",
      "duration": "10:03"
     }
    ]
   },
   {
    "title": "React Components",
    "lessons": 7,
    "duration": "53:42",
    "items": [
     {
      "title": "Creating and Exporting Functional Components",
      "duration": "12:55"
     },
     {
      "title": "Named Export",
      "duration": "6:52"
     },
     {
      "title": "Exercise #1",
      "duration": "2:11"
     },
     {
      "title": "Component Composition and Hierarchy",
      "duration": "15:04"
     },
     {
      "title": "Exercise #2",
      "duration": "2:17"
     },
     {
      "title": "Understanding Props",
      "duration": "12:59"
     },
     {
      "title": "Exercise #3",
      "duration": "1:24"
     }
    ]
   },
   {
    "title": "Introducing the useState Hook",
    "lessons": 10,
    "duration": "1h 24m",
    "items": [
     {
      "title": "Introducing the useState Hook",
      "duration": "15:27"
     },
     {
      "title": "Toggling Visibility Example Using useState",
      "duration": "8:29"
     },
     {
      "title": "Form Input Management",
      "duration": "6:16"
     },
     {
      "title": "Exercise #4",
      "duration": "1:48"
     },
     {
      "title": "Updating an Object in State",
      "duration": "9:32"
     },
     {
      "title": "Managing a List of Items in an Array",
      "duration": "6:04"
     },
     {
      "title": "Manage a To-Do List",
      "duration": "6:40"
     },
     {
      "title": "Set Up the Todos and Input State",
      "duration": "10:31"
     },
     {
      "title": "Allows users to add new to-do items",
      "duration": "15:23"
     },
     {
      "title": "Exercise #5",
      "duration": "4:46"
     }
    ]
   },
   {
    "title": "Exercise #5 Solution Walkthrough",
    "lessons": 6,
    "duration": "1h 11m",
    "items": [
     {
      "title": "Solution Walkthrough | Setting Up the Component and the State",
      "duration": "10:00"
     },
     {
      "title": "Solution Walkthrough | Implement Add-to-Cart Functionality",
      "duration": "14:01"
     },
     {
      "title": "Solution Walkthrough | Setting Up the Cart Markup",
      "duration": "9:18"
     },
     {
      "title": "Solution Walkthrough | Remove Product",
      "duration": "10:03"
     },
     {
      "title": "Solution Walkthrough | Increase and Decrease Quantity",
      "duration": "17:34"
     },
     {
      "title": "Solution Walkthrough | Total Price",
      "duration": "10:51"
     }
    ]
   },
   {
    "title": "React Component Lifecycle & The useEffect Hook",
    "lessons": 10,
    "duration": "1h 38m",
    "items": [
     {
      "title": "React Component Lifecycle & The useEffect Hook",
      "duration": "11:45"
     },
     {
      "title": "Example A: Changing the Document Title",
      "duration": "16:19"
     },
     {
      "title": "Exercise #6",
      "duration": "1:33"
     },
     {
      "title": "Example B: Window Resize Event",
      "duration": "12:11"
     },
     {
      "title": "Exercise #7",
      "duration": "3:51"
     },
     {
      "title": "Example C: Stopwatch (Timers)",
      "duration": "13:48"
     },
     {
      "title": "Start, Stop, Reset Functionalities",
      "duration": "14:35"
     },
     {
      "title": "Exercise #8",
      "duration": "2:18"
     },
     {
      "title": "Example D: Simple Data Fetching",
      "duration": "19:05"
     },
     {
      "title": "Exercise #9",
      "duration": "2:57"
     }
    ]
   },
   {
    "title": "Rendering Techniques",
    "lessons": 8,
    "duration": "1h 14m",
    "items": [
     {
      "title": "Rendering Lists in React",
      "duration": "13:31"
     },
     {
      "title": "Best Practices for Keys",
      "duration": "7:29"
     },
     {
      "title": "When You Forget the { and ( Combo in React Map... Pain is Real!",
      "duration": "10:13"
     },
     {
      "title": "Handling Empty or Undefined Lists",
      "duration": "12:52"
     },
     {
      "title": "Exercise #10",
      "duration": "2:16"
     },
     {
      "title": "Techniques for Conditional Rendering",
      "duration": "18:25"
     },
     {
      "title": "Example: Toggle Visibility",
      "duration": "6:58"
     },
     {
      "title": "Exercise #11",
      "duration": "2:48"
     }
    ]
   },
   {
    "title": "Event Handling in React",
    "lessons": 2,
    "duration": "13:51",
    "items": [
     {
      "title": "Event Handling in React",
      "duration": "12:28"
     },
     {
      "title": "Exercise #12",
      "duration": "1:23"
     }
    ]
   },
   {
    "title": "Advanced State Management",
    "lessons": 4,
    "duration": "53:11",
    "items": [
     {
      "title": "Understanding Reducers",
      "duration": "15:46"
     },
     {
      "title": "Practical Example: Counter with useReducer",
      "duration": "14:33"
     },
     {
      "title": "Using the useReducer Hook",
      "duration": "19:04"
     },
     {
      "title": "Exercise #13",
      "duration": "3:48"
     }
    ]
   },
   {
    "title": "Build a Todo App with useReducer",
    "lessons": 6,
    "duration": "55:19",
    "items": [
     {
      "title": "Build a Todo App with useReducer #1",
      "duration": "11:38"
     },
     {
      "title": "Build a Todo App with useReducer #2",
      "duration": "12:12"
     },
     {
      "title": "Build a Todo App with useReducer #3",
      "duration": "9:01"
     },
     {
      "title": "Build a Todo App with useReducer #4",
      "duration": "9:54"
     },
     {
      "title": "Build a Todo App with useReducer #5",
      "duration": "7:00"
     },
     {
      "title": "Exercise #14",
      "duration": "5:34"
     }
    ]
   },
   {
    "title": "Context Api",
    "lessons": 7,
    "duration": "58:40",
    "items": [
     {
      "title": "Introducing the Context API",
      "duration": "12:30"
     },
     {
      "title": "Using Shorthand and ES7 Extensions for React Components",
      "duration": "7:32"
     },
     {
      "title": "The Problem of Prop Drilling",
      "duration": "6:56"
     },
     {
      "title": "Using the useContext Hook",
      "duration": "12:30"
     },
     {
      "title": "Another Practical Example: Theme Context",
      "duration": "15:46"
     },
     {
      "title": "Exercise #15",
      "duration": "0:47"
     },
     {
      "title": "Exercise #16",
      "duration": "2:39"
     }
    ]
   },
   {
    "title": "Creating Custom Hooks",
    "lessons": 3,
    "duration": "40:21",
    "items": [
     {
      "title": "The Need for Custom Hooks",
      "duration": "20:43"
     },
     {
      "title": "Creating a useFetch Hook",
      "duration": "14:49"
     },
     {
      "title": "Exercise #17",
      "duration": "4:49"
     }
    ]
   },
   {
    "title": "Building a Todo App with useReducer and Context",
    "lessons": 5,
    "duration": "47:43",
    "items": [
     {
      "title": "Building a Todo App with useReducer and Context #1",
      "duration": "15:20"
     },
     {
      "title": "Building a Todo App with useReducer and Context #2",
      "duration": "11:10"
     },
     {
      "title": "Building a Todo App with useReducer and Context #3",
      "duration": "6:52"
     },
     {
      "title": "Building a Todo App with useReducer and Context #4",
      "duration": "7:00"
     },
     {
      "title": "Exercise #18",
      "duration": "7:21"
     }
    ]
   },
   {
    "title": "Styling in React",
    "lessons": 6,
    "duration": "47:58",
    "items": [
     {
      "title": "Styling with Normal CSS",
      "duration": "12:58"
     },
     {
      "title": "CSS Modules for Scoped Styling",
      "duration": "15:27"
     },
     {
      "title": "Dynamic Class Names",
      "duration": "6:45"
     },
     {
      "title": "Exercise #19",
      "duration": "1:59"
     },
     {
      "title": "Styling with Tailwind CSS",
      "duration": "9:39"
     },
     {
      "title": "Exercise #20",
      "duration": "1:10"
     }
    ]
   },
   {
    "title": "Recipe Collection App with React & Tailwind CSS",
    "lessons": 7,
    "duration": "59:52",
    "items": [
     {
      "title": "Styling The Header",
      "duration": "14:07"
     },
     {
      "title": "Styling and Building the Filter Category",
      "duration": "9:40"
     },
     {
      "title": "Styling and Building the Recipe Grid",
      "duration": "9:47"
     },
     {
      "title": "Styling and Building Recipe Details",
      "duration": "11:46"
     },
     {
      "title": "Styling and Building Ingredient Section",
      "duration": "6:29"
     },
     {
      "title": "Filter by Category and Empty State",
      "duration": "5:24"
     },
     {
      "title": "Exercise #21",
      "duration": "2:39"
     }
    ]
   },
   {
    "title": "useRef in React",
    "lessons": 3,
    "duration": "35:02",
    "items": [
     {
      "title": "useRef in React",
      "duration": "13:11"
     },
     {
      "title": "Storing Mutable Values Across Renders",
      "duration": "8:52"
     },
     {
      "title": "Direct DOM Access",
      "duration": "12:59"
     }
    ]
   },
   {
    "title": "Forms and Controlled Components",
    "lessons": 7,
    "duration": "1h 25m",
    "items": [
     {
      "title": "Handling Form Submission",
      "duration": "15:42"
     },
     {
      "title": "Handling Multiple Inputs",
      "duration": "19:39"
     },
     {
      "title": "Handling Different Input Types",
      "duration": "11:59"
     },
     {
      "title": "Exercise #22",
      "duration": "0:44"
     },
     {
      "title": "Efficiently Handling Multiple Inputs",
      "duration": "12:50"
     },
     {
      "title": "Basic Form Validation",
      "duration": "21:32"
     },
     {
      "title": "Exercise #23",
      "duration": "2:40"
     }
    ]
   },
   {
    "title": "React Hook Form",
    "lessons": 4,
    "duration": "41:28",
    "items": [
     {
      "title": "Using React Hook Form for Efficient Form Handling",
      "duration": "17:32"
     },
     {
      "title": "Building a Registration Form",
      "duration": "14:31"
     },
     {
      "title": "Add Validation to the confirmPassword input",
      "duration": "7:00"
     },
     {
      "title": "Exercise #24",
      "duration": "2:25"
     }
    ]
   },
   {
    "title": "React Router and Navigation",
    "lessons": 14,
    "duration": "2h 27m",
    "items": [
     {
      "title": "Introducing React Router",
      "duration": "21:08"
     },
     {
      "title": "Implementing Navigation with <Link>",
      "duration": "9:05"
     },
     {
      "title": "Using <NavLink> for Active Links",
      "duration": "10:34"
     },
     {
      "title": "Default Route and 404 Handling",
      "duration": "2:40"
     },
     {
      "title": "Dynamic Routing and Route Parameters #1",
      "duration": "14:01"
     },
     {
      "title": "Dynamic Routing and Route Parameters #2",
      "duration": "7:29"
     },
     {
      "title": "Multiple Route Parameters",
      "duration": "8:48"
     },
     {
      "title": "Nested Routes and Layout Components",
      "duration": "11:49"
     },
     {
      "title": "Exercise #25",
      "duration": "6:28"
     },
     {
      "title": "implementing Conditional Redirects (Protected Routes) #1",
      "duration": "16:23"
     },
     {
      "title": "implementing Conditional Redirects (Protected Routes) #2",
      "duration": "13:44"
     },
     {
      "title": "useLocation #1",
      "duration": "13:12"
     },
     {
      "title": "useLocation #2",
      "duration": "8:50"
     },
     {
      "title": "Exercise #26",
      "duration": "2:50"
     }
    ]
   }
  ]
 },
 {
  "title": "MongoDB & NoSQL Fundamentals",
  "level": "intermediate",
  "image": "/cdn/covers/04-mongodb-nosql.webp",
  "hours": 4,
  "lessons": 17,
  "description": "Learn MongoDB in Somali: documents, CRUD, queries, the aggregation pipeline, and indexing. The NoSQL foundation you need before building real backends.",
  "totalDuration": "4h",
  "sections": [
   {
    "title": "Introduction & Setup",
    "lessons": 3,
    "duration": "20:44",
    "items": [
     {
      "title": "What is MongoDB and Why NoSQL?",
      "duration": "7:55",
      "preview": true
     },
     {
      "title": "Windows Users | Environment Setup",
      "duration": "5:14"
     },
     {
      "title": "Mac Users | Environment Setup",
      "duration": "7:35"
     }
    ],
    "previews": 1
   },
   {
    "title": "MongoDB Basics: Documents & CRUD",
    "lessons": 6,
    "duration": "1h 11m",
    "items": [
     {
      "title": "Documents, Collections & the Mongo Shell",
      "duration": "23:49"
     },
     {
      "title": "Exercise #1",
      "duration": "1:57"
     },
     {
      "title": "Querying & Filtering in MongoDB",
      "duration": "27:01"
     },
     {
      "title": "Exercise #2",
      "duration": "1:28"
     },
     {
      "title": "Updating Documents in MongoDB: $set, $inc, $push, $pull",
      "duration": "16:25"
     },
     {
      "title": "Exercise #3",
      "duration": "1:01"
     }
    ]
   },
   {
    "title": "Relationships & Modeling",
    "lessons": 2,
    "duration": "29:03",
    "items": [
     {
      "title": "Modeling & Reading Relationships in MongoDB Part #1",
      "duration": "13:38"
     },
     {
      "title": "Modeling & Reading Relationships in MongoDB Part #2",
      "duration": "15:25"
     }
    ]
   },
   {
    "title": "Aggregation Pipeline",
    "lessons": 4,
    "duration": "49:22",
    "items": [
     {
      "title": "Aggregation Pipeline in MongoDB $match, $group, $project",
      "duration": "20:20"
     },
     {
      "title": "Aggregation Pipeline in MongoDB $unwind $group + $sum",
      "duration": "11:16"
     },
     {
      "title": "Combine It All: Real Report",
      "duration": "15:04"
     },
     {
      "title": "Exercise #4",
      "duration": "2:42"
     }
    ]
   },
   {
    "title": "Performance & Search",
    "lessons": 2,
    "duration": "36:40",
    "items": [
     {
      "title": "Indexing in MongoDB: Make Queries Fast",
      "duration": "18:34"
     },
     {
      "title": "Text Search & Regex in MongoDB",
      "duration": "18:06"
     }
    ]
   }
  ]
 },
 {
  "title": "Backend with Node.js, Express & MongoDB",
  "level": "intermediate",
  "image": "/cdn/covers/05-backend-node-express-mongodb.webp",
  "hours": 10,
  "lessons": 37,
  "description": "Backend development in Somali: build a real REST API with Node.js and Express, store data in MongoDB, add JWT auth and role-based access, and deploy it live to Render.",
  "totalDuration": "10h",
  "sections": [
   {
    "title": "Node.js Fundamentals",
    "lessons": 7,
    "duration": "1h 49m",
    "items": [
     {
      "title": "What Is Full-Stack Web Development?",
      "duration": "10:05"
     },
     {
      "title": "Setting Up Your Node.js Environment",
      "duration": "22:26"
     },
     {
      "title": "Intro to Express.js",
      "duration": "17:16"
     },
     {
      "title": "Installing and Understanding Postman",
      "duration": "15:23"
     },
     {
      "title": "Building Routes in Express",
      "duration": "20:00"
     },
     {
      "title": "In-Memory CRUD",
      "duration": "20:31"
     },
     {
      "title": "Exercise #1",
      "duration": "3:42"
     }
    ]
   },
   {
    "title": "Working with Databases",
    "lessons": 7,
    "duration": "1h 38m",
    "items": [
     {
      "title": "Project Structure #1",
      "duration": "17:22"
     },
     {
      "title": "Project Structure #2",
      "duration": "10:01"
     },
     {
      "title": "Project Structure & Useful Development Packages",
      "duration": "18:26"
     },
     {
      "title": "Connecting Node.js to MongoDB Locally Using Mongoose",
      "duration": "24:16"
     },
     {
      "title": "Update a document in MongoDB using findByIdAndUpdate()",
      "duration": "13:56"
     },
     {
      "title": "Delete a document using findByIdAndDelete()",
      "duration": "10:05"
     },
     {
      "title": "Exercise #2",
      "duration": "4:01"
     }
    ]
   },
   {
    "title": "Structuring Scalable APIs",
    "lessons": 1,
    "duration": "20:29",
    "items": [
     {
      "title": "Understanding MVC (And Migrating to ES Modules)",
      "duration": "20:29"
     }
    ]
   },
   {
    "title": "Authentication and Authorization",
    "lessons": 12,
    "duration": "2h 53m",
    "items": [
     {
      "title": "Middleware – Logger and 404",
      "duration": "17:25"
     },
     {
      "title": "Global Error Handler",
      "duration": "8:59"
     },
     {
      "title": "Hash passwords securely using bcryptjs",
      "duration": "16:22"
     },
     {
      "title": "JWT Generator",
      "duration": "7:08"
     },
     {
      "title": "Auth Controller | Register new User",
      "duration": "20:23"
     },
     {
      "title": "Auth Controller | Login",
      "duration": "14:04"
     },
     {
      "title": "Auth Middleware Part #1",
      "duration": "15:13"
     },
     {
      "title": "Auth Middleware #2",
      "duration": "12:28"
     },
     {
      "title": "Role-Based Authorization #1",
      "duration": "16:38"
     },
     {
      "title": "Role-Based Authorization #2",
      "duration": "11:21"
     },
     {
      "title": "Exercise #3",
      "duration": "3:24"
     },
     {
      "title": "Input Validation Using Zod",
      "duration": "29:37"
     }
    ]
   },
   {
    "title": "File Uploads",
    "lessons": 2,
    "duration": "29:08",
    "items": [
     {
      "title": "Setting Up Cloudinary",
      "duration": "10:37"
     },
     {
      "title": "File Uploads with Cloudinary",
      "duration": "18:31"
     }
    ]
   },
   {
    "title": "Task Management System",
    "lessons": 2,
    "duration": "37:51",
    "items": [
     {
      "title": "Task Management System",
      "duration": "22:32"
     },
     {
      "title": "Task Management System - CRUD Operations",
      "duration": "15:19"
     }
    ]
   },
   {
    "title": "Backend Production Prep & Deployment",
    "lessons": 6,
    "duration": "1h 22m",
    "items": [
     {
      "title": "Backend Production Prep",
      "duration": "16:56"
     },
     {
      "title": "API Documentation with Swagger #1",
      "duration": "18:03"
     },
     {
      "title": "API Documentation with Swagger #2",
      "duration": "11:04"
     },
     {
      "title": "Block Spam with Rate Limiting",
      "duration": "4:45"
     },
     {
      "title": "Deploying Your Node.js API to Render",
      "duration": "26:55"
     },
     {
      "title": "Exercise #4 Capstone Project",
      "duration": "4:49"
     }
    ]
   }
  ]
 },
 {
  "title": "The Modern Full-Stack MERN Developer",
  "level": "intermediate",
  "image": "/cdn/covers/06-fullstack-mern.webp",
  "hours": 8,
  "lessons": 37,
  "description": "Course-dan waxaad ku baran doontaa sida loo dhiso full-stack web apps casri ah adigoo isticmaalaya MongoDB, Express, React, iyo Node.js — laga bilaabo backend ilaa frontend.",
  "totalDuration": "8h",
  "sections": [
   {
    "title": "Setting Up the Project and Implementing Authentication",
    "lessons": 18,
    "duration": "3h 48m",
    "items": [
     {
      "title": "Full Stack Project Intro",
      "duration": "6:31"
     },
     {
      "title": "Setting Up the Frontend and Backend",
      "duration": "14:52"
     },
     {
      "title": "Setting Up Concurrently Package for Frontend and Backend",
      "duration": "8:16"
     },
     {
      "title": "React Query Crash Course: Understanding useQuery",
      "duration": "14:32"
     },
     {
      "title": "React Query Crash Course: Understanding useMutation",
      "duration": "15:07"
     },
     {
      "title": "ShadCN Crash Course – Part 1",
      "duration": "12:26"
     },
     {
      "title": "ShadCN Crash Course – Part 2",
      "duration": "9:58"
     },
     {
      "title": "Setting Up React Router",
      "duration": "6:29"
     },
     {
      "title": "Setting Up the Registration Page",
      "duration": "17:19"
     },
     {
      "title": "Solving Registration Page Issues",
      "duration": "9:40"
     },
     {
      "title": "Setting Up the Login Page",
      "duration": "4:36"
     },
     {
      "title": "User Registration Mutation – Part 1",
      "duration": "16:01"
     },
     {
      "title": "User Registration Mutation – Part 2",
      "duration": "13:19"
     },
     {
      "title": "Global Error Handling",
      "duration": "18:14"
     },
     {
      "title": "Login Functionality",
      "duration": "9:07"
     },
     {
      "title": "Introducing Zustand for Global State Management",
      "duration": "18:28"
     },
     {
      "title": "Implementing Protected Routes",
      "duration": "26:32"
     },
     {
      "title": "Implementing Admin Route",
      "duration": "7:07"
     }
    ]
   },
   {
    "title": "Implementing Dashboard Functionalities",
    "lessons": 18,
    "duration": "3h 56m",
    "items": [
     {
      "title": "Implementing Dashboard Header",
      "duration": "14:56"
     },
     {
      "title": "Handling Logout Functionality",
      "duration": "10:56"
     },
     {
      "title": "Using ShadCN Dialog to Create a Task Form",
      "duration": "11:35"
     },
     {
      "title": "Creating the Task Form",
      "duration": "12:11"
     },
     {
      "title": "Task Mutation",
      "duration": "11:26"
     },
     {
      "title": "Axios Request Interceptors",
      "duration": "9:20"
     },
     {
      "title": "Status Overview Design",
      "duration": "17:07"
     },
     {
      "title": "Creating Task Tabs with ShadCN",
      "duration": "21:07"
     },
     {
      "title": "Creating the Task Grid",
      "duration": "16:58"
     },
     {
      "title": "Using Tabs",
      "duration": "5:27"
     },
     {
      "title": "Solving Tab Issues and Completing the Grid Card",
      "duration": "22:13"
     },
     {
      "title": "Implementing Delete Functionality",
      "duration": "14:41"
     },
     {
      "title": "Implementing Update Functionality",
      "duration": "17:46"
     },
     {
      "title": "Handling Search",
      "duration": "5:55"
     },
     {
      "title": "Deploying a Full-Stack MERN Application P #1",
      "duration": "13:14"
     },
     {
      "title": "Deploying a Full-Stack MERN Application P #2",
      "duration": "13:14"
     },
     {
      "title": "Deploying a Full-Stack MERN Application P #3",
      "duration": "12:32"
     },
     {
      "title": "Solving the Production URL Issue",
      "duration": "5:30"
     }
    ]
   },
   {
    "title": "Full Stack Capstone Project",
    "lessons": 1,
    "duration": "1:08",
    "items": [
     {
      "title": "Full Stack Capstone Project",
      "duration": "1:08"
     }
    ]
   }
  ]
 },
 {
  "title": "TypeScript: Types, Interfaces & Generics",
  "level": "intermediate",
  "image": "/cdn/covers/07-typescript.webp",
  "hours": 3,
  "lessons": 14,
  "description": "Learn TypeScript in Af-Soomaali: types, interfaces, generics, and enums. AI tools like Cursor and Claude Code write TypeScript by default, so reading it is no longer optional.",
  "totalDuration": "3h",
  "sections": [
   {
    "title": "TypeScript Fundamentals",
    "lessons": 14,
    "duration": "2h 15m",
    "items": [
     {
      "title": "What is TypeScript & Why Use It?",
      "duration": "17:21"
     },
     {
      "title": "Basic Types",
      "duration": "15:22"
     },
     {
      "title": "Exercise #1",
      "duration": "2:42"
     },
     {
      "title": "Arrays and Tuples",
      "duration": "11:11"
     },
     {
      "title": "Exercise #2",
      "duration": "1:44"
     },
     {
      "title": "Functions and Typing",
      "duration": "15:16"
     },
     {
      "title": "Exercise #3",
      "duration": "1:43"
     },
     {
      "title": "Describing Object Shapes with interface and type",
      "duration": "22:52"
     },
     {
      "title": "Exercise #4",
      "duration": "1:46"
     },
     {
      "title": "Generics Part 1",
      "duration": "12:06"
     },
     {
      "title": "Generics Part 2",
      "duration": "13:22"
     },
     {
      "title": "Exercise #5",
      "duration": "2:00"
     },
     {
      "title": "enum, and as in TypeScript",
      "duration": "15:59"
     },
     {
      "title": "Exercise #6",
      "duration": "1:40"
     }
    ]
   }
  ]
 },
 {
  "title": "Next.js Masterclass: Build Full-Stack Apps with App Router",
  "level": "intermediate",
  "image": "/cdn/covers/08-nextjs-masterclass.webp",
  "hours": 7,
  "lessons": 28,
  "description": "Next.js with the App Router, taught in Somali: Server Components, Server Actions, and caching, ending in a full-stack MongoDB app with frontend and backend in one project.",
  "totalDuration": "7h",
  "sections": [
   {
    "title": "Next.js Basics",
    "lessons": 18,
    "duration": "3h 59m",
    "items": [
     {
      "title": "What Is Next.js and Why Should You Use It?",
      "duration": "18:36"
     },
     {
      "title": "Setting Up a Next.js 15.4 Project with App Router and TailwindCSS",
      "duration": "11:09"
     },
     {
      "title": "Root and Nested Layouts",
      "duration": "16:09"
     },
     {
      "title": "Dynamic Routes",
      "duration": "21:23"
     },
     {
      "title": "API Routes (Static)",
      "duration": "17:47"
     },
     {
      "title": "Exercise #1",
      "duration": "1:59"
     },
     {
      "title": "Server Components",
      "duration": "17:31"
     },
     {
      "title": "SSR (Server-Side Rendering) and SSG (Static Site Generation)",
      "duration": "16:35"
     },
     {
      "title": "Streaming with Suspense",
      "duration": "11:12"
     },
     {
      "title": "Exercise #2",
      "duration": "1:33"
     },
     {
      "title": "Server Actions and Form Handling",
      "duration": "21:01"
     },
     {
      "title": "Exercise #3",
      "duration": "1:02"
     },
     {
      "title": "Data Fetching & Caching P #1",
      "duration": "15:38"
     },
     {
      "title": "Data Fetching & Caching P #2",
      "duration": "13:25"
     },
     {
      "title": "SEO, Metadata, and Dynamic Open Graph in Next.js P #1",
      "duration": "12:49"
     },
     {
      "title": "SEO, Metadata, and Dynamic Open Graph in Next.js P #2",
      "duration": "13:39"
     },
     {
      "title": "Fonts Optimization",
      "duration": "11:39"
     },
     {
      "title": "Image Optimization",
      "duration": "15:58"
     }
    ]
   },
   {
    "title": "Next.js Middlewares",
    "lessons": 2,
    "duration": "29:25",
    "items": [
     {
      "title": "Middlewares",
      "duration": "17:17"
     },
     {
      "title": "Rewriting URLs with Middleware",
      "duration": "12:08"
     }
    ]
   },
   {
    "title": "Modern Full-Stack Implementation",
    "lessons": 7,
    "duration": "1h 28m",
    "items": [
     {
      "title": "Setting Up the Project and Connecting to MongoDB",
      "duration": "13:25"
     },
     {
      "title": "Data Layer with Error Handling",
      "duration": "16:46"
     },
     {
      "title": "Server Actions with Consistent Patterns",
      "duration": "13:33"
     },
     {
      "title": "Create Todo",
      "duration": "13:12"
     },
     {
      "title": "Update and Delete Todo",
      "duration": "22:47"
     },
     {
      "title": "Toggle Todo",
      "duration": "5:13"
     },
     {
      "title": "Exercise #4",
      "duration": "3:54"
     }
    ]
   },
   {
    "title": "Research Project",
    "lessons": 1,
    "duration": "6:39",
    "items": [
     {
      "title": "Research Project",
      "duration": "6:39"
     }
    ]
   }
  ]
 },
 {
  "title": "Professional AI Engineer Track",
  "level": "advanced",
  "image": "/cdn/covers/09-professional-ai-engineer-v2.webp",
  "hours": 23,
  "lessons": 110,
  "description": "The AI phase of the Somali-language Full Stack AI Engineer mentorship: build an AI chat app, a chat-with-PDF RAG system, and a multi-agent system, with nine reviewed exercises and an open challenge.",
  "totalDuration": "23h",
  "sections": [
   {
    "title": "AI Foundations",
    "lessons": 5,
    "duration": "1h 30m",
    "items": [
     {
      "title": "What is Artificial Intelligence?",
      "duration": "21:54"
     },
     {
      "title": "What is AI Engineering?",
      "duration": "13:57"
     },
     {
      "title": "Large Language Models (LLMs) Deep Dive",
      "duration": "15:02"
     },
     {
      "title": "Essential AI/LLM Terminology",
      "duration": "23:36"
     },
     {
      "title": "PROMPT ENGINEERING - GUIDING WITHOUT TRAINING",
      "duration": "16:10"
     }
    ]
   },
   {
    "title": "AI APIs & Integration Patterns",
    "lessons": 10,
    "duration": "1h 18m",
    "items": [
     {
      "title": "Understanding the OpenAI Interface and Models",
      "duration": "11:15"
     },
     {
      "title": "Talking to the OpenAI API",
      "duration": "10:58"
     },
     {
      "title": "Streaming Text Generation",
      "duration": "10:39"
     },
     {
      "title": "Exercise #1",
      "duration": "2:19"
     },
     {
      "title": "Image Generation API",
      "duration": "13:23"
     },
     {
      "title": "Exercise #2",
      "duration": "1:55"
     },
     {
      "title": "Text-to-Speech API",
      "duration": "10:15"
     },
     {
      "title": "Exercise #3",
      "duration": "1:25"
     },
     {
      "title": "Speech-to-Text API",
      "duration": "14:23"
     },
     {
      "title": "Exercise #4",
      "duration": "2:04"
     }
    ]
   },
   {
    "title": "AI SDK",
    "lessons": 9,
    "duration": "1h 50m",
    "items": [
     {
      "title": "AI SDK v5 | Basic Text Generation",
      "duration": "20:24"
     },
     {
      "title": "Creating a Simple Page to Test the OpenAI API",
      "duration": "12:13"
     },
     {
      "title": "Understanding Streaming Responses",
      "duration": "7:57"
     },
     {
      "title": "Create a Streaming Responses P #1",
      "duration": "15:42"
     },
     {
      "title": "Create a Streaming Responses P #2",
      "duration": "14:36"
     },
     {
      "title": "Enhance Your Chatbot with Tools P #1",
      "duration": "12:04"
     },
     {
      "title": "Enhance Your Chatbot with Tools P #2",
      "duration": "11:13"
     },
     {
      "title": "Multi-Step Tool Calls",
      "duration": "11:08"
     },
     {
      "title": "Exercise #5",
      "duration": "5:20"
     }
    ]
   },
   {
    "title": "Better Auth with Drizzle ORM and PostgreSQL",
    "lessons": 5,
    "duration": "1h 24m",
    "items": [
     {
      "title": "Better Auth with Drizzle ORM and PostgreSQL",
      "duration": "19:13"
     },
     {
      "title": "Signup with Better Auth (Using Drizzle ORM + PostgreSQL)",
      "duration": "14:28"
     },
     {
      "title": "Sign In with Better Auth and Get User Session",
      "duration": "19:00"
     },
     {
      "title": "Managing User Sessions with Better Auth",
      "duration": "19:00"
     },
     {
      "title": "Sign In with Google Using Better Auth",
      "duration": "13:04"
     }
    ]
   },
   {
    "title": "Full Stack AI Chat App",
    "lessons": 10,
    "duration": "2h 1m",
    "items": [
     {
      "title": "Adding the Chat Schema",
      "duration": "6:37"
     },
     {
      "title": "Creating the Conversation Service",
      "duration": "14:02"
     },
     {
      "title": "Creating the Message Service",
      "duration": "25:01"
     },
     {
      "title": "Creating the Chat Page",
      "duration": "14:10"
     },
     {
      "title": "Designing the Chat Interface P #1",
      "duration": "12:02"
     },
     {
      "title": "Designing the Chat Interface P #2",
      "duration": "12:45"
     },
     {
      "title": "Implementing the Chat Route",
      "duration": "18:24"
     },
     {
      "title": "Adding streaming-down Alternative for React Markdown",
      "duration": "15:12"
     },
     {
      "title": "Drizzle Common Issues !",
      "duration": "1:19"
     },
     {
      "title": "Exercise #6",
      "duration": "2:21"
     }
    ]
   },
   {
    "title": "AI Image Editor With Nano Banana",
    "lessons": 11,
    "duration": "2h 37m",
    "items": [
     {
      "title": "Project Demo",
      "duration": "9:14"
     },
     {
      "title": "Exploring AI Models in the Market",
      "duration": "20:18"
     },
     {
      "title": "Creating Tabs in the Image Editing Section",
      "duration": "18:11"
     },
     {
      "title": "Using React Dropzone for File Uploads",
      "duration": "14:54"
     },
     {
      "title": "Drop Functionality and Image Preview with React Dropzone",
      "duration": "11:23"
     },
     {
      "title": "Loading and Processing Button with Visual Feedback",
      "duration": "13:58"
     },
     {
      "title": "Creating the Result Section",
      "duration": "12:57"
     },
     {
      "title": "Exploring the Replicate Playground",
      "duration": "8:32"
     },
     {
      "title": "Making the Actual Request to Replicate API",
      "duration": "19:56"
     },
     {
      "title": "Implementing Download and Copy to Clipboard Functionality",
      "duration": "11:07"
     },
     {
      "title": "Image Editing Functionality",
      "duration": "17:13"
     }
    ]
   },
   {
    "title": "RAG Systems | Chat With PDF",
    "lessons": 23,
    "duration": "4h 33m",
    "items": [
     {
      "title": "Project Intro",
      "duration": "5:00"
     },
     {
      "title": "What RAG Systems Are and How Vectors & Embeddings Work",
      "duration": "14:23"
     },
     {
      "title": "Designing the Home Layout",
      "duration": "8:46"
     },
     {
      "title": "Setting Up the Upload Route and MongoDb.",
      "duration": "11:01"
     },
     {
      "title": "Processing the PDF File",
      "duration": "16:00"
     },
     {
      "title": "Creating PDF Chunks for Processing",
      "duration": "18:00"
     },
     {
      "title": "Creating the Embeddings",
      "duration": "13:58"
     },
     {
      "title": "Store vectors in Pinecone",
      "duration": "16:43"
     },
     {
      "title": "Creating the Upload Component #1",
      "duration": "12:13"
     },
     {
      "title": "Creating the Upload Component #2",
      "duration": "10:51"
     },
     {
      "title": "Upload Functionality Implementation",
      "duration": "14:23"
     },
     {
      "title": "Fetching the Document List",
      "duration": "7:43"
     },
     {
      "title": "Showing the Document List",
      "duration": "16:47"
     },
     {
      "title": "Delete Functionality",
      "duration": "8:27"
     },
     {
      "title": "Processing the User Query via API #1",
      "duration": "13:06"
     },
     {
      "title": "Processing the User Query via API #2",
      "duration": "13:19"
     },
     {
      "title": "Creating a Streaming Response for User Queries",
      "duration": "15:37"
     },
     {
      "title": "Creating the Chat Component #1",
      "duration": "11:59"
     },
     {
      "title": "Creating the Chat Component #2",
      "duration": "12:11"
     },
     {
      "title": "Solving the Metadata Issue",
      "duration": "10:25"
     },
     {
      "title": "Using Cohere API to Rerank the Results",
      "duration": "8:07"
     },
     {
      "title": "Testing the Final App",
      "duration": "11:00"
     },
     {
      "title": "Exercise #7 | Open Challenge: Create Your Own AI App",
      "duration": "3:02"
     }
    ]
   },
   {
    "title": "AI Agents | Inngest for AI Agents",
    "lessons": 12,
    "duration": "2h 26m",
    "items": [
     {
      "title": "Multi AI Agent System - Project Intro",
      "duration": "9:02"
     },
     {
      "title": "What the Hell is an AI Agent?",
      "duration": "18:17"
     },
     {
      "title": "Inngest for AI Agents",
      "duration": "13:07"
     },
     {
      "title": "Setup Inngest",
      "duration": "20:49"
     },
     {
      "title": "Multi-Step: step.run() - Three Steps",
      "duration": "9:44"
     },
     {
      "title": "Delay Step: step.sleep()",
      "duration": "10:12"
     },
     {
      "title": "Wait for Event: step.waitForEvent()",
      "duration": "14:33"
     },
     {
      "title": "Retries and Error Handling",
      "duration": "13:33"
     },
     {
      "title": "Cron Jobs (Scheduled Functions)",
      "duration": "15:32"
     },
     {
      "title": "Concurrency Control",
      "duration": "11:28"
     },
     {
      "title": "Event-Driven Architecture",
      "duration": "7:48"
     },
     {
      "title": "Exercise #8",
      "duration": "2:13"
     }
    ]
   },
   {
    "title": "Multi-Agent System",
    "lessons": 17,
    "duration": "3h 30m",
    "items": [
     {
      "title": "News Analysis Multi-Agent System: Visual Workflow",
      "duration": "7:44"
     },
     {
      "title": "Setting Up Inngest Agent Kit and Serper API",
      "duration": "8:41"
     },
     {
      "title": "Creating newsScoutAgent",
      "duration": "15:33"
     },
     {
      "title": "Creating serperSearchTool",
      "duration": "16:27"
     },
     {
      "title": "Creating centimentAnalyzerAgent",
      "duration": "18:15"
     },
     {
      "title": "Creating contentCreatorAgent",
      "duration": "9:05"
     },
     {
      "title": "Creating posterGeneratorAgent",
      "duration": "10:18"
     },
     {
      "title": "Creating moderatorAgent",
      "duration": "7:27"
     },
     {
      "title": "Creating SUPERVISOR ROUTER Agent #1",
      "duration": "10:37"
     },
     {
      "title": "Creating SUPERVISOR ROUTER Agent #2",
      "duration": "11:09"
     },
     {
      "title": "Creating the Agents Network and Testing the Agents #1",
      "duration": "11:05"
     },
     {
      "title": "Creating the Agents Network and Testing the Agents #2",
      "duration": "12:09"
     },
     {
      "title": "Setting Up Inngest Event API and Tenstach",
      "duration": "14:49"
     },
     {
      "title": "Implementing Search Input",
      "duration": "20:56"
     },
     {
      "title": "Showing Real-Time Feedback",
      "duration": "14:49"
     },
     {
      "title": "Showing Results Cards",
      "duration": "17:10"
     },
     {
      "title": "Exercise #9",
      "duration": "3:50"
     }
    ]
   },
   {
    "title": "Fine-Tuning and Open Source Models",
    "lessons": 8,
    "duration": "1h 37m",
    "items": [
     {
      "title": "Fine-Tuning Large Language Models (LLMs)",
      "duration": "15:43"
     },
     {
      "title": "Data Format: JSONL",
      "duration": "17:41"
     },
     {
      "title": "Case Study: Dugsiiye Fine-Tuning Experiment",
      "duration": "19:15"
     },
     {
      "title": "Comparing the Base Model with the Fine-Tuned One",
      "duration": "5:29"
     },
     {
      "title": "Calling Our Fine-Tuned Model Programmatically",
      "duration": "5:11"
     },
     {
      "title": "Working With Open-Source Language Models Locally",
      "duration": "12:33"
     },
     {
      "title": "Exploring Hugging Face and Installing LM Studio with Available Models",
      "duration": "12:59"
     },
     {
      "title": "Accessing APIs Locally",
      "duration": "8:10"
     }
    ]
   }
  ]
 },
 {
  "title": "Agentic Coding with Claude Code: Build & Ship a Real App",
  "level": "intermediate",
  "image": "/cdn/covers/10-agentic-coding-claude-code.webp",
  "hours": 13,
  "lessons": 53,
  "description": "Master Claude Code in Af-Soomaali: the Explore, Plan, Code, Commit workflow, plus CLAUDE.md, skills, subagents, MCP, and worktrees, then build and ship a real app.",
  "totalDuration": "13h",
  "sections": [
   {
    "title": "Module 1 · Foundations",
    "lessons": 6,
    "duration": "1h 24m",
    "items": [
     {
      "title": "What Agentic Coding Actually Is",
      "duration": "11:11",
      "preview": true
     },
     {
      "title": "Install, Login, and Your First Session",
      "duration": "11:06"
     },
     {
      "title": "Comparing Different Models: Open Source and Closed Source",
      "duration": "12:42"
     },
     {
      "title": "Running Open Source Models on Our Claude Code",
      "duration": "17:06"
     },
     {
      "title": "Use a Launcher Command (.zshrc / .bat File)",
      "duration": "10:34"
     },
     {
      "title": "Daily-Driver Commands",
      "duration": "21:45"
     }
    ],
    "previews": 1
   },
   {
    "title": "Module 2 · Context Is Everything",
    "lessons": 6,
    "duration": "1h 56m",
    "items": [
     {
      "title": "The Workflow: Explore, Plan, Code, Commit",
      "duration": "14:46"
     },
     {
      "title": "Generic Plan Mode",
      "duration": "17:19"
     },
     {
      "title": "Grill Me builds the Quotes App",
      "duration": "21:10"
     },
     {
      "title": "Code: Executing the Plan",
      "duration": "16:02"
     },
     {
      "title": "Commit: Sealing Each Work Cycle",
      "duration": "21:45"
     },
     {
      "title": "Plan: Adding to Existing Code (Brownfield)",
      "duration": "25:46"
     }
    ]
   },
   {
    "title": "Module 3 · Project Memory",
    "lessons": 3,
    "duration": "28:12",
    "items": [
     {
      "title": "What CLAUDE.md Is (and Why Every Project Needs One)",
      "duration": "11:55"
     },
     {
      "title": "Writing Your First CLAUDE.md",
      "duration": "15:08"
     },
     {
      "title": "Windows Users: Location for the CLAUDE.md File",
      "duration": "1:09"
     }
    ]
   },
   {
    "title": "Module 4 · Custom Skills",
    "lessons": 5,
    "duration": "1h 6m",
    "items": [
     {
      "title": "What Skills Are (and When to Reach for One)",
      "duration": "17:57"
     },
     {
      "title": "Skills with Arguments",
      "duration": "11:30"
     },
     {
      "title": "The Bundled Skills: Using What Ships With Claude Code",
      "duration": "12:44"
     },
     {
      "title": "Controlling Who Invokes a Skill (and What It Can Touch)",
      "duration": "4:51"
     },
     {
      "title": "Skill Finder and Skill Marketplace",
      "duration": "19:54"
     }
    ]
   },
   {
    "title": "Module 5 · Permissions & Hooks",
    "lessons": 1,
    "duration": "15:28",
    "items": [
     {
      "title": "Hooks: Guarantee vs Suggest",
      "duration": "15:28"
     }
    ]
   },
   {
    "title": "Subagents & Skills",
    "lessons": 2,
    "duration": "30:23",
    "items": [
     {
      "title": "Subagents: Specialists in Their Own Context",
      "duration": "20:10"
     },
     {
      "title": "A Skill That Runs as a Subagent",
      "duration": "10:13"
     }
    ]
   },
   {
    "title": "MCP: Connecting Claude to the Outside World",
    "lessons": 2,
    "duration": "27:21",
    "items": [
     {
      "title": "MCP: Connecting Claude to the Outside World",
      "duration": "17:09"
     },
     {
      "title": "MCP Real-World Example: Zoom & Notion",
      "duration": "10:12"
     }
    ]
   },
   {
    "title": "The Claude Ecosystem: Chrome, Desktop & Remote",
    "lessons": 4,
    "duration": "29:57",
    "items": [
     {
      "title": "Claude Code in Chrome: GIF Creator Tool",
      "duration": "13:39"
     },
     {
      "title": "Claude Desktop Preview",
      "duration": "5:42"
     },
     {
      "title": "Claude Teleport Feature",
      "duration": "6:31"
     },
     {
      "title": "Claude Code Remote Control",
      "duration": "4:05"
     }
    ]
   },
   {
    "title": "Customizing Your Claude Code Setup",
    "lessons": 6,
    "duration": "51:39",
    "items": [
     {
      "title": "Claude Code with the Telegram Plugin",
      "duration": "16:48"
     },
     {
      "title": "Install the GitHub App",
      "duration": "12:15"
     },
     {
      "title": "Claude Code Status Line",
      "duration": "6:12"
     },
     {
      "title": "Rename & Coloring in Claude Code",
      "duration": "9:39"
     },
     {
      "title": "Fullscreen Rendering in Claude Code",
      "duration": "4:34"
     },
     {
      "title": "Voice Mode in Claude Code",
      "duration": "2:11"
     }
    ]
   },
   {
    "title": "Parallel & Background Work",
    "lessons": 4,
    "duration": "1h 4m",
    "items": [
     {
      "title": "Parallel & Background Work: Worktrees, Background Subagents, /batch & Dynamic Workflows",
      "duration": "22:42"
     },
     {
      "title": "Git Worktrees: Two Tasks at Once",
      "duration": "18:40"
     },
     {
      "title": "Background a Subagent",
      "duration": "2:59"
     },
     {
      "title": "/batch & Dynamic Workflows",
      "duration": "20:05"
     }
    ]
   },
   {
    "title": "Designing with AI",
    "lessons": 5,
    "duration": "49:13",
    "items": [
     {
      "title": "How to Get Beautiful Design Resources for Your AI Coding Agent",
      "duration": "8:39"
     },
     {
      "title": "Implementing Pixel-Perfect Design Using Figma MCP into Claude Code",
      "duration": "14:59"
     },
     {
      "title": "Designing a Modern Mobile App Using Stitch by Google",
      "duration": "13:36"
     },
     {
      "title": "Designing Beautiful UIs Using Claude Design",
      "duration": "5:13"
     },
     {
      "title": "Implement the Design Using Claude Code",
      "duration": "6:46"
     }
    ]
   },
   {
    "title": "Building Our Project: Multi-Agent & Parallel Execution",
    "lessons": 6,
    "duration": "2h 0m",
    "items": [
     {
      "title": "Multi-Agent System Overview",
      "duration": "8:16"
     },
     {
      "title": "Design the UI/UX of Our Project Using Claude Design",
      "duration": "18:54"
     },
     {
      "title": "Creating a Task List & Acceptance Criteria",
      "duration": "18:31"
     },
     {
      "title": "Implementing the 19 Tasks in Parallel — Part 1",
      "duration": "35:09"
     },
     {
      "title": "Implementing the 19 Tasks in Parallel — Part 2",
      "duration": "11:10"
     },
     {
      "title": "Implementing the 19 Tasks in Parallel — Part 3",
      "duration": "28:39"
     }
    ]
   },
   {
    "title": "Shipping to Production",
    "lessons": 3,
    "duration": "40:01",
    "items": [
     {
      "title": "Purchasing a VPS & Domain Name",
      "duration": "15:43"
     },
     {
      "title": "Preparing for Production Security Fixes",
      "duration": "17:35"
     },
     {
      "title": "Setup MongoDB Atlas",
      "duration": "6:43"
     }
    ]
   }
  ]
 }
];
