import React from 'react'
import { useI18n } from '../App'

export default function Nav(){
  const { t, lang, setLang } = useI18n()
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top portfolio-nav">
      <div className="container">
        <a className="navbar-brand brand-mark" href="#home">Julie Zilberberg</a>
        <div className="ms-2 lang-toggle" aria-hidden="true">
          <button className={`btn btn-sm lang-btn ${lang==='en'?'active':''}`} data-lang="en" onClick={() => { setLang('en'); localStorage.setItem('site-lang','en') }}>EN</button>
          <button className={`btn btn-sm lang-btn ${lang==='fr'?'active':''}`} data-lang="fr" onClick={() => { setLang('fr'); localStorage.setItem('site-lang','fr') }}>FR</button>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-2">
            <li className="nav-item"><a className="nav-link" href="#about">{t('nav.about')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">{t('nav.skills')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">{t('nav.projects')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#passion">{t('nav.passion')}</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">{t('nav.contact')}</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
