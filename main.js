

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
      bar: ["cocktail1.webp", "cocktail2.webp", "cocktail3.webp","cocktail4.webp","cocktail5.webp","cocktail6.webp","cocktail7.webp","cocktail8.webp", "cocktail9.webp","cocktail10.webp","cocktail11.webp","cocktail12.webp","cocktail13.webp","cocktail14.webp","cocktail15.webp","cocktail16.webp","cocktail17.webp","cocktail18.webp","cocktail19.webp", "cocktail20.webp", "cocktail21.webp", "cocktail22.webp", "cocktail23.webp", "cocktail24.webp","cocktail25.webp", "cocktail26.webp", "cocktail27.webp","cocktail28.webp","cocktail29.webp","cocktail30.webp", "cocktail31.webp","cocktail32.webp","cocktail33.webp","cocktail34.webp","cocktail35.webp","cocktail36.webp","cocktail-video.mp4", "cocktail-video1.mp4","cocktail-video2.mp4","cocktail-video3.mp4","cocktail-video4.mp4"],
      shisha: ["shisha.webp", "shisha1.webp", "shisha2.webp", "shisha3.webp", "shisha4.webp","shisha5.webp","shisha6.webp", "shisha-video1.MP4","shisha-video.mp4"],
      karaoke: ["karaoke1.webp", "karaoke2.webp", "karaoke3.webp", "karaokevideo.mp4"],
      gaming: ["gaming.webp","gaming1.webp","gaming2.webp", "gaming-video.mp4", "gaming-video1.MP4"]
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