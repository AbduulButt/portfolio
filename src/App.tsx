import { useEffect } from "react"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"


import About from "./sections/About"
import Skills from "./sections/Skills"
import SkillLevels from "./sections/SkillLevels"
import Projects from "./sections/Projects"
import Education from "./sections/Education"
import Experience from "./sections/Experience"
import Services from "./sections/Services"
import Learning from "./sections/Learning"
import Contact from "./sections/Contact"


import { initTilt } from "./animations/initTilt"

function App() {
  useEffect(() => {
    const cleanupTilt = initTilt()

    return () => {
      cleanupTilt()
    }
  }, [])

  return (
    <>
      <Navbar />

      <main>
        <About />
        <Skills />
        <SkillLevels />
        <Projects />
        <Education />
        <Experience />
        <Services />
        <Learning />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App