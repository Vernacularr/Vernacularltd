import Page from '../components/Page.jsx';
import initSite from '../effects/site.js';

export default function About() {
  return (
    <Page
      path="/about"
      title="About Us · Vernacular"
      description="We Create True Brand Connection."
      bodyClass="pg"
      init={initSite}
    >
    <main id="main">
      <section className="pg-hero dark" aria-labelledby="ab-h">
        <div className="lfield " data-field="" style={{ "--c": "#F7561B" }} aria-hidden="true" />
        <div className="inner">
          <span className="eyebrow mk rv" data-anchor="">ABOUT VERNACULAR</span>
          <div className="hero-grid">
            <h1 className="pg-h1 ab-h1 rv" id="ab-h">
              {"We Create True "}<span className="chip" aria-hidden="true">
  <i style={{ left: "14%", top: "18%", width: "32%", height: "32%" }} />
  <i style={{ left: "46%", top: "50%", width: "38%", height: "32%" }} />
</span>{" Brand Connection."}
            </h1>
            <div className="convo rv" aria-hidden="true">
              <svg className="cv-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="50" y1="50" x2="14" y2="24" style={{ "--d": "-0s" }} />
                <line x1="50" y1="50" x2="86" y2="22" style={{ "--d": "-1.5s" }} />
                <line x1="50" y1="50" x2="12" y2="78" style={{ "--d": "-3.0s" }} />
                <line x1="50" y1="50" x2="88" y2="80" style={{ "--d": "-4.5s" }} />
              </svg>
              <div className="cv-core">
                <span className="cv-ring" />
                <span className="cv-ring" />
                <span className="cv-tok">
                  <i style={{ left: "14%", top: "20%", width: "30%", height: "28%" }} />
                  <i style={{ left: "48%", top: "52%", width: "36%", height: "28%" }} />
                </span>
              </div>
              <div className="cv-n" style={{ "--x": "14%", "--y": "24%", "--c": "var(--yellow)", "--d": "0s" }}>
                <b />
                <span className="cv-b">
                  <span className="cv-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="cv-bars">
                    <i />
                    <i />
                  </span>
                </span>
              </div>
              <div className="cv-n r" style={{ "--x": "86%", "--y": "22%", "--c": "var(--cyan)", "--d": "1.5s" }}>
                <b />
                <span className="cv-b">
                  <span className="cv-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="cv-bars">
                    <i />
                    <i />
                  </span>
                </span>
              </div>
              <div className="cv-n" style={{ "--x": "12%", "--y": "78%", "--c": "var(--purple)", "--d": "3.0s" }}>
                <b />
                <span className="cv-b">
                  <span className="cv-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="cv-bars">
                    <i />
                    <i />
                  </span>
                </span>
              </div>
              <div className="cv-n r" style={{ "--x": "88%", "--y": "80%", "--c": "var(--green)", "--d": "4.5s" }}>
                <b />
                <span className="cv-b">
                  <span className="cv-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="cv-bars">
                    <i />
                    <i />
                  </span>
                </span>
              </div>
            </div>
            <p className="pg-lead rv paras">
              <span className="pl1">Vernacular helps brands be believed, not just seen.</span>
              <span>Most brands have the product but not the language their audiences actually trust.</span>
              <span>We find that language, make content that speaks to them in it, and move it through the platforms and communities where they listen.</span>
            </p>
          </div>
        </div>
      </section>
      <div className="seam" data-to="cream" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
      <section className="sec cream started" aria-labelledby="ab-started">
        <div className="inner">
          <span className="eyebrow mk rv" data-anchor="">HOW WE STARTED</span>
          <div className="split started-grid">
            <h2 className="sec-h rv" id="ab-started">The extra that makes the difference</h2>
            <div className="story">
              <p className="lead-line rv">The idea began as a behind the scenes operating engine, running campaign machinery for brands and creators.</p>
              <p className="after-line rv">
                After seeing campaigns break down because brands lacked a clear voice or made content poorly suited for social feeds, Vernacular stepped forward.
              </p>
              <p className="after-line rv">It merged with Vaudible to bring identity, design, and production together under one roof.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="seam" data-to="dark" style={{ background: "var(--cream) var(--tex-cream)" }} aria-hidden="true" />
      <section className="sec dark why" aria-labelledby="ab-why">
        <div className="inner">
          <span className="eyebrow mk rv" data-anchor="">WHY WE EXIST</span>
          <h2 className="sec-h rv" id="ab-why">The Thinking Behind Vernacular.</h2>
          <div className="why-grid">
            <div>
              <p className="big-line" data-focus="">We believe brands should do more than show up.</p>
              <p className="after-line" data-focus="">They should stand out, speak up, and mean something.</p>
            </div>
            <div className="voice-art va2" data-va="" aria-hidden="true">
              <div className="pr">
                <span className="pr-tag">BRAND ANNOUNCEMENT</span>
                <i />
                <i />
                <i />
                <i style={{ width: "55%" }} />
                <span className="pr-meta">Seen · scrolled past</span>
              </div>
              <div className="chat">
                <div className="msg" style={{ "--c": "var(--yellow)", "--d": ".0s" }}>
                  <b />
                  <div>
                    <small>A friend</small>
                    <span className="bub">
                      <i />
                      <i style={{ width: "60%" }} />
                    </span>
                    <span className="rx">♥ 24</span>
                  </div>
                </div>
                <div className="msg me" style={{ "--c": "var(--purple)", "--d": ".35s" }}>
                  <b />
                  <div>
                    <small>A creator you follow</small>
                    <span className="bub">
                      <i />
                      <i style={{ width: "75%" }} />
                    </span>
                    <span className="rx">♥ 1.2k</span>
                  </div>
                </div>
                <div className="msg" style={{ "--c": "var(--cyan)", "--d": ".7s" }}>
                  <b />
                  <div>
                    <small>Your community</small>
                    <span className="bub">
                      <i />
                      <i style={{ width: "45%" }} />
                    </span>
                    <span className="rx">♥ 318</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="seam" data-to="orange" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
      <section className="sec quote-sec" aria-label="IN OUR WORDS">
        <div className="inner">
          <span className="eyebrow mk rv" data-anchor="">IN OUR WORDS</span>
          <blockquote className="quote rv">“We don’t just want brands to be seen. We want them to mean something to the people they’re trying to reach.”</blockquote>
        </div>
      </section>
      <div className="seam" data-to="dark" style={{ background: "var(--orange) var(--tex-orange)" }} aria-hidden="true" />
      <section className="sec dark" aria-labelledby="ab-values">
        <div className="inner">
          <div className="split" style={{ alignItems: "end" }}>
            <div>
              <span className="eyebrow mk rv" data-anchor="">WHAT WE BELIEVE</span>
              <h2 className="sec-h rv" id="ab-values">Values That Guide Our Work</h2>
            </div>
            <p className="pg-lead rv">Our approach is shaped by how people connect, communicate and engage. These are the values behind everything we do.</p>
          </div>
          <div className="values" data-tf="">
            <article className="val rv" tabIndex="0" style={{ "--c": "#F7561B", "--on": "#1B1B1A", "--tex": "var(--tex-orange)" }}>
              <span className="sq" aria-hidden="true" />
              <span className="plus" aria-hidden="true" />
              <h3>People Before Platforms.</h3>
              <div className="val-body">
                <p>
                  The channel matters, but the people on the other side matter more. We start with what audiences care about, the conversations they join and the voices they trust.
                </p>
              </div>
            </article>
            <article className="val rv" tabIndex="0" style={{ "--c": "#FFC21C", "--on": "#1B1B1A", "--tex": "var(--tex-yellow)" }}>
              <span className="sq" aria-hidden="true" />
              <span className="plus" aria-hidden="true" />
              <h3>Trust Is Earned.</h3>
              <div className="val-body">
                <p>
                  Attention can be bought. Trust takes relevance, credibility and consistency. We help brands show up in ways that feel meaningful to the people they want to reach.
                </p>
              </div>
            </article>
            <article className="val rv" tabIndex="0" style={{ "--c": "#16CDEB", "--on": "#1B1B1A", "--tex": "var(--tex-cyan)" }}>
              <span className="sq" aria-hidden="true" />
              <span className="plus" aria-hidden="true" />
              <h3>Culture Is Part Of The Strategy.</h3>
              <div className="val-body">
                <p>
                  Brands don’t exist outside culture. We pay attention to the behaviours, conversations and shifts shaping how people see the world and the brands around them.
                </p>
              </div>
            </article>
            <article className="val rv" tabIndex="0" style={{ "--c": "#9A62F7", "--on": "#FFFFFF", "--tex": "var(--tex-purple)" }}>
              <span className="sq" aria-hidden="true" />
              <span className="plus" aria-hidden="true" />
              <h3>Make Every Conversation Count.</h3>
              <div className="val-body">
                <p>Good marketing should do more than make noise. It should build connection, strengthen relevance and give people a reason to engage.</p>
              </div>
            </article>
            <article className="val rv" tabIndex="0" style={{ "--c": "#0AA021", "--on": "#FFFFFF", "--tex": "var(--tex-green)" }}>
              <span className="sq" aria-hidden="true" />
              <span className="plus" aria-hidden="true" />
              <h3>Guarantee What We Can, Say What We Can't</h3>
              <div className="val-body">
                <p>Guarantees go in writing, alongside honesty about what cannot be promised, with no vague claims or overpromising.</p>
              </div>
            </article>
          </div>
          <div className="wwu rv">
            <p>If you resonate with our principles, let's build something that connects together.</p>
            <a className="btn btn-black" href="/contact">Work With Us</a>
          </div>
        </div>
      </section>
      <div className="seam" data-to="cream" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
      <section className="sec cream" aria-labelledby="ab-team">
        <div className="inner">
          <span className="eyebrow mk rv" data-anchor="">THE PEOPLE BEHIND THE WORK</span>
          <h2 className="sec-h rv" id="ab-team">Different Perspectives. One Shared Purpose.</h2>
          <div className="two-up">
            <p className="lead-line rv">Strategists, designers, filmmakers and community specialists, working together to make work people connect with.</p>
            <p className="after-line rv">We treat every brief with care, keep things clear, and make sure every detail earns its place.</p>
          </div>
          {/* Team photo goes here once we have it (the .team-slot styles are still in site.css) */}
        </div>
      </section>
      <div className="seam" data-to="orange" style={{ background: "var(--cream) var(--tex-cream)" }} aria-hidden="true" />
    </main>
    </Page>
  );
}
