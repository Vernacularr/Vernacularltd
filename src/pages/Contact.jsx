import Page from '../components/Page.jsx';
import initSite from '../effects/site.js';

export default function Contact() {
  return (
    <Page
      path="/contact"
      title="Contact · Vernacular"
      description="Contact Us"
      bodyClass="pg"
      init={initSite}
    >
    <main id="main">
      <section className="pg-hero dark ct-hero" aria-labelledby="ct-h">
        <div className="lfield " data-field="" style={{ "--c": "#F7561B" }} aria-hidden="true" />
        <div className="inner">
          <span className="eyebrow mk rv" data-anchor="">LET'S TALK</span>
          <div className="hero-grid">
            <h1 className="pg-h1 ct-h1 rv" id="ct-h">Contact Us</h1>
            <p className="pg-lead rv">Have a brand to grow, a partnership to explore or a creative opportunity in mind? Tell us a little about it, and let's start there.</p>
          </div>
          <div className="ct-tabs rv" role="tablist" aria-label="Who are you?">
            <button type="button" role="tab" id="tab-brands" aria-controls="panel-brands" aria-selected="false" data-tab="brands" style={{ "--c": "#F7561B" }}>For Brands</button>
            <button type="button" role="tab" id="tab-agencies" aria-controls="panel-agencies" aria-selected="false" data-tab="agencies" style={{ "--c": "#16CDEB" }}>For Agencies</button>
            <button type="button" role="tab" id="tab-creators" aria-controls="panel-creators" aria-selected="false" data-tab="creators" style={{ "--c": "#9A62F7" }}>For Creators</button>
            <button type="button" role="tab" id="tab-note" aria-controls="panel-note" aria-selected="false" data-tab="note" style={{ "--c": "#FFC21C" }}>Write Us A Note</button>
          </div>
        </div>
      </section>
      <div className="seam" data-to="cream" style={{ background: "var(--black) var(--tex-dark)" }} aria-hidden="true" />
      <section className="cream ct-forms" id="forms" aria-label="Contact forms">
        <div className="inner">
          <div className="ct-panel" role="tabpanel" id="panel-brands" aria-labelledby="tab-brands" data-panel="brands" style={{ "--c": "#F7561B" }} hidden>
            <div className="ct-side">
              <span className="ct-hook">FOR BRANDS</span>
              <h2 className="ct-h">Let's Grow Your Brand.</h2>
              <p className="ct-body">Tell us what you're working towards. We'll help you explore the right way to reach your audience.</p>
              <div className="ct-nudge">
                <span className="nd-tk" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <strong>Your audience is already talking.</strong>
                <p>Two minutes here and we can start shaping what they say about you.</p>
              </div>
            </div>
            <form className="ct-form" data-kind="brand" noValidate>
              <div className="fld">
                <label htmlFor="b-company">Company or Brand Name</label>
                <input id="b-company" name="b-company" type="text" placeholder="Your company or brand name" required autoComplete="organization" />
              </div>
              <div className="fld">
                <label htmlFor="b-name">Your Name</label>
                <input id="b-name" name="b-name" type="text" placeholder="Your full name" required autoComplete="name" />
              </div>
              <div className="fld">
                <label htmlFor="b-role">Your Role</label>
                <input id="b-role" name="b-role" type="text" placeholder="What's your role at the company?" required autoComplete="organization-title" />
              </div>
              <div className="fld">
                <label htmlFor="b-email">Work Email</label>
                <input id="b-email" name="b-email" type="email" placeholder="you@company.com" required autoComplete="email" />
              </div>
              <div className="fld">
                <label htmlFor="b-phone">Phone/ WhatsApp Number</label>
                <input id="b-phone" name="b-phone" type="tel" placeholder="Your phone or WhatsApp number" required autoComplete="tel" />
              </div>
              <div className="fld">
                <label htmlFor="b-help">What Do You Need Help With?</label>
                <div className="sel">
                  <select id="b-help" name="b-help" required>
                    <option value="" selected="" disabled>Select an option</option>
                    <option>Find: brand strategy, identity and design</option>
                    <option>Make: content, film and production</option>
                    <option>Move: creators, communities and distribution</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="fld">
                <label htmlFor="b-goal">What Are You Trying to Achieve?</label>
                <textarea id="b-goal" name="b-goal" rows="4" placeholder="Tell us a little about your goals." required />
              </div>
              <div className="fld">
                <label htmlFor="b-heard">{"How Did You Hear About Us? "}<span className="opt">(Optional)</span></label>
                <div className="sel">
                  <select id="b-heard" name="b-heard">
                    <option value="" selected="" disabled>Select an option</option>
                    <option>Instagram</option>
                    <option>TikTok</option>
                    <option>LinkedIn</option>
                    <option>A referral</option>
                    <option>An event</option>
                    <option>Search</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <button className="btn btn-black ct-submit" type="submit">Submit</button>
              <p className="ct-err" role="alert" hidden>Please fill in the highlighted fields.</p>
            </form>
          </div>
          <div className="ct-panel" role="tabpanel" id="panel-agencies" aria-labelledby="tab-agencies" data-panel="agencies" style={{ "--c": "#16CDEB" }} hidden>
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
          <div className="ct-panel" role="tabpanel" id="panel-creators" aria-labelledby="tab-creators" data-panel="creators" style={{ "--c": "#9A62F7" }} hidden>
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
              <button className="btn btn-black ct-submit" type="submit">Submit</button>
              <p className="ct-err" role="alert" hidden>Please fill in the highlighted fields.</p>
            </form>
          </div>
          <div className="ct-panel" role="tabpanel" id="panel-note" aria-labelledby="tab-note" data-panel="note" style={{ "--c": "#FFC21C" }} hidden>
            <div className="ct-side">
              <span className="ct-hook">WRITE US A NOTE</span>
              <h2 className="ct-h">Every Good Conversation Starts Somewhere.</h2>
              <p className="ct-body">
                {"We'd love to hear from you. If you'd prefer to email us instead, reach out to "}<a href="mailto:info@vernacular.com">info@vernacular.com.</a>
              </p>
              <div className="ct-nudge">
                <span className="nd-tk" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <strong>Every big move starts with a hello.</strong>
                <p>Drop us a line, we read every message.</p>
              </div>
            </div>
            <form className="ct-form" data-kind="note" noValidate>
              <div className="fld">
                <label htmlFor="n-name">Your Name</label>
                <input id="n-name" name="n-name" type="text" placeholder="Full name" required autoComplete="name" />
              </div>
              <div className="fld">
                <label htmlFor="n-email">Work Email</label>
                <input id="n-email" name="n-email" type="email" placeholder="you@company.com" required autoComplete="email" />
              </div>
              <div className="fld">
                <label htmlFor="n-subject">Subject</label>
                <input id="n-subject" name="n-subject" type="text" placeholder="What is it about?" required />
              </div>
              <div className="fld">
                <label htmlFor="n-msg">Your Message</label>
                <textarea id="n-msg" name="n-msg" rows="4" placeholder="Tell us what you have in mind..." required />
              </div>
              <button className="btn btn-black ct-submit" type="submit">Start the Conversation</button>
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
