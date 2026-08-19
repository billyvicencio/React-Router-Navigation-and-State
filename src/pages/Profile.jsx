import React, { useState } from 'react';

export const Profile = ({ onInteract }) => {
  const [likes, setLikes] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Available for hire');

  const handleLike = () => {
    setLikes((prev) => prev + 1);
    onInteract();
  };

  const handleStatusChange = (e) => {
    setStatusMessage(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-slate-200">
      <h1 className="text-3xl font-bold text-white mb-6">Developer Profile</h1>

      <div className="flex gap-4 mb-8 p-3 bg-slate-900 rounded-xl border border-slate-800 text-sm">
        <span className="text-slate-500 font-semibold">Jump To:</span>
        <a href="#bio" className="text-indigo-400 hover:underline">#Bio</a>
        <a href="#skills" className="text-indigo-400 hover:underline">#Skills</a>
        <a href="#interactive" className="text-indigo-400 hover:underline">#Interactive Controls</a>
      </div>

      <div className="space-y-12">
        <section id="bio" className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h2 className="text-xl font-semibold text-white mb-2">About Me</h2>
          <p className="text-slate-400 leading-relaxed">
            Full-stack web developer specializing in building modern web applications with React, Tailwind CSS, and scalable routing architectures.
          </p>
        </section>

        <section id="skills" className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h2 className="text-xl font-semibold text-white mb-4">Core Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React.js', 'React Router', 'JavaScript (ES6+)', 'Tailwind CSS', 'State Management'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-slate-800 text-indigo-300 text-xs font-medium rounded-full border border-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="interactive" className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h2 className="text-xl font-semibold text-white mb-4">Interactive Controls (useState)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <p className="text-sm text-slate-400 mb-2">Like Profile Counter:</p>
              <button
                onClick={handleLike}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors cursor-pointer"
              >
                👍 Like Profile ({likes})
              </button>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <p className="text-sm text-slate-400 mb-2">Update Custom Status:</p>
              <input
                type="text"
                value={statusMessage}
                onChange={handleStatusChange}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-indigo-500"
              />
              <p className="text-xs text-slate-500 mt-2">Current Status: <span className="text-indigo-400">{statusMessage}</span></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};