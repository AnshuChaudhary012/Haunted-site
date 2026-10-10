# Haunted Layout (NFT Landing Page)

A modern, responsive NFT landing page migrated from HTML, CSS, vanilla JavaScript, and Tailwind CLI to **React 19 + Vite + React Router v7 + Tailwind CSS v4**.

For a quick 2-minute summary of how the components and state work, see [OVERVIEW.md](./OVERVIEW.md).

---

## 📁 File Structure

```text
Haunted-layout/
├── assets/                          # Original assets mirror at root
│   ├── icons/                       # Reserved for icon assets
│   └── images/                      # 15 project images and SVGs
│       ├── bg-top.png               # Top banner & hero background
│       ├── c1.png – c6.png          # Art collection card illustrations
│       ├── cs_img.png               # Featured mint character graphic
│       ├── discord.svg              # Discord social icon
│       ├── footer-bg.png            # Footer section background
│       ├── insa.svg                 # Instagram social icon
│       ├── t1.png – t3.png          # Team member portraits
│       └── x.svg                    # X (Twitter) social icon
├── public/                          # Static public assets
│   ├── assets/                      # Static asset fallback mirror
│   │   ├── icons/
│   │   └── images/
│   ├── favicon.svg                  # Site favicon
│   └── icons.svg
├── src/                             # Application source code
│   ├── assets/                      # Bundled assets (imported in React)
│   │   ├── icons/
│   │   └── images/
│   ├── components/                  # Modular React UI components
│   │   ├── CardsSection.jsx         # 6-card art collection grid
│   │   ├── FaqSection.jsx           # Accordion FAQ with React state
│   │   ├── Footer.jsx               # Footer with links & background image
│   │   ├── Hero.jsx                 # Hero headline, copy, and animated button
│   │   ├── MintSection.jsx          # "Mint Your Bat" pricing & socials
│   │   ├── Navbar.jsx               # Navigation bar & section jump links
│   │   ├── RoadmapSection.jsx       # Milestone timeline with dashed connector
│   │   ├── SimpleTextSection.jsx    # Community banner text
│   │   └── TeamSection.jsx          # Team member roster cards
│   ├── pages/                       # Page-level components
│   │   └── Home.jsx                 # Single-page layout assembling all sections
│   ├── routes/                      # Route configuration
│   │   └── AppRoutes.jsx            # React Router v7 setup (BrowserRouter)
│   ├── App.jsx                      # App root component
│   ├── index.css                    # Tailwind CSS v4 (@import, @theme, @utility)
│   └── main.jsx                     # Vite React entry point (StrictMode mount)
├── .gitignore                       # Git ignore rules (node_modules, dist, etc.)
├── .oxlintrc.json                   # Oxlint rules configuration
├── index.html                       # HTML shell with viewport, favicon, and title
├── OVERVIEW.md                      # Quick project guide & architectural cheat-sheet
├── package.json                     # Dependencies and npm scripts
├── package-lock.json                # Locked dependency tree
└── vite.config.js                   # Vite config with React & Tailwind plugins
```

---

## 🚀 Getting Started

### 1. Prerequisites
 18+ installed

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

### 5. Linting
```bash
npm run lint
```
Fast code analysis using [Oxlint](https://oxc.rs).

---

## 🛠️ Tech Stack & Dependencies

* **Framework:** [React 19](https://react.dev/) (`react`, `react-dom`)
* **Build Tool:** [Vite 8](https://vitejs.dev/) (`vite`, `@vitejs/plugin-react`)
* **Routing:** [React Router v7](https://reactrouter.com/) (`react-router`)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`tailwindcss`, `@tailwindcss/vite`)
* **Fonts:** Google Font "Poppins" (imported in `src/index.css`)
* **Linter:** [Oxlint](https://oxc.rs/) (`oxlint`)

---

## 🎨 Tailwind CSS v4 Integration

Tailwind v4 is configured via the official Vite plugin (`@tailwindcss/vite`) without requiring a separate `tailwind.config.js`.

In [`src/index.css`](./src/index.css):
* **Theme variables (`@theme`):**
  * Brand colors: `--color-blue` (`#009dff`), `--color-dark-blue` (`#031227`), `--color-dark` (`#001d49`)
  * Typography: `--font-primary`, `--text-20`, `--text-70`, custom line-heights
  * Containers: `--container-main: 1352px`
* **Custom utilities (`@utility`):**
  * `flex-center`: `@apply flex items-center justify-center;`
  * `section-container`: Max-width container utility for responsive layouts

---

## 🚦 Interactive Features Migrated to React

* **FAQ Accordion (`src/components/FaqSection.jsx`):**
  * Migrated from vanilla DOM manipulation (`faq.js`) to idiomatic React `useState`.
  * Preserves single-open accordion behavior (clicking an item opens it and closes others; clicking the open item closes it).
  * Smooth 300ms chevron icon rotation (`rotate-180`).
  * Accessible with `aria-expanded` and `aria-controls`.
* **Smooth Navigation (`src/components/Navbar.jsx`):**
  * Jump links smoothly navigate to `#minting`, `#roadmap`, `#faq`, and `#team`.
* **Hover Micro-Animations (`src/components/Hero.jsx`, `src/components/MintSection.jsx`):**
  * Expanding circular dark background on hover for action buttons.

---

## 🔒 Original Project Integrity

The original project ([`homepage-2`](../homepage-2)) remains completely unmodified and untouched. All migration, restructuring, and modernizations exist exclusively within this project.
