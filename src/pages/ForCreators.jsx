import Page from '../components/Page.jsx';
import initSite from '../effects/site.js';

export default function ForCreators() {
  return (
    <Page
      path="/for-creators"
      title="For Creators · Vernacular"
      description="Your Voice. Bigger Rooms."
      bodyClass="pg"
      init={initSite}
    >
    <main id="main">
      <section className="pg-hero dark aud" style={{ "--c": "#9A62F7" }} aria-labelledby="au-h">
        <div className="inner aud-grid">
          <div>
            <span className="eyebrow mk rv" data-anchor="">FOR CREATORS</span>
            <h1 className="pg-h1 rv" id="au-h">Your Voice. Bigger Rooms.</h1>
            <p className="pg-lead rv">Got a voice, a community or a story to tell? Let's connect you with brands and campaigns worth working on.</p>
          </div>
          <div className="aud-vis rv lt" aria-hidden="true">
            <div className="lfield in-vis" data-field="" style={{ "--c": "#F2EEE4" }} />
            <span className="big" />
          </div>
        </div>
      </section>
      <div className="seam" data-to="cream" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
      <section className="cream ct-forms aud-form" id="form" aria-label="For Creators form">
        <div className="inner">
          <div className="ct-panel on" id="panel-creators" data-solo="" style={{ "--c": "#9A62F7" }}>
            <div className="ct-side">
              <span className="ct-hook">FOR CREATORS</span>
              <h2 className="ct-h">Let's Get To Know You.</h2>
              <p className="ct-body">Tell us about your content and where to find you. We want to connect creators with campaigns that feel right for their page.</p>
              <div className="ct-nudge">
                <span className="nd-tk" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <strong>Your next brand deal could start here.</strong>
                <p>Tell us about your page and we will reach out when a campaign fits.</p>
              </div>
            </div>
            <form className="ct-form" data-kind="creator" noValidate>
              <div className="fld">
                <label htmlFor="c-name">Your Name</label>
                <input id="c-name" name="c-name" type="text" placeholder="Your full name" required autoComplete="name" />
              </div>
              <div className="fld">
                <label htmlFor="c-handle">Main Social Media Handle</label>
                <input id="c-handle" name="c-handle" type="text" placeholder="@yourhandle" required />
              </div>
              <div className="fld">
                <label htmlFor="c-platform">Main Platform</label>
                <div className="sel">
                  <select id="c-platform" name="c-platform" required>
                    <option value="" selected="" disabled>Select an option</option>
                    <option>Instagram</option>
                    <option>TikTok</option>
                    <option>YouTube</option>
                    <option>X (Twitter)</option>
                    <option>Snapchat</option>
                    <option>LinkedIn</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="fld">
                <label htmlFor="c-content">What Kind of Content Do You Create?</label>
                <textarea id="c-content" name="c-content" rows="4" placeholder="Tell us about your niche or content style" required />
              </div>
              <div className="fld">
                <label htmlFor="c-other">{"Other Social Media Handles "}<span className="opt">(Optional)</span></label>
                <textarea id="c-other" name="c-other" rows="4" placeholder="Add your other handles and platforms" />
              </div>
              <div className="fld">
                <label htmlFor="c-city">Where Are You Based?</label>
                <input id="c-city" name="c-city" type="text" placeholder="Your city" required autoComplete="address-level2" />
              </div>
              <div className="fld">
                <label htmlFor="c-followers">Approximate Follower Count</label>
                <div className="sel">
                  <select id="c-followers" name="c-followers" required>
                    <option value="" selected="" disabled>Select an option</option>
                    <option>Under 10K</option>
                    <option>10K to 50K</option>
                    <option>50K to 100K</option>
                    <option>100K to 500K</option>
                    <option>500K to 1M</option>
                    <option>Over 1M</option>
                  </select>
                </div>
              </div>
              <div className="fld">
                <label htmlFor="c-contact">Email Address/ WhatsApp Number</label>
                <input id="c-contact" name="c-contact" type="text" placeholder="How can we reach you?" required />
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
