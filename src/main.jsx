import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import NewPage from './pages/NewPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import './index.css'

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<NewPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);