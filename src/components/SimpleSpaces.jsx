import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Wine, Film } from 'lucide-react'

const SimpleSpaces = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const spaces = [
    {
      floor: '3RD FLOOR',
      name: 'The Hangout',
      description: 'Chill vibes, happy hour, and good times. Your neighborhood spot in the sky with our legendary $30-$50 happy hour.',
      icon: Wine,
      accent: 'chinatown-red',
    },
    {
      floor: '4TH FLOOR',
      name: 'The Speakeasy',
      description: 'Craft cocktails, premium shisha, and cinematic ambiance. An intimate, upscale experience for the discerning guest.',
      icon: Film,
      accent: 'gold-accent',
    },
  ]

  return (
    <section id="spaces" className="py-24 md:py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="font-headline text-5xl md:text-7xl mb-4 text-white">
              TWO FLOORS, ONE VIBE
            </h2>
            <div className="h-1 w-24 bg-chinatown-red mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-gray-300">
              Different atmospheres, same unforgettable experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {spaces.map((space, index) => {
              const Icon = space.icon
              return (
                <motion.div
                  key={space.floor}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-chinatown-red transition-all duration-300"
                >
                  <Icon size={40} className={`text-${space.accent} mb-4`} />
                  <h3 className="font-headline text-3xl text-white mb-2">
                    {space.floor}
                  </h3>
                  <p className={`text-${space.accent} text-xl font-semibold mb-4`}>
                    {space.name}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {space.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SimpleSpaces
