import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
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
