import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const SimpleStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="story" className="py-24 md:py-32 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Text Content */}
          <div>
            <h2 className="font-headline text-5xl md:text-7xl mb-6 text-white leading-tight">
              OUR STORY
            </h2>
            <div className="h-1 w-20 bg-chinatown-red mb-8" />
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
              Sam Fancy isn't just a name – it's a phonetic echo of San Francisco.
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              A tribute to the nostalgic spirit of Chinatown, right here in the heart of LKF. 
              We're your hidden escape where old-world charm meets modern cocktail craft. 
              Two floors, countless stories, and one unforgettable vibe.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/images/bar-interior.jpg"
                alt="Sam Fancy bar interior"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SimpleStory
