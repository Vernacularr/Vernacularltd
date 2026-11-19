import { Fragment } from 'react';
import Socials from './Socials.jsx';
import { NAV } from '../routes.js';

// Top bar + full-screen menu ("sheet"). The open/close behaviour lives in the page scripts
// (src/effects), which look these elements up by id: navwrap, menuBtn, sheet.
export default function Header({ current, home = false }) {
  return (
    <>
      <div className="navwrap" id="navwrap">
        <div className="inner">
          <nav className="navbar" aria-label="Main">
            <a className="logo" href={home ? '#top' : '/'} aria-label="Vernacular home">
              <span className="wm" />
            </a>
            <div className="nav-r">
              <a className="btn btn-cream" href="/contact">Book a discovery call</a>{' '}
              <button className="menu" id="menuBtn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="sheet">
                <i />
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div className="sheet" id="sheet" aria-hidden="true">
        <div className="sheet-in">
          <nav aria-label="Site">
            {NAV.map(([to, label], i) => (
              <Fragment key={to}>
                <a
                  href={to}
                  {...(to === current ? { className: 'cur', 'aria-current': 'page' } : {})}
                  style={{ transitionDelay: `${(0.15 + i * 0.05).toFixed(2)}s` }}
                >
                  {label} <small>{String(i + 1).padStart(2, '0')}</small>
                </a>{' '}
              </Fragment>
            ))}
          </nav>
          <div className="sheet-side">
            <div>
              <h3>Start here</h3>
              <a className="btn btn-cream" href="/contact">Book a discovery call</a>
            </div>
            <div>
              <h3>Find us</h3>
              <p>Lagos, Nigeria</p>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
