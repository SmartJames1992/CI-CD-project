import { profile, stats, skills, projects, timeline, highlights } from './data.js';
import './styles.css';

const app = document.querySelector('#app');

const markup = `
  <div class="page-shell">
    <header class="topbar">
      <div class="brand">
        <span class="brand-mark">AM</span>
        <span>Alex Morgan</span>
      </div>
      <nav class="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Portfolio project · CI/CD driven</p>
          <h1>${profile.name}</h1>
          <h2>${profile.title}</h2>
          <p class="summary">${profile.summary}</p>
          <div class="cta-row">
            <a class="primary" href="#projects">View projects</a>
            <a class="secondary" href="mailto:${profile.email}">Email me</a>
          </div>
          <div class="highlight-row">
            ${highlights.map((item) => `<span>${item}</span>`).join('')}
          </div>
          <ul class="meta-list">
            <li>${profile.location}</li>
            <li>${profile.availability}</li>
          </ul>
        </div>

        <div class="hero-panel">
          <div class="panel-card">
            <p class="label">Pipeline status</p>
            <h3>Production ready</h3>
            <div class="status-row">
              <span class="dot"></span>
              <span>Build • Test • Deploy</span>
            </div>
          </div>
          <div class="stats-grid">
            ${stats
              .map(
                (item) => `
                  <div class="stat-card">
                    <strong>${item.value}</strong>
                    <span>${item.label}</span>
                  </div>
                `,
              )
              .join('')}
          </div>
        </div>
      </section>

      <section id="about" class="content-section">
        <div class="section-header">
          <p class="eyebrow">About</p>
          <h3>Developer focused on automation and user trust.</h3>
        </div>
        <div class="about-grid">
          <p>
            I partner with product teams to turn complex engineering work into smooth release cycles.
            My focus is on shipping client experiences that are fast, resilient, and supported by strong
            operational habits.
          </p>
          <div class="skills-box">
            ${skills.map((skill) => `<span>${skill}</span>`).join('')}
          </div>
        </div>
      </section>

      <section id="projects" class="content-section">
        <div class="section-header">
          <p class="eyebrow">Projects</p>
          <h3>Work that improves delivery and product quality.</h3>
        </div>
        <div class="project-grid">
          ${projects
            .map(
              (project) => `
                <article class="project-card">
                  <span class="project-tag">${project.type}</span>
                  <h4>${project.title}</h4>
                  <p>${project.description}</p>
                  <strong>${project.impact}</strong>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section id="experience" class="content-section">
        <div class="section-header">
          <p class="eyebrow">Experience</p>
          <h3>Engineering leadership across software delivery and reliability.</h3>
        </div>
        <div class="timeline">
          ${timeline
            .map(
              (item) => `
                <div class="timeline-item">
                  <span class="time-period">${item.period}</span>
                  <div>
                    <h4>${item.role}</h4>
                    <p>${item.detail}</p>
                  </div>
                </div>
              `,
            )
            .join('')}
        </div>
      </section>
    </main>

    <footer id="contact" class="footer">
      <p>Let’s build dependable digital experiences.</p>
      <a href="mailto:${profile.email}">${profile.email}</a>
    </footer>
  </div>
`;

app.innerHTML = markup;
