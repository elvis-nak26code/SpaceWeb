"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Offres from "./pages/Offres"
import Projets from "./pages/Projets"
import Contact from "./pages/Contact"
import Apropos from "./pages/Apropos"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handlePageChange = (newPage) => {
    if (newPage === currentPage) return

    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage(newPage)
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 300)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={handlePageChange} />
      case "offres":
        return <Offres setCurrentPage={handlePageChange} />
      case "projets":
        return <Projets setCurrentPage={handlePageChange} />
      case "contact":
        return <Contact setCurrentPage={handlePageChange} />
      case "apropos":
        return <Apropos setCurrentPage={handlePageChange} />
      default:
        return <Home setCurrentPage={handlePageChange} />
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced space background */}
      <div className="fixed inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="nebula"></div>
        <div className="cosmic-dust"></div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="fixed inset-0 z-1 bg-gradient-to-b from-black/20 via-purple-900/5 to-black/40"></div>

      <div className="relative z-10">
        <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />

        {/* Page transition wrapper */}
        <div
          className={`transition-all duration-300 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
        >
          {renderPage()}
        </div>

        <Footer />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 z-5 pointer-events-none">
        <div className="floating-particles"></div>
      </div>
    </div>
  )
}

export default App
