import React from 'react'
import Hero from '../components/Hero'
import InfoBanner from '../components/InfoBanner'
import MostHero from '../components/MostHero'
import TestomonialBanner from '../components/TestomonialBanner'
import firebase from '../firebase/clientApp'
import { useAuthState } from "react-firebase-hooks/auth"

export default function Home() {

  firebase
 const [user, loading, error] = useAuthState(firebase.auth());
 console.log("Loading:", loading, "|", "Current user:", user);

  return (
    <>

    <Hero data={undefined} />
    <InfoBanner />
    <TestomonialBanner />
    <MostHero />

    </>
    
  )
}

