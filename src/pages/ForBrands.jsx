import Page from '../components/Page.jsx';
import initSite from '../effects/site.js';

export default function ForBrands() {
  return (
    <Page
      path="/for-brands"
      title="For Brands · Vernacular"
      description="Let's Connect Your Brand."
      bodyClass="pg"
      init={initSite}
    >
    <main id="main">
      <section className="pg-hero dark aud" style={{ "--c": "#F7561B" }} aria-labelledby="au-h">
        <div className="inner aud-grid">
          <div>
            <span className="eyebrow mk rv" data-anchor="">FOR BRANDS</span>
            <h1 className="pg-h1 rv" id="au-h">Let's Connect Your Brand.</h1>
            <p className="pg-lead rv">Every brand has a story. Let's find the right way to tell yours, reach your people and get them talking.</p>
          </div>
          <div className="aud-vis rv" aria-hidden="true">
            <div className="lfield in-vis" data-field="" style={{ "--c": "#1B1B1A" }} />
            <span className="big" />
          </div>
        </div>
      </section>
      <div className="seam" data-to="cream" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
      <section className="cream ct-forms aud-form" id="form" aria-label="For Brands form">
        <div className="inner">
          <div className="ct-panel on" id="panel-brands" data-solo="" style={{ "--c": "#F7561B" }}>
            <div className="ct-side">
              <span className="ct-hook">FOR BRANDS</span>
              <h2 className="ct-h">Let's Grow Your Brand.</h2>
              <p className="ct-body">Tell us what you're working towards. We'll help you explore the right way to reach your audience.</p>
              <div className="ct-nudge">
                <span className="nd-tk" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <strong>Your audience is already talking.</strong>
                <p>Two minutes here and we can start shaping what they say about you.</p>
              </div>
            </div>
            <form className="ct-form" data-kind="brand" noValidate>
              <div className="fld">
                <label htmlFor="b-company">Company or Brand Name</label>
                <input id="b-company" name="b-company" type="text" placeholder="Your company or brand name" required autoComplete="organization" />
              </div>
              <div className="fld">
                <label htmlFor="b-name">Your Name</label>
                <input id="b-name" name="b-name" type="text" placeholder="Your full name" required autoComplete="name" />
              </div>
              <div className="fld">
                <label htmlFor="b-role">Your Role</label>
                <input id="b-role" name="b-role" type="text" placeholder="What's your role at the company?" required autoComplete="organization-title" />
              </div>
              <div className="fld">
                <label htmlFor="b-email">Work Email</label>
                <input id="b-email" name="b-email" type="email" placeholder="you@company.com" required autoComplete="email" />
              </div>
              <div className="fld">
                <label htmlFor="b-phone">Phone/ WhatsApp Number</label>
                <input id="b-phone" name="b-phone" type="tel" placeholder="Your phone or WhatsApp number" required autoComplete="tel" />
              </div>
              <div className="fld">
                <label htmlFor="b-help">What Do You Need Help With?</label>
                <div className="sel">
                  <select id="b-help" name="b-help" required>
                    <option value="" selected="" disabled>Select an option</option>
                    <option>Find: brand strategy, identity and design</option>
                    <option>Make: content, film and production</option>
                    <option>Move: creators, communities and distribution</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="fld">
                <label htmlFor="b-goal">What Are You Trying to Achieve?</label>
                <textarea id="b-goal" name="b-goal" rows="4" placeholder="Tell us a little about your goals." required />
              </div>
              <div className="fld">
                <label htmlFor="b-heard">{"How Did You Hear About Us? "}<span className="opt">(Optional)</span></label>
                <div className="sel">
                  <select id="b-heard" name="b-heard">
                    <option value="" selected="" disabled>Select an option</option>
                    <option>Instagram</option>
                    <option>TikTok</option>
                    <option>LinkedIn</option>
                    <option>A referral</option>
                    <option>An event</option>
                    <option>Search</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <button className="btn btn-black ct-submit" type="submit">{"Submit & Pick a Time"}</button>
              <p className="ct-err" role="alert" hidden>Please fill in the highlighted fields.</p>
            </form>
          </div>
        </div>
      </section>
      <dialog className="ct-done" id="ctDone" aria-labelledby="ctDoneH">
        <div className="done-art" aria-hidden="true">
          <span className="ring" />
          <i />
          <i />
          <i />
          <i />
          <svg viewBox="0 0 24 24">
            <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="#1B1B1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 id="ctDoneH" />
        <p id="ctDoneP" />
        <button className="btn btn-black" type="button" data-close="">Close</button>
      </dialog>
      <div className="seam" data-to="orange" style={{ background: "var(--cream) var(--tex-cream)" }} aria-hidden="true" />
    </main>
    </Page>
  );
}
