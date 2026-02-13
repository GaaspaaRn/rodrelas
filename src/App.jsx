import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import NoiseOverlay from './components/NoiseOverlay'
import SidebarMenu from './components/SidebarMenu'
import SocialIcons from './components/SocialIcons'
import LeftNav from './components/LeftNav'
import GruvButton from './components/GruvButton'


import Home from './pages/Home'
import Sons from './pages/Sons'
import Visualizer from './pages/Visualizer'
import Shows from './pages/Shows'
import Contact from './pages/Contact'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    if (isMenuOpen) {
      lenis.stop()
    } else {
      lenis.start()
    }

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [isMenuOpen])

  return (
    <>
      <NoiseOverlay />
      <SidebarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center', // Always center for now, we'll offset if needed
        alignItems: 'flex-start',
        zIndex: 9997,
        pointerEvents: 'none',
        height: '100px'
      }}>
        {/* Logo Logic:
            Desktop Home: Center (handled by Home.jsx overlay, so opacity 0 here)
            Mobile Home: Top Center (Visible here)
            Other Pages: Top Center? Or Left?
            User said "mobile... logo centralizado ao topo no meio".
        */}
        <div className="logo app-header-logo">
          <img src="/fotos/logo-dj-rodriz.PNG" alt="DJ Rodriz" />
        </div>

        {/* Hamburger - Hidden via CSS class .hamburger-btn globally as per request/implication */}
        <button
          className="hamburger-btn"
          onClick={() => setIsMenuOpen(true)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '1.2rem',
            cursor: 'pointer',
            fontFamily: 'var(--font-title)',
            pointerEvents: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            width: '40px',
            position: 'absolute',
            right: '2rem'
          }}
        >
          <span style={{ display: 'block', width: '100%', height: '2px', background: 'white' }}></span>
          <span style={{ display: 'block', width: '100%', height: '2px', background: 'white' }}></span>
          <span style={{ display: 'block', width: '70%', height: '2px', background: 'white', alignSelf: 'flex-end' }}></span>
        </button>
      </header>

      {/* Left Navigation (Desktop & Mobile) */}
      <div style={{
        position: 'fixed',
        left: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 9990,
        pointerEvents: 'auto',
        mixBlendMode: 'difference'
      }} className="side-nav">
        <LeftNav />
      </div>

      {/* Social Icons (Right Sidebar) */}
      <div
        className="social-sidebar"
        style={{
          position: 'fixed',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 9990,
          pointerEvents: 'auto',
          mixBlendMode: 'difference'
        }}>
        <SocialIcons />
      </div>

      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/sons" element={<Sons />} />
          <Route path="/visualizer" element={<Visualizer />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer style={{
        position: 'fixed',
        bottom: '2rem',
        left: '0',
        width: '100%',
        zIndex: 9990,
        fontFamily: 'var(--font-body)',
        fontSize: '0.8rem',
        color: 'white',
        textAlign: 'center',
        padding: '0 1rem',
        pointerEvents: 'none', // Allow clicks through
        mixBlendMode: 'difference'
      }}>
        <div style={{ pointerEvents: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '0.5rem' }}>BOOKINGS</h4>
          <p style={{ margin: 0 }}>
            Tratar com Booker: <a href="https://wa.me/5547991529726?text=Ol%C3%A1%2C%20quero%20contratar%20o%20DJ%20Rodriz" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>47 9 9152-9726</a>
          </p>
          <div style={{ marginTop: '1rem', opacity: 0.7, fontSize: '0.7rem' }}>
            © 2026 DJ Rodriz – Todos os direitos reservados<br />
            <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <span>Desenvolvido por</span>
              <GruvButton />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
