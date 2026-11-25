import Page from '../components/Page.jsx';
import initSite from '../effects/site.js';

const edge = { boxShadow: "0 0 0 1px rgba(23,23,21,.1)" };

export default function CaseIndrive() {
  return (
    <Page
      path="/work/indrive"
      title="inDrive Nigeria · Vernacular"
      description="Always on social storytelling and daily community engagement that gave inDrive an unmistakable local voice across Nigerian feeds."
      bodyClass="pg"
      init={initSite}
    >
    <main id="main">
      <section className="pg-hero dark cs-hero" style={{ "--c": "#16CDEB" }} aria-labelledby="cs-h">
        <div className="lfield " data-field="" style={{ "--c": "#16CDEB" }} aria-hidden="true" />
        <div className="inner">
          <a className="back rv" href="/work"><i aria-hidden="true">←</i>{" All work"}</a>
          {" "}
          <span className="wk-tag rv" style={{ "--sc": "#16CDEB" }}>DIALECT</span>
          <div className="hero-grid">
            <h1 className="pg-h1 rv" id="cs-h">inDrive Nigeria</h1>
            <p className="pg-lead rv">Building a local voice and growing social communities. Social media management, content strategy, community growth and creator collaborations for inDrive in Nigeria.</p>
          </div>
        </div>
      </section>
      <section className="dark" style={{ paddingBottom: "clamp(60px,8vw,110px)" }} aria-label="Project image">
        <div className="inner">
          <figure className="st-cover rv">
            <img src="/img/indrive-lead.jpg" width="2520" height="1080" alt="A wall of inDrive Nigeria social posts across reels and graphics: Feel the Fairness, Meet Keke, the 2045 reel, The World Won't Become Fair at Once, Keke Don Land" decoding="async" style={{ objectPosition: "50% 50%" }} />
          </figure>
        </div>
      </section>
      <div className="seam" data-to="cream" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
      <section className="sec cream st" aria-labelledby="st-h">
        <div className="inner">
          <span className="eyebrow mk rv" data-anchor="">THE STORY</span>
          <h2 className="sec-h rv" id="st-h">Make the brand sound like it belongs here.</h2>
          <div className="st-rows">
            <div className="st-row rv">
              <div className="st-text">
                <span className="st-n">01</span>
                <h3>The brief</h3>
                <p>inDrive is a global mobility platform for rides and courier deliveries. In Nigeria, it needed to strengthen its place as a fair alternative for everyday trips and packages, and build stronger relationships with local audiences.</p>
                <p style={{ marginTop: 14 }}>We partnered with inDrive Nigeria to run its social presence across Instagram, TikTok, X and Facebook, leading content strategy and community engagement for Passengers and Couriers.</p>
              </div>
              <figure className="st-img">
                <img src="/img/indrive-fairness.jpg" width="1200" height="1500" alt="inDrive Nigeria's Feel the Fairness post: a wide Abuja avenue with an inDrive car" loading="lazy" decoding="async" />
              </figure>
            </div>
            <div className="st-row rv flip">
              <div className="st-text">
                <span className="st-n">02</span>
                <h3>Two audiences, one promise</h3>
                <p>Passengers looking for convenient, fairly priced rides. People sending packages with inDrive's courier service. Both needed reasons to trust the platform.</p>
                <p style={{ marginTop: 14 }}>The job: build consistent visibility, grow both communities and make fairness more than a brand message. That meant understanding what people cared about, finding the conversations worth joining and giving audiences a reason to respond.</p>
              </div>
              <figure className="st-img" style={edge}>
                <img src="/img/indrive-audiences.jpg" width="1200" height="1500" alt="A Keke Don Land post for passengers beside a packaging post for businesses sending with inDrive Couriers" loading="lazy" decoding="async" />
              </figure>
            </div>
            <div className="st-row rv">
              <div className="st-text">
                <span className="st-n">03</span>
                <h3>A voice that belongs here</h3>
                <p>An always-on strategy built on three priorities: local relevance, consistent engagement and clear positioning. On X, that meant a distinctly Nigerian voice that joins everyday conversations, uses familiar expressions and answers issues with the right context.</p>
                <p style={{ marginTop: 14 }}>Fairness became a recurring theme. Trend monitoring found the conversations inDrive could join naturally, and performance data and community feedback shaped what we made next, rather than forcing the brand into every trend.</p>
              </div>
              <figure className="st-img" style={{ position: "relative" }}>
                <img src="/img/indrive-2045.jpg" width="1080" height="1350" alt="Still from the inDrive reel 'POV: You ordered an inDrive in 2045?' showing a lime-green car in smoke" loading="lazy" decoding="async" />
                <video className="loop" src="/img/indrive-2045.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" style={{ inset: 0, width: "100%", height: "100%" }} />
              </figure>
            </div>
            <div className="st-row rv flip">
              <div className="st-text">
                <span className="st-n">04</span>
                <h3>Always on, in real time</h3>
                <p>Day to day, we ran inDrive across Instagram, TikTok, X and Facebook: story carousels, trending sounds, dialogue-led skits, educational posts and everyday scenarios built around Passengers and Couriers.</p>
                <p style={{ marginTop: 14 }}>On X, we shaped the local voice, supported verification, updated the bio and added a pinned support post. We answered comments, tracked recurring questions and complaints, and reviewed results every month to refine formats, themes and posting times.</p>
              </div>
              <figure className="st-img">
                <img src="/img/indrive-x-launch.jpg" width="1200" height="1500" alt="The verified inDrive Nigeria X profile and a real-time reply explaining that fare negotiation is still part of the app" loading="lazy" decoding="async" />
              </figure>
            </div>
            <div className="st-row rv">
              <div className="st-text">
                <span className="st-n">05</span>
                <h3>The return of the Chief Wahala Officer</h3>
                <p>When a sudden disruption left a gap in Lagos ride-hailing, passengers and drivers needed to know someone was still on duty. We brought back Kiekie as the Chief Wahala Officer in <em>Wahala in the City</em>.</p>
                <p style={{ marginTop: 14 }}>No long rollout. Kiekie turned up at a real pickup point, announced her return and sorted out ride wahala on camera. It launched on TikTok, then ran on Instagram Reels: timely, funny and proof that inDrive was acting, not just talking.</p>
              </div>
              <figure className="st-img">
                <img src="/img/indrive-kiekie.jpg" width="1200" height="1500" alt="Kiekie as the Chief Wahala Officer in a green gele and black suit, pointing to herself on a Lagos roadside" loading="lazy" decoding="async" style={{ objectPosition: "50% 30%" }} />
              </figure>
            </div>
            <div className="st-row rv flip">
              <div className="st-text">
                <span className="st-n">06</span>
                <h3>Extending the conversation through Lagos Life</h3>
                <p>We facilitated a collaboration between inDrive Nigeria and Lagos Life, an interactive virtual experience built around Lagos culture, lifestyle and everyday activities. Players could engage with inDrive through ride activities on the platform.</p>
                <p style={{ marginTop: 14 }}>inDrive's team handled communications and the integration with Lagos Life. Our role was to make the partnership happen and extend its reach with influencer-led content around the announcement.</p>
              </div>
              <figure className="st-img" style={{ position: "relative", aspectRatio: "4/5", maxHeight: "none", ...edge }}>
                <img src="/img/indrive-lagoslife.jpg" width="1200" height="1500" alt="inDrive × Lagos Life: an inDrive cab driving through the Lagos Life game, beside the launch carousel posts 'One of these cabs is not like the others' and 'Every cab in Lagos Life is now an inDrive cab'" loading="lazy" decoding="async" />
                <video className="loop" src="/img/indrive-lagoslife-cab.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" style={{ left: "7%", top: "14.667%", width: "46.667%", height: "79.733%", borderRadius: "3.93%/1.84%", objectPosition: "50% 70%" }} />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <div className="seam" data-to="dark" style={{ background: "var(--cream) var(--tex-cream)" }} aria-hidden="true" />
      <section className="sec dark st-results" aria-labelledby="st-r">
        <div className="inner">
          <span className="eyebrow mk rv" data-anchor="">THE RESULT</span>
          <h2 className="sec-h rv" id="st-r">Growth built with communities.</h2>
          <div className="st-stats">
            <div className="st-stat rv"><b>+32%</b><span>new followers, month on month</span></div>
            <div className="st-stat rv"><b>+46%</b><span>organic views, month on month</span></div>
            <div className="st-stat rv"><b>+3%</b><span>total engagements, month on month</span></div>
          </div>
          <p className="rv" style={{ maxWidth: "60ch", fontSize: 18, lineHeight: 1.55, color: "#B4B0A7", margin: 0 }}>Across the project, we saw organic growth on Instagram, TikTok and X, with two of three monthly targets exceeded. It came from consistent participation and locally relevant conversations, not isolated viral moments or paid visibility.</p>
          <h3 className="rv" style={{ margin: "clamp(48px,6vw,80px) 0 0", fontSize: "clamp(24px,2.4vw,32px)", fontWeight: 600, letterSpacing: "-.02em", color: "var(--cream)" }}>Lagos Life collaboration</h3>
          <div className="st-stats" style={{ marginTop: 24 }}>
            <div className="st-stat rv"><b>1M+</b><span>users reached</span></div>
            <div className="st-stat rv"><b>300K+</b><span>rides taken in Lagos Life</span></div>
          </div>
          <p className="rv" style={{ maxWidth: "60ch", fontSize: 18, lineHeight: 1.55, color: "#B4B0A7", margin: 0 }}>A strong social presence isn't about how often a brand posts. It's whether people recognise its voice, understand what it stands for and feel comfortable talking to it. With inDrive Nigeria, we made it a brand people could recognise, relate to and engage with.</p>
          <a className="next-cs rv" href="/work/google" style={{ "--c": "#FDC319" }}>
            <small>Next project</small>
            <span>Google AI Mode</span>
            <i aria-hidden="true">→</i>
          </a>
        </div>
      </section>
      <div className="seam" data-to="orange" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
    </main>
    </Page>
  );
}
