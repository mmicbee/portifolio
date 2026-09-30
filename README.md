# Millicent Odhiambo — Personal Portfolio

A sleek, modern, and high-performance personal portfolio website for **Millicent Odhiambo** (`mmicbee`), Software Developer specializing in Go, Python, REST APIs, IoT telemetry, and responsive web applications.

Inspired by the design aesthetics of [Folio Tailwind](https://themewagon.github.io/folio-tailwind/), this portfolio features a minimalist monochrome design with warm orange accent highlights (`#FF6B2B`), smooth micro-interactions, dark/light theme switching, and interactive project showcases.

---

## 🌟 Highlights & Features

- **Folio-Tailwind Aesthetic**: Minimalist typography (Google Fonts *PT Sans* & *DM Sans*), subtle noise overlay texture, custom scrollbars, and fluid card hover physics.
- **Dark / Light Theme Toggle**: Persistent mode switcher syncing with user preference and `localStorage`.
- **Interactive Project Showcase**:
  - Filter by category (*All*, *Backend & APIs*, *IoT & Full-Stack*, *FinTech & Systems*).
  - Quick View Modal with architectural breakdowns, technical highlights, and direct GitHub links.
  - Featured projects: **Bionode** (IoT flood & pollution warning from Kijani Hackathon), **Idinex** (Go & ES Modules idea catalog), **AfriPay** (Bitcoin Lightning cross-border payments), **Smart-House-Hunt** (AI property search in Kenya), **CFTFIP**, and **Zone01 Systems & Algorithms** (*push-swap*, *groupie-tracker*, *go-reloaded*).
- **Live Technical Writing Section**:
  - Direct links to real published articles on [Dev.to](https://dev.to/mmicbee):
    - *How Technology Can Help SMEs Measure Their Carbon Emissions*
    - *Compilation 1.0: What Happens When You Hit Compile*
    - *I Was Basically Gaslighted Into Learning DNS...*
    - *My First Day at a Developer Bootcamp*
- **One-Click Clipboard Copy**: Easy copy buttons for direct Email (`ann608888@gmail.com`) and Phone (`+254768035007`) with custom toast feedback.
- **Resume / CV Integration**: Direct download button linked to `Millicent Odhiambo_CV.pdf`.
- **Responsive & Accessible**: Mobile-first drawer navigation, semantic HTML5 structure, and WCAG-compliant color contrast.

---

## 🛠️ Tech Stack

- **HTML5**: Clean, accessible, semantic structure.
- **Tailwind CSS (CDN)**: Rapid, utility-first styling with custom font and palette configuration.
- **Custom CSS (`style.css`)**: Noise textures, custom accent scrollbar, shimmer button effects, and scroll-reveal transitions.
- **JavaScript (`main.js`)**: Framework-free vanilla JS handling theme state, scroll-spying, project filtering, modal dialogs, clipboard actions, and contact form handling.

---

## 📂 Project Structure

```text
portifolio/
├── index.html                  # Main portfolio single-page application
├── style.css                   # Custom theme styling & micro-animations
├── main.js                     # Interactive logic (Theme, Modals, Filters, Clipboard)
├── Millicent Odhiambo_CV.pdf   # Downloadable curriculum vitae
├── README.md                   # Project documentation
└── images/                     # Optimized images and vector SVG assets
    ├── profile-hero.jpg        # Hero section portrait
    ├── profile-about.jpg       # About section portrait
    ├── profile-banner.jpg      # OpenGraph social preview
    ├── project-bionode.svg     # Bionode IoT telemetry illustration
    ├── project-idinex.svg      # Idinex platform illustration
    ├── project-afripay.svg     # AfriPay Lightning payments illustration
    ├── project-smarthouse.svg  # Smart-House-Hunt illustration
    ├── project-cftfip.svg      # Care for the Future illustration
    ├── project-systems.svg     # Zone01 Systems terminal graphic
    └── blog-*.png              # Dev.to article cover images
```

---

## 🚀 Running Locally

You can preview the website locally using any static web server:

### Python:
```bash
python3 -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000) in your browser.

### Node.js (`npx serve`):
```bash
npx serve .
```

---

## 🌐 Deploying to GitHub Pages

Since this repository is hosted on GitHub (`https://github.com/mmicbee/portifolio`), you can publish it in 3 quick steps:

1. **Commit and push all changes**:
   ```bash
   git add .
   git commit -m "feat: complete professional portfolio based on folio-tailwind"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub: `https://github.com/mmicbee/portifolio`
   - Navigate to **Settings** > **Pages** (under the "Code and automation" section).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select Branch: `main` and Folder: `/ (root)`.
   - Click **Save**.

3. **Visit your live website**:
   Your portfolio will be live at:
   `https://mmicbee.github.io/portifolio/`

---

## 📬 Contact & Socials

- **GitHub**: [github.com/mmicbee](https://github.com/mmicbee)
- **LinkedIn**: [linkedin.com/in/millicent-odhiambo-a306552a7](https://www.linkedin.com/in/millicent-odhiambo-a306552a7/)
- **Dev.to**: [dev.to/mmicbee](https://dev.to/mmicbee)
- **Email**: [ann608888@gmail.com](mailto:ann608888@gmail.com)
- **Phone**: +254 768 035 007
