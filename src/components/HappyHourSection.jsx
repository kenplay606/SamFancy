import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Clock, DollarSign } from 'lucide-react'

const HappyHourSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const tiers = [
    { time: '6-7PM', price: '$30', color: 'from-yellow-500 to-yellow-600' },
    { time: '7-8PM', price: '$40', color: 'from-yellow-600 to-orange-500' },
    { time: '8-9PM', price: '$50', color: 'from-orange-500 to-red-500' },
  ]

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-headline text-6xl md:text-8xl text-yellow-400 mb-6">
              HAPPY HOUR
            </h2>
            <div className="h-1 w-32 bg-yellow-400 mx-auto mb-8" />
            <p className="text-2xl md:text-3xl text-white font-semibold">
              The Legendary Deal Everyone's Talking About
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.time}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="relative bg-black border-4 border-yellow-400 p-8 md:p-12 text-center transform group-hover:scale-105 transition-transform duration-300">
                  <Clock size={48} className="text-yellow-400 mx-auto mb-4" />
                  <p className="text-white text-xl md:text-2xl mb-4 font-semibold">
                    {tier.time}
                  </p>
                  <p className="font-headline text-6xl md:text-7xl text-yellow-400">
                    {tier.price}
                  </p>
                  <p className="text-gray-400 mt-4 text-sm uppercase tracking-wider">
                    Per Drink
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-zinc-900 border-2 border-yellow-400/30 p-8 md:p-12 text-center"
          >
            <DollarSign size={40} className="text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl text-white font-semibold mb-4">
              Why Wait? The Earlier You Come, The More You Save!
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Start your evening right with Hong Kong's best happy hour deal. Whether you're 
              catching up with friends on the 3rd floor or settling into the speakeasy vibe 
              on the 4th, our tiered pricing means the early bird gets the best deal. 
              Come at 6 PM for $30 drinks, or join us anytime before 9 PM to enjoy premium 
              cocktails at unbeatable prices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HappyHourSection
