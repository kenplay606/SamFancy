import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const SimpleStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="story" className="py-20 md:py-24 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-4xl md:text-6xl mb-6 text-white">
            OUR STORY
          </h2>
          <div className="h-1 w-20 bg-chinatown-red mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Sam Fancy isn't just a name – it's a phonetic echo of San Francisco. 
            A tribute to the nostalgic spirit of Chinatown, right here in the heart of LKF. 
            We're your hidden escape where old-world charm meets modern cocktail craft.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SimpleStory
