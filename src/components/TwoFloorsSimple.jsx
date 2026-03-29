import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const TwoFloorsSimple = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const floors = [
    {
      floor: '3RD FLOOR',
      name: 'The Hangout',
      features: [
        'Chill dive energy',
        '$49 Happy Hour',
        'Great for groups',
      ],
    },
    {
      floor: '4TH FLOOR',
      name: 'The Speakeasy',
      features: [
        'Craft cocktails',
        'Shisha & lounge',
        'Cinematic vibe',
      ],
    },
  ]

  return (
    <section id="spaces" className="py-16 md:py-20 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-headline text-4xl md:text-5xl text-center mb-12 text-white">
            TWO FLOORS, ONE VIBE
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {floors.map((floor, index) => (
              <motion.div
                key={floor.floor}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-chinatown-red transition-all duration-300"
              >
                <p className="text-sm text-chinatown-red font-bold mb-2">
                  {floor.floor}
                </p>
                <h3 className="text-3xl font-bold text-white mb-6">
                  {floor.name}
                </h3>
                <ul className="space-y-3">
                  {floor.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-gold-accent mr-3">•</span>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TwoFloorsSimple
