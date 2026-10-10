# 🔴 TEDxVITPune — Dimes of Dynamism (Edition 10)

> An immersive, cinematic web platform commemorating a decade of ideas worth spreading at **TEDxVITPune**. Engineered with WebGL shaders, continuous stage scroll choreography, real-time audio synthesis, and an editorial dark aesthetic.

[![GitHub Pages](https://img.shields.io/badge/Hosted%20On-GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://asterace305-alt.github.io/tedxvit/)
[![Edition](https://img.shields.io/badge/Edition-10%20Milestone-E62B1E?style=for-the-badge)](https://asterace305-alt.github.io/tedxvit/)
[![Theme](https://img.shields.io/badge/Theme-Dimes%20of%20Dynamism-2563EB?style=for-the-badge)](https://asterace305-alt.github.io/tedxvit/)
[![Tech](https://img.shields.io/badge/Tech-WebGL%20%7C%20Three.js%20%7C%20Vanilla%20ES6-000000?style=for-the-badge)](https://asterace305-alt.github.io/tedxvit/)

---

## 🌐 Live Experience

**Live Website:** [https://asterace305-alt.github.io/tedxvit/](https://asterace305-alt.github.io/tedxvit/)

---

## 🌟 Overview & Concept

**TEDxVITPune Edition 10** marks a monumental decade of intellectual ignition under the theme **“DIMES OF DYNAMISM”**.

This project re-engineers the full architecture of the official TEDxVITPune experience into a performant, dependency-free client application. It bridges the energy of the auditorium stage with an interactive digital archive, featuring real-time WebGL wave physics, a 5-stage cinematic entrance sequence, continuous scroll-linked stage curtains, interactive speaker retrospectives, and 3D memory carousels.

---

## 🏗️ Architecture & Key Features

### 1. 🎬 5-Stage Cinematic Pre-loader & Entry Sequence
* **Stage 0 — Initialization (1.8s):** Dynamic 2D canvas particle constellation with distance-based alpha links and ambient geo-coordinates (`18.5204° N, 73.8567° E · PUNE`).
* **Web Audio API Synth:** Integrated ambient 55Hz sub-bass sine oscillator with gradual gain ramping and toggleable audio state (`Sound: ON / OFF`).
* **Stage 1 — The Hook (3.8s):** Kinetic reveal of the archival quote: *“Some moments don’t shout... But they change everything.”*
* **Stage 2 — High-Speed Theme Reel (6.0s):** Automated rapid-counter cycle stepping through historic TEDxVITPune themes (*Unravel → Resurgence → Fragments → The Space Between → Dimes of Dynamism*).
* **Stage 3 — Call to Action:** High-impact call to action set in **Teko** typography leading directly onto the stage.
* **Skip Mechanism & Transition:** Outgoing stages dynamically animate with `.exit` blur and upward translation; allows instant bypass with full state restoration.

### 2. 🌌 React Bits Threads Background (WebGL Shaders)
* **Custom GLSL Shaders:** Hardware-accelerated GPU wave simulation built with raw WebGL (GLSL ES 3.0).
* **Palette Formulation:** Dual-tone gradient blending TED Red (`#aa2d2d`) with an Electric Navy Blue accent (`#2563EB`).
* **Interactive Physics:** Ray-repulsion reacting smoothly to cursor movement across the viewport with damping spring physics.

### 3. 🎭 Continuous Stage Scroll Choreography
* **Linked Viewport Mechanics:** The hero stage is driven by normalized document scroll coordinates via `requestAnimationFrame`.
* **Stage Curtain Parting:** Left and right velvet curtains smoothly retract outward as the visitor scrolls down.
* **Transformative Stage Windows:** Three archival landscape apertures dynamically scale, rotate, and settle into historical poster frames (*Fragments, The Space Between, Dimes of Dynamism*).

### 4. 🧭 Global Floating Pill Navigation & Archetype Auth
* **Floating Header:** Floating pill container with translucent dark glassmorphism, specular border highlights, and interactive dropdown accordions for **Gallery** and **Discover**.
* **Community Archetype Modal:** Interactive user authentication shell supporting attendee personas (*The Innovator, The Visionary, The Scholar, The Storyteller*) with simulated OTP verification and delegate profiles.

### 5. 🎙️ Previous Speakers Showcase & Audio Visualizer
* Interactive speaker retrospective featuring notable voices including **Sujay Dhake**, **Dr. Vaishali Shukla**, **Avani Gadre**, **Naina Ahluwalia**, and **Prajakta Wadhavkar**.
* Includes full biographical dossiers, talk themes, and a simulated live multi-band audio visualizer.

### 6. 🎞️ Lookbook & 3D Community Rotary Cylinder
* **Lookbook:** Curated 46-photo masonry mosaic archive with category filtering and full-screen lightbox modal inspection.
* **3D Rotary Cylinder:** Three.js-powered 3D perspective memory cylinder allowing visitors to click and drag to rotate historical photos in 3D space.

### 7. 📰 Newsletter “Genesis” Canvas Reader
* Custom canvas document previewer rendering multi-page editions of the official TEDxVITPune newsletter with full-screen zoom and page navigation.

### 8. 🏛️ About Pillars & Pass Registration Checkout
* **Tri-Fold About Section:** Tabbed deep dives into TED, TEDx, and TEDxVITPune's 10-edition milestones.
* **Delegate Pass Checkout:** Interactive pass tier selection with instant modal registration and confirmation toasts.

---

## 🎨 Design System & Color Palette

The visual identity is anchored by a high-contrast dark editorial aesthetic:

| Swatch | Color Name | Hex Code | Role |
| :---: | :--- | :--- | :--- |
| 🔴 | **TED Red** | `#E62B1E` | Primary brand identity, active indicators, CTA glows |
| 🔵 | **Electric Navy Blue** | `#2563EB` / `#1E3A8A` | Futuristic edition accent, sub-elements, wave highlights |
| ⚫ | **Pitch Black** | `#040404` / `#0A0A0A` | Deep auditorium background, stage darkness |
| ⬛ | **Charcoal & Border** | `#121212` / `#222222` | Card surfaces, modal backdrops, structural borders |
| ⚪ | **Clean Pure White** | `#FFFFFF` | Primary headers, high-contrast kinetic titles |

### Typography Hierarchy
* **Display / Hero Headline:** `Teko` (Condensed, assertive, architectural impact)
* **Secondary / Navigation:** `Space Grotesk` (Modern, technical, futuristic)
* **Body / Prose:** `DM Sans` (Clean, legible, humanist)
* **Editorial Quotes:** `Playfair Display` (Classic, literary, poignant)
* **Coordinates / Data:** `DM Mono` (Technical timestamps, edition counters)

---

## 📂 Project Structure

```text
tedxvit/
├── .gitignore               # Excludes large media & local temp files
├── index.html               # Main semantic single-page application entry
├── styles.css               # Complete responsive design system & animations
├── script.js                # Core interactive engine, WebGL, 3D & state
├── Threads.css              # React Bits Threads styling container
├── Threads.jsx              # React Bits Threads component source reference
├── package.json             # Project metadata & npm scripts
├── server.mjs               # Zero-dependency local HTTP preview server
├── public/
│   └── manus-routes.json    # Route structure metadata
└── README.md                # Comprehensive documentation & deployment guide
```

---

## 🚀 Local Development Setup

The project runs completely dependency-free without requiring complex build steps or node modules.

### Option 1: Using Built-in Node Server
```bash
# Clone the repository
git clone https://github.com/asterace305-alt/tedxvit.git
cd tedxvit

# Start the local server
node server.mjs
```
Then open [http://127.0.0.1:4173](http://127.0.0.1:4173) in your browser.

### Option 2: Using Any Static Server
```bash
# Using npx serve
npx serve .

# Or using Python 3
python -m http.server 8000
```

---

## 🌐 GitHub Pages Deployment Guide

This repository is ready to be hosted on **GitHub Pages**:

1. Open your repository on GitHub: [https://github.com/asterace305-alt/tedxvit](https://github.com/asterace305-alt/tedxvit)
2. Click on **Settings** (tab at the top right of the repository).
3. In the left sidebar, click on **Pages** (under the *Code and automation* section).
4. Under **Build and deployment**:
   * **Source**: Select `Deploy from a branch`
   * **Branch**: Select `main`
   * **Folder**: Select `/ (root)`
5. Click **Save**.
6. Wait 30–60 seconds. GitHub Actions will build and deploy the site to:
   👉 **`https://asterace305-alt.github.io/tedxvit/`**

---

## ⚖️ License & Attribution

* **TEDx Branding:** TEDx is an independently organized event licensed by TED. The TED and TEDx names, logos, and trademarks are the property of TED Conferences, LLC.
* **Photography & Assets:** Archival imagery and speaker portraits are curated for prototype and demonstration purposes under fair use.
* **Code License:** [MIT License](LICENSE) — Open source for educational and showcase purposes.
