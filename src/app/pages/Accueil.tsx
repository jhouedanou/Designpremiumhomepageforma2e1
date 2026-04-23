import { useState } from 'react';
import { ChevronRight, TrendingUp, ArrowUpRight, Home, FileText, Calendar, CreditCard, Zap, ChevronDown } from 'lucide-react';
import * as Slider from '@radix-ui/react-slider';

export function Accueil() {
  const [amount, setAmount] = useState(2500000);
  const [duration, setDuration] = useState(36);
  const [activeTab, setActiveTab] = useState('ordinaire');

  const calculateMonthly = () => {
    const rate = 0.068 / 12;
    const monthly = (amount * rate * Math.pow(1 + rate, duration)) / (Math.pow(1 + rate, duration) - 1);
    return Math.round(monthly);
  };

  return (
    <div className="pt-20">
      {/* Hero Section with Simulator */}
      <section className="min-h-[600px] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#003d1f] to-[#00a045]">
        <div className="absolute inset-0 opacity-[0.05]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-12 py-20 grid grid-cols-[55%_45%] gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-8 border border-white/20">
              <div className="w-2 h-2 bg-[#f28931] rounded-full animate-pulse"></div>
              <span className="text-white text-sm">Agréée BCEAO · SODECI · CIE · GS2E · CIPREL</span>
            </div>

            <h1 className="text-white text-[56px] leading-[1.1] tracking-[-1px] mb-6" style={{ fontWeight: 500 }}>
              L'épargne qui fait grandir vos{' '}
              <span className="text-[#f28931]">projets de vie</span>
            </h1>

            <p className="text-white/85 text-lg max-w-[520px] mb-10 leading-relaxed">
              Une mutuelle au service de 8 000+ agents depuis 15 ans. Épargne sécurisée, crédits adaptés et accompagnement personnalisé.
            </p>

            <div className="flex items-center gap-4 mb-16">
              <button className="bg-[#f28931] text-white px-8 py-4 rounded hover:bg-[#d47628] transition-all">
                Devenir adhérent
              </button>
              <button className="bg-transparent text-white px-8 py-4 rounded border-2 border-white hover:bg-white/10 transition-all">
                Nos services
              </button>
            </div>

            <div className="flex items-center gap-16 pt-8 border-t border-white/20">
              <div>
                <div className="text-white text-3xl font-medium mb-1">8 000+</div>
                <div className="text-white/70 text-sm">Adhérents</div>
              </div>
              <div>
                <div className="text-white text-3xl font-medium mb-1">5,9 Mds</div>
                <div className="text-white/70 text-sm">Crédits FCFA</div>
              </div>
              <div>
                <div className="text-white text-3xl font-medium mb-1">15 ans</div>
                <div className="text-white/70 text-sm">Expérience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Simulator */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_25px_70px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[#00a045] text-xs uppercase tracking-[2px] font-medium">Simulateur</span>
                <h3 className="text-[#003d1f] text-xl font-medium mt-1">Calculez votre crédit</h3>
              </div>
              <span className="bg-[#f5f5f0] text-[#666666] px-3 py-1.5 rounded-full text-xs">30 sec</span>
            </div>

            <div className="flex gap-2 mb-8">
              {['ordinaire', 'express', 'immobilier'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab
                      ? 'bg-[#00a045] text-white shadow-sm'
                      : 'bg-[#f5f5f0] text-[#666666] hover:bg-[#e5e5e0]'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#003d1f] text-sm font-medium">Montant</span>
                  <span className="text-[#00a045] text-lg font-medium">{amount.toLocaleString('fr-FR')} F</span>
                </div>
                <Slider.Root
                  className="relative flex items-center select-none touch-none w-full h-5"
                  value={[amount]}
                  max={10000000}
                  min={100000}
                  step={100000}
                  onValueChange={(value) => setAmount(value[0])}
                >
                  <Slider.Track className="bg-[#f5f5f0] relative grow rounded-full h-2.5">
                    <Slider.Range className="absolute bg-gradient-to-r from-[#00a045] to-[#f28931] h-full rounded-full" />
                  </Slider.Track>
                  <Slider.Thumb
                    className="block w-6 h-6 bg-white border-3 border-[#f28931] rounded-full shadow-md hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-[#f28931] focus:ring-offset-2"
                    aria-label="Montant"
                  />
                </Slider.Root>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#003d1f] text-sm font-medium">Durée</span>
                  <span className="text-[#00a045] text-lg font-medium">{duration} mois</span>
                </div>
                <Slider.Root
                  className="relative flex items-center select-none touch-none w-full h-5"
                  value={[duration]}
                  max={60}
                  min={6}
                  step={6}
                  onValueChange={(value) => setDuration(value[0])}
                >
                  <Slider.Track className="bg-[#f5f5f0] relative grow rounded-full h-2.5">
                    <Slider.Range className="absolute bg-gradient-to-r from-[#00a045] to-[#f28931] h-full rounded-full" />
                  </Slider.Track>
                  <Slider.Thumb
                    className="block w-6 h-6 bg-white border-3 border-[#f28931] rounded-full shadow-md hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-[#f28931] focus:ring-offset-2"
                    aria-label="Durée"
                  />
                </Slider.Root>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#003d1f] to-[#00a045] rounded-xl p-5 flex items-center justify-between mb-6">
              <div>
                <div className="text-white/70 text-xs mb-1 uppercase tracking-wide">Mensualité</div>
                <div className="text-white text-3xl font-medium">{calculateMonthly().toLocaleString('fr-FR')} F</div>
              </div>
              <div className="text-right">
                <div className="text-white/70 text-xs mb-1 uppercase tracking-wide">TEG</div>
                <div className="text-[#f28931] text-3xl font-medium">6,8%</div>
              </div>
            </div>

            <button className="w-full bg-[#f28931] text-white py-4 rounded-lg font-medium hover:bg-[#d47628] transition-all flex items-center justify-center gap-2">
              Faire une demande <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <div className="text-[#f28931] text-xs uppercase tracking-[2px] font-medium mb-4">Nos solutions</div>
            <h2 className="text-[#003d1f] text-[48px] leading-[1.2] tracking-[-0.5px] mb-6" style={{ fontWeight: 500 }}>
              Des produits adaptés à chaque étape de votre parcours
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Épargne */}
            <div className="group bg-white border-2 border-[#00a045]/20 rounded-xl p-8 hover:border-[#00a045] hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#00a045]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00a045]/20 transition-colors">
                <TrendingUp className="w-7 h-7 text-[#00a045]" strokeWidth={1.8} />
              </div>
              <h3 className="text-[#003d1f] text-2xl font-medium mb-4">Épargne rémunérée</h3>
              <p className="text-[#666666] leading-relaxed mb-6">
                Constituez votre épargne en toute sécurité avec des taux attractifs et des retraits flexibles.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded-md text-xs">Express</span>
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded-md text-xs">Ordinaire</span>
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded-md text-xs">Logement</span>
              </div>
              <div className="flex items-center text-[#00a045] font-medium group-hover:gap-2 transition-all">
                En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Crédit */}
            <div className="group bg-[#003d1f] rounded-xl p-8 hover:shadow-2xl transition-all relative">
              <div className="absolute top-6 right-6 bg-[#f28931] text-white px-3 py-1.5 rounded-md text-[10px] font-medium uppercase tracking-wide">
                Populaire
              </div>
              <div className="w-14 h-14 bg-[#f28931]/20 rounded-xl flex items-center justify-center mb-6">
                <ArrowUpRight className="w-7 h-7 text-[#f28931]" strokeWidth={1.8} />
              </div>
              <h3 className="text-white text-2xl font-medium mb-4">Crédit à taux réduit</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Financez vos projets avec nos solutions adaptées et taux préférentiels réservés aux adhérents.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 bg-white/10 text-white rounded-md text-xs">Ordinaire</span>
                <span className="px-3 py-1.5 bg-white/10 text-white rounded-md text-xs">Express</span>
                <span className="px-3 py-1.5 bg-white/10 text-white rounded-md text-xs">Immobilier</span>
              </div>
              <div className="flex items-center text-[#f28931] font-medium group-hover:gap-2 transition-all">
                En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Immobilier */}
            <div className="group bg-white border-2 border-[#f28931]/20 rounded-xl p-8 hover:border-[#f28931] hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#f28931]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#f28931]/20 transition-colors">
                <Home className="w-7 h-7 text-[#f28931]" strokeWidth={1.8} />
              </div>
              <h3 className="text-[#003d1f] text-2xl font-medium mb-4">Projet immobilier</h3>
              <p className="text-[#666666] leading-relaxed mb-6">
                Accédez à la propriété avec nos programmes dédiés. Villas et duplex en résidences sécurisées.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded-md text-xs">Villas 3-5p</span>
                <span className="px-3 py-1.5 bg-[#f5f5f0] text-[#003d1f] rounded-md text-xs">Duplex 4-5p</span>
              </div>
              <div className="flex items-center text-[#f28931] font-medium group-hover:gap-2 transition-all">
                En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-MA2E Platform */}
      <section className="py-24 bg-[#f5f5f0]">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="grid grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-[#f28931] text-xs uppercase tracking-[2px] font-medium mb-4">Plateforme E-MA2E</div>
              <h2 className="text-[#003d1f] text-[48px] leading-[1.2] tracking-[-0.5px] mb-6" style={{ fontWeight: 500 }}>
                Gérez votre compte 24h/24, où que vous soyez
              </h2>
              <p className="text-[#666666] text-lg leading-relaxed mb-10">
                Consultez vos soldes, effectuez vos demandes, téléchargez vos relevés et suivez vos opérations en temps réel.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#00a045] text-white px-8 py-4 rounded-lg hover:bg-[#008c3c] transition-all">
                  Se connecter
                </button>
                <button className="border-2 border-[#00a045] text-[#00a045] px-8 py-4 rounded-lg hover:bg-[#00a045]/5 transition-all">
                  Créer un compte
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: FileText, title: 'Relevés en ligne', color: '#00a045' },
                { icon: Calendar, title: 'Mon espace', color: '#f28931' },
                { icon: CreditCard, title: 'Dépôt express', color: '#00a045' },
                { icon: Zap, title: 'Demandes rapides', color: '#f28931' },
              ].map(({ icon: Icon, title, color }, i) => (
                <div key={i} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4`} style={{ backgroundColor: `${color}15` }}>
                    <Icon className="w-6 h-6" style={{ color }} strokeWidth={1.8} />
                  </div>
                  <h4 className="text-[#003d1f] font-medium mb-2">{title}</h4>
                  <p className="text-[#666666] text-sm">Service disponible 24h/24</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Strip */}
      <section className="py-16 bg-white border-y border-[#00a045]/10">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="text-center mb-10">
            <p className="text-[#666666] text-sm uppercase tracking-[2px]">Nos partenaires</p>
          </div>
          <div className="flex items-center justify-center gap-16 opacity-40">
            {['SODECI', 'CIE', 'GS2E', 'CIPREL', 'BCEAO'].map((partner) => (
              <div key={partner} className="text-[#003d1f] text-2xl font-medium tracking-tight">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
