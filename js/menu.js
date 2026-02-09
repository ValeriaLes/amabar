document.addEventListener("DOMContentLoaded", () => {
  fetch("../data/menu.json")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("menu-container");

      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("menu-category");

      const h2 = document.createElement("h2");
      h2.textContent = "COCKTAILS";
      categoryDiv.appendChild(h2);

      data.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");

        itemDiv.innerHTML = `
         
          <div class="menu-info">
            <h3>${item.name}</h3>
          </div>
           <img src="${item.image}" alt="${item.name}" />
        `;

        categoryDiv.appendChild(itemDiv);
      });

      container.appendChild(categoryDiv);
    })
    .catch((err) => console.error("Menu JSON load error:", err));
});
