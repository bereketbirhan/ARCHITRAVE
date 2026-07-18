/* ==========================================================
   ARCH — MAG.  /  main.js
========================================================== */

/* Mobile menu ------------------------------------------------ */
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}

/* Sticky header state ----------------------------------------- */
const header = document.querySelector("header");

if (header) {
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll);
  onScroll();
}

/* Scroll progress bar ------------------------------------------ */
const progressBar = document.getElementById("progressBar");

if (progressBar) {
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = progress + "%";
  });
}

/* Back to top --------------------------------------------------- */
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 400);
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* Scroll reveal --------------------------------------------------- */
const revealEls = document.querySelectorAll(".reveal");

if (revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => io.observe(el));
}

/* Architect search filter (architects.html) ------------------------ */
const searchInput = document.getElementById("searchArchitect");

if (searchInput) {
  const cards = document.querySelectorAll(".architect-card");
  const noResults = document.querySelector(".no-results");

  searchInput.addEventListener("input", () => {
    const term = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const name = card.dataset.name ? card.dataset.name.toLowerCase() : "";
      const country = card.dataset.country ? card.dataset.country.toLowerCase() : "";
      const match = name.includes(term) || country.includes(term);
      card.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });

    if (noResults) {
      noResults.classList.toggle("show", visibleCount === 0);
    }
  });
}

/* Contact form (static — no backend) -------------------------------- */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.getElementById("formStatus");
    if (status) {
      status.textContent = "Message received — thank you. We reply within two business days.";
    }
    contactForm.reset();
  });
}

/* Newsletter form (static — no backend) ------------------------------ */
const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector("input");
    if (input) {
      input.value = "";
      input.placeholder = "Subscribed — welcome aboard.";
    }
  });
}
