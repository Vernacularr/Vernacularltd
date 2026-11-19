import Page from '../components/Page.jsx';
import initSite from '../effects/site.js';

export default function CaseRevoo() {
  return (
    <Page
      path="/work/revoo"
      title="Revoo Nigeria · Vernacular"
      description="We brought Revoo's electric mobility story onto the exhibition floor with an interactive brand pavilion that turned foot traffic into hands on product trials and social buzz."
      bodyClass="pg"
      init={initSite}
    >
    <main id="main">
      <section className="pg-hero dark cs-hero" style={{ "--c": "#F7561B" }} aria-labelledby="cs-h">
        <div className="inner">
          <a className="back rv" href="/work"><i aria-hidden="true">←</i>{" All work"}</a>
          {" "}
          <span className="wk-tag rv" style={{ "--sc": "#F7561B" }}>EXPERIENTIAL</span>
          <div className="hero-grid">
            <h1 className="pg-h1 rv" id="cs-h">Revoo Nigeria</h1>
            <p className="pg-lead rv">
              We brought Revoo's electric mobility story onto the exhibition floor with an interactive brand pavilion that turned foot traffic into hands on product trials and social buzz.
            </p>
          </div>
        </div>
      </section>
      <section className="dark" style={{ paddingBottom: "clamp(60px,8vw,110px)" }} aria-label="Project image">
        <div className="inner">
          <figure className="st-cover rv">
            <img src="/img/revoo-booth.jpg" alt="The Revoo booth: an electric scooter in front of the REVOO model panels" decoding="async" />
          </figure>
        </div>
      </section>
      <div className="seam" data-to="cream" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
      <section className="sec cream st" aria-labelledby="st-h">
        <div className="inner">
          <span className="eyebrow mk rv" data-anchor="">THE STORY</span>
          <h2 className="sec-h rv" id="st-h">From exhibition floor to feeds.</h2>
          <p className="st-draft rv">Draft story and figures, to be replaced with the approved case study.</p>
          <div className="st-rows">
            <div className="st-row rv">
              <div className="st-text">
                <span className="st-n">01</span>
                <h3>The brief</h3>
                <p>
                  Revoo was launching electric scooters in Lagos, a city that runs on petrol bikes. The ask was simple and hard: get people to trust a new kind of ride, fast.
                </p>
              </div>
              <figure className="st-img">
                <img src="/img/revoo-1.jpg" alt="The Revoo pavilion with visitors on the exhibition floor" loading="lazy" decoding="async" />
              </figure>
            </div>
            <div className="st-row rv flip">
              <div className="st-text">
                <span className="st-n">02</span>
                <h3>The idea</h3>
                <p>
                  Don't tell people about zero fuel and zero noise. Let them feel it. We built the pavilion around one goal: get every visitor on a bike within a minute of walking in.
                </p>
              </div>
              <figure className="st-img">
                <img src="/img/revoo-2.jpg" alt="Two visitors trying a Revoo electric bike" loading="lazy" decoding="async" />
              </figure>
            </div>
            <div className="st-row rv">
              <div className="st-text">
                <span className="st-n">03</span>
                <h3>On the day</h3>
                <p>
                  Visitors queued to ride. Every trial was a moment worth sharing, so our creators worked the floor, capturing first reactions as they happened.
                </p>
              </div>
              <figure className="st-img">
                <img src="/img/revoo-3.jpg" alt="A visitor seated on a Revoo bike at the pavilion" loading="lazy" decoding="async" />
              </figure>
            </div>
            <div className="st-row rv flip">
              <div className="st-text">
                <span className="st-n">04</span>
                <h3>The buzz</h3>
                <p>Those moments went straight to feeds, putting real Lagos riders in front of people who would never have walked into the exhibition.</p>
              </div>
              <figure className="st-img">
                <img src="/img/revoo-4.jpg" alt="A visitor smiling on a Revoo electric scooter" loading="lazy" decoding="async" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <div className="seam" data-to="dark" style={{ background: "var(--cream) var(--tex-cream)" }} aria-hidden="true" />
      <section className="sec dark st-results" aria-labelledby="st-r">
        <div className="inner">
          <span className="eyebrow mk rv" data-anchor="">THE RESULT</span>
          <h2 className="sec-h rv" id="st-r">People rode it. Then they talked about it.</h2>
          <div className="st-stats">
            <div className="st-stat rv">
              <b>1,200+</b>
              <span>test rides on the floor</span>
            </div>
            <div className="st-stat rv">
              <b>40</b>
              <span>creators capturing the day</span>
            </div>
            <div className="st-stat rv">
              <b>2M+</b>
              <span>views across feeds</span>
            </div>
          </div>
          <a className="next-cs rv" href="/work/indrive" style={{ "--c": "#16CDEB" }}>
            <small>Next project</small>
            <span>inDrive Nigeria</span>
            <i aria-hidden="true">→</i>
          </a>
        </div>
      </section>
      <div className="seam" data-to="orange" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
    </main>
    </Page>
  );
}
