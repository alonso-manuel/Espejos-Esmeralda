import Nav     from './components/Nav'
import Hero    from './components/Hero'
import Services from './components/Services'
import Stats   from './components/Stats'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer  from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
