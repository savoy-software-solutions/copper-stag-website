import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Packages from '../components/Packages'
import Process from '../components/Process'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Packages />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
