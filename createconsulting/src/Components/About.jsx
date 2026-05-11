import { motion } from "framer-motion";
import bg1 from "../assets/Old library Background.jpg";

export default function About() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.28]"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* GOLD ATMOSPHERIC OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.85),rgba(0,0,0,0.3),rgba(0,0,0,0.85))]" />

      {/* VIGNETTE */}
      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.95)]" />

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c89b5d]/60 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-[#d7b47a]"
        >
          This isn't{" "}
          <span className="italic text-white">
            traditional consulting.
          </span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-8 text-sm sm:text-base md:text-lg leading-relaxed text-[#d3cec7] font-light"
        >
          We work with individuals, business owners, and private clients
          ready to move beyond surface-level advice and operate with
          structure and long-term control.
        </motion.p>
      </div>

      {/* SIDE SHADOWS */}
      <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-[1]" />
      <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent z-[1]" />

      {/* GOLD GLOW */}
      <div className="absolute top-1/2 left-1/2 h-[250px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c89b5d]/10 blur-[120px]" />
    </section>
  );
}