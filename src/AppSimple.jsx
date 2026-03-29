import React from 'react'
import Navigation from './components/Navigation'
import SimpleHero from './components/SimpleHero'
import WhyChooseUs from './components/WhyChooseUs'
import HappyHourPromo from './components/HappyHourPromo'
import SignatureCocktails from './components/SignatureCocktails'
import MenuSection from './components/MenuSection'
import SimpleVisit from './components/SimpleVisit'
import SimpleFooter from './components/SimpleFooter'

function AppSimple() {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <SimpleHero />
      <WhyChooseUs />
      <HappyHourPromo />
      <SignatureCocktails />
      <div id="menu-section">
        <MenuSection />
      </div>
      <SimpleVisit />
      <SimpleFooter />
    </div>
  )
}

export default AppSimple
