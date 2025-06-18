import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Bot, Zap, LineChart, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  onBookCall: () => void;
}

function Home({ onBookCall }: HomeProps) {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Phone className="w-7 h-7" />,
      title: "AI Phone System",
      description: "Automate appointments and customer service with an intelligent virtual receptionist that never sleeps.",
      link: "/services/phone-system"
    },
    {
      icon: <Bot className="w-7 h-7" />,
      title: "Intelligent Chat Agents",
      description: "Enhance customer support with AI-powered chat agents that understand context and respond naturally.",
      link: "/services/chat-agents"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Automation Tools",
      description: "Streamline workflows with intelligent automation solutions that eliminate repetitive tasks.",
      link: "/services/automation"
    },
    {
      icon: <LineChart className="w-7 h-7" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced AI-driven analytics and visualization.",
      link: "/services/analytics"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="pattern-overlay"></div>
      
      <div className="container mx-auto px-8 pt-20 pb-32">
        <div className="max-w-5xl relative z-10">
          <div className="mb-12">
            <h1 className="text-8xl font-bold mb-8 leading-tight tracking-tighter">
              <span className="gradient-text">
                Mr.AI
              </span>
            </h1>
            <h2 className="text-5xl font-semibold mb-8 text-gray-200 tracking-wide">
              AI-Driven Business Transformation
            </h2>
            <p className="text-2xl text-gray-300 mb-16 max-w-3xl tracking-wide leading-relaxed font-light">
              Transform your business operations with cutting-edge AI solutions. 
              From intelligent chat agents to seamless automation and deep analytics.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <button
              onClick={onBookCall}
              className="glow-effect premium-button px-10 py-5 rounded-xl text-xl font-semibold flex items-center justify-center space-x-4 group"
            >
              <span className="tracking-wider">Start Your AI Journey</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <Link
              to="/services/chat-agents"
              className="glass-card px-10 py-5 rounded-xl text-xl font-medium flex items-center justify-center space-x-4 group transition-all"
            >
              <span className="tracking-wider text-gray-300">Explore Services</span>
              <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
        
        {/* Enhanced Spline Animation Container */}
        <div className="absolute top-0 right-0 w-[900px] h-[900px] -z-0 opacity-50">
          <div className="floating">
            <spline-viewer url="https://prod.spline.design/Sfijfv1-jrRrLl7P/scene.splinecode"></spline-viewer>
          </div>
        </div>
      </div>

      <div 
        ref={servicesRef}
        className={`container mx-auto px-8 py-40 transition-all duration-1000 transform ${
          servicesInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 tracking-tight gradient-text">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to revolutionize how you do business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card glass-card group p-10 rounded-3xl cursor-pointer transition-all"
            >
              <div className="mb-6 text-white group-hover:text-purple-400 transition-colors transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-wide group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 tracking-wide leading-relaxed mb-8 text-lg">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-flex items-center space-x-3 text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                <span>Learn More</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;