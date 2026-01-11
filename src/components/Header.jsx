import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-blue-600">ShopHub</Link>
                    <div className="flex gap-6">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Products</Link>
                        <Link to="/checkout" className="text-gray-700 hover:text-blue-600 font-medium">Checkout</Link>
                        <Link to="/orders" className="text-gray-700 hover:text-blue-600 font-medium">Orders</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header