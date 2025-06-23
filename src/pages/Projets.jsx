"use client"

import { useState } from "react"

import { ExternalLink, Calendar, Eye, Code } from "lucide-react"

const Projets = ({ setCurrentPage }) => {
  const projects = [
    {
      title: "Restaurant Le Délice Cosmique",
      description:
        "Site vitrine premium pour un restaurant gastronomique avec menu interactif, système de réservation en temps réel et galerie haute définition.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Restaurant",
      date: "2024",
      features: ["Menu interactif", "Réservations temps réel", "Galerie HD", "Avis clients"],
      tech: ["React", "Node.js", "MongoDB"],
      color: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30",
    },
    {
      title: "Boutique Mode Élégance Stellaire",
      description:
        "E-commerce complet avec catalogue produits avancé, panier intelligent, paiement sécurisé et gestion des stocks automatisée.",
      image: "/placeholder.svg?height=300&width=400",
      category: "E-commerce",
      date: "2024",
      features: ["Catalogue avancé", "Panier intelligent", "Paiement sécurisé", "Gestion stocks"],
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      color: "from-pink-500/20 to-purple-500/20",
      border: "border-pink-500/30",
    },
    {
      title: "Cabinet Médical Santé+ Futur",
      description:
        "Plateforme médicale professionnelle avec prise de rendez-vous automatisée, dossiers patients sécurisés et téléconsultation intégrée.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Médical",
      date: "2024",
      features: ["Prise RDV auto", "Dossiers sécurisés", "Téléconsultation", "Planning médecin"],
      tech: ["Vue.js", "Firebase", "WebRTC"],
      color: "from-green-500/20 to-teal-500/20",
      border: "border-green-500/30",
    },
    {
      title: "Agence Immobilière Habitat Galactique",
      description:
        "Plateforme immobilière avec recherche IA, visite virtuelle 360°, estimation automatique et matching intelligent acheteur-vendeur.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Immobilier",
      date: "2024",
      features: ["Recherche IA", "Visite 360°", "Estimation auto", "Matching intelligent"],
      tech: ["Angular", "Three.js", "Python AI"],
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
    },
    {
      title: "École Privée Excellence Spatiale",
      description:
        "Plateforme éducative complète avec espace parents sécurisé, suivi des notes en temps réel, planning interactif et communication intégrée.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Éducation",
      date: "2024",
      features: ["Espace parents", "Suivi notes", "Planning interactif", "Communication"],
      tech: ["React", "Socket.io", "MySQL"],
      color: "from-indigo-500/20 to-purple-500/20",
      border: "border-indigo-500/30",
    },
    {
      title: "Salon de Beauté Glamour Cosmique",
      description:
        "Site vitrine luxueux avec galerie avant/après, réservation en ligne, programme de fidélité et boutique produits intégrée.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Beauté",
      date: "2024",
      features: ["Galerie avant/après", "Réservation en ligne", "Programme fidélité", "Boutique intégrée"],
      tech: ["Nuxt.js", "Supabase", "Tailwind"],
      color: "from-rose-500/20 to-pink-500/20",
      border: "border-rose-500/30",
    },
  ]

  const categories = ["Tous", "Restaurant", "E-commerce", "Médical", "Immobilier", "Éducation", "Beauté"]
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const filteredProjects =
    selectedCategory === "Tous" ? projects : projects.filter((project) => project.category === selectedCategory)

  const handleContactClick = () => {
    setCurrentPage("contact")
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Nos Explorations Digitales
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez les univers digitaux que nous avons créés pour nos explorateurs. Chaque projet est une aventure
            unique dans l'espace numérique.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-black/40 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group animate-fade-in-up hover:animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`bg-gradient-to-br ${project.color} backdrop-blur-xl rounded-2xl overflow-hidden border ${project.border} transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl group-hover:shadow-cyan-500/20`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex space-x-2">
                      <button className="bg-black/60 backdrop-blur-sm text-white p-2 rounded-full hover:bg-cyan-500/80 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="bg-black/60 backdrop-blur-sm text-white p-2 rounded-full hover:bg-purple-500/80 transition-colors">
                        <Code className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Fonctionnalités :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-black/40 text-gray-300 px-3 py-1 rounded-full text-xs border border-white/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-black/60 to-purple-900/40 hover:from-cyan-500/20 hover:to-purple-500/20 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 border border-white/10 hover:border-cyan-400/50">
                    <span>Explorer le Projet</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 animate-fade-in-up">
          <div className="text-center bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-400">Projets Réalisés</div>
          </div>
          <div className="text-center bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
            <div className="text-gray-400">Satisfaction Client</div>
          </div>
          <div className="text-center bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">48h</div>
            <div className="text-gray-400">Délai Moyen</div>
          </div>
          <div className="text-center bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-400">Support Actif</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-black/80 to-purple-900/40 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Votre Projet, Notre Prochaine Aventure
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Prêt à rejoindre nos explorateurs satisfaits ? Contactez-nous pour discuter de votre mission et créer
              ensemble votre présence dans l'univers digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/25"
              >
                Démarrer Mon Aventure
              </button>
              <a
                href="https://wa.me/225XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-400/50 hover:border-green-400 text-green-400 hover:text-white hover:bg-green-400/10 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
              >
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projets
