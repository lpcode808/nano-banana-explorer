# GitHub Pages Deployment Learning Guide

This document explains the setup we created to deploy your React app to GitHub Pages automatically.

## What is GitHub Pages?

GitHub Pages is a free hosting service from GitHub that turns your repository into a live website. It can host:
- **Static websites** (plain HTML/CSS/JS files)
- **Built applications** (like React apps compiled to HTML/CSS/JS)

**Key point**: GitHub Pages serves files from a special `gh-pages` branch or the `/docs` folder, or output from GitHub Actions.

Your site will be available at: `https://lpcode808.github.io/nano-banana-explorer/`

## Why Do We Need GitHub Actions?

Your project is a **React app**, not a static website. This matters because:

1. **Raw React code can't run in a browser** - browsers only understand HTML, CSS, and JavaScript
2. **Vite is a build tool** - it converts your TypeScript/React code into browser-compatible JavaScript
3. **GitHub Pages can't build automatically** - you need to tell it what files to serve

Solution: **GitHub Actions** runs the build process automatically and uploads the compiled files to GitHub Pages.

## The Complete Flow

```
You push code to GitHub
        ↓
GitHub Actions workflow triggers
        ↓
Install dependencies (npm install)
        ↓
Run build (npm run build)
        ↓
Creates 'dist' folder with compiled files
        ↓
Upload 'dist' to GitHub Pages
        ↓
Your site goes live!
```

## Our Setup Files

### 1. `.github/workflows/deploy.yml` (The Automation)

This is the GitHub Actions workflow file. It defines:

```yaml
on:
  push:
    branches:
      - main
      - master
```
**Translation**: "When code is pushed to main or master, run the following steps"

The steps are:
1. **Checkout code** - download your code
2. **Setup Node.js** - install the JavaScript runtime
3. **Install dependencies** - run `npm install`
4. **Build** - run `npm run build` (converts React → HTML/CSS/JS)
5. **Upload artifact** - save the `dist` folder
6. **Deploy** - push it to GitHub Pages

### 2. `vite.config.ts` (The Build Configuration)

This tells Vite how to compile your code:

```typescript
base: isGithubPages ? '/nano-banana-explorer/' : '/',
```

**Why this matters**: Your site is hosted in a subfolder (`/nano-banana-explorer/`), not at the root. This line tells Vite to adjust all file paths in the compiled output accordingly.

- **Local dev**: Uses `/` (runs at root on your computer)
- **GitHub Pages**: Uses `/nano-banana-explorer/` (runs in the repo subfolder)

### 3. `index.html` (The Entry Point)

```html
<div id="root"></div>
<script type="module" src="/index.tsx"></script>
```

This is what the browser loads first. The script tag tells it to:
1. Load `index.tsx` as a module
2. Vite processes it and converts it to JavaScript
3. React renders into the `<div id="root">` element

### 4. `index.tsx` (The React Entry Point)

```typescript
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
```

This is where React starts. It finds the `<div id="root">` and renders your `<App />` component into it.

### 5. `package-lock.json` (Dependency Lock File)

This file locks the exact versions of all your dependencies. It's essential for GitHub Actions because:
- Different machines might install different versions
- `package-lock.json` ensures consistency
- GitHub Actions uses it to cache dependencies (faster builds)

## What Happens When You Deploy

1. **You merge a PR to main** → GitHub detects the push
2. **GitHub Actions starts** → runs the workflow
3. **Vite builds your app** → creates `/dist` folder with compiled files
4. **Files uploaded to GitHub Pages** → your live site is updated

The site updates within 1-2 minutes of pushing to main.

## The Key Technologies

| Tool | Purpose |
|------|---------|
| **GitHub Pages** | Free hosting for your compiled code |
| **GitHub Actions** | Automation service that runs your build |
| **Vite** | Build tool that converts React → browser-ready code |
| **React** | UI framework (what you write) |
| **Node.js / npm** | JavaScript runtime and package manager |
| **TypeScript** | JavaScript with type checking (stricter, less bugs) |

## Common Issues & Solutions

### Blank page?
- Check that `index.html` has the `<script type="module" src="/index.tsx"></script>` tag
- Check browser console for errors (F12 → Console tab)

### Workflow fails?
- Check GitHub Actions logs (Actions tab → click workflow run)
- Common causes: missing `package-lock.json`, missing dependencies, build errors

### Assets not loading?
- Check that `vite.config.ts` has the correct `base` path for GitHub Pages
- Should be `/nano-banana-explorer/` for this repo

### Tailwind warning?
- The warning about CDN is fine for small projects
- For production, install Tailwind as a proper PostCSS plugin

## Summary

The entire deployment system is **automated**. You now only need to:

1. Make code changes locally
2. Commit and push to main
3. GitHub Actions handles everything else
4. Your site updates automatically

You never manually upload files or run build commands on a server!

## Next Steps

To make changes:
1. Edit your React components locally
2. Test with `npm run dev`
3. Push to main
4. GitHub Actions deploys automatically
5. Check your live site in 1-2 minutes

That's it! You've got CI/CD (Continuous Integration/Continuous Deployment) set up. 🚀
