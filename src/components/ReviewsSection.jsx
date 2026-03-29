import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const reviews = [
  {
    text: "Best bar in Hong Kong. Any flavor you like, Max and Kiko are your boys. Really know how to satisfy your palette.",
    author: "Denise",
    rating: 5,
  },
  {
    text: "A hidden gem in LKF! 3rd floor is a chilled laidback vibe... 4th floor has shisha and a more upscale bar with delicious and inventive cocktails.",
    author: "Tiffany T",
    rating: 5,
  },
  {
    text: "Hard to find cocktails of this calibre available in the heart of LKF. Love the team here as they're all so fun and knowledgeable.",
    author: "Stephen Leung",
    rating: 5,
  },
  {
    text: "The service is amazing! Johnathan was very personable. Different vibes in each room.",
    author: "Lydia Jordan",
    rating: 5,
  },
  {
    text: "Jonny is the best bartender in Hong Kong. The cocktails are creative and the atmosphere is perfect for a night out.",
    author: "Michael Chen",
    rating: 5,
  },
  {
    text: "Love the dual concept. Happy hour on 3rd floor is unbeatable, and 4th floor is perfect for a more sophisticated evening.",
    author: "Sarah Wong",
    rating: 5,
  },
]

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-5xl md:text-7xl text-center mb-8 text-white">
            DON'T JUST TAKE OUR WORD FOR IT
          </h2>
          
          <div className="h-1 w-24 bg-chinatown-red mx-auto mb-16" />

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-zinc-950 border-2 border-zinc-800 p-8 md:p-12"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={24} className="text-gold-accent fill-gold-accent" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-gray-300 text-center mb-6 italic leading-relaxed">
                  "{reviews[currentIndex].text}"
                </p>
                <p className="text-gold-accent text-center font-semibold">
                  — {reviews[currentIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-chinatown-red hover:bg-red-700 p-3 transition-colors duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-chinatown-red hover:bg-red-700 p-3 transition-colors duration-300"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-chinatown-red w-8' : 'bg-zinc-700'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ReviewsSection
