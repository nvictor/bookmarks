# Two-tier bookmark system guide

A miniature interactive walkthrough of Victor's two-tier bookmark workflow: the bookmark bar acts as muscle memory, while Raindrop.io provides a searchable archive for both personal and work contexts. The page lets you toggle between contexts, swap tiers, and experiment with weekly reset rituals so the structure never bloats.

## What the page covers

- **Context + tier toggles** – Switch between personal/work stacks and between the bookmark bar and Raindrop.io layers. Each combination redraws the cards pulled from `design/projects/bookmarks/*.md`.
- **Card grid** – Highlights the folders, emoji, and behaviors for each tier (icons, inbox, routine, dashboards, archives, etc.).
- **Cadence lab** – A small slider that simulates how full the bookmark-bar inbox is and spells out the matching cleanup ritual (Sunday coffee vs. Friday 4:30 PM).
- **Current-focus composer** – Type the current obsession/engagement to see how the folder appears on the bar before it gets archived back into Raindrop.

All copy is plain data in `src/main.js`, so tweaking descriptions or adding new tiers is a data-only change.

## Local development

```bash
npm run dev
```

This serves the project root on [http://localhost:4175](http://localhost:4175) via Python's built-in HTTP server so the ES module at `src/main.js` runs directly in the browser. Edit `index.html`, `styles.css`, or anything inside `src/` and refresh to see the updates.

## Build

```bash
npm run build
```

The build script copies `index.html`, `styles.css`, and the `src/` directory into `dist/`. Use `npm run preview` to serve the built assets from the `dist` directory on port `4176`.

## GitHub Pages deployment

1. Push to `main`. The included workflow `.github/workflows/deploy.yml` installs dependencies, runs `npm run build`, uploads `dist/` as an artifact, and deploys with `actions/deploy-pages`.
2. In repository settings, enable GitHub Pages and set the source to **GitHub Actions**.
3. After the first successful run, your site URL will be `https://<your-github-username>.github.io/<your-repo-name>/`.

If you add runtime dependencies later, update `package.json`, regenerate `package-lock.json`, and rerun the workflow so Pages bundles the latest assets.
