import Page from '../components/Page.jsx';
import initSite from '../effects/site.js';

export default function CaseAdidas() {
  return (
    <Page
      path="/work/adidas"
      title="adidas Originals · Vernacular"
      description="Delivered in partnership to anchor adidas Originals inside Lagos street style, pairing local creative voices with the Three Stripes in a way that felt earned."
      bodyClass="pg"
      init={initSite}
    >
    <main id="main">
      <section className="pg-hero dark cs-hero" style={{ "--c": "#F2EEE4" }} aria-labelledby="cs-h">
        <div className="lfield " data-field="" style={{ "--c": "#F7561B" }} aria-hidden="true" />
        <div className="inner">
          <a className="back rv" href="/work"><i aria-hidden="true">←</i>{" All work"}</a>
          {" "}
          <span className="wk-tag rv" style={{ "--sc": "#F2EEE4" }}>PARTNERED WORK</span>
          <div className="hero-grid">
            <h1 className="pg-h1 rv" id="cs-h">adidas Originals</h1>
            <p className="pg-lead rv">
              Delivered in partnership to anchor adidas Originals inside Lagos street style, pairing local creative voices with the Three Stripes in a way that felt earned.
            </p>
          </div>
        </div>
      </section>
      <section className="dark" style={{ paddingBottom: "clamp(60px,8vw,110px)" }} aria-label="Project images">
        <div className="inner">
          <div className="cs-gal">
            <div className="slot g1 rv" data-pieces="1.6,.45" role="img" aria-label="Campaign image to be supplied">
              <span className="slot-lbl">Campaign image to be supplied</span>
            </div>
            <div className="slot rv" data-pieces="1.1,.5" role="img" aria-label="Image to be supplied">
              <span className="slot-lbl">Image to be supplied</span>
            </div>
            <div className="slot rv" data-pieces="1.1,.5" role="img" aria-label="Image to be supplied">
              <span className="slot-lbl">Image to be supplied</span>
            </div>
            <div className="slot rv" data-pieces="1.1,.5" role="img" aria-label="Image to be supplied">
              <span className="slot-lbl">Image to be supplied</span>
            </div>
          </div>
        </div>
      </section>
      <div className="seam" data-to="cream" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
      <section className="sec cream" aria-label="Project story">
        <div className="inner">
          <div className="story-slot rv">
            <strong>Full case study</strong>
            <p>Placeholder. The brief, what we did and the results will go here once the project write-up is approved.</p>
          </div>
          <a className="next-cs rv" href="/work/revoo" style={{ "--c": "#F7561B" }}>
            <small>Next project</small>
            <span>Revoo Nigeria</span>
            <i aria-hidden="true">→</i>
          </a>
        </div>
      </section>
      <div className="seam" data-to="orange" style={{ background: "var(--cream) var(--tex-cream)" }} aria-hidden="true" />
    </main>
    </Page>
  );
}
