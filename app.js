// Mobile menu functionality
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuOverlay = document.querySelector(".menu-overlay");
const menuBackdrop = document.querySelector(".menu-backdrop");

function openMenu() {
  menuOverlay.classList.add("active");
  menuBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  menuOverlay.classList.remove("active");
  menuBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
menuBackdrop.addEventListener("click", closeMenu);

// Add click animation to CTA button
document.querySelector(".cta-button").addEventListener("click", function () {
  alert("Navigating to the full article...");
});

// Add click handlers for news items
document.querySelectorAll(".news-item").forEach((item) => {
  item.addEventListener("click", function () {
    const title = this.querySelector(".news-title").textContent;
    alert(`Opening article: ${title}`);
  });
});

// Add click handlers for featured items
document.querySelectorAll(".featured-item").forEach((item) => {
  item.addEventListener("click", function () {
    const title = this.querySelector(".featured-title").textContent;
    alert(`Opening featured article: ${title}`);
  });
});

// Add click handlers for menu items
document.querySelectorAll(".menu-nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = this.textContent;
    alert(`Navigating to ${section} section`);
    closeMenu();
  });
});
