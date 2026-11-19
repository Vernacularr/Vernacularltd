import { instagramDmUrl } from '../config.js'
import '../styles/wip.css'

export function WIPPage() {
  return (
    <div className="wip">
      <div className="wip-glow" aria-hidden="true" />

      <div className="wip-in">
        <p className="wip-kicker">Vernacular</p>

        <p className="wip-line">Africa&apos;s community-powered brand growth network</p>

        <h1>
          A good spot in Lagos never opens with a <span>billboard.</span>
        </h1>

        <p className="wip-body">
          It opens quietly, and lets the people who&apos;ve been there do the
          talking. That&apos;s the site you&apos;re looking for. We&apos;re still
          building the thing worth talking about.
        </p>

        <div className="wip-foot">
          <div className="wip-rule" />
          <p className="wip-note">Until it&apos;s ready, we&apos;re not hard to find.</p>
          <a href={instagramDmUrl} target="_blank" rel="noopener noreferrer" className="wip-cta">
            Talk to us directly
          </a>
        </div>
      </div>
    </div>
  )
}
