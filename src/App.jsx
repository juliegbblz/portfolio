import React, { useState, createContext, useContext } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Passion from './components/Passion'
import Contact from './components/Contact'

const translations = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.passion': 'Passion',
    'nav.contact': 'Contact',
    'topline': 'Portfolio',
    'hero.eyebrow': 'Computer science student',
    'hero.lead': 'Polytech Nancy student in Computer Science, Automation, Robotics, and Networks.',
    'hero.cta_projects': 'View Projects',
    'hero.cta_contact': 'Contact',
    'about.title': 'ABOUT ME',
    'about.p1': "I\u2019m a fourth-year engineering student at Polytech Nancy specializing in computer science and networks. I have worked on several school projects, which are showcased here, and I also enjoy building personal systems, such as a fully containerized Plex server running on my Raspberry Pi with Linux, Docker, SSD storage, and remote access through Tailscale.",
    'about.p2': "Outside of academics, I\u2019ve been a competitive swimmer for over 10 years, training six times a week and competing in university championships, experiences that have strengthened my discipline, consistency, and teamwork. I also enjoy traveling with my family and friends.",
    'about.cv': 'Download CV',
    'skills.eyebrow': 'Technical profile',
    'skills.title': 'Skills & Focus',
    'skills.desc': 'A summary of the tools and strengths shown in the resume.',
    'projects.title': 'Featured Projects',
    'projects.desc': 'A summary of some of my recent school projects.',
    'projects.chessmate.desc': 'Full-stack chess puzzle platform with Spring Boot, Lichess integration, and a Thymeleaf/JS frontend.',
    'projects.wifibot.desc': 'C++/Qt robot control GUI with TCP/UDP communication, sensors, and motor control.',
    'projects.quiz.desc': 'Interactive web quiz built with JavaScript, HTML, CSS, and Node.js, deployed securely online.',
    'passion.eyebrow': 'My passion',
    'passion.title': 'Competitive swimming',
    'passion.desc': 'A part of my life that shaped my discipline, focus, and energy.',
    'passion.card.title': 'More than a sport',
    'passion.card.p1': 'Swimming has been one of my biggest passions for over 10 years. I train six times a week, and the routine has taught me consistency, resilience, and how to stay focused under pressure.',
    'passion.card.p2': 'I also took part in university championships, which made the experience even more motivating and rewarding.',
    'contact.eyebrow': 'Get in touch',
    'footer.top': 'Back to Top'
  },
  fr: {
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.passion': 'Passion',
    'nav.contact': 'Contact',
    'topline': 'Portfolio',
    'hero.eyebrow': "Étudiante en informatique",
    'hero.lead': "Étudiante à Polytech Nancy en informatique, automatique, robotique et réseaux.",
    'hero.cta_projects': 'Voir les projets',
    'hero.cta_contact': 'Me contacter',
    'about.title': 'À PROPOS',
    'about.p1': "Je suis étudiante en 4e année d'école d'ingénieur à Polytech Nancy, spécialisée en informatique et réseaux. J'ai réalisé plusieurs projets scolaires présentés ici, et j'aime aussi monter des systèmes personnels, comme un serveur Plex entièrement containerisé sur mon Raspberry Pi (Linux, Docker, SSD, accès distant via Tailscale).",
    'about.p2': "En dehors des études, je fais de la natation en compétition depuis plus de 10 ans, je m'entraîne six fois par semaine et j'aiparticipé aux championnats universitaires, ces expériences ont renforcé ma discipline, ma constance et mon esprit d'équipe. J'aime aussi voyager en famille et entre amis.",
    'about.cv': 'Télécharger CV',
    'skills.eyebrow': 'Profil technique',
    'skills.title': 'Compétences & Domaines',
    'skills.desc': 'Un résumé des outils et compétences présentés dans le CV.',
    'projects.title': 'Projets récents',
    'projects.desc': 'Un aperçu de certains de mes projets scolaires récents.',
    'projects.chessmate.desc': 'Plateforme d’énigmes d’échecs full-stack avec Spring Boot, intégration Lichess et interface Thymeleaf/JS.',
    'projects.wifibot.desc': 'Interface de pilotage robot en C++/Qt avec communication TCP/UDP, capteurs et contrôle moteur.',
    'projects.quiz.desc': 'Quiz web interactif développé en JavaScript, HTML, CSS et Node.js, puis déployé en ligne de manière sécurisée.',
    'passion.eyebrow': 'Ma passion',
    'passion.title': 'Natation en compétition',
    'passion.desc': 'Une part de ma vie.',
    'passion.card.title': 'Plus qu’un sport',
    'passion.card.p1': 'La natation est l’une de mes plus grandes passions depuis plus de 10 ans. Je m’entraîne six fois par semaine, et cette routine m’a appris la régularité, la résilience et à rester concentrée sous pression.',
    'passion.card.p2': 'J’ai aussi participé à plusieurs championnats de France universitaires, ce qui a rendu cette expérience encore plus motivante et enrichissante.',
    'contact.eyebrow': 'Contactez-moi',
    'footer.top': 'Retour en haut'
  }
}

const I18nContext = createContext()

export function useI18n() {
  return useContext(I18nContext)
}

export default function App(){
  const [lang, setLang] = useState(localStorage.getItem('site-lang') || (navigator.language && navigator.language.startsWith('fr') ? 'fr' : 'en'))
  const t = (key) => translations[lang][key] || key
  const value = { lang, setLang, t }

  return (
    <I18nContext.Provider value={value}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Passion />
        <Contact />
      </main>
    </I18nContext.Provider>
  )
}
