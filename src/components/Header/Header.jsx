import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./Header.scss"
import logo from "/images/logo.jpg"

// Constantes pour le lien WhatsApp
const PHONE_NUMBER = "+241 77 670 985";
const CLEAN_PHONE_NUMBER = PHONE_NUMBER.replace(/\s/g, '').replace('+', '');
const WA_MESSAGE = encodeURIComponent("Bonjour, je souhaite prendre rendez-vous chez Rouky Beauty");
const WA_LINK = `https://wa.me/${CLEAN_PHONE_NUMBER}?text=${WA_MESSAGE}`;

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Détection de la section active
      const sections = ["hero", "services", "gallery", "about"]
      let currentSection = "hero"
      let minDistance = Infinity
      
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top
          const elementHeight = rect.height
          const elementCenter = elementTop + (elementHeight / 2)
          const viewportCenter = window.innerHeight / 2
          const distance = Math.abs(elementCenter - viewportCenter)
          
          // La section la plus proche du centre de l'écran devient active
          if (distance < minDistance && elementTop < window.innerHeight && rect.bottom > 0) {
            minDistance = distance
            currentSection = section
          }
        }
      })
      
      setActiveSection(currentSection)
    }

    // Appeler une fois au chargement
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "hero", label: "Accueil" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Galerie" },
    { id: "about", label: "À propos" } 
  ]

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      // Update active section immediately
      setActiveSection(id)
    }
  }

  return (
    <>
      <motion.header
        className={`header ${isScrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
      >
        <nav className="navbar">
          {/* Logo */}
          <motion.a 
            href="#hero"
            className="logo-container"
            onClick={(e) => handleNavClick(e, "hero")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="logo-wrapper">
              <img src={logo} alt="Rouky Beauty" className="logo-img" />
              <div className="logo-ring" />
            </div>
            <div className="logo-text-wrapper">
              <h1 className="logo-text">Rouky Beauty</h1>
              <span className="logo-tagline">Institut de beauté</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="nav-menu desktop">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={activeSection === item.id ? "active" : ""}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="active-dot"
                      layoutId="activeDot"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.a
            href={WA_LINK} // CORRECTION du lien WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button desktop"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Réserver</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </motion.button>
        </nav>

        {/* Progress bar */}
        <motion.div 
          className="progress-bar"
          style={{
            scaleX: isScrolled ? 1 : 0,
            transformOrigin: "left"
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="mobile-menu-header">
                <img src={logo} alt="Rouky Beauty" className="mobile-logo" />
                <h2>Menu</h2>
              </div>
              
              <ul className="mobile-nav-list">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <a 
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={activeSection === item.id ? "active" : ""}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href={WA_LINK} // CORRECTION du lien WhatsApp
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-cta"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Prendre rendez-vous
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header