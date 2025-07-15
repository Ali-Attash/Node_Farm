🛒 Product Overview Node.js App

This is a simple vanilla Node.js server that dynamically serves an overview page and detailed product pages using HTML templates and a local JSON data file. No frameworks (like Express) are used — only core Node.js modules.

📁 Project Structure

├── dev-data/
│ └── data.json # Product data in JSON format
├── templates/
│ ├── template-overview.html # HTML layout for the overview page
│ ├── template-product.html # HTML layout for individual product pages
│ └── template-card.html # Template for reusable product cards
├── style.css # Optional styling file (served separately)
├── server.js # Main Node.js server logic
└── README.md # Project documentation

🚀 Features

Uses http, fs, and url core modules

Parses URLs to serve specific routes (/overview, /product?id=, /api)

Dynamically replaces placeholders in templates using a helper function

No third-party dependencies

Great for learning raw Node.js fundamentals

🔧 Setup

Clone the Repository

git clone https://github.com/your-username/product-overview-node.git
cd product-overview-node

Install Dependencies
No need — it uses core modules only!

Run the Server

node server.js

Open in Browser
Navigate to http://localhost:3030

🌐 Available Routes

Route

Description

/ or /overview

Shows all products as cards

/product?id=0

Shows detailed view for a product

/api

Returns raw product data (JSON format)

🧠 How It Works

server.js reads HTML templates and data from file system once on startup.

When a request comes in, the server:

Parses the URL using url.parse()

Checks the pathname and responds accordingly

Uses a fillTemplate() helper to inject product data into HTML placeholders

📦 Example Data Format (JSON)

{
"id": 0,
"productName": "Fresh Avocados",
"image": "🥑",
"price": 4.99,
"quantity": "1kg",
"nutrients": "Vitamin B, K",
"from": "Mexico",
"description": "Delicious and fresh avocados",
"organic": true
}

📌 Notes

This app is not production-ready, but it’s a great learning project for understanding how servers work at a low level.

Feel free to expand it with CSS, client-side JS, or even transition to Express.js later.

📚 Author

Made with 💻 by Ali Attash Saify as part of learning from Jonas Schmedtmann's Node.js Bootcamp.

📜 License

MIT — free to use, modify, and share.
