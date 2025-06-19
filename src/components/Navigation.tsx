import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface NavigationProps {
  onBookCall: () => void;
}

function Navigation({ onBookCall }: NavigationProps) {
  return (
    <nav className="container mx-auto px-6 py-6 flex justify-between items-center z-10 relative">
      <Link to="/" className="flex items-center space-x-2">
        <img 
          src="/assets/ChatGPT Image Jun 2, 2025, 10_23_31 PM.png" 
          alt="Mr.AI Logo" 
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-xl font-bold tracking-wider">Mr.AI</span>
      </Link>
      <div className="flex items-center space-x-8">
        <Link to="/services/chat-agents" className="tracking-wider hover:text-purple-400 transition-colors">
          Chat Agents
        </Link>
        <Link to="/services/automation" className="tracking-wider hover:text-purple-400 transition-colors">
          Automation
        </Link>
        <Link to="/services/analytics" className="tracking-wider hover:text-purple-400 transition-colors">
          Analytics
        </Link>
        <button
          onClick={onBookCall}
          className="bg-white/5 hover:bg-white/10 transition-all px-4 py-2 rounded-full flex items-center space-x-2 border border-white/20"
        >
          <Calendar className="w-4 h-4" />
          <span className="tracking-wider">Book a Call</span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;