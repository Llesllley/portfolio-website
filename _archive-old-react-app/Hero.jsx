import { profile } from './content'

function AnimatedWords({ text, startDelay = 1.15, step = 0.045 }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="word"
          style={{ animationDelay: `${startDelay + i * step}s` }}
        >
          {word}
        </span>
      ))}
    </>
  )
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <svg
        className="hero-lines"
        viewBox="0 0 1700 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g fill="none" stroke="#17160f" strokeWidth="1">
          <path d="M0 780 L280 620 L560 780 L840 560 L1120 780 L1400 600 L1700 780" />
          <path d="M120 900 L120 660 L340 540 L340 900" />
          <path d="M1360 900 L1360 620 L1560 500 L1560 900" />
          <path d="M700 900 L700 500 L900 380 L900 900" />
        </g>
      </svg>

      <span className="hero-eyebrow">{profile.eyebrow}</span>
      <h1 className="hero-name">{profile.displayName}</h1>
      <p className="hero-tagline">
        <AnimatedWords text={profile.tagline} />
      </p>

      <div className="hero-actions">
        <a href="#work" className="btn btn-primary">
          View Selected Work
        </a>
        <a href="#contact" className="btn btn-secondary">
          Get In Touch
        </a>
      </div>
    </section>
  )
}
