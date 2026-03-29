import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const MenuItem = ({ code, name, description, price }) => (
  <div className="flex justify-between items-start py-3 md:py-4 border-b border-white/10 last:border-0 hover:bg-black/40 hover:scale-[1.01] transition-all duration-200 px-2 md:px-3 rounded-lg">
    <div className="flex-1 pr-3">
      <div className="flex items-baseline gap-2">
        {code && <span className="text-[#E31B23] text-xs md:text-sm font-bold shrink-0">{code}.</span>}
        <span className="font-semibold text-white text-sm md:text-base">{name}</span>
      </div>
      {description && <p className="text-gray-400 text-xs md:text-sm mt-0.5 italic leading-snug">{description}</p>}
    </div>
    {price && (
      <span className="text-[#D4AF37] font-bold text-sm md:text-base whitespace-nowrap">
        {price === '—' ? <span className="text-gray-600">—</span> : `$${price}`}
      </span>
    )}
  </div>
)

const SectionTitle = ({ children }) => (
  <div className="flex items-center gap-3 mt-8 mb-4">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E31B23]/50 to-transparent" />
    <span className="text-[#E31B23] font-bold text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap">{children}</span>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E31B23]/50 to-transparent" />
  </div>
)

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('drinks')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const tabs = [
    { id: 'drinks', label: '🍹 Drinks' },
    { id: 'cocktails', label: '🍸 Cocktails' },
    { id: 'food', label: '🍗 Food' },
    { id: 'wine', label: '🍷 Wine' },
  ]

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto flex justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md md:max-w-5xl"
        >
          <div className="relative w-full bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] shadow-2xl rounded-3xl border border-[#2a2a2a] overflow-hidden">
            
            {/* Red accent bar top */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E31B23] to-[#D4AF37]" />

            {/* Header */}
            <div className="px-6 md:px-10 pt-8 md:pt-12 pb-6 text-center">
              <p className="text-[#D4AF37] text-xs md:text-sm tracking-[0.2em] uppercase font-medium mb-3">Bar & Restaurant</p>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">MENU</h1>
            </div>

            {/* Promo Banner */}
            <div className="bg-[#E31B23] text-center py-3 px-4 border-y border-[#E31B23]/50">
              <p className="font-bold text-white text-sm md:text-base uppercase tracking-widest">
                🍗 Wednesday — 50% OFF Wings 🍗
              </p>
              <p className="text-[#D4AF37] text-xs mt-1">10% Service Charge Applies</p>
            </div>

            {/* Tabs */}
            <div className="grid grid-cols-4 border-b-2 border-white/10 bg-black/40">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 md:py-4 text-xs md:text-sm font-bold transition-all border-r border-white/10 last:border-r-0 ${
                    activeTab === tab.id
                      ? 'bg-[#E31B23] text-white shadow-lg'
                      : 'text-gray-400 hover:text-[#E31B23] hover:bg-black/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="px-6 md:px-10 pb-8 md:pb-10 pt-4 bg-gradient-to-b from-[#0f0f0f] to-black">

              {/* DRINKS */}
              {activeTab === 'drinks' && (
                <div className="grid md:grid-cols-2 gap-x-8">
                  <div>
                    <SectionTitle>Special Teas</SectionTitle>
                    <MenuItem code="T1" name="L.L.L.Y." description="Long Island Vodka, Gin, Rum, Tequila, Cointreau, Coke" price="118" />
                    <MenuItem code="T2" name="Tokyo Tea" description="Vodka, Gin, Rum, Tequila, Midori, Lemon-Lime Soda" price="118" />

                    <SectionTitle>Slushies</SectionTitle>
                    <MenuItem code="S1" name="Piña Colada" description="Pineapple, Coconut, Gold Rum" price="118" />
                    <MenuItem code="S2" name="Strawberry Daiquiri" description="Strawberry, Lime, Rum" price="118" />
                    <MenuItem code="S3" name="Miami Vice" description="Piña Colada & Strawberry Daiquiri" price="120" />
                    <MenuItem code="S4" name="Watermelon Marg" description="Watermelon, Lime, Cointreau, Tequila" price="120" />
                  </div>

                  <div>
                    <SectionTitle>Draft Beer</SectionTitle>
                    <MenuItem code="B1" name="Budweiser" price="20" />
                    <MenuItem code="B2" name="Goose Island IPA" price="70" />

                    <SectionTitle>Bottled Beer</SectionTitle>
                    <MenuItem code="B3" name="Corona" price="70" />
                    <MenuItem code="B4" name="Hoegaarden" price="70" />
                    <MenuItem code="B5" name="Hoegaarden Rosée" price="70" />

                    <SectionTitle>No Alcohol</SectionTitle>
                    <MenuItem code="N1" name="Arizona Ice Tea" price="42" />
                    <MenuItem code="N2" name="Coke / Zero / Soda / Tonic" price="38" />
                    <MenuItem code="N3" name="Fresh Juice" price="38" />
                  </div>
                </div>
              )}

              {/* COCKTAILS */}
              {activeTab === 'cocktails' && (
                <div>
                  <div className="text-center mt-2 mb-4 md:col-span-2">
                    <p className="text-xs md:text-sm text-gray-400 italic">Specialty Cocktails · At Bar: Association</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-8">
                    <div>
                      <MenuItem code="A1" name="Aku Aku" description="Pineapple, Gin, Lime, Peach, Rum" price="118" />
                      <MenuItem code="A2" name="Mai Tai" description="Lime, Orgeat, Curaçao, Rum" price="118" />
                      <MenuItem code="A3" name="Saturn" description="Lemon, Falernum, Passionfruit, Orgeat, Gin" price="118" />
                      <MenuItem code="A4" name="Jungle Bird" description="Pineapple, Lime, Campari, Dark Rum" price="118" />
                      <MenuItem code="A5" name="Bali Bali" description="Pineapple, Orange, Lime, Passionfruit, Falernum, Gin, Cognac, Rum" price="138" />
                    </div>
                    <div>
                      <MenuItem code="A6" name="Blue Hawaiian" description="Coconut, Pineapple, Blue Curaçao, Rum" price="118" />
                      <MenuItem code="A7" name="Dead Bastard" description="Ginny, Cognac, Gin, Bourbon, Rum, Angostura Bitters" price="128" />
                      <MenuItem code="A8" name="Pineapple Kingston Negroni" description="Pineapple Rum, Jamaican Rum, Campari, Vermouth" price="118" />
                      <MenuItem code="A9" name="Halekulani" description="Orange, Lemon, Grenadine, Angostura, Bourbon" price="118" />
                    </div>
                  </div>
                </div>
              )}

              {/* FOOD */}
              {activeTab === 'food' && (
                <div className="grid md:grid-cols-2 gap-x-8">
                  <div>
                    <SectionTitle>Appetizers</SectionTitle>
                    <MenuItem name="Crab Rangoon" description="Seasonal" price="82" />
                    <MenuItem name="Salt & Pepper Wings" price="72" />
                    <MenuItem name="Buffalo Wings" price="90" />
                    <MenuItem name="Fried Pork Dumplings" price="80" />
                    <MenuItem name="Vegetable Spring Rolls" price="32" />
                    <MenuItem name="French Fries" price="52" />
                    <MenuItem name="Tater Tots" price="48" />

                    <SectionTitle>Noodles</SectionTitle>
                    <MenuItem name="Sesame Cold Noodles" price="98" />
                  </div>

                  <div>
                    <SectionTitle>Chicken</SectionTitle>
                    <MenuItem name="General Tso's Chicken" price="108" />
                    <MenuItem name="Spicy Chili and Ginger" price="109" />
                    <MenuItem name="Orange Chicken" price="109" />
                    <MenuItem name="Sesame Chicken" price="98" />

                    <SectionTitle>Sides</SectionTitle>
                    <MenuItem name="Garlic Broccoli" price="24" />
                    <MenuItem name="White Rice" price="20" />
                    <MenuItem name="Prawn Crackers" price="20" />
                  </div>
                </div>
              )}

              {/* WINE */}
              {activeTab === 'wine' && (
                <div>
                  <div className="text-center mt-2 mb-4">
                    <p className="text-xs md:text-sm text-gray-400 italic">Wine & Champagne</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-8">
                    <div>
                      <MenuItem code="W1" name="Chiaro Pinot Grigio IGT" price="70" />
                      <MenuItem code="W2" name="Club Privado Rioja DOCa" price="70" />
                    </div>
                    <div>
                      <MenuItem code="W3" name="Chiaro Prosecco DOC, Veneto" price="70" />
                      <MenuItem code="W4" name="G.H. Mumm Champagne" description="Bottle" price="980" />
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="bg-black/60 border-t border-white/10 py-4 px-5 text-center">
              <p className="text-gray-500 text-xs md:text-sm">All prices in HKD · 10% service charge applies</p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MenuSection
