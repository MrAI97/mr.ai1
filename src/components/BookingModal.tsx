import React from 'react';

interface BookingModalProps {
  onClose: () => void;
}

function BookingModal({ onClose }: BookingModalProps) {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-6 z-50 backdrop-blur-lg">
      <div className="bg-white/5 p-8 rounded-2xl w-full max-w-md relative border border-white/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6 tracking-wider">Schedule a Consultation</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-2 tracking-wide">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:border-purple-400 outline-none tracking-wide"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 tracking-wide">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:border-purple-400 outline-none tracking-wide"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 tracking-wide">Message</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 focus:border-purple-400 outline-none h-32 tracking-wide"
              placeholder="Tell us about your needs..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white/5 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all border border-white/20 tracking-wider"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;