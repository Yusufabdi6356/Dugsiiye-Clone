# Dugsiiye Clone

Frontend clone of [dugsiiye.com](https://dugsiiye.com) — the landing page and the pages linked from it. Built with Next.js and exported as a static site. No backend, no database.

Not affiliated with Dugsiiye. All brand assets, text and images belong to them.

## Pages

- `/` home
- `/courses`
- `/mentorship`
- `/community`
- `/league`
- `/ambassador`
- `/blog` and three blog posts
- `/about`, `/contact`
- `/youtube`
- `/waa-maxay`
- `/public-terms`, `/public-privacy`, `/public-cookies`, `/public-refund`
- `/auth/login`, `/auth/register`

Other links (single course pages, profiles, videos) go to the 404 page.

## Features

- Dark / light theme
- Promo banner with countdown
- Mobile menu
- Cart (saved in localStorage)
- Course search and filters
- Blog search, tags and pagination
- Community feed filters
- Curriculum popup, FAQ accordions
- Login, register, contact and enroll forms (validation only, nothing is sent)

## Run it

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm start
```

The build goes to `out/` and can be hosted on any static host.

## Stack

Next.js 15, React 19, TypeScript, Tailwind CSS
