import React from 'react'
import { motion } from 'framer-motion'

const SimpleHero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToVisit = () => {
    document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/bar-interior.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-headline text-7xl md:text-9xl mb-6 text-white leading-tight">
            SAM FANCY
          </h1>
          <p className="text-3xl md:text-4xl text-gray-200 mb-4 font-light">
            超有氛圍嘅聚會酒吧
          </p>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            A Chinatown Story in the Heart of LKF
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToMenu}
              className="bg-chinatown-red text-white font-bold text-xl px-12 py-5 rounded-full hover:bg-red-700 transition-all duration-300 shadow-2xl hover:scale-105"
            >
              SEE MENU
            </button>
            <button
              onClick={scrollToVisit}
              className="bg-white text-black font-bold text-xl px-12 py-5 rounded-full hover:bg-gold-accent transition-all duration-300 shadow-2xl hover:scale-105"
            >
              FIND US
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SimpleHero
