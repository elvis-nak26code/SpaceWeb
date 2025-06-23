"use client"

import { Users, Zap, Heart, Shield, Star } from "lucide-react"

const Apropos = ({ setCurrentPage }) => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-400" />,
      title: "Passion Gratuite",
      description:
        "Nous croyons que chaque entreprise mérite une présence digitale de qualité, sans barrière financière.",
      detail: "Notre mission est de démocratiser l'accès au web professionnel Au Burkina-Faso.",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "Transparence Totale",
      description: "Aucun frais caché, aucune surprise. Vous payez uniquement l'hébergement et la maintenance.",
      detail: "Nos tarifs sont clairs : 10 000 FCFA pour le domaine/hébergement, 10 000 FCFA/mois pour la maintenance.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Excellence Technique",
      description: "Sites modernes, rapides et sécurisés utilisant les dernières technologies web.",
      detail: "React, Next.js, optimisation SEO, responsive design et sécurité SSL incluse.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Support Humain",
      description: "Une équipe dédiée disponible 24/7 pour vous accompagner dans votre réussite.",
      detail: "Formation, assistance technique et conseils stratégiques inclus dans la maintenance.",
    },
  ]

  const team = [
    {
      name: "Nacanabo Elvis",
      role: "Fondateur & Développeur Senior",
      description: "3 ans d'expérience en développement web, passionné par l'innovation digitale en Afrique.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Marie Diabaté",
      role: "Designer UX/UI",
      description: "Experte en design d'interfaces, elle crée des expériences utilisateur exceptionnelles.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Ibrahim Souabo",
      role: "Spécialiste SEO",
      description: "Expert en référencement, il optimise votre visibilité sur les moteurs de recherche.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const stats = [
    { number: "180+", label: "Sites Créés Gratuitement", color: "text-cyan-400" },
    { number: "0 FCFA", label: "Coût de Création", color: "text-green-400" },
    { number: "98%", label: "Clients Satisfaits", color: "text-purple-400" },
    { number: "3 ans", label: "D'Expérience", color: "text-yellow-400" },
  ]

  const handleContactClick = () => {
    setCurrentPage("contact")
  }

  const handleOffersClick = () => {
    setCurrentPage("offres")
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Notre Mission Spatiale
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Démocratiser l'accès au web professionnel en créant des sites web{" "}
            <span className="text-cyan-400 font-bold text-2xl">100% GRATUITS</span> pour toutes les entreprises
            ivoiriennes.
          </p>

          {/* Free Emphasis */}
          <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-8 max-w-2xl mx-auto border border-green-500/30 shadow-2xl shadow-green-500/20">
            <div className="text-4xl font-bold text-green-400 mb-4">🎉 CRÉATION 100% GRATUITE 🎉</div>
            <p className="text-gray-300 text-lg">
              Nous investissons dans votre succès. Vous ne payez que l'hébergement et la maintenance, jamais la création
              !
            </p>
          </div>
        </div>

        {/* Why Free Section */}
        <div className="mb-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Pourquoi C'est Vraiment Gratuit ?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-black/60 to-green-900/20 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Notre Philosophie</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Nous croyons que chaque entreprise, peu importe sa taille, mérite une présence digitale
                  professionnelle. Au Burkina-Faso, trop d'entrepreneurs renoncent à avoir un site web à cause des
                  coûts élevés.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-cyan-400">Notre solution :</strong> Nous créons votre site gratuitement et
                  nous gagnons uniquement sur la maintenance mensuelle. Votre succès = Notre succès !
                </p>
              </div>

              <div className="bg-gradient-to-br from-black/60 to-cyan-900/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Modèle Économique Transparent</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">
                      Création du site : <strong className="text-green-400">0 FCFA</strong>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">
                      Domaine + Hébergement : <strong className="text-blue-400">10 000 FCFA</strong> (une fois)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">
                      Maintenance : <strong className="text-purple-400">10 000 FCFA/mois</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-black/60 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Ce Que Vous Obtenez GRATUITEMENT</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-yellow-400 mt-1" />
                  <span className="text-gray-300">Design professionnel sur-mesure</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-yellow-400 mt-1" />
                  <span className="text-gray-300">Développement complet du site</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-yellow-400 mt-1" />
                  <span className="text-gray-300">Optimisation mobile et SEO</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-yellow-400 mt-1" />
                  <span className="text-gray-300">Formation à la gestion du site</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-yellow-400 mt-1" />
                  <span className="text-gray-300">Mise en ligne et configuration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-yellow-400 mt-1" />
                  <span className="text-gray-300">Certificat SSL et sécurité</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 animate-fade-in-up">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Nos Valeurs Spatiales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group animate-fade-in-up hover:animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-black/60 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl group-hover:shadow-cyan-500/20">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative">{value.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{value.description}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              L'Équipage Spatial
            </h2>
            <p className="text-gray-400 text-lg">Les experts qui créent votre site gratuitement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group animate-fade-in-up hover:animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-black/60 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto border-4 border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-black/80 to-purple-900/40 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Prêt Pour Votre Site GRATUIT ?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Rejoignez les centaines d'entreprises qui ont fait confiance à notre expertise. Votre site professionnel
              vous attend, sans aucun coût de création !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-400 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-500/25"
              >
                🚀 Créer Mon Site GRATUIT
              </button>
              <button
                onClick={handleOffersClick}
                className="border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:text-white hover:bg-cyan-400/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Voir Nos Créations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apropos
