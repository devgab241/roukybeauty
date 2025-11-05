import React from "react";
import { motion } from "framer-motion";
import "./Hero.scss";
import heroImg from "/images/hero.png";
// Import d'icônes pour l'esthétique UI (Nécessite 'react-icons' : npm install react-icons)
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi'; // Utilisé ici pour la cohérence

// Définition des variantes pour Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <section id="hero" className="hero">
      
      {/* 1. Éléments de fond animés (pour la "vie") */}
      <div className="hero-background">
        <motion.div 
            className="gradient-orb orb-1"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
            className="gradient-orb orb-2"
            animate={{ scale: [1, 0.9, 1], rotate: [0, -15, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>

      {/* 2. Conteneur principal (Flexbox) */}
      <div className="hero-container">

        {/* Côté Gauche: Contenu Textuel et Actions */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            <motion.h2 className="hero-title" variants={itemVariants}>
                Sublimez votre élégance chez <span className="highlight">Rouky Beauty</span>
            </motion.h2>

            <motion.p className="hero-description" variants={itemVariants}>
                Votre espace beauté haut de gamme où l'élégance, la passion et le professionnalisme de nos expertes se rencontrent. Offrez-vous une expérience unique et personnalisée.
            </motion.p>
            
            {/* Bouton d'Action Primaire */}
            <motion.div className="hero-actions" variants={itemVariants}>
                <motion.a
                    href="#services"
                    className="hero-btn primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span>Découvrir nos services</span>
                    <FaArrowRight className="btn-arrow" />
                </motion.a>
            </motion.div>

        </motion.div>

        {/* Côté Droit: Image et Décorations */}
        <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        >
            {/* Décorations de l'image (basées sur le SCSS) */}
            <div className="image-glow"></div>
            <div className="image-decoration circle-1"></div>
            <div className="image-decoration circle-2"></div>

            <div className="image-wrapper">
                <img src={heroImg} alt="Salon Rouky Beauty" />
                <div className="image-overlay"></div>
            </div>
            
            {/* Badge flottant sur l'image SANS emoji */}
            <motion.div 
                className="floating-badge"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* Remplacement de l'emoji par l'icône de la bibliothèque pour la cohérence UI */}
                <HiOutlineSparkles className="badge-emoji" style={{ color: '#ff69b4', fontSize: '1.5rem' }} />
                <span className="badge-label">Élégance Assurée</span>
            </motion.div>

        </motion.div>

      </div>
      
      {/* Indicateur de défilement */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="scroll-mouse">
            <motion.div 
                className="scroll-wheel"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
        </div>
        <p>Scroll</p>
      </motion.div>
    </section>
  );
}

export default Hero;