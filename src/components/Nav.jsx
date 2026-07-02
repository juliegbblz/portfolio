import React from 'react'
import { useI18n } from '../App'

export default function Nav(){
  const { t, lang, setLang } = useI18n()
  return (
    <>
      <nav className="navbar navbar-light sticky-top portfolio-nav">
        <div className="container">
          <a className="navbar-brand brand-mark" href="#home">Julie Zilberberg</a>

          {/* Desktop nav (visible on lg+) */}
          <div className="d-none d-lg-block ms-auto">
            <ul className="navbar-nav d-flex flex-row gap-3 align-items-center">
              <li className="nav-item"><a className="nav-link" href="#about">{t('nav.about')}</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">{t('nav.skills')}</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">{t('nav.projects')}</a></li>
              <li className="nav-item"><a className="nav-link" href="#passion">{t('nav.passion')}</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">{t('nav.contact')}</a></li>
              <li className="nav-item">
                <div className="lang-toggle ms-3">
                  <button className={`btn btn-sm lang-btn ${lang==='en'?'active':''} me-2`} data-lang="en" onClick={() => { setLang('en'); localStorage.setItem('site-lang','en') }}>EN</button>
                  <button className={`btn btn-sm lang-btn ${lang==='fr'?'active':''}`} data-lang="fr" onClick={() => { setLang('fr'); localStorage.setItem('site-lang','fr') }}>FR</button>
                </div>
              </li>
            </ul>
          </div>

          {/* Mobile toggler */}
          <div className="d-lg-none ms-auto">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav" aria-controls="offcanvasNav" aria-label="Open menu">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Offcanvas menu for mobile (right side) placed outside the <nav> to avoid clipping from backdrop-filter */}
      <div className="offcanvas offcanvas-end" data-bs-backdrop="true" data-bs-scroll="false" tabIndex="-1" id="offcanvasNav" aria-labelledby="offcanvasNavLabel" style={{width: '320px', backgroundColor: 'var(--surface)'}}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavLabel">Menu</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link text-dark fs-5" href="#about" data-bs-dismiss="offcanvas">{t('nav.about')}</a></li>
            <li className="nav-item"><a className="nav-link text-dark fs-5" href="#skills" data-bs-dismiss="offcanvas">{t('nav.skills')}</a></li>
            <li className="nav-item"><a className="nav-link text-dark fs-5" href="#projects" data-bs-dismiss="offcanvas">{t('nav.projects')}</a></li>
            <li className="nav-item"><a className="nav-link text-dark fs-5" href="#passion" data-bs-dismiss="offcanvas">{t('nav.passion')}</a></li>
            <li className="nav-item"><a className="nav-link text-dark fs-5" href="#contact" data-bs-dismiss="offcanvas">{t('nav.contact')}</a></li>
          </ul>

          <div className="mt-4 lang-toggle">
            <button className={`btn btn-sm lang-btn ${lang==='en'?'active':''} me-2`} data-lang="en" onClick={() => { setLang('en'); localStorage.setItem('site-lang','en') }}>EN</button>
            <button className={`btn btn-sm lang-btn ${lang==='fr'?'active':''}`} data-lang="fr" onClick={() => { setLang('fr'); localStorage.setItem('site-lang','fr') }}>FR</button>
          </div>
        </div>
      </div>
    </>
  )
}
