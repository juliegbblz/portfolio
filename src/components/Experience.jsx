import React from 'react'
import { useI18n } from '../App'

export default function Experience() {
  const { t } = useI18n()

  const experiences = [
    {
      id: 'iqanto',
      roleKey: 'exp.iqanto.role',
      companyKey: 'exp.iqanto.company',
      dateKey: 'exp.iqanto.date',
      descKey: 'exp.iqanto.desc',
      clients: ['Chronopost', 'SNCF Gares & Connexions', 'TotalEnergies'],
      tags: ['ANSSI', 'EBIOS RM', 'IoT / LoRaWAN', 'Cybersecurity Audit']
    },
    {
      id: 'polytech',
      roleKey: 'exp.polytech.role',
      companyKey: 'exp.polytech.company',
      dateKey: 'exp.polytech.date',
      descKey: 'exp.polytech.desc',
      tags: ['IA2R', 'SIR Track', 'Distributed Systems', 'UNIX / C', 'Networks']
    },
    {
      id: 'avec',
      roleKey: 'exp.avec.role',
      companyKey: 'exp.avec.company',
      dateKey: 'exp.avec.date',
      descKey: 'exp.avec.desc',
      tags: ['Academic Support', 'Volunteering', 'Mentoring', 'Pedagogy']
    }
  ]

  return (
    <section id="experience" className="editorial-experience-section py-5">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <p className="editorial-eyebrow mb-2">{t('exp.eyebrow')}</p>
          <h2 className="editorial-section-title">{t('exp.title')}</h2>
          <p className="editorial-sub-text mx-auto">{t('exp.sub')}</p>
        </div>

        {/* Experience List */}
        <div className="row g-4 justify-content-center">
          {experiences.map((item) => (
            <div key={item.id} className="col-12 col-lg-4">
              <div className="editorial-experience-card h-100">
                <div className="exp-card-header">
                  <span className="exp-date">{t(item.dateKey)}</span>
                  <h3 className="exp-role">{t(item.roleKey)}</h3>
                  <p className="exp-company">{t(item.companyKey)}</p>
                </div>

                <div className="exp-card-body">
                  <p className="exp-desc">{t(item.descKey)}</p>

                  {item.clients && (
                    <div className="exp-clients mb-3">
                      <span className="exp-client-label">Projets clients :</span>
                      <div className="d-flex flex-wrap gap-1 mt-1">
                        {item.clients.map((client) => (
                          <span key={client} className="exp-client-badge">
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="exp-tags d-flex flex-wrap gap-1 mt-auto pt-3">
                    {item.tags.map((tag) => (
                      <span key={tag} className="service-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
