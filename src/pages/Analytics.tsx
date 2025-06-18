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
    <div className="container mx-auto px-8 py-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center space-x-6 mb-12 text-purple-400">
          <LineChart className="w-12 h-12" />
          <h1 className="text-6xl font-bold tracking-tight gradient-text">Data Analytics</h1>
        </div>
        
        <p className="text-2xl text-gray-300 mb-16 leading-relaxed max-w-4xl">
          Unlock valuable insights from your data with advanced AI-driven analytics. 
          Transform raw data into actionable intelligence for better decision-making.
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
            <h2 className="text-3xl font-semibold mb-8 gradient-text">Use Cases</h2>
            <ul className="space-y-6 text-gray-300 text-xl">
              <li className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Business Intelligence</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Customer Behavior Analysis</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Market Trend Prediction</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Performance Optimization</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-purple-400 font-bold">•</span>
                <span>Risk Assessment</span>
              </li>
            </ul>
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

export default Analytics;