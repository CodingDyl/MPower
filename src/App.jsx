import { BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import StarsCanvas from "./components/canvas/Stars.jsx"
import Office from "./components/Office"
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div className="bg-bg-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Home />
        </div>
        <About />
        <div className="relative z-0 bg-black-100">
          <Contact />
          <StarsCanvas />
        </div>
        <Office />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
