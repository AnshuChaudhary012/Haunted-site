# Code Review and Improvement Guide

This review is based on the current React, Vite, and Tailwind code in `src/`. It is a learning guide: the issues below are normal parts of building a first version, and each one has a practical way to improve it.

## Fix these first

### 1. Repair text encoding and spelling

Some visible strings contain corrupted characters, for example `Whatâ€™s` in `src/components/FaqSection.jsx` and the menu symbols in `src/components/Navbar.jsx`. This usually happens when a file is saved or copied using the wrong text encoding. Some content also has spelling mistakes such as `ersonalized`, `thet`, and `riyalties` in `CardsSection.jsx`.

**How to improve it:** save source files as UTF-8 in your editor, replace corrupted text with the intended punctuation (or use plain ASCII punctuation), and proofread user-facing text. In VS Code, the encoding is shown in the bottom status bar; choose **Save with Encoding → UTF-8** when needed.

### 2. Keep component data clean

`CardsSection.jsx` still defines `heightClass` for every card, but the component no longer uses that property. Keeping unused data makes it harder to tell which settings affect the page.

**How to improve it:** remove properties that are no longer needed. For repeated content, keep only the values the JSX actually reads, such as `img`, `title`, and `desc`.

### 3. Make FAQ interactions fully accessible

The FAQ uses React state, which is a good approach. Its answer panel currently toggles when clicked anywhere inside the answer, though, and the `role="region"` references the question button with `aria-labelledby`, so keep those IDs paired as the code evolves. The question text is also duplicated four times.

**How to improve it:** make the question button the sole toggle control, put the answer in a normal region that is revealed by that button, and give each FAQ entry its own accurate question and answer in the data array. Use a stable item ID if entries may later be reordered.

### 4. Avoid fixed layouts that fight content

The responsive pass has improved several areas, but some layout decisions still rely on large fixed spacing values and manual `<br />` breaks, particularly in the hero and section spacing. These can look awkward at intermediate widths or when text changes. The roadmap also uses a fixed `min-height` per item, so long translations or smaller devices can leave excess space.

**How to improve it:** prefer responsive spacing and typography (`sm:`, `md:`, `lg:`), natural wrapping, `min-height` only when it has a clear purpose, and fluid widths such as `w-full max-w-*`. Check at narrow phone width, a typical phone width, tablet width, and desktop width. Use browser dev tools to look for horizontal scrolling.

### 5. Reduce image download size

The production build reports very large image assets: the hero background is about 9 MB and the featured mint image about 4 MB. These can make the page slow on mobile connections even when the layout fits.

**How to improve it:** resize images to the largest dimensions actually displayed, export photographic artwork as WebP or AVIF when visual quality allows, and compress PNGs that need transparency. Keep useful `width` and `height` attributes to reduce layout shifts. For below-the-fold images, consider `loading="lazy"`.

## Maintainability improvements

### 6. Reduce duplicate asset copies

Similar image files are present in `assets/`, `public/assets/`, and `src/assets/`. Components import from `src/assets`, so the other copies can be confusing and make it unclear which file is the source of truth.

**How to improve it:** choose one convention. For assets imported by React, keep them in `src/assets`. Reserve `public/` for files that must be served at a stable URL without being imported. Remove duplicate copies only after confirming nothing references them.

### 7. Use semantic elements and meaningful labels

The navbar's brand is currently a generic `div`, and the mint illustration has the generic alt text `img_for_sec_section`. The hero CTA is a button with no action yet, which can mislead visitors because buttons imply an interaction.

**How to improve it:** make the brand a link to `/`, write concise alt text that describes the image's purpose (or `alt=""` if decorative), and use a real link for navigation or wire the button to an action. Avoid controls that appear active but do nothing.

### 8. Keep accessibility details in sync

The mobile menu has useful ARIA labels and expanded state. Ensure its closed state cannot be reached with keyboard navigation, and consider closing it on Escape. The FAQ has an accordion structure but should retain correct question-to-answer IDs and keyboard behavior.

**How to improve it:** test the page using only Tab, Shift+Tab, Enter, and Escape. Check visible focus, link targets, expanded/collapsed state, and whether hidden menu items are skipped. Respect reduced-motion preferences for decorative animation.

### 9. Keep documentation accurate

`README.md` describes the project structure and has several mojibake characters in headings and tree characters. Documentation should match the current code, not a previous migration state.

**How to improve it:** correct the encoding, update descriptions when files change, and prefer a short set of accurate setup commands over claims that might become stale.

## Useful habits and techniques

- **Change one section at a time.** Make a small change, open the page, and check both a phone-sized viewport and desktop before continuing.
- **Use browser responsive mode.** Check widths around 320 px, 375 px, 768 px, and 1280 px. These are checkpoints, not a substitute for testing the actual content.
- **Inspect overflow.** In dev tools, temporarily add `* { outline: 1px solid red; }` or inspect the element wider than the viewport. Remove debugging styles after use.
- **Use React state for UI state.** Avoid direct DOM changes for menus or accordions; let state decide what is rendered and what ARIA attributes say.
- **Keep repeated content in arrays.** Give each item a stable ID and map it with that ID as the React `key`, rather than using the array index when order can change.
- **Use semantic HTML first.** Links navigate, buttons perform actions, headings describe page structure, and images need useful alt text.
- **Run the checks already in the project.** `npm run build` checks that Vite can compile the app; `npm run lint` runs Oxlint. A successful build does not prove the design works at every viewport, so also inspect it in a browser.
- **Review the diff before finishing.** `git diff` helps catch accidental changes and unused code.

## Suggested order

1. Fix encoding and visible copy.
2. Optimize the largest images.
3. Remove unused card fields and duplicate assets after checking references.
4. Improve FAQ and mobile-menu keyboard behavior.
5. Recheck the page at phone, tablet, and desktop widths.

