import React, { useState, createContext, useContext } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Passion from './components/Passion'
import Contact from './components/Contact'

const translations = {
  en: {
    'brand': 'JULIE ZILBERBERG',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.passion': 'Discipline',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Welcome to my portfolio',
    'hero.sub': 'Julie Zilberberg — Engineering Student at Polytech Nancy (Computer Science, Automation & Networks). Seeking a 6-month end-of-studies internship starting mid-February 2027.',
    'hero.cta': 'EXPLORE PROJECTS',
    'hero.cta_cv': 'DOWNLOAD RESUME',

    // About
    'about.heading_line1': 'DESIGNING',
    'about.heading_line2': 'INTENTIONAL',
    'about.heading_line3': 'SYSTEMS',
    'about.p1': 'I am a 5th-year engineering student at Polytech Nancy specializing in computer science and networks. I have completed several school projects showcased here, and I also enjoy designing and deploying my own systems, such as a fully containerized Plex server on my Raspberry Pi (Linux, Docker, SSD, remote access via Tailscale).',
    'about.p2': 'Outside of academics, I have been a competitive swimmer for over 10 years, training six times a week and competing in university championships. These experiences have strengthened my discipline, consistency, and teamwork. I also love traveling with family and friends.',
    'about.strategy_title': 'INTERNSHIP SEARCH',
    'about.strategy_quote': '“Currently seeking a 6-month end-of-studies internship starting mid-February 2027 in software engineering, networks, or cybersecurity.”',
    'about.strategy_cta': 'DOWNLOAD RESUME (PDF)',
    'about.location': 'Based in Lyon & Nancy, France',

    // Experience & Education
    'exp.eyebrow': 'CAREER & ACADEMICS',
    'exp.title': 'PROFESSIONAL EXPERIENCE',
    'exp.sub': 'Industrial IT, cybersecurity governance, and academic background.',
    'exp.iqanto.role': 'Assistant Engineer Intern',
    'exp.iqanto.company': 'iQanto — Valence / Lyon, France',
    'exp.iqanto.date': 'June 2026 – August 2026',
    'exp.iqanto.desc': 'Requirements analysis and documentation review for major industrial IT & cybersecurity projects (Chronopost, SNCF Gares & Connexions, TotalEnergies). Performed cybersecurity risk assessments of an industrial IoT/LoRaWAN solution following ANSSI methodologies (EBIOS RM). Analyzed security requirements, identified compliance gaps, proposed corrective measures, and presented findings to executive stakeholders.',
    'exp.polytech.role': 'Master’s Degree in Engineering (IA2R / SIR)',
    'exp.polytech.company': 'Polytech Nancy — Nancy, France',
    'exp.polytech.date': '2022 – Present (Graduation: Sept 2027)',
    'exp.polytech.desc': 'Specialization in Computer Science, Automation, Robotics, and Networks (IA2R). Specialized track in Information Systems and Networks (SIR): distributed architectures, systems programming, network protocols, network security, and database systems.',
    'exp.avec.role': 'Academic Support Volunteer',
    'exp.avec.company': 'AVEC Association — Nancy, France',
    'exp.avec.date': '2024 – 2025',
    'exp.avec.desc': 'Provided weekly homework help, pedagogical guidance, and academic mentoring to children from underprivileged neighborhoods.',

    // Projects
    'projects.section_title': 'SELECTED PROJECTS',
    'projects.section_sub': 'Technical systems, low-level UNIX programming, full-stack web platforms, and robotics.',
    'projects.chessmate.title': 'Chessmate: Tactical Chess Puzzle Platform',
    'projects.chessmate.meta': 'Spring Boot • Lichess API • Full-Stack • GitLab',
    'projects.chessmate.date': '2026',
    'projects.chessmate.desc': 'Full-stack application with a Spring Boot REST API integrating Lichess to generate puzzles with FEN/PGN parsing and ranking. Dynamic frontend built with Thymeleaf and JavaScript (chessboard, scoring system, session management), deployed on chessmateul.fr.',
    'projects.minishell.title': 'Minishell: POSIX UNIX Command Interpreter',
    'projects.minishell.meta': 'C • UNIX Systems • POSIX • Processes & Pipes',
    'projects.minishell.date': '2026',
    'projects.minishell.desc': 'Interactive command interpreter in C compliant with POSIX standards. Managed process creation (fork/exec), pipelines (|), standard I/O redirections (<, >, >>), signal handling (Ctrl-C SIGINT), and built-in commands (cd, exit).',
    'projects.wifibot.title': 'Wifibot: Robotic Teleoperation GUI',
    'projects.wifibot.meta': 'C++ • Qt • TCP/UDP Telemetry • Embedded Sensors',
    'projects.wifibot.date': '2025',
    'projects.wifibot.desc': 'Real-time robot control GUI in C++/Qt communicating with a mobile WiFi robot via TCP/UDP. Integrates infrared telemetry distance sensors, motor speed control loops, and encoder feedback.',
    'projects.cyber.title': 'IoT / LoRaWAN Cybersecurity Risk Audit',
    'projects.cyber.meta': 'EBIOS RM • ANSSI Compliance • Industrial IoT',
    'projects.cyber.date': '2026',
    'projects.cyber.desc': 'Cybersecurity compliance gap analysis and threat modeling for industrial IoT sensor networks according to French National Cybersecurity Agency (ANSSI) guidelines and EBIOS RM risk methodology.',

    // Skills
    'skills.eyebrow': 'TECHNICAL EXPERTISE',
    'skills.section_title': 'SKILLS & TOOLBOX',
    'skills.desc': 'Languages, systems, networking, platforms, and cybersecurity governance from the CV.',
    'skills.col1_title': '01 / Programming Languages & Web',
    'skills.col1_desc': 'C, C++, Java, Python, JavaScript, HTML5/CSS3, Thymeleaf, Spring Boot, Qt, LaTeX.',
    'skills.col2_title': '02 / Networks, Systems & Cloud',
    'skills.col2_desc': 'UNIX/Linux, TCP/UDP, IoT / LoRaWAN, Wireshark, Cisco Packet Tracer, Docker, Git, MySQL, MS Azure.',
    'skills.col3_title': '03 / Cybersecurity & Governance (GRC)',
    'skills.col3_desc': 'Risk Analysis (EBIOS RM), ANSSI compliance, security requirements analysis, industrial IT audit.',
    'skills.col4_title': '04 / Languages & Communication',
    'skills.col4_desc': 'French (Native), English (C1 Level — TOEIC certified), Spanish (B1 Level).',

    // Extracurricular / Passion
    'passion.section_title': 'ATHLETIC DISCIPLINE',
    'passion.quote': '“Regular competitive swimming practice for 14 years. Training six times a week has honed my resilience, consistency, and focus under intense pressure. Competing in the French University Championships strengthened my teamwork, synchronicity, and pursuit of technical perfection.”',
    'passion.author': 'Julie Zilberberg',
    'passion.author_role': '14 Years Competitive Swimmer & French University Championships Competitor',

    // Contact
    'contact.eyebrow': 'GET IN TOUCH',
    'contact.title': 'START A CONVERSATION',
    'contact.sub': 'Seeking a 6-month end-of-studies internship starting mid-February 2027 in software engineering, networks, or cybersecurity. Based in Lyon & Nancy, France.',
    'contact.cta_cv': 'DOWNLOAD RESUME (PDF)',
    'footer.back_top': 'Back to Top'
  },

  fr: {
    'brand': 'JULIE ZILBERBERG',
    'nav.about': 'À propos',
    'nav.experience': 'Parcours',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.passion': 'Discipline',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Bienvenue sur mon portfolio',
    'hero.sub': "Je m'appelle Julie Zilberberg : Élève-ingénieure à Polytech Nancy en Informatique, Automatique & Réseaux. En recherche d'un stage de fin d'études de 6 mois à partir de mi-février 2027.",
    'hero.cta': 'VOIR LES PROJETS',
    'hero.cta_cv': 'TÉLÉCHARGER LE CV',

    // About
    'about.heading_line1': 'À PROPOS',
    'about.heading_line2': 'DE',
    'about.heading_line3': 'MOI',
    'about.strategy_quote': 'Je suis étudiante en 5ᵉ année d’école d’ingénieur à Polytech Nancy, spécialisée en informatique et réseaux. J’ai réalisé plusieurs projets scolaires que je présente ici, et j’aime aussi concevoir et déployer mes propres systèmes, comme un serveur Plex entièrement containerisé sur mon Raspberry Pi (Linux, Docker, SSD, accès distant via Tailscale). En dehors des études, je fais de la natation en compétition depuis plus de 10 ans. Je m’entraîne six fois par semaine et j’ai participé aux championnats universitaires. Ces expériences ont renforcé ma discipline, ma constance et mon esprit d’équipe. J’aime aussi voyager, en famille comme entre amis.',
    

    // Experience & Education
    'exp.eyebrow': 'EXPÉRIENCE & FORMATION',
    'exp.title': 'PARCOURS PROFESSIONNEL',
    'exp.sub': 'Informatique industrielle, cybersécurité, engagement associatif et formation Polytech.',
    'exp.iqanto.role': 'Stagiaire Assistante Ingénieur',
    'exp.iqanto.company': 'iQanto — Valence / Lyon, France',
    'exp.iqanto.date': 'Juin 2026 – Août 2026',
    'exp.iqanto.desc': 'Analyse des exigences et revue documentaire pour des projets informatiques industriels et cybersécurité (Chronopost, SNCF Gares & Connexions, TotalEnergies). Évaluation des risques cybersécurité d’une solution industrielle IoT/LoRaWAN selon les méthodologies ANSSI (EBIOS RM). Analyse des exigences de sécurité, identification des écarts de conformité, proposition de mesures correctives et restitution aux parties prenantes.',
    'exp.polytech.role': "Diplôme d'Ingénieur (IA2R / SIR)",
    'exp.polytech.company': 'Polytech Nancy — Nancy, France',
    'exp.polytech.date': '2022 – Présent (Diplôme : Septembre 2027)',
    'exp.polytech.desc': "Spécialité Informatique, Automatique, Robotique et Réseaux (IA2R). Parcours Systèmes d'Information et Réseaux (SIR) : systèmes distribués, programmation système UNIX/POSIX, protocoles de communication, sécurité réseau et bases de données.",
    'exp.avec.role': 'Bénévole en soutien scolaire',
    'exp.avec.company': 'AVEC Association — Nancy, France',
    'exp.avec.date': '2024 – 2025',
    'exp.avec.desc': 'Aide aux devoirs et accompagnement scolaire hebdomadaire auprès d’enfants issus de quartiers prioritaires.',

    // Projects
    'projects.section_title': 'PROJETS TECHNIQUES',
    'projects.section_sub': 'Programmation système UNIX, architecture web full-stack, robotique et cybersécurité.',
    'projects.chessmate.title': 'Chessmate : Plateforme d’énigmes d’échecs',
    'projects.chessmate.meta': 'Spring Boot • API Lichess • Full-Stack • GitLab',
    'projects.chessmate.date': '2026',
    'projects.chessmate.desc': 'Application full-stack avec API REST Spring Boot intégrant Lichess pour générer des énigmes d’échecs (parsing FEN/PGN, thèmes/classement). Frontend interactif Thymeleaf et JavaScript (échiquier dynamique, système de score, gestion de session). Déployé sur chessmateul.fr.',
    'projects.minishell.title': 'Minishell : Interpréteur de commandes UNIX POSIX',
    'projects.minishell.meta': 'C • Systèmes UNIX • POSIX • Processus & Pipes',
    'projects.minishell.date': '2026',
    'projects.minishell.desc': 'Interpréteur de commandes interactif en C conforme aux standards POSIX. Gestion de processus (fork/exec), pipelines (|), redirections entrées/sorties (<, >, >>), signaux (Ctrl-C SIGINT) et commandes internes intégrées (cd, exit).',
    'projects.wifibot.title': 'Wifibot : Interface de téléopération robotique',
    'projects.wifibot.meta': 'C++ • Qt • Télémétrie TCP/UDP • Capteurs',
    'projects.wifibot.date': '2025',
    'projects.wifibot.desc': 'Interface graphique en C++/Qt de contrôle d’un robot WiFi via communications réseau TCP/UDP temps réel. Intégration de capteurs de télémétrie infrarouges, retour encodeurs et asservissement moteur.',
    'projects.cyber.title': 'Audit & Analyse de Risques Cybersécurité IoT',
    'projects.cyber.meta': 'EBIOS RM • Recommandations ANSSI • IoT Industriel',
    'projects.cyber.date': '2026',
    'projects.cyber.desc': 'Analyse des écarts de conformité, modélisation des menaces et recommandations de sécurité pour réseau de capteurs industriels IoT/LoRaWAN selon le référentiel ANSSI et la méthode EBIOS RM.',

    // Skills
    'skills.eyebrow': 'SKILLS',
    'skills.section_title': 'COMPÉTENCES & OUTILS',
    'skills.col1_title': '01 / ',
    'skills.col1_desc': 'C, C++, Java, Python, JavaScript, HTML5/CSS3, Thymeleaf, Spring Boot, Qt, LaTeX.',
    'skills.col2_title': '02 / ',
    'skills.col2_desc': 'UNIX/Linux, TCP/UDP, IoT / LoRaWAN, Wireshark, Cisco Packet Tracer, Docker, Git, MySQL, MS Azure.',
    'skills.col3_title': '03 / ',
    'skills.col3_desc': 'Analyse de risques (EBIOS RM), conformité ANSSI, audit des exigences de sécurité, reporting technique.',
    'skills.col4_title': '04 / ',
    'skills.col4_desc': 'Français (Langue maternelle), Anglais (Niveau C1 — certifié TOEIC), Espagnol (Niveau B1).',

    // Extracurricular / Passion
    'passion.section_title': 'DISCIPLINE & SPORT',
    'passion.quote': 'Je pratique régulièrement de la natation en compétition depuis 14 ans. Ces six (ou plus) entraînements par semaine ont façonné ma rigueur, ma résilience et ma capacité à performer sous pression. Ma participation aux Championnats de France Universitaires a renforcé mon esprit d’équipe et ma recherche permanente de précision technique. ',
    'passion.author': 'Julie Zilberberg',
    'passion.author_role': 'Nageuse en compétition depuis 14 ans & Participante aux Championnats de France Universitaires',

    // Contact
    'contact.title': 'ME CONTACTER',
    'contact.sub': "À la recherche d'un stage de fin d'études de 6 mois à partir de mi-février 2027 en ingénierie logicielle, réseaux ou cybersécurité.",
    'contact.cta_cv': 'TÉLÉCHARGER LE CV (PDF)',
    'footer.back_top': 'Haut de page'
  }
}

const I18nContext = createContext()

export function useI18n() {
  return useContext(I18nContext)
}

export default function App() {
  const [lang, setLang] = useState(
    localStorage.getItem('site-lang') ||
      (navigator.language && navigator.language.startsWith('fr') ? 'fr' : 'en')
  )
  const t = (key) => translations[lang]?.[key] || key
  const value = { lang, setLang, t }

  return (
    <I18nContext.Provider value={value}>
      <div className="editorial-page-wrapper">
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Passion />
          <Contact />
        </main>
      </div>
    </I18nContext.Provider>
  )
}
