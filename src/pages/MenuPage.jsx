import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import InteractiveMenu from '../components/InteractiveMenu'

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-black font-semibold tracking-wider transition-all duration-300 transform hover:scale-105 rounded"
        >
          <ArrowLeft size={20} />
          BACK TO SITE
        </Link>
      </div>
      <InteractiveMenu />
    </div>
  )
}

export default MenuPage
