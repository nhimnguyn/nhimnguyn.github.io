(function () {
  const style = document.createElement("style");
  style.textContent = `
    #dino-transition-wrap {
      position: fixed;
      bottom: 6%;
      left: -12vw;
      z-index: 99999;
      pointer-events: none;
      width: clamp(50px, 7vw, 84px);
      animation: dinoTransDash 0.55s cubic-bezier(0.38, 0, 0.58, 1) forwards;
    }
    #dino-transition-wrap img {
      width: 100%;
      display: block;
      animation: dinoTransStep 0.22s ease-in-out infinite alternate;
    }
    /* Reverse: runs right to left with flipped sprite */
    #dino-transition-wrap.dino-reverse {
      left: 112vw;
      animation: dinoTransDashReverse 0.55s cubic-bezier(0.38, 0, 0.58, 1) forwards;
    }
    #dino-transition-wrap.dino-reverse img {
      animation: dinoTransStepReverse 0.22s ease-in-out infinite alternate;
    }
    @keyframes dinoTransDash {
      from { left: -12vw; }
      to   { left: 112vw; }
    }
    @keyframes dinoTransDashReverse {
      from { left: 112vw; }
      to   { left: -12vw; }
    }
    @keyframes dinoTransStep {
      from { transform: translateY(0) scale(1); }
      to   { transform: translateY(-11px) scale(1.18); }
    }
    @keyframes dinoTransStepReverse {
      from { transform: scaleX(-1) translateY(0) scale(1); }
      to   { transform: scaleX(-1) translateY(-11px) scale(1.18); }
    }
  `;
  document.head.appendChild(style);

  const isGallery = /\/gallery\//i.test(
    window.location.pathname.replace(/\\/g, "/")
  );
  const dinoSrc = isGallery ? "../assets/dino.webp" : "assets/dino.webp";

  function isGoingHome(destHref) {
    try {
      const dest = new URL(destHref, window.location.href);
      if (dest.origin !== window.location.origin) return false;
      const parts = dest.pathname.split("/").filter(Boolean);
      return parts.length === 0 || (parts.length === 1 && parts[0] === "index.html");
    } catch (_) {
      return false;
    }
  }

  function runTransition(dest) {
    const wrap = document.createElement("div");
    wrap.id = "dino-transition-wrap";
    if (isGoingHome(dest)) wrap.classList.add("dino-reverse");
    const img = document.createElement("img");
    img.src = dinoSrc;
    img.alt = "";
    wrap.appendChild(img);
    document.body.appendChild(wrap);
    setTimeout(() => {
      window.location.href = dest;
    }, 490);
  }

  document.addEventListener("click", function (e) {
    const link = e.target.closest("a[href]");
    if (!link) return;
    if (link.target === "_blank") return;
    const raw = link.getAttribute("href");
    if (!raw || raw.startsWith("#") || raw.startsWith("mailto:") || raw.startsWith("tel:")) return;
    if (link.hostname && link.hostname !== window.location.hostname) return;
    e.preventDefault();
    runTransition(link.href);
  });
})();
