
# Quick Project Overview — Haunted Layout

A concise guide to understanding this project, how it is built, and how each piece fits together.

---

## ⚡ In 30 Seconds

* **What is this?** A modern Web3 / NFT single-page landing page migrated from vanilla HTML + CSS + JS to **React 19 + Vite + React Router v7 + Tailwind CSS v4**.
* **Dev Server:** Run `npm run dev` and open `http://localhost:5173`.
* **Production Build:** Run `npm run build` to output the optimized bundle to `dist/`.
* **Linter:** Run `npm run lint` powered by `oxlint`.

---

## 🧭 Architecture at a Glance

The app follows a clean, single-direction component hierarchy:

```text
index.html (Mounts #root)
  └── src/main.jsx (StrictMode entry point)
        └── src/App.jsx
              └── src/routes/AppRoutes.jsx (BrowserRouter)
                    └── Route path="/" ➔ src/pages/Home.jsx
                          ├── Background Glows (Absolute blurred circles)
                          ├── Top Section (bg-top.png)
                          │     ├── Navbar.jsx (Logo + Navigation links)
                          │     └── Hero.jsx (Title, Description, CTA button)
                          ├── MintSection.jsx (Mint details, SOL price, Social icons)
                          ├── CardsSection.jsx (6-card Art Collection grid)
                          ├── RoadmapSection.jsx (Quarterly timeline with dashed line)
                          ├── SimpleTextSection.jsx (Community banner)
                          ├── FaqSection.jsx (Interactive accordion with React state)
                          ├── TeamSection.jsx (3 team member cards)
                          └── Footer.jsx (Links, email, community, footer-bg.png)
```

---

## 🧩 Component Breakdown

| Component | File Path | What It Does |
| :--- | :--- | :--- |
| **Navbar** | `src/components/Navbar.jsx` | Header logo and links (`#minting`, `#roadmap`, `#faq`, `#team`). Hides links on mobile screens (`max-md:hidden`). |
| **Hero** | `src/components/Hero.jsx` | Main headline, subtitle, and an expanding circle hover-animated button ("Get Started"). |
| **MintSection** | `src/components/MintSection.jsx` | Featured character image (`cs_img.png`), pricing tiers (SOL), "Coming soon" button, and SVG social links. |
| **CardsSection** | `src/components/CardsSection.jsx` | Responsive grid (1 col mobile, 2 col tablet, 3 col desktop) showcasing the 6 collection features (`c1.png` - `c6.png`). |
| **RoadmapSection** | `src/components/RoadmapSection.jsx` | Alternating timeline milestones (Q-1 2022, Q-4 2021) connected by a central dashed line. |
| **SimpleTextSection**| `src/components/SimpleTextSection.jsx`| Highlighted community text banner between sections. |
| **FaqSection** | `src/components/FaqSection.jsx` | Accordion questions with smooth chevron rotation. Controlled via React `useState` (first question open by default). |
| **TeamSection** | `src/components/TeamSection.jsx` | Grid displaying the team members (`t1.png`, `t2.png`, `t3.png`), names, and roles. |
| **Footer** | `src/components/Footer.jsx` | Footer banner (`footer-bg.png`), brand description, contact email, resource navigation, and social links. |

---

## 🔄 Vanilla JS vs React: How Interactivity Changed

### The Old Way (`homepage-2/src/js/faq.js`)
* Used direct DOM queries: `document.querySelectorAll(".faq-item")`.
* Manually toggled `.hidden` and `.rotate-180` CSS classes using `classList.add()` / `remove()`.
* Imperative and prone to DOM synchronization issues.

### The New React Way (`Haunted-layout/src/components/FaqSection.jsx`)
* Uses declarative state:
  ```jsx
  const [openIndex, setOpenIndex] = useState(0); // Item 0 open initially

  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };
  ```
* UI renders conditionally: `isOpen ? "" : "hidden"`.
* Chevron rotates conditionally: `isOpen ? "rotate-180" : ""`.
* Includes full accessibility attributes (`aria-expanded`, `aria-controls`, `role="region"`).

---

## 🎨 Styling with Tailwind CSS v4

All styling is configured in `src/index.css` using modern Tailwind v4 syntax:

* **Theme Tokens (`@theme`):**
  * `--color-blue: #009dff`
  * `--color-dark-blue: #031227`
  * `--color-dark: #001d49`
  * `--font-primary: "Poppins", sans-serif`
  * Custom font sizes: `--text-20: 20px`, `--text-70: 70px`
  * Custom leading: `--leading-100`, `--leading-120`, `--leading-124`, `--leading-205`
* **Custom Utilities (`@utility`):**
  * `.flex-center` ➔ Flexbox center shortcut
  * `.section-container` ➔ Centered max-width container (`max-w-[1352px]`)

---

## 🛠️ Where to Make Common Edits

1. **Change Text & Content:** Edit the respective component in `src/components/`. For cards, data is stored in the `CARDS_DATA` array in `CardsSection.jsx`. For FAQs, edit `FAQ_ITEMS` in `FaqSection.jsx`.
2. **Change or Add Images:** Place new images in `src/assets/images/` and import them in the relevant component.
3. **Change Colors or Fonts:** Edit the `@theme` block in `src/index.css`.
4. **Add New Pages / Routes:** Add routes in `src/routes/AppRoutes.jsx` using React Router's `<Route path="/your-path" element={<YourComponent />} />`.
