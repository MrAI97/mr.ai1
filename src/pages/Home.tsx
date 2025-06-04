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
      icon: <Phone className="w-6 h-6" />,
      title: "AI Phone System",
      description: "Automate appointments and customer service with an intelligent virtual receptionist.",
      link: "/services/phone-system"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Intelligent Chat Agents",
      description: "Enhance customer support with AI-powered chat agents that understand and respond naturally.",
      link: "/services/chat-agents"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automation Tools",
      description: "Streamline your workflow with intelligent automation solutions that save time and reduce errors.",
      link: "/services/automation"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Data Analytics",
      description: "Unlock valuable insights with advanced AI-driven analytics and data visualization.",
      link: "/services/analytics"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-6 pt-32 pb-40">
        <div className="max-w-4xl relative z-10">
          <h1 className="text-7xl font-bold mb-8 leading-tight tracking-tighter">
            <span className="typewriter inline-block">
              AI-Driven Business Transformation
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl tracking-wide leading-relaxed">
            Transform your business operations with cutting-edge AI solutions. 
            From intelligent chat agents to seamless automation and analytics.
          </p>
          <button
            onClick={onBookCall}
            className="glow-effect bg-white/5 px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-3 hover:bg-white/10 transition-all border border-white/20 group"
          >
            <span className="tracking-wider">Start Your AI Journey</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Spline Animation */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] -z-0 opacity-60">
          <spline-viewer url="https://prod.spline.design/Sfijfv1-jrRrLl7P/scene.splinecode"></spline-viewer>
        </div>
      </div>

      <div 
        ref={servicesRef}
        className={`container mx-auto px-6 py-32 transition-all duration-1000 transform ${
          servicesInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <h2 className="text-4xl font-bold mb-16 tracking-tight text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer border border-white/10 hover:border-white/20"
            >
              <div className="mb-4 text-white group-hover:text-purple-400 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-wide">{service.title}</h3>
              <p className="text-gray-400 tracking-wide leading-relaxed mb-6">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;