import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'
import TestomonialBanner from '../components/TestomonialBanner'


export default function Home() {
  return (
    <>
    <Header />
    <HeroBanner data={undefined} />
    <TestomonialBanner />

    </>
    
  )
}
