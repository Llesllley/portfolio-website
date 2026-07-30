import useReveal from './useReveal'
import { profile, education, skills, awards } from './content'

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about">
      <div className="wrap section-inner" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <span className="section-eyebrow">About</span>
        </div>

        <div className="about-grid">
          <div className={`reveal ${visible ? 'visible' : ''}`}>
            <h2 style={{ fontSize: 'clamp(30px, 3.2vw, 44px)', marginBottom: 28, lineHeight: 1.15 }}>
              Design driven by narrative,
              <br />
              grounded in research.
            </h2>
            <p className="about-bio">{profile.bio}</p>

            <div className="about-status">
              <span className="dot" />
              {profile.statusLine}
            </div>

            <div className="skills-list">
              {skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={`reveal delay-2 ${visible ? 'visible' : ''}`}>
            <div className="about-col">
              <h3>Education</h3>
              {education.map((item) => (
                <div className="timeline-item" key={item.degree}>
                  <div className="date">{item.period}</div>
                  <div>
                    <div className="title-row">
                      <span className="title">{item.degree}</span>
                      {item.tag && <span className="badge">{item.tag}</span>}
                    </div>
                    <div className="detail">{item.school}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-col">
              <h3>Awards &amp; Recognition</h3>
              {awards.map((item) => (
                <div className="timeline-item" key={item.date + item.title}>
                  <div className="date">{item.date}</div>
                  <div>
                    <div className="title-row">
                      <span className="title">{item.title}</span>
                    </div>
                    <div className="detail">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-col">
              <h3>Contact</h3>
              <div className="contact-quick">
                <div>
                  <span>Email</span>
                  <span>{profile.email}</span>
                </div>
                <div>
                  <span>Phone</span>
                  <span>{profile.phone}</span>
                </div>
                <div>
                  <span>Location</span>
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
