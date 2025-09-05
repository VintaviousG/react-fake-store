# React Fake Store

A modern e-commerce demo app built with React, Vite, and Material-UI, consuming the [Fake Store API](https://fakestoreapi.com/). This project demonstrates best practices in React development, clean UI/UX, and dynamic data fetching.

## Features

- **Category Browsing:**
  - Men's Clothing
  - Women's Clothing
  - Jewelery
- **Product Listing:**
  - Responsive grid layout using Material-UI
  - Product cards with image, title, price, and category
- **Product Details:**
  - Dedicated detail page for each product
  - Large image, full description, and price
- **Routing:**
  - React Router for seamless navigation
- **Loading & Error States:**
  - User-friendly feedback during data fetches

## Tech Stack

- [React](https://react.dev/) (with hooks)
- [Vite](https://vitejs.dev/) (fast dev/build tooling)
- [Material-UI (MUI)](https://mui.com/) (UI components)
- [React Router](https://reactrouter.com/)
- [Fake Store API](https://fakestoreapi.com/)

## Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/VintaviousG/react-fake-store.git
   cd react-fake-store
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the app:**
   ```bash
   npm run dev
   ```
4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Project Structure

```
src/
  api/                # API utilities
  components/         # Reusable UI components
  hooks/              # Custom React hooks
  pages/              # Route-based pages (Home, Category, Details)
  constants/          # Static values (categories, etc.)
  App.jsx             # Main app entry
  AppRouter.jsx       # Routing logic
```

## Why This Project?

- **Showcases real-world React patterns:**
  - Custom hooks for data fetching
  - Separation of concerns (API, UI, logic)
  - Responsive, accessible UI with MUI
- **Great for interviewers:**
  - Clean, readable code
  - Demonstrates async data handling, error states, and routing
  - Easily extendable (add cart, auth, etc.)

## Screenshots

![Home Page](./screenshots/home.png)
![Product Detail](./screenshots/detail.png)

## License

MIT

