import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const SignatureCocktails = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const cocktails = [
    {
      name: 'Aku Aku',
      price: '$118',
      description: 'Pineapple, Gin, Lime, Peach, Rum',
    },
    {
      name: 'Mai Tai',
      price: '$118',
      description: 'Lime, Orgeat, Curaçao, Rum',
    },
    {
      name: 'Jungle Bird',
      price: '$118',
      description: 'Pineapple, Lime, Campari, Dark Rum',
    },
    {
      name: 'Bali Bali',
      price: '$138',
      description: 'Pineapple, Orange, Lime, Passionfruit',
    },
    {
      name: 'Blue Hawaiian',
      price: '$118',
      description: 'Coconut, Pineapple, Blue Curaçao, Rum',
    },
    {
      name: 'Dead Bastard',
      price: '$128',
      description: 'Cognac, Gin, Bourbon, Rum',
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
          <h2 className="font-headline text-4xl md:text-5xl text-center mb-4 text-white">
            SIGNATURE COCKTAILS
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Specialty Cocktails · At Bar: Association
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {cocktails.map((cocktail, index) => (
              <motion.div
                key={cocktail.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-gold-accent transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {cocktail.name}
                </h3>
                <p className="text-2xl font-bold text-chinatown-red mb-3">
                  {cocktail.price}
                </p>
                <p className="text-sm text-gray-400">
                  {cocktail.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* View Full Menu Button */}
          <div className="text-center mt-12">
            <a
              href="#menu-section"
              className="inline-block bg-chinatown-red text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-gold-accent hover:text-black transition-all duration-300"
            >
              VIEW FULL MENU
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SignatureCocktails
