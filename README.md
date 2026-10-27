# Youssef Zakaria Fahmy: DevSecOps Portfolio

Live site: https://youssefzekaa22.github.io/my-portfolio/

A static portfolio built with **React + Vite + Tailwind CSS v4**. No UI libraries, no runtime icon packages, no backend. The production bundle is roughly 108 KB of JavaScript (gzipped).

## What's on it

- **Hero:** role, short pitch, and a live-looking cluster terminal (labeled as illustrative).
- **About, Journey, Skills:** DevSecOps at NTI, freelance DevOps (Elora Business Solutions), the DevOps internship at Route, and the tools used in real projects.
- **Featured projects**, each with Docker Compose and Kubernetes diagrams where they apply:
  - Production Odoo 19 deployment on a hardened VPS (freelance client work, no public repo)
  - Traefik microservices platform on Kubernetes, with HPA (no public repo yet)
  - Job Application Tracker
  - Automated database backup (Kubernetes CronJob)
  - Recipe App (based on an open-source project, noted on the card)
  - Zeeka Academy
- **Automation:** three Bash projects with links to their repos.
- **Education, Focus, Contact:** email, GitHub, LinkedIn. No phone number on purpose.

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

`vite.config.js` sets `base: './'`, so the same build works under `/my-portfolio/`, on a custom domain, Netlify, Cloudflare Pages, or S3.

## How the live site is deployed

GitHub Pages is set to **Deploy from a branch → `main` / `(root)`**. There is no build workflow. The files in the repo root are served as they are:

| File | Purpose |
| --- | --- |
| `index.html` | the whole site as one built file (JS and CSS inlined) |
| `og-image.jpg` | 1200×627 preview image for LinkedIn and chat apps |
| `favicon.svg` | tab icon |

This means the repo root holds the **built** site, not the Vite source. Keep the source project (this folder) somewhere else, build it, and copy the three files above into the repo.

To publish a change:

1. Edit the content in `src/data/` (see below).
2. Build the single-file version and take `index.html`, `og-image.jpg` and `favicon.svg`.
3. Upload them to the repo root and commit to `main`. GitHub Pages rebuilds in about a minute.
4. If you change the title, description or preview image, refresh LinkedIn's cache at https://www.linkedin.com/post-inspector/.

If you would rather keep the source in the repo too, put it in a subfolder, add the workflow back (`.github/workflows/deploy.yml`: checkout, Node 22, `npm ci`, `npm run build`, upload `dist/`, deploy-pages) and switch **Settings → Pages → Source** to **GitHub Actions**.

## Editing content

Everything editable lives in `src/data/`. Any value containing `YOUR-` is drawn with an **amber dashed outline** as a reminder that it is a placeholder.

| What | File | Field |
| --- | --- | --- |
| Role, tagline, status line | `src/data/profile.js` | `role`, `tagline`, `status` |
| Email, GitHub, LinkedIn | `src/data/profile.js` | `email`, `github`, `linkedin` |
| About text, strengths, languages | `src/data/profile.js` | `about` |
| Education | `src/data/profile.js` | `education` |
| NTI and Route timeline | `src/data/journey.js` | stages `nti`, `route`, `next` |
| Skill groups | `src/data/skills.js` | groups, `inProject` marks used skills |
| "Currently building with" | `src/data/focus.js` | `pipeline` and `infra` groups |
| Featured projects | `src/data/projects.js` | `featuredProjects` |
| Repo and demo buttons | `src/data/projects.js` | a project's `repo`, `docs`, `demo` (buttons hide while `null`) |
| Bash projects | `src/data/projects.js` | `automationProjects` |
| Profile photo | `src/data/profile.js` + `public/` | put `profile.jpg` in `public/`, set `profileImage: './profile.jpg'` |
| Link preview | `index.html` + `public/og-image.jpg` | `og:*` and `twitter:*` meta tags |

### Updating from a new CV

Send the new CV and the changes will map to these files:

- New job, training or dates → `journey.js` and the `status` line in `profile.js`
- New tools → `skills.js` (and `focus.js` if still in training)
- New or changed project → `projects.js`, plus a diagram in `components/diagrams/` if it needs one
- New contact detail or link → `profile.js`

Only facts that appear in the CV or the repos go on the site. No invented numbers and no skill percentages.

## Project structure

```
.
├── index.html                  SEO + Open Graph metadata, fonts
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── og-image.jpg            link preview (1200×627)
└── src/
    ├── main.jsx
    ├── App.jsx                 page composition, skip link
    ├── index.css               Tailwind + design tokens (colors, fonts, motion)
    ├── data/                   ALL content: edit here
    │   ├── profile.js          contact info, about text, education
    │   ├── journey.js          Route / NTI / Elora / next-step timeline
    │   ├── skills.js           skill groups and icons
    │   ├── projects.js         featured + automation projects
    │   ├── focus.js            "Currently building with"
    │   └── brandIcons.js       generated brand glyphs (Simple Icons, CC0)
    ├── hooks/                  useInView, useActiveSection, useTypedLines
    └── components/
        ├── ui.jsx              Reveal, SpotlightCard, Section, LinkButton, Tag
        ├── Icon.jsx            UI icons + brand icons
        ├── DiagramTabs.jsx     Docker Compose / Kubernetes switcher (ARIA tablist)
        ├── diagrams/           one SVG diagram per project per deployment layer
        │   ├── OdooVpsDiagram.jsx / CronJobBackupDiagram.jsx
        │   ├── TraefikK8sDiagram.jsx
        │   ├── TrackerComposeDiagram.jsx / TrackerK8sDiagram.jsx
        │   ├── RecipeComposeDiagram.jsx / RecipeK8sDiagram.jsx
        │   └── AcademyK8sDiagram.jsx
        ├── ClusterCanvas.jsx   animated pod/traffic mesh behind the hero
        ├── Marquee.jsx         scrolling tool logos
        ├── Nav / Hero / Terminal / About / Journey / Skills
        ├── Projects / Automation
        └── Education / Focus / Contact / Footer
```

## Design decisions

- **The journey is a CI pipeline.** Graduation is a *passed* stage, NTI and Route are *in progress*, and the full-time role is *next*. It tells the story without inventing dates or claims.
- **Training is shown as training.** The site says plainly which tools are used in projects and which are still being learned.
- **Honest skills.** No percentages. Skills used in a project on the page get a dot; the rest are listed without a level.
- **Each featured project is explained by diagrams, not adjectives.** A Docker Compose / Kubernetes tab switcher shows how an app is containerized and then deployed. Diagrams draw only resources that are confirmed.
- **Illustrative visuals are labeled.** The hero terminal says it is illustrative, not a recording.
- **Motion with restraint.** The hero terminal types once and the pipeline draws once when scrolled into view. Everything is disabled under `prefers-reduced-motion`.
- **Accessibility.** Semantic landmarks, one `h1`, a skip link, visible focus rings, `aria-current` on the active nav link, text alternatives for diagrams, and no horizontal page scroll down to 320 px wide.
