// Your product database now points to your local images folder
const products = [
     {
        title: "SA106 Mirror Lens Monolens Cyclops Robotic Futuristic Sunglasses",
        url: "https://amzn.to/48QNNXF",
        imagePath: "./images/img5.png" 
    },
    {
        title: "Jellycat Vivacious Vegetable Aubergine - Eggplant Plush Stuffed Toy",
        url: "https://amzn.to/4sJ3RSr",
        imagePath: "./images/img1.webp" 
    },
    {
        title: "Lifting Hooks for Weight Lifting, 1 Pair 330 LB Weight Lifting Wrist Wraps Heavy Duty Gym Lifting Straps Hook for Barbell, Deadlifts, Pull-Ups, Strength Training, Wrist Protection, for Men & Women",
        url: "https://amzn.to/4eAom04",
        imagePath: "./images/img2.jpeg" 
    },
    {
        title: "Kobataro Rat Headband Costume Spoon Hair Clip Set Shoulder Plush Toy Costume Accessories Stuffed Animal Gifts for Kids Adults",
        url: "https://amzn.to/4eyvg67",
        imagePath: "./images/img3.jpg" 
    },
    {
        title: "SNACTIV LITE Finger Chopsticks for Gamers 4PC NEON Bundle - As Seen on Shark Tank! The Official Snacking Tool of the Future",
        url: "https://amzn.to/4coECQx",
        imagePath: "./images/img4.jpeg" 
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
