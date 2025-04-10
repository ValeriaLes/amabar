

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});


    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
  
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
  
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
 
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
   
    });



    document.addEventListener("DOMContentLoaded", function () {
    
    
  
    
      const categoryButtons = document.querySelectorAll(".open-gallery");
      categoryButtons.forEach(button => {
          button.addEventListener("click", function () {
              const category = button.getAttribute("data-category");
              openGallery(category);
          });
      });
  });
  
  
  function openGallery(category) {
    const galleryImages = {
      bar: ["cocktail1.jpg", "cocktail2.jpg", "cocktail3.jpg","cocktail4.jpg","cocktail5.jpg","cocktail6.jpg","cocktail7.jpg","cocktail8.jpg", "cocktail9.jpg","cocktail10.jpg","cocktail11.jpg","cocktail12.jpg","cocktail13.jpg","cocktail14.jpg","cocktail16.jpg","cocktail17.jpg","cocktail19.jpg","cocktail-video.mp4","cocktail-video2.mp4"],
      shisha: ["shisha1.jpg", "shisha2.jpg", "shisha3.jpg", "shisha.jpg", "shisha-video.mp4"],
      karaoke: ["karaoke4.jpg", "karaoke7.jpg", "karaoke8.jpg", "karaokevideo.mp4"],
      gaming: ["gaming.png", "gaming4.jpg"]
  };

  
    
      const imagesHtml = galleryImages[category].map(file => {
          const filePath = `./images/${file}`;
          const isVideo = file.endsWith(".mp4");
  
          return isVideo
              ? `<a href="${filePath}" class="glightbox" data-type="video">
                   <img src="${filePath}" alt="${category} Video" />
                 </a>`
              : `<a href="${filePath}" class="glightbox">
                   <img src="${filePath}" alt="${category}" />
                 </a>`;
      }).join("");
  
   
      document.getElementById("gallery-container").innerHTML = imagesHtml;
  
     
      const updatedLightbox = GLightbox({
          selector: ".glightbox",
          autoplayVideos: true,
          loop: true,
          autoplayVideos: true,
          navigation: true,
          onOpen: () => {
            
            const videoElement = document.querySelector(".gpopup video");
            if (videoElement) {
                openFullscreen(videoElement);
            }
        },
      });
      function openFullscreen(video) {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { 
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { 
        } else if (video.msRequestFullscreen) { 
            video.msRequestFullscreen();
        }
    }
  
      
      updatedLightbox.open();
  }