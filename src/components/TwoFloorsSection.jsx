import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Wine, Film } from 'lucide-react'

const TwoFloorsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="two-floors" className="relative py-24 md:py-32 px-6 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-5xl md:text-7xl text-center mb-16 text-white">
            CHOOSE YOUR ESCAPE
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-chinatown-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 md:p-12 border-2 border-zinc-800 group-hover:border-chinatown-red transition-colors duration-500 h-full">
                <Wine size={48} className="text-chinatown-red mb-6" />
                <h3 className="font-headline text-4xl md:text-5xl mb-4 text-white">
                  3RD FLOOR
                </h3>
                <p className="text-gold-accent text-xl md:text-2xl mb-6 font-semibold">
                  The Hangout
                </p>
                <p className="text-sm uppercase tracking-wider text-chinatown-red mb-6">
                  Chill. Happy Hour. Good Times.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Your neighborhood spot in the sky. A laid-back vibe with a bustling energy, 
                  perfect for after-work drinks, catching up with friends, and diving into our 
                  legendary $49 Happy Hour. Come as you are.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 md:p-12 border-2 border-zinc-800 group-hover:border-gold-accent transition-colors duration-500 h-full">
                <Film size={48} className="text-gold-accent mb-6" />
                <h3 className="font-headline text-4xl md:text-5xl mb-4 text-white">
                  4TH FLOOR
                </h3>
                <p className="text-gold-accent text-xl md:text-2xl mb-6 font-semibold">
                  The Speakeasy
                </p>
                <p className="text-sm uppercase tracking-wider text-gold-accent mb-6">
                  Craft. Shisha. Cinema.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Step into a more intimate, upscale world. Here, our bartenders become your 
                  personal guides, crafting inventive cocktails inspired by iconic films. 
                  Settle in for premium shisha, deep conversations, and a truly curated night out.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TwoFloorsSection
