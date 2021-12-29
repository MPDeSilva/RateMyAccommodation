import React from 'react'
import Hero from '../components/Hero'
import InfoBanner from '../components/InfoBanner'
import MostHero from '../components/MostHero'
import TestomonialBanner from '../components/TestomonialBanner'


export default function Home() {
  return (
    <>

    <Hero data={undefined} />
    <InfoBanner />
    <TestomonialBanner />
    <MostHero />

    </>
    
  )
}
