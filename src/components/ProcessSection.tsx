import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Upload, Palette, Zap, Download, Clock, Shield, Award } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "Upload Your Photos",
      description: "Drag & drop or select up to 10 photos. We accept JPG, PNG, and RAW files.",
      time: "2 minutes",
      color: "coral-pink"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Professional Editing",
      description: "Our expert retouchers work their magic using industry-leading software and techniques.",
      time: "12-24 hours",
      color: "rose-luxury"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quality Review",
      description: "Every image goes through our rigorous quality check before delivery.",
      time: "2 hours",
      color: "coral-pink"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Download & Slay",
      description: "Get your stunning photos delivered via secure download link. Unlimited revisions included.",
      time: "Instant",
      color: "rose-luxury"
    }
  ];

  const guarantees = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24-48 Hour Delivery",
      description: "Most orders completed within 24 hours"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Secure & Private",
      description: "Your photos are encrypted and never shared"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Satisfaction Guarantee",
      description: "Unlimited revisions until you're happy"
    }
  ];

  return (
    <section id="process" ref={ref} className="py-24 bg-champagne relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral-pink/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-luxury/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-soft-black mb-6">
            From Upload to{' '}
            <span className="bg-gradient-to-r from-coral-pink to-rose-luxury bg-clip-text text-transparent">
              Icon Status
            </span>
          </h2>
          <p className="text-xl text-soft-black/70 max-w-3xl mx-auto">
            Our streamlined process ensures you get professional-quality retouching without the professional price tag.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mb-16">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-coral-pink to-rose-luxury transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-${step.color} text-white flex items-center justify-center text-xl font-bold shadow-luxury relative`}>
                    {index + 1}
                    
                    {/* Icon Background */}
                    <div className="absolute inset-2 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-center bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-luxury hover:shadow-glow transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-soft-black mb-3 group-hover:text-coral-pink transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-soft-black/70 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className={`inline-block bg-${step.color}/10 text-${step.color} px-3 py-1 rounded-full text-sm font-semibold`}>
                    {step.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-luxury"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-soft-black text-center mb-8">
            Our Promise to You
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="text-coral-pink mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {guarantee.icon}
                </div>
                <h4 className="font-bold text-soft-black mb-2">
                  {guarantee.title}
                </h4>
                <p className="text-soft-black/70 text-sm">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-soft-black mb-6">
            Ready to Start Your Transformation?
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-coral-pink text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-luxury transition-all duration-300 shadow-luxury hover:shadow-glow flex items-center space-x-2"
            >
              <Upload className="w-5 h-5" />
              <span>Upload Photos Now</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-soft-black text-soft-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-soft-black hover:text-white transition-all duration-300"
            >
              Ask Questions First
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;