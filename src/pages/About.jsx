import React from 'react';

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-slate-200">
      <h1 className="text-3xl font-bold text-white mb-6">About This System</h1>
      <p className="text-slate-400 mb-8 leading-relaxed">
        This web portfolio demonstrates core React architecture standards, navigation protocols, state management, and custom error boundaries.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-lg font-bold text-indigo-400 mb-2">Routing Protocols</h3>
          <p className="text-sm text-slate-400">
            Utilizes React Router Client-Side Routing (<code className="text-indigo-300">BrowserRouter</code>, <code className="text-indigo-300">Routes</code>, <code className="text-indigo-300">Route</code>) to provide instant single-page view updates without page refreshes.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-lg font-bold text-indigo-400 mb-2">State & Events</h3>
          <p className="text-sm text-slate-400">
            Implements <code className="text-indigo-300">useState</code> hooks and event handler functions (<code className="text-indigo-300">onClick</code>, <code className="text-indigo-300">onChange</code>) to manage interactive UI updates dynamically.
          </p>
        </div>
      </div>
    </div>
  );
};