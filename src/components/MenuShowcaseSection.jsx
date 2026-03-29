import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { X, Download, ZoomIn } from 'lucide-react'

const MenuShowcaseSection = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const menuImages = [
    {
      src: '/images/menu-cocktails.jpg',
      alt: 'Sam Fancy Cocktails Menu - Signature Cocktails',
      fallback: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2574&auto=format&fit=crop',
    },
    {
      src: '/images/menu-food.jpg',
      alt: 'Sam Fancy Food Menu - Chinatown Bites',
      fallback: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2574&auto=format&fit=crop',
    },
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
    setIsLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-chinatown-red/10 via-transparent to-transparent opacity-30" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-headline text-5xl md:text-7xl text-center mb-6 text-white">
              THE SPREAD
            </h2>
            <div className="h-1 w-24 bg-chinatown-red mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-gold-accent text-center mb-16 font-light italic">
              One image. Many stories. Our menu changes with the seasons – but the soul stays the same.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  No QR code gimmicks. No endless scrolling. Just a beautifully photographed, 
                  honest menu. From our Sriracha cocktail to our house dumplings, everything 
                  you see is made to be shared – and remembered.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Each drink tells a cinematic story. Each dish carries the warmth of Chinatown. 
                  This is more than a menu – it's a passport to a feeling.
                </p>
                <p className="text-gold-accent text-lg italic">
                  — The Sam Fancy team
                </p>

                <div className="pt-6">
                  <a
                    href="/menu-samfancy.pdf"
                    download
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-chinatown-red transition-colors duration-300 border-b border-gray-700 hover:border-chinatown-red pb-1"
                  >
                    <Download size={16} />
                    Download menu (PDF)
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                {menuImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="polaroid-frame bg-white p-4 shadow-2xl transform transition-all duration-500 hover:scale-102 hover:shadow-chinatown-red/50">
                      <div className="relative overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          onError={(e) => {
                            e.target.src = image.fallback
                          }}
                          className="w-full h-auto vintage-filter"
                          style={{
                            filter: 'sepia(0.1) saturate(1.1)',
                          }}
                        />
                        
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-chinatown-red text-white px-4 py-2 rounded flex items-center gap-2">
                            <ZoomIn size={20} />
                            <span className="font-semibold">ENLARGE</span>
                          </div>
                        </div>

                        <div className="absolute inset-0 border-4 border-chinatown-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </div>

                    <div className="film-grain absolute inset-0 pointer-events-none opacity-20" />
                  </div>
                ))}

                <p className="text-center text-gold-accent text-xs uppercase tracking-widest">
                  * Tap / Click to view our full menu *
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isLightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-chinatown-red transition-colors duration-300 z-50"
              aria-label="Close menu"
            >
              <X size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                onError={(e) => {
                  e.target.src = selectedImage.fallback
                }}
                className="w-full h-full object-contain"
                style={{
                  filter: 'sepia(0.1) saturate(1.1)',
                }}
              />
            </motion.div>

            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="text-gray-400 text-sm">Click anywhere to close</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .polaroid-frame {
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.1),
            0 10px 20px rgba(0, 0, 0, 0.2),
            0 0 40px rgba(220, 20, 60, 0.1);
        }

        .polaroid-frame:hover {
          box-shadow: 
            0 8px 12px rgba(0, 0, 0, 0.15),
            0 16px 32px rgba(0, 0, 0, 0.3),
            0 0 60px rgba(220, 20, 60, 0.3);
        }

        .film-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }

        .shadow-chinatown-red\/50 {
          box-shadow: 0 0 40px rgba(220, 20, 60, 0.5);
        }
      `}</style>
    </>
  )
}

export default MenuShowcaseSection
