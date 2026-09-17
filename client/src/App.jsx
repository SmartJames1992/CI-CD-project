import { useEffect, useState } from 'react'
import './App.css'

const fallbackProfile = {
  name: 'Alex Morgan',
  title: 'DevOps Engineer & Frontend Developer',
  location: 'Seattle, WA',
  email: 'alex@example.com',
  summary:
    'I design deployment systems and product experiences that help teams move fast without sacrificing reliability, clarity, or trust.',
  availability: 'Available for product engineering roles',
}

const fallbackMetrics = [
  { label: 'Years in engineering', value: '6+' },
  { label: 'Automated deployments', value: '180+' },
  { label: 'Target uptime', value: '99.9%' },
  { label: 'Systems supported', value: '24' },
]

const fallbackProjects = [
  {
    title: 'Cloud Deploy Hub',
    type: 'Platform Automation',
    description:
      'Built a release orchestration layer for multi-environment deployments with safer approvals, quality gates, and stronger operational consistency.',
    impact: 'Reduced release time from 2 days to 30 minutes.',
  },
  {
    title: 'Frontend Health Dashboard',
    type: 'Monitoring Experience',
    description:
      'Designed a real-time observability surface that unified deployment health, incidents, and user-impact signals for product teams.',
    impact: 'Cut incident triage time by 45%.',
  },
  {
    title: 'DevOps Learning Lab',
    type: 'Hands-on Training',
    description:
      'Created a small learning environment that taught engineers GitHub workflows, automation patterns, and secure release practices.',
    impact: 'Improved secure deployment adoption across the team.',
  },
]

const fallbackTimeline = [
  {
    period: '2023 - Present',
    role: 'Senior Platform Engineer',
    detail:
      'Own release automation, pipeline quality, and engineering enablement for a portfolio of production services.',
  },
  {
    period: '2021 - 2023',
    role: 'Full-Stack Developer',
    detail:
      'Delivered internal tooling and product features focused on developer velocity, reliability, and user trust.',
  },
  {
    period: '2019 - 2021',
    role: 'Site Reliability Engineer',
    detail:
      'Built monitoring, incident response, and service reliability practices for business-critical workloads.',
  },
]

const fallbackHighlights = [
  'End-to-end delivery ownership',
  'Automation-first mindset',
  'Clear infrastructure documentation',
  'User-centered product thinking',
]

function App() {
  const [profile, setProfile] = useState(fallbackProfile)
  const [projects, setProjects] = useState(fallbackProjects)
  const [metrics, setMetrics] = useState(fallbackMetrics)
  const [timeline, setTimeline] = useState(fallbackTimeline)
  const [highlights, setHighlights] = useState(fallbackHighlights)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:4000'

    async function loadPortfolioData() {
      try {
        const [profileRes, projectsRes, metricsRes] = await Promise.all([
          fetch(`${apiBase}/api/profile`),
          fetch(`${apiBase}/api/projects`),
          fetch(`${apiBase}/api/metrics`),
        ])

        if (profileRes.ok) {
          const nextProfile = await profileRes.json()
          setProfile(nextProfile)
        }

        if (projectsRes.ok) {
          const nextProjects = await projectsRes.json()
          setProjects(nextProjects)
        }

        if (metricsRes.ok) {
          const nextMetrics = await metricsRes.json()
          setMetrics([
            { label: 'Years in engineering', value: nextMetrics.yearsExperience },
            { label: 'Automated deployments', value: nextMetrics.deploymentsAutomated },
            { label: 'Target uptime', value: nextMetrics.uptimeTarget },
            { label: 'Systems supported', value: nextMetrics.systemsManaged },
          ])
        }
      } catch (error) {
        console.warn('Using fallback portfolio data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPortfolioData()
  }, [])

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">AM</span>
          <span>{profile.name}</span>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio project · CI/CD driven</p>
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p className="summary">{profile.summary}</p>
            <div className="cta-row">
              <a className="primary" href="#projects">
                View projects
              </a>
              <a className="secondary" href={`mailto:${profile.email}`}>
                Email me
              </a>
            </div>
            <div className="highlight-row">
              {highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <ul className="meta-list">
              <li>{profile.location}</li>
              <li>{profile.availability}</li>
            </ul>
          </div>

          <div className="hero-panel">
            <div className="panel-card">
              <p className="label">Pipeline status</p>
              <h3>Production ready</h3>
              <div className="status-row">
                <span className="dot" aria-hidden="true" />
                <span>Build • Test • Deploy</span>
              </div>
            </div>
            <div className="stats-grid">
              {metrics.map((item) => (
                <div className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="content-section">
          <div className="section-header">
            <p className="eyebrow">About</p>
            <h3>Developer focused on automation and user trust.</h3>
          </div>
          <div className="about-grid">
            <p>
              I partner with product teams to turn complex engineering work into smooth release cycles.
              My focus is on shipping client experiences that are fast, resilient, and supported by strong
              operational habits.
            </p>
            <div className="skills-box">
              {['CI/CD', 'GitHub Actions', 'Docker', 'React', 'Node.js', 'AWS', 'Terraform', 'Monitoring'].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="content-section">
          <div className="section-header">
            <p className="eyebrow">Projects</p>
            <h3>Work that improves delivery and product quality.</h3>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-tag">{project.type}</span>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <strong>{project.impact}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section">
          <div className="section-header">
            <p className="eyebrow">Experience</p>
            <h3>Engineering leadership across software delivery and reliability.</h3>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <div className="timeline-item" key={`${item.period}-${item.role}`}>
                <span className="time-period">{item.period}</span>
                <div>
                  <h4>{item.role}</h4>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <p>Let’s build dependable digital experiences.</p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </footer>

      {loading && <div className="status-banner">Loading portfolio data…</div>}
    </div>
  )
}

export default App
