import React from 'react'
import { useI18n } from '../App'

export default function Skills() {
  const { t } = useI18n()

  const skillCategories = [
    {
      number: '01 Langages & Web',
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'Spring Boot', 'Thymeleaf', 'Qt', 'LaTeX']
    },
    {
      number: '02 Réseaux, Systèmes & Outils',
      skills: ['UNIX / Linux', 'TCP / UDP', 'IoT / LoRaWAN', 'Wireshark', 'Packet Tracer', 'Docker', 'Git', 'MySQL', 'MS Azure']
    },
    {
      number: '03 Cybersécurité & Gouvernance (GRC)',
      skills: ['EBIOS RM', 'ANSSI Guidelines', 'Risk Assessment', 'Industrial IT', 'Security Gap Analysis', 'Compliance']
    },
    {
      number: '04 Langues',
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
        </div>

        {/* 4-Column Editorial Grid */}
        <div className="row g-4 g-lg-4 pt-3">
          {skillCategories.map((cat) => (
            <div key={cat.number} className="col-12 col-md-6 col-lg-3">
              <div className="editorial-service-column h-100">
                <span className="service-number">{cat.number}</span>
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
