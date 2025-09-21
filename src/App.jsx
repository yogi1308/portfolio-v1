import './App.css'
import Projects from './sections/projects/Projects'
import Hero from './sections/hero/Hero'
import Contact from './sections/contact/Contact'
import AboutMe from './sections/about-me/AboutMe'
import Experience from './sections/experience/Experience'
import Navbar from './background/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default App
