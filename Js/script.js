// ✅ Loader: hide when page is fully loaded
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 500);
  }
});

// ✅ Mobile Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });
}

// ✅ Responsive Gallery Fix
function resizeGallery() {
  const imgs = document.querySelectorAll(".gallery-grid img");
  imgs.forEach(img => {
    img.style.width = "100%";      // fit grid cell
    img.style.height = "200px";    // same height
    img.style.objectFit = "cover"; // crop nicely
  });
}
resizeGallery();
window.addEventListener("resize", resizeGallery);

// ✅ Lightbox Popup
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

if (galleryImages && lightbox && lightboxImg && closeBtn) {
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Close lightbox on click outside image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}
