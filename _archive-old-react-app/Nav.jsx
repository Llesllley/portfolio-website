import { navLinks } from './content'

export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav-mark" aria-label="Home">
        SL
      </a>
      <div className="nav-right">
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="nav-cta">
          Let&rsquo;s Talk
        </a>
      </div>
    </header>
  )
}
