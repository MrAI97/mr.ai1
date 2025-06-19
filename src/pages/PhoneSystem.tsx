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
      icon: <Calendar className="w-6 h-6" />,
      title: "Appointment Booking",
      description: "Effortlessly schedule appointments with intelligent calendar management"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Easy Rescheduling",
      description: "Handle date and time changes with automated conflict resolution"
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "Smart Cancellations",
      description: "Process cancellations and manage waiting lists automatically"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Never miss a booking with round-the-clock service"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8 text-purple-400">
          <Phone className="w-8 h-8" />
          <h1 className="text-4xl font-bold tracking-tight">AI Phone System</h1>
        </div>
        
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          Transform your business communications with our intelligent virtual receptionist. 
          Handle appointments, inquiries, and customer service automatically while maintaining 
          a professional and personal touch.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl font-semibold mb-6">Perfect For</h2>
            <ul className="space-y-4 text-gray-300">
              <li>• Medical Practices</li>
              <li>• Beauty & Wellness Salons</li>
              <li>• Restaurants & Cafes</li>
              <li>• Professional Services</li>
              <li>• Fitness Centers</li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Core Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/20">
                <div className="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            to="/"
            className="glow-effect bg-white/5 px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-3 hover:bg-white/10 transition-all border border-white/20 group"
          >
            <span className="tracking-wider">Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PhoneSystem;