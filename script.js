/* ============================================================
   LAYALI — Site interactions
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

// Reservation form (placeholder handler — connect to email service later)
function handleReservation(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector("button[type='submit']");
  const original = btn.textContent;
  btn.textContent = "Sending...";
  btn.disabled = true;

  // Simulate request (replace with real endpoint, e.g. Formspree, Netlify Forms)
  setTimeout(() => {
    btn.textContent = "Thank you — we'll be in touch";
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
}, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

document.querySelectorAll(".story-text, .story-image, .menu-header, .gallery-header, .visit-info, .visit-form-wrap, .feature-text, .feature-visual")
  .forEach(el => observer.observe(el));
