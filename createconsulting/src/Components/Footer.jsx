import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Globe,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    setIsSubscribed(true);

    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 4000);
  };

  const footerLinks = {
    Company: ["About Us", "Our Team", "Careers", "Press"],
    Services: [
      "Wealth Strategy",
      "Business Advisory",
      "Asset Protection",
      "Strategic Education",
    ],
    Resources: ["Insights", "Case Studies", "White Papers", "Compliance"],
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#060606] text-white pt-24 pb-10 border-t border-[#c89b5d]/20">

      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,155,93,0.08),transparent_55%)]" />

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c89b5d]/40 to-transparent" />

      <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-black to-transparent" />

      <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-black to-transparent" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#c89b5d]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-[#c89b5d]/10">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h4 className="font-serif text-4xl md:text-5xl leading-tight text-[#d7b47a]">
              Creative{" "}
              <span className="italic text-white">
                Consulting.
              </span>
            </h4>

            <p className="mt-7 max-w-md text-[#b8b1a7] text-sm md:text-base leading-relaxed">
              Strategic consulting and structured advisory for individuals,
              entrepreneurs, and private clients seeking clarity,
              positioning, and long-term control.
            </p>

            <div className="flex gap-4 mt-10">
              {[Globe, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 border border-[#c89b5d]/20 bg-black/40 flex items-center justify-center text-[#d7b47a] transition-all duration-300 hover:bg-[#c89b5d] hover:text-black"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7 border border-[#c89b5d]/20 bg-[#0b0b0b]/80 backdrop-blur-sm relative overflow-hidden"
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,155,93,0.08),transparent_70%)]" />

            <div className="relative z-10 p-8 md:p-12">

              <p className="uppercase tracking-[0.3em] text-[#d7b47a] text-xs mb-4">
                Private Insights
              </p>

              <h5 className="font-serif text-3xl text-white mb-4">
                Subscribe To Strategic Briefings
              </h5>

              <p className="text-[#a8a29a] text-sm leading-relaxed mb-8 max-w-xl">
                Receive curated insights, strategic perspectives,
                and private updates directly to your inbox.
              </p>

              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border border-[#c89b5d]/30 bg-[#c89b5d]/10 px-6 py-5 text-[#d7b47a]"
                >
                  Subscription successful.
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="EMAIL ADDRESS"
                    className="flex-1 bg-black/40 border border-[#c89b5d]/20 px-5 py-4 text-white placeholder:text-[#6f6960] outline-none focus:border-[#d7b47a] transition-all"
                  />

                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 bg-gradient-to-b from-[#d4af37] to-[#9f6f2e] px-8 py-4 text-black font-semibold transition-all duration-300 hover:scale-[1.02]"
                  >
                    Subscribe

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div> */}

        {/* MIDDLE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14 py-20">

          {/* CONTACT */}
          <div className="lg:col-span-2">
            <h5 className="uppercase tracking-[0.4em] text-[#d7b47a] text-xs font-semibold mb-8">
              Contact Details
            </h5>

            <div className="space-y-6">

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#c89b5d]/20 bg-black/40 flex items-center justify-center text-[#d7b47a]">
                  <Phone size={16} />
                </div>

                <div>
                  <p className="text-white text-sm">
                    +1 (555) 123-4567
                  </p>

                  <p className="text-[#8c8478] text-xs mt-1">
                    Monday — Friday / 9AM — 6PM
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#c89b5d]/20 bg-black/40 flex items-center justify-center text-[#d7b47a]">
                  <Mail size={16} />
                </div>

                <div>
                  <p className="text-white text-sm break-all">
                    IamTony@create-consulting.com
                  </p>

                  <p className="text-[#8c8478] text-xs mt-1">
                    Private communication channel
                  </p>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#c89b5d]/20 bg-black/40 flex items-center justify-center text-[#d7b47a]">
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="text-white text-sm leading-relaxed">
                    600 1st Avenue, Seattle,
                    <br />
                    WA, 98104
                  </p>

                  <p className="text-[#8c8478] text-xs mt-1">
                    United States
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* FOOTER LINKS */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="uppercase tracking-[0.4em] text-[#d7b47a] text-xs font-semibold mb-8">
                {title}
              </h5>

              <ul className="space-y-5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#b8b1a7] text-sm hover:text-[#d7b47a] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-[#c89b5d]/10 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms & Conditions"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] uppercase tracking-[0.2em] text-[#7d756a] hover:text-[#d7b47a] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <p className="text-[11px] uppercase tracking-[0.2em] text-[#7d756a] text-center">
            © 2026 Creative Consulting — All Rights Reserved
          </p>
        </div>
      </div>

      {/* SCROLL TOP */}
      {/* <button
        onClick={scrollToTop}
        className="absolute bottom-10 right-10 w-12 h-12 border border-[#c89b5d]/20 bg-black/40 flex items-center justify-center text-[#d7b47a] transition-all duration-300 hover:bg-[#c89b5d] hover:text-black"
      >
        <ChevronUp size={20} />
      </button> */}
    </footer>
  );
}