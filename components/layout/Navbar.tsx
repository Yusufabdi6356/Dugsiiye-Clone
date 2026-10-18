"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { useTheme } from "@/lib/theme";
import CartDrawer from "./CartDrawer";
import { useCart } from "@/components/cart/CartContext";

const LINK_BASE = "rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors";
const LINK_ACTIVE = "bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-50";
const LINK_IDLE = "text-[#8D8D8D] hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-50";
const ICON_BTN =
  "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#1E1E1E] transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:text-neutral-100 dark:hover:bg-neutral-800";
const AUTH_BASE =
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

function withRedirect(base: string, pathname: string) {
  return pathname === "/" ? base : `${base}?redirect=${encodeURIComponent(pathname)}`;
}

export default function Navbar() {
  const pathname = usePathname() || "/";
  const { toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const cart = useCart();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <nav aria-label="Main" className="fixed inset-x-0 z-50" style={{ top: "calc(var(--banner-height, 0px) + 1rem)" }}>
        <div className="mx-auto max-w-[1160px] px-5 md:px-8">
          <div className="flex items-center justify-between gap-2 rounded-full border border-neutral-200/60 bg-white/90 backdrop-blur-xl transition-all duration-300 dark:border-neutral-800 dark:bg-neutral-900/90 h-14 px-4 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-black/30">
            <Link className="flex shrink-0 items-center" aria-label="Dugsiiye home" href="/">
              <div className="relative h-9 w-[100px]">
                <img alt="Dugsiiye logo" decoding="async" className="hidden object-contain dark:block" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/white_green.webp" />
                <img alt="Dugsiiye logo" decoding="async" className="block object-contain dark:hidden" style={{ position: "absolute", height: "100%", width: "100%", left: "0", top: "0", right: "0", bottom: "0" }} src="/dark_green.webp" />
              </div>
            </Link>
            <div className="hidden items-center gap-0.5 lg:flex">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} className={`${LINK_BASE} ${isActive(pathname, l.href) ? LINK_ACTIVE : LINK_IDLE}`} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <button type="button" onClick={toggle} className={ICON_BTN}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="absolute h-[18px] w-[18px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" />
                </svg>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z" />
                </svg>
                <span className="sr-only">Toggle theme</span>
              </button>
              <button onClick={() => cart.setOpen(true)} className="relative h-8 w-8 flex items-center justify-center rounded-full text-[#1E1E1E] transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] dark:focus-visible:ring-neutral-300 dark:text-neutral-100 dark:hover:bg-neutral-800" aria-label="Shopping cart">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z" />
                </svg>
                {cart.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 min-w-4 px-1 flex items-center justify-center rounded-full bg-(--ink) text-white dark:bg-white dark:text-(--ink) text-[10px] font-semibold tabular-nums">{cart.items.length}</span>
                )}
              </button>
              <div className="hidden items-center gap-2 lg:flex">
                <Link href={withRedirect("/auth/login", pathname)} rel="nofollow" className={`${AUTH_BASE} text-[#1E1E1E] hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800 h-9 px-4`}>
                  Sign In
                </Link>
                <Link href={withRedirect("/auth/register", pathname)} rel="nofollow" className={`${AUTH_BASE} bg-(--ink) text-white hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 h-9 px-5`}>
                  Get Started
                </Link>
              </div>
              <button type="button" onClick={() => setMenuOpen((o) => !o)} aria-expanded={menuOpen} aria-controls="main-nav-mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} className={`${ICON_BTN} lg:hidden`}>
                {menuOpen ? (
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-[18px] w-[18px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
                  </svg>
                ) : (
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-[18px] w-[18px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div id="main-nav-mobile-menu" className="mx-auto mt-2 max-w-[1160px] px-5 md:px-8 lg:hidden">
            <div className="overflow-hidden rounded-3xl border border-neutral-200/60 bg-white/95 shadow-[0_12px_40px_rgba(0,0,0,0.10)] backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-900/95 animate-in fade-in duration-200">
              <div className="py-4">
                <div className="px-2">
                  {NAV_LINKS.map((l) => (
                    <Link
                      key={l.href}
                      className={`block rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                        isActive(pathname, l.href)
                          ? "bg-neutral-100 text-[#1E1E1E] dark:bg-neutral-800 dark:text-neutral-50"
                          : "text-[#8D8D8D] hover:bg-neutral-50 hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-neutral-50"
                      }`}
                      href={l.href}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-3 border-t border-neutral-200 px-4 pt-4 dark:border-neutral-800">
                  <div className="flex gap-2">
                    <Link href="/auth/login" rel="nofollow" className={`${AUTH_BASE} h-10 flex-1 border border-neutral-200 bg-white text-[#1E1E1E] hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800`}>
                      Sign In
                    </Link>
                    <Link href="/auth/register" rel="nofollow" className={`${AUTH_BASE} bg-(--ink) text-white hover:bg-black dark:bg-white dark:text-(--ink) dark:hover:bg-neutral-100 h-10 flex-1`}>
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      <CartDrawer />
    </>
  );
}
