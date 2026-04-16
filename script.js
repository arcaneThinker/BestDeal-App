// Your product database now points to your local images folder
const products = [
    {
        title: "Men's Teen Faux Leather Zip Up Bomber Jacket 90S Vintage Biker Racing Moto Jackets Streetwear Coats",
        url: "https://amzn.to/4ccKon8",
        imagePath: "./images/img1.jpg" 
    },
    {
        title: "QJQ Men's Graphic Vintage Tees Short Sleeve Crewneck Oversized T Shirts Streetwear Summer Casual Tops",
        url: "https://amzn.to/4cncE7w",
        imagePath: "/images/img2.jpg"
    },
    {
        title: "Men's Teen Faux Leather Zip Up Bomber Jacket 90S Vintage Biker Racing Moto Jackets Streetwear Coats(Brown)",
        url: "https://amzn.to/3POkAGj",
        imagePath: "/images/img3.jpg"
    }
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