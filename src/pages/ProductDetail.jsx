import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS_DATA } from './Products';
import { useApp } from '../context/AppContext';
import { ArrowLeft } from 'lucide-react';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useApp();

  const product = PRODUCTS_DATA.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold dark:text-white mb-4">Product Not Found</h2>
        <button onClick={() => navigate('/products')} className="text-indigo-600 dark:text-indigo-400 underline cursor-pointer">
          Return to products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-800">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">${product.price}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Engineered with extreme precision and premium materials. Experience unmatched performance paired with clean, minimalist aesthetics.
          </p>
          <button
            onClick={() => addToCart(product)}
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/20 transition-all transform active:scale-95 cursor-pointer"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};