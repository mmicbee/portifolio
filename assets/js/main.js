/**
 * Millicent Odhiambo — Portfolio Main JavaScript
 * Interactive behaviors: Dark Mode, Scroll Spy, Reveal Animations,
 * Project Filtering, Project Detail Modals, Clipboard Copy, & Form Handling.
 */

// Project Data Store for Quick View Modals
const projectsData = {
  bionode: {
    title: "Bionode — IoT Flood & Water Pollution Warning System",
    category: "Full Stack & IoT Telemetry",
    award: "Built at Kijani Hackathon 2024",
    banner: "assets/images/project-bionode.svg",
    github: "https://github.com/mmicbee",
    demo: null,
    tags: ["Python", "FastAPI", "React", "TypeScript", "Redis", "IoT Sensors", "Tailwind CSS", "SSE"],
    description: `An end-to-end IoT and software solution designed to safeguard vulnerable communities from flash floods and hazardous water contamination. Bionode connects to a specialized "KijaniBox" hardware sensor hub to stream live water-level and turbidity readings in real time.`,
    highlights: [
      "Built a high-performance Python (FastAPI) backend implementing automated diversion-valve triggers with hysteresis to prevent oscillation.",
      "Engineered real-time telemetry streaming via Server-Sent Events (SSE) and Redis-backed alert queuing.",
      "Designed resilient SQLAlchemy data layer for sensor logging, anomaly spikes, and satellite soil-saturation data integration.",
      "Constructed a responsive, clean real-time monitoring dashboard in React, TypeScript, and Tailwind CSS."
    ]
  },
  idinex: {
    title: "Idinex — Collaborative Idea-Cataloguing Platform",
    category: "Go Backend & Modular Frontend",
    award: "Active Core Project",
    banner: "assets/images/project-idinex.svg",
    github: "https://github.com/mmicbee",
    demo: null,
    tags: ["Go", "REST API", "Vanilla JavaScript", "ES Modules", "Session Auth", "Security"],
    description: `A collaborative idea-cataloguing and evaluation platform where innovators can submit, browse, categorize, and collectively refine ideas. Built with an emphasis on high performance, clean architecture, and framework-free frontend agility.`,
    highlights: [
      "Developed a robust Go backend featuring a full CRUD ideas engine, categorization, and relational SQLite/PostgreSQL schemas.",
      "Engineered a custom authentication service layer handling registration, encrypted credentials, login, and secure session management.",
      "Built a modular frontend using vanilla JavaScript (ES Modules), without heavy framework bloat.",
      "Implemented client-side form validation, an interactive password strength estimation algorithm, and dynamic UI state feedback."
    ]
  },
  afripay: {
    title: "AfriPay — Cross-Border Payments on Bitcoin Lightning",
    category: "FinTech & Distributed Systems",
    award: "Group Project & Financial Engineering",
    banner: "assets/images/project-afripay.svg",
    github: "https://github.com/mmicbee/-bitcoin",
    demo: null,
    tags: ["Go", "Bitcoin Lightning", "REST APIs", "FinTech", "Currency Conversion", "Git Collaboration"],
    description: `A collaborative FinTech initiative exploring next-generation rails for low-cost, near-instantaneous cross-border settlements across African economies. It leverages the Bitcoin Lightning Network to eliminate steep remittance fees and multi-day clearing delays.`,
    highlights: [
      "Explored Bitcoin Lightning Network micro-settlement channels for frictionless inter-African trade.",
      "Built Go service interfaces for automated local-currency exchange conversion quotes (e.g., KES, GHS, NGN).",
      "Researched and designed heuristic fraud-detection filters and transaction telemetry.",
      "Collaborated using rigorous Git branching, code reviews, and API documentation workflows in an agile team."
    ]
  },
  smarthouse: {
    title: "Smart-House-Hunt — AI-Driven Kenyan Rental Engine",
    category: "Go Engine & Web Platform",
    award: "Real-World Kenyan Solution",
    banner: "assets/images/project-smarthouse.svg",
    github: "https://github.com/mmicbee/Smart-house-hunt",
    demo: null,
    tags: ["Go", "REST APIs", "AI Filtering", "Kenya Real Estate", "Web", "PostgreSQL"],
    description: `An intelligent property search and rental match platform designed specifically for Kenyan urban hubs like Nairobi and Kisumu. It solves discovery friction, predatory broker fees, and unreliable listing information through verified data indexing.`,
    highlights: [
      "Architected performant Go backend services for property indexing, locality filtering, and user search queries.",
      "Integrated smart matching filters based on budget, commuter radius, amenities, and security ratings.",
      "Developed structured data storage models for property managers and prospective tenants.",
      "Focused on fast mobile accessibility for Kenyan mobile internet speeds."
    ]
  },
  cftfip: {
    title: "CFTFIP — Care for the Future Integrated Project",
    category: "Modern Frontend Web Platform",
    award: "Community Impact Platform",
    banner: "assets/images/project-cftfip.svg",
    github: "https://github.com/mmicbee/CFTFIP",
    demo: null,
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX", "Accessibility"],
    description: `A digital web platform engineered to deliver accessible, structured information and outreach services for the Care for the Future initiative. Emphasizes clean semantic architecture, accessible navigation, and device responsiveness.`,
    highlights: [
      "Engineered semantic HTML5 layouts adhering to WCAG accessibility principles.",
      "Built clean, modular CSS styles ensuring flawless visual hierarchy across smartphones, tablets, and desktops.",
      "Implemented interactive JavaScript modules for dynamic navigation, dropdowns, and form validations.",
      "Showcases strong fundamentals in frontend organization, cross-browser compatibility, and fast load times."
    ]
  },
  systems: {
    title: "Go Systems Engineering & Zone01 Algorithms",
    category: "Systems Programming & Low-Level Tooling",
    award: "Zone01 Kisumu Peer-Evaluated Excellence",
    banner: "assets/images/project-systems.svg",
    github: "https://github.com/mmicbee/push-swap",
    demo: null,
    tags: ["Go", "Data Structures", "Algorithms", "CLI Tools", "Memory Optimization", "Shell"],
    description: `A portfolio of foundational systems software and algorithmic problem-solving tools built during intensive peer-to-peer software engineering training at Zone01 Kisumu.`,
    highlights: [
      "push-swap: Implemented an optimized two-stack sorting algorithm in Go with strict space and operation count constraints.",
      "groupie-tracker: Created a concurrent Go web service consuming external music and concert data APIs with real-time UI synchronization.",
      "go-reloaded: Developed a CLI text-formatting and tokenizing compiler parsing hex, binary, and capitalization grammar rules.",
      "Achieved 100% peer-review validation and unit-test benchmarks on the 01Edu automated testing platform."
    ]
  }
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavbarAndScrollSpy();
  initRevealAnimations();
  initProjectFiltering();
  initModal();
  initClipboardButtons();
  initContactForm();
  initYear();
});

