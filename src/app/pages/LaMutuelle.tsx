import { Award, Target, Users, TrendingUp } from 'lucide-react';

export function LaMutuelle() {
  const timeline = [
    { year: '2011', title: 'Création de MA2E', desc: 'Agréation BCEAO et lancement des premières activités' },
    { year: '2013', title: 'Extension des services', desc: '1 000 adhérents, ouverture du crédit immobilier' },
    { year: '2016', title: 'Croissance soutenue', desc: '3 500 adhérents, 2 Mds FCFA de crédits octroyés' },
    { year: '2019', title: 'Transformation digitale', desc: 'Lancement de la plateforme E-MA2E' },
    { year: '2024', title: 'Leadership confirmé', desc: '8 000+ adhérents, 5,9 Mds FCFA de crédits' },
  ];

  const missions = [
    {
      icon: Target,
      title: 'Notre mission',
      desc: 'Accompagner les agents de l\'eau et de l\'électricité dans la réalisation de leurs projets de vie à travers des solutions d\'épargne et de crédit adaptées.',
    },
    {
      icon: Award,
      title: 'Notre vision',
      desc: 'Devenir la référence en matière de microfinance mutualiste pour les agents des services publics en Côte d\'Ivoire et en Afrique de l\'Ouest.',
    },
  ];

  const governance = [
    { title: 'Conseil d\'Administration', members: '9 membres élus', role: 'Orientation stratégique' },
    { title: 'Conseil de Surveillance', members: '5 membres', role: 'Contrôle permanent' },
    { title: 'Direction Générale', members: '1 Directeur Général', role: 'Gestion opérationnelle' },
  ];

  const leadership = [
    { name: 'Dr. Kouassi KOUAME', role: 'Président du Conseil d\'Administration', company: 'SODECI' },
    { name: 'Mme TANOH Adjoua', role: 'Directrice Générale', experience: '15 ans en microfinance' },
    { name: 'M. KOFFI Jean-Baptiste', role: 'Directeur Financier', company: 'CIE' },
    { name: 'Mme YAO Marcelline', role: 'Directrice des Opérations', company: 'GS2E' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#003d1f] to-[#00a045] py-32">
        <div className="max-w-[1600px] mx-auto px-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-8 border border-white/20">
            <span className="text-white text-sm">15 ans d'excellence</span>
          </div>
          <h1 className="text-white text-[64px] leading-[1.1] tracking-[-1px] mb-6 max-w-[900px] mx-auto" style={{ fontWeight: 500 }}>
            Une mutuelle au service de ses adhérents
          </h1>
          <p className="text-white/85 text-xl max-w-[700px] mx-auto">
            Depuis 2011, nous bâtissons la confiance à travers la proximité, la transparence et l'excellence du service.
          </p>
        </div>
      </section>

      {/* Missions & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="grid grid-cols-2 gap-8">
            {missions.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border-2 border-[#00a045]/20 rounded-2xl p-12 hover:border-[#00a045] hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#00a045]/10 rounded-2xl flex items-center justify-center mb-8">
                  <Icon className="w-8 h-8 text-[#00a045]" strokeWidth={1.8} />
                </div>
                <h3 className="text-[#003d1f] text-3xl font-medium mb-6">{title}</h3>
                <p className="text-[#666666] text-lg leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#f5f5f0]">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="text-center mb-16">
            <div className="text-[#f28931] text-xs uppercase tracking-[2px] font-medium mb-4">Notre parcours</div>
            <h2 className="text-[#003d1f] text-[48px] leading-[1.2] tracking-[-0.5px]" style={{ fontWeight: 500 }}>
              15 ans de croissance et d'innovation
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#00a045]/20 -translate-x-1/2"></div>
            <div className="space-y-16">
              {timeline.map((item, i) => (
                <div key={i} className={`flex items-center gap-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-[#00a045] text-3xl font-medium mb-3">{item.year}</div>
                      <h4 className="text-[#003d1f] text-xl font-medium mb-2">{item.title}</h4>
                      <p className="text-[#666666]">{item.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-[#00a045] rounded-full border-4 border-[#f5f5f0]"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="text-center mb-16">
            <div className="text-[#f28931] text-xs uppercase tracking-[2px] font-medium mb-4">Gouvernance</div>
            <h2 className="text-[#003d1f] text-[48px] leading-[1.2] tracking-[-0.5px]" style={{ fontWeight: 500 }}>
              Des organes de gouvernance solides
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {governance.map((org) => (
              <div key={org.title} className="bg-gradient-to-br from-[#003d1f] to-[#00a045] rounded-2xl p-8 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <h4 className="text-2xl font-medium mb-4">{org.title}</h4>
                <p className="text-white/80 mb-3">{org.members}</p>
                <p className="text-sm text-white/60">{org.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-[#f5f5f0]">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="text-center mb-16">
            <div className="text-[#f28931] text-xs uppercase tracking-[2px] font-medium mb-4">Direction</div>
            <h2 className="text-[#003d1f] text-[48px] leading-[1.2] tracking-[-0.5px]" style={{ fontWeight: 500 }}>
              Une équipe expérimentée à votre service
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-[#00a045] to-[#003d1f] rounded-full mb-6 flex items-center justify-center text-white text-2xl font-medium">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-[#003d1f] font-medium mb-2">{person.name}</h4>
                <p className="text-[#00a045] text-sm mb-2">{person.role}</p>
                <p className="text-[#666666] text-xs">{person.company || person.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="bg-gradient-to-br from-[#003d1f] to-[#00a045] rounded-3xl p-16 text-center">
            <h2 className="text-white text-[42px] leading-[1.2] tracking-[-0.5px] mb-6 max-w-[700px] mx-auto" style={{ fontWeight: 500 }}>
              Rejoignez une mutuelle qui place ses adhérents au cœur de ses préoccupations
            </h2>
            <button className="bg-[#f28931] text-white px-10 py-4 rounded-lg hover:bg-[#d47628] transition-all text-lg">
              Devenir adhérent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
