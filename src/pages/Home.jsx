import Page from '../components/Page.jsx';
import initHome from '../effects/home.js';

export default function Home() {
  return (
    <Page
      path="/"
      title="Vernacular"
      description="Vernacular is a brand, marketing and studio company in Lagos. We help brands be believed, not just seen."
      home
      bodyClass=""
      init={initHome}
    >
    <div className="loader" id="loader" aria-hidden="true">
      <div className="lg-build" id="lgBuild" />
    </div>
    <main id="top">
      <div className="hero-pin" id="heroPin">
        <section className="hero dark" id="hero">
          <div className="stage-wrap" aria-hidden="true">
            <div className="stage" id="stage">
              <div id="fieldL" />
              <div id="lens" className="on" style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "900px", transformOrigin: "960px 430px", willChange: "transform, opacity" }}>
                <div className="plate">
                <div style={{ position: "absolute", left: "1192px", top: "507px", width: "330px", height: "58px", transformOrigin: "0 29px", transform: "rotate(24deg)" }}>
                  <div style={{ position: "absolute", left: "20px", top: "18px", width: "320px", height: "56px", borderRadius: "0 28px 28px 0", background: "radial-gradient(ellipse at 55% 50%, rgba(0,0,0,.5) 0%, rgba(0,0,0,0) 72%)", transform: "translateY(18px)" }} />
                  <div style={{ position: "absolute", left: "44px", top: "6px", width: "286px", height: "46px", borderRadius: "0 23px 23px 0", background: "linear-gradient(180deg,#3D3D39 0%,#1C1C1A 38%,#0B0B0A 62%,#262623 100%)", boxShadow: "inset 0 1px 0 rgba(255,255,255,.18)" }} />
                  <div style={{ position: "absolute", left: "70px", top: "13px", width: "230px", height: "3px", borderRadius: "2px", background: "rgba(255,255,255,.14)" }} />
                  <div style={{ position: "absolute", left: "0", top: "0", width: "56px", height: "58px", borderRadius: "6px", background: "linear-gradient(180deg,#F7F5EF 0%,#BDB9AF 34%,#6E6B65 56%,#A7A399 78%,#E4E0D6 100%)" }} />
                  <div style={{ position: "absolute", left: "14px", top: "0", width: "2px", height: "58px", background: "rgba(0,0,0,.25)" }} />
                  <div style={{ position: "absolute", left: "40px", top: "0", width: "2px", height: "58px", background: "rgba(0,0,0,.25)" }} />
                </div>
                <div style={{ position: "absolute", left: "710px", top: "180px", width: "500px", height: "500px", borderRadius: "50%", background: "conic-gradient(from 200deg,#F7F5EF,#8F8C85 18%,#E9E5DC 34%,#67645F 52%,#D7D3C9 70%,#9A968E 86%,#F7F5EF)", boxShadow: "0 46px 90px rgba(0,0,0,.6),0 12px 24px rgba(0,0,0,.4)" }} />
                <div style={{ position: "absolute", left: "720px", top: "190px", width: "480px", height: "480px", borderRadius: "50%", background: "linear-gradient(315deg,#FFFFFF 0%,#A8A49B 45%,#4E4C48 100%)" }} />
                <div style={{ position: "absolute", left: "730px", top: "200px", width: "460px", height: "460px", borderRadius: "50%", overflow: "hidden", background: "#1B1B1A" }}>
                  <div id="glassL" style={{ position: "absolute", left: "0", top: "0", width: "0", height: "0" }} />
                  <div style={{ position: "absolute", left: "0", top: "0", width: "460px", height: "460px", borderRadius: "50%", boxShadow: "inset 0 14px 40px rgba(0,0,0,.55),inset 0 -6px 18px rgba(255,255,255,.06)", background: "radial-gradient(circle at 30% 24%,rgba(255,255,255,.16) 0%,rgba(255,255,255,.04) 32%,rgba(255,255,255,0) 52%)" }} />
                  <div style={{ position: "absolute", left: "22px", top: "22px", width: "416px", height: "416px", borderRadius: "50%", borderTop: "3px solid rgba(255,255,255,.42)", borderLeft: "2px solid rgba(255,255,255,.16)", borderRight: "2px solid transparent", borderBottom: "2px solid transparent", boxSizing: "border-box", transform: "rotate(-18deg)" }} />
                </div>
                </div>
              </div>
              <div id="makeL" style={{ position: "absolute", inset: "0" }}>
                <div className="vf">
                  <i className="c1" />
                  <i className="c2" />
                  <i className="c3" />
                  <i className="c4" />
                  {" "}
                  <span className="vf-rec"><b />REC</span>
                  <span className="vf-tc" id="mkTC">00:00:00:00</span>
                  {" "}
                  <span className="vf-br">ISO 800</span>
                </div>
                <div className="mk-flash" id="mkFlash" />
                <div className="strip" id="strip">
                  <div className="strip-track" id="stripTrack" />
                </div>
                <div className="clap" id="clap">
                  <div className="clap-in" id="clapIn">
                    <div className="cl-top" id="clTop" />
                    <div className="cl-bot" />
                    <i className="cl-pin" />
                    <div className="cl-body">
                      <div className="cl-r1">
                        <small>PRODUCTION</small>
                        <b>VERNACULAR</b>
                      </div>
                      <div className="cl-r2">
                        <div>
                          <small>SCENE</small>
                          <b>02</b>
                        </div>
                        <div>
                          <small>TAKE</small>
                          <b className="take" id="mkTake">1</b>
                        </div>
                        <div>
                          <small>ROLL</small>
                          <b>A3</b>
                        </div>
                      </div>
                      <div className="cl-r3">
                        <div>
                          <small>FORMAT</small>
                          <b>Content · Film · Production</b>
                        </div>
                        <div className="cl-idea" id="clIdea" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="moveL" style={{ position: "absolute", inset: "0" }}>
                <div className="mv-ring" id="mvRing1" />
                <div className="mv-ring" id="mvRing2" />
                <div id="crowd" />
                <span className="mv-pill" data-share="40" style={{ left: "880px", top: "222px", "--pc": "#F7561B", "--pf": "rgba(247,86,27,.16)" }}>{"Creators "}<em>0%</em></span>
                {" "}
                <span className="mv-pill" data-share="30" style={{ left: "1210px", top: "262px", "--pc": "#F7561B", "--pf": "rgba(247,86,27,.16)" }}>{"Communities "}<em>0%</em></span>
                {" "}
                <span className="mv-pill" data-share="18" style={{ left: "1245px", top: "680px", "--pc": "#F7561B", "--pf": "rgba(247,86,27,.16)" }}>{"Feed "}<em>0%</em></span>
                {" "}
                <span className="mv-pill" data-share="12" style={{ left: "860px", top: "716px", "--pc": "#F7561B", "--pf": "rgba(247,86,27,.16)" }}>{"Billboards "}<em>0%</em></span>
              </div>
              <div className="token" id="token" />
            </div>
          </div>
          <div className="inner hero-in">
            <nav className="steps fadeup" id="steps" aria-label="Find, make, move">
              <button type="button" aria-pressed="true" data-k="0">Find<span className="tr" /><span className="pg" /></button>
              {" "}
              <button type="button" aria-pressed="false" data-k="1">Make<span className="tr" /><span className="pg" /></button>
              {" "}
              <button type="button" aria-pressed="false" data-k="2">Move<span className="tr" /><span className="pg" /></button>
            </nav>
            <div className="scenes">
              <div className="scene on" data-k="0">
                <h1>
                  <span className="w">
                    <span className="rise" style={{ transitionDelay: "0.10s" }}>Find</span>
                  </span>
                  {" "}
                  <span className="w">
                    <span className="rise" style={{ transitionDelay: "0.18s" }}>the</span>
                  </span>
                  {" "}
                  <span className="w">
                    <span className="rise" style={{ transitionDelay: "0.26s" }}>language</span>
                  </span>
                </h1>
                <p className="fadeup" style={{ transitionDelay: ".45s" }}>We find the language your community already speaks and trusts, and connect your brand to it.</p>
              </div>
              <div className="scene" data-k="1">
                <h1>
                  <span className="w">
                    <span className="rise" style={{ transitionDelay: "0.10s" }}>Make</span>
                  </span>
                  {" "}
                  <span className="w">
                    <span className="rise" style={{ transitionDelay: "0.18s" }}>your</span>
                  </span>
                  {" "}
                  <span className="w">
                    <span className="rise" style={{ transitionDelay: "0.26s" }}>brand</span>
                  </span>
                  {" "}
                  <span className="w">
                    <span className="rise" style={{ transitionDelay: "0.34s" }}>work</span>
                  </span>
                </h1>
                <p className="fadeup" style={{ transitionDelay: ".45s" }}>We turn the language into work that connects and your audience won’t scroll past.</p>
              </div>
              <div className="scene" data-k="2">
                <h1>
                  <span className="w">
                    <span className="rise" style={{ transitionDelay: "0.10s" }}>Move</span>
                  </span>
                  {" "}
                  <span className="w">
                    <span className="rise" style={{ transitionDelay: "0.18s" }}>it</span>
                  </span>
                  {" "}
                  <span className="w">
                    <span className="rise" style={{ transitionDelay: "0.26s" }}>where</span>
                  </span>
                  {" "}
                  <span className="w">
                    <span className="rise" style={{ transitionDelay: "0.34s" }}>they</span>
                  </span>
                  {" "}
                  <span className="w">
                    <span className="rise" style={{ transitionDelay: "0.42s" }}>believe.</span>
                  </span>
                </h1>
                <p className="fadeup" style={{ transitionDelay: ".45s" }}>We move the work though the communities, channels and mediums that matter to your audience.</p>
              </div>
            </div>
          </div>
          <span className="scroll-cue" id="scrollCue" aria-hidden="true">{"Scroll "}<i>↓</i></span>
          {" "}
          <button type="button" className="skip-intro" id="skipIntro">{"Skip intro "}<i aria-hidden="true">↓</i></button>
          <p className="scene-hint" id="sceneHint">Move your mouse to look around with the lens.</p>
        </section>
      </div>
      <div className="logo-hold" id="logoHold">
        <section className="ribbons logos" aria-label="Brands we've worked with">
          <p className="logos-h mk" data-anchor="">Brands we have helped turn noise into true community.</p>
          <div className="logo-row">
            <div className="logo-track" id="logoTrack" />
          </div>
        </section>
        <section className="about" id="about">
          <div className="about-stick">
            <div className="inner about-in">
              <h2 className="ab-name mk" data-anchor="">We Are Vernacular</h2>
              <p className="say" id="say" />
            </div>
          </div>
        </section>
      </div>
      <section className="band dark" id="services">
        <div className="inner">
          <div className="sec-head">
            <div>
              <span className="eyebrow mk rv" data-anchor="">Built for the brands that can’t miss.</span>
              <h2 id="fmmTitle" className="rv">
                <span className="y">Find the language.</span>
                {" "}
                <span className="c">Make the work.</span>
                {" "}
                <span className="o">Move the culture.</span>
              </h2>
            </div>
            <p>Every service is open to brands and agencies, on its own or bundled. Open a pillar to see what's inside.</p>
          </div>
          <div className="pillars" id="pillars" />
          <div className="drawer" id="drawer">
            <div>
              <div className="drawer-in" id="drawerIn" />
            </div>
          </div>
        </div>
      </section>
      <section className="band dark work" id="work">
        <div className="inner">
          <div className="sec-head work-head">
            <div>
              <h2 className="rv">The work doing the talking</h2>
              <p className="rv">A few of the brands we've helped find their language, make it worth sharing and move it through the right people.</p>
            </div>
            <a className="btn btn-line rv" href="/work">{"See all work "}<i aria-hidden="true">→</i></a>
          </div>
          <div className="cs-list">
            <a className="cs" href="/work/revoo">
              <div className="cs-info">
                <div>
                  <h3>Revoo</h3>
                  <p>Creators turned an electric bike activation into a crowd.</p>
                </div>
                <div className="cs-foot">
                  <span className="cs-tag" style={{ "--sc": "#F7561B" }}>Experiential</span>
                  <span className="cs-go">{"View project "}<i aria-hidden="true">→</i></span>
                </div>
              </div>
              <div className="cs-pop">
                <div className="cs-pop-in">
                  <div className="cs-vis" aria-hidden="true">
                    <div className="cs-shots">
                      <img alt="" loading="lazy" decoding="async" src="/img/revoo-booth.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
            {" "}
            <a className="cs" href="/work/indrive">
              <div className="cs-info">
                <div>
                  <h3>inDrive Nigeria</h3>
                  <p>Always on social storytelling and daily community engagement that gave inDrive an unmistakable local voice across Nigerian feeds.</p>
                </div>
                <div className="cs-foot">
                  <span className="cs-tag" style={{ "--sc": "#16CDEB" }}>Dialect</span>
                  <span className="cs-go">{"View project "}<i aria-hidden="true">→</i></span>
                </div>
              </div>
              <div className="cs-pop">
                <div className="cs-pop-in">
                  <div className="cs-vis" aria-hidden="true">
                    <div className="cs-shots">
                      <img alt="" loading="lazy" decoding="async" src="/img/indrive-card.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
            {" "}
            <a className="cs" href="/work/google">
              <div className="cs-info">
                <div>
                  <h3>Google AI Mode</h3>
                  <p>An influencer-led creative direction that turned asking the internet for help into a reason to try Google AI Mode.</p>
                </div>
                <div className="cs-foot">
                  <span className="cs-tag" style={{ "--sc": "#FDC319" }}>Chorus</span>
                  <span className="cs-go">{"View project "}<i aria-hidden="true">→</i></span>
                </div>
              </div>
              <div className="cs-pop">
                <div className="cs-pop-in">
                  <div className="cs-vis" aria-hidden="true">
                    <div className="cs-shots">
                      <img alt="" loading="lazy" decoding="async" src="/img/google-card.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="band dark fit" id="fit">
        <div className="inner">
          <span className="eyebrow mk rv" data-anchor="">Who we work with</span>
          <h2 className="rv">Where do you come in?</h2>
          <div className="fit-cols">
            <a className="pc" href="/for-brands" style={{ "--c": "#F7561B", "--on": "#1B1B1A", "--tex": "var(--tex-orange)" }}>
              <span className="shape o" />
              <div>
                <h3>Brands</h3>
                <strong className="pc-sub">Stop renting impressions, Own your audience.</strong>
                <p>Stop paying to get scrolled past. We pair high-trust, quality content with genuine community access to turn attention into customers.</p>
                <span className="go">{"Let's talk "}<i>→</i></span>
              </div>
            </a>
            {" "}
            <a className="pc" href="/for-agencies" style={{ "--c": "#16CDEB", "--on": "#1B1B1A", "--tex": "var(--tex-cyan)" }}>
              <span className="shape sq" />
              <div>
                <h3>Agencies</h3>
                <strong className="pc-sub">Expand your scope, not your payroll.</strong>
                <p>
                  Access to native production, creator networks, and distribution running silently behind your brand. Strict non-circumvention built into every agreement.
                </p>
                <span className="go">{"See white-label terms "}<i>→</i></span>
              </div>
            </a>
            {" "}
            <a className="pc" href="/for-creators" style={{ "--c": "#9A62F7", "--on": "#FFFFFF", "--tex": "var(--tex-purple)" }}>
              <span className="shape o" />
              <div>
                <h3>{"Creators & Partners"}</h3>
                <strong className="pc-sub">Partnered, not used.</strong>
                <p>
                  Brand campaigns that respect your tone and preserve your credibility. Clear terms, paid on time, open to any page that cares about genuine community trust.
                </p>
                <span className="go">{"Pitch your handle "}<i>→</i></span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <div className="seam" data-to="cream" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
      <section className="faq cream" id="faq">
        <div className="inner">
          <div className="faq-head">
            <div>
              <span className="eyebrow mk rv" data-anchor="">Questions people ask</span>
              <h2 className="rv">Ask the crowd.</h2>
              <p className="sub rv">These are the questions we hear most. Pick yours and we'll answer straight.</p>
            </div>
          </div>
          <div className="faq-room">
            <div className="room" id="room" />
            <div className="convo-panel" id="panel" aria-live="polite">
              <div className="cp-q" id="cpQ" />
              <div className="cp-a">
                <span className="cp-v" aria-hidden="true">V</span>
                <div className="cp-bub">
                  <b>Vernacular</b>
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="txt" id="cpA" />
                </div>
              </div>
              <a className="cp-link" href="#fit">{"Book a discovery call "}<span aria-hidden="true">→</span></a>
            </div>
            <div className="your-turn" id="yourTurn" />
          </div>
        </div>
      </section>
      <div className="seam" data-to="orange" style={{ background: "var(--cream) var(--tex-cream)" }} aria-hidden="true" />
    </main>
    <div className="thread" id="thread" aria-hidden="true" />
    <nav className="rail" id="rail" aria-label="Page sections">
      <a href="#top" data-s="hero">
        <span>Start</span>
      </a>
      <a href="#about" data-s="about">
        <span>About</span>
      </a>
      <a href="#services" data-s="services">
        <span>What we do</span>
      </a>
      <a href="#work" data-s="work">
        <span>Our work</span>
      </a>
      <a href="#fit" data-s="fit">
        <span>Where you fit</span>
      </a>
      <a href="#faq" data-s="faq">
        <span>Questions</span>
      </a>
      <a href="#contact" data-s="contact">
        <span>Contact</span>
      </a>
    </nav>
    </Page>
  );
}
