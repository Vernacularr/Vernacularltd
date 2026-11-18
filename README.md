# Vernacular website (React)

The Vernacular company site, built with **React 19 + Vite + React Router**.

## Run it

```bash
npm install
npm run dev       # local site at http://localhost:5173
npm run build     # production files in dist/
npm run preview   # check the production build locally
```

Needs Node 18 or newer.

## Deploy

- **Netlify:** build command `npm run build`, publish folder `dist`. `public/_redirects` already sends every URL to the app.
- **Vercel:** pick the Vite preset. `vercel.json` already handles page URLs.

## Pages

| URL | File |
| --- | --- |
| `/` | `src/pages/Home.jsx` |
| `/about` | `src/pages/About.jsx` |
| `/what-we-do` | `src/pages/WhatWeDo.jsx` |
| `/work` | `src/pages/Work.jsx` |
| `/work/revoo`, `/work/indrive`, `/work/adidas` | `src/pages/Case*.jsx` |
| `/contact` | `src/pages/Contact.jsx` |
| `/for-brands`, `/for-agencies`, `/for-creators` | `src/pages/For*.jsx` |

Routes are listed in `src/App.jsx`. The main menu order is in `src/routes.js`.

## How it fits together

```
src/
  App.jsx               routes + page-change animation + internal link handling
  components/
    Page.jsx            wraps every page: title, stylesheet, header, footer, runs the page script
    Header.jsx          top bar and full-screen menu
    Footer.jsx          footer (contact details live in CONTACT at the top of the file)
    Socials.jsx         social icons (links in SOCIAL_LINKS)
  pages/                one component per page (the page content)
  effects/
    home.js             homepage animations: intro, hero steps, scenes, FAQ, menu
    site.js             inner pages: nav, menu, scroll reveals, FAQ, forms, case pages
    patterns.js         brand pattern on a few cards + button pointer effect
  lib/
    pageScope.js        cleans up each page's listeners/timers when you leave it
    transition.js       the orange "pattern build" between pages
  styles/
    home.css            homepage only
    site.css            every other page
public/img/             images and the wordmark
```

**Content** (text, images, links) is plain JSX in `src/pages/*` and the shared components. Edit it like any React markup.

**Animations** are in `src/effects/*`. These are DOM scripts that run once after a page mounts and look elements up by `id` / `class`. If you rename an id or class a script uses, update the script too. `lib/pageScope.js` stops a page's listeners, timers and animation frames when you leave that page, so a script doesn't need its own cleanup code.

**Styles** are global CSS. `Page.jsx` swaps between `home.css` and `site.css` depending on the page.

Internal links are plain `<a href="/about">`. `App.jsx` catches clicks on them, plays the page-change animation and moves to the new page without a full reload.

## Still to do

- [ ] **Contact forms:** the forms on Contact, For Brands, For Agencies and For Creators show a thank-you message but don't send anywhere yet. Connect them to an email service, Netlify Forms or a backend (the submit handling is in `src/effects/site.js`).
- [ ] **Social links:** TikTok, LinkedIn and X are `#` placeholders in `src/components/Socials.jsx`.
- [ ] **Contact details:** check the phone number and email in `src/components/Footer.jsx` (`CONTACT`).
- [ ] **Case studies:** the Revoo story and numbers are draft placeholders. inDrive and adidas need real photos and copy.
