import React from 'react'
import { useI18n } from '../App'

export default function Skills() {
  const { t } = useI18n()

  const skillCategories = [
    {
      number: '01 Langages & Web',
      titleKey: 'skills.col1_title',
      descKey: 'skills.col1_desc',
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'Spring Boot', 'Thymeleaf', 'Qt', 'LaTeX']
    },
    {
      number: '02 Réseaux, Systèmes & Outils',
      titleKey: 'skills.col2_title',
      descKey: 'skills.col2_desc',
      skills: ['UNIX / Linux', 'TCP / UDP', 'IoT / LoRaWAN', 'Wireshark', 'Packet Tracer', 'Docker', 'Git', 'MySQL', 'MS Azure']
    },
    {
      number: '03 Cybersécurité & Gouvernance (GRC)',
      titleKey: 'skills.col3_title',
      descKey: 'skills.col3_desc',
      skills: ['EBIOS RM', 'ANSSI Guidelines', 'Risk Assessment', 'Industrial IT', 'Security Gap Analysis', 'Compliance']
    },
    {
      number: '04 Langues',
      titleKey: 'skills.col4_title',
      descKey: 'skills.col4_desc',
      skills: ['Français (Natif)', 'Anglais (C1 - TOEIC)', 'Espagnol (B1)', 'Rigueur & Méthode', 'Esprit d’équipe']
    }
  ]

  return (
    <section id="skills" className="editorial-services-section py-5">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <p className="editorial-eyebrow mb-2">{t('skills.eyebrow')}</p>
          <h2 className="editorial-section-title">{t('skills.section_title')}</h2>
          <p className="editorial-sub-text mx-auto">{t('skills.desc')}</p>
        </div>

        {/* 4-Column Editorial Grid */}
        <div className="row g-4 g-lg-4 pt-3">
          {skillCategories.map((cat) => (
            <div key={cat.number} className="col-12 col-md-6 col-lg-3">
              <div className="editorial-service-column h-100">
                <span className="service-number">{cat.number}</span>
                <h3 className="service-title">{t(cat.titleKey)}</h3>
                <p className="service-desc">{t(cat.descKey)}</p>
                <div className="service-tags mt-3">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="service-pill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
