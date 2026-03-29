import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Clock, Flame, Users, Sparkles } from 'lucide-react'

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const features = [
    {
      icon: Clock,
      title: 'Happy Hour',
      description: '$49 drinks, 6-9pm daily',
    },
    {
      icon: Flame,
      title: 'Speakeasy Vibe',
      description: 'Hidden gem in LKF',
    },
    {
      icon: Sparkles,
      title: 'Premium Shisha',
      description: '4th floor lounge',
    },
    {
      icon: Users,
      title: 'Legendary Staff',
      description: 'Friendliest in town',
    },
  ]

  return (
    <section className="py-16 md:py-20 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-headline text-4xl md:text-5xl text-center mb-12 text-white">
            WHY CHOOSE SAM FANCY
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black border border-zinc-800 rounded-2xl p-6 text-center hover:border-chinatown-red transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-12 h-12 text-chinatown-red" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {feature.description}
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

export default WhyChooseUs