/* ═══ 1. Theme Management (Light / Dark) ═══ */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  const toggleMobileBtn = document.getElementById("theme-toggle-mobile");
  
  // Check preference
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);
  applyTheme(isDark);

  function toggle() {
    const willBeDark = !document.documentElement.classList.contains("dark");
    applyTheme(willBeDark);
    localStorage.setItem("theme", willBeDark ? "dark" : "light");
  }

  if (toggleBtn) toggleBtn.addEventListener("click", toggle);
  if (toggleMobileBtn) toggleMobileBtn.addEventListener("click", toggle);

  // Listen to system changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches);
    }
  });
}

function applyTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  updateThemeIcons(isDark);
}

function updateThemeIcons(isDark) {
  const moonIcons = document.querySelectorAll(".icon-moon");
  const sunIcons = document.querySelectorAll(".icon-sun");
  
  moonIcons.forEach(icon => {
    icon.style.display = isDark ? "none" : "block";
  });
  sunIcons.forEach(icon => {
    icon.style.display = isDark ? "block" : "none";
  });
}

/* ═══ 2. Navbar, Mobile Menu & Scroll Spy ═══ */
function initNavbarAndScrollSpy() {
  const header = document.getElementById("header");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const desktopNavLinks = document.querySelectorAll(".desktop-nav-link");
  
  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      mobileMenuBtn.setAttribute("aria-expanded", !isExpanded);
      mobileMenu.classList.toggle("hidden");
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll detection
  const sections = ["hero", "services", "work", "skills", "writing", "about", "contact"];
  
  function onScroll() {
    const scrollY = window.scrollY;
    
    // Sticky header style
    if (header) {
      if (scrollY > 25) {
        header.classList.add("bg-white/90", "dark:bg-zinc-950/90", "backdrop-blur-md", "shadow-sm", "shadow-black/5", "border-b", "border-zinc-200/50", "dark:border-zinc-800/60");
      } else {
        header.classList.remove("bg-white/90", "dark:bg-zinc-950/90", "backdrop-blur-md", "shadow-sm", "shadow-black/5", "border-b", "border-zinc-200/50", "dark:border-zinc-800/60");
      }
    }

    // Active Section Spy
    const atBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 70;
    let currentSection = atBottom ? "contact" : "hero";

    if (!atBottom) {
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 140;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            currentSection = sectionId;
            break;
          }
        }
      }
    }

    desktopNavLinks.forEach(link => {
      const href = link.getAttribute("href") || "";
      if (href === `#${currentSection}`) {
        link.classList.add("on", "text-zinc-900", "dark:text-white");
        link.classList.remove("text-zinc-500", "dark:text-zinc-400");
      } else {
        link.classList.remove("on", "text-zinc-900", "dark:text-white");
        link.classList.add("text-zinc-500", "dark:text-zinc-400");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ═══ 3. Intersection Observer for Scroll Reveals ═══ */
function initRevealAnimations() {
  const reveals = document.querySelectorAll(".reveal");
  const revealAll = () => reveals.forEach(el => el.classList.add("in"));

  if (!("IntersectionObserver" in window)) {
    revealAll();
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0,
    rootMargin: "0px 0px -10% 0px"
  });

  reveals.forEach(el => observer.observe(el));

  // Failsafe: never leave content hidden. If the observer never fires
  // (unsupported/edge browsers, restored scroll positions, etc.) reveal
  // anything still hidden shortly after load.
  const failsafe = () => {
    let hidden = 0;
    reveals.forEach(el => { if (!el.classList.contains("in")) { el.classList.add("in"); hidden++; } });
    if (hidden) observer.disconnect();
  };
  window.addEventListener("load", () => setTimeout(failsafe, 2500), { once: true });
  setTimeout(failsafe, 4000);
}

/* ═══ 4. Project Category Filtering ═══ */
function initProjectFiltering() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const cardCats = (card.getAttribute("data-categories") || "").split(" ");
        if (category === "all" || cardCats.includes(category)) {
          card.style.display = "";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "none";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.96)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });
}

