function runLoader(assetsBasePath, sessionKey) {
  if (sessionKey && sessionStorage.getItem(sessionKey)) {
    return Promise.resolve();
  }
  if (sessionKey) sessionStorage.setItem(sessionKey, "1");

  return new Promise((resolve) => {
    const overlay = document.createElement("div");
    overlay.id = "loading-overlay";
    overlay.innerHTML = `
      <div class="loader-container">
        <div class="dino-wrapper is-above" id="loader-dino">
          <img src="${assetsBasePath}/dino.webp" alt="" class="dino-img" />
        </div>
        <div class="progress-wrapper">
          <div class="progress-bar" id="loader-bar">
            <span class="progress-text" id="loader-text">0%</span>
          </div>
        </div>
        <img src="${assetsBasePath}/hart.png" alt="Heart" class="heart-img" />
      </div>
    `;
    document.body.appendChild(overlay);

    const bar = overlay.querySelector("#loader-bar");
    const text = overlay.querySelector("#loader-text");
    const dino = overlay.querySelector("#loader-dino");
    const totalDuration = 1500;
    let startTimestamp = null;

    function animateProgress(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const pct = Math.min((elapsed / totalDuration) * 100, 100);

      bar.style.width = pct + "%";
      text.textContent = Math.floor(pct) + "%";

      if (pct < 90) {
        dino.style.left = pct + "%";
        dino.classList.remove("is-heartbeat");
        if (pct >= 35 && pct <= 55) {
          dino.classList.remove("is-above");
          dino.classList.add("is-below");
        } else {
          dino.classList.remove("is-below");
          dino.classList.add("is-above");
        }
      } else {
        dino.style.left = "90%";
        dino.classList.add("is-heartbeat");
        dino.classList.remove("is-below");
        dino.classList.add("is-above");
      }

      if (pct < 100) {
        requestAnimationFrame(animateProgress);
      } else {
        overlay.style.opacity = "0";
        setTimeout(() => {
          overlay.remove();
          resolve();
        }, 400);
      }
    }

    requestAnimationFrame(animateProgress);
  });
}
