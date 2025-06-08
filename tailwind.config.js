/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coral-pink': '#F4A6A6',
        'rose-luxury': '#E8B4B8', 
        'champagne': '#FFF8F5',
        'soft-black': '#2C2C2C',
      },
      fontFamily: {
        'serif': ['Crimson Pro', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide': 'slide 60s linear infinite',
        'pulse-luxury': 'pulse-luxury 3s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 10s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'tilt': 'tilt 0.3s ease-in-out',
        'reveal': 'reveal 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'gradient-x': 'gradient-x 3s ease infinite',
        'morph': 'morph 0.3s ease-in-out',
        'ripple': 'ripple 0.6s ease-out',
        'text-reveal': 'text-reveal 0.8s ease-out forwards',
        'parallax': 'parallax linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)' },
          '50%': { transform: 'translateY(-20px) rotate(0deg)' },
          '75%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.2) rotate(180deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(244, 166, 166, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(244, 166, 166, 0.8), 0 0 60px rgba(244, 166, 166, 0.3)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'pulse-luxury': {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.05)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        tilt: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(3deg)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        morph: {
          '0%': { borderRadius: '2rem' },
          '50%': { borderRadius: '50%' },
          '100%': { borderRadius: '2rem' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        'text-reveal': {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0%)' },
        },
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-100px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(244, 166, 166, 0.25)',
        'glow': '0 0 30px rgba(244, 166, 166, 0.6)',
        'inner-glow': 'inset 0 0 20px rgba(244, 166, 166, 0.2)',
        'luxury-lg': '0 35px 60px -12px rgba(244, 166, 166, 0.4)',
        'glass': '0 8px 32px 0 rgba(244, 166, 166, 0.15)',
        'floating': '0 20px 40px -10px rgba(44, 44, 44, 0.25)',
        'cinematic': '0 50px 100px -20px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'shimmer': 'linear-gradient(90deg, transparent, rgba(244, 166, 166, 0.4), transparent)',
        'luxury-gradient': 'linear-gradient(135deg, #F4A6A6 0%, #E8B4B8 50%, #FFF8F5 100%)',
        'rose-gradient': 'linear-gradient(135deg, #F4A6A6 0%, #E8B4B8 100%)',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'foil': 'linear-gradient(45deg, #F4A6A6, #E8B4B8, #F4A6A6, #E8B4B8)',
        'radial-glow': 'radial-gradient(circle at center, rgba(244, 166, 166, 0.3), transparent)',
      },
      letterSpacing: {
        'luxury': '-0.025em',
      },
      borderRadius: {
        'luxury': '2rem',
        'xl-luxury': '3rem',
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      }
    },
  },
  plugins: [],
}