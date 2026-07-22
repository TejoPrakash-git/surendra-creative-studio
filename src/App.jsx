import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'

export default function App() {
  const [isGallery, setIsGallery] = useState(window.location.hash === '#gallery')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      const isGal = hash === '#gallery'
      setIsGallery(isGal)

      if (isGal) {
        window.scrollTo({ top: 0, behavior: 'instant' })
      } else if (hash && hash !== '#top') {
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1))
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {isGallery ? (
          <Gallery />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
