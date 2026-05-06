// Your product database now points to your local images folder
const products = [
     {
        title: "Pixelated Lantern Night Light, 16-Color LED Mood Light with Remote Control, Rechargeable Table & Wall Night Lamp for Bedroom, Gaming, Kids, Boys Room Decor",
        url: "https://amzn.to/42ghAp1",
        imagePath: "./images/img30.jpeg" 
    },
     {
        title: "Flexible Devil Eyes Light for Windshield,LED Sign for Car,LED Digital Panel with Animations, Remote Control & Bluetooth APP for Cars,SUVs,Trucks",
        url: "https://amzn.to/4uptsRI",
        imagePath: "./images/img35.jpeg" 
    },
     {
        title: "Chessnut Evo AI Chess Computer — Built-in Maia Engine, Customizable Chess Bot, Full Piece Recognition, LED Lights — Play Online on Major Chess Platforms — Smart Electronic Chessboard",
        url: "https://amzn.to/4dqU279",
        imagePath: "./images/img34.jpeg" 
    },
     {
        title: "GUND Peek-A-Boo Teddy Bear Plush, Animated Stuffed Animal for Babies and Newborns",
        url: "https://amzn.to/4dbYCVJ",
        imagePath: "./images/img33.jpeg" 
    },
     {
        title: "Magnetic Beach Towel Oversized Quick-Dry Microfiber Towel with Magnetic Closure, Super Absorbent & Sand-Resistant for Beach, Pool, Travel and Gym",
        url: "https://www.amazon.com/dp/B0F83MBZ66?ref=t_ac_view_request_product_image&campaignId=amzn1.campaign.3TL3FU0PSY7O6&linkCode=tr1&tag=3320000b-20&linkId=amzn1.campaign.3TL3FU0PSY7O6_1777998586980",
        imagePath: "./images/img31.jpeg" 
    },
     {
        title: "Merax Modern Smart Coffee Table with Built-in Fridge,Bluetooth Speaker, Wireless Charging Module,Touch Control Panel,Power Socket,USB Interface,Outlet Protection, Atmosphere light",
        url: "https://amzn.to/4usFZng",
        imagePath: "./images/img27.jpeg" 
    },
     {
        title: "Mattel Games UNO Splash Card Game with Waterproof Cards and Portable Clip for Travel, Camping and Game Nights Away",
        url: "https://amzn.to/49uRqmm",
        imagePath: "./images/img28.jpeg" 
    },
     {
        title: "Vacuum Backpack Travel with Pump Vacpack Backpack with Vacuum System Travel Compression Backpacks for Women Mochila De Viaje Carry on Luggage",
        url: "https://amzn.to/428cWJP",
        imagePath: "./images/img25.jpeg" 
    },
     {
        title: "Tovolo Mini Ice Cylinder- Squeeze & Release- Set of 2, 1000422, Gray",
        url: "https://amzn.to/4w7fTIe",
        imagePath: "./images/img24.jpeg" 
    },
     {
        title: "Motorbike Helmet Wiper, 2 Speed Water Rechargeable Wiper with Telescopic Bracket, 170° Swing Range for Motorcycle Scooter Helmet",
        url: "https://amzn.to/48BFuim",
        imagePath: "./images/img23.jpeg" 
    },
     {
        title: "A22I FS08 Dual-System AI Temperature Control 30W Magnetic Phone Cooler with Semiconductor Refrigeration and Liquid Cooling",
        url: "https://amzn.to/4cJntkG",
        imagePath: "./images/img20.jpeg" 
    },
     {
        title: "RePod Aluminum Alloy Case for Apple Watch Series 7/8/9/10 44/45MM",
        url: "https://amzn.to/4eVsuYK",
        imagePath: "./images/img22.jpeg" 
    },
     {
        title: "Neporal A19 Rechargeable Light Bulbs Emergency Light Bulb for Power Outages",
        url: "https://amzn.to/4n2carg",
        imagePath: "./images/img21.jpeg" 
    },
     {
        title: "Transformers: Matrix of Leadership Bookends, Multicolor",
        url: "https://amzn.to/4uq3GwM",
        imagePath: "./images/img19.jpg" 
    },
     {
        title: "Music Boxing Machine Sport Toys for Kids and Adults,Wall Mounted Bluetooth Smart Punching Target,Training Pad Toy with Boxing Glove,Ideas Toys for Boys Girls Kids",
        url: "https://amzn.to/4dmcpt1",
        imagePath: "./images/img18.jpeg" 
    },
     {
        title: "Toilet Brush, Great Gag Gift, Fun Design, Premium Quality Toilet Bowl Brush with Solid Handle and Durable Bristles for Bathroom Cleaning, Political Satire Products",
        url: "https://amzn.to/48ApGfT",
        imagePath: "./images/img17.jpeg" 
    },
     {
        title: "Red Light Hair Growth Cap - Laser Hair Growth Cap, The Adjustable Portable Laser Cap, Red Light Cap for Thicker Hair in Men and Women",
        url: "https://amzn.to/4t5CX7E",
        imagePath: "./images/img16.jpeg" 
    },
     {
        title: "DR. WELL 2026 New, Full Body Stretching Massage Mat 3D Lumbar - Neck, Back, Waist, Hip Relaxation. 26 Powerful Air Cells, 7 Massage Modes & 5 Intensities Levels. Foldable & Portable Mattress.",
        url: "https://amzn.to/4eODpU6",
        imagePath: "./images/img15.jpeg" 
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
