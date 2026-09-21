import React, { useState } from 'react'
import { useI18n } from '../App'

export default function Projects() {
  const { t } = useI18n()
  const [activeDot, setActiveDot] = useState(0)

  const projectItems = [
    {
      id: 'chessmate',
      titleKey: 'projects.chessmate.title',
      metaKey: 'projects.chessmate.meta',
      dateKey: 'projects.chessmate.date',
      descKey: 'projects.chessmate.desc',
      imgSrc: '/chessmate.png',
      link: 'https://github.com/juliegbblz'
    },
    {
      id: 'minishell',
      titleKey: 'projects.minishell.title',
      metaKey: 'projects.minishell.meta',
      dateKey: 'projects.minishell.date',
      descKey: 'projects.minishell.desc',
      imgSrc: '/noir.jpeg',
      link: 'https://github.com/juliegbblz'
    },
    {
      id: 'wifibot',
      titleKey: 'projects.wifibot.title',
      metaKey: 'projects.wifibot.meta',
      dateKey: 'projects.wifibot.date',
      descKey: 'projects.wifibot.desc',
      imgSrc: '/wifibot.png',
      link: 'https://github.com/juliegbblz'
    },
    {
      id: 'cyber',
      titleKey: 'projects.cyber.title',
      metaKey: 'projects.cyber.meta',
      dateKey: 'projects.cyber.date',
      descKey: 'projects.cyber.desc',
      imgSrc: '/quiz.png',
      link: 'https://github.com/juliegbblz'
    }
  ]

  return (
    <section id="projects" className="editorial-projects-section py-5">
      <div className="container py-4">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <p className="editorial-eyebrow mb-2">PORTFOLIO</p>
          <h2 className="editorial-section-title">
            {t('projects.section_title')}
          </h2>
          <p className="editorial-sub-text mx-auto">
            {t('projects.section_sub')}
          </p>
        </div>

        {/* 4-Item Horizontal Gallery */}
        <div className="row g-4 justify-content-center">
          {projectItems.map((project, idx) => (
            <div key={project.id} className="col-12 col-sm-6 col-lg-3">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="editorial-card-anchor"
                onClick={() => setActiveDot(idx % 3)}
              >
                <article className="editorial-project-card">
                  {/* Tall Aspect Photo Container */}
                  <div className="project-card-media">
                    <img
                      src={project.imgSrc}
                      alt={t(project.titleKey)}
                      className="project-card-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Editorial Info */}
                  <div className="project-card-details">
                    <h3 className="project-card-heading">
                      {t(project.titleKey)}
                    </h3>
                    <p className="project-card-desc">
                      {t(project.descKey)}
                    </p>
                    <div className="project-card-footer">
                      <span className="project-card-date">
                        {t(project.dateKey)}
                      </span>
                      <span className="project-card-tag">
                        {t(project.metaKey).split('•')[0].trim()}
                      </span>
                    </div>
                  </div>
                </article>
              </a>
            </div>
          ))}
        </div>

        {/* Pagination Dots beneath */}
        <div className="editorial-carousel-dots text-center mt-5 pt-2">
          {[0, 1, 2].map((dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              className={`editorial-dot ${activeDot === dotIndex ? 'active' : ''}`}
              onClick={() => setActiveDot(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}
