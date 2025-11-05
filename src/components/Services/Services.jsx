import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./Services.scss"
import { FaScissors, FaHandSparkles, FaCrown, FaSpa, FaGem } from "react-icons/fa6"
import coiffure from "/images/tresses.jpg"
import ongles from "/images/onglerie.jpg"
import perruques from "/images/perruques.jpg"
import soins from "/images/soins.jpg"

const services = [
  {
    image: coiffure,
    title: "Tresses & Coiffures",
    description: "Des styles modernes et traditionnels pour sublimer votre chevelure",
    icon: FaScissors,
    features: ["Tresses", "Défrisage", "Shampoing", "Coiffures événementielles", "Et bien plus"],
    color: "#ff66b2"
  },
  {
    image: ongles,
    title: "Onglerie",
    description: "Manucure et pédicure soignées pour des mains et pieds impeccables",
    icon: FaHandSparkles,
    features: ["Pose de vernis", "Décoration", "Nail art", "Extensions d'ongles", "Et bien plus"],
    color: "#ff8dc7"
  },
  {
    image: perruques,
    title: "Perruques & Tissages",
    description: "Pose professionnelle pour un rendu naturel et élégant",
    icon: FaCrown,
    features: ["Pose de tissages", "Pose de perruques", "Lissage", "Entretien", "Et bien plus"],
    color: "#d94c91"
  },
  {
    image: soins,
    title: "Soins Esthétiques",
    description: "Soins du visage, maquillage et beauté du regard pour vous mettre en valeur",
    icon: FaSpa,
    features: ["Soins du visage", "Maquillage professionnel", "Épilation", "Massages relaxants", "Et bien plus"],
    color: "#ffb6d9"
  },
]

// Constantes pour le lien WhatsApp
const PHONE_NUMBER = "+241 77 670 985";
const CLEAN_PHONE_NUMBER = PHONE_NUMBER.replace(/\s/g, '').replace('+', '');
const WA_BASE_URL = `https://wa.me/${CLEAN_PHONE_NUMBER}`;
const WA_MESSAGE_GLOBAL = encodeURIComponent("Bonjour, je souhaite réserver un service");
const WA_LINK_GLOBAL = `${WA_BASE_URL}?text=${WA_MESSAGE_GLOBAL}`;


function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  }

  // Fonction pour générer le lien WhatsApp spécifique au service
  const getModalWALink = (serviceTitle) => {
    const message = encodeURIComponent(`Bonjour, je souhaite réserver le service : ${serviceTitle}`);
    return `${WA_BASE_URL}?text=${message}`;
  };

  return (
    <section id="services" className="services">
      {/* Background Decorations */}
      <div className="services-background">
        <motion.div 
          className="bg-orb orb-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="bg-orb orb-2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="services-container">
        {/* Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <span className="badge-icon"><FaGem /></span>
            <span>Nos Prestations</span>
          </div>

          <h2 className="services-title">
            Découvrez Nos <span className="highlight">Services</span>
          </h2>

          <p className="services-subtitle">
            Des prestations de qualité pour sublimer votre beauté naturelle
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedService(service)}
              whileHover={{ y: -10 }}
              style={{ '--service-color': service.color }}
            >
              {/* Image Container */}
              <div className="image-wrapper">
                <div className="image-container">
                  <img src={service.image} alt={service.title} />
                  <div className="image-overlay" />
                </div>

                {/* Icon Badge */}
                <motion.div 
                  className="icon-badge"
                  animate={{
                    rotate: hoveredIndex === index ? 360 : 0
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon />
                </motion.div>

                {/* Corner Decoration */}
                <motion.div 
                  className="corner-decoration"
                  animate={{
                    width: hoveredIndex === index ? 80 : 40,
                    height: hoveredIndex === index ? 80 : 40
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shine Effect */}
                <motion.div
                  className="shine-effect"
                  animate={{
                    left: hoveredIndex === index ? "100%" : "-100%"
                  }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Content */}
              <div className="card-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                {/* Features */}
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="feature-icon">✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Card Glow Effect */}
              {hoveredIndex === index && (
                <motion.div
                  className="card-glow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Prête à vous faire chouchouter ?</h3>
          <p>Réservez dès maintenant votre rendez-vous pour une expérience beauté inoubliable</p>
          <motion.a
            href={WA_LINK_GLOBAL} // Utilise le lien global
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Réserver maintenant</span>
            <motion.span
              className="arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            />
            <motion.div
              className="service-modal bottom-right"
              initial={{ opacity: 0, x: 400, y: 400 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 400, y: 400 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button
                className="close-modal"
                onClick={() => setSelectedService(null)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              <div className="modal-content">
                <div className="modal-image">
                  <img src={selectedService.image} alt={selectedService.title} />
                  <div className="modal-icon-badge">
                    <selectedService.icon />
                  </div>
                </div>

                <div className="modal-info">
                  <h3>{selectedService.title}</h3>
                  <p className="modal-description">{selectedService.description}</p>

                  <div className="modal-features">
                    <h4>Prestations incluses :</h4>
                    <ul>
                      {selectedService.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <span className="check-icon">✓</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.a
                    // CORRECTION ICI : Utilise la fonction avec le titre spécifique
                    href={getModalWALink(selectedService.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-cta"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Réserver ce service
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Services