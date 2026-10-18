import type { Metadata, Viewport } from "next";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import RevealObserver from "@/components/layout/RevealObserver";
import { CartProvider } from "@/components/cart/CartContext";
import { THEME_STORAGE_KEY, BANNER_STORAGE_KEY, BANNER_ID } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dugsiiye.com"),
  title: "Dugsiiye: Become a Full Stack AI Engineer in 32 Weeks | #1 Somali Coding Platform",
  description:
    "Become a Full Stack AI Engineer in 32 weeks, about 8 months, taught in Somali. 10 phases from HTML to AI apps including AI chat, RAG, and multi-agent systems, built with Claude Code, Cursor, and the AI tools the industry is hiring for.",
  icons: {
    icon: [
      { url: "/brand/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/brand/favicon_io/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Dugsiiye",
    images: [{ url: "/og/dugsiiye-og.jpg", width: 1200, height: 630, alt: "Dugsiiye - #1 Somali Coding Platform" }],
  },
  twitter: { card: "summary_large_image", site: "@dugsiiye", creator: "@dugsiiye" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const bootScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('${THEME_STORAGE_KEY}')||'dark';if(t==='system'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.classList.remove('light','dark');d.classList.add(t);d.style.colorScheme=t;var b=localStorage.getItem('${BANNER_STORAGE_KEY}')==='${BANNER_ID}';d.style.setProperty('--banner-height',b?'0px':'49px');if(b)d.setAttribute('data-banner-dismissed','')}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="so" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="font-openrunde font-sans antialiased">
        <CartProvider>
        <div className="relative flex min-h-screen flex-col">
          {children}
          <div id="modal-root" />
          <WhatsAppWidget />
        </div>
        </CartProvider>
        <RevealObserver />
      </body>
    </html>
  );
}
