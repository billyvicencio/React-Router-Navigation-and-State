import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

export default function App() {
  // Global interaction tracker using useState
  const [interactionCount, setInteractionCount] = useState(0);

  const handleGlobalInteraction = () => {
    setInteractionCount((prev) => prev + 1);
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        {/* Navigation Element */}
        <Navbar interactionCount={interactionCount} />

        {/* Dynamic Route Paths & Elements */}
        <main className="flex-1">
          <Routes>
            {/* Page 1: Home */}
            <Route path="/" element={<Home onInteract={handleGlobalInteraction} />} />

            {/* Page 2: Profile */}
            <Route path="/profile" element={<Profile onInteract={handleGlobalInteraction} />} />

            {/* Page 3: About */}
            <Route path="/about" element={<About />} />

            {/* ERROR State Page (Catches invalid paths) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}