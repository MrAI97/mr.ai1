import React from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  onClose: () => void;
}

function BookingModal({ onClose }: BookingModalProps) {
  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center p-6 z-50 backdrop-blur-xl">
      <div className="glass-card p-10 rounded-3xl w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-3 tracking-wider gradient-text">
            Schedule a Consultation
          </h2>
          <p className="text-gray-400 text-lg">
            Let's discuss how AI can transform your business
          </p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-lg mb-3 tracking-wide font-medium">Name</label>
            <input
              type="text"
              className="w-full px-6 py-4 rounded-xl glass-card border-0 focus:ring-2 focus:ring-purple-400 outline-none tracking-wide text-lg transition-all"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label className="block text-lg mb-3 tracking-wide font-medium">Email</label>
            <input
              type="email"
              className="w-full px-6 py-4 rounded-xl glass-card border-0 focus:ring-2 focus:ring-purple-400 outline-none tracking-wide text-lg transition-all"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-lg mb-3 tracking-wide font-medium">Message</label>
            <textarea
              className="w-full px-6 py-4 rounded-xl glass-card border-0 focus:ring-2 focus:ring-purple-400 outline-none h-40 tracking-wide text-lg resize-none transition-all"
              placeholder="Tell us about your needs and goals..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full premium-button py-4 rounded-xl text-xl font-semibold tracking-wider transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;