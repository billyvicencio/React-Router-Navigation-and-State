import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';

const Home = () => (
  <div className="max-w-7xl mx-auto px-4 py-24 text-center">
    <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
      Design Meets <span className="text-indigo-500">Performance</span>.
    </h1>
    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
      Explore ultra-responsive digital experiences engineered with modern React paradigms.
    </p>
  </div>
);

export default function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col font-sans">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}