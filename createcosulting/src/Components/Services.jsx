import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, ArrowRight, TrendingUp, Shield, 
  BrainCircuit, Globe, Building2, Users2, Target 
} from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Wealth Strategy",
      tag: "Architecture",
      description: "Comprehensive financial planning and investment optimization for legacy builders.",
      features: ["Portfolio diversification", "Risk assessment", "Wealth preservation", "Tax optimization"],
    },
    {
      id: 2,
      icon: <Building2 className="w-5 h-5" />,
      title: "Business Advisory",
      tag: "Operations",
      description: "Strategic guidance for business growth and absolute operational excellence.",
      features: ["Structure optimization", "Growth strategy", "Efficiency analysis", "Market expansion"],
    },
    {
      id: 3,
      icon: <Shield className="w-5 h-5" />,
      title: "Asset Protection",
      tag: "Safeguard",
      description: "Advanced legal and structural strategies for safeguarding global assets.",
      features: ["Legal structures", "Insurance optimization", "Estate planning", "Creditor protection"],
    },
    {
      id: 4,
      icon: <BrainCircuit className="w-5 h-5" />,
      title: "Strategic Education",
      tag: "Literacy",
      description: "High-level coaching to enhance cognitive decision frameworks and literacy.",
      features: ["One-on-one mentoring", "Market analysis", "Strategy workshops", "Decision frameworks"],
    },
    {
      id: 5,
      icon: <Globe className="w-5 h-5" />,
      title: "Global Opportunities",
      tag: "Expansion",
      description: "International investment, cross-border analysis, and expansion strategies.",
      features: ["Cross-border analysis", "International entry", "Currency management", "Global compliance"],
    },
    {
      id: 6,
      icon: <Users2 className="w-5 h-5" />,
      title: "Family Office",
      tag: "Legacy",
      description: "Bespoke multi-generational management for high-net-worth family governance.",
      features: ["Multi-gen planning", "Family governance", "Philanthropy", "Legacy coordination"],
    },
  ];

  return (
    <section className="relative py-24 bg-[#0F1115] text-zinc-100 overflow-hidden">
      {/* ATMOSPHERIC GRADIENTS */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-12 bg-yellow-600/50" />
              <span className="text-yellow-500/80 tracking-[0.4em] uppercase text-[10px] font-bold">
                Strategic Pillars
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              Our Private <br />
              <span className="italic text-yellow-500/90 font-light">Provisions.</span>
            </h2>
          </div>
          <div className="max-w-xs border-l border-zinc-800 pl-8 space-y-4">
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">Framework Philosophy</p>
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              High-tier frameworks built for those who value absolute precision over high-frequency volume.
            </p>
          </div>
        </div>

        {/* SERVICES GRID: Muted Borders & Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              layout
              key={service.id}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              className={`relative p-8 rounded-sm transition-all duration-500 cursor-pointer group ${
                selectedService === service.id 
                ? "bg-[#1C2029] ring-1 ring-yellow-600/30 shadow-2xl z-20" 
                : "bg-[#161920]/60 border border-zinc-800 hover:border-zinc-700"
              }`}
            >
              <div className="flex justify-between items-start mb-10">
                <div className={`p-3 rounded-sm transition-colors duration-500 ${
                  selectedService === service.id ? "bg-yellow-600 text-black" : "bg-zinc-800 text-yellow-500 group-hover:text-yellow-400"
                }`}>
                  {service.icon}
                </div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-mono italic">
                  {service.tag}
                </span>
              </div>

              <h3 className="text-xl font-serif mb-4 text-white group-hover:text-yellow-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-light group-hover:text-zinc-400">
                {service.description}
              </p>

              <AnimatePresence>
                {selectedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6 pt-6 border-t border-zinc-800"
                  >
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-zinc-300 font-medium">
                          <div className="w-1 h-1 bg-yellow-600 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-yellow-600/90 text-black py-4 font-bold text-[10px] uppercase tracking-widest hover:bg-yellow-500 transition-all">
                      Request Technical Briefing
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {!selectedService && (
                <div className="flex items-center gap-2 text-yellow-600/60 text-[9px] uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Expand Details <ArrowRight size={10} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* PROCESS TIMELINE: The Deployment Process */}
        <div className="mt-32 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-zinc-800" />
          <div className="pt-20">
            <h3 className="text-zinc-500 text-[10px] tracking-[0.5em] uppercase font-bold mb-16 italic text-center">The Deployment Protocol</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { n: "01", t: "Discovery", d: "Deep forensic analysis of current fiscal structures." },
                { n: "02", t: "Blueprint", d: "Architecting the multi-layered strategic roadmap." },
                { n: "03", t: "Execution", d: "Precision-led institutional implementation phase." },
                { n: "04", t: "Sovereignty", d: "Continuous optimization for market autonomy." }
              ].map((step, i) => (
                <div key={i} className="group relative">
                  <div className="text-6xl font-serif italic text-white/5 group-hover:text-yellow-600/10 transition-colors mb-6 select-none">
                    {step.n}
                  </div>
                  <h4 className="text-white font-serif italic text-xl mb-3">{step.t}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light group-hover:text-zinc-400 transition-colors">{step.d}</p>
                  <div className="mt-6 w-0 group-hover:w-full h-px bg-yellow-600/30 transition-all duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}