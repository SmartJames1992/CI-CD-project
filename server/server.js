const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const profile = {
  name: 'Jonathan Burkhardt',
  title: 'Senior Software Engineer & DevOps Specialist',
  location: 'Stockholm, Sweden',
  email: 'jonathan.burkhardt@gmail.com',
  summary:
    'I specialize in building resilient product experiences and automations that help teams ship faster with confidence. My expertise spans frontend development, backend systems, and DevOps practices, enabling me to deliver end-to-end solutions.',
  availability: 'Open to software engineering and DevOps opportunities.',
};

const projects = [
  {
    title: 'Cloud Deploy Hub',
    type: 'Platform Automation',
    description:
      'Automated multi-environment releases with stricter approvals, faster feedback loops, and measurable deployment quality.',
    impact: 'Cut release time from 2 days to 30 minutes.',
  },
  {
    title: 'Frontend Health Dashboard',
    type: 'Monitoring Experience',
    description:
      'Built a live observability layer to track quality signals, incidents, and customer impact across shipping workflows.',
    impact: 'Reduced incident triage time by 45%.',
  },
  {
    title: 'DevOps Learning Lab',
    type: 'Training & Enablement',
    description:
      'Created a hands-on environment that helped engineers adopt GitHub workflows, infrastructure automation, and release best practices.',
    impact: 'Improved secure deployment adoption across the team.',
  },
];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'portfolio-backend' });
});

app.get('/api/profile', (req, res) => {
  res.json(profile);
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/metrics', (req, res) => {
  res.json({
    deploymentsAutomated: '180+',
    uptimeTarget: '99.9%',
    systemsManaged: 24,
    yearsExperience: '6+',
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
  });
}

module.exports = app;
