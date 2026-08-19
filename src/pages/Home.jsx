// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Notice the "export" keyword here!
export const Home = ({ onInteract }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">
        Welcome to My <span className="text-indigo-500">Web Portfolio</span>
      </h1>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
        A showcase application utilizing React Router navigation protocols, anchor states, and global component state management.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/profile"
          onClick={onInteract}
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors shadow-lg shadow-indigo-500/20"
        >
          View Profile
        </Link>
        <Link
          to="/about"
          onClick={onInteract}
          className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-600 text-slate-300 font-medium transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};