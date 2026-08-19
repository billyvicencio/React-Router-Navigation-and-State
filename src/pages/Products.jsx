import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const PRODUCTS_DATA = [
  { id: '1', name: 'Aether Noise-Canceling Headphones', price: 299, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80' },
  { id: '2', name: 'Minimalist Mechanical Keyboard', price: 189, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80' },
  { id: '3', name: 'Ultra-Wide Curved Monitor', price: 799, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80' }
];

export const Products = () => {
  const { addToCart } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8">Curated Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRODUCTS_DATA.map((product) => (
          <div key={product.id} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700/50 flex flex-col justify-between">
            <Link to={`/products/${product.id}`}>
              <div className="overflow-hidden aspect-video bg-gray-100 dark:bg-slate-700">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{product.name}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-xl mb-4">${product.price}</p>
              </div>
              <div className="flex gap-3">
                <Link
                  to={`/products/${product.id}`}
                  className="flex-1 text-center py-2.5 px-4 rounded-xl border border-gray-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                >
                  Details
                </Link>
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};