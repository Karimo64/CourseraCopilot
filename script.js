// Toggle navigation menu
function toggleMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("show");
}

document.querySelector(".hamburger").addEventListener("click", toggleMenu);

// Smooth scrolling
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Filter projects
function filterProjects(category) {
  document.querySelectorAll("#projects article").forEach(project => {
    project.style.display = project.dataset.category === category || category === "all"
      ? "block"
      : "none";
  });
}

// Lightbox effect
const images = document.querySelectorAll("#projects img");
images.forEach(img => {
  img.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("lightbox");
    modal.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    document.body.appendChild(modal);
    modal.addEventListener("click", () => modal.remove());
  });
});

// Form validation
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Form submitted successfully!");
});