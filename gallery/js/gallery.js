const TOTAL = 26;
const images = Array.from({ length: TOTAL }, (_, i) => ({
  src: `${i + 1}.jpg`,
  thumb: `thumbnails/${i + 1}.jpg`,
  index: i,
}));

let current = 0;

document.addEventListener("DOMContentLoaded", () => {
  buildGrid();

  runLoader("../assets", "galleryLoaded").then(() => {
    document.body.classList.add("loaded");
  });
});

function buildGrid() {
  const grid = document.getElementById("gallery-grid");
  images.forEach((img, i) => {
    const cell = document.createElement("div");
    cell.className = "grid__cell";
    cell.style.animationDelay = `${0.1 + i * 0.05}s`;
    cell.innerHTML = `
      <img src="${img.thumb}" alt="Gallery Image ${i + 1}" loading="${i < 6 ? "eager" : "lazy"}" />
      <div class="grid__cell__overlay">${String(i + 1).padStart(2, "0")}</div>
    `;
    cell.addEventListener("click", () => openLightbox(i));
    grid.appendChild(cell);
  });
}

function openLightbox(idx) {
  current = idx;
  updateLightbox();
  document.getElementById("lightbox").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "";
}

function updateLightbox() {
  const img = document.getElementById("lb-img");
  const counter = document.getElementById("lb-counter");
  img.src = images[current].src;
  img.alt = `Gallery Image ${current + 1}`;
  counter.textContent = `${String(current + 1).padStart(2, "0")} / ${String(TOTAL).padStart(2, "0")}`;
  preloadAround(current);
}

function goTo(idx) {
  current = (idx + TOTAL) % TOTAL;
  updateLightbox();
}

document.getElementById("lb-prev").addEventListener("click", () => goTo(current - 1));
document.getElementById("lb-next").addEventListener("click", () => goTo(current + 1));
document.getElementById("lb-close").addEventListener("click", closeLightbox);
document.getElementById("lb-backdrop").addEventListener("click", closeLightbox);

document.addEventListener("keydown", (e) => {
  const lb = document.getElementById("lightbox");
  if (!lb.classList.contains("active")) return;
  if (e.key === "ArrowLeft") goTo(current - 1);
  if (e.key === "ArrowRight") goTo(current + 1);
  if (e.key === "Escape") closeLightbox();
});

function preloadAround(index) {
  [index - 1, index + 1].forEach((i) => {
    if (i < 0 || i >= images.length) return;
    const img = new Image();
    img.src = images[i].src;
  });
}
