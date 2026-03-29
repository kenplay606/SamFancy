import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const OurPeople = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-headline text-5xl md:text-7xl mb-4 text-white">
              THE HEART OF SAM FANCY
            </h2>
            <div className="h-1 w-24 bg-chinatown-red mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Our crew – making every night unforgettable
            </p>
          </div>

          {/* Main Staff Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/images/staff-event.jpg"
                alt="Sam Fancy team - Billy Lau and Shawn Hui"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center max-w-4xl mx-auto"
          >
            <blockquote className="text-2xl md:text-3xl text-white font-light italic mb-6 leading-relaxed">
              "Jonny is the friendliest bartender in town. The team really knows how to satisfy your palette."
            </blockquote>
            <p className="text-gold-accent text-lg">— Denise, Google Review</p>
          </motion.div>

          {/* Team Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 text-center hover:border-chinatown-red transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-3">Expert Mixologists</h3>
              <p className="text-gray-400">
                Crafting signature cocktails with passion and precision since day one.
              </p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 text-center hover:border-chinatown-red transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-3">Warm Hospitality</h3>
              <p className="text-gray-400">
                Every guest is treated like family in our Chinatown home away from home.
              </p>
            </div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 text-center hover:border-chinatown-red transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-3">Unforgettable Nights</h3>
              <p className="text-gray-400">
                Creating memories one cocktail at a time, every single night.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurPeople
