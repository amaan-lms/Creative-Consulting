import { useState } from "react";
import { ChevronUp, Mail, Phone, MapPin, MessageCircle, Share2 } from "lucide-react";

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
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" }
    ],
    services: [
      { name: "Wealth Strategy", href: "#wealth" },
      { name: "Business Advisory", href: "#business" },
      { name: "Asset Protection", href: "#protection" },
      { name: "Strategic Education", href: "#education" }
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#cases" },
      { name: "White Papers", href: "#papers" },
      { name: "FAQ", href: "#faq" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Compliance", href: "#compliance" }
    ]
  };

  const socialLinks = [
    { icon: <MessageCircle className="w-5 h-5" />, href: "#contact", label: "Contact" },
    { icon: <Share2 className="w-5 h-5" />, href: "#share", label: "Share" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-[#D4AF37]/20">
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-yellow-600 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-yellow-500 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        
        {/* NEWSLETTER SECTION */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-semibold gold-text mb-4">
                Stay Informed
              </h3>
              <p className="text-gray-300 mb-8">
                Subscribe to our newsletter for exclusive insights and strategic perspectives.
              </p>
              
              {isSubscribed ? (
                <div className="bg-green-500/20 border border-green-500/50 p-4 rounded-lg">
                  <p className="text-green-400">Thank you for subscribing!</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-600 focus:outline-none transition"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* MAIN FOOTER CONTENT */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            
            {/* COMPANY INFO */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-semibold gold-text mb-6">Creative Consulting</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Strategic insight with timeless sophistication. We empower discerning individuals 
                and organizations with sophisticated wealth management and strategic education.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm">consulting@creative.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm">123 Financial District, New York, NY 10004</span>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-600 hover:border-yellow-600 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* FOOTER LINKS */}
            <div>
              <h5 className="text-white font-semibold mb-4">Company</h5>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-600 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-white font-semibold mb-4">Services</h5>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-600 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-white font-semibold mb-4">Resources</h5>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-600 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* LEGAL LINKS */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap gap-6">
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-500 hover:text-yellow-600 transition-colors duration-300 text-xs"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className="text-gray-500 text-xs">
                © 2024 Creative Consulting. All rights reserved.
              </div>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="mt-8 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> Creative Consulting provides strategic advisory and educational services. 
              We are not a registered investment advisor, broker-dealer, or financial institution. 
              All consultations are for educational and informational purposes only. 
              Past performance does not guarantee future results. Consult with qualified professionals 
              before making any financial decisions.
            </p>
          </div>
        </div>

        {/* SCROLL TO TOP BUTTON */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center text-black hover:opacity-90 transition-opacity duration-300 shadow-lg z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}