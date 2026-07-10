(function () {
  var gallery = document.getElementById("showcase-gallery");
  var heroImg = document.getElementById("showcase-hero-img");
  if (!gallery || !heroImg) return;

  var thumbs = gallery.querySelectorAll(".showcase-thumb");
  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      heroImg.src = thumb.getAttribute("data-src");
      thumbs.forEach(function (t) { t.classList.remove("is-active"); });
      thumb.classList.add("is-active");
    });
  });
})();
