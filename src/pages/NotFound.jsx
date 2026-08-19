import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="max-w-md mx-auto my-20 p-8 bg-slate-900 border border-red-500/30 rounded-2xl text-center shadow-xl">
      <div className="flex justify-center mb-4">
        <AlertTriangle className="w-12 h-12 text-red-500" />
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">404 - Page Not Found</h1>
      <p className="text-slate-400 text-sm mb-6">
        The route path you entered does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-indigo-400 font-medium rounded-xl border border-slate-700 transition-colors text-sm"
      >
        Return to Home Page
      </Link>
    </div>
  );
};