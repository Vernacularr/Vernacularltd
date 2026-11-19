import { useLayoutEffect } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { createScope } from '../lib/pageScope.js';
import { revealPage } from '../lib/transition.js';
import initPatterns from '../effects/patterns.js';
import homeCss from '../styles/home.css?inline';
import siteCss from '../styles/site.css?inline';

const SHEETS = { home: homeCss, site: siteCss };

function applyStylesheet(name) {
  let tag = document.getElementById('page-css');
  if (!tag) {
    tag = document.createElement('style');
    tag.id = 'page-css';
    document.head.appendChild(tag);
  }
  if (tag.dataset.sheet !== name) {
    tag.textContent = SHEETS[name];
    tag.dataset.sheet = name;
  }
}

function setDescription(text) {
  let m = document.querySelector('meta[name="description"]');
  if (!m) {
    m = document.createElement('meta');
    m.name = 'description';
    document.head.appendChild(m);
  }
  m.content = text;
}

/**
 * Wraps every page: sets the title, loads the right stylesheet, renders the header and
 * footer, then runs the page's behaviour script once the markup is in place.
 */
export default function Page({ path, title, description, bodyClass = '', home = false, init, children }) {
  useLayoutEffect(() => {
    document.title = title;
    setDescription(description);
    applyStylesheet(home ? 'home' : 'site');
    document.body.className = bodyClass;

    const html = document.documentElement;
    const before = { cls: html.className, style: html.getAttribute('style') };
    const scope = createScope();
    let pageCleanup;
    scope.run(() => {
      try { pageCleanup = init?.(); } catch (e) { console.error('[page script]', e); }
      try { initPatterns(); } catch (e) { console.error('[patterns]', e); }
    });
    revealPage();

    return () => {
      try { if (typeof pageCleanup === 'function') pageCleanup(); } catch (e) { console.error('[page cleanup]', e); }
      scope.dispose();
      // put <html> back as it was, but keep the page-change classes (pt-*) that are running now
      const pt = [...html.classList].filter((c) => c.startsWith('pt-'));
      html.className = before.cls.split(' ').filter((c) => c && !c.startsWith('pt-')).concat(pt).join(' ');
      if (before.style === null) html.removeAttribute('style');
      else html.setAttribute('style', before.style);
      document.body.className = '';
      delete window.__mapPat;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {!home && <a className="skip" href="#main">Skip to content</a>}
      <Header current={path} home={home} />
      {children}
      <Footer current={path} home={home} />
    </>
  );
}
