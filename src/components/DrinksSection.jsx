import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const cocktails = [
  {
    name: 'The Way',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2574&auto=format&fit=crop',
  },
  {
    name: '花樣年華',
    subtitle: 'In the Mood for Love',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2574&auto=format&fit=crop',
  },
  {
    name: 'Las Americas',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2569&auto=format&fit=crop',
  },
  {
    name: 'The Green Hornet',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=2574&auto=format&fit=crop',
  },
  {
    name: 'French Concession',
    image: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?q=80&w=2574&auto=format&fit=crop',
  },
  {
    name: 'Sriracha Surprise',
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=2574&auto=format&fit=crop',
  },
]

const DrinksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-5xl md:text-7xl text-center mb-8 text-white">
            COCKTAILS WITH A STORY
          </h2>
          
          <div className="h-1 w-24 bg-chinatown-red mx-auto mb-12" />

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-16 font-light">
            Forget the ordinary. Our menu is a journey through cinema and culture. From the 
            unexpected kick of our Sriracha cocktail to the timeless elegance of 'In the Mood 
            for Love,' each drink is crafted with precision and a twist you won't find anywhere 
            else. Tell us your mood, and let our award-winning bartenders (ask for Jonny!) 
            create something unforgettable.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {cocktails.map((cocktail, index) => (
              <motion.div
                key={cocktail.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <img
                  src={cocktail.image}
                  alt={cocktail.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-white font-semibold text-lg md:text-xl mb-1">
                    {cocktail.name}
                  </h3>
                  {cocktail.subtitle && (
                    <p className="text-gold-accent text-sm">{cocktail.subtitle}</p>
                  )}
                </div>
                <div className="absolute inset-0 border-2 border-chinatown-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DrinksSection
