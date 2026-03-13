

// DOM Elements
const gallery = document.querySelector(".gallery");
const filterButtons = document.querySelectorAll(".filter-btn");

// Initialize the gallery
function initGallery() {
  renderGallery(galleryData);
  setupFilterListeners();
}

// Render gallery items
function renderGallery(items) {
  gallery.innerHTML = "";

  items.forEach((item, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.style.animationDelay = `${index * 0.05}s`;

    galleryItem.innerHTML = `
              <div class="category-badge">${capitalizeFirstLetter(
                item.category
              )}</div>
              <img src="${item.src}" alt="${item.title}" loading="lazy">
              <div class="item-overlay">
                  <h3 class="item-title">${item.title}</h3>
                  <p class="item-description">${item.description}</p>
              </div>
          `;

    gallery.appendChild(galleryItem);
  });
}

// Filter gallery items
function filterGallery(category) {
  let filteredItems;

  if (category === "all") {
    filteredItems = galleryData;
  } else {
    filteredItems = galleryData.filter((item) => item.category === category);
  }

  renderGallery(filteredItems);
}

// Setup filter button listeners
function setupFilterListeners() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter gallery
      const filterValue = button.getAttribute("data-filter");
      filterGallery(filterValue);
    });
  });
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initGallery);
