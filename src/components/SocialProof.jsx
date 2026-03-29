import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Star } from 'lucide-react'

const SocialProof = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const reviews = [
    {
      text: 'Best hidden gem in LKF!',
      author: 'Jessica Chen',
    },
    {
      text: 'Incredible cocktails and vibe',
      author: "Life's a Game",
    },
    {
      text: 'Jonny is the friendliest bartender',
      author: 'Tiffany T',
    },
  ]

  return (
    <section className="py-16 md:py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-headline text-4xl md:text-5xl text-center mb-12 text-white">
            WHAT PEOPLE SAY
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-accent text-gold-accent" />
                  ))}
                </div>
                <p className="text-lg text-white mb-4 italic">
                  "{review.text}"
                </p>
                <p className="text-gray-400">– {review.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof
