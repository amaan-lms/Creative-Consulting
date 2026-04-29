import { useState } from "react";
import { ChevronDown, ChevronUp, Users, Award, Target, Lightbulb } from "lucide-react";

export default function About() {
  const [expandedCard, setExpandedCard] = useState(null);

  const teamMembers = [
    {
      name: "Alexander Sterling",
      role: "Founder & Principal Consultant",
      expertise: "Strategic Planning & Wealth Architecture",
      description: "With over 15 years of experience in private wealth management and strategic consulting, Alexander leads our team with visionary insight and unparalleled expertise."
    },
    {
      name: "Victoria Chen",
      role: "Senior Strategy Advisor",
      expertise: "Investment Optimization & Risk Management",
      description: "Victoria brings a sophisticated approach to portfolio diversification and long-term wealth preservation strategies for our elite clientele."
    },
    {
      name: "Marcus Williams",
      role: "Business Development Director",
      expertise: "Market Analysis & Growth Strategies",
      description: "Marcus specializes in identifying emerging opportunities and developing robust frameworks for sustainable business expansion."
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision",
      description: "Every strategy is meticulously crafted to align with your unique objectives and risk tolerance."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We blend traditional wisdom with cutting-edge approaches to unlock new possibilities."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Our commitment to exceptional results drives every decision and recommendation we make."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership",
      description: "We build lasting relationships based on trust, transparency, and mutual success."
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-600 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-yellow-500 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold gold-text mb-6">
            About Creative Consulting
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We are a premier advisory firm dedicated to transforming complex financial landscapes 
            into structured pathways for wealth creation and preservation.
          </p>
        </div>

        {/* MISSION STATEMENT */}
        <div className="mb-20 bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 md:p-12 rounded-2xl border border-yellow-600/20 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-medium gold-text mb-4">Our Mission</h3>
            <p className="text-gray-200 text-lg leading-relaxed max-w-4xl mx-auto">
              To empower discerning individuals and organizations with strategic insights that 
              unlock their full potential, building lasting legacies through sophisticated wealth 
              management and strategic education.
            </p>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-medium text-yellow-400 text-center mb-12">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-yellow-600/10 hover:border-yellow-600/30 transition-all duration-300 group"
              >
                <div className="text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-medium text-yellow-400 text-center mb-12">Our Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-gray-800/40 to-gray-900/40 rounded-xl border border-yellow-600/20 overflow-hidden hover:border-yellow-600/40 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-black" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                  <p className="text-yellow-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.expertise}</p>
                  
                  <div className="relative">
                    <button
                      onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                      className="flex items-center gap-2 text-gray-300 hover:text-yellow-600 transition-colors duration-300 text-sm"
                    >
                      {expandedCard === index ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          Learn More
                        </>
                      )}
                    </button>
                    
                    {expandedCard === index && (
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gold-text mb-2">$2.5B+</div>
            <p className="text-gray-400">Assets Under Advisory</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gold-text mb-2">500+</div>
            <p className="text-gray-400">Elite Clients Worldwide</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gold-text mb-2">15+</div>
            <p className="text-gray-400">Years of Excellence</p>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="text-center bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 p-8 md:p-12 rounded-2xl border border-yellow-600/30">
          <h3 className="text-2xl md:text-3xl font-medium gold-text mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how our strategic consulting can transform your financial future and build a lasting legacy.
          </p>
          <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}