/* ═══ 5. Project Quick View Modal ═══ */
function initModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const modalTriggers = document.querySelectorAll(".view-project-btn");

  if (!modal) return;

  function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    document.getElementById("modal-title").textContent = data.title;
    document.getElementById("modal-category").textContent = data.category;
    document.getElementById("modal-award").textContent = data.award;
    document.getElementById("modal-banner").src = data.banner;
    document.getElementById("modal-banner").alt = data.title;
    document.getElementById("modal-description").textContent = data.description;

    // Highlights
    const hlContainer = document.getElementById("modal-highlights");
    hlContainer.innerHTML = "";
    data.highlights.forEach(hl => {
      const li = document.createElement("li");
      li.className = "flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed";
      li.innerHTML = `<span class="text-accent mt-0.5 font-bold shrink-0">✦</span><span>${hl}</span>`;
      hlContainer.appendChild(li);
    });

    // Tags
    const tagsContainer = document.getElementById("modal-tags");
    tagsContainer.innerHTML = "";
    data.tags.forEach(tag => {
      const span = document.createElement("span");
      span.className = "text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 px-3 py-1 rounded-full font-medium";
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });

    // Links
    const githubLink = document.getElementById("modal-github-link");
    if (githubLink) {
      githubLink.href = data.github;
    }

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  modalTriggers.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute("data-project-id");
      openModal(projectId);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

/* ═══ 6. Clipboard Copy & Toast Feedback ═══ */
function initClipboardButtons() {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach(btn => {
    btn.addEventListener("click", async () => {
      const textToCopy = btn.getAttribute("data-copy-text");
      const label = btn.getAttribute("data-copy-label") || "Text";
      
      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`✓ Copied ${label} to clipboard!`);
      } catch (err) {
        // Fallback for older browsers or permission limitations
        const input = document.createElement("input");
        input.value = textToCopy;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        showToast(`✓ Copied ${label} to clipboard!`);
      }
    });
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

/* ═══ 7. Interactive Contact Form ═══ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const successState = document.getElementById("form-success");
  const resetBtn = document.getElementById("form-reset-btn");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("fname")?.value.trim();
    const email = document.getElementById("femail")?.value.trim();
    const subject = document.getElementById("fsubject")?.value.trim() || "Project Inquiry";
    const projectType = document.getElementById("fproject-type")?.value || "Backend Development";
    const message = document.getElementById("fmessage")?.value.trim();

    if (!name || !email || !message) {
      showToast("⚠️ Please fill in all required fields.");
      return;
    }

    // Submit animation simulation & instant mailto prefill option
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn ? submitBtn.innerHTML : "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg> Sending message...
      `;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
      form.classList.add("hidden");
      if (successState) {
        successState.classList.remove("hidden");
        // Prefill direct email link
        const directEmailLink = document.getElementById("direct-mailto-link");
        if (directEmailLink) {
          const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterest: ${projectType}\n\nMessage:\n${message}`);
          directEmailLink.href = `mailto:ann608888@gmail.com?subject=${encodeURIComponent(`[Portfolio] ${subject}`)}&body=${body}`;
        }
      }
      showToast("🎉 Thank you! Your message has been prepared.");
    }, 800);
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      form.reset();
      form.classList.remove("hidden");
      if (successState) successState.classList.add("hidden");
    });
  }
}

/* ═══ 8. Dynamic Copyright Year ═══ */
function initYear() {
  const yr = document.getElementById("year");
  if (yr) {
    yr.textContent = new Date().getFullYear();
  }
}
