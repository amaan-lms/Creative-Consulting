import { motion, useScroll, useTransform } from "framer-motion";
import bg1 from "../assets/Old library Background.jpg";

export default function Hero() {
  const { scrollY } = useScroll();

  // Smooth cinematic motion
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.12]);
  const contentY = useTransform(scrollY, [0, 400], [0, -25]);

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-black flex items-center justify-center">

      {/* BACKGROUND */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.45]"
          style={{
            backgroundImage: `url(${bg1})`,
          }}
        />

        {/* GOLDEN CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.82),rgba(0,0,0,0.35),rgba(0,0,0,0.82))]" />

        {/* SOFT GOLD LIGHT */}
        <div className="absolute inset-0 bg-[#c89b5d]/10 mix-blend-screen" />

        {/* VIGNETTE */}
        <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.95)]" />

        {/* TOP/BOTTOM GOLD BARS */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c89b5d]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c89b5d]/40 to-transparent" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* SMALL LABEL */}
        {/* <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#d4af37] text-sm md:text-base italic font-light tracking-wide mb-4"
        >
          Unlock Your Thinking.
        </motion.p> */}

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-white font-serif font-semibold leading-[1.05] text-4xl sm:text-5xl md:text-6xl"
        >
          <span className="block whitespace-nowrap text-[#d6b073]">
            Unlock <span className="italic text-white">Your Thinking.</span>
          </span>

          <span className="block text-[#d6b073]">
            Build <span className="italic text-white">Your Structure.</span>
          </span>

          <span className="block mt-2 text-[#d6b073]">
            Control <span className="italic text-white">Your Future.</span>
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="max-w-2xl mx-auto mt-8 text-sm md:text-base text-[#d0c7bb] leading-relaxed font-light"
        >
          Creative Consulting provides private advisory and strategic education
          to build, protect and grow wealth with clarity and precision.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-10"
        >
          <button className="group relative overflow-hidden border border-[#d4af37]/50 bg-gradient-to-b from-[#d4af37] to-[#9f6f2e] px-8 py-4 text-sm font-semibold tracking-wide text-black shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]">
            <span className="relative z-10">
              Book a Private Consultation
            </span>

            <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
          </button>
        </motion.div>
      </motion.div>

      {/* SIDE DARK FADE */}
      <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-[1]" />
      <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent z-[1]" />

      {/* GOLD AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/10 blur-[120px]" />
    </section>
  );
}