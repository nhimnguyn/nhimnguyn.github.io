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
    { el: document.getElementById("shells"), depth: 0.022 },
    { el: document.getElementById("dogs"), depth: 0.013 },
    { el: document.getElementById("rock"), depth: 0.032 },
    { el: document.getElementById("fragile"), depth: 0.018 },
    { el: document.getElementById("food1"), depth: 0.027 },
    { el: document.getElementById("apple"), depth: 0.01 },
    { el: document.getElementById("food2"), depth: 0.02 },
  ].filter((a) => a.el);

  let tx = 0,
    ty = 0;
  let cx = 0,
    cy = 0;

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
      el.style.translate = `${cx * vw * depth}px ${cy * vh * depth}px`;
    });

    requestAnimationFrame(tick);
  }

  tick();
}

function initStickyNote() {
  const note = document.getElementById("sticky-note");
  if (!note) return;

  try {
    const saved = localStorage.getItem("stickyNotePos");
    if (saved) {
      const { left, top } = JSON.parse(saved);
      const l = parseFloat(left);
      const t = parseFloat(top);
      if (
        l >= 0 &&
        t >= 0 &&
        l < window.innerWidth - 40 &&
        t < window.innerHeight - 40
      ) {
        note.style.left = left;
        note.style.top = top;
        note.style.right = "auto";
        note.style.bottom = "auto"; // clear CSS bottom so top and bottom don't fight
      } else {
        localStorage.removeItem("stickyNotePos");
      }
    }
  } catch (_) {}

  let dragging = false;
  let ox = 0,
    oy = 0;

  function startDrag(clientX, clientY) {
    dragging = true;
    const rect = note.getBoundingClientRect();
    note.style.left = rect.left + "px";
    note.style.top = rect.top + "px";
    note.style.right = "auto";
    note.style.bottom = "auto";
    note.style.transition = "none";
    ox = clientX - rect.left;
    oy = clientY - rect.top;
  }

  function moveDrag(clientX, clientY) {
    if (!dragging) return;
    const newLeft = Math.max(
      0,
      Math.min(window.innerWidth - note.offsetWidth, clientX - ox),
    );
    const newTop = Math.max(
      0,
      Math.min(window.innerHeight - note.offsetHeight, clientY - oy),
    );
    note.style.left = newLeft + "px";
    note.style.top = newTop + "px";
  }

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    note.style.transition = "";
    try {
      localStorage.setItem(
        "stickyNotePos",
        JSON.stringify({
          left: note.style.left,
          top: note.style.top,
        }),
      );
    } catch (_) {}
  }

  // Mouse
  note.addEventListener("mousedown", (e) => {
    startDrag(e.clientX, e.clientY);
    e.preventDefault();
  });
  document.addEventListener("mousemove", (e) => moveDrag(e.clientX, e.clientY));
  document.addEventListener("mouseup", endDrag);

  // Touch
  note.addEventListener(
    "touchstart",
    (e) => {
      const t = e.touches[0];
      startDrag(t.clientX, t.clientY);
      e.preventDefault();
    },
    { passive: false },
  );

  document.addEventListener(
    "touchmove",
    (e) => {
      if (!dragging) return;
      const t = e.touches[0];
      moveDrag(t.clientX, t.clientY);
      e.preventDefault();
    },
    { passive: false },
  );

  document.addEventListener("touchend", endDrag);
  document.addEventListener("touchcancel", endDrag);
}
