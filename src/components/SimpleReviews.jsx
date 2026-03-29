import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Star } from 'lucide-react'

const SimpleReviews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const reviews = [
    {
      text: "Best bar in Hong Kong. Really know how to satisfy your palette.",
      author: "Denise",
      rating: 5,
    },
    {
      text: "A hidden gem in LKF! Different vibes on each floor with delicious cocktails.",
      author: "Tiffany T",
      rating: 5,
    },
    {
      text: "Hard to find cocktails of this calibre in LKF. The team is so fun and knowledgeable.",
      author: "Stephen Leung",
      rating: 5,
    },
    {
      text: "Amazing service! Johnathan was very personable. Different vibes in each room.",
      author: "Lydia Jordan",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-4xl md:text-6xl text-center mb-12 text-white">
            WHAT PEOPLE SAY
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold-accent fill-gold-accent" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4 italic leading-relaxed">
                  "{review.text}"
                </p>
                <p className="text-gold-accent text-sm font-semibold">
                  — {review.author}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SimpleReviews
