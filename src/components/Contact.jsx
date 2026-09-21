import React from 'react'
import { useI18n } from '../App'

export default function Contact() {
  const { t } = useI18n()

  return (
    <footer id="contact" className="editorial-footer-section pt-5 pb-4">
      <div className="container py-4">
        {/* Contact Banner / Callout */}
        <div className="editorial-contact-box text-center py-5 px-3">
          <p className="editorial-eyebrow mb-2">{t('contact.eyebrow')}</p>
          <h2 className="editorial-section-title mb-3">{t('contact.title')}</h2>
          <p className="editorial-sub-text mb-4 mx-auto">{t('contact.sub')}</p>

          <div className="mb-4">
            <a
              href="mailto:zilberbergjulie@gmail.com"
              className="editorial-big-email"
            >
              zilberbergjulie@gmail.com
            </a>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <a
              href="/Resume_Zilberberg_Julie.pdf"
              download
              className="editorial-btn editorial-btn-solid"
            >
              {t('contact.cta_cv')}
            </a>
            <a
              href="https://github.com/juliegbblz"
              target="_blank"
              rel="noreferrer noopener"
              className="editorial-btn editorial-btn-outline"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/julie-zilberberg-41ba8926a/"
              target="_blank"
              rel="noreferrer noopener"
              className="editorial-btn editorial-btn-outline"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="editorial-footer-bottom mt-5 pt-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 border-top">
          <div className="footer-brand-copy">
            <span className="brand-editorial fs-6">JULIE ZILBERBERG</span>
            <span className="ms-3 text-muted small">
              © {new Date().getFullYear()} — Computer Science & Software Engineering
            </span>
          </div>

          <div className="footer-actions">
            <a href="#home" className="editorial-back-top">
              {t('footer.back_top')} ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
