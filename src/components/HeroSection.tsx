import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles, Crown, Users, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const socialProof = [
    { count: '10K+', label: 'Happy Clients' },
    { count: '50K+', label: 'Photos Enhanced' },
    { count: '4.9★', label: 'Average Rating' },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-coral-pink/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rose-luxury/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-champagne/30 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 mb-8 shadow-luxury"
          >
            <Crown className="w-5 h-5 text-coral-pink" />
            <span className="text-soft-black font-medium">Trusted by 10,000+ Women Worldwide</span>
            <Sparkles className="w-5 h-5 text-coral-pink animate-sparkle" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-soft-black mb-6 leading-tight"
          >
            Stop Hiding Behind{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-coral-pink to-rose-luxury bg-clip-text text-transparent">
                Filters
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-2 left-0 h-2 bg-coral-pink/30 -z-10"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-soft-black/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your photos with professional beauty retouching that makes you look like the{' '}
            <span className="font-semibold text-coral-pink">main character</span> of your own story.
            From 'cute\' to 'holy sh*t' in 24 hours.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-coral-pink text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-luxury transition-all duration-300 shadow-luxury hover:shadow-glow flex items-center space-x-2"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-soft-black text-soft-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-soft-black hover:text-white transition-all duration-300"
            >
              View Gallery
            </motion.button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {socialProof.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-coral-pink mb-2">
                  {item.count}
                </div>
                <div className="text-soft-black/70 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-10 hidden lg:block"
          >
            <div className="w-16 h-16 rounded-full bg-coral-pink/20 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-coral-pink" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-10 hidden lg:block"
          >
            <div className="w-12 h-12 rounded-full bg-rose-luxury/20 flex items-center justify-center">
              <Star className="w-6 h-6 text-rose-luxury" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 left-1/4 hidden lg:block"
          >
            <div className="w-20 h-20 rounded-full bg-champagne/40 flex items-center justify-center">
              <Crown className="w-10 h-10 text-coral-pink" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-soft-black/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-soft-black/30 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;