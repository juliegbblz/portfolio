import React from 'react'
import { useI18n } from '../App'

export default function Passion(){
  const { t } = useI18n()
  return (
    <section id="passion" className="py-5 section-soft">
      <div className="container">
        <div className="text-center mb-4">
          <p className="eyebrow mb-2">{t('passion.eyebrow')}</p>
          <h2 className="section-title">{t('passion.title')}</h2>
          <p className="text-secondary mb-0">{t('passion.desc')}</p>
        </div>
        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <div className="card portfolio-card p-4 p-lg-5 chic-card h-100">
              <h3 className="h4 mb-3">{t('passion.card.title')}</h3>
              <p className="text-secondary mb-3">{t('passion.card.p1')}</p>
              <p className="text-secondary mb-0">{t('passion.card.p2')}</p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row g-3 swimming-gallery">
              <div className="col-md-4">
                <img src="/natation1.jpg" alt={t('passion.card.title')} className="img-fluid swimming-photo" />
              </div>
              <div className="col-md-4">
                <img src="/natation2.jpg" alt={t('passion.card.title')} className="img-fluid swimming-photo swimming-photo-tall" />
              </div>
              <div className="col-md-4">
                <img src="/natation3.jpg" alt={t('passion.card.title')} className="img-fluid swimming-photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
