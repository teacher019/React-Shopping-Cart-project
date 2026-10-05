# ShopCart

A modern and responsive shopping cart application built with **React** and **Vite**.

ShopCart demonstrates a complete front-end e-commerce shopping experience with product browsing, product details, cart management, quantity controls, checkout summary, and persistent cart data using Local Storage.

## Features

* Product listing
* Product details page
* Add products to cart
* Increase product quantity
* Decrease product quantity
* Remove products from cart
* Automatic subtotal and total calculation
* Dynamic cart item count
* Cart persistence with Local Storage
* Responsive design for desktop, tablet, and mobile
* Fast development with Vite
* Code quality checked with Oxlint

## Technologies Used

* React
* Vite
* JavaScript (ES6+)
* React Context API
* React Hooks
* CSS3
* Local Storage
* Oxlint

## Project Structure

```text
react-shopping-cart/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── Cart.jsx
│   │   └── ProductDetails.jsx
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── hooks/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

## Core Functionality

### Product Management

Products are displayed in a responsive product grid with:

* Product image
* Product name
* Category
* Price
* Add to Cart button

### Product Details

Users can open an individual product details page and return to the product listing.

### Shopping Cart

The cart supports:

* Adding products
* Increasing quantity
* Decreasing quantity
* Removing products
* Automatic subtotal calculation
* Automatic total calculation
* Dynamic cart item count

### Persistent Cart

Cart data is stored in the browser's **Local Storage**, allowing the cart to remain available after refreshing the page.

## Getting Started

### 1. Clone the repository

```bash
git clone <YOUR-GITHUB-REPOSITORY-URL>
```

### 2. Navigate to the project

```bash
cd react-shopping-cart
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## Code Quality

This project uses **Oxlint** for code quality and linting.

Run:

```bash
npm run lint
```

Current lint status:

```text
0 warnings
0 errors
```

## Responsive Design

ShopCart is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

## Learning Objectives

This project demonstrates practical React development concepts including:

* Component-based architecture
* React state management
* Context API
* Reusable components
* Props
* React Hooks
* Client-side navigation
* Local Storage
* Responsive CSS
* Modern JavaScript
* Project organization
* Code quality and linting

## Future Improvements

Possible future enhancements include:

* User authentication
* Backend API integration
* Product search and filtering
* Product categories
* Wishlist
* Payment gateway integration
* Order history
* User accounts
* Admin dashboard

## Author

**Abdul Khalek**

Teacher & Software/Web Developer

* Mathematics & Physics Instructor
* Flutter App Developer
* React & Full Stack Web Developer
* WordPress & Web Developer

### GitHub

https://github.com/teacher019

### LinkedIn

https://www.linkedin.com/in/abdul-khalek-sir/

---

If you find this project useful, feel free to explore the repository and give it a star.
