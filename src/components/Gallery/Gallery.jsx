import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaCamera } from "react-icons/fa"
import "./Gallery.scss"

import img1 from "/images/gallery1.jpg"
import img2 from "/images/gallery2.jpg"
import img3 from "/images/gallery3.jpg"
import img4 from "/images/gallery4.jpg"
import img5 from "/images/gallery5.jpg"
import img6 from "/images/gallery6.jpg"

const galleryData = [
  {
    image: img1,
    title: "Tresses",
    category: "tresses",
    categoryLabel: "Coiffure"
  },
  {
    image: img2,
    title: "Nail Art Premium",
    category: "ongles",
    categoryLabel: "Onglerie"
  },
  {
    image: img3,
    title: "Pose de Perruque",
    category: "perruques",
    categoryLabel: "Perruques"
  },
  {
    image: img4,
    title: "Maquillage de Soirée",
    category: "soins",
    categoryLabel: "Soins"
  },
  {
    image: img5,
    title: "Nattes",
    category: "tresses",
    categoryLabel: "Coiffure"
  },
  {
    image: img6,
    title: "Manucure French",
    category: "ongles",
    categoryLabel: "Onglerie"
  },
]

const categories = [
  { id: "all", label: "Tous" },
  { id: "tresses", label: "Coiffures" },
  { id: "ongles", label: "Onglerie" },
  { id: "perruques", label: "Perruques" },
  { id: "soins", label: "Soins" },
]

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const filteredGallery = activeFilter === "all"
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  }

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        {/* Header */}
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <span className="badge-icon"><FaCamera /></span>
            <span>Notre Portfolio</span>
          </div>

          <h2 className="gallery-title">
            Galerie de Nos <span className="highlight">Réalisations</span>
          </h2>

          <p className="gallery-subtitle">
            Découvrez quelques-unes de nos plus belles créations
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? "active" : ""}`}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
              {activeFilter === category.id && (
                <motion.div
                  className="active-underline"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter}
        >
          <AnimatePresence mode="wait">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={`${item.category}-${index}`}
                className="gallery-item"
                variants={itemVariants}
                layout
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => setSelectedImage(item)}
                whileHover={{ y: -5 }}
              >
                {/* Image Container */}
                <div className="image-container">
                  <img src={item.image} alt={item.title} />
                  <div className="image-overlay" />

                  {/* Hover Content */}
                  <div className="hover-content">
                    <span className="category-tag">{item.categoryLabel}</span>
                    <h3 className="image-title">{item.title}</h3>
                    <button className="view-btn">
                      <span>Voir en grand</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  {/* Corner Decoration */}
                  <motion.div 
                    className="corner-decoration"
                    animate={{
                      width: hoveredIndex === index ? 60 : 40,
                      height: hoveredIndex === index ? 60 : 40
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Shine Effect */}
                  {hoveredIndex === index && (
                    <motion.div
                      className="shine-effect"
                      initial={{ left: "-100%" }}
                      animate={{ left: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* LA SECTION STATS A ÉTÉ RETIRÉE ICI */}
        
      </div>

      {/* Lightbox Modal (Conservé) */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            />
            <motion.div
              className="lightbox-modal bottom-right"
              initial={{ opacity: 0, x: 400, y: 400 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 400, y: 400 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedImage(null)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              <div className="lightbox-content">
                <img src={selectedImage.image} alt={selectedImage.title} />
                <div className="lightbox-info">
                  <span className="lightbox-category">{selectedImage.categoryLabel}</span>
                  <h3 className="lightbox-title">{selectedImage.title}</h3>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery