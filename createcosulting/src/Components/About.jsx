import { motion } from "framer-motion";
import { Target, Lightbulb, Award, Users, ArrowUpRight } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Precision",
      description: "Meticulously crafted strategies aligned with unique risk appetites.",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Innovation",
      description: "Blending traditional wisdom with cutting-edge wealth structures.",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Excellence",
      description: "A commitment to results that define the industry standard.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Partnership",
      description: "Building lasting legacies through transparency and mutual success.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0F1115] overflow-hidden text-zinc-100">
      {/* ATMOSPHERIC LAYER: Softens the darkness */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#1e222b,transparent)] pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-yellow-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-32">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-12 bg-yellow-600/50" />
              <span className="text-yellow-500/80 tracking-[0.4em] uppercase text-[10px] font-bold">
                Institutional Integrity
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight tracking-tight text-white">
              The Architecture of <br />
              <span className="italic text-yellow-500/90 font-light">Strategy.</span>
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg border-l border-zinc-800 pl-8"
          >
            We operate at the intersection of traditional capital preservation and 
            modern asset evolution, providing a structured approach to global complexity.
          </motion.p>
        </div>

        {/* MISSION STATEMENT: THE "STRUCTURED" BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-zinc-800/50 border border-zinc-800 mb-32 overflow-hidden rounded-sm">
          <div className="lg:col-span-8 bg-[#161920] p-10 md:p-16">
            <h3 className="text-yellow-500/60 font-mono text-[10px] mb-8 tracking-[0.3em] uppercase underline underline-offset-8 decoration-yellow-900">// CORE MANDATE</h3>
            <p className="text-2xl md:text-4xl font-serif font-light leading-snug text-zinc-200">
              "We challenge conventional wisdom by equipping our clients with the
              <span className="text-white italic"> structural autonomy </span> needed to operate with absolute precision."
            </p>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Consult", action: "Equip" },
                { label: "Advise", action: "Structure" },
                { label: "Educate", action: "Transform" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-default"
                >
                  <div className="text-zinc-500 line-through decoration-yellow-600/40 text-xs mb-1 group-hover:text-zinc-400 transition-colors">
                    {item.label}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-serif text-xl italic">{item.action}</span>
                    <ArrowUpRight className="w-3 h-3 text-yellow-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4 bg-[#1c2029] flex flex-col justify-center p-12 gap-12">
            {[
              { val: "$2.5B+", label: "Advisory Assets" },
              { val: "500+", label: "Private Mandates" },
              { val: "15+", label: "Years Practice" }
            ].map((stat, i) => (
              <div key={i} className="relative">
                <div className="text-3xl font-serif text-white mb-1">{stat.val}</div>
                <div className="text-yellow-600/60 uppercase tracking-[0.2em] text-[10px] font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CORE VALUES: GLASS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5, backgroundColor: "rgba(30, 34, 43, 0.8)" }}
              className="p-8 bg-[#161920]/60 border border-zinc-800 hover:border-yellow-600/30 transition-all duration-300 group rounded-sm backdrop-blur-sm"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-full text-yellow-500 mb-6 group-hover:bg-yellow-600 group-hover:text-black transition-all duration-500">
                {value.icon}
              </div>
              <h4 className="text-lg font-medium mb-3 text-white">{value.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}