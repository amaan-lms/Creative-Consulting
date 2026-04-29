import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Services from "./Components/Services"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
