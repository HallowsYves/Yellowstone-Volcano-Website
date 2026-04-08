import Nav from './components/Nav'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import EruptionHistory from './components/EruptionHistory'
import CurrentActivity from './components/CurrentActivity'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-charcoal text-white min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Introduction />
        <EruptionHistory />
        <CurrentActivity />
      </main>
      <Footer />
    </div>
  )
}

export default App
