import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About"; // <-- Added curly braces around About
import { NotFound } from "./pages/NotFound";

export default function App() {
  const [interactionCount, setInteractionCount] = useState(0);

  const handleGlobalInteraction = () => {
    setInteractionCount((prev) => prev + 1);
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        <Navbar interactionCount={interactionCount} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onInteract={handleGlobalInteraction} />} />
            <Route path="/profile" element={<Profile onInteract={handleGlobalInteraction} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}