import React from 'react'
import Navigation from './components/Navigation'
import SimpleHero from './components/SimpleHero'
import StorySimple from './components/StorySimple'
import TwoFloorsSimple from './components/TwoFloorsSimple'
import HappyHourPromo from './components/HappyHourPromo'
import MenuImage from './components/MenuImage'
import SignatureCocktails from './components/SignatureCocktails'
import OurPeople from './components/OurPeople'
import SocialProof from './components/SocialProof'
import SimpleVisit from './components/SimpleVisit'
import SimpleFooter from './components/SimpleFooter'

function AppSimple() {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <SimpleHero />
      <StorySimple />
      <TwoFloorsSimple />
      <HappyHourPromo />
      <MenuImage />
      <SignatureCocktails />
      <OurPeople />
      <SocialProof />
      <SimpleVisit />
      <SimpleFooter />
    </div>
  )
}

export default AppSimple
