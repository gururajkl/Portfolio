import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { animate, motion, useReducedMotion } from 'motion/react'
import { ArrowDown, ArrowUpRight, AtSign, Code2, Download, FolderOpen, GraduationCap, User } from 'lucide-react'
import { education, personalProjects, profile, projects, socialLinks, stackGroups } from './data/portfolio'
import './App.css'
import './Resume.css'
import './Social.css'
import './PersonalProjects.css'
import './DarkTheme.css'
import './MobileDock.css'
import './NameUnderline.css'

const navigation = [
  { id: 'about', label: 'About', icon: User },
  { id: 'stack', label: 'Stack', icon: Code2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'contact', label: 'Contact', icon: AtSign },
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const reduceMotion = useReducedMotion()
  const scrollAnimation = useRef<ReturnType<typeof animate> | null>(null)
  const [firstName, ...remainingName] = profile.name.split(' ')

  useEffect(() => {
    const sections = ['home', ...navigation.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-30% 0px -60%' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 54, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.04 },
    transition: reduceMotion
      ? { duration: 0 }
      : { type: 'spring' as const, stiffness: 105, damping: 14, mass: 0.8 },
  }

  function scrollToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault()
    const section = document.getElementById(id)
    if (!section) return

    scrollAnimation.current?.stop()
    const offset = window.innerWidth <= 900 ? 96 : 76
    let sectionTop = 0
    let offsetElement: HTMLElement | null = section
    while (offsetElement) {
      sectionTop += offsetElement.offsetTop
      offsetElement = offsetElement.offsetParent as HTMLElement | null
    }
    const target = Math.max(
      0,
      Math.min(
        sectionTop - offset,
        document.documentElement.scrollHeight - window.innerHeight,
      ),
    )
    window.history.replaceState(null, '', `#${id}`)

    if (reduceMotion) {
      window.scrollTo({ top: target })
      return
    }

    const root = document.documentElement
    const previousBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    scrollAnimation.current = animate(window.scrollY, target, {
      type: 'spring',
      stiffness: 72,
      damping: 13,
      mass: 1,
      restDelta: 0.5,
      onUpdate: (value) => window.scrollTo(0, value),
      onComplete: () => {
        root.style.scrollBehavior = previousBehavior
        scrollAnimation.current = null
      },
    })
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Gururaj KL, home" onClick={(event) => scrollToSection(event, 'home')}>GJ<span>.</span></a>
        <nav className="navigation" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.id} className={activeSection === item.id ? 'active' : ''} href={`#${item.id}`} onClick={(event) => scrollToSection(event, item.id)}>{item.label}</a>)}
        </nav>
        <a className="header-resume" href={profile.resumeHref} download aria-label="Download resume" title="Download resume"><Download size={17} /><span>Resume</span></a>
      </header>

      <nav className="mobile-dock" aria-label="Section navigation">
        {navigation.map((item) => {
          const Icon = item.icon
          const active = activeSection === item.id
          return <motion.a key={item.id} className={active ? 'active' : ''} href={`#${item.id}`} aria-current={active ? 'location' : undefined} onClick={(event) => scrollToSection(event, item.id)} whileTap={reduceMotion ? undefined : { scale: 0.82 }} transition={{ type: 'spring', stiffness: 420, damping: 16 }}><Icon size={19} strokeWidth={active ? 2.5 : 1.8} aria-hidden="true" /><span>{item.label}</span></motion.a>
        })}
      </nav>

      <main id="main">
        <section className="hero-section" id="home">
          <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 60, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 95, damping: 13, mass: 0.9 }}>
            <p className="eyebrow">{profile.role} · {profile.location}</p>
            <h1><span className="name-mark">{firstName}<svg className="name-underline" viewBox="0 0 420 34" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" opacity="0" d="M5 23 C72 10 132 10 198 18 C268 27 334 27 414 20" /></svg></span>{remainingName.length > 0 && <> <span className="name-suffix">{remainingName.join(' ')}</span></>}</h1>
            <p className="hero-intro">{profile.introduction}</p>
            <div className="hero-actions"><a className="button button--primary" href="#projects" onClick={(event) => scrollToSection(event, 'projects')}>View selected work <ArrowDown size={18} /></a><a className="button button--secondary" href={profile.resumeHref} download><Download size={18} /> Download resume</a></div>
          </motion.div>
          <motion.div className="hero-visual" aria-label="A visual summary of Gururaj's engineering approach" initial={reduceMotion ? false : { opacity: 0, x: 70, rotate: 2 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 80, damping: 11, mass: 1, delay: 0.12 }}>
            <span>01 / Profile</span><div className="visual-statement">Think clearly.<br />Build carefully.<br /><em>Keep learning.</em></div><div className="visual-meta"><span>Product thinking</span><span>Engineering craft</span><span>Human interfaces</span></div>
          </motion.div>
        </section>

        <motion.section className="content-section split-section" id="about" {...reveal}>
          <div className="section-heading"><p className="section-number">01</p><h2>What I’m doing now</h2></div>
          <div className="about-copy"><p className="lead">{profile.currentFocus}</p><p>I bring strong problem-solving, clear professional communication, effective teamwork, and disciplined time management to each engagement.</p><a className="social-link" href={socialLinks[1].href} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div>
        </motion.section>

        <motion.section className="content-section" id="stack" {...reveal}>
          <div className="section-heading"><p className="section-number">02</p><h2>Working stack</h2><p>Technologies I use to build desktop, web, cloud, and AI-enabled applications.</p></div>
          <div className="stack-grid">{stackGroups.map((group) => <article className="stack-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </motion.section>

        <motion.section className="content-section split-section" id="education" {...reveal}>
          <div className="section-heading"><p className="section-number">03</p><h2>Education</h2></div>
          <div className="timeline">{education.map((item) => <article className="timeline-item" key={item.qualification}><p className="timeline-period">{item.period}</p><h3>{item.qualification}</h3><p className="institution">{item.institution}</p><p>{item.detail}</p></article>)}</div>
        </motion.section>

        <motion.section className="content-section" id="projects" {...reveal}>
          <div className="section-heading projects-heading"><div><p className="section-number">04</p><h2>Selected projects</h2></div><p>Focused case studies, built around contribution rather than buzzwords.</p></div>
          <div className="project-list">{projects.map((project, index) => <article className="project" key={project.title}><div className="project-index">0{index + 1}</div><div className="project-content"><p className="project-meta">{project.organization} · {project.period}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><p><strong>Contribution</strong>{project.contribution}</p><ul className="project-stack">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div>{project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight /></a>}</article>)}</div>
          <div className="personal-projects-heading"><p className="section-number">Independent work</p><h3>Personal projects</h3></div>
          <div className="personal-projects">{personalProjects.map((project, index) => <article className="personal-project" key={project.title}><p className="personal-project-index">P{String(index + 1).padStart(2, '0')}</p><h4>{project.title}</h4><p>{project.description}</p><ul className="project-stack">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul><a href={project.href} target="_blank" rel="noreferrer">{project.linkLabel}<ArrowUpRight size={17} aria-hidden="true" /></a></article>)}</div>
        </motion.section>

        <motion.section className="contact-section" id="contact" {...reveal}>
          <div className="contact-intro"><p className="section-number">05</p><h2>Find me online.</h2><p>Follow my work, professional updates, and the things I’m exploring across these platforms.</p></div>
          <ul className="social-links" aria-label="Social profiles">{socialLinks.map((link) => <li key={link.platform}><a href={link.href} target="_blank" rel="noreferrer"><span><strong>{link.platform}</strong><small>{link.handle}</small></span><ArrowUpRight aria-hidden="true" /></a></li>)}</ul>
        </motion.section>
      </main>
      <footer>
        <p className="footer-credit">Built with <Code2 size={15} aria-hidden="true" /> &amp; care by <a href="#home" onClick={(event) => scrollToSection(event, 'home')}>{profile.name}</a></p>
      </footer>
    </div>
  )
}

export default App
