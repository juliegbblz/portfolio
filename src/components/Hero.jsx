import React from 'react'
import { useI18n } from '../App'

export default function Hero(){
  const { t } = useI18n()
  return (
    <section id="home" className="hero-section py-4 py-lg-5">
      <div className="container portfolio-shell">
        <div className="editorial-topline">
          <span>{t('topline')}</span>
        </div>
        <div className="row align-items-stretch g-0 hero-grid">
          <div className="col-lg-6 hero-image-panel">
            <div className="hero-image-wrap">
              <img className="portrait-image portrait-large" src="/julie.jpg" alt="Julie Zilberberg portrait" />
            </div>
          </div>
          <div className="col-lg-6 hero-copy-panel d-flex align-items-center">
            <div className="hero-copy">
              <p className="eyebrow mb-2">{t('hero.eyebrow')}</p>
              <h1 className="display-4 mb-3">Julie Zilberberg</h1>
              <p className="lead text-secondary mb-4">{t('hero.lead')}</p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-chic-outline btn-lg fw-semibold">{t('hero.cta_projects')}</a>
                <a href="#contact" className="btn btn-chic-outline btn-lg fw-semibold">{t('hero.cta_contact')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
