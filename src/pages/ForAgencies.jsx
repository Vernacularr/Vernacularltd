import Page from '../components/Page.jsx';
import initSite from '../effects/site.js';

export default function ForAgencies() {
  return (
    <Page
      path="/for-agencies"
      title="For Agencies · Vernacular"
      description="Good Work Takes Good Partners."
      bodyClass="pg"
      init={initSite}
    >
    <main id="main">
      <section className="pg-hero dark aud" style={{ "--c": "#16CDEB" }} aria-labelledby="au-h">
        <div className="inner aud-grid">
          <div>
            <span className="eyebrow mk rv" data-anchor="">FOR AGENCIES</span>
            <h1 className="pg-h1 rv" id="au-h">Good Work Takes Good Partners.</h1>
            <p className="pg-lead rv">Need creators, community or production support? Tell us what your client needs and we'll bring Vernacular behind the scenes.</p>
          </div>
          <div className="aud-vis rv" aria-hidden="true">
            <div className="lfield in-vis" data-field="" style={{ "--c": "#1B1B1A" }} />
            <span className="big" />
          </div>
        </div>
      </section>
      <div className="seam" data-to="cream" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
      <section className="cream ct-forms aud-form" id="form" aria-label="For Agencies form">
        <div className="inner">
          <div className="ct-panel on" id="panel-agencies" data-solo="" style={{ "--c": "#16CDEB" }}>
            <div className="ct-side">
              <span className="ct-hook">FOR AGENCIES</span>
              <h2 className="ct-h">Let's Work Together.</h2>
              <p className="ct-body">Tell us what your clients need. We'll explore how Vernacular can support your team behind the scenes.</p>
              <div className="ct-nudge">
                <span className="nd-tk" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <strong>Your client stays yours.</strong>
                <p>We work behind the scenes, never claim the work, and never go around you. Non-circumvention is in every agreement.</p>
              </div>
            </div>
            <form className="ct-form" data-kind="agency" noValidate>
              <div className="fld">
                <label htmlFor="a-name">Your Name</label>
                <input id="a-name" name="a-name" type="text" placeholder="Your full name" required autoComplete="name" />
              </div>
              <div className="fld">
                <label htmlFor="a-email">Work Email</label>
                <input id="a-email" name="a-email" type="email" placeholder="you@agency.com" required autoComplete="email" />
              </div>
              <div className="fld">
                <label htmlFor="a-goal">What Does Your Client Need?</label>
                <textarea id="a-goal" name="a-goal" rows="4" placeholder="A line or two is enough. No client names needed yet." required />
              </div>
              <button className="btn btn-black ct-submit" type="submit">Send It Over</button>
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
