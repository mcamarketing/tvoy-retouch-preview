import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Upload, MessageCircle, Instagram, Mail, Phone, Send, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "I Woke Up Like This Skin ($35)",
    "Face Like a Face App Filter ($55)",
    "Body That Breaks the Internet ($75)",
    "Main Character Energy ($120)",
    "Custom Quote Needed"
  ];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles(prev => [...prev, ...files].slice(0, 10));
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram DM",
      subtitle: "@tvoyretouch",
      action: "Message Us",
      color: "from-pink-500 to-orange-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      subtitle: "Fastest response",
      action: "Chat Now",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      subtitle: "hello@tvoyretouch.com",
      action: "Send Email",
      color: "from-blue-500 to-purple-600"
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact\" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-soft-black mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-soft-black/70 mb-8">
              Your photos have been received. We'll get back to you within 2 hours with a quote and timeline.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  service: '',
                  message: ''
                });
                setSelectedFiles([]);
              }}
              className="bg-coral-pink text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-luxury transition-colors duration-300"
            >
              Submit Another Request
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-coral-pink/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-luxury/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-soft-black mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-coral-pink to-rose-luxury bg-clip-text text-transparent">
              Transform
            </span>{' '}
            Your Photos?
          </h2>
          <p className="text-xl text-soft-black/70 max-w-3xl mx-auto">
            Upload your photos and tell us your vision. We'll make it happen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-bold text-soft-black mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-champagne/50 rounded-2xl p-6 flex items-center space-x-4 cursor-pointer hover:shadow-luxury transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-soft-black group-hover:text-coral-pink transition-colors duration-300">
                      {method.title}
                    </h4>
                    <p className="text-soft-black/70 text-sm">
                      {method.subtitle}
                    </p>
                  </div>
                  <div className="text-coral-pink font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    {method.action} →
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-champagne/30 rounded-2xl p-6">
              <h4 className="font-bold text-soft-black mb-4">Quick Questions?</h4>
              <div className="space-y-2 text-sm">
                <div className="text-soft-black/70">
                  <span className="font-semibold">Turnaround:</span> 24-48 hours
                </div>
                <div className="text-soft-black/70">
                  <span className="font-semibold">File size:</span> Up to 10MB each
                </div>
                <div className="text-soft-black/70">
                  <span className="font-semibold">Formats:</span> JPG, PNG, TIFF, RAW
                </div>
                <div className="text-soft-black/70">
                  <span className="font-semibold">Revisions:</span> Unlimited
                </div>
              </div>
            </div>
          </motion.div>

          {/* Upload Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload */}
              <div>
                <label className="block text-soft-black font-semibold mb-3">
                  Upload Your Photos (Max 10)
                </label>
                <div className="border-2 border-dashed border-coral-pink/30 rounded-2xl p-8 text-center hover:border-coral-pink/60 transition-colors duration-300 relative group">
                  <Upload className="w-12 h-12 text-coral-pink mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-soft-black/70 mb-4">
                    Drag & drop your photos here, or click to browse
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    className="bg-coral-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-luxury transition-colors duration-300"
                  >
                    Choose Files
                  </motion.button>
                </div>
                
                {/* Selected Files */}
                {selectedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-champagne/30 rounded-lg p-3">
                        <span className="text-sm text-soft-black/80 truncate">
                          {file.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-coral-pink hover:text-rose-luxury text-sm font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-soft-black font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-coral-pink/30 rounded-xl focus:border-coral-pink focus:ring-2 focus:ring-coral-pink/20 outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-soft-black font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-coral-pink/30 rounded-xl focus:border-coral-pink focus:ring-2 focus:ring-coral-pink/20 outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-soft-black font-semibold mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 border border-coral-pink/30 rounded-xl focus:border-coral-pink focus:ring-2 focus:ring-coral-pink/20 outline-none transition-all duration-300"
                  placeholder="For faster updates"
                />
              </div>

              <div>
                <label className="block text-soft-black font-semibold mb-2">
                  Service Package *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                  className="w-full px-4 py-3 border border-coral-pink/30 rounded-xl focus:border-coral-pink focus:ring-2 focus:ring-coral-pink/20 outline-none transition-all duration-300"
                >
                  <option value="">Select a package</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-soft-black font-semibold mb-2">
                  Special Requests
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 border border-coral-pink/30 rounded-xl focus:border-coral-pink focus:ring-2 focus:ring-coral-pink/20 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us what you want to achieve with your photos..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-coral-pink text-white py-4 rounded-xl font-semibold text-lg hover:bg-rose-luxury transition-all duration-300 shadow-luxury hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Uploading...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send My Photos</span>
                  </>
                )}
              </motion.button>

              <p className="text-sm text-soft-black/60 text-center">
                We'll respond within 2 hours with a quote and timeline.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;