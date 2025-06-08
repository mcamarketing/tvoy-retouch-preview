import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Mail, Heart, Star, Crown } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/tvoyretouch",
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://wa.me/1234567890",
      label: "WhatsApp",
      color: "hover:text-green-500"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:hello@tvoyretouch.com",
      label: "Email",
      color: "hover:text-blue-500"
    }
  ];

  const footerLinks = {
    Services: [
      "Skin Retouching",
      "Face Enhancement", 
      "Body Contouring",
      "Full Transformation",
      "Custom Packages"
    ],
    Company: [
      "About Us",
      "Our Process",
      "Portfolio", 
      "Testimonials",
      "Blog"
    ],
    Support: [
      "FAQ",
      "Contact",
      "Pricing",
      "Revisions",
      "File Formats"
    ]
  };

  return (
    <footer className="bg-soft-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              <Crown className="w-6 h-6 text-coral-pink animate-float" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/assets/tvoy-retouch-embossed.png" 
                  alt="Tvoy Retouch" 
                  className="w-12 h-12 rounded-full"
                />
                <span className="text-3xl font-serif font-bold">
                  Tvoy Retouch
                </span>
              </div>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Transforming everyday photos into extraordinary moments. Join 10,000+ confident women who stopped settling for filters and started living their best life.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { number: "10K+", label: "Happy Clients" },
                  { number: "50K+", label: "Photos Enhanced" },
                  { number: "4.9★", label: "Rating" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-coral-pink mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 font-medium">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-xl font-bold text-coral-pink mb-4">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <motion.a
                          href="#"
                          whileHover={{ x: 5 }}
                          className="text-gray-300 hover:text-white transition-all duration-300 block"
                        >
                          {link}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-coral-pink/20 to-rose-luxury/20 rounded-3xl p-8 mb-12"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Get Beauty Tips & Exclusive Offers
              </h3>
              <p className="text-gray-300 mb-6">
                Join our newsletter for photography tips, retouching secrets, and special discounts just for subscribers.
              </p>
              
              <div className="flex flex-col md:flex-row max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-coral-pink focus:ring-2 focus:ring-coral-pink/20 outline-none transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-coral-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-luxury transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Tvoy Retouch. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <motion.a 
                href="#" 
                whileHover={{ y: -2 }}
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -2 }}
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -2 }}
                className="hover:text-white transition-colors duration-300"
              >
                Refund Policy
              </motion.a>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-coral-pink" />
              <span>for confident women</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;