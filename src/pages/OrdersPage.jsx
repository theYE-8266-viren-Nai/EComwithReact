import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const OrdersPage = () => {
  const { orders } = useCart();

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No orders yet</h2>
          <Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">My Orders</h1>
          <Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Continue Shopping
          </Link>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4 border-b pb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Order #{order.id}</h3>
                  <p className="text-gray-600">
                    {new Date(order.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                  <p className="text-gray-600 mt-2">
                    <span className="font-semibold">Ship to:</span> {order.name}, {order.address}, {order.city} {order.zipCode}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">${order.total.toFixed(2)}</p>
                  <span className="inline-block mt-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Completed
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/64'}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-blue-600">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;