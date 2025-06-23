"use client"

import { ArrowRight, Star, Users, Zap, Shield, Clock, Award, Sparkles } from "lucide-react"

const Home = ({ setCurrentPage }) => {
  const features = [
    {
      icon: <Star className="h-8 w-8 text-yellow-400" />,
      title: "100% Gratuit",
      description: "Création de votre site web sans aucun coût initial. Nous investissons dans votre succès.",
      detail: "Aucun frais caché, aucun piège. Votre site est créé gratuitement par notre équipe d'experts.",
    },
    {
      icon: <Users className="h-8 w-8 text-green-400" />,
      title: "Support Galactique",
      description: "Assistance et maintenance continue pour seulement 10 000 FCFA/mois",
      detail: "Support technique 24/7, mises à jour régulières et monitoring constant de votre site.",
    },
    {
      icon: <Zap className="h-8 w-8 text-cyan-400" />,
      title: "Vitesse Lumière",
      description: "Sites web ultra-rapides et optimisés pour tous les appareils",
      detail: "Temps de chargement < 2 secondes, optimisation SEO avancée et design responsive.",
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-400" />,
      title: "Sécurité Maximale",
      description: "Protection avancée contre les cyberattaques et sauvegarde automatique",
      detail: "SSL gratuit, firewall intégré, sauvegarde quotidienne et protection anti-malware.",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-400" />,
      title: "Livraison Express",
      description: "Votre site prêt en 48-72h maximum après validation du projet",
      detail: "Processus optimisé, équipe dédiée et suivi en temps réel de l'avancement.",
    },
    {
      icon: <Award className="h-8 w-8 text-pink-400" />,
      title: "Qualité Premium",
      description: "Design moderne, code propre et respect des standards web actuels",
      detail: "Technologies récentes, code optimisé et design sur-mesure pour votre secteur.",
    },
  ]

  const stats = [
    { number: "500+", label: "Sites Créés", color: "text-cyan-400" },
    { number: "98%", label: "Clients Satisfaits", color: "text-green-400" },
    { number: "24/7", label: "Support Disponible", color: "text-purple-400" },
    { number: "< 2s", label: "Temps de Chargement", color: "text-yellow-400" },
  ]

  const handleContactClick = () => {
    setCurrentPage("contact")
  }

  const handleProjectsClick = () => {
    setCurrentPage("projets")
  }

  const handleOffersClick = () => {
    setCurrentPage("offres")
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Sites Web 100% GRATUITS
              </span>
              <br />
              <span className="text-white animate-pulse">Création Professionnelle</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Nous créons votre site web professionnel{" "}
              <span className="text-green-400 font-bold text-3xl">ENTIÈREMENT GRATUIT</span>. Vous payez uniquement le
              domaine et l'hébergement (10 000 FCFA) + maintenance (10 000 FCFA/mois).
              <br />
              <span className="text-cyan-400 font-semibold">Aucun coût de création, aucun frais caché !</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={handleContactClick}
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-10 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
              >
                <Sparkles className="h-6 w-6 group-hover:animate-spin" />
                <span>🚀 Mon Site GRATUIT</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleProjectsClick}
                className="border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:text-white hover:bg-cyan-400/10 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Explorer la Galaxie
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                    <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing highlight */}
            <div className="bg-gradient-to-r from-black/60 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 max-w-3xl mx-auto border border-purple-500/30 shadow-2xl shadow-purple-500/10">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                🎉 CRÉATION 100% GRATUITE 🎉
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-cyan-400/20">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div>
                    <span className="text-gray-300">Domaine + Hébergement</span>
                    <div className="text-2xl font-bold text-cyan-400">10 000 FCFA</div>
                    <span className="text-sm text-gray-500">Une seule fois</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-green-400/20">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <span className="text-gray-300">Maintenance Premium</span>
                    <div className="text-2xl font-bold text-green-400">10 000 FCFA</div>
                    <span className="text-sm text-gray-500">Par mois</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={handleOffersClick}
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
                >
                  Découvrir toutes nos offres →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Every Business Needs a Website Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Pourquoi Votre Entreprise DOIT Avoir un Site Web ?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              En 2025, ne pas avoir de site web, c'est comme fermer sa boutique. Découvrez pourquoi c'est devenu
              indispensable.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-fade-in-up">
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-xl rounded-2xl p-8 border border-red-500/30 text-center">
              <div className="text-5xl font-bold text-red-400 mb-4">97%</div>
              <h3 className="text-xl font-bold text-white mb-2">des consommateurs</h3>
              <p className="text-gray-400">recherchent des entreprises locales en ligne avant d'acheter</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-xl rounded-2xl p-8 border border-orange-500/30 text-center">
              <div className="text-5xl font-bold text-orange-400 mb-4">75%</div>
              <h3 className="text-xl font-bold text-white mb-2">des clients</h3>
              <p className="text-gray-400">jugent la crédibilité d'une entreprise selon son site web</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-green-500/20 backdrop-blur-xl rounded-2xl p-8 border border-yellow-500/30 text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-4">24/7</div>
              <h3 className="text-xl font-bold text-white mb-2">Disponibilité</h3>
              <p className="text-gray-400">Votre site travaille pour vous même quand vous dormez</p>
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Problems without website */}
            <div className="animate-fade-in-up">
              <h3 className="text-3xl font-bold mb-8 text-red-400">❌ Sans Site Web, Vous Perdez :</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-red-500/10 to-red-900/20 backdrop-blur-xl rounded-xl p-6 border border-red-500/20">
                  <h4 className="text-xl font-bold text-red-400 mb-3">🔍 Visibilité en Ligne</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Vos concurrents apparaissent sur Google, pas vous. 97% des consommateurs cherchent en ligne avant
                    d'acheter.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-red-500/10 to-red-900/20 backdrop-blur-xl rounded-xl p-6 border border-red-500/20">
                  <h4 className="text-xl font-bold text-red-400 mb-3">💰 Opportunités de Vente</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Impossible de vendre 24/7. Vos clients potentiels vous cherchent le soir et le weekend.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-red-500/10 to-red-900/20 backdrop-blur-xl rounded-xl p-6 border border-red-500/20">
                  <h4 className="text-xl font-bold text-red-400 mb-3">🏆 Crédibilité Professionnelle</h4>
                  <p className="text-gray-400 leading-relaxed">
                    75% des clients jugent votre sérieux selon votre présence web. Pas de site = pas de confiance.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-red-500/10 to-red-900/20 backdrop-blur-xl rounded-xl p-6 border border-red-500/20">
                  <h4 className="text-xl font-bold text-red-400 mb-3">📱 Clients Jeunes</h4>
                  <p className="text-gray-400 leading-relaxed">
                    La nouvelle génération ne consulte que les entreprises présentes en ligne. Vous les perdez
                    définitivement.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Benefits with website */}
            <div className="animate-fade-in-up">
              <h3 className="text-3xl font-bold mb-8 text-green-400">✅ Avec Un Site Web, Vous Gagnez :</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-500/10 to-green-900/20 backdrop-blur-xl rounded-xl p-6 border border-green-500/20">
                  <h4 className="text-xl font-bold text-green-400 mb-3">🚀 Croissance du Chiffre d'Affaires</h4>
                  <p className="text-gray-400 leading-relaxed">
                    +40% de ventes en moyenne. Vos clients vous trouvent facilement et commandent directement en ligne.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-green-900/20 backdrop-blur-xl rounded-xl p-6 border border-green-500/20">
                  <h4 className="text-xl font-bold text-green-400 mb-3">🌍 Expansion Géographique</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Vendez dans toute la Côte d'Ivoire et même à l'international. Votre marché n'a plus de limites.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-green-900/20 backdrop-blur-xl rounded-xl p-6 border border-green-500/20">
                  <h4 className="text-xl font-bold text-green-400 mb-3">⏰ Économie de Temps</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Moins d'appels pour les mêmes questions. Vos clients trouvent toutes les infos sur votre site.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-green-900/20 backdrop-blur-xl rounded-xl p-6 border border-green-500/20">
                  <h4 className="text-xl font-bold text-green-400 mb-3">📈 Avantage Concurrentiel</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Démarquez-vous de la concurrence. Un site professionnel vous positionne comme leader de votre
                    secteur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Real Examples */}
          <div className="mb-20 animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Exemples Concrets en Côte d'Ivoire
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/20 backdrop-blur-xl rounded-xl p-6 border border-blue-500/20">
                <h4 className="text-xl font-bold text-blue-400 mb-3">🍕 Restaurant "Chez Mama"</h4>
                <p className="text-gray-400 mb-4">Avant : 20 commandes/jour uniquement par téléphone</p>
                <p className="text-green-400 font-semibold">
                  Après site web : 80 commandes/jour avec menu en ligne et livraison
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/20 backdrop-blur-xl rounded-xl p-6 border border-purple-500/20">
                <h4 className="text-xl font-bold text-purple-400 mb-3">👗 Boutique "Élégance CI"</h4>
                <p className="text-gray-400 mb-4">Avant : Clients uniquement d'Abidjan</p>
                <p className="text-green-400 font-semibold">
                  Après site web : Ventes dans toute la Côte d'Ivoire + export
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/20 backdrop-blur-xl rounded-xl p-6 border border-orange-500/20">
                <h4 className="text-xl font-bold text-orange-400 mb-3">🏥 Clinique "Santé Plus"</h4>
                <p className="text-gray-400 mb-4">Avant : Rendez-vous uniquement par téléphone</p>
                <p className="text-green-400 font-semibold">Après site web : 200% d'augmentation des consultations</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in-up">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-3xl p-12 border border-orange-500/30 shadow-2xl shadow-orange-500/20">
              <h3 className="text-4xl font-bold mb-6 text-orange-400">
                Ne Laissez Plus Vos Concurrents Vous Devancer !
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Chaque jour sans site web, c'est des clients perdus et des ventes ratées.
                <br />
                <span className="text-green-400 font-bold">
                  La bonne nouvelle ? Nous créons le vôtre GRATUITEMENT !
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-500/25"
                >
                  🚀 Je Veux Mon Site GRATUIT Maintenant
                </button>
                <button
                  onClick={() => setCurrentPage("apropos")}
                  className="border-2 border-orange-400/50 hover:border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Comprendre Pourquoi C'est Gratuit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Pourquoi Voyager Avec Nous ?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez les avantages qui font de nous les meilleurs guides dans l'univers digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group animate-fade-in-up hover:animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-black/60 to-purple-900/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl group-hover:shadow-cyan-500/20">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-black/80 to-purple-900/40 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 shadow-2xl shadow-purple-500/20 animate-fade-in-up">
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Prêt à Conquérir l'Espace Digital ?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Rejoignez les centaines d'entreprises qui ont fait confiance à notre expertise pour créer leur présence en
              ligne. Votre voyage vers le succès digital commence maintenant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/25"
              >
                Commencer Maintenant
              </button>
              <button
                onClick={handleOffersClick}
                className="border-2 border-purple-400/50 hover:border-purple-400 text-purple-400 hover:text-white hover:bg-purple-400/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Voir les Offres
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
