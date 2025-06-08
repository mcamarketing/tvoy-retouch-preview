import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, Heart, TrendingUp } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const testimonials = [
    {
      name: "Sarah M.",
      age: "24",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "I went from getting zero matches to having my pick of guys. The transformation was so natural, everyone thought I just had a great photographer. Worth every penny!",
      result: "Dating confidence ↗️",
      platform: "Dating Apps"
    },
    {
      name: "Jessica L.", 
      age: "28",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "My follower count literally tripled after posting my retouched photos. People kept asking if I had work done - the editing was THAT good but still looked like me.",
      result: "15K → 45K followers",
      platform: "Instagram"
    },
    {
      name: "Amanda R.",
      age: "31", 
      image: "https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "For the first time in my life, I love how I look in pictures. I stopped avoiding cameras and started living my life. This changed everything for me.",
      result: "Confidence: Priceless",
      platform: "Life"
    },
    {
      name: "Maria K.",
      age: "26",
      image: "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Professional headshots that landed me my dream job. The retouching was so subtle but made such a huge difference. Investment in my career paid off!",
      result: "Got the job!",
      platform: "LinkedIn"
    },
    {
      name: "Emily T.",
      age: "23",
      image: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "My wedding photos are absolutely stunning. Every guest asked who my photographer was, but the secret was Tvoy Retouch's magic touch on every single image.",
      result: "Perfect wedding memories",
      platform: "Wedding"
    },
    {
      name: "Rachel P.",
      age: "29",
      image: "https://images.pexels.com/photos/1239271/pexels-photo-1239271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Content creation became so much easier. My brand partnerships doubled because my content quality skyrocketed. ROI is insane!",
      result: "Brand deals ↗️",
      platform: "TikTok"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 text-coral-pink"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              <Star className="w-full h-full animate-sparkle" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-soft-black mb-6">
            Real Women,{' '}
            <span className="bg-gradient-to-r from-coral-pink to-rose-luxury bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-soft-black/70 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what happens when women stop settling for 'good enough' photos.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { number: "98%", label: "Satisfaction Rate", icon: <Heart className="w-6 h-6" /> },
            { number: "10K+", label: "Happy Clients", icon: <Star className="w-6 h-6" /> },
            { number: "24hr", label: "Avg Delivery", icon: <TrendingUp className="w-6 h-6" /> },
            { number: "4.9★", label: "Average Rating", icon: <Quote className="w-6 h-6" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-champagne/50 rounded-2xl p-6 hover:bg-champagne/80 transition-all duration-300"
            >
              <div className="text-coral-pink mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-soft-black mb-1">
                {stat.number}
              </div>
              <div className="text-soft-black/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-luxury hover:shadow-glow transition-all duration-300 border border-coral-pink/10 relative overflow-hidden group"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-coral-pink/20 group-hover:text-coral-pink/40 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-coral-pink fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-soft-black/80 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Result Badge */}
              <div className="bg-coral-pink/10 text-coral-pink px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                {testimonial.result}
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-soft-black">
                    {testimonial.name}
                  </div>
                  <div className="text-soft-black/60 text-sm">
                    Age {testimonial.age} • {testimonial.platform}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-coral-pink/5 to-rose-luxury/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-soft-black mb-6">
            Ready to Join Them?
          </h3>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-coral-pink text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-luxury transition-all duration-300 shadow-luxury hover:shadow-glow"
          >
            Start Your Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;