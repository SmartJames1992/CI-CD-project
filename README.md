# CI/CD Portfolio Project

This project is a lightweight portfolio website built to demonstrate a modern GitHub-based CI/CD pipeline. It includes:

- A Vite frontend application
- Automated testing
- Build validation
- Artifact publishing
- Deployment to GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Testing

```bash
npm test
```

## GitHub Actions

The workflow in `.github/workflows/ci-cd.yml` uses the official GitHub Pages deployment flow:

- validates the app on pull requests
- runs tests and production build on push
- publishes the static site to GitHub Pages for the main branch
- uses GitHub-managed Pages deployment instead of a third-party action

## Customization

Update the information in `src/data.js` and the styling in `src/styles.css` to personalize the portfolio.
