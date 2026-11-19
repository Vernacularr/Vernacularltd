// Social icons used in the menu and the footer.
// TODO: add the real TikTok, LinkedIn and X links (href="#" for now).
const ICON = {
  width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true,
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/vernacular.co/',
  tiktok: '#',
  linkedin: '#',
  x: '#',
};

const ext = (href) => (href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {});

export default function Socials() {
  return (
    <div className="socials">
      <a href={SOCIAL_LINKS.instagram} aria-label="Instagram" {...ext(SOCIAL_LINKS.instagram)}>
        <svg {...ICON}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r=".6" fill="currentColor" />
        </svg>
      </a>
      <a href={SOCIAL_LINKS.tiktok} aria-label="TikTok" {...ext(SOCIAL_LINKS.tiktok)}>
        <svg {...ICON}>
          <path d="M14 3v11.2a3.8 3.8 0 1 1-3.8-3.8" />
          <path d="M14 3c.4 2.7 2.3 4.6 5 4.9" />
        </svg>
      </a>
      <a href={SOCIAL_LINKS.linkedin} aria-label="LinkedIn" {...ext(SOCIAL_LINKS.linkedin)}>
        <svg {...ICON}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 10.5V17" />
          <circle cx="8" cy="7.2" r=".6" fill="currentColor" />
          <path d="M12 17v-6.5" />
          <path d="M12 13.2c0-1.6 1.1-2.7 2.5-2.7s2.5 1 2.5 2.7V17" />
        </svg>
      </a>
      <a href={SOCIAL_LINKS.x} aria-label="X (Twitter)" {...ext(SOCIAL_LINKS.x)}>
        <svg {...ICON}>
          <path d="M4 4l16 16" />
          <path d="M20 4L4 20" />
        </svg>
      </a>
    </div>
  );
}
