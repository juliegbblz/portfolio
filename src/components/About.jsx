import React from 'react'
import { useI18n } from '../App'

export default function About(){
  const { t } = useI18n()
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="about-editorial card portfolio-card chic-card p-4 p-lg-5">
          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <h2 className="about-title mb-2">{t('about.title')}</h2>
              <p className="about-text mb-3">{t('about.p1')}</p>
              <p className="about-text mb-4">{t('about.p2')}</p>
              <a href="/Resume_Zilberberg_Julie.pdf" className="btn btn-chic-outline fw-semibold" download>{t('about.cv')}</a>
            </div>
            <div className="col-lg-5">
              <img className="about-feature-image" src="/julie2.jpg" alt="Julie Zilberberg portrait" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
