import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { id: 'story', label: 'Story' },
    { id: 'spaces', label: 'Spaces' },
    { id: 'menu-section', label: 'Menu' },
    { id: 'visit', label: 'Visit' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-headline text-2xl md:text-3xl text-white tracking-wider hover:text-chinatown-red transition-colors duration-300"
          >
            SAM FANCY
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-chinatown-red transition-colors duration-300 font-semibold tracking-wide text-sm uppercase"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/menu"
              className="px-6 py-2 bg-chinatown-red hover:bg-red-700 text-white font-semibold tracking-wide text-sm uppercase transition-all duration-300 rounded-full"
            >
              Full Menu
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-chinatown-red transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-zinc-800 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-chinatown-red transition-colors duration-300 font-semibold tracking-wide text-sm uppercase text-left"
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/menu"
                className="px-6 py-3 bg-chinatown-red hover:bg-red-700 text-white font-semibold tracking-wide text-sm uppercase transition-all duration-300 rounded-full text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Full Menu
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
