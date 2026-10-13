# Project rules

- Site must stay static-hostable (GitHub Pages): no server functions; forms post directly to FormSubmit from the browser. Why: GitHub Pages cannot run server code.
- GitHub Pages deploy uses .github/workflows/deploy-pages.yml, which copies index.html to 404.html so deep links route client-side. Why: Pages has no rewrite rules.
