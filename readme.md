# 🛒 Product Overview Node.js App

This is a simple vanilla Node.js server that dynamically serves an overview page and detailed product pages using HTML templates and a local JSON data file. No frameworks (like Express) are used — only core Node.js modules.

# 📁 Project Structure

├── dev-data/
│   └── data.json               # Product data in JSON format
├── templates/
│   ├── template-overview.html # HTML layout for the overview page
│   ├── template-product.html  # HTML layout for individual product pages
│   └── template-card.html     # Template for reusable product cards
├── style.css                  # Optional styling file (served separately)
├── server.js                  # Main Node.js server logic
└── README.md                  # Project documentation

## 🚀 Features

Uses http, fs, and url core modules

Parses URLs to serve specific routes (/overview, /product?id=, /api)

Dynamically replaces placeholders in templates using a helper function

No third-party dependencies

Great for learning raw Node.js fundamentals

🔧 Setup

1. Clone the Repository

git clone https://github.com/Ali-Attash/product-overview-node.git
cd product-overview-node

2. Install Dependencies

No dependencies needed! Core Node.js only.

3. Run the Server

node server.js

4. Open in Browser

Go to http://localhost:3030

## 🌐 Available Routes

Route

Description

/ or /overview

Shows all products as cards

/product?id=0

Shows detailed view for a product

/api

Returns raw product data (JSON format)

## 🧠 How It Works

server.js reads HTML templates and product data from the file system at startup.

When a request is received:

The URL is parsed using url.parse()

Based on the pathname, the server decides which HTML content to return

The fillTemplate() helper injects product values into placeholders

## 📦 Sample Product Data

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

## 📌 Notes

This project is meant for educational purposes and basic Node.js practice.

You can expand this by adding CSS, static file serving, or migrate to Express.js for advanced routing and middleware.

## 👨‍💻 Author

Created by Ali Attash Saify Inspired by the Jonas Schmedtmann Node.js Bootcamp

📜 License

MIT — free to use, modify, and share.
