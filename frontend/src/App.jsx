import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Frameworks from './components/Frameworks'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // SIEMPRE iniciar en modo claro (blanco) - forzar remoción de clase dark
    document.documentElement.classList.remove('dark')
    document.body.style.backgroundColor = '#ffffff'
    // Limpiar cualquier preferencia guardada
    localStorage.removeItem('darkMode')
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Timeline />
              <Projects />
              <Skills />
              <Frameworks />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

