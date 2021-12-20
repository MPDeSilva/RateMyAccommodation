import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import NavBar from '../components/NavBar'


export default function Home() {
  return (
    <>
    <NavBar />

    {/* <div className="flex h-full w-full ">
    <div className=" flex flex-col max-w-7xl mx-auto justify-center items-center"> */}
    <HeroBanner />
     

    {/* </div>
    </div> */}
    <Footer />
    </>
    
  )
}
