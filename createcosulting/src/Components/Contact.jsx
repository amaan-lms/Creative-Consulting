import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, Phone, MapPin, Clock, Send, 
  CheckCircle, ChevronDown, Globe, ShieldCheck 
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 4000);
  };

  const offices = [
    { city: "New York", coord: "40.7128° N", zone: "Financial District" },
    { city: "London", coord: "51.5074° N", zone: "Mayfair" },
    { city: "Singapore", coord: "1.3521° N", zone: "Raffles Place" },
    { city: "Dubai", coord: "25.2048° N", zone: "DIFC" }
  ];

  const faqs = [
    { q: "What is the typical engagement process?", a: "Our process follows a strictly tiered protocol: Discovery, Blueprinting, Execution, and Sovereignty. Each phase is tailored to ensure absolute alignment with your legacy goals." },
    { q: "Do you serve international jurisdictions?", a: "Yes. Our global infrastructure allows us to manage cross-border wealth and business structures with full compliance in major financial hubs." },
    { q: "Is there a vetting process for new clients?", a: "To maintain our standard of precision, we accept a limited number of new mandates annually. The initial consultation serves as a mutual evaluation." }
  ];

  return (
    <section className="relative py-24 bg-[#050505] text-white overflow-hidden">
      {/* AMBIENT RADIAL GRADIENT */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-yellow-600 tracking-[0.4em] uppercase text-xs font-bold mb-4 block"
          >
            Inquiry Protocol
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-serif">
            Initiate <span className="italic text-yellow-600">Contact.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          
          {/* FORM PORTAL */}
          <div className="lg:col-span-7">
            <div className="relative p-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-2xl overflow-hidden">
              <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-2xl">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-20 text-center"
                    >
                      <CheckCircle className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
                      <h3 className="text-2xl font-serif mb-2">Inquiry Received</h3>
                      <p className="text-gray-500">A senior advisor will contact you within one business cycle.</p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Identity</label>
                          <input
                            type="text"
                            name="name"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 focus:border-yellow-600 focus:outline-none transition-all placeholder:text-gray-700"
                            placeholder="FULL NAME"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Electronic Mail</label>
                          <input
                            type="email"
                            name="email"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 focus:border-yellow-600 focus:outline-none transition-all placeholder:text-gray-700"
                            placeholder="EMAIL ADDRESS"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Engagement Area</label>
                        <select
                          name="service"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 focus:border-yellow-600 focus:outline-none transition-all appearance-none text-gray-400"
                          onChange={handleInputChange}
                        >
                          <option value="">SELECT SERVICE</option>
                          <option value="wealth">WEALTH STRATEGY</option>
                          <option value="business">BUSINESS ADVISORY</option>
                          <option value="family">FAMILY OFFICE</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Briefing</label>
                        <textarea
                          rows={4}
                          name="message"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 focus:border-yellow-600 focus:outline-none transition-all placeholder:text-gray-700 resize-none"
                          placeholder="OUTLINE YOUR OBJECTIVES..."
                          onChange={handleInputChange}
                        />
                      </div>

                      <button
                        type="submit"
                        className="group flex items-center justify-center gap-3 w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-5 rounded-lg transition-all tracking-[0.3em] text-[11px]"
                      >
                        SUBMIT INQUIRY <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* COORDINATES & INFO */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-yellow-600 font-bold mb-8">Global Coordinates</h4>
                <div className="grid grid-cols-2 gap-y-10">
                  {offices.map((office, i) => (
                    <div key={i} className="group">
                      <p className="text-lg font-serif italic mb-1 group-hover:text-yellow-500 transition-colors">{office.city}</p>
                      <p className="text-[10px] font-mono text-gray-500 tracking-widest">{office.coord}</p>
                      <p className="text-[10px] text-gray-400 uppercase mt-2">{office.zone}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 border border-white/5 bg-white/[0.02] rounded-xl">
                <div className="flex items-center gap-3 mb-4 text-yellow-600">
                  <ShieldCheck size={20} />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Encrypted Channel</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed italic">
                  All communications are handled with absolute discretion and institutional-grade privacy protocols. 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ACCORDION FAQ */}
        <div className="max-w-3xl mx-auto pt-24 border-t border-white/10">
          <h3 className="text-2xl font-serif italic mb-12 text-center">Frequently Asked <span className="text-yellow-600">Clarifications.</span></h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/5 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 bg-white/[0.02] text-left hover:bg-white/[0.04] transition-colors"
                >
                  <span className="text-sm font-medium tracking-wide">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-yellow-600 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-black"
                    >
                      <div className="p-6 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}