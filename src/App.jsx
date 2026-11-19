import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { coverThen } from './lib/transition.js';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import WhatWeDo from './pages/WhatWeDo.jsx';
import Work from './pages/Work.jsx';
import Contact from './pages/Contact.jsx';
import ForBrands from './pages/ForBrands.jsx';
import ForAgencies from './pages/ForAgencies.jsx';
import ForCreators from './pages/ForCreators.jsx';
import CaseRevoo from './pages/CaseRevoo.jsx';
import CaseIndrive from './pages/CaseIndrive.jsx';
import CaseAdidas from './pages/CaseAdidas.jsx';

// Any click on an internal link (href starting with "/") plays the page-change animation,
// then moves to the new page without a full reload.
function useInternalLinks() {
  const navigate = useNavigate();
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest?.('a');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const href = a.getAttribute('href') || '';
      if (!href.startsWith('/')) return;
      const [to, hash] = href.split('#');
      e.preventDefault();
      if (to === window.location.pathname) {
        const el = hash && document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      coverThen(() => navigate(href), hash);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);
}

export default function App() {
  const location = useLocation();
  useInternalLinks();
  return (
    <>
      {/* page-change animation: the orange staircase */}
      <div className="pt" id="pt" aria-hidden="true">
        <span className="tk"><i /><i /><i /><i /></span>
      </div>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/revoo" element={<CaseRevoo />} />
        <Route path="/work/indrive" element={<CaseIndrive />} />
        <Route path="/work/adidas" element={<CaseAdidas />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/for-brands" element={<ForBrands />} />
        <Route path="/for-agencies" element={<ForAgencies />} />
        <Route path="/for-creators" element={<ForCreators />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
