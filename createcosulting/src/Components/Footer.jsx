import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ChevronUp, Mail, Phone, MapPin, 
  Globe, MessageCircle, ArrowRight, Shield 
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 5000);
    setEmail('');
  };

  const footerLinks = {
    company: ["About Us", "Our Team", "Careers", "Press"],
    services: ["Wealth Strategy", "Business Advisory", "Asset Protection", "Strategic Education"],
    resources: ["Insights", "Case Studies", "White Papers", "Compliance"]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* BACKGROUND DECOR */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-yellow-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* TOP TIER: NEWSLETTER & BRAND */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/5">
          <div className="lg:col-span-5">
            <h4 className="text-2xl font-serif mb-6 italic">Creative <span className="text-yellow-600 not-italic font-sans font-bold">Consulting.</span></h4>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-8">
              Equipping discerning individuals with the structures needed to operate with independence and precision.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-yellow-600 hover:border-yellow-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/[0.02] p-8 md:p-12 border border-white/5 rounded-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="max-w-xs">
                <h5 className="text-lg font-serif italic mb-2">Private Insights</h5>
                <p className="text-xs text-gray-500 tracking-wide uppercase">Subscribe to our quarterly strategic briefing.</p>
              </div>
              
              <div className="w-full md:w-auto">
                {isSubscribed ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-yellow-600 font-mono text-xs tracking-widest">
                    CONNECTION ESTABLISHED.
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex border-b border-white/20 pb-2 gap-4">
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="EMAIL ADDRESS" 
                      className="bg-transparent text-xs tracking-widest focus:outline-none w-full md:w-64 placeholder:text-gray-700"
                    />
                    <button type="submit" className="text-yellow-600 hover:text-yellow-500 transition-colors">
                      <ArrowRight size={20} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE TIER: NAVIGATION */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 py-20">
          <div className="col-span-2 space-y-6">
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Inquiries</h5>
            <div className="space-y-4">
              <div className="group flex items-center gap-4 text-sm text-gray-400 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-600 transition-colors">
                  <Phone size={14} className="group-hover:text-black" />
                </div>
                +1 (555) 123-4567
              </div>
              <div className="group flex items-center gap-4 text-sm text-gray-400 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-600 transition-colors">
                  <Mail size={14} className="group-hover:text-black" />
                </div>
                strategy@creative.com
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h5 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">{title}</h5>
              <ul className="space-y-4">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-yellow-600 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM TIER: COMPLIANCE & LEGAL */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center">
          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies", "Regulatory"].map(item => (
              <a key={item} href="#" className="text-[10px] uppercase tracking-widest text-gray-600 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <p className="text-[10px] font-mono text-gray-600 tracking-widest">
            © 2026 CREATIVE CONSULTING / ALL RIGHTS RESERVED
          </p>
        </div>

        {/* DISCLAIMER SENTINEL */}
        <div className="mt-16 p-8 border border-white/5 bg-white/[0.01] rounded-lg">
          <div className="flex gap-4">
            <Shield className="w-5 h-5 text-yellow-600 shrink-0" />
            <p className="text-[10px] text-gray-600 leading-relaxed uppercase tracking-wider">
              <span className="text-gray-400 font-bold">Mandatory Disclosure:</span> Creative Consulting provides strategic advisory and educational services. 
              We are not a registered investment advisor, broker-dealer, or financial institution. 
              Consultations are for educational and informational purposes only. 
              Sovereignty requires due diligence; past success does not mandate future trajectory.
            </p>
          </div>
        </div>
      </div>

      {/* FLOAT ACTION */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-12 right-12 w-12 h-12 border border-white/10 flex items-center justify-center group hover:border-yellow-600 transition-all rounded-full"
      >
        <ChevronUp size={20} className="text-gray-500 group-hover:text-yellow-600 group-hover:-translate-y-1 transition-all" />
      </button>
    </footer>
  );
}