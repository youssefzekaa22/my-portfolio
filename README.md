# Youssef Zakaria Fahmy: DevOps Portfolio

A static portfolio built with **React + Vite + Tailwind CSS v4**. No UI libraries, no runtime icon packages, no backend. The production bundle is roughly 94 KB of JavaScript (gzipped).

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # serve dist/ locally to check it
```

`vite.config.js` sets `base: './'`, so the same build works on GitHub Pages (project site), a custom domain, Netlify, Cloudflare Pages, or S3.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push a commit (or run the workflow from the **Actions** tab). The site appears at `https://<your-username>.github.io/<repo-name>/`.

## What to replace

Everything editable lives in `src/data/`. Any value that still contains `YOUR-` or `your.email` is a placeholder, and the site draws those links with an **amber dashed outline** so you can see what is left.

| What | File | Field |
| --- | --- | --- |
| Email | `src/data/profile.js` | `email` |
| GitHub profile URL | `src/data/profile.js` | `github` |
| LinkedIn URL | `src/data/profile.js` | `linkedin` |
| Profile photo | `src/data/profile.js` + `public/` | put `profile.jpg` in `public/`, then set `profileImage: './profile.jpg'` |
| Job Application Tracker repo / docs | `src/data/projects.js` | `featuredProject.repo`, `featuredProject.docs` |
| Live demo button | `src/data/projects.js` | set `featuredProject.demo` to a URL. While it is `null` the button is hidden |
| Backup script repo | `src/data/projects.js` | `automationProjects[0].repo` |
| Data toolkit repo | `src/data/projects.js` | `automationProjects[1].repo` |

Optional, after you know your final URL:

- Add `<meta property="og:url">` and `<meta property="og:image">` (absolute URLs, ideally a 1200×630 PNG) to `index.html` so links preview nicely on LinkedIn and messaging apps.

## Project structure

```
.
├── index.html                  SEO + Open Graph metadata, fonts
├── vite.config.js
├── public/favicon.svg
├── .github/workflows/deploy.yml
└── src/
    ├── main.jsx
    ├── App.jsx                 page composition, skip link
    ├── index.css               Tailwind + design tokens (colors, fonts, motion)
    ├── data/                   ALL content: edit here
    │   ├── profile.js          contact info, about text, education
    │   ├── journey.js          pipeline timeline stages
    │   ├── skills.js           skill groups and icons
    │   ├── projects.js         featured + automation projects
    │   ├── focus.js            "Currently building with"
    │   └── brandIcons.js       generated brand glyphs (Simple Icons, CC0)
    ├── hooks/                  useInView, useActiveSection, useTypedLines
    └── components/
        ├── ui.jsx              Section, LinkButton (placeholder-aware), Tag
        ├── Icon.jsx            UI icons + brand icons
        ├── Nav / Hero / Terminal / About / Journey / Skills
        ├── Projects / ArchitectureDiagram / Automation
        └── Education / Focus / Contact / Footer
```

## Design decisions

- **The journey is a CI pipeline.** Graduation is a *passed* stage, the internship and toolchain are *in progress*, and the junior role is *next*. It tells the CS → intern → junior story without inventing dates or claims.
- **Two status colors, used for meaning only.** Mint means done or a project fact; amber means still learning (and also marks placeholder links). Everything else is neutral blue-slate.
- **Honest skills.** No percentages. Skills used in a project on the page get a dot; the rest are listed without a level. The "Currently building with" section says plainly that those tools are in training.
- **The featured project is explained by a diagram, not adjectives.** The architecture SVG only draws things the CV states: two services, a custom network, a named volume, a multi-stage build, a non-root user, and a health-gated start.
- **Illustrative visuals are labeled.** The hero terminal and the toolkit output say they are illustrative, not recordings.
- **One moment of motion.** The hero terminal types once, and the pipeline draws once when scrolled into view. Both are disabled under `prefers-reduced-motion`.
- **Accessibility.** Semantic landmarks, one `h1`, a skip link, visible focus rings, `aria-current` on the active nav link, text alternatives for diagrams, and no horizontal page scroll down to 320 px wide.
