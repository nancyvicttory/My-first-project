const galleryData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506748686212-b8c8470f24b9?auto=format&fit=crop&w=500&q=80",
    title: "Mountain Landscape",
    description: "Beautiful mountain range at sunset",
    category: "nature",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1565136098-768d0fbe98de?auto=format&fit=crop&w=500&q=80",
    title: "Modern Skyscraper",
    description: "Contemporary architecture in downtown",
    category: "architecture",
  }
  
    id: 3,
    src: "https://images.unsplash.com/photo-1516220153207-3f50a9ac4e9b?auto=format&fit=crop&w=500&q=80",
    title: "Tropical Beach",
    description: "Crystal clear waters and white sand",
    category: "travel",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1555685810-65e6ef8ab46f?auto=format&fit=crop&w=500&q=80",
    title: "Gourmet Pasta",
    description: "Homemade pasta with fresh ingredients",
    category: "food",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517494898125-4fd53f19a04f?auto=format&fit=crop&w=500&q=80",
    title: "Forest Path",
    description: "Serene walking trail through dense forest",
    category: "nature",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=500&q=80",
    title: "Historic Building",
    description: "Ancient architecture with intricate details",
    category: "architecture",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1597577944259-b62b5b832876?auto=format&fit=crop&w=500&q=80",
    title: "Mountain Village",
    description: "Charming village nestled in the mountains",
    category: "travel",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1571145944117-3d1ef60c7d9d?auto=format&fit=crop&w=500&q=80",
    title: "Fruit Dessert",
    description: "Fresh seasonal fruits with cream",
    category: "food",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1519252681235-9b1c2b7e4200?auto=format&fit=crop&w=500&q=80",
    title: "Waterfall",
    description: "Powerful waterfall in a lush green setting",
    category: "nature",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=500&q=80",
    title: "City Skyline",
    description: "Panoramic view of a metropolitan area",
    category: "architecture",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1604510237850-52f11b3ea9bc?auto=format&fit=crop&w=500&q=80",
    title: "Ancient Ruins",
    description: "Historical site with archaeological importance",
    category: "travel",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1533376869371-cf5fa70c413e?auto=format&fit=crop&w=500&q=80",
    title: "Artisan Coffee",
    description: "Perfectly brewed specialty coffee",
    category: "food",
  },
];

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
