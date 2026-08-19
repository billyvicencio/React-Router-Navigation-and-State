import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { User, Home, Info, Compass, Sparkles } from 'lucide-react';

export const Navbar = ({ interactionCount }) => {
  const activeStyle = "text-indigo-400 font-semibold border-b-2 border-indigo-400 pb-1 flex items-center gap-2";
  const inactiveStyle = "text-gray-300 hover:text-indigo-400 transition-colors pb-1 flex items-center gap-2";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <Compass className="w-6 h-6 text-indigo-500" />
            <span>PORTFOLIO</span>
          </Link>

          <div className="flex items-center gap-8">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
              <Home className="w-4 h-4" /> Home
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
              <User className="w-4 h-4" /> Profile
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
              <Info className="w-4 h-4" /> About
            </NavLink>
          </div>

          {/* Event Handler Counter Badge */}
          <div className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-full text-xs font-mono text-indigo-300 border border-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Clicks: {interactionCount}</span>
          </div>

        </div>
      </div>
    </nav>
  );
};