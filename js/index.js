document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".open-gallery");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = button.getAttribute("data-category");
      openGallery(category);
    });
  });
});

function openGallery(category) {
  fetch("/data/gallery.json") 
    .then((response) => response.json())
    .then((data) => {
      const galleryImages = data[category] || [];
      if (!galleryImages.length) {
        console.warn(`Keine Bilder gefunden für Kategorie: ${category}`);
        return;
      }

      const imagesHtml = galleryImages
        .map((file) => {
          const filePath = `./images/${category}/${file}`;
          const isVideo = file.toLowerCase().endsWith(".mp4");

          return isVideo
            ? `<a href="${filePath}" class="glightbox" data-type="video">
                 <img src="${filePath}" alt="${category} Video" />
               </a>`
            : `<a href="${filePath}" class="glightbox">
                 <img src="${filePath}" alt="${category}" />
               </a>`;
        })
        .join("");

      document.getElementById("gallery-container").innerHTML = imagesHtml;

      const updatedLightbox = GLightbox({
        selector: ".glightbox",
        autoplayVideos: true,
        loop: true,
        navigation: true,
        onOpen: () => {
          const videoElement = document.querySelector(".gpopup video");
          if (videoElement) openFullscreen(videoElement);
        },
      });

      updatedLightbox.open();
    })
    .catch((err) => console.error("Fehler beim Laden der JSON:", err));
}


function openFullscreen(video) {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}