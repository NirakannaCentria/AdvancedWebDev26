import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import MenuHighlights from './components/MenuHighlights'
import Visit from './components/Visit'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Visit />
      </main>
      <Footer />
    </>
  )
}

export default App