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
  
    //   const scrollLockMethod = !isMenuOpen
    //     ? 'disableBodyScroll'
    //     : 'enableBodyScroll';
    //   bodyScrollLock[scrollLockMethod](document.body);
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
    //   bodyScrollLock.enableBodyScroll(document.body);
    });


    // document.addEventListener("DOMContentLoaded", function () {
    //   const galleryData = {
    //     bar: ["cocktail1.jpg", "cocktail2.jpg", "cocktail3.jpg", "cocktail4.jpg"],
    //     shisha: ["shisha1.jpg", "shisha2.jpg", "shisha3.jpg", "shisha3.jpg"],
    //     karaoke: ["karaoke7.jpg", "karaoke8.jpg", "karaoke4.jpg", "karaoke4.jpg"],
    //     gaming: ["gaming.png", "gaming4.jpg", "gaming4.jpg", "gaming4.jpg"],
    //   };
    
    //   const lightbox = document.getElementById("lightbox");
    //   const lightboxImages = document.getElementById("lightbox-images");
    //   const closeLightbox = document.querySelector(".close-lightbox");
    
    //   let swiperInstance = null;
    
    //   document.querySelectorAll(".open-gallery").forEach((item) => {
    //     item.addEventListener("click", function () {
    //       const category = this.dataset.category;
    //       lightboxImages.innerHTML = "";
    
    //       // Bilder aus der galleryData in den Swiper Wrapper einfügen
    //       galleryData[category].forEach((img) => {
    //         const slide = document.createElement("div");
    //         slide.classList.add("swiper-slide");
    //         slide.innerHTML = `<img class="swiper-lazy" data-src="./images/${img}" alt="${category}">`;
    //         lightboxImages.appendChild(slide);
    //       });
    
    //       lightbox.style.display = "flex";
    
    //       // Zerstöre die vorherige Swiper-Instanz, falls sie existiert
    //       if (swiperInstance) swiperInstance.destroy();
    
    //       swiperInstance = new Swiper(".swiper-lightbox", {
    //         navigation: {
    //           nextEl: ".swiper-button-next",
    //           prevEl: ".swiper-button-prev",
    //         },
    //         pagination: {
    //           el: ".swiper-pagination",
    //           clickable: true,
    //         },
    //         loop: true,
    //         loopedSlides: galleryData[category].length,
    //         slidesPerView: 1,
    //         slidesPerGroup: 1,
    //         centeredSlides: true,
    //         keyboard: {
    //           enabled: true,
    //         },
    //         lazy: true, 
    //       });
    //     });
    //   });
    
    //   closeLightbox.addEventListener("click", function () {
    //     lightbox.style.display = "none";
    //   });
    
    //   lightbox.addEventListener("click", function (e) {
    //     if (e.target === lightbox) {
    //       lightbox.style.display = "none";
    //     }
    //   });
    // });