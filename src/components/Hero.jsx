import React from 'react'
import { useI18n } from '../App'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section id="home" className="editorial-hero">
      <div className="editorial-hero-frame">
        {/* Background photo container */}
        <div className="hero-photo-wrapper">
          <img
            src="/fond.jpg"
            alt="Julie Zilberberg - Fond portfolio"
            className="hero-main-photo"
          />
          <div className="hero-photo-overlay"></div>
        </div>

        {/* Centered Editorial Overlay Content */}
        <div className="hero-content-container">
          <div className="hero-copy-box">
            <h1 className="hero-title">
              {t('hero.title')}
            </h1>

            {t('hero.sub') && (
              <p className="hero-subtitle">
                {t('hero.sub')}
              </p>
            )}

            <div className="hero-cta-wrapper d-flex flex-wrap justify-content-center gap-3">
              <a href="#projects" className="editorial-btn editorial-btn-solid">
                {t('hero.cta')}
              </a>
              <a href="/Resume_Zilberberg_Julie.pdf" download className="editorial-btn editorial-btn-solid">
                {t('hero.cta_cv')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
