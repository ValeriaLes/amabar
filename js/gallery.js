

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("/data/gallery.json");
  const data = await response.json();

  document.querySelectorAll(".mySwiper").forEach((swiperEl) => {
    const category = swiperEl.dataset.category;
    const wrapper = swiperEl.querySelector(".swiper-wrapper");

    if (!data[category]) return;

    wrapper.innerHTML = data[category]
      .filter((file) => !file.toLowerCase().endsWith(".mp4"))
      .map(
        (file) => `
        <div class="swiper-slide">
          <img src="../images/${category}/${file}" alt="${category}">
        </div>
      `,
      )
      .join("");

    new Swiper(swiperEl, {
      loop: true,
      navigation: {
        nextEl: swiperEl.querySelector(".swiper-button-next"),
        prevEl: swiperEl.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: swiperEl.querySelector(".swiper-pagination"),
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 5,
      },
    });
  });
});
