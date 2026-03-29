import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const images = [
    {
      src: '/images/bar-interior.jpg',
      alt: 'Sam Fancy Bar Interior',
      title: 'The Bar',
      fallback: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=2574&auto=format&fit=crop'
    },
    {
      src: '/images/happy-hour-1.jpg',
      alt: 'Happy Hour at Sam Fancy',
      title: 'Happy Hour',
      fallback: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2574&auto=format&fit=crop'
    },
    {
      src: '/images/happy-hour-2.jpg',
      alt: 'Signature Cocktails',
      title: 'Cocktails',
      fallback: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2569&auto=format&fit=crop'
    },
    {
      src: '/images/staff-event.jpg',
      alt: 'Sam Fancy Team',
      title: 'The Team',
      fallback: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2574&auto=format&fit=crop'
    },
  ]

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
            EXPERIENCE SAM FANCY
          </h2>
          <div className="h-1 w-24 bg-chinatown-red mx-auto mb-16" />

          <div className="grid md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group overflow-hidden aspect-video"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  onError={(e) => {
                    e.target.src = image.fallback
                  }}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-headline text-3xl">{image.title}</h3>
                </div>
                <div className="absolute inset-0 border-4 border-chinatown-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              From our stunning circular bar displays to our cozy atmosphere, every corner of 
              Sam Fancy tells a story. Come see for yourself why we're LKF's hidden gem.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default GallerySection
