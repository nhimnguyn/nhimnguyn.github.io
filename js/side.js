document.addEventListener("DOMContentLoaded", function () {
  var clean = function (anim) {
    anim.animatables.forEach(function (a) {
      a.target.style.transform = "";
    });
  };

  anime.set(
    [
      ".nav-btn",
      ".title-container",
      ".item-earth",
      ".item-business",
      ".item-people",
      ".footer-text",
    ],
    { opacity: 0 },
  );

  anime
    .timeline({})
    .add({
      targets: ".nav-btn",
      opacity: [0, 1],
      scale: [1.22, 1],
      rotate: ["-4deg", "-1deg"],
      duration: 600,
      easing: "easeOutElastic(1, 0.5)",
      complete: clean,
    })
    .add(
      {
        targets: ".title-container",
        opacity: [0, 1],
        translateX: [40, 0],
        scale: [0.92, 1],
        duration: 650,
        easing: "easeOutExpo",
        complete: clean,
      },
      "-=500",
    )
    .add(
      {
        targets: ".item-earth",
        opacity: [0, 1],
        translateX: [-55, 0],
        rotate: ["-4deg", "0deg"],
        duration: 700,
        easing: "easeOutElastic(1, 0.6)",
        complete: clean,
      },
      "-=600",
    )
    .add(
      {
        targets: ".item-business",
        opacity: [0, 1],
        translateY: [55, 0],
        scale: [0.85, 1],
        duration: 700,
        easing: "easeOutElastic(1, 0.6)",
        complete: clean,
      },
      "-=700",
    )
    .add(
      {
        targets: ".item-people",
        opacity: [0, 1],
        translateX: [55, 0],
        rotate: ["4deg", "0deg"],
        duration: 700,
        easing: "easeOutElastic(1, 0.6)",
        complete: clean,
      },
      "-=700",
    )
    .add(
      {
        targets: ".footer-text",
        opacity: [0, 1],
        translateY: [18, 0],
        duration: 450,
        easing: "easeOutExpo",
        complete: clean,
      },
      "-=500",
    );
});
