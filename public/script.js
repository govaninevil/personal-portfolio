document.querySelectorAll(".move-with-cursor").forEach((a) => {
  document.addEventListener("mousemove", function (e) {
    var t = e.clientX,
      e = e.clientY;
    (a.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"),
      (a.style.transform = `translate(${0.01 * t}px, ${0.01 * e}px) rotate(${
        0.01 * (t + e)
      }deg)`);
  });
});