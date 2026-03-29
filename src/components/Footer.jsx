import React from 'react'
import { Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-headline text-3xl md:text-4xl text-white mb-2">SAM FANCY</h3>
            <p className="text-gold-accent text-sm">A Chinatown Story in the Heart of LKF</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/samfancyhk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-chinatown-red transition-colors duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={32} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sam Fancy. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            4/F, The Plaza, 21 D'Aguilar Street, Lan Kwai Fong, Central, Hong Kong
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
