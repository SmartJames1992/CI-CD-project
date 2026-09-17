# Full-Stack CI/CD Portfolio

This project is a full-stack portfolio application built to demonstrate modern delivery practices:

- React frontend for the portfolio UI
- Express backend for API-driven data
- Docker Compose for local multi-service orchestration
- CI validation and production build checks
- GitHub Pages deployment for the frontend

## Repository layout

- client/: React app and Vite configuration
- server/: Express API and backend tests
- docker-compose.yml: local Docker startup for both services
- .github/workflows/ci-cd.yml: CI/CD pipeline definition
- package.json: root scripts for local orchestration

> The root project is only the orchestration layer. The actual app code lives in the client and server folders.

## Local development

Install dependencies:

```bash
npm install --prefix server
npm install --prefix client
```

Start the backend:

```bash
npm run dev:server
```

Start the frontend:

```bash
npm run dev:client
```

Or run everything with Docker:

```bash
docker compose up --build
```

## Production build and validation

Frontend build:

```bash
npm --prefix client run build
```

Backend tests:

```bash
npm --prefix server test
```

## GitHub Actions workflow

The workflow in [.github/workflows/ci-cd.yml](.github/workflows/ci-cd.yml):

- installs both service dependencies
- runs backend tests
- builds the React app
- uploads the frontend bundle as a Pages artifact
- deploys the frontend to GitHub Pages on pushes to main

## Customization

Update the profile content, project data, and styling in the frontend and backend to match your own portfolio and deployment goals.
