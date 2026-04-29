import { useState } from "react";
import { CheckCircle, ArrowRight, TrendingUp, Shield, BrainCircuit, Globe, Building2, Users2, Target } from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Wealth Strategy",
      description: "Comprehensive financial planning and investment optimization",
      features: [
        "Portfolio diversification strategies",
        "Risk assessment and management",
        "Long-term wealth preservation",
        "Tax optimization planning"
      ],
      price: "Starting at $5,000/month"
    },
    {
      id: 2,
      icon: <Building2 className="w-8 h-8" />,
      title: "Business Advisory",
      description: "Strategic guidance for business growth and operational excellence",
      features: [
        "Business structure optimization",
        "Growth strategy development",
        "Operational efficiency analysis",
        "Market expansion planning"
      ],
      price: "Starting at $7,500/month"
    },
    {
      id: 3,
      icon: <Shield className="w-8 h-8" />,
      title: "Asset Protection",
      description: "Advanced strategies for safeguarding your wealth and assets",
      features: [
        "Legal structure implementation",
        "Insurance optimization",
        "Estate planning coordination",
        "Creditor protection strategies"
      ],
      price: "Starting at $3,500/month"
    },
    {
      id: 4,
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "Strategic Education",
      description: "Personalized coaching to enhance your financial literacy",
      features: [
        "One-on-one mentoring sessions",
        "Market analysis training",
        "Investment strategy workshops",
        "Decision-making frameworks"
      ],
      price: "Starting at $2,000/month"
    },
    {
      id: 5,
      icon: <Globe className="w-8 h-8" />,
      title: "Global Opportunities",
      description: "International investment and expansion strategies",
      features: [
        "Cross-border investment analysis",
        "International market entry",
        "Currency risk management",
        "Global compliance guidance"
      ],
      price: "Starting at $10,000/month"
    },
    {
      id: 6,
      icon: <Users2 className="w-8 h-8" />,
      title: "Family Office",
      description: "Comprehensive wealth management for high-net-worth families",
      features: [
        "Multi-generational planning",
        "Family governance structures",
        "Philanthropic strategy",
        "Legacy planning coordination"
      ],
      price: "Custom pricing"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin with a comprehensive analysis of your current position and future aspirations."
    },
    {
      number: "02", 
      title: "Strategy",
      description: "Our team develops a tailored roadmap designed to achieve your specific objectives."
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute the strategy with precision, ensuring every detail aligns with your goals."
    },
    {
      number: "04",
      title: "Optimization",
      description: "Continuous monitoring and refinement to adapt to changing market conditions."
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-l from-yellow-600 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-r from-yellow-500 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold gold-text mb-6">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Tailored solutions designed to address your unique challenges and unlock new opportunities for growth and prosperity.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`bg-gradient-to-b from-gray-800/40 to-gray-900/40 rounded-xl border p-6 cursor-pointer transition-all duration-300 ${
                selectedService === service.id 
                  ? 'border-yellow-600 shadow-lg shadow-yellow-600/20' 
                  : 'border-yellow-600/20 hover:border-yellow-600/40'
              }`}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className="text-yellow-600 mb-4">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
              
              <div className="text-yellow-600 font-medium text-sm mb-4">{service.price}</div>
              
              {selectedService === service.id && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="mt-6 w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-4 py-2 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
              
              {selectedService !== service.id && (
                <button className="text-yellow-600 hover:text-yellow-500 transition-colors duration-300 text-sm font-medium flex items-center gap-1">
                  View Details
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* PROCESS SECTION */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-medium gold-text text-center mb-12">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-yellow-600/10 hover:border-yellow-600/30 transition-all duration-300">
                  <div className="text-3xl font-bold gold-text mb-4">{step.number}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {/* CONNECTOR LINE */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-yellow-600 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SPECIALIZATION AREAS */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-medium gold-text text-center mb-12">Areas of Specialization</h3>
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 p-8 md:p-12 rounded-2xl border border-yellow-600/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-yellow-600" />
                  Investment Strategy
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Alternative investment analysis</li>
                  <li>• Real estate portfolio optimization</li>
                  <li>• Private equity opportunities</li>
                  <li>• Sustainable investing strategies</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-yellow-600" />
                  Risk Management
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Comprehensive risk assessment</li>
                  <li>• Hedging strategies implementation</li>
                  <li>• Compliance framework development</li>
                  <li>• Crisis management planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CONSULTATION CTA */}
        <div className="text-center bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 p-8 md:p-12 rounded-2xl border border-yellow-600/30">
          <h3 className="text-2xl md:text-3xl font-medium gold-text mb-4">Transform Your Future Today</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards strategic excellence. Schedule a confidential consultation to discover how our services can accelerate your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
              Book Initial Consultation
            </button>
            <button className="border border-yellow-600 text-yellow-600 font-semibold px-8 py-3 rounded-md hover:bg-yellow-600/10 transition-colors">
              Download Service Overview
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}