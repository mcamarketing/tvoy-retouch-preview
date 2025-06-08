import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Star, 
  ArrowRight, 
  Instagram, 
  MessageCircle, 
  Upload, 
  CheckCircle,
  Sparkles,
  Crown,
  Heart,
  Eye,
  Zap,
  Clock,
  Shield,
  Award,
  Users,
  TrendingUp,
  Camera,
  Palette,
  Filter,
  Wand2
} from 'lucide-react';
import PremiumCursor from './components/PremiumCursor';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import TestimonialsSection from './components/TestimonialsSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PremiumCursor />
      <div className="min-h-screen bg-champagne overflow-x-hidden">
        <Navigation />
        
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <HeroSection />
              <ServicesSection />
              <BeforeAfterGallery />
              <TestimonialsSection />
              <ProcessSection />
              <ContactSection />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;