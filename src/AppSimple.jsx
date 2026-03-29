import React from 'react'
import Navigation from './components/Navigation'
import SimpleHero from './components/SimpleHero'
import SimpleStory from './components/SimpleStory'
import HappyHourMenu from './components/HappyHourMenu'
import SimpleSpaces from './components/SimpleSpaces'
import MenuSection from './components/MenuSection'
import SimpleVisit from './components/SimpleVisit'
import SimpleReviews from './components/SimpleReviews'
import SimpleFooter from './components/SimpleFooter'

function AppSimple() {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <SimpleHero />
      <SimpleStory />
      <section className="py-12 md:py-16 bg-black">
        <HappyHourMenu />
      </section>
      <SimpleSpaces />
      <div id="menu-section">
        <MenuSection />
      </div>
      <SimpleVisit />
      <SimpleReviews />
      <SimpleFooter />
    </div>
  )
}

export default AppSimple
