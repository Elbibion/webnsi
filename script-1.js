document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("zoomLightbox");
  const zoomImg = document.getElementById("zoomImage");

  if (!lightbox || !zoomImg) return;

  const images = document.querySelectorAll(".image-row img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      zoomImg.src = img.src;
      lightbox.classList.remove("hidden");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.add("hidden");
    zoomImg.src = ""; 
  });
});
