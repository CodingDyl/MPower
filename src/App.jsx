import { BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-bg-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Home />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
