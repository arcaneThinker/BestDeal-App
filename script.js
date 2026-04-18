// Your product database now points to your local images folder
const products = [
    {
        title: "Jellycat Vivacious Vegetable Aubergine - Eggplant Plush Stuffed Toy",
        url: "https://amzn.to/4sJ3RSr",
        imagePath: "./images/img1.webp" 
    },
];

const gridContainer = document.getElementById('gridContainer');

/**
 * Builds the DOM elements for a product card.
 */
function renderCard(product) {
    const card = document.createElement('a');
    card.className = 'product-card';
    card.href = product.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';

    card.innerHTML = `
        <div class="image-container">
            <img class="product-image loaded" src="${product.imagePath}" alt="${product.title}" />
        </div>
        <div class="product-details">
            <h2 class="product-title">${product.title}</h2>
            <div class="amazon-btn">View on Amazon</div>
        </div>
    `;

    return card;
}

/**
 * Initializes the grid.
 */
function initializeGrid() {
    products.forEach(product => {
        const cardElement = renderCard(product);
        gridContainer.appendChild(cardElement);
    });
}

// Boot the app
initializeGrid();
