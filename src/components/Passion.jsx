import React, { useState } from 'react'
import { useI18n } from '../App'

export default function Passion() {
  const { t, lang } = useI18n()
  const [slideIndex, setSlideIndex] = useState(0)

  const slides = [
    {
      img: '/natation1.jpg',
      alt: 'Julie Zilberberg at swimming competition block',
      quoteEn: '“Regular competitive swimming practice for 14 years. Training six times a week has honed my resilience, consistency, and focus under intense pressure. Competing in the French University Championships strengthened my teamwork, synchronicity, and pursuit of technical excellence.”',
      quoteFr: '« Pratique régulière de la natation en compétition depuis 14 ans. Six entraînements par semaine ont façonné ma rigueur, ma résilience et ma capacité à performer sous pression. Ma participation aux Championnats de France Universitaires a renforcé mon esprit d’équipe et ma recherche de précision technique. »',
      author: 'Julie Zilberberg',
      roleEn: '14 Years Competitive Swimmer & French University Championships Competitor',
      roleFr: 'Nageuse en compétition depuis 14 ans & Participante aux Championnats de France Universitaires'
    },
    {
      img: '/natation2.jpg',
      alt: 'University championship team trophy',
      quoteEn: '“Standing on the university championship podium with my team taught me that great software engineering, like championship relays, relies on absolute trust, synchronicity, and relentless daily preparation.”',
      quoteFr: '« Monter sur le podium des championnats universitaires avec mon équipe m’a appris que les grands projets logiciels, tout comme les relais en compétition, reposent sur la confiance absolue, la synchronisation et la préparation quotidienne. »',
      author: 'Championnats de France Universitaires',
      roleEn: 'National University Podium & Team Spirit',
      roleFr: 'Podium national universitaire & Esprit d’équipe'
    },
    {
      img: '/natation3.jpg',
      alt: 'Julie Zilberberg swimming butterfly',
      quoteEn: '“Beyond athletics, I also practice recreational sewing: a craft demanding geometry, patience, and meticulous attention to seams—qualities that directly mirror building clean, maintainable software architectures.”',
      quoteFr: '« En dehors des bassins, je pratique la couture de loisir : un artisanat exigeant géométrie, patience et précision des finitions—des qualités qui résonnent directement avec la conception de code propre et durable. »',
      author: 'Couture & Rigueur du Détail',
      roleEn: 'Precision, Geometry & Attention to Detail',
      roleFr: 'Précision, Géométrie & Sens du détail'
    }
  ]

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const current = slides[slideIndex]

  return (
    <section id="passion" className="editorial-testimonial-section py-5 position-relative">
      <div className="container py-4">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <p className="editorial-eyebrow mb-2">ENGAGEMENT & DISCIPLINE</p>
          <h2 className="editorial-section-title">
            {t('passion.section_title')}
          </h2>
        </div>

        {/* Carousel / Testimonial Box */}
        <div className="testimonial-wrapper position-relative mx-auto">
          {/* Left Arrow Button */}
          <button
            type="button"
            className="testimonial-nav-arrow arrow-prev"
            onClick={prevSlide}
            aria-label="Previous story"
          >
            ‹
          </button>

          {/* Testimonial Content Card */}
          <div className="testimonial-content-row d-flex flex-column flex-md-row align-items-center gap-4 gap-lg-5">
            {/* Circular Avatar */}
            <div className="testimonial-avatar-wrapper flex-shrink-0">
              <img
                src={current.img}
                alt={current.alt}
                className="testimonial-avatar-img"
              />
            </div>

            {/* Quote Body */}
            <div className="testimonial-quote-box flex-grow-1">
              <blockquote className="testimonial-quote">
                {lang === 'fr' ? current.quoteFr : current.quoteEn}
              </blockquote>
              <div className="testimonial-attribution mt-3">
                <span className="attribution-author">{current.author}</span>
                <span className="attribution-role d-block">
                  {lang === 'fr' ? current.roleFr : current.roleEn}
                </span>
              </div>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            className="testimonial-nav-arrow arrow-next"
            onClick={nextSlide}
            aria-label="Next story"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
