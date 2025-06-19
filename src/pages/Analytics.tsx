import React from 'react';
import { LineChart, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Analytics() {
  const benefits = [
    "Data-Driven Insights",
    "Predictive Analytics",
    "Real-time Monitoring",
    "Custom Reporting",
    "Trend Analysis",
    "Performance Metrics"
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-8 text-purple-400">
          <LineChart className="w-8 h-8" />
          <h1 className="text-4xl font-bold tracking-tight">Data Analytics</h1>
        </div>
        
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          Unlock valuable insights from your data with advanced AI-driven analytics. 
          Transform raw data into actionable intelligence for better decision-making.
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
              <li>• Business Intelligence</li>
              <li>• Customer Behavior Analysis</li>
              <li>• Market Trend Prediction</li>
              <li>• Performance Optimization</li>
              <li>• Risk Assessment</li>
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

export default Analytics;