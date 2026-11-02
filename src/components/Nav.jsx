import React from 'react'
import { useI18n } from '../App'

const sections = ['about', 'experience', 'projects', 'skills', 'passion', 'contact']

export default function Nav() {
  const { t, lang, setLang } = useI18n()

  const toggleLang = (target) => {
    setLang(target)
    localStorage.setItem('site-lang', target)
  }

  // Ferme le menu mobile puis fait défiler jusqu'à la section.
  // (data-bs-dismiss sur un <a> bloque la navigation : Bootstrap fait preventDefault)
  const goToSection = (e, id) => {
    e.preventDefault()
    const drawer = document.getElementById('offcanvasNav')
    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      history.replaceState(null, '', `#${id}`)
    }
    const instance = window.bootstrap?.Offcanvas.getInstance(drawer)
    if (instance) {
      drawer.addEventListener('hidden.bs.offcanvas', scroll, { once: true })
      instance.hide()
    } else {
      scroll()
    }
  }

  return (
    <>
      <header className="portfolio-header sticky-top">
        <div className="container-fluid px-4 px-lg-5">
          <div className="d-flex align-items-center justify-content-between py-3">
            {/* Brand / Logo */}
            <a className="brand-editorial" href="#home">
              {t('brand')}
            </a>

            {/* Desktop Navigation */}
            <div className="d-none d-lg-flex align-items-center gap-4 gap-xl-5">
              <nav className="d-flex align-items-center gap-4 gap-xl-5">
                <a className="editorial-nav-link" href="#about">{t('nav.about')}</a>
                <a className="editorial-nav-link" href="#experience">{t('nav.experience')}</a>
                <a className="editorial-nav-link" href="#projects">{t('nav.projects')}</a>
                <a className="editorial-nav-link" href="#skills">{t('nav.skills')}</a>
                <a className="editorial-nav-link" href="#passion">{t('nav.passion')}</a>
                <a className="editorial-nav-link" href="#contact">{t('nav.contact')}</a>
              </nav>

              <div className="editorial-lang-toggle ms-2">
                <button
                  type="button"
                  className={`lang-link-btn ${lang === 'en' ? 'active' : ''}`}
                  onClick={() => toggleLang('en')}
                  aria-label="English"
                >
                  EN
                </button>
                <span className="lang-sep">/</span>
                <button
                  type="button"
                  className={`lang-link-btn ${lang === 'fr' ? 'active' : ''}`}
                  onClick={() => toggleLang('fr')}
                  aria-label="Français"
                >
                  FR
                </button>
              </div>
            </div>

            {/* Mobile hamburger button */}
            <div className="d-lg-none d-flex align-items-center gap-3">
              <div className="editorial-lang-toggle me-2">
                <button
                  type="button"
                  className={`lang-link-btn ${lang === 'en' ? 'active' : ''}`}
                  onClick={() => toggleLang('en')}
                >
                  EN
                </button>
                <span className="lang-sep">/</span>
                <button
                  type="button"
                  className={`lang-link-btn ${lang === 'fr' ? 'active' : ''}`}
                  onClick={() => toggleLang('fr')}
                >
                  FR
                </button>
              </div>
              <button
                className="editorial-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNav"
                aria-controls="offcanvasNav"
                aria-label="Toggle navigation menu"
              >
                <span className="toggler-bar"></span>
                <span className="toggler-bar"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Offcanvas Drawer */}
      <div
        className="offcanvas offcanvas-end editorial-offcanvas"
        tabIndex="-1"
        id="offcanvasNav"
        aria-labelledby="offcanvasNavLabel"
      >
        <div className="offcanvas-header px-4 pt-4 pb-2">
          <span className="brand-editorial fs-6" id="offcanvasNavLabel">
            {t('brand')}
          </span>
          <button
            type="button"
            className="btn-close text-reset shadow-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body px-4 py-4 d-flex flex-column justify-content-between">
          <ul className="navbar-nav gap-3">
            {sections.map((id) => (
              <li className="nav-item" key={id}>
                <a
                  className="editorial-nav-link fs-5"
                  href={`#${id}`}
                  onClick={(e) => goToSection(e, id)}
                >
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-top">
            <a
              href="/Resume_Zilberberg_Julie.pdf"
              className="editorial-btn editorial-btn-outline w-100 text-center"
              download
            >
              {t('contact.cta_cv')}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
