import Page from '../components/Page.jsx';
import initSite from '../effects/site.js';

const tall = { position: "relative", aspectRatio: "4/5", maxHeight: "none", boxShadow: "0 0 0 1px rgba(23,23,21,.1)" };

export default function CaseGoogle() {
  return (
    <Page
      path="/work/google"
      title="Google AI Mode · Vernacular"
      description="An influencer-led creative direction that made Google AI Mode feel like a natural part of everyday life in Nigeria."
      bodyClass="pg"
      init={initSite}
    >
    <main id="main">
      <section className="pg-hero dark cs-hero" style={{ "--c": "#FDC319" }} aria-labelledby="cs-h">
        <div className="lfield " data-field="" style={{ "--c": "#FDC319" }} aria-hidden="true" />
        <div className="inner">
          <a className="back rv" href="/work"><i aria-hidden="true">←</i>{" All work"}</a>
          {" "}
          <span className="wk-tag rv" style={{ "--sc": "#FDC319" }}>CHORUS</span>
          <div className="hero-grid">
            <h1 className="pg-h1 rv" id="cs-h">Google AI Mode</h1>
            <p className="pg-lead rv">Making AI discovery feel like a natural part of everyday life. Campaign strategy, influencer marketing, creative direction and content strategy for Google AI Mode in Nigeria.</p>
          </div>
        </div>
      </section>
      <section className="dark" style={{ paddingBottom: "clamp(60px,8vw,110px)" }} aria-label="Project image">
        <div className="inner">
          <figure className="st-cover rv">
            <img src="/img/google-lead.jpg" width="2520" height="1080" alt="Stills from four creators' Google AI Mode reels: their questions typed into AI Mode, the answers, and the Figure it out with Google end card" decoding="async" style={{ objectPosition: "50% 50%" }} />
          </figure>
        </div>
      </section>
      <div className="seam" data-to="cream" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
      <section className="sec cream st" aria-labelledby="st-h">
        <div className="inner">
          <span className="eyebrow mk rv" data-anchor="">THE STORY</span>
          <h2 className="sec-h rv" id="st-h">Figure it out with AI Mode.</h2>
          <div className="st-rows">
            <div className="st-row rv">
              <div className="st-text">
                <span className="st-n">01</span>
                <h3>The challenge</h3>
                <p>Google wanted to introduce AI Mode in Nigeria by showing how useful it is in everyday situations. But people here already find answers everywhere.</p>
                <p style={{ marginTop: 14 }}>The job was bigger than launching a feature: show how AI can help people get through everyday uncertainty, make sense of conflicting advice and land on something practical. It had to feel familiar and worth trying, not like a tech demo.</p>
              </div>
              <figure className="st-img" style={tall}>
                <img src="/img/google-routine.jpg" width="1200" height="1500" alt="A creator on her phone, beside her question open in Google AI Mode on a foldable" loading="lazy" decoding="async" />
                <video className="loop" src="/img/google-routine.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" style={{ left: "50%", top: "28%", width: "43%", height: "61.133%", borderRadius: "4.264%/2.399%", objectPosition: "50% 45%" }} />
              </figure>
            </div>
            <div className="st-row rv flip">
              <div className="st-text">
                <span className="st-n">02</span>
                <h3>The insight</h3>
                <p>When Gen Z doesn't know what to do, they rarely keep it to themselves. They ask the group chat, post online and crowdsource opinions from strangers.</p>
                <p style={{ marginTop: 14 }}>What comes back is often as confusing as the problem: conflicting advice, jokes, questionable suggestions and opinions nobody asked for. We made that behaviour the starting point.</p>
              </div>
              <figure className="st-img" style={tall}>
                <img src="/img/google-before-after.jpg" width="1200" height="1500" alt="A creator mid-renovation, then in her finished bedroom with the Figure it out with Google end card" loading="lazy" decoding="async" />
                <video className="loop" src="/img/google-after.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" style={{ left: "46.333%", top: "23.667%", width: "46.667%", height: "66.333%", borderRadius: "3.929%/2.211%" }} />
              </figure>
            </div>
            <div className="st-row rv">
              <div className="st-text">
                <span className="st-n">03</span>
                <h3>First the chaos, then the answer</h3>
                <p>Creators share a real moment of panic in a raw, unbranded post, like a hairstyle falling apart before an event, and let their audience pile in with advice.</p>
                <p style={{ marginTop: 14 }}>A day or two later they come back to the same situation and figure it out with Google AI Mode: natural prompts, voice search and Lens, turning the noise into clear next steps.</p>
              </div>
              <figure className="st-img" style={tall}>
                <img src="/img/google-sequence.jpg" width="1200" height="1500" alt="A creator in his new car, his question about a mysterious noise typed into AI Mode, and the answer" loading="lazy" decoding="async" />
                <video className="loop" src="/img/google-answer.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" style={{ left: "62%", top: "45.333%", width: "31%", height: "44.133%", borderRadius: "5.914%/3.323%" }} />
              </figure>
            </div>
            <div className="st-row rv flip">
              <div className="st-text">
                <span className="st-n">04</span>
                <h3>Bringing it to creators</h3>
                <p>We built the direction around relatable, unpredictable situations creators could tell in their own voice, with authenticity over scripted ads.</p>
                <p style={{ marginTop: 14 }}>The influencer pack balanced that freedom with clear guardrails: content structures, platform formats and branding across AI Mode, Circle to Search and Google Lens, plus vetted prompts and the deliverables for each creator.</p>
              </div>
              <figure className="st-img" style={{ aspectRatio: "4/5", maxHeight: "none", boxShadow: "0 0 0 1px rgba(23,23,21,.1)" }}>
                <img src="/img/google-creators.jpg" width="1200" height="1500" alt="Four creators from the campaign, each with their own question: content pricing, camera settings, a new car and a bedroom layout" loading="lazy" decoding="async" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <div className="seam" data-to="dark" style={{ background: "var(--cream) var(--tex-cream)" }} aria-hidden="true" />
      <section className="sec dark st-results" aria-label="Next project">
        <div className="inner">
          <a className="next-cs rv" href="/work/revoo" style={{ marginTop: 0, "--c": "#F7561B" }}>
            <small>Next project</small>
            <span>Revoo Nigeria</span>
            <i aria-hidden="true">→</i>
          </a>
        </div>
      </section>
      <div className="seam" data-to="orange" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
    </main>
    </Page>
  );
}
