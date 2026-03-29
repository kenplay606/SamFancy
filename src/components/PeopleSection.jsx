import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const staff = [
  {
    name: 'Jonny',
    role: 'Master Mixologist',
    quote: '"Really know how to satisfy your palette"',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2574&auto=format&fit=crop',
  },
  {
    name: 'Max',
    role: 'Bartender',
    quote: '"Any flavor you like, Max is your boy"',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop',
  },
  {
    name: 'Kiko',
    role: 'Bartender',
    quote: '"So fun and knowledgeable"',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop',
  },
  {
    name: 'Jonathan',
    role: 'Host',
    quote: '"Very personable and amazing service"',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop',
  },
]

const PeopleSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-5xl md:text-7xl text-center mb-8 text-white">
            MEET THE FAMILY
          </h2>
          
          <div className="h-1 w-24 bg-gold-accent mx-auto mb-12" />

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-16 font-light">
            What makes Sam Fancy special? The people. Led by the legendary Jonny and his team, 
            we're known for our hospitality, our conversation, and making you feel right at home 
            from the moment you walk in. It's not just a bar; it's a gathering spot.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden aspect-square mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 border-2 border-gold-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-gold-accent text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm italic">{member.quote}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PeopleSection
