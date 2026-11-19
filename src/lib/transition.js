/*
 * Page change animation (the orange "pattern build").
 * #pt is rendered once in App. Classes on <html>:
 *   pt-go  -> pieces build up and cover the page
 *   pt-out -> pieces fly off and show the new page
 */
const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const de = () => document.documentElement;

let pending = null; // hash to scroll to once the next page is ready

export const COVER_MS = 200;
export const REVEAL_MS = 380;

/** Start covering the screen, then call go() once it is covered. */
export function coverThen(go, hash) {
  pending = hash || null;
  const el = de();
  el.classList.remove('pt-out');
  el.classList.add('pt-go');
  setTimeout(go, reduce() ? 0 : COVER_MS);
}

/** Called by <Page> after the new page has mounted and its scripts have run. */
export function revealPage() {
  const el = de();
  const target = pending && document.getElementById(pending);
  pending = null;
  if (target) target.scrollIntoView({ block: 'start' });
  else window.scrollTo(0, 0);
  if (!el.classList.contains('pt-go')) return;
  requestAnimationFrame(() => {
    el.classList.add('pt-out');
    el.classList.remove('pt-go');
    setTimeout(() => el.classList.remove('pt-out'), reduce() ? 0 : REVEAL_MS);
  });
}
