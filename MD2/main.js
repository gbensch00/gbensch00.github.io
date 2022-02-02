const parallax = document.querySelectorAll(".parallax");
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.forEach(function (parallax, i) {
    console.log(
      "Parallax " + i + ": " + parallax.offsetTop + " / Window: " + offset
    );
    parallax.style.backgroundPositionY =
      (offset - parallax.offsetTop) * 0.7 + "px";
  });
});
