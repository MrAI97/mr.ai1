import React from 'react';
import { Phone, CheckCircle, ArrowRight, Calendar, Clock, XCircle, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

function PhoneSystem() {
  const benefits = [
    "24/7 Virtual Receptionist",
    "Natural Language Understanding",
    "Seamless Calendar Integration",
    "Multi-location Support",
    "Custom Voice & Personality",
    "Call Analytics & Insights"
  ];

  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Appointment Booking",
      description: "Effortlessly schedule appointments with intelligent calendar management and conflict resolution"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Easy Rescheduling",
      description: "Handle date and time changes with automated conflict resolution and customer notifications"
    },
    {
      icon: <XCircle className="w-8 h-8" />,
      title: "Smart Cancellations",
      description: "Process cancellations and manage waiting lists automatically with intelligent rebooking"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Never miss a booking with round-the-clock service that works while you sleep"
    }
  ];

  return (
    <div className="container mx-auto px-8 py-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center space-x-6 mb-12 text-purple-400">
          <Phone className="w-12 h-12" />
          <h1 className="text-6xl font-bold tracking-tight gradient-text">AI Phone System</h1>
        </div>
        
        <p className="text-2xl text-gray-300 mb-16 leading-relaxed max-w-4xl">
          Transform your business communications with our intelligent virtual receptionist. 
          Handle appointments, inquiries, and customer service automatically while maintaining 
          a professional and personal touch.
        </p>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold mb-8 gradient-text">Key Benefits</h2>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <span className="text-xl">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-3xl font-semibold mb-8 gradient-text">Perfect For</h2>
            <ul className="space-y-6 text-gray-300 text-xl">
              <li className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Medical Practices</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Beauty & Wellness Salons</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Restaurants & Cafes</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Professional Services</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Fitness Centers</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-semibold mb-12 text-center gradient-text">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-8 rounded-3xl group hover:scale-105 transition-transform">
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 gradient-text">{feature.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            to="/"
            className="glow-effect premium-button px-12 py-6 rounded-xl text-2xl font-semibold flex items-center space-x-4 group"
          >
            <span className="tracking-wider">Get Started</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PhoneSystem;