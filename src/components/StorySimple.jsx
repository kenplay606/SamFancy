import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const StorySimple = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="story" className="py-16 md:py-20 px-6 bg-zinc-950">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-headline text-4xl md:text-5xl mb-8 text-white">
            THE STORY
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            "Sam Fancy" is the Cantonese way to say San Francisco. A hidden speakeasy with nostalgic Chinatown soul, right in the heart of LKF. Two floors, countless stories, one unforgettable vibe.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default StorySimple
