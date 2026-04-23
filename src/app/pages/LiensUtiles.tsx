import { ExternalLink, Building2, Shield, Landmark } from 'lucide-react';

export function LiensUtiles() {
  const partnerGroups = [
    {
      title: 'Autorités de tutelle',
      icon: Shield,
      color: '#003d1f',
      links: [
        { name: 'BCEAO - Banque Centrale des États de l\'Afrique de l\'Ouest', url: 'https://www.bceao.int' },
        { name: 'Ministère de l\'Économie et des Finances', url: '#' },
        { name: 'Direction de la Microfinance', url: '#' },
      ],
    },
    {
      title: 'Entreprises partenaires',
      icon: Building2,
      color: '#00a045',
      links: [
        { name: 'SODECI - Société de Distribution d\'Eau de Côte d\'Ivoire', url: 'https://www.sodeci.ci' },
        { name: 'CIE - Compagnie Ivoirienne d\'Électricité', url: 'https://www.cie.ci' },
        { name: 'GS2E - Groupement des Sociétés d\'Eau et d\'Électricité', url: '#' },
        { name: 'CIPREL - Compagnie Ivoirienne de Production d\'Électricité', url: 'https://www.ciprel.ci' },
      ],
    },
    {
      title: 'Secteur microfinance',
      icon: Landmark,
      color: '#f28931',
      links: [
        { name: 'APIM-CI - Association Professionnelle des Institutions de Microfinance', url: '#' },
        { name: 'UNACOOPEC-CI - Union Nationale des Coopératives d\'Épargne et de Crédit', url: '#' },
        { name: 'CGAP - Consultative Group to Assist the Poor', url: 'https://www.cgap.org' },
        { name: 'AFD - Agence Française de Développement', url: 'https://www.afd.fr' },
      ],
    },
  ];

  const usefulResources = [
    { title: 'Calculateur de capacité d\'emprunt', desc: 'Estimez votre capacité d\'emprunt avant de faire votre demande' },
    { title: 'Simulateur d\'épargne', desc: 'Projetez l\'évolution de votre épargne sur 5, 10 ou 15 ans' },
    { title: 'Guide de l\'adhérent', desc: 'Tout ce que vous devez savoir sur MA2E en un seul document' },
    { title: 'Glossaire microfinance', desc: 'Comprenez les termes techniques de la microfinance' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#003d1f] to-[#00a045] py-32">
        <div className="max-w-[1600px] mx-auto px-12 text-center">
          <h1 className="text-white text-[64px] leading-[1.1] tracking-[-1px] mb-6" style={{ fontWeight: 500 }}>
            Liens utiles
          </h1>
          <p className="text-white/85 text-xl max-w-[700px] mx-auto">
            Accédez rapidement à nos partenaires et ressources utiles
          </p>
        </div>
      </section>

      {/* Partner Groups */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="space-y-12">
            {partnerGroups.map((group, i) => {
              const Icon = group.icon;
              return (
                <div key={i}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${group.color}15` }}>
                      <Icon className="w-7 h-7" style={{ color: group.color }} strokeWidth={1.8} />
                    </div>
                    <h2 className="text-[#003d1f] text-[36px] leading-[1.2] tracking-[-0.5px]" style={{ fontWeight: 500 }}>
                      {group.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {group.links.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-[#f5f5f0] rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all border-2 border-transparent hover:border-[#00a045]"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="text-[#003d1f] text-lg font-medium mb-2 group-hover:text-[#00a045] transition-colors">
                              {link.name}
                            </h4>
                            <span className="text-[#666666] text-sm">{link.url === '#' ? 'Lien à venir' : link.url.replace('https://', '')}</span>
                          </div>
                          <div className="w-10 h-10 bg-white group-hover:bg-[#00a045] rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                            <ExternalLink className="w-5 h-5 text-[#00a045] group-hover:text-white transition-colors" strokeWidth={2} />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Useful Resources */}
      <section className="py-24 bg-[#f5f5f0]">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-[#003d1f] text-[48px] leading-[1.2] tracking-[-0.5px] mb-4" style={{ fontWeight: 500 }}>
              Ressources utiles
            </h2>
            <p className="text-[#666666] text-lg">Outils et guides pour mieux gérer vos finances</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {usefulResources.map((resource, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow cursor-pointer group">
                <h4 className="text-[#003d1f] text-xl font-medium mb-3 group-hover:text-[#00a045] transition-colors">{resource.title}</h4>
                <p className="text-[#666666] mb-4">{resource.desc}</p>
                <div className="flex items-center text-[#00a045] font-medium group-hover:gap-2 transition-all">
                  Accéder à l'outil
                  <ExternalLink className="w-4 h-4 ml-1" strokeWidth={2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="bg-gradient-to-br from-[#003d1f] to-[#00a045] rounded-3xl p-16 text-center">
            <h2 className="text-white text-[42px] leading-[1.2] tracking-[-0.5px] mb-6" style={{ fontWeight: 500 }}>
              Restez connecté avec MA2E
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
              Suivez-nous sur nos réseaux sociaux pour ne rien manquer de nos actualités et nouveautés
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-all">
                Facebook
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-all">
                LinkedIn
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-all">
                Twitter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
