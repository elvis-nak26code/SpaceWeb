"use client"

import { useState } from "react"
import { Mail, Phone, MessageSquare, Send, MapPin, Clock, Users, Zap } from "lucide-react"

const Contact = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    budget: "",
    message: "",
  })

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-cyan-400" />,
      title: "Email Spatial",
      value: "nacanaboelvis7@gmail.com",
      description: "Réponse sous 24h maximum",
      color: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30",
    },
    {
      icon: <Phone className="h-6 w-6 text-green-400" />,
      title: "Transmission Directe",
      value: "+226 64 59 33 95",
      description: "Lun-Ven 9h-18h, Sam 9h-13h",
      color: "from-green-500/20 to-teal-500/20",
      border: "border-green-500/30",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-purple-400" />,
      title: "WhatsApp Instantané",
      value: "Discuter maintenant",
      description: "Réponse immédiate 24/7",
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
    },
    {
      icon: <MapPin className="h-6 w-6 text-orange-400" />,
      title: "Base Terrestre",
      value: "Burkina-Faso",
      description: "Rendez-vous sur demande",
      color: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30",
    },
  ]

  const projectTypes = [
    "Site Vitrine",
    "E-commerce",
    "Application Web",
    "Blog/Magazine",
    "Plateforme Éducative",
    "Site Médical",
    "Immobilier",
    "Restaurant",
    "Autre",
  ]

  const budgetRanges = [
    "10 000 - 50 000 FCFA",
    "50 000 - 100 000 FCFA",
    "100 000 - 200 000 FCFA",
    "200 000+ FCFA",
    "À discuter",
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Message envoyé dans l'espace ! Nous vous répondrons rapidement.")
    setFormData({ name: "", email: "", phone: "", project: "", budget: "", message: "" })
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Établissons le Contact
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Prêt à lancer votre mission digitale ? Notre équipe d'experts spatiaux est en ligne pour vous accompagner
            dans votre voyage vers le succès numérique.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-fade-in-up">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${method.color} backdrop-blur-xl rounded-2xl p-6 border ${method.border} transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-xl group`}
            >
              <div className="mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative">{method.icon}</div>
              </div>
              <h3 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{method.title}</h3>
              <p className="text-gray-300 font-semibold mb-1">{method.value}</p>
              <p className="text-gray-400 text-sm">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <div className="bg-gradient-to-br from-black/60 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 shadow-2xl animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Lancez Votre Mission
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom du Commandant *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email de Contact *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Numéro de Transmission
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="+225 XX XX XX XX"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                    Type de Mission
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white transition-all duration-300"
                  >
                    <option value="">Sélectionnez un type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Spatial
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white transition-all duration-300"
                  >
                    <option value="">Sélectionnez un budget</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Détails de la Mission *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/40 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300"
                  placeholder="Décrivez votre projet en détail : objectifs, fonctionnalités souhaitées, délais, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/25 flex items-center justify-center space-x-3"
              >
                <Send className="h-6 w-6" />
                <span>Transmettre la Mission</span>
              </button>
            </form>
          </div>

          {/* Enhanced Info Section */}
          <div className="space-y-8">
            {/* Process Steps */}
            <div className="bg-gradient-to-br from-black/60 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 shadow-2xl animate-fade-in-up">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Processus de Lancement
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Contact Initial</h3>
                    <p className="text-gray-400 text-sm">Vous nous contactez avec votre projet</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Analyse & Devis</h3>
                    <p className="text-gray-400 text-sm">Étude détaillée et proposition gratuite</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Développement</h3>
                    <p className="text-gray-400 text-sm">Création de votre site en 48-72h</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Lancement</h3>
                    <p className="text-gray-400 text-sm">Mise en ligne et formation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-black/60 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 shadow-2xl animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Pourquoi Naviguer Avec Nous ?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-cyan-400" />
                  <span className="text-gray-300">Création 100% gratuite garantie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">Support technique spatial 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">Livraison express en 48-72h</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">Design moderne et responsive</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-xl rounded-2xl p-6 border border-red-500/30 shadow-2xl animate-fade-in-up">
              <h3 className="text-xl font-bold mb-4 text-red-400">🚨 Contact d'Urgence</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Projet urgent ? Site en panne ? Notre équipe d'intervention rapide est disponible.
              </p>
              <a
                href="https://wa.me/225XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                WhatsApp Urgence
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
