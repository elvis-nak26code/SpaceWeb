"use client"

import { useState } from "react"
import { Menu, X, Rocket } from "lucide-react"

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Accueil", key: "home" },
    { name: "À propos", key: "apropos" },
    { name: "Nos Sites", key: "offres" },
    { name: "Projets", key: "projets" },
    { name: "Contact", key: "contact" },
  ]

  const handleNavClick = (pageKey) => {
    setCurrentPage(pageKey)
    setIsOpen(false)
  }

  return (
    <nav className="bg-black/60 backdrop-blur-xl border-b border-purple-500/20 sticky top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 group"
            >
              <div className="relative">
                <Rocket className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg group-hover:bg-cyan-300/30 transition-all duration-300"></div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SpaceWeb
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                  currentPage === item.key
                    ? "text-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
                {currentPage === item.key && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg blur-sm"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-xl rounded-lg mt-2 border border-purple-500/20">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    currentPage === item.key
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
