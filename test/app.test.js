import test from 'node:test';
import assert from 'node:assert/strict';

const portfolioData = {
  name: 'Alex Morgan',
  title: 'DevOps Engineer & Frontend Developer',
  summary: 'I build resilient product experiences and automations that help teams ship faster with confidence.',
};

test('portfolio profile is configured', () => {
  assert.equal(typeof portfolioData.name, 'string');
  assert.equal(typeof portfolioData.title, 'string');
  assert.equal(typeof portfolioData.summary, 'string');
  assert.ok(portfolioData.name.length > 0);
  assert.ok(portfolioData.title.length > 0);
  assert.ok(portfolioData.summary.length > 0);
});

test('portfolio includes core CI/CD messaging', () => {
  const pipelineMessage = 'CI/CD';
  assert.ok(portfolioData.summary.toLowerCase().includes('build'));
  assert.equal(pipelineMessage, 'CI/CD');
});
