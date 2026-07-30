import useReveal from './useReveal'
import { profile } from './content'

export default function Contact() {
  const [ref, visible] = useReveal({ threshold: 0.3 })

  return (
    <section id="contact" className="contact" ref={ref}>
      <span className={`contact-eyebrow reveal ${visible ? 'visible' : ''}`}>
        Get In Touch
      </span>
      <h2 className={`reveal delay-1 ${visible ? 'visible' : ''}`}>
        Let&rsquo;s build
        <br />
        something.
      </h2>
      <div className={`contact-list reveal delay-2 ${visible ? 'visible' : ''}`}>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
        <span>{profile.location}</span>
      </div>
      <div className="contact-foot">
        &copy; {new Date().getFullYear()} {profile.fullName}. {profile.statusLine}.
      </div>
    </section>
  )
}
