import Page from '../components/Page.jsx';
import initSite from '../effects/site.js';

export default function WhatWeDo() {
  return (
    <Page
      path="/what-we-do"
      title="What We Do · Vernacular"
      description="From Brand Messages Into Conversations."
      bodyClass="pg"
      init={initSite}
    >
    <main id="main">
      <section className="pg-hero dark" aria-labelledby="wd-h">
        <div className="lfield " data-field="" style={{ "--c": "#16CDEB" }} aria-hidden="true" />
        <div className="inner">
          <span className="eyebrow mk rv" data-anchor="">WHAT WE DO</span>
          <div className="hero-grid">
            <h1 className="pg-h1  rv" id="wd-h">From Brand Messages Into Conversations.</h1>
            <p className="pg-lead rv">Our team of creatives listen to you and your audience, creating work that connects and gets results.</p>
          </div>
        </div>
      </section>
      <section className="sec dark pillar-sec" id="find" style={{ "--c": "#FFC21C" }} aria-labelledby="find-h">
        <div className="inner split">
          <div className="stick pl-head">
            <span className="pl-mark" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <h2 className="rv" id="find-h">Find It</h2>
            <p className="rv">We listen to your audience and understand what matters to them, then find the words and visuals that make your brand resonate.</p>
          </div>
          <ul className="svc-list" data-tf="">
            <li className="svc rv">
              <span className="cat">Brand Strategy</span>
              <h3>Sound Foundation</h3>
              <p>Positioning, messaging, and brand story that define what you stand for.</p>
            </li>
            <li className="svc rv">
              <span className="cat">Verbal Identity</span>
              <h3>Find Your Voice</h3>
              <p>Tone of voice, tagline, and key messages that define how you sound.</p>
            </li>
            <li className="svc rv">
              <span className="cat">Visual Identity</span>
              <h3>Craft Your Identity</h3>
              <p>Logo system, colour, type, and guidelines for how your brand looks.</p>
            </li>
            <li className="svc rv">
              <span className="cat">Digital Design</span>
              <h3>On Screen</h3>
              <p>UI and development built so your brand feels natural on every screen.</p>
            </li>
            <li className="svc rv">
              <span className="cat">{"Campaign & Collateral"}</span>
              <h3>Public Showcase</h3>
              <p>Key visuals, OOH artwork, social templates, decks, and print for everywhere your brand shows up.</p>
            </li>
          </ul>
        </div>
      </section>
      <div className="seam" data-to="cream" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
      <section className="sec cream pillar-sec" id="make" style={{ "--c": "#16CDEB" }} aria-labelledby="make-h">
        <div className="inner split">
          <div className="stick pl-head">
            <span className="pl-mark" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <h2 className="rv" id="make-h">Make It</h2>
            <p className="rv">We turn the language into content people actually want to watch and share, not another ad to scroll past.</p>
          </div>
          <ul className="svc-list" data-tf="">
            <li className="svc rv">
              <span className="cat">{"Brand Films & Commercials"}</span>
              <h3>High Quality Production</h3>
              <p>Scripting, directing, and full commercial production for launches and major campaigns.</p>
            </li>
            <li className="svc rv">
              <span className="cat">Always On Content</span>
              <h3>Daily Buzz</h3>
              <p>A steady flow of feed native posts so your page stays active in the conversation.</p>
            </li>
            <li className="svc rv">
              <span className="cat">Photography</span>
              <h3>Custom Shoots</h3>
              <p>Editorial, lifestyle, and product photography that looks like your real world.</p>
            </li>
            <li className="svc rv">
              <span className="cat">{"Motion & Animation"}</span>
              <h3>Creative Motion</h3>
              <p>2D and 3D motion graphics, title systems, and product animation that make complex ideas clear in seconds.</p>
            </li>
            <li className="svc rv">
              <span className="cat">{"Podcasts & Long Form"}</span>
              <h3>Deep Dive Content</h3>
              <p>Podcasts, video series, and long form storytelling built to hold attention and earn authority.</p>
            </li>
            <li className="svc rv">
              <span className="cat">Behind The Scenes</span>
              <h3>Inside The Process</h3>
              <p>Candid production access and documentary storytelling that bring people closer to the work.</p>
            </li>
          </ul>
        </div>
      </section>
      <div className="seam" data-to="dark" style={{ background: "var(--cream) var(--tex-cream)" }} aria-hidden="true" />
      <section className="sec dark pillar-sec" id="move" style={{ "--c": "#F7561B" }} aria-labelledby="move-h">
        <div className="inner split">
          <div className="stick pl-head">
            <span className="pl-mark" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <h2 className="rv" id="move-h">Move It</h2>
            <p className="rv">We put the work into the hands of communities through the creators, gatekeepers, and channels they already trust.</p>
          </div>
          <ul className="svc-list" data-tf="">
            <li className="svc rv">
              <span className="cat">Chorus</span>
              <h3>Influencer Marketing</h3>
              <p>Coordinated creator campaigns pairing influencers for reach with communities for trust and conversion.</p>
            </li>
            <li className="svc rv">
              <span className="cat">VAN</span>
              <h3>Content Distribution</h3>
              <p>Placing your content inside trusted digital publications and niche spaces your audience already reads.</p>
            </li>
            <li className="svc rv">
              <span className="cat">Dialect</span>
              <h3>Social Media Management</h3>
              <p>Always on social media management, platform native strategy, and active community engagement.</p>
            </li>
            <li className="svc rv">
              <span className="cat">Cosign</span>
              <h3>PR</h3>
              <p>Editorial features, press, and podcast appearances from the gatekeepers your audience trusts.</p>
            </li>
            <li className="svc rv">
              <span className="cat">Landmark</span>
              <h3>OOH</h3>
              <p>Billboards, BRTs, danfos, and keke wraps that put your brand on the streets your audience moves through.</p>
            </li>
            <li className="svc rv">
              <span className="cat">Experiential</span>
              <h3>Live Moments</h3>
              <p>Brand activations, campus runs, and pop ups designed to be shared, not just attended.</p>
            </li>
          </ul>
        </div>
      </section>
      <div className="seam" data-to="orange" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
    </main>
    </Page>
  );
}
