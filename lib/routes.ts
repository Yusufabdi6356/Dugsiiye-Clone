export const CLONED_ROUTES = new Set([
  "/",
  "/courses",
  "/mentorship",
  "/community",
  "/league",
  "/ambassador",
  "/blog",
  "/about",
  "/contact",
  "/youtube",
  "/waa-maxay",
  "/public-terms",
  "/public-refund",
  "/public-privacy",
  "/public-cookies",
  "/blog/xirfadaha-2026-xilliga-ai",
  "/blog/baro-react-js-af-soomaali",
  "/blog/ai-sawir-sameynta-chatgpt-grok-gemini",
  "/auth/login",
  "/auth/register",
]);

export function isClonedRoute(href: string) {
  if (!href.startsWith("/")) return false;
  const path = href.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  return CLONED_ROUTES.has(path);
}
