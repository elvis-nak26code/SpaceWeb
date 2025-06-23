"use client"

import { Check, Globe, ShoppingCart, Stethoscope, GraduationCap, Home, Utensils, Palette } from "lucide-react"

const Offres = ({ setCurrentPage }) => {
  const siteTypes = [
    {
      name: "Site Vitrine",
      subtitle: "Présentation d'entreprise",
      icon: <Globe className="h-8 w-8 text-cyan-400" />,
      description: "Parfait pour présenter votre entreprise et vos services",
      features: [
        "Page d'accueil attractive",
        "Présentation de l'entreprise",
        "Services et produits",
        "Galerie photos",
        "Formulaire de contact",
        "Intégration réseaux sociaux",
        "Optimisation SEO",
        "Design responsive",
      ],
      examples: ["Cabinet d'avocat", "Salon de coiffure", "Entreprise de BTP", "Consultant"],
      gradient: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30",
      popular: true,
    },
    {
      name: "E-commerce",
      subtitle: "Boutique en ligne",
      icon: <ShoppingCart className="h-8 w-8 text-green-400" />,
      description: "Vendez vos produits en ligne avec un système complet",
      features: [
        "Catalogue produits illimité",
        "Panier d'achat intelligent",
        "Gestion des commandes",
        "Paiement sécurisé (Mobile Money)",
        "Gestion des stocks",
        "Espace client",
        "Suivi des livraisons",
        "Rapports de ventes",
      ],
      examples: ["Boutique mode", "Électronique", "Cosmétiques", "Alimentation"],
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
      popular: false,
    },
    {
      name: "Site Médical",
      subtitle: "Cabinet médical",
      icon: <Stethoscope className="h-8 w-8 text-red-400" />,
      description: "Site professionnel pour les professionnels de santé",
      features: [
        "Présentation du cabinet",
        "Équipe médicale",
        "Prise de rendez-vous en ligne",
        "Informations pratiques",
        "Conseils santé (blog)",
        "Urgences et contacts",
        "Respect RGPD médical",
        "Téléconsultation (option)",
      ],
      examples: ["Cabinet dentaire", "Clinique", "Pharmacie", "Laboratoire"],
      gradient: "from-red-500/20 to-pink-500/20",
      border: "border-red-500/30",
      popular: false,
    },
    {
      name: "Site Éducatif",
      subtitle: "École ou formation",
      icon: <GraduationCap className="h-8 w-8 text-purple-400" />,
      description: "Plateforme complète pour établissements éducatifs",
      features: [
        "Présentation de l'établissement",
        "Programmes et formations",
        "Espace parents/étudiants",
        "Actualités et événements",
        "Inscriptions en ligne",
        "Calendrier scolaire",
        "Galerie d'activités",
        "Contact et localisation",
      ],
      examples: ["École primaire", "Centre de formation", "Université", "Cours particuliers"],
      gradient: "from-purple-500/20 to-indigo-500/20",
      border: "border-purple-500/30",
      popular: false,
    },
    {
      name: "Site Immobilier",
      subtitle: "Agence immobilière",
      icon: <Home className="h-8 w-8 text-orange-400" />,
      description: "Plateforme pour présenter vos biens immobiliers",
      features: [
        "Catalogue de biens",
        "Recherche avancée",
        "Visite virtuelle 360°",
        "Estimation en ligne",
        "Espace propriétaires",
        "Demandes de visite",
        "Carte interactive",
        "Conseils immobiliers",
      ],
      examples: ["Agence immobilière", "Promoteur", "Gestionnaire", "Courtier"],
      gradient: "from-orange-500/20 to-yellow-500/20",
      border: "border-orange-500/30",
      popular: false,
    },
    {
      name: "Site Restaurant",
      subtitle: "Restaurant & hôtellerie",
      icon: <Utensils className="h-8 w-8 text-yellow-400" />,
      description: "Site appétissant pour votre établissement",
      features: [
        "Menu interactif avec prix",
        "Réservation de tables",
        "Galerie de plats",
        "Avis clients",
        "Livraison à domicile",
        "Événements spéciaux",
        "Localisation et horaires",
        "Commande en ligne",
      ],
      examples: ["Restaurant", "Fast-food", "Hôtel", "Traiteur"],
      gradient: "from-yellow-500/20 to-orange-500/20",
      border: "border-yellow-500/30",
      popular: false,
    },
  ]

  const handleContactClick = () => {
    setCurrentPage("contact")
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Tous Nos Sites Sont GRATUITS
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Choisissez le type de site qui correspond à votre activité. La création est{" "}
            <span className="text-green-400 font-bold text-2xl">100% GRATUITE</span> pour tous !
          </p>

          {/* Free Guarantee */}
          <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-6 max-w-2xl mx-auto border border-green-500/30 shadow-2xl shadow-green-500/20 mb-12">
            <div className="text-2xl font-bold text-green-400 mb-2">🎉 GARANTIE 100% GRATUIT 🎉</div>
            <p className="text-gray-300">
              Quel que soit le type de site choisi, la création est entièrement gratuite. Vous payez uniquement
              l'hébergement (10 000 FCFA) et la maintenance (10 000 FCFA/mois).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {siteTypes.map((site, index) => (
            <div
              key={index}
              className={`relative animate-fade-in-up hover:animate-float group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`bg-gradient-to-br ${site.gradient} backdrop-blur-xl rounded-2xl p-8 border ${site.border} transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl ${site.popular ? "ring-2 ring-cyan-500/20 shadow-cyan-500/20" : ""}`}
              >
                {site.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Le Plus Demandé
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative">{site.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-white">{site.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{site.subtitle}</p>
                  <div className="text-4xl font-bold text-green-400 mb-2">GRATUIT</div>
                  <p className="text-gray-300 text-sm">{site.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Fonctionnalités incluses :</h4>
                  <ul className="space-y-2">
                    {site.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Exemples d'activités :</h4>
                  <div className="flex flex-wrap gap-2">
                    {site.examples.map((example, exampleIndex) => (
                      <span
                        key={exampleIndex}
                        className="bg-black/40 text-gray-300 px-3 py-1 rounded-full text-xs border border-white/10"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleContactClick}
                  className="w-full bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-400 hover:to-cyan-500 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-500/25"
                >
                  🚀 Créer Mon Site GRATUIT
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="mb-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ce Qui Est Inclus GRATUITEMENT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 text-center">
              <Palette className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Design Sur-Mesure</h3>
              <p className="text-gray-400 text-sm">Design unique adapté à votre secteur d'activité</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 text-center">
              <Globe className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Développement Complet</h3>
              <p className="text-gray-400 text-sm">Code professionnel et optimisé pour la performance</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center">
              <Check className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Formation Incluse</h3>
              <p className="text-gray-400 text-sm">Apprenez à gérer votre site en toute autonomie</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30 text-center">
              <Globe className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Mise en Ligne</h3>
              <p className="text-gray-400 text-sm">Configuration complète et mise en ligne immédiate</p>
            </div>
          </div>
        </div>

        {/* Pricing Transparency */}
        <div className="mb-20 animate-fade-in-up">
          <div className="bg-gradient-to-r from-black/80 to-purple-900/40 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Tarification 100% Transparente
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-4">0 FCFA</div>
                <h4 className="text-xl font-bold text-white mb-2">Création du Site</h4>
                <p className="text-gray-400">Design, développement, formation - Tout est gratuit !</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-4">10K</div>
                <h4 className="text-xl font-bold text-white mb-2">Domaine + Hébergement</h4>
                <p className="text-gray-400">Une seule fois - Votre site en ligne immédiatement</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-4">10K/mois</div>
                <h4 className="text-xl font-bold text-white mb-2">Maintenance Premium</h4>
                <p className="text-gray-400">Support 24/7, mises à jour, sauvegardes</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur-xl rounded-3xl p-12 border border-green-500/30 shadow-2xl shadow-green-500/20">
            <h3 className="text-4xl font-bold mb-6 text-green-400">Prêt Pour Votre Site GRATUIT ?</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Plus de 500 entreprises nous ont fait confiance. Rejoignez-les et obtenez votre site professionnel sans
              aucun coût de création !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-400 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-500/25"
              >
                🚀 Commencer Maintenant - GRATUIT
              </button>
              <a
                href="https://wa.me/225XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-400/50 hover:border-green-400 text-green-400 hover:text-white hover:bg-green-400/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
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

export default Offres
