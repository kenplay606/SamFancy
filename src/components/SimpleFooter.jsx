import React from 'react'
import { Instagram, ArrowUp } from 'lucide-react'

const SimpleFooter = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { id: 'story', label: 'Story' },
    { id: 'spaces', label: 'Spaces' },
    { id: 'menu-section', label: 'Menu' },
    { id: 'visit', label: 'Visit' },
  ]

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="font-headline text-3xl text-white mb-2">SAM FANCY</h3>
            <p className="text-gold-accent text-sm">A Chinatown Story in LKF</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-400 hover:text-chinatown-red transition-colors duration-300 text-sm uppercase font-semibold"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/samfancyhk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-chinatown-red transition-colors duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={28} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-3 bg-chinatown-red hover:bg-red-700 text-white rounded-full transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-center">
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

export default SimpleFooter
