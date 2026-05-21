document.addEventListener("DOMContentLoaded", () => {
  runLoader("assets", "homeLoaded").then(() => {
    document.body.classList.add("loaded");
    setTimeout(() => {
      document.body.classList.add("nav-settled");
    }, 1200);
    initParallax();
    initStickyNote();
  });
});

function initParallax() {
  const assets = [
    { el: document.getElementById("shells"),  depth: 0.022 },
    { el: document.getElementById("dogs"),    depth: 0.013 },
    { el: document.getElementById("rock"),    depth: 0.032 },
    { el: document.getElementById("fragile"), depth: 0.018 },
    { el: document.getElementById("food1"),   depth: 0.027 },
    { el: document.getElementById("apple"),   depth: 0.010 },
    { el: document.getElementById("food2"),   depth: 0.020 },
  ].filter((a) => a.el);

  // Normalised mouse offset (-1 to +1 on each axis)
  let tx = 0, ty = 0;
  let cx = 0, cy = 0;

  window.addEventListener("mousemove", (e) => {
    tx = (e.clientX / window.innerWidth - 0.5) * 2;
    ty = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function tick() {
    cx += (tx - cx) * 0.07;
    cy += (ty - cy) * 0.07;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    assets.forEach(({ el, depth }) => {
      // CSS `translate` composites before `transform`, so the existing
      // translate(-50%,-50%) centering is unaffected.
      el.style.translate = `${cx * vw * depth}px ${cy * vh * depth}px`;
    });

    requestAnimationFrame(tick);
  }

  tick();
}

function initStickyNote() {
  const note = document.getElementById("sticky-note");
  if (!note) return;

  // Restore saved position
  try {
    const saved = localStorage.getItem("stickyNotePos");
    if (saved) {
      const { left, top } = JSON.parse(saved);
      note.style.left = left;
      note.style.top = top;
      note.style.right = "auto";
    }
  } catch (_) {}

  let dragging = false;
  let ox = 0, oy = 0;

  note.addEventListener("mousedown", (e) => {
    dragging = true;
    const rect = note.getBoundingClientRect();
    // Anchor from left/top so CSS right doesn't fight us
    note.style.left = rect.left + "px";
    note.style.top = rect.top + "px";
    note.style.right = "auto";
    note.style.transition = "none";
    ox = e.clientX - rect.left;
    oy = e.clientY - rect.top;
    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    const newLeft = Math.max(0, Math.min(window.innerWidth - note.offsetWidth, e.clientX - ox));
    const newTop = Math.max(0, Math.min(window.innerHeight - note.offsetHeight, e.clientY - oy));
    note.style.left = newLeft + "px";
    note.style.top = newTop + "px";
  });

  document.addEventListener("mouseup", () => {
    if (!dragging) return;
    dragging = false;
    note.style.transition = "";
    try {
      localStorage.setItem("stickyNotePos", JSON.stringify({
        left: note.style.left,
        top: note.style.top,
      }));
    } catch (_) {}
  });
}
