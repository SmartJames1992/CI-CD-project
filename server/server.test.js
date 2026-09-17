const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('./server.js');

async function request(path) {
  const server = app.listen(0);
  const { port } = server.address();

  const response = await fetch(`http://127.0.0.1:${port}${path}`);
  const body = await response.json();

  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) reject(error);
      else resolve();
    });
  });

  return { response, body };
}

test('health endpoint returns ok', async () => {
  const { response, body } = await request('/api/health');

  assert.equal(response.status, 200);
  assert.equal(body.status, 'ok');
  assert.equal(body.service, 'portfolio-backend');
});

test('profile endpoint returns expected structure', async () => {
  const { response, body } = await request('/api/profile');

  assert.equal(response.status, 200);
  assert.equal(body.name, 'Alex Morgan');
  assert.equal(body.title, 'DevOps Engineer & Frontend Developer');
});

test('projects endpoint returns at least one project', async () => {
  const { response, body } = await request('/api/projects');

  assert.equal(response.status, 200);
  assert.ok(Array.isArray(body));
  assert.ok(body.length >= 1);
});

test('metrics endpoint returns numbers and labels', async () => {
  const { response, body } = await request('/api/metrics');

  assert.equal(response.status, 200);
  assert.equal(body.uptimeTarget, '99.9%');
  assert.equal(body.deploymentsAutomated, '180+');
});
