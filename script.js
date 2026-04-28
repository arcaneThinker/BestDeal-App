// Your product database now points to your local images folder
const products = [
     {
        title: "DR. WELL 2026 New, Full Body Stretching Massage Mat 3D Lumbar - Neck, Back, Waist, Hip Relaxation. 26 Powerful Air Cells, 7 Massage Modes & 5 Intensities Levels. Foldable & Portable Mattress.",
        url: "https://amzn.to/4eODpU6",
        imagePath: "./images/img15.jpg" 
    },
     {
        title: "Glamonade Acetone Nail Polish Remover: Gel Polish Remover for Removal of Regular Nail Polish/Gel/Nail Tips/Glitter Polish | Grape Scent Gel Nail Polish Remover with Easy Push-Down Pump",
        url: "https://amzn.to/4vWrKbW",
        imagePath: "./images/img14.jpg" 
    },
     {
        title: "Sports Fashion Running Shoes, Mesh Athletic Sneakers with Gradient Design, Black White Blue Colors, BlackColors，Breathable Comfort",
        url: "https://amzn.to/4vThotx",
        imagePath: "./images/img13.jpeg" 
    },
     {
        title: "YZXODN 3 PCS Side Mirror Squeegee,Car Mirror Squeegee,Retractable Car Rearview Mirror Wiper,Portable Car Cleaning Tool for Rainy Foggy Weather,Universal Car Accessories(Black/Pink/Green)",
        url: "https://amzn.to/4cIivDr",
        imagePath: "./images/img12.jpeg" 
    },
     {
        title: "Tens Black Unit with 2 Pads,EMS Microcurrent Mini Massager Machine,Low Frequency Multi Function Physiotherapy Instrument Muscle Stimulator,Full Body Pain Relief Therapy Device",
        url: "https://amzn.to/4czQQpu",
        imagePath: "./images/img10.jpeg" 
    },
     {
        title: "GROWNSY Baby Bath Stand for Babies 6 Months & Up, Foldable Baby Shower Stand for Infants and Toddlers, Adjustable Baby Shower Standing Support With Shower Holder",
        url: "https://amzn.to/49c5MrE",
        imagePath: "./images/img11.jpg" 
    },
     {
        title: "Light Up Bath Toys, 6 Pack | Water-Activated Light Up Toys Flash & Change Color | Easy-Grip Baby & Toddler Bath Toys | Sensory Bathtub Toys with Bath Lights for Kids Bath",
        url: "https://amzn.to/3OqCBu5",
        imagePath: "./images/img9.jpeg" 
    },
     {
        title: "Rainbow Bath Bombs for Kids, 4 XL Kid Bath Bombs with Surprise Colors Inside, Organic Bathbombs for Women, Stocking Stuffers for Kids Christmas Gifts for Girls Boys",
        url: "https://amzn.to/4cKjTW3",
        imagePath: "./images/img8.jpeg" 
    },
     {
        title: "Bubble Stress Relief Toy Mini Bubble Blower Bubble Sticks Relaxation Birthday Christmas Party Gift for Men Women (Bubble Water with Empty Bottle)",
        url: "https://amzn.to/4cKdfiG",
        imagePath: "./images/img6.jpeg" 
    },
     {
        title: "3D Printed Keyboard Joystick Keycap Mechanical Arcade Stick Adapter for WASD Retro Gaming Accessory Custom 4-Key Linkage Mod Mini Fighting Controller DIY Novelty Analog Button Attachment Set 5(Yellow)",
        url: "https://amzn.to/4sZEDzb",
        imagePath: "./images/img7.jpeg" 
    },
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
