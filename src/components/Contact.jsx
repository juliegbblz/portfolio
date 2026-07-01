import React from 'react'
import { useI18n } from '../App'

export default function Contact(){
  const { t } = useI18n()
  return (
    <section id="contact" className="py-5 section-soft">
      <div className="container">
        <div className="text-center mb-5">
          <p className="eyebrow mb-2">{t('contact.eyebrow')}</p>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          <div className="social-item">
            <a className="social-link" href="mailto:zilberbergjulie@gmail.com" aria-label="Send email to Julie Zilberberg">
              <div className="social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-7.4 4.64a1 1 0 0 1-1.2 0L4 8.2V6l8 5 8-5v2.2z"/></svg>
              </div>
            </a>
            <div className="social-label">Email</div>
            <a href="mailto:zilberbergjulie@gmail.com" className="social-count social-link-text"></a>
          </div>
          <div className="social-item">
            <a className="social-link" href="https://github.com/juliegbblz" target="_blank" rel="noreferrer noopener" aria-label="GitHub profile">
              <div className="social-icon social-icon-github" aria-hidden="true">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.4c.58.1.8-.25.8-.56v-2c-3.25.71-3.93-1.38-3.93-1.38-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.76 1.28 3.43.98.1-.77.41-1.28.74-1.57-2.6-.3-5.34-1.3-5.34-5.76 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.18 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.83 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.66.23 2.88.12 3.18.75.81 1.2 1.84 1.2 3.11 0 4.47-2.75 5.45-5.36 5.74.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>
              </div>
            </a>
            <div className="social-label">GitHub</div>
            <a href="https://github.com/juliegbblz" className="social-count social-link-text" target="_blank" rel="noreferrer noopener"></a>
          </div>
          <div className="social-item">
            <a className="social-link" href="https://www.linkedin.com/in/julie-zilberberg-41ba8926a/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn profile">
              <div className="social-icon" aria-hidden="true">in</div>
            </a>
            <div className="social-label">LinkedIn</div>
            <a href="https://www.linkedin.com/in/julie-zilberberg-41ba8926a/" className="social-count social-link-text" target="_blank" rel="noreferrer noopener"></a>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-5 pt-4">
          <a href="#home" className="btn btn-chic-outline fw-semibold">{t('footer.top')}</a>
        </div>
      </div>
    </section>
  )
}
