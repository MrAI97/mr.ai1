import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ChatAgents from './pages/ChatAgents';
import Automation from './pages/Automation';
import Analytics from './pages/Analytics';
import PhoneSystem from './pages/PhoneSystem';
import { MouseCursor } from './components/MouseCursor';
import BookingModal from './components/BookingModal';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Router>
      <MouseCursor />
      <div className="min-h-screen bg-black text-white">
        <Navigation onBookCall={() => setIsFormOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onBookCall={() => setIsFormOpen(true)} />} />
          <Route path="/services/chat-agents" element={<ChatAgents />} />
          <Route path="/services/automation" element={<Automation />} />
          <Route path="/services/analytics" element={<Analytics />} />
          <Route path="/services/phone-system" element={<PhoneSystem />} />
        </Routes>
        {isFormOpen && <BookingModal onClose={() => setIsFormOpen(false)} />}
      </div>
    </Router>
  );
}

export default App;