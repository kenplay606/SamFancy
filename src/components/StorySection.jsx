import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const StorySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-5xl md:text-7xl text-center mb-6 text-white">
            THE NAME'S A STORY.<br />THE VIBE IS A FEELING.
          </h2>
          
          <div className="h-1 w-24 bg-chinatown-red mx-auto mb-12" />

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center font-light">
            Sam Fancy isn't just a name; it's a feeling. A phonetic echo of San Francisco, 
            it's our tribute to the nostalgic spirit of Chinatown, right here in the heart of LKF. 
            We're a hidden escape from the city's hustle—a place where old-world charm meets modern 
            cocktail craft. It's a neighborhood bar, a sophisticated lounge, and a cultural nod, 
            all rolled into one.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default StorySection
