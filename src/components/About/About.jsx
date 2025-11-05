import React from "react";
import "./About.scss";
import aboutImg from "/images/about.jpg";

function About() {
  return (
    <section className="about">
      {/* Ajout d'éléments de fond décoratifs pour donner de la "vie" (basé sur le SCSS existant) */}
      <div className="about-background">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>

      <div className="about-container">
        {/* J'utilise la classe 'about-header' pour le titre de la section existant dans le SCSS */}
        <header className="about-header">
            {/* L'ajout d'un badge est conservé car il est défini dans le SCSS initial */}
            <div className="section-badge">
                <span>L'Art de la Beauté</span> 
            </div>
            <h1 className="about-title">
                Notre Philosophie, Notre Engagement
            </h1>
        </header>

        <div className="about-content">
          <div className="about-text about-story">
            <h2>À propos de <span className="highlight">Rouky Beauty</span></h2>
            <p>
              <span className="highlight">Rouky Beauty</span> est née de la vision d’une jeune entrepreneuse profondément passionnée par l’art de l’esthétique. 
              En collaboration avec une équipe d'expertes qualifiées, notre mission est de mettre un savoir-faire d'exception au service de chaque femme. 
              Nous nous engageons à sublimer votre beauté naturelle à travers des prestations de haute qualité et une approche entièrement personnalisée.
            </p>
            <p>
              Chaque soin est réalisé avec une attention méticuleuse, une créativité renouvelée et un grand professionnalisme. 
              Notre institut offre une ambiance à la fois conviviale et résolument moderne, conçue pour vous permettre de vous ressourcer. 
              Notre plus grande fierté est de vous voir repartir avec un sentiment de confiance et un épanouissement renouvelé.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutImg} alt="Fondatrice Rouky Beauty" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;