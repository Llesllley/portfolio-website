import { useEffect, useState } from 'react'
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import { profile } from './content'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showSplash && (
        <div className="splash" aria-hidden="true">
          <span>{profile.displayName}</span>
        </div>
      )}
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
