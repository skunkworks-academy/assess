# Skunkworks Academy Assess

The Docusaurus application for [assess.skunkworksacademy.com](https://assess.skunkworksacademy.com/). It provides a product-selection landing page for Skunkworks Academy assessment pathways and preserves the Individual Development Roadmap (IDR) guides, resources, and participant workspaces.

## Local development

```powershell
Set-Location "C:\Users\Raydo\GitHub\idr"
npm ci
npm start
```

Create and inspect a production build:

```powershell
npm run build
npm run serve
```

## Deployment

Pushes to `main` build the Docusaurus application and deploy the `build` directory through GitHub Pages. In the repository settings, **Pages → Build and deployment → Source** must be set to **GitHub Actions**.

The personal roadmaps are intentionally starter templates. Add only approved assessment insights and mentor-agreed goals; do not commit confidential respondent answers or feedback to this public repository.
