import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Clock, Wine, Film, Users, Instagram, Mail, Phone } from 'lucide-react'
import HeroSection from './components/HeroSection'
import StorySection from './components/StorySection'
import HappyHourSection from './components/HappyHourSection'
import TwoFloorsSection from './components/TwoFloorsSection'
import MenuSection from './components/MenuSection'
import DrinksSection from './components/DrinksSection'
import MenuShowcaseSection from './components/MenuShowcaseSection'
import GallerySection from './components/GallerySection'
import PeopleSection from './components/PeopleSection'
import ReviewsSection from './components/ReviewsSection'
import EssentialsSection from './components/EssentialsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <StorySection />
      <HappyHourSection />
      <TwoFloorsSection />
      <MenuSection />
      <DrinksSection />
      <MenuShowcaseSection />
      <GallerySection />
      <PeopleSection />
      <ReviewsSection />
      <EssentialsSection />
      <Footer />
    </div>
  )
}

export default App
