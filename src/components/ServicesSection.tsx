import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Sparkles, Crown, Heart, Zap } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "I Woke Up Like This Skin",
      price: "$35",
      description: "Perfect for everyday confidence",
      features: [
        "Skin texture smoothing",
        "Natural glow enhancement", 
        "Minor blemish removal",
        "Color correction",
        "24-hour delivery"
      ],
      popular: false,
      gradient: "from-coral-pink/20 to-rose-luxury/20"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Face Like a Face App Filter",
      price: "$55",
      description: "Your best self, but make it believable",
      features: [
        "Everything in Basic",
        "Facial feature enhancement",
        "Eye brightening & whitening",
        "Lip enhancement",
        "Hair touch-ups"
      ],
      popular: true,
      gradient: "from-rose-luxury/30 to-coral-pink/30"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Body That Breaks the Internet",
      price: "$75",
      description: "Curves that cause car crashes",
      features: [
        "Everything in Enhanced",
        "Body contouring & shaping",
        "Posture correction",
        "Background enhancement",
        "Clothing adjustments"
      ],
      popular: false,
      gradient: "from-coral-pink/25 to-champagne/40"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Main Character Energy",
      price: "$120",
      description: "Red-carpet ready transformation",
      features: [
        "Everything included",
        "Complete transformation",
        "Multiple angle editing",
        "Custom requests",
        "Priority support",
        "Unlimited revisions"
      ],
      popular: false,
      gradient: "from-rose-luxury/35 to-coral-pink/25"
    }
  ];

  return (
    <section id="services" ref={ref} className="py-24 bg-white relative overflow-hidden">
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
            Choose Your{' '}
            <span className="bg-gradient-to-r from-coral-pink to-rose-luxury bg-clip-text text-transparent">
              Glow Up
            </span>
          </h2>
          <p className="text-xl text-soft-black/70 max-w-3xl mx-auto">
            From subtle enhancement to complete transformation - we've got the perfect package to make you feel like the main character you are.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-gradient-to-br ${service.gradient} backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-luxury group overflow-hidden ${
                service.popular ? 'ring-2 ring-coral-pink' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 bg-coral-pink text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className="text-coral-pink mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title & Price */}
              <h3 className="text-xl font-bold text-soft-black mb-2">
                {service.title}
              </h3>
              <div className="text-3xl font-bold text-coral-pink mb-2">
                {service.price}
              </div>
              <p className="text-soft-black/70 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-coral-pink flex-shrink-0" />
                    <span className="text-soft-black/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  service.popular
                    ? 'bg-coral-pink text-white hover:bg-rose-luxury shadow-glow'
                    : 'border-2 border-coral-pink text-coral-pink hover:bg-coral-pink hover:text-white'
                }`}
              >
                Choose This Package
              </motion.button>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-coral-pink/5 to-rose-luxury/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-soft-black/70 mb-6">
            Not sure which package is right for you?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-coral-pink text-coral-pink px-8 py-3 rounded-full font-semibold hover:bg-coral-pink hover:text-white transition-all duration-300 shadow-luxury"
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;