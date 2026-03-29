import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Clock, MapPin, DollarSign, Mail } from 'lucide-react'

const SimpleVisit = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const visitInfo = [
    {
      icon: DollarSign,
      title: 'Happy Hour',
      detail: '6 PM – 9 PM',
      highlight: '$30 | $40 | $50',
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: '4/F, The Plaza, 21 D\'Aguilar St',
      highlight: 'Lan Kwai Fong, Central',
      link: 'https://maps.google.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      detail: 'Monday – Sunday',
      highlight: '6 PM – Late',
    },
    {
      icon: Mail,
      title: 'Private Events',
      detail: 'Host your next event',
      highlight: 'info@samfancy.hk',
      link: 'mailto:info@samfancy.hk',
    },
  ]

  return (
    <section id="visit-section" className="py-16 md:py-20 px-6 md:px-12 bg-black border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-4xl md:text-6xl text-center mb-12 text-white">
            VISIT US
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {visitInfo.map((item, index) => {
              const Icon = item.icon
              const content = (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black border border-zinc-800 rounded-2xl p-8 hover:border-chinatown-red transition-all duration-300"
                >
                  <Icon size={32} className="text-chinatown-red mb-4" />
                  <h3 className="text-white font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{item.detail}</p>
                  <p className="text-gold-accent font-bold">{item.highlight}</p>
                </motion.div>
              )

              return item.link ? (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              )
            })}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 rounded-2xl overflow-hidden border-2 border-chinatown-red"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9876543210123!2d114.15432!3d22.28111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE2JzUyLjAiTiAxMTTCsDA5JzE1LjYiRQ!5e0!3m2!1sen!2shk!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sam Fancy Location"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SimpleVisit
