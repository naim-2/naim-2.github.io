# Naim Salim — Portfolio Documentation

**Version:** 2.0  
**Design Theme:** Nairobi Nights (Dark Luxury)  
**Last Updated:** April 2026

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Design System](#design-system)
4. [Pages & Features](#pages--features)
5. [Interactive Features](#interactive-features)
6. [Customization Guide](#customization-guide)
7. [Adding New Content](#adding-new-content)
8. [Performance Notes](#performance-notes)
9. [Browser Compatibility](#browser-compatibility)

---

## Project Overview

This is a fully custom, multi-page HTML/CSS/JS portfolio website for **Naim Salim** — Full Stack & Mobile Software Developer, IBM & Oracle Certified, and 2024 Magna Cum Laude graduate from USIU-Africa.

The portfolio is built with **zero frameworks** — pure HTML5, CSS3, and vanilla JavaScript. It loads quickly, works offline (once loaded), and requires no build tools or package managers.

### Key Design Decisions

| Decision                                | Rationale                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------- |
| No frameworks                           | Maximum portability, zero build steps, works by simply opening HTML files |
| Dark luxury aesthetic                   | Memorable, professional, stands out from typical developer portfolios     |
| Shared CSS + JS files                   | DRY principle — update the design in one place, affects all pages         |
| Serif display font (Cormorant Garamond) | Distinctive, editorial quality — avoids generic AI/tech clichés           |
| Gold accent color                       | Warmth, professionalism, ties to East African cultural aesthetics         |

---

## File Structure

```
portfolio/
│
├── index.html                  ← Homepage (hero, stats, featured work)
├── about.html                  ← About Me (bio, quick info, interests)
├── academics.html              ← Academic background (USIU-Africa, Magna Cum Laude)
├── experience.html             ← Work history (timeline format)
├── projects.html               ← Portfolio projects (modal detail views)
├── data_science_and_ai.html    ← Cyber Shujaa DS/AI assignments (Week 1–8)
├── skills.html                 ← Filterable skills grid with proficiency badges
├── certifications.html         ← Professional certifications with verification links
├── courses.html                ← Completed short courses with certificates
├── contact.html                ← Contact form + links (LinkedIn, GitHub, Email)
│
├── assets/
│   ├── css/
│   │   └── styles.css          ← ENTIRE design system (all styles for all pages)
│   ├── js/
│   │   └── main.js             ← Shared JavaScript (scroll effects, nav, etc.)
│   ├── images/
│   │   └── logo.png            ← (optional) your logo image
│   ├── pdfs/
│   │   ├── eCertificate.pdf
│   │   ├── eCertificate (1).pdf
│   │   ├── eCertificate (2).pdf
│   │   ├── Coursera 05WK7JHDDPFV.pdf
│   │   ├── Coursera GUJ3VX2BBKML.pdf
│   │   ├── Coursera BZMCMUKE2ZAM.pdf
│   │   ├── Coursera D8LF9JVHEP3L.pdf
│   │   ├── techbiz_certificate.pdf
│   │   ├── ea_eye_certificate.pdf
│   │   └── [cisco course PDFs]
│   └── videos/
│       └── navi.mp4            ← NAVI demo video (if available)
│
└── DOCUMENTATION.md            ← This file
```

---

## Design System

All design tokens live in `assets/css/styles.css` under `:root`.

### Color Palette

| Variable           | Value                    | Usage                           |
| ------------------ | ------------------------ | ------------------------------- |
| `--bg-primary`     | `#06060e`                | Page background                 |
| `--bg-secondary`   | `#0d0d1a`                | Alternate sections              |
| `--bg-card`        | `#101020`                | Card backgrounds                |
| `--gold`           | `#D4A853`                | Primary accent, headings, links |
| `--gold-light`     | `#f0c870`                | Hover states                    |
| `--gold-dim`       | `rgba(212,168,83,0.12)`  | Subtle gold fills               |
| `--text-primary`   | `#f0f0f8`                | Main body text                  |
| `--text-secondary` | `#9494b8`                | Subdued text                    |
| `--text-muted`     | `#5a5a7a`                | Placeholder, labels             |
| `--border`         | `rgba(212,168,83,0.18)`  | Gold-tinted borders             |
| `--border-subtle`  | `rgba(255,255,255,0.06)` | Subtle dividers                 |

### Typography

| Font                   | Usage                              | Weight                  |
| ---------------------- | ---------------------------------- | ----------------------- |
| **Cormorant Garamond** | Headings, hero names, display text | 300, 400, 600           |
| **Plus Jakarta Sans**  | Body, UI labels, badges, buttons   | 300, 400, 500, 600, 700 |

Both fonts are loaded via Google Fonts. For offline use, download and host locally.

### Spacing Scale

- Section padding: `5rem 2rem` (desktop), `3rem 1.25rem` (mobile)
- Card padding: `2rem`
- Gap between cards: `1.5rem`
- Max container width: `1100px`

### Badge System

```html
<span class="badge badge-advanced">Advanced</span>
<span class="badge badge-intermediate">Intermediate</span>
<span class="badge badge-beginner">Beginner</span>
```

---

## Pages & Features

### `index.html` — Homepage

- **Animated hero** with grid background and radial gradients
- **Typewriter effect** cycling through roles (Full Stack Developer, Mobile Engineer, etc.)
- **Animated counter stats** (certifications, companies, projects, chess leagues)
- **Scroll-triggered section reveals** for all content blocks
- **Featured Projects** preview (3 cards)
- **Skills chips** showcase
- **CTA section** linking to Contact

### `about.html` — About Me

- **Sticky sidebar** with photo placeholder and quick-info cards
- **Rich bio** with bolded key terms
- **Interest chips** (topics and hobbies)
- Responsive: sidebar stacks above bio on mobile

### `academics.html` — Academic Background

- **Two-column layout**: left = logo/meta, right = full details
- Honors badge (Magna Cum Laude)
- Coursework and technologies displayed as chips
- Activities as bullet list with gold emoji markers

### `experience.html` — Work Experience

- **Vertical timeline** with gold connector line
- Dot markers for each company
- Company logo + name + type header
- Role cards with date badge and tech tag chips
- Certificate links where available

### `projects.html` — Projects

- **Major Projects** (NAVI, LUMEA, USIU Map) and **Minor Projects** sections
- **Modal detail views** — click any project card to open a detailed overlay
- "Live Demo" button directly on the Sentiment Analysis card
- All modals include: overview, features, tech stack, impact
- `data-modal` attribute on cards triggers the modal system

### `data_science_and_ai.html` — Data Science

- **Week-by-week timeline** (Weeks 1–8 of Cyber Shujaa)
- Large week number display with date
- Tasks checklist with gold check marks
- Direct links to Kaggle and Google Colab notebooks

### `skills.html` — Skills

- **Filter buttons** by category: All / Frontend / Backend / Mobile / AI & Data / Cloud & DevOps / Database / Management
- Each skill card shows **devicon images** where available
- Three-tier badge system: Advanced / Intermediate / Beginner
- Legend at bottom explaining the tiers

### `certifications.html` — Certifications

- **Card grid** with issuer logo, title, date, description, and tags
- "Verify Badge" links for Oracle certifications (opens external verification)
- "View Certificate" links for local certificate files
- 7 certifications total (Oracle ×3, Google, IBM ×2, Vanderbilt)

### `courses.html` — Short Courses

- **Card grid** format matching certifications
- 7 Cisco + IBM courses
- Each with provider, duration label, topic chips, and certificate link

### `contact.html` — Contact

- **Two-column layout**: info + form
- Availability status indicator (green dot)
- Styled `mailto:` form — opens default email client
- LinkedIn, GitHub, Email, and Location contact links
- Responsive: columns stack vertically on mobile

---

## Interactive Features

All handled by `assets/js/main.js`:

| Feature                 | How It Works                                                                  |
| ----------------------- | ----------------------------------------------------------------------------- |
| **Scroll Progress Bar** | `width` animated based on `scrollY / (body.height - window.height)`           |
| **Sticky Navbar**       | Adds `.scrolled` class at scroll >50px (darkens background)                   |
| **Hamburger Menu**      | Toggles `.open` on `.hamburger` and `.nav-drawer`                             |
| **Back to Top Button**  | Fixed button, appears after 400px scroll                                      |
| **Reveal on Scroll**    | `IntersectionObserver` adds `.visible` class to `.reveal` elements            |
| **Typewriter Effect**   | Cycles through phrase array, typing and deleting with `setTimeout`            |
| **Skill Filter**        | Toggles `display:none` on `.skill-card` elements by `data-category` attribute |
| **Modal System**        | `data-modal` attribute on trigger, matching `id` on overlay                   |
| **Counter Animation**   | `IntersectionObserver` increments numbers on `data-count` elements            |
| **Contact Form**        | Submits as `mailto:` — opens email client with pre-filled fields              |

---

## Customization Guide

### Changing Colors

Edit `:root` in `assets/css/styles.css`:

```css
:root {
  --gold: #d4a853; /* Change to any accent color */
  --bg-primary: #06060e; /* Change for light theme */
}
```

### Changing Fonts

Replace the `@import` at the top of `styles.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont&display=swap");
```

Then update:

```css
--font-display: "YourFont", Georgia, serif;
--font-body: "YourFont", system-ui, sans-serif;
```

### Switching to Light Mode

For a light theme, change these variables:

```css
--bg-primary: #f8f8fc;
--bg-secondary: #f0f0f8;
--bg-card: #ffffff;
--text-primary: #0a0a14;
--text-secondary: #4a4a6a;
--border-subtle: rgba(0, 0, 0, 0.07);
```

---

## Adding New Content

### Add a New Project Card

In `projects.html`, copy an existing `.card.project-card` block and update:

```html
<div class="card project-card reveal" data-modal="modal-yourproject">
  <div class="project-card-top">
    <span class="project-type">Type · Stack</span>
    <span class="project-arrow">↗</span>
  </div>
  <h3 class="project-title">Your Project Name</h3>
  <p class="project-desc">Short description...</p>
  <div class="project-tags">
    <span class="project-tag">Tech1</span>
    <span class="project-tag">Tech2</span>
  </div>
</div>
```

Then add a matching modal:

```html
<div class="modal-overlay" id="modal-yourproject">
  <div class="modal-box">
    <div class="modal-header">
      <div class="modal-title">Your Project Name</div>
      <button class="modal-close">✕</button>
    </div>
    <div class="modal-body">
      <p>Full description...</p>
    </div>
  </div>
</div>
```

### Add a New Certification

In `certifications.html`, inside `.cert-grid`, add:

```html
<div class="card cert-card reveal">
  <div class="cert-issuer-row">
    <img src="issuer-logo-url" alt="Issuer" class="cert-issuer-logo" />
    <span class="cert-issuer-name">Issuer Name</span>
  </div>
  <div class="cert-title">Certification Title</div>
  <div class="cert-date">Issued: Month Year</div>
  <p class="cert-desc">Description...</p>
  <div class="cert-actions">
    <a href="path/to/cert.pdf" target="_blank" class="btn btn-ghost"
      >View Certificate</a
    >
  </div>
</div>
```

### Add a New Skill Category

In `skills.html`, add a new skill card with a `data-category` attribute matching an existing or new filter:

```html
<div class="card skill-card reveal" data-category="newcategory">
  <div class="skill-card-title">Category Name</div>
  <div class="skill-item">
    <span class="skill-item-name">Skill Name</span>
    <span class="badge badge-intermediate">Intermediate</span>
  </div>
  <!-- more skill-items -->
</div>
```

Add a matching filter button:

```html
<button class="filter-btn" data-filter="newcategory">New Category</button>
```

### Add a New Data Science Week

In `data_science_and_ai.html`, inside `.ds-week-grid`:

```html
<div class="card reveal">
  <div class="ds-card">
    <div class="ds-week-label">
      <span class="ds-week-number">9</span>
      <span class="ds-week-text">Week</span>
      <div class="ds-date">DD/MM/YYYY</div>
    </div>
    <div>
      <div class="ds-card-title">Assignment Title</div>
      <p class="ds-card-body">Description...</p>
      <ul class="ds-tasks">
        <li>Task 1</li>
        <li>Task 2</li>
      </ul>
      <a
        href="link"
        target="_blank"
        class="btn btn-outline"
        style="font-size:.78rem;"
        >View Project</a
      >
    </div>
  </div>
</div>
```

---

## Performance Notes

- **No frameworks loaded** — no jQuery, no Bootstrap, no React overhead
- **Google Fonts** load asynchronously via `@import` — if you need full offline support, download and host the `.woff2` files locally
- **Devicon images** are loaded from a CDN (jsdelivr) — cache on first load, then served fast
- **CSS animations** use `transform` and `opacity` only — GPU-composited, no layout thrash
- **IntersectionObserver** for scroll effects — far more performant than `scroll` event listeners
- **No JavaScript frameworks** — the `main.js` file is ~100 lines and executes in <5ms

### Hosting Recommendations

The portfolio is a set of static files. It can be hosted on:

- **GitHub Pages** (free, custom domain support)
- **Netlify** (free, drag-and-drop deployment)
- **Vercel** (free, fast global CDN)
- **Cloudflare Pages** (free, extremely fast)

---

## Browser Compatibility

| Browser     | Support                                                      |
| ----------- | ------------------------------------------------------------ |
| Chrome 88+  | ✅ Full                                                      |
| Firefox 85+ | ✅ Full                                                      |
| Safari 14+  | ✅ Full                                                      |
| Edge 88+    | ✅ Full                                                      |
| Opera 74+   | ✅ Full                                                      |
| IE 11       | ❌ Not supported (CSS variables, Grid, IntersectionObserver) |

The `backdrop-filter` (glassmorphism effect on navbar) requires `-webkit-backdrop-filter` for Safari — already included in the CSS.

---

## Changelog

### v2.0 (April 2026)

- Complete redesign — "Nairobi Nights" dark luxury aesthetic
- Replaced Bootstrap with custom pure CSS design system
- Added scroll progress bar, back-to-top button, reveal animations
- Hero typewriter effect and animated counter stats
- Timeline-based experience page
- Filterable skills grid
- Modal system for project details
- Week-by-week Data Science page
- Shared `styles.css` and `main.js` across all pages
- Mobile hamburger drawer navigation
- Full documentation added

### v1.0 (2025)

- Initial Bootstrap-based multi-page portfolio
- Basic navbar and card layouts
- Tabbed skills page

---

_Built with care by Naim Salim · abdulhakimnaim@gmail.com_
