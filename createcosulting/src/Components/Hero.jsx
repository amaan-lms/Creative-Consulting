import { motion, useScroll, useTransform } from "framer-motion";
import bg1 from "../assets/Old library Background.jpg";

export default function Hero() {
  const { scrollY } = useScroll();

  // Refined Parallax & Scaling
  const bgScale = useTransform(scrollY, [0, 1000], [1.05, 1.2]);
  const contentY = useTransform(scrollY, [0, 500], [0, -30]);
  const pillarX = useTransform(scrollY, [0, 500], [0, 40]);

  const pillars = [
    { id: "01", label: "Unlock", text: "Cognitive Edge" },
    { id: "02", label: "Build", text: "Legacy Assets" },
    { id: "03", label: "Control", text: "Market Destiny" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0f1115] flex items-center">
      
      {/* BACKGROUND - LAYERED REVEAL */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          style={{ scale: bgScale }}
          className="h-full w-full bg-cover bg-center grayscale-[70%] brightness-[0.5] opacity-60"
          style={{ backgroundImage: `url(${bg1})`, scale: bgScale }}
        />
        {/* Soft Vignette & Color Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0f1115_90%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115] via-[#0f1115]/60 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: BRANDING & COPY */}
        <motion.div style={{ y: contentY }} className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-yellow-600/60" />
              <span className="text-yellow-600/80 text-[11px] font-bold uppercase tracking-[0.4em]">
                Est. MMXXVI — Global Advisory
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif text-slate-50 leading-[1.05] mb-6">
              The Art of <br />
              <span className="italic text-yellow-600/90 font-light">Strategy.</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-md font-light leading-relaxed">
              We translate complex ambition into structured wealth. Private advisory for the modern architect of legacy.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-6"
          >
            <button className="relative group overflow-hidden bg-yellow-600 text-[#0f1115] px-10 py-4 font-bold uppercase text-[10px] tracking-widest transition-all hover:bg-yellow-500 shadow-xl shadow-yellow-600/10">
              <span className="relative z-10">Secure Consultation</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="px-10 py-4 border border-slate-700 text-slate-200 font-bold uppercase text-[10px] tracking-widest hover:border-yellow-600 hover:text-yellow-600 transition-all">
              Private Portfolio
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: REFINED CARDS */}
        <motion.div 
          style={{ x: pillarX }}
          className="hidden lg:flex flex-col gap-6 items-end"
        >
          {pillars.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + idx * 0.1, duration: 0.8 }}
              whileHover={{ x: -15, backgroundColor: "rgba(30, 41, 59, 0.4)" }}
              className="w-72 p-8 border-r-2 border-yellow-600/20 bg-slate-900/30 backdrop-blur-sm group cursor-pointer transition-all border border-slate-800/50"
            >
              <span className="text-yellow-600/40 font-mono text-[10px] block mb-3 group-hover:text-yellow-500 transition-colors">
                {item.id} //
              </span>
              <h3 className="text-slate-100 text-2xl font-serif mb-1 group-hover:text-yellow-500 transition-colors italic">
                {item.label}
              </h3>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* AMBIENT LIGHT DECOR */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-12 h-48 w-px bg-gradient-to-t from-yellow-600/30 to-transparent hidden md:block" />

    </section>
  );
}