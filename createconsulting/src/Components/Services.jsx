import { motion } from "framer-motion";
import {
  Target,
  Landmark,
  ShieldCheck,
  Check,
} from "lucide-react";

import bg1 from "../assets/Old library Background.jpg";

export default function Services() {
  const services = [
    {
      icon: <Target className="w-10 h-10" strokeWidth={1.5} />,
      title: "Strategic Clarity Session",
      description: "Gain insight and direction",
      button: "Book Now",
    },
    {
      icon: <Landmark className="w-10 h-10" strokeWidth={1.5} />,
      title: "Wealth Structure Program",
      description: "Build your financial foundation",
      button: "Learn More",
    },
    {
      icon: <ShieldCheck className="w-10 h-10" strokeWidth={1.5} />,
      title: "Private Wealth Advisory",
      description: "Elite, discreet consulting",
      button: "Apply Now",
    },
  ];

  const points = [
    "Individuals serious about financial growth",
    "Business owners building with intention",
    "Private clients who value discretion",
    "Those ready to think and operate differently",
  ];

  return (
    <section className="relative overflow-hidden bg-black py-20">
      
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.42]"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.65),rgba(0,0,0,0.15),rgba(0,0,0,0.65))]" />

      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.75)]" />

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c89b5d]/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#d7b47a]">
            Our Services
          </h2>

          <div className="mt-5 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c89b5d]/30 to-transparent" />
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden border border-[#c89b5d]/35 bg-black/45 backdrop-blur-sm px-8 py-10 text-center shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              
              {/* GOLD GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,155,93,0.18),transparent_65%)]" />

              <div className="relative z-10">
                <div className="flex justify-center text-[#d7b47a] mb-6">
                  {service.icon}
                </div>

                <h3 className="font-serif italic text-2xl text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-[#d1cbc2] text-sm mb-8">
                  {service.description}
                </p>

                <button className="border border-[#c89b5d]/60 bg-gradient-to-b from-[#d4af37] to-[#9f6f2e] px-7 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  {service.button}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MIDDLE STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mt-24 text-center"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c89b5d]/30 to-transparent" />

          <div className="pt-12">
            <h3 className="font-serif text-4xl md:text-5xl text-[#d7b47a]">
              We don't just advise.
              <span className="italic text-white">
                {" "}We structure.
              </span>
            </h3>

            <p className="mt-6 text-[#d1cbc2] text-sm md:text-base tracking-wide">
              Clarity. Control. Long Term Positioning.
            </p>
          </div>

          <div className="mt-12 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c89b5d]/30 to-transparent" />
        </motion.div>

        {/* BOTTOM CONTENT BOX */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="relative w-full max-w-3xl border border-[#c89b5d]/35 bg-black/40 backdrop-blur-sm px-10 py-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            
            {/* GOLD GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(200,155,93,0.14),transparent_70%)]" />

            <div className="relative z-10 space-y-6">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 text-[#ece5da]"
                >
                  <Check
                    className="w-4 h-4 text-[#d7b47a]"
                    strokeWidth={3}
                  />

                  <p className="text-sm md:text-base">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* SIDE SHADOWS */}
      <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-[1]" />
      <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent z-[1]" />

      {/* GOLD AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c89b5d]/10 blur-[150px]" />
    </section>
  );
}