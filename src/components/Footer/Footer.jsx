import React from "react";
import "./Footer.scss";
import { FaWhatsapp, FaTiktok, FaMapMarkerAlt, FaHeart, FaChevronRight, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const PHONE_NUMBER = "+241 77 670 985";
  const EMAIL_ADDRESS = "magnigenevieve2@gmail.com";
  
  const ADDRESS_DISPLAY = "Beau-Lieu Akanda"; 
  const GPS_COORDINATES = "0.50504, 9.39375"; 
  
  const TIKTOK_LINK = "https://www.tiktok.com/@roukybeauty1";

  const WA_MESSAGE = "Bonjour, je souhaite réserver un service.";
  const CLEAN_PHONE_NUMBER = PHONE_NUMBER.replace(/\s/g, '').replace('+', ''); 
  const ENCODED_MESSAGE = encodeURIComponent(WA_MESSAGE);
  const WHATSAPP_LINK = `https://wa.me/${CLEAN_PHONE_NUMBER}?text=${ENCODED_MESSAGE}`; 
  
  const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GPS_COORDINATES)}`;


  return (
    <footer className="footer">
      
      <div className="footer-container">
        
        {/* 1. Contenu principal - Colonnes (Grille à 4 colonnes) */}
        <div className="footer-content footer-grid-4">
          
          {/* Colonne 1: À Propos et Description */}
          <div className="footer-column about-column">
            <div className="footer-logo">
              <h3><span style={{ color: '#ff69b4' }}>Rouky</span> Beauty</h3>
            </div>
            <p className="footer-description">
              Passion, élégance et savoir-faire au service de ta beauté. 
              Notre équipe t’accueille avec le sourire pour te sublimer.
            </p>
            
            {/* Liens Sociaux */}
            <div className="social-links">
              <a
                href={WHATSAPP_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ '--social-color': '#25D366' }}
              >
                <FaWhatsapp />
              </a>
              <a
                href={TIKTOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ '--social-color': '#000000' }}
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Colonne 2: Liens Rapides */}
          <div className="footer-column">
            <h4 className="column-title">Liens Rapides</h4>
            <ul className="footer-links">
              <li>
                <a href="#hero">
                  <FaChevronRight className="link-arrow" /> Accueil
                </a>
              </li>
              <li>
                <a href="#about">
                  <FaChevronRight className="link-arrow" /> À Propos
                </a>
              </li>
              <li>
                <a href="#services">
                  <FaChevronRight className="link-arrow" /> Nos Services
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Horaires d'Ouverture */}
          <div className="footer-column">
            <h4 className="column-title">Horaires</h4>
            <ul className="contact-info">
              <li>
                <FaClock className="contact-icon" />
                <span>Ouvert de Mardi à Dimanche</span>
              </li>
              <li style={{ marginTop: '0.5rem' }}>
                <span style={{ marginLeft: '24px' }}>Mardi à Samedi : 9h - 19h</span>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <span style={{ marginLeft: '24px' }}>Dimanche : 9h - 15h</span>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Contact & Localisation */}
          <div className="footer-column">
            <h4 className="column-title">Contact</h4>
            <ul className="contact-info">
              <li>
                <FaPhoneAlt className="contact-icon" />
                <a href={`tel:${CLEAN_PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
              </li>
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                {/* Affiche le nom de lieu (Beau-Lieu Akanda) */}
                <span className="gps-display">{ADDRESS_DISPLAY}</span>
              </li>
            </ul>
            {/* Le bouton utilise le MAPS_LINK avec les coordonnées numériques */}
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ background: '#ff69b4', color: 'white', width: 'auto', padding: '10px 20px', borderRadius: '8px', marginTop: '15px' }}
            >
              Voir la carte
            </a>
          </div>
          
        </div>

      </div> {/* Fin footer-container */}

      {/* 2. Section Basse du Pied de Page */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-content">
          <p className="copyright">
            © {currentYear} Rouky Beauty. Tous droits réservés.
          </p>
          <div className="footer-bottom-links">
            <p className="made-with">
              Fait avec <FaHeart className="heart-icon" /> et passion.
            </p>
            <a href="#legal">Mentions Légales</a>
            <span className="separator">|</span>
            <a href="#privacy">Confidentialité</a>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;