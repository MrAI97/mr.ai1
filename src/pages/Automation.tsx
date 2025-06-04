import React from 'react';
import { Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Automation() {
  const benefits = [
    "Workflow Optimization",
    "Error Reduction",
    "Time Savings",
    "Cost Efficiency",
    "Scalable Operations",
    "Process Consistency"
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8 text-purple-400">
          <Zap className="w-8 h-8" />
          <h1 className="text-4xl font-bold tracking-tight">Automation Tools</h1>
        </div>
        
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          Streamline your business processes with intelligent automation tools that reduce manual work,
          minimize errors, and accelerate your operations through AI-powered workflows.
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
            <h2 className="text-2xl font-semibold mb-6">Use Cases</h2>
            <ul className="space-y-4 text-gray-300">
              <li>• Document Processing</li>
              <li>• Data Entry & Validation</li>
              <li>• Report Generation</li>
              <li>• Email & Communication</li>
              <li>• Task Scheduling</li>
            </ul>
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

export default Automation;