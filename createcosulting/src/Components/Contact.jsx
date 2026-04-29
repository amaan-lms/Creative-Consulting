import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "consulting@creative.com",
      description: "Response within 24 hours"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Office",
      content: "123 Financial District",
      description: "New York, NY 10004"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Hours",
      content: "9:00 AM - 6:00 PM",
      description: "Monday through Friday"
    }
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Financial District\nNew York, NY 10004",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "London",
      address: "456 Mayfair\nLondon, UK W1J 8HD",
      phone: "+44 20 7946 0958"
    },
    {
      city: "Singapore",
      address: "789 Raffles Place\nSingapore 048623",
      phone: "+65 6536 9888"
    },
    {
      city: "Dubai",
      address: "321 DIFC\nDubai, UAE",
      phone: "+971 4 123 4567"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-60 left-20 w-72 h-72 bg-gradient-to-r from-yellow-600 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-60 right-20 w-96 h-96 bg-gradient-to-l from-yellow-500 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold gold-text mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to transform your financial future? Contact our team of experts to begin your journey toward strategic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* CONTACT FORM */}
          <div className="bg-yellow-600/10 p-8 rounded-2xl border border-yellow-600/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500/50 p-6 rounded-lg mb-6">
                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Thank you for your inquiry!</p>
                    <p className="text-sm">We'll contact you within 24 hours.</p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-600 focus:outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-600 focus:outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-600 focus:outline-none transition"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-yellow-600 focus:outline-none transition"
                    >
                      <option value="">Select a service</option>
                      <option value="wealth">Wealth Strategy</option>
                      <option value="business">Business Advisory</option>
                      <option value="asset">Asset Protection</option>
                      <option value="education">Strategic Education</option>
                      <option value="global">Global Opportunities</option>
                      <option value="family">Family Office</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-600 focus:outline-none transition resize-none"
                    placeholder="Tell us about your goals and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* CONTACT INFORMATION */}
          <div className="space-y-8">
            <div className="bg-yellow-600/10 p-8 rounded-2xl border border-yellow-600/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-yellow-600 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      <p className="text-gray-300 text-sm">{info.content}</p>
                      <p className="text-gray-500 text-xs mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-600/10 p-8 rounded-2xl border border-yellow-600/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Global Offices</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offices.map((office, index) => (
                  <div key={index} className="border-l-2 border-yellow-600/30 pl-4">
                    <h4 className="text-yellow-600 font-semibold mb-2">{office.city}</h4>
                    <p className="text-gray-300 text-sm whitespace-pre-line mb-1">{office.address}</p>
                    <p className="text-gray-400 text-xs">{office.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 p-6 rounded-xl border border-yellow-600/30">
              <h4 className="text-white font-semibold mb-3">Emergency Consultation</h4>
              <p className="text-gray-300 text-sm mb-4">
                For urgent matters requiring immediate attention, our senior consultants are available 24/7.
              </p>
              <button className="w-full border border-yellow-600 text-yellow-600 font-semibold px-4 py-2 rounded-md hover:bg-yellow-600/10 transition-colors">
                Request Emergency Consultation
              </button>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-medium gold-text text-center mb-12">Frequently Asked Questions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-yellow-600/10">
              <h4 className="text-white font-semibold mb-3">What is the typical engagement process?</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our process begins with a discovery consultation, followed by strategy development, implementation, and ongoing optimization. Each engagement is tailored to your specific needs and timeline.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-yellow-600/10">
              <h4 className="text-white font-semibold mb-3">How long does an initial consultation take?</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Initial consultations typically last 60-90 minutes, allowing us to thoroughly understand your objectives and assess how we can best support your goals.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-yellow-600/10">
              <h4 className="text-white font-semibold mb-3">What makes your approach different?</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We combine sophisticated financial strategies with personalized education, empowering you to make informed decisions while we handle the complex implementation.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-yellow-600/10">
              <h4 className="text-white font-semibold mb-3">Do you work with international clients?</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Yes, we serve clients globally with dedicated teams in New York, London, Singapore, and Dubai, ensuring comprehensive support across international markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}