/* ═══════════════════════════════════════════════
   CONFIGURABLE DATA — Edit these to customize
   ═══════════════════════════════════════════════ */

// Words that cycle in the hero typing effect
const TYPED_STRINGS = [
  "IT & Software Engineering Student",
  "Full-Stack Developer",
  "Problem Solver",
  "Lifelong Learner",
];

const CONFIG = {
  // ─── Skills ───
  skills: [
    {
      category: "Languages",
      items: ["Java", "JavaScript", "Python", "SQL", "C#", "C++"],
    },
    {
      category: "Technologies",
      items: ["React" , "Next.js", "Node.js", "SQL Server", "MySQL" , "PyQt6", "Folium", "OR-tools"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "WSL", "Docker", "Postman" ,"Overleaf"],
    },
  ],

  // ─── Projects ───
  projects: [
    {
      title: "VRPTW Desktop App",
      description:
        "A desktop application that solves the Vehicle Routing Problem with Time Windows (VRPTW) using Google OR-Tools. Routes are calculated with distance data from the OSRM API and visualized on an interactive map through a PyQt6 interface.",
      tech: ["Python", "OR-tools", "OSRM API", "PyQt6" , "Folium" , "Pyodbc"],
      github: "https://github.com/qwqntp/Python-VRPTW",
      demo: "",
    },
    {
      title: "Smart School Bus Web App",
      description:
      "A web application for managing and monitoring school bus routes. It provides route visualization, student management, and real-time map tracking through an interactive interface.",
      tech: ["Java" ,"Next.js", "Material UI", "Folium", "MySql", "Spring Boot"],
      github: "https://github.com",
      demo: "",
    },
    {
      title: "Daily Selfie Mobile App",
      description:
        "An Android application that automatically captures a daily selfie using the device camera. The app helps users visually track changes over time by organizing photos in a chronological gallery and sending reminders to take a new photo each day.",
      tech: ["Java", "Android Studio", "Android SDK"],
      github: "https://github.com/qwqntp/DailySelfie",
      demo: ""
    },
    {
      title: "Portfolio Website",
      description:
        "A minimalistic, responsive developer portfolio built with vanilla HTML, CSS, and JavaScript — the site you're looking at right now.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com",
      demo: "",
    },
    {
      title: "Watch Store Desktop App",
      description:
        "A desktop application for managing a watch store's inventory and sales. It features product management, sales tracking, and reporting functionalities through a user-friendly interface.",
      tech: ["Java", "Java Swing" , "JDBC", "SQL Server"],
      github: "https://github.com/qwqntp/Watch-Store",
      demo: "",
    },
    {
      title: "Bottles E-commerce Website",
      description:
        "A responsive e-commerce website for selling water bottles. The site features a modern design, product filtering, and a seamless shopping experience.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/qwqntp/Water-Bottles-Ecommerce",
      demo: "",
    }
  ],
};

/* ═══════════════════════════════════════════════
   RENDER SKILLS
   ═══════════════════════════════════════════════ */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  grid.innerHTML = CONFIG.skills
    .map(
      (group) => `
    <div class="skill-category animate-on-scroll">
      <h3>${group.category}</h3>
      <div class="skill-list">
        ${group.items.map((s) => `<span class="skill-pill">${s}</span>`).join("")}
      </div>
    </div>`
    )
    .join("");
}

/* ═══════════════════════════════════════════════
   RENDER PROJECTS
   ═══════════════════════════════════════════════ */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = CONFIG.projects
    .map(
      (p, i) => `
    <div class="project-card-wrapper animate-on-scroll">
    <div class="project-card">
      <span class="project-number">0${i + 1}</span>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="project-tech">
        ${p.tech.map((t) => `<span>${t}</span>`).join("")}
      </div>
      <div class="project-links">
        <a href="${p.github}" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          Code
        </a>
        ${
          p.demo
            ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                Demo
              </a>`
            : ""
        }
      </div>
    </div>
    </div>`
    )
    .join("");
}

/* ═══════════════════════════════════════════════
   NAVBAR — scroll effect & active link tracking
   ═══════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    // Add scrolled class
    navbar.classList.toggle("scrolled", window.scrollY > 20);

    // Highlight active section link
    let current = "";
    for (const section of sections) {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute("id");
      }
    }
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  });
}

/* ═══════════════════════════════════════════════
   MOBILE MENU
   ═══════════════════════════════════════════════ */
function initMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    menu.classList.toggle("open");
    document.body.style.overflow = menu.classList.contains("open") ? "hidden" : "";
  });

  // Close menu when a link is clicked
  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("open");
      menu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

/* ═══════════════════════════════════════════════
   SCROLL ANIMATIONS
   ═══════════════════════════════════════════════ */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
}

/* ═══════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initTypingEffect();
  initParticles();
});

/* ═══════════════════════════════════════════════
   TYPING EFFECT
   ═══════════════════════════════════════════════ */
function initTypingEffect() {
  const el = document.getElementById("typedText");
  if (!el) return;

  let stringIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = TYPED_STRINGS[stringIndex];

    if (!deleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }
      setTimeout(tick, 70);
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        stringIndex = (stringIndex + 1) % TYPED_STRINGS.length;
      }
      setTimeout(tick, 35);
    }
  }

  setTimeout(tick, 600);
}

/* ═══════════════════════════════════════════════
   PARTICLE NETWORK
   ═══════════════════════════════════════════════ */
function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const particles = [];
  const PARTICLE_COUNT = 50;
  const CONNECTION_DIST = 120;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(94, 164, 255, 0.4)";
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(94, 164, 255, ${0.12 * (1 - dist / CONNECTION_DIST)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}