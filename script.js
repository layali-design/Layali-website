/* ============================================================
   NOVA CAFE - Site interactions
   ============================================================ */

// Sticky nav shadow on scroll
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

// Mobile menu toggle
const burger = document.getElementById("navBurger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  const isOpen = burger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
  burger.setAttribute("aria-expanded", isOpen);
  mobileMenu.setAttribute("aria-hidden", !isOpen);
});

// Close mobile menu on link click
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    burger.classList.remove("open");
    mobileMenu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
  });
});

// Close mobile menu on outside click
document.addEventListener("click", (e) => {
  if (mobileMenu.classList.contains("open") && !nav.contains(e.target)) {
    burger.classList.remove("open");
    mobileMenu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
  }
});

// Reservation form (placeholder handler - connect to email service later)
function handleReservation(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector("button[type='submit']");
  const original = btn.textContent;
  btn.textContent = "Sending...";
  btn.disabled = true;

  // Simulate request (replace with real endpoint, e.g. Formspree, Netlify Forms)
  setTimeout(() => {
    btn.textContent = "Thank you, we'll be in touch";
    setTimeout(() => {
      form.reset();
      btn.textContent = original;
      btn.disabled = false;
    }, 2500);
  }, 800);
}

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

// Section-level elements
document.querySelectorAll(
  ".story-text, .story-image, .menu-header, .gallery-header, " +
  ".visit-info, .visit-form-wrap, .feature-text, .feature-visual, " +
  ".story-pillars, .visit-map, .footer-brand, .footer-cols, " +
  ".brandstrip-text, .brandstrip-image, " +
  ".signatures-header, .sig-card"
).forEach(el => observer.observe(el));

// Gallery cells - stagger via inline delay assigned once
document.querySelectorAll(".g").forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.07}s`;
  observer.observe(el);
});
