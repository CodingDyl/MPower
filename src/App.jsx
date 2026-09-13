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
import Accreditation from "./components/Accreditation"
import Verification from "./components/Verification"
import { Notifications } from "@mantine/notifications"

function App() {

  return (
    <BrowserRouter>
      <Notifications position="bottom-right" />
      <div className="relative z-0 bg-white overflow-x-hidden">
        <div className="bg-bg-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Home />
        </div>
        {/* Impartiality immediately after hero + logo ticker */}
        <div className="relative z-0 bg-black-100">
          <Feedback />
          <StarsCanvas />
        </div>
        <About />
        <Accreditation />
        <div className="relative z-0 bg-black-100">
          <Verification />
          <StarsCanvas />
        </div>
        <FAQ />
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
