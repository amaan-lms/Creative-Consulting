import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Check,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";

import bg1 from "../assets/Old library Background.jpg";

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const faqs = [
    {
      q: "What is the consultation process?",
      a: "Each engagement begins with a private consultation designed to assess your objectives, structure, and long-term positioning.",
    },
    {
      q: "Do you work with business owners?",
      a: "Yes. We advise entrepreneurs, operators, and private clients seeking strategic structure and financial clarity.",
    },
    {
      q: "Is discretion maintained?",
      a: "Absolutely. Every interaction is handled with strict confidentiality and professional discretion.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section className="relative overflow-hidden bg-black py-24">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.42]"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.7),rgba(0,0,0,0.2),rgba(0,0,0,0.7))]" />

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
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-[#d7b47a]">
            Private Contact
            <span className="italic text-white">
              {" "}Inquiry
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-[#d2cbc1] text-sm md:text-base leading-relaxed">
            Strategic consultations for individuals, business owners,
            and private clients seeking clarity, structure, and long-term positioning.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >

            {/* INFO BOX */}
            <div className="relative border border-[#c89b5d]/35 bg-black/45 backdrop-blur-sm p-10 overflow-hidden">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(200,155,93,0.15),transparent_70%)]" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 text-[#d7b47a]">
                  <ShieldCheck className="w-5 h-5" />

                  <span className="uppercase tracking-[0.3em] text-xs font-semibold">
                    Confidential Advisory
                  </span>
                </div>

                <h3 className="font-serif text-3xl text-white leading-snug mb-6">
                  Strategic guidance for those ready to operate differently.
                </h3>

                <div className="space-y-5">
                  {[
                    "Private consultations",
                    "Business structure advisory",
                    "Financial clarity sessions",
                    "Long-term strategic positioning",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 text-[#e6ddd0]"
                    >
                      <Check
                        className="w-4 h-4 text-[#d7b47a]"
                        strokeWidth={3}
                      />

                      <p className="text-sm md:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SMALL STATEMENT */}
            <div className="border border-[#c89b5d]/20 bg-black/30 px-8 py-8">
              <p className="font-serif italic text-2xl text-[#d7b47a] leading-relaxed">
                “We don't just advise.
                <span className="text-white">
                  {" "}We structure.”
                </span>
              </p>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative border border-[#c89b5d]/35 bg-black/45 backdrop-blur-sm overflow-hidden"
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,155,93,0.14),transparent_65%)]" />

            <div className="relative z-10 p-10 md:p-12">

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-20 text-center"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="flex items-center justify-center w-20 h-20 rounded-full border border-[#c89b5d]/40 bg-[#c89b5d]/10">
                        <Check className="w-10 h-10 text-[#d7b47a]" />
                      </div>
                    </div>

                    <h3 className="font-serif text-3xl text-white mb-4">
                      Inquiry Submitted
                    </h3>

                    <p className="text-[#d1cbc2]">
                      A private advisor will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-7"
                  >

                    <div>
                      <label className="block text-[#d7b47a] text-xs uppercase tracking-[0.25em] mb-3">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full border border-[#c89b5d]/20 bg-black/40 px-5 py-4 text-white placeholder:text-[#7c756b] outline-none focus:border-[#d7b47a] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[#d7b47a] text-xs uppercase tracking-[0.25em] mb-3">
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full border border-[#c89b5d]/20 bg-black/40 px-5 py-4 text-white placeholder:text-[#7c756b] outline-none focus:border-[#d7b47a] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[#d7b47a] text-xs uppercase tracking-[0.25em] mb-3">
                        Consultation Type
                      </label>

                      <select className="w-full border border-[#c89b5d]/20 bg-black/40 px-5 py-4 text-[#d8d0c5] outline-none focus:border-[#d7b47a] transition-all">
                        <option>Strategic Clarity Session</option>
                        <option>Private Wealth Advisory</option>
                        <option>Business Structure Program</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#d7b47a] text-xs uppercase tracking-[0.25em] mb-3">
                        Brief Description
                      </label>

                      <textarea
                        rows={5}
                        placeholder="Outline your goals and objectives..."
                        className="w-full border border-[#c89b5d]/20 bg-black/40 px-5 py-4 text-white placeholder:text-[#7c756b] outline-none focus:border-[#d7b47a] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex items-center justify-center gap-3 w-full border border-[#c89b5d]/50 bg-gradient-to-b from-[#d4af37] to-[#9f6f2e] py-4 text-black font-semibold shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]"
                    >
                      Submit Inquiry

                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* FAQ SECTION */}
        {/* <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-28"
        >

          <div className="text-center mb-14">
            <h3 className="font-serif text-4xl text-[#d7b47a]">
              Frequently Asked
              <span className="italic text-white">
                {" "}Questions
              </span>
            </h3>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#c89b5d]/20 bg-black/35 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  className="flex items-center justify-between w-full px-7 py-6 text-left"
                >
                  <span className="text-white text-lg font-medium">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-[#d7b47a] transition-transform duration-300 ${
                      activeFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7 text-[#d1cbc2] leading-relaxed border-t border-[#c89b5d]/10 pt-5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div> */}

      </div>

      {/* SIDE SHADOWS */}
      <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-[1]" />
      <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent z-[1]" />

      {/* GOLD GLOW */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c89b5d]/10 blur-[150px]" />
    </section>
  );
}