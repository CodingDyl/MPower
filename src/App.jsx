import { BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Footer from "./components/Footer"
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
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
