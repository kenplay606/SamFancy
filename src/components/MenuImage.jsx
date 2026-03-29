import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Download, ZoomIn } from 'lucide-react'

const MenuImage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <section className="py-16 md:py-20 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-headline text-4xl md:text-5xl text-center mb-8 text-white">
            OUR MENU
          </h2>

          {/* Menu Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div
              onClick={() => setLightboxOpen(true)}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src="/images/menu-cocktails.jpg"
                alt="Cocktails Menu"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-12 h-12 text-white" />
              </div>
            </div>
            <div
              onClick={() => setLightboxOpen(true)}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src="/images/menu-food.jpg"
                alt="Food Menu"
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">Tap to enlarge</p>
            <a
              href="/menu-samfancy.pdf"
              download
              className="inline-flex items-center gap-2 bg-chinatown-red text-white font-bold px-8 py-3 rounded-full hover:bg-red-700 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </motion.div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <div className="max-w-4xl w-full">
              <img
                src="/images/menu-cocktails.jpg"
                alt="Menu"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MenuImage
