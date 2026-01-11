import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { cartItems, getTotalPrice, updateQuantity, removeFromCart, placeOrder } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    placeOrder(formData);
    navigate('/orders');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Checkout</h1>
          <Link to="/" className="text-blue-500 hover:text-blue-600">← Continue Shopping</Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Cart Items */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cart Items</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/80'}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-600">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-blue-600">${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Shipping Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Shipping Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Address</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">City</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">ZIP Code</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  required
                  placeholder="1234 5678 9012 3456"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-bold text-lg mt-6"
              >
                Place Order - ${getTotalPrice().toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;