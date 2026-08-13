# NOVA

NOVA is a responsive e-commerce storefront built with React and Vite. It includes a product catalog, category browsing, cart management, fake authentication, protected account access, and a simulated checkout flow.

The app pulls product data from DummyJSON and is designed as a frontend portfolio project with a polished shopping experience.

## Features

- Responsive landing page
- Product listing and category filtering
- Product sorting
- Product detail pages
- Cart with quantity updates and total calculation
- Fake login and sign up flow
- LocalStorage-based fake auth token
- Protected account and checkout verification pages
- Offline/online connection status banner
- Loading placeholders for home and product pages
- 404 page for unknown routes
- Mobile-friendly navigation and footer links

## Tech Stack

- React
- Vite
- JavaScript
- React Router
- CSS
- DummyJSON API

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app locally

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

## Project Structure

```text
src/
├── api/
│   └── api.js
├── assets/
├── components/
│   ├── ConnectionStatus.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ProtectedRoute.jsx
│   └── ...
├── context/
│   ├── AuthContext.jsx
│   ├── CartContext.js
│   ├── CartContext.jsx
│   └── useCart.js
├── pages/
│   ├── Account.jsx
│   ├── Cart.jsx
│   ├── CheckoutVerification.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   ├── ProductDetails.jsx
│   ├── Signup.jsx
│   └── product.jsx
├── styles/
│   ├── Auth.css
│   ├── Cart.css
│   ├── ConnectionStatus.css
│   ├── Footer.css
│   ├── Home.css
│   ├── Nav.css
│   ├── ProductDetails.css
│   └── products.css
├── App.jsx
├── index.css
├── main.jsx
└── ...
```

## Fake Authentication

This project includes a demo authentication system using localStorage.

- A fake token is created on login/signup
- The token is stored in localStorage
- Protected routes redirect users to the login page when they are not authenticated
- The account page and checkout verification page are protected

## Checkout Flow

The checkout flow is simulated for demo purposes:

- If the user is not logged in, checkout redirects to the login page
- Once authenticated, the order is verified
- A fake verification record is stored locally
- The cart is cleared after checkout

## API

Product data is sourced from DummyJSON:

https://dummyjson.com/

## Live Demo

[NOVA - Live Demo](https://nova-store-v1.vercel.app/)

## Notes

This is a frontend demo project intended for learning and portfolio use. It simulates authentication and checkout behavior without a real backend or database.

## License

This project is for educational/demo purposes.
