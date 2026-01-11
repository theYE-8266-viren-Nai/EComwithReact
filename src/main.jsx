import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import React from 'react';
import ShoppingPage from './pages/ShoppingPage';
import CheckoutPage from './pages/CheckoutPage';
import OrdersPage from './pages/OrdersPage';
import './index.css';
import Header from './components/Header';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
     <Header/>

        <Routes>
          <Route path="/" element={<ShoppingPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

createRoot(document.getElementById('root')).render(<App />);