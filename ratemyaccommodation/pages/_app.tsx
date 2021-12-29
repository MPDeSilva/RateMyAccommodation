import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>Rate My Accommodation</title>
    <meta charSet="utf-8" />
    <meta property='og:image' content="/Logo.png" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
  <div>
    <NavBar />

    <main className="flex flex-col" >
      <Component {...pageProps} />
    </main>
 
    <Footer />  
  </div> 
  </>
}

export default MyApp
