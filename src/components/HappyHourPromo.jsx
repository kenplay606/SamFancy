import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Clock } from 'lucide-react'

const HappyHourPromo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const scrollToVisit = () => {
    document.getElementById('visit-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 md:py-24 px-6 bg-gradient-to-br from-chinatown-red to-red-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <Clock className="w-16 h-16 text-white" />
          </div>

          {/* Title */}
          <h2 className="font-headline text-5xl md:text-7xl mb-4 text-white">
            HAPPY HOUR
          </h2>

          {/* Price */}
          <div className="mb-6">
            <p className="text-8xl md:text-9xl font-bold text-white mb-2">
              $49
            </p>
            <p className="text-2xl md:text-3xl text-white/90">
              Selected Drinks · 6-9pm Daily
            </p>
          </div>

          {/* Time-based pricing */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
              <p className="text-white text-lg">
                <span className="font-bold text-2xl">$30</span> · 6-7pm
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
              <p className="text-white text-lg">
                <span className="font-bold text-2xl">$40</span> · 7-8pm
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
              <p className="text-white text-lg">
                <span className="font-bold text-2xl">$50</span> · 8-9pm
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToVisit}
            className="bg-white text-chinatown-red font-bold text-xl px-12 py-4 rounded-full hover:bg-gold-accent hover:text-black transition-all duration-300 shadow-2xl hover:scale-105"
          >
            JOIN HAPPY HOUR
          </button>

          <p className="text-white/80 text-sm mt-6">
            Mon - Sun · 6:00pm - 9:00pm
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default HappyHourPromo
