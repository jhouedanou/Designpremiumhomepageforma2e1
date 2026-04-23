import { useState } from 'react';
import { TrendingUp, ArrowUpRight, Home, Laptop, Check } from 'lucide-react';

export function NosServices() {
  const [activeTab, setActiveTab] = useState('epargne');

  const tabs = [
    { id: 'epargne', label: 'Épargne', icon: TrendingUp },
    { id: 'credit', label: 'Crédit', icon: ArrowUpRight },
    { id: 'immobilier', label: 'Immobilier', icon: Home },
    { id: 'ema2e', label: 'E-MA2E', icon: Laptop },
  ];

  const epargneProducts = [
    {
      name: 'Épargne Express',
      rate: '5%',
      min: '10 000 F',
      features: ['Retrait immédiat', 'Pas de frais', 'Rémunération mensuelle', 'Relevés en ligne'],
      popular: false,
    },
    {
      name: 'Épargne Ordinaire',
      rate: '6,5%',
      min: '25 000 F',
      features: ['Taux bonifié', 'Retrait sous 48h', 'Épargne sécurisée BCEAO', 'Accès crédit facilité'],
      popular: true,
    },
    {
      name: 'Épargne Logement',
      rate: '7%',
      min: '50 000 F',
      features: ['Meilleur taux', 'Projet immobilier', 'Durée 12-60 mois', 'Crédit immobilier garanti'],
      popular: false,
    },
  ];

  const creditProducts = [
    {
      name: 'Crédit Ordinaire',
      rate: '6,8%',
      max: '8 000 000 F',
      duration: '6-60 mois',
      features: ['Taux réduit adhérent', 'Remboursement flexible', 'Déblocage rapide', 'Pas de frais cachés'],
    },
    {
      name: 'Crédit Express',
      rate: '7,2%',
      max: '3 000 000 F',
      duration: '6-36 mois',
      features: ['Déblocage 48h', 'Dossier simplifié', 'Garantie allégée', 'Renouvelable'],
    },
    {
      name: 'Crédit Immobilier',
      rate: '6,5%',
      max: '25 000 000 F',
      duration: '12-120 mois',
      features: ['Financement acquisition', 'Construction ou rénovation', 'Différé possible', 'Accompagnement projet'],
    },
  ];

  const immobilierProjects = [
    {
      name: 'Villas 3 pièces',
      price: '18 500 000 F',
      location: 'Bingerville',
      features: ['120 m²', 'Résidence sécurisée', '2 chambres + salon', 'Jardin privatif'],
    },
    {
      name: 'Duplex 4 pièces',
      price: '28 000 000 F',
      location: 'Grand-Bassam',
      features: ['180 m²', 'Vue mer', '3 chambres + bureau', 'Terrasse 40 m²'],
    },
    {
      name: 'Villas 5 pièces',
      price: '35 000 000 F',
      location: 'Cocody',
      features: ['220 m²', 'Standing supérieur', '4 chambres + salon', 'Piscine commune'],
    },
  ];

  const ema2eFeatures = [
    { title: 'Consultation des soldes', desc: 'Vos comptes épargne et crédit en temps réel' },
    { title: 'Demandes en ligne', desc: 'Soumettez vos demandes de crédit 24h/24' },
    { title: 'Téléchargement relevés', desc: 'Tous vos documents accessibles instantanément' },
    { title: 'Historique opérations', desc: 'Suivi complet de toutes vos transactions' },
    { title: 'Simulation crédit', desc: 'Calculez votre mensualité avant de demander' },
    { title: 'Notifications', desc: 'Alertes sur toutes vos opérations importantes' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#003d1f] to-[#00a045] py-32">
        <div className="max-w-[1600px] mx-auto px-12 text-center">
          <h1 className="text-white text-[64px] leading-[1.1] tracking-[-1px] mb-6" style={{ fontWeight: 500 }}>
            Nos services et produits
          </h1>
          <p className="text-white/85 text-xl max-w-[700px] mx-auto">
            Des solutions financières sur mesure pour réaliser tous vos projets
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-white border-b border-[#00a045]/10 sticky top-20 z-40">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="flex items-center gap-4 py-6">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  activeTab === id
                    ? 'bg-[#00a045] text-white shadow-md'
                    : 'bg-[#f5f5f0] text-[#003d1f] hover:bg-[#e5e5e0]'
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={1.8} />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-12">
          {/* Épargne Tab */}
          {activeTab === 'epargne' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-[#003d1f] text-[48px] leading-[1.2] tracking-[-0.5px] mb-4" style={{ fontWeight: 500 }}>
                  Nos solutions d'épargne
                </h2>
                <p className="text-[#666666] text-lg max-w-[700px] mx-auto">
                  Choisissez l'épargne adaptée à vos objectifs avec des taux attractifs et une sécurité garantie BCEAO
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {epargneProducts.map((product) => (
                  <div
                    key={product.name}
                    className={`relative rounded-2xl p-8 ${
                      product.popular
                        ? 'bg-gradient-to-br from-[#003d1f] to-[#00a045] text-white shadow-xl scale-105'
                        : 'bg-white border-2 border-[#00a045]/20 hover:border-[#00a045]'
                    } transition-all`}
                  >
                    {product.popular && (
                      <div className="absolute top-6 right-6 bg-[#f28931] text-white px-3 py-1.5 rounded-md text-xs font-medium uppercase">
                        Recommandé
                      </div>
                    )}
                    <h3 className={`text-2xl font-medium mb-4 ${product.popular ? 'text-white' : 'text-[#003d1f]'}`}>
                      {product.name}
                    </h3>
                    <div className="mb-6">
                      <div className={`text-5xl font-medium mb-2 ${product.popular ? 'text-[#f28931]' : 'text-[#00a045]'}`}>
                        {product.rate}
                      </div>
                      <div className={product.popular ? 'text-white/80' : 'text-[#666666]'}>par an</div>
                    </div>
                    <div className={`mb-6 pb-6 border-b ${product.popular ? 'border-white/20' : 'border-[#00a045]/20'}`}>
                      <div className={`text-sm ${product.popular ? 'text-white/70' : 'text-[#666666]'} mb-1`}>
                        Montant minimum
                      </div>
                      <div className={`text-xl font-medium ${product.popular ? 'text-white' : 'text-[#003d1f]'}`}>
                        {product.min}
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${product.popular ? 'text-[#f28931]' : 'text-[#00a045]'}`}
                            strokeWidth={2}
                          />
                          <span className={product.popular ? 'text-white/90' : 'text-[#666666]'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-3 rounded-lg font-medium transition-all ${
                        product.popular
                          ? 'bg-[#f28931] text-white hover:bg-[#d47628]'
                          : 'bg-[#00a045] text-white hover:bg-[#008c3c]'
                      }`}
                    >
                      Ouvrir un compte
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Crédit Tab */}
          {activeTab === 'credit' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-[#003d1f] text-[48px] leading-[1.2] tracking-[-0.5px] mb-4" style={{ fontWeight: 500 }}>
                  Nos solutions de crédit
                </h2>
                <p className="text-[#666666] text-lg max-w-[700px] mx-auto">
                  Des crédits à taux réduits pour concrétiser vos projets personnels et professionnels
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {creditProducts.map((product) => (
                  <div key={product.name} className="bg-white border-2 border-[#00a045]/20 rounded-2xl p-8 hover:border-[#00a045] hover:shadow-xl transition-all">
                    <h3 className="text-[#003d1f] text-2xl font-medium mb-6">{product.name}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-[#00a045]/20">
                      <div>
                        <div className="text-sm text-[#666666] mb-1">Taux annuel</div>
                        <div className="text-2xl font-medium text-[#00a045]">{product.rate}</div>
                      </div>
                      <div>
                        <div className="text-sm text-[#666666] mb-1">Montant max</div>
                        <div className="text-lg font-medium text-[#003d1f]">{product.max}</div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="text-sm text-[#666666] mb-1">Durée</div>
                      <div className="text-lg font-medium text-[#003d1f]">{product.duration}</div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#00a045]" strokeWidth={2} />
                          <span className="text-[#666666]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-[#f28931] text-white py-3 rounded-lg font-medium hover:bg-[#d47628] transition-all">
                      Simuler mon crédit
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Immobilier Tab */}
          {activeTab === 'immobilier' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-[#003d1f] text-[48px] leading-[1.2] tracking-[-0.5px] mb-4" style={{ fontWeight: 500 }}>
                  Nos programmes immobiliers
                </h2>
                <p className="text-[#666666] text-lg max-w-[700px] mx-auto">
                  Devenez propriétaire avec nos villas et duplex en résidences sécurisées
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {immobilierProjects.map((project) => (
                  <div key={project.name} className="bg-white border-2 border-[#f28931]/20 rounded-2xl overflow-hidden hover:border-[#f28931] hover:shadow-xl transition-all">
                    <div className="h-48 bg-gradient-to-br from-[#f28931]/20 to-[#00a045]/20 flex items-center justify-center">
                      <Home className="w-20 h-20 text-[#f28931]/40" strokeWidth={1} />
                    </div>
                    <div className="p-8">
                      <h3 className="text-[#003d1f] text-2xl font-medium mb-2">{project.name}</h3>
                      <div className="text-[#666666] text-sm mb-4">{project.location}</div>
                      <div className="text-[#00a045] text-3xl font-medium mb-6">{project.price}</div>
                      <ul className="space-y-2 mb-6">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-[#f28931] rounded-full"></div>
                            <span className="text-[#666666] text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="w-full bg-[#f28931] text-white py-3 rounded-lg font-medium hover:bg-[#d47628] transition-all">
                        En savoir plus
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-[#f5f5f0] rounded-2xl p-8 text-center">
                <p className="text-[#666666] mb-4">
                  <strong className="text-[#003d1f]">Financement jusqu'à 90%</strong> · Crédit immobilier à partir de 6,5% · Durée jusqu'à 10 ans
                </p>
                <button className="bg-[#00a045] text-white px-8 py-3 rounded-lg hover:bg-[#008c3c] transition-all">
                  Calculer mon financement
                </button>
              </div>
            </div>
          )}

          {/* E-MA2E Tab */}
          {activeTab === 'ema2e' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-[#003d1f] text-[48px] leading-[1.2] tracking-[-0.5px] mb-4" style={{ fontWeight: 500 }}>
                  Plateforme E-MA2E
                </h2>
                <p className="text-[#666666] text-lg max-w-[700px] mx-auto">
                  Gérez tous vos comptes en ligne, 24h/24 et 7j/7, depuis votre ordinateur ou smartphone
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-12">
                {ema2eFeatures.map((feature) => (
                  <div key={feature.title} className="bg-white border-2 border-[#00a045]/20 rounded-xl p-8 hover:border-[#00a045] hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-[#00a045]/10 rounded-xl flex items-center justify-center mb-6">
                      <Check className="w-6 h-6 text-[#00a045]" strokeWidth={2} />
                    </div>
                    <h4 className="text-[#003d1f] text-xl font-medium mb-3">{feature.title}</h4>
                    <p className="text-[#666666]">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#003d1f] to-[#00a045] rounded-3xl p-16 text-center">
                <h3 className="text-white text-[42px] leading-[1.2] mb-6" style={{ fontWeight: 500 }}>
                  Accédez à votre espace adhérent
                </h3>
                <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
                  Connectez-vous ou créez votre compte pour profiter de tous les services en ligne
                </p>
                <div className="flex items-center justify-center gap-4">
                  <button className="bg-[#f28931] text-white px-10 py-4 rounded-lg hover:bg-[#d47628] transition-all text-lg">
                    Se connecter
                  </button>
                  <button className="bg-white text-[#003d1f] px-10 py-4 rounded-lg hover:bg-white/90 transition-all text-lg">
                    Créer un compte
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
