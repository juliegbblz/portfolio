import React from 'react'
import { useI18n } from '../App'

export default function Skills(){
  const { t } = useI18n()
  return (
    <section id="skills" className="py-5 section-soft">
      <div className="container">
        <div className="text-center mb-4">
          <p className="eyebrow mb-2">{t('skills.eyebrow')}</p>
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="text-secondary mb-0">{t('skills.desc')}</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card portfolio-card service-card h-100 p-4 chic-card">
              <h3 className="h5">Frontend</h3>
              <p className="text-secondary mb-0">HTML, CSS, JavaScript, Thymeleaf, and responsive interfaces.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card portfolio-card service-card h-100 p-4 chic-card">
              <h3 className="h5">Backend</h3>
              <p className="text-secondary mb-0">Java, Spring Boot, Node.js, REST APIs, database persistence, and deployment.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card portfolio-card service-card h-100 p-4 chic-card">
              <h3 className="h5">Robotics / Systems</h3>
              <p className="text-secondary mb-0">C++, Qt, TCP/UDP communication, sensors, and embedded-style software work.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
