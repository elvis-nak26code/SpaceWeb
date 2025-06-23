import { Rocket, Mail, Phone, MapPin, Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-xl border-t border-purple-500/20 mt-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Rocket className="h-10 w-10 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg"></div>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SpaceWeb
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Nous créons des sites web professionnels <strong className="text-green-400">100% GRATUITS</strong> qui
              propulsent votre entreprise vers les étoiles du succès digital. Votre voyage commence ici, sans aucun coût
              !
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-cyan-500/20 hover:bg-cyan-500/30 p-3 rounded-xl transition-colors duration-300">
                <Mail className="h-5 w-5 text-cyan-400" />
              </a>
              <a
                href="#"
                className="bg-purple-500/20 hover:bg-purple-500/30 p-3 rounded-xl transition-colors duration-300"
              >
                <Phone className="h-5 w-5 text-purple-400" />
              </a>
              <a href="#" className="bg-pink-500/20 hover:bg-pink-500/30 p-3 rounded-xl transition-colors duration-300">
                <MapPin className="h-5 w-5 text-pink-400" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Services Spatiaux</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-green-400 transition-colors cursor-pointer">🎉 Sites web 100% GRATUITS</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">E-commerce complet</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Applications web</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Maintenance premium</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Support 24/7</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Base de Contact</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-sm">contact@spaceweb.com</p>
                  <p className="text-xs text-gray-500">Réponse rapide garantie</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-sm">+225 XX XX XX XX</p>
                  <p className="text-xs text-gray-500">Lun-Sam 9h-18h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5" />
                <div>
                  <p className="text-sm">Abidjan, Côte d'Ivoire</p>
                  <p className="text-xs text-gray-500">Rendez-vous possible</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="flex items-center space-x-2">
                <span>&copy; 2024 SpaceWeb. Tous droits réservés.</span>
                <span className="text-red-400">•</span>
                <span className="flex items-center space-x-1">
                  <span>Créé avec</span>
                  <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                  <span>pour l'univers digital</span>
                </span>
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
