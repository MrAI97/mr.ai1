import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface NavigationProps {
  onBookCall: () => void;
}

function Navigation({ onBookCall }: NavigationProps) {
  return (
    <nav className="container mx-auto px-8 py-8 flex justify-between items-center z-10 relative">
      <Link to="/" className="flex items-center space-x-3 group">
        <div className="relative">
          <img 
            src="/assets/ChatGPT Image Jun 2, 2025, 10_23_31 PM.png" 
            alt="Mr.AI Logo" 
            className="w-10 h-10 rounded-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
        </div>
        <span className="text-2xl font-bold tracking-wider gradient-text">Mr.AI</span>
      </Link>
      
      <div className="flex items-center space-x-12">
        <Link 
          to="/services/chat-agents" 
          className="nav-link tracking-wider hover:text-purple-400 transition-colors text-lg font-medium"
        >
          Chat Agents
        </Link>
        <Link 
          to="/services/automation" 
          className="nav-link tracking-wider hover:text-purple-400 transition-colors text-lg font-medium"
        >
          Automation
        </Link>
        <Link 
          to="/services/analytics" 
          className="nav-link tracking-wider hover:text-purple-400 transition-colors text-lg font-medium"
        >
          Analytics
        </Link>
        <button
          onClick={onBookCall}
          className="premium-button px-6 py-3 rounded-full flex items-center space-x-3 text-lg font-medium"
        >
          <Calendar className="w-5 h-5" />
          <span className="tracking-wider">Book a Call</span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;