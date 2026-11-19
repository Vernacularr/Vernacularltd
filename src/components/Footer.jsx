import Socials from './Socials.jsx';
import { NAV } from '../routes.js';

// Links shown in the footer's first column on the homepage (it scrolls within the page).
const ON_THIS_PAGE = [
  ['#services', 'What we do'],
  ['#about', 'About us'],
  ['#work', 'Our work'],
  ['#faq', 'Questions'],
  ['#fit', 'Where you fit'],
];

// The big "Vernacular" word is cut into slices so each one can hop on hover.
// [left %, width %, image width %, image left %, extra class]
const WORD = [
  ['0.000%', '24.625%', '406.091%', '0.000%'],
  ['24.625%', '7.345%', '1361.470%', '-335.262%'],
  ['31.970%', '10.810%', '925.069%', '-295.745%'],
  ['42.780%', '11.940%', '837.521%', '-358.291%'],
  ['54.720%', '38.310%', '261.028%', '-142.835%', 'cula'],
  ['93.030%', '6.970%', '1434.720%', '-1334.720%'],
];

const CTAS = [
  ['/for-brands', 'For brands', "Let's talk"],
  ['/for-agencies', 'For agencies', 'Talk partnerships'],
  ['/for-creators', 'For creators', 'Join the network'],
];

export const CONTACT = {
  city: 'Lagos, Nigeria',
  email: 'info@vernacular.com',
  phone: '081123456789',
  phoneHref: 'tel:+23481123456789',
};

export default function Footer({ current, home = false }) {
  return (
    <footer className="foot" id="contact">
      <div className="inner">
        <div className="foot-top">
          <div className="foot-main">
            <h2 className="rv">Let's make you Cular<span className="tdot" data-anchor="" /></h2>
            <p className="foot-lead rv">Stop paying to be ignored. Get conviction that accelerates growth.</p>
            <div className="foot-ctas">
              {CTAS.map(([to, small, label]) => (
                <a key={to} className="btn btn-black" href={to}>
                  <small>{small}</small>
                  <span>{label} <i aria-hidden="true">→</i></span>
                </a>
              ))}
            </div>
          </div>
          <div className="foot-col">
            {home ? (
              <>
                <h3>On this page</h3>
                {ON_THIS_PAGE.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
              </>
            ) : (
              <>
                <h3>Pages</h3>
                {NAV.map(([to, label]) => (
                  <a key={to} href={to} {...(to === current ? { 'aria-current': 'page' } : {})}>{label}</a>
                ))}
              </>
            )}
          </div>
          <div className="foot-col">
            <h3>Find us</h3>
            <p>{CONTACT.city}</p>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            <Socials />
          </div>
        </div>
        <div className="foot-word" id="footWord" role="img" aria-label="Vernacular">
          {WORD.map(([left, width, wmWidth, wmLeft, extra]) => (
            <span key={left} className={extra ? `fs ${extra}` : 'fs'} style={{ left, width }}>
              <span className="hop">
                <span className="wm" style={{ width: wmWidth, left: wmLeft }} />
              </span>
            </span>
          ))}
        </div>
        <div className="foot-legal">
          <span>© 2026 Vernacular Limited</span>
          <span>Brand, Marketing and Studio. Made in Lagos.</span>
        </div>
      </div>
    </footer>
  );
}
