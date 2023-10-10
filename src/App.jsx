import { BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import StarsCanvas from "./components/canvas/Stars.jsx"
import Office from "./components/Office"
import './index.css'
import FAQ from "./components/FAQ.jsx";
import Feedback from "./components/Feedback"
import Accredidation from "./components/Accredidation"

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div className="bg-bg-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Home />
        </div>
        <About />
        <Accredidation />
        <FAQ />
        <div className="relative z-0 bg-black-100">
          <Feedback />
          <StarsCanvas />
        </div>
        <Office />
        <div className="relative z-0 bg-black-100">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
