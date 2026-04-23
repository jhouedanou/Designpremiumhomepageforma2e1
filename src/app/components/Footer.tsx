interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#003d1f] py-16">
      <div className="max-w-[1600px] mx-auto px-12">
        <div className="grid grid-cols-5 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#00a045] rounded flex items-center justify-center">
                <span className="text-white font-medium text-lg">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium text-lg">MA2E</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Mutuelle des Agents de l'Eau et de l'Électricité. Agréée BCEAO depuis 2011.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('nos-services')}
                  className="text-white/60 hover:text-white transition-colors text-sm text-left"
                >
                  Épargne
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nos-services')}
                  className="text-white/60 hover:text-white transition-colors text-sm text-left"
                >
                  Crédit
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nos-services')}
                  className="text-white/60 hover:text-white transition-colors text-sm text-left"
                >
                  Immobilier
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nos-services')}
                  className="text-white/60 hover:text-white transition-colors text-sm text-left"
                >
                  E-MA2E
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">À propos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('la-mutuelle')}
                  className="text-white/60 hover:text-white transition-colors text-sm text-left"
                >
                  Notre histoire
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('la-mutuelle')}
                  className="text-white/60 hover:text-white transition-colors text-sm text-left"
                >
                  Gouvernance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('actualites')}
                  className="text-white/60 hover:text-white transition-colors text-sm text-left"
                >
                  Actualités
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Ressources</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="text-white/60 hover:text-white transition-colors text-sm text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('documents')}
                  className="text-white/60 hover:text-white transition-colors text-sm text-left"
                >
                  Documents
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('liens-utiles')}
                  className="text-white/60 hover:text-white transition-colors text-sm text-left"
                >
                  Liens utiles
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-white/60 text-sm">Avenue Houdaille</li>
              <li className="text-white/60 text-sm">Immeuble SIDAM, 6ème étage</li>
              <li className="text-white/60 text-sm">Abidjan-Plateau</li>
              <li className="text-white/60 text-sm">+225 27 21 23 64 87</li>
              <li className="text-white/60 text-sm">contact@ma2e.ci</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex items-center justify-between">
          <p className="text-white/40 text-sm">© 2026 MA2E. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('mentions-legales')}
              className="text-white/40 hover:text-white transition-colors text-sm"
            >
              Mentions légales
            </button>
            <button
              onClick={() => onNavigate('mentions-legales')}
              className="text-white/40 hover:text-white transition-colors text-sm"
            >
              CGU
            </button>
            <button
              onClick={() => onNavigate('mentions-legales')}
              className="text-white/40 hover:text-white transition-colors text-sm"
            >
              Données personnelles
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
