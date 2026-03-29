import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { MapPin, Clock, DollarSign, Users, Cigarette, UtensilsCrossed } from 'lucide-react'

const essentials = [
  {
    icon: DollarSign,
    title: 'The Legendary Happy Hour',
    description: '6 PM – 9 PM',
    highlight: '$30 | $40 | $50',
    color: 'chinatown-red',
  },
  {
    icon: MapPin,
    title: 'Location',
    description: '4/F, The Plaza, 21 D\'Aguilar St',
    highlight: 'Lan Kwai Fong, Central',
    color: 'gold-accent',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    description: 'Mon - Sun',
    highlight: '6 PM - Late',
    color: 'chinatown-red',
  },
  {
    icon: Users,
    title: 'Private Events',
    description: 'Host your next event with us',
    highlight: 'Inquire for bookings',
    color: 'gold-accent',
  },
  {
    icon: Cigarette,
    title: 'Premium Shisha',
    description: 'Available on 4th Floor',
    highlight: 'Multiple flavors',
    color: 'chinatown-red',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food Served',
    description: 'Delicious bites',
    highlight: 'Until Late',
    color: 'gold-accent',
  },
]

const EssentialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="essentials" className="relative py-24 md:py-32 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-5xl md:text-7xl text-center mb-16 text-white">
            THE ESSENTIALS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {essentials.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black border-2 border-zinc-800 p-6 hover:border-chinatown-red transition-colors duration-300"
                >
                  <Icon size={40} className={`text-${item.color} mb-4`} />
                  <h3 className="text-white font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-2">{item.description}</p>
                  <p className={`text-${item.color} font-semibold`}>{item.highlight}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full h-96 rounded-lg overflow-hidden border-4 border-chinatown-red"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9876543210123!2d114.15432!3d22.28111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE2JzUyLjAiTiAxMTTCsDA5JzE1LjYiRQ!5e0!3m2!1sen!2shk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sam Fancy Location"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="mailto:info@samfancy.hk"
              className="inline-block px-10 py-4 bg-chinatown-red hover:bg-red-700 text-white font-semibold tracking-wider transition-all duration-300 transform hover:scale-105"
            >
              INQUIRE FOR PRIVATE EVENTS
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EssentialsSection
