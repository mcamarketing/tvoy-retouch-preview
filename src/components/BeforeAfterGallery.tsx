import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, EyeOff } from 'lucide-react';

const BeforeAfterGallery: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      before: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Face Enhancement"
    },
    {
      before: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Skin Perfection"
    },
    {
      before: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Full Transformation"
    },
    {
      before: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1239271/pexels-photo-1239271.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Body Contouring"
    },
    {
      before: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Portrait Enhancement"
    },
    {
      before: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=400",
      after: "https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Lifestyle Photography"
    }
  ];

  return (
    <section id="gallery" ref={ref} className="py-24 bg-champagne relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-soft-black mb-6">
            The{' '}
            <span className="bg-gradient-to-r from-coral-pink to-rose-luxury bg-clip-text text-transparent">
              Transformation
            </span>{' '}
            Speaks for Itself
          </h2>
          <p className="text-xl text-soft-black/70 max-w-3xl mx-auto">
            Real women, real results. See how we turn everyday photos into magazine-worthy moments.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-luxury hover:shadow-glow transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(selectedImage === index ? null : index)}
            >
              {/* Before/After Images */}
              <div className="relative w-full h-full">
                <img
                  src={selectedImage === index ? item.after : item.before}
                  alt={`${item.category} - ${selectedImage === index ? 'After' : 'Before'}`}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-lg rounded-full px-4 py-2 text-sm font-semibold text-soft-black">
                  {item.category}
                </div>
                
                {/* View Toggle */}
                <div className="absolute top-4 right-4 bg-coral-pink text-white rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                  {selectedImage === index ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </div>
                
                {/* Before/After Label */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-lg rounded-full px-4 py-2 text-sm font-bold">
                  {selectedImage === index ? 'AFTER' : 'BEFORE'}
                </div>
                
                {/* Click to reveal instruction */}
                <div className="absolute bottom-4 right-4 bg-coral-pink/90 text-white rounded-full px-4 py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to {selectedImage === index ? 'hide' : 'reveal'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-soft-black mb-6">
            Ready to See Yourself Like This?
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-coral-pink text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-luxury transition-all duration-300 shadow-luxury hover:shadow-glow"
            >
              Upload Your Photos
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-soft-black text-soft-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-soft-black hover:text-white transition-all duration-300"
            >
              See More Examples
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;