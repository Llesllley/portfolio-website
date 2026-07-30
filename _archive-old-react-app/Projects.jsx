import { useMemo, useState } from 'react'
import useReveal from './useReveal'
import { projects } from './content'

const FAN_ANGLES = [-14, -6, 6, 14, -10, 10]

export default function Projects() {
  const [ref, visible] = useReveal()
  const [activeId, setActiveId] = useState(projects[0].id)
  const [filter, setFilter] = useState('All')

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  )

  const active = projects.find((p) => p.id === activeId) || projects[0]

  return (
    <section id="work" className="projects">
      <div className="wrap section-inner" ref={ref}>
        <div className={`section-head reveal ${visible ? 'visible' : ''}`}>
          <div>
            <span className="section-eyebrow">Selected Work</span>
            <h2>Featured Projects</h2>
          </div>
          <span className="section-count">
            {String(projects.length).padStart(2, '0')} projects
          </span>
        </div>

        <div className={`filter-tags reveal delay-1 ${visible ? 'visible' : ''}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tag ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={`book-row reveal delay-2 ${visible ? 'visible' : ''}`}>
          {projects.map((project, i) => {
            const isDimmed = filter !== 'All' && project.category !== filter
            const isActive = project.id === activeId
            return (
              <div
                key={project.id}
                className={`book ${isActive ? 'active' : ''} ${isDimmed ? 'dim' : ''}`}
                style={{
                  background: project.color,
                  transform: `rotate(${FAN_ANGLES[i % FAN_ANGLES.length]}deg)`,
                }}
                onMouseEnter={() => setActiveId(project.id)}
                onClick={() => setActiveId(project.id)}
              >
                <span className="book-index">{project.id}</span>
                <span className="book-title">{project.title}</span>
              </div>
            )
          })}
        </div>

        <div className={`project-detail reveal delay-3 ${visible ? 'visible' : ''}`}>
          <span className="pd-num">{active.id}</span>
          <div>
            <h3>{active.title}</h3>
            <p>{active.desc}</p>
          </div>
          <div className="pd-meta">
            {active.category}
            <br />
            {active.year}
          </div>
        </div>
      </div>
    </section>
  )
}
