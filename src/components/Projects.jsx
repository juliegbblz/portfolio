import React from 'react'
import { useI18n } from '../App'

export default function Projects(){
  const { t } = useI18n()
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="text-secondary mb-0">{t('projects.desc')}</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card portfolio-card project-card h-100 chic-card">
              <img src="/chessmate.png" alt={`Chessmate ${t('projects.title')}`} className="project-image" />
              <div className="card-body p-4">
                <h3 className="h5">Chessmate</h3>
                <p className="text-secondary">{t('projects.chessmate.desc')}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card portfolio-card project-card h-100 chic-card">
              <img src="/wifibot.png" alt={`Wifibot ${t('projects.title')}`} className="project-image" />
              <div className="card-body p-4">
                <h3 className="h5">Wifibot</h3>
                <p className="text-secondary">{t('projects.wifibot.desc')}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card portfolio-card project-card h-100 chic-card">
              <img src="/quiz.png" alt={`EDF Quiz ${t('projects.title')}`} className="project-image" />
              <div className="card-body p-4">
                <h3 className="h5">EDF Quiz</h3>
                <p className="text-secondary">{t('projects.quiz.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
