import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const HeroSection = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden grain">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
      
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bar-interior.jpg')",
        }}
      />

      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-headline text-7xl md:text-9xl tracking-wider mb-6 text-white">
            SAM FANCY
          </h1>
          <div className="h-1 w-32 bg-chinatown-red mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-gold-accent font-light tracking-wide mb-12">
            A Chinatown Story in the Heart of LKF
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <button
            onClick={() => scrollToSection('essentials')}
            className="px-10 py-4 bg-chinatown-red hover:bg-red-700 text-white font-semibold tracking-wider transition-all duration-300 transform hover:scale-105 border-2 border-chinatown-red"
          >
            FIND US
          </button>
          <button
            onClick={() => scrollToSection('two-floors')}
            className="px-10 py-4 bg-transparent border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-black font-semibold tracking-wider transition-all duration-300 transform hover:scale-105"
          >
            EXPLORE THE VIBE
          </button>
          <Link
            to="/menu"
            className="px-10 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold tracking-wider transition-all duration-300 transform hover:scale-105 text-center"
          >
            VIEW FULL MENU
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-10"
        >
          <ChevronDown size={40} className="text-gold-accent" />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
