import Page from '../components/Page.jsx';
import initSite from '../effects/site.js';

export default function Work() {
  return (
    <Page
      path="/work"
      title="Our Work · Vernacular"
      description="Made to Move People."
      bodyClass="pg"
      init={initSite}
    >
    <main id="main">
      <section className="pg-hero dark" aria-labelledby="wk-h">
        <div className="lfield " data-field="" style={{ "--c": "#F7561B" }} aria-hidden="true" />
        <div className="inner">
          <span className="eyebrow mk rv" data-anchor="">OUR WORK</span>
          <div className="hero-grid">
            <h1 className="pg-h1 wk-h1 rv" id="wk-h">Made to Move People.</h1>
            <p className="pg-lead rv">The ideas we've brought to life, the conversations we've started, and the impact we've made.</p>
          </div>
        </div>
      </section>
      <section className="dark" style={{ paddingBottom: "clamp(80px,10vw,130px)" }} aria-label="Selected work">
        <div className="inner wk-list" data-tf="">
          <a className="wk rv" id="revoo" href="/work/revoo">
            <div className="wk-info">
              <span className="wk-tag" style={{ "--sc": "#F7561B" }}>EXPERIENTIAL</span>
              <h2>Revoo Nigeria</h2>
              <p>
                We brought Revoo's electric mobility story onto the exhibition floor with an interactive brand pavilion that turned foot traffic into hands on product trials and social buzz.
              </p>
              <span className="wk-go">{"View project "}<i aria-hidden="true">→</i></span>
            </div>
            <div className="wk-vis">
              <div className="wk-shots one">
                <img src="/img/revoo-booth.jpg" alt="The Revoo booth: an electric scooter in front of the REVOO model panels" loading="lazy" decoding="async" />
              </div>
            </div>
          </a>
          {" "}
          <a className="wk rv" id="indrive" href="/work/indrive">
            <div className="wk-info">
              <span className="wk-tag" style={{ "--sc": "#16CDEB" }}>DIALECT</span>
              <h2>inDrive Nigeria</h2>
              <p>Always on social storytelling and daily community engagement that gave inDrive an unmistakable local voice across Nigerian feeds.</p>
              <span className="wk-go">{"View project "}<i aria-hidden="true">→</i></span>
            </div>
            <div className="wk-vis">
              <div className="wk-shots one">
                <img className="fair" src="/img/indrive-card-fairness.webp" alt="inDrive Nigeria's Feel the Fairness post: a wide Abuja avenue under Zuma Rock" loading="lazy" decoding="async" />
              </div>
            </div>
          </a>
          {" "}
          <a className="wk rv" id="google" href="/work/google">
            <div className="wk-info">
              <span className="wk-tag" style={{ "--sc": "#FDC319" }}>CHORUS</span>
              <h2>Google AI Mode</h2>
              <p>
                An influencer-led creative direction built on a habit everyone knows: asking the internet for help. First the chaos, then the answer with Google AI Mode.
              </p>
              <span className="wk-go">{"View project "}<i aria-hidden="true">→</i></span>
            </div>
            <div className="wk-vis">
              <div className="wk-shots one">
                <img className="endcard" src="/img/google-endcard.jpg" alt="The campaign end card: ask Google AI Mode. Figure it out with Google." loading="lazy" decoding="async" />
              </div>
            </div>
          </a>
        </div>
      </section>
      <div className="seam" data-to="orange" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
    </main>
    </Page>
  );
}
