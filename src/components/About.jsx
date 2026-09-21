import React from 'react'
import { useI18n } from '../App'

export default function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="editorial-collage-section position-relative overflow-hidden">
      {/* Background abstract continuous line art overlay */}
      <div className="collage-line-art-bg" aria-hidden="true">
        <img src="/line-art.svg" alt="" className="line-art-img" />
      </div>

      <div className="container py-5 my-lg-4 position-relative">
        {/* Upper Collage Row: Portrait Photo + Large Stacked Serif Heading + Narrative Paragraph */}
        <div className="row g-4 g-lg-5 align-items-start mb-5">
          {/* Left vertical portrait photo */}
          <div className="col-12 col-md-5 col-lg-3">
            <div className="collage-photo-frame collage-frame-tall">
              <img
                src="/julie.jpg"
                alt="Julie Zilberberg architectural portrait"
                className="collage-img"
              />
            </div>
          </div>

          {/* Center stacked editorial title */}
          <div className="col-12 col-md-7 col-lg-4">
            <h2 className="collage-title">
              <span>{t('about.heading_line1')}</span>
              <span>{t('about.heading_line2')}</span>
              <span>{t('about.heading_line3')}</span>
            </h2>
          </div>

          {/* Right editorial descriptive copy */}
          <div className="col-12 col-lg-5">
            <div className="collage-narrative-box">
              <p className="collage-narrative-text">
                {t('Je suis étudiante en 5ᵉ année d’école d’ingénieur à Polytech Nancy, spécialisée en informatique et réseaux. J’ai réalisé plusieurs projets scolaires que je présente ici, et j’aime aussi concevoir et déployer mes propres systèmes, comme un serveur Plex entièrement containerisé sur mon Raspberry Pi (Linux, Docker, SSD, accès distant via Tailscale). En dehors des études, je fais de la natation en compétition depuis plus de 10 ans. Je m’entraîne six fois par semaine et j’ai participé aux championnats universitaires. Ces expériences ont renforcé ma discipline, ma constance et mon esprit d’équipe. J’aime aussi voyager, en famille comme entre amis.')}
              </p>
            </div>
          </div>
        </div>

        {/* Lower Collage Row: Inset artistic detail photos + Overlapping Curated Strategy Card */}
        <div className="row g-4 align-items-center position-relative pt-2 pt-lg-4">
          {/* Detail Inset Photo 1 */}
          <div className="col-6 col-md-4 col-lg-3 offset-lg-2">
            <div className="collage-photo-frame collage-frame-detail">
              <img
                src="/julie2.jpg"
                alt="Julie Zilberberg portrait"
                className="collage-img"
              />
            </div>
          </div>

          {/* {/* Detail Inset Photo 2 }
          <div className="col-6 col-md-3 col-lg-2">
            <div className="collage-photo-frame collage-frame-detail">
              <img
                src="/natation3.jpg"
                alt="Competitive swimming detail"
                className="collage-img"
              />
            </div>
          </div> */}

          {/* Floating overlapping Ivory Card: CURATED STRATEGY */}
          <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
            <div className="curated-strategy-card shadow-sm">
              <h3 className="strategy-card-title">
                {t('about.strategy_title')}
              </h3>
              <p className="strategy-card-quote">
                {t('about.strategy_quote')}
              </p>
              <div className="strategy-card-cta d-flex flex-column gap-2">
                <span className="small text-muted mb-1">📍 {t('about.location')}</span>
                <a
                  href="/Resume_Zilberberg_Julie.pdf"
                  download
                  className="strategy-link"
                >
                  {t('about.strategy_cta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
