import { useState } from 'react';
import { Calendar, Tag, ChevronRight } from 'lucide-react';

export function Actualites() {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const categories = [
    { id: 'tous', label: 'Tous' },
    { id: 'institution', label: 'Institutionnel' },
    { id: 'produits', label: 'Nouveaux produits' },
    { id: 'evenements', label: 'Événements' },
    { id: 'immobilier', label: 'Immobilier' },
  ];

  const featuredArticle = {
    title: 'Lancement de la 2ème tranche du programme immobilier MA2E',
    excerpt:
      'MA2E annonce le lancement de sa deuxième tranche de villas et duplex à Bingerville. 45 logements disponibles pour nos adhérents avec un financement jusqu\'à 90%.',
    date: '2026-04-15',
    category: 'immobilier',
    image: 'immobilier',
  };

  const articles = [
    {
      title: 'Taux d\'épargne bonifiés pour le 1er trimestre 2026',
      excerpt: 'Profitez de taux d\'épargne exceptionnels : 7% pour l\'épargne logement et 6,5% pour l\'épargne ordinaire.',
      date: '2026-04-10',
      category: 'produits',
    },
    {
      title: 'Assemblée Générale Ordinaire 2026',
      excerpt: 'L\'Assemblée Générale se tiendra le 30 mai 2026 au siège de SODECI. Ordre du jour et rapport d\'activité disponibles.',
      date: '2026-04-05',
      category: 'institution',
    },
    {
      title: 'E-MA2E : nouvelles fonctionnalités disponibles',
      excerpt: 'Découvrez les nouvelles fonctionnalités de la plateforme : simulation multi-crédit, chatbot et notifications push.',
      date: '2026-03-28',
      category: 'produits',
    },
    {
      title: 'Journée portes ouvertes le 15 juin 2026',
      excerpt: 'Venez découvrir nos services lors de notre journée portes ouvertes. Stands d\'information, simulations gratuites et cadeaux.',
      date: '2026-03-20',
      category: 'evenements',
    },
    {
      title: 'MA2E certifiée ISO 9001:2015',
      excerpt: 'MA2E obtient la certification ISO 9001:2015 pour son système de management de la qualité, reconnaissance de notre excellence.',
      date: '2026-03-12',
      category: 'institution',
    },
    {
      title: 'Crédit express : déblocage en 24h maintenant possible',
      excerpt: 'Nouveau délai record pour le crédit express. Dossier complet = déblocage sous 24h pour les montants jusqu\'à 1,5M FCFA.',
      date: '2026-03-05',
      category: 'produits',
    },
    {
      title: 'Visite du Programme immobilier de Grand-Bassam',
      excerpt: 'Visite guidée gratuite des duplex vue mer le samedi 22 juin. Inscription obligatoire, places limitées.',
      date: '2026-02-28',
      category: 'immobilier',
    },
    {
      title: 'Partenariat avec CIE pour l\'épargne solaire',
      excerpt: 'MA2E et CIE lancent un nouveau produit d\'épargne dédié au financement d\'installations solaires résidentielles.',
      date: '2026-02-20',
      category: 'produits',
    },
    {
      title: 'Résultats annuels 2025 : croissance de 18%',
      excerpt: 'MA2E affiche une croissance de 18% en 2025 avec 8 200 adhérents et 6,2 Mds FCFA de crédits octroyés.',
      date: '2026-02-15',
      category: 'institution',
    },
  ];

  const filteredArticles = selectedCategory === 'tous' ? articles : articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#003d1f] to-[#00a045] py-32">
        <div className="max-w-[1600px] mx-auto px-12 text-center">
          <h1 className="text-white text-[64px] leading-[1.1] tracking-[-1px] mb-6" style={{ fontWeight: 500 }}>
            Actualités
          </h1>
          <p className="text-white/85 text-xl max-w-[700px] mx-auto">
            Restez informés de nos dernières nouvelles et événements
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-[#00a045]/10 sticky top-20 z-40">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="flex items-center gap-4 py-6">
            {categories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setSelectedCategory(id)}
                className={`px-6 py-3 rounded-lg transition-all font-medium ${
                  selectedCategory === id
                    ? 'bg-[#00a045] text-white shadow-md'
                    : 'bg-[#f5f5f0] text-[#003d1f] hover:bg-[#e5e5e0]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="bg-gradient-to-br from-[#003d1f] to-[#00a045] rounded-3xl overflow-hidden grid grid-cols-2">
            <div className="p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-[#f28931] text-white px-4 py-2 rounded-full text-sm font-medium mb-6 w-fit">
                <Tag className="w-4 h-4" />
                {categories.find((c) => c.id === featuredArticle.category)?.label}
              </div>
              <h2 className="text-white text-[42px] leading-[1.2] tracking-[-0.5px] mb-6" style={{ fontWeight: 500 }}>
                {featuredArticle.title}
              </h2>
              <p className="text-white/85 text-lg mb-8 leading-relaxed">{featuredArticle.excerpt}</p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-white/70">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(featuredArticle.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
              </div>
              <button className="bg-[#f28931] text-white px-8 py-4 rounded-lg hover:bg-[#d47628] transition-all flex items-center gap-2 w-fit">
                Lire l'article complet
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-gradient-to-br from-[#f28931]/20 to-[#00a045]/20 flex items-center justify-center p-16">
              <div className="text-white/20 text-[200px] font-bold">2e</div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-[#f5f5f0]">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="grid grid-cols-3 gap-8">
            {filteredArticles.map((article, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-[#00a045]/10 to-[#f28931]/10 flex items-center justify-center">
                  <Tag className="w-12 h-12 text-[#00a045]/30" strokeWidth={1.5} />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                        article.category === 'immobilier'
                          ? 'bg-[#f28931]/10 text-[#f28931]'
                          : article.category === 'institution'
                            ? 'bg-[#003d1f]/10 text-[#003d1f]'
                            : 'bg-[#00a045]/10 text-[#00a045]'
                      }`}
                    >
                      {categories.find((c) => c.id === article.category)?.label}
                    </span>
                    <span className="text-[#666666] text-sm flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                  <h3 className="text-[#003d1f] text-xl font-medium mb-3 group-hover:text-[#00a045] transition-colors">{article.title}</h3>
                  <p className="text-[#666666] leading-relaxed mb-6">{article.excerpt}</p>
                  <div className="flex items-center text-[#00a045] font-medium group-hover:gap-2 transition-all">
                    Lire la suite
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#666666] text-lg">Aucun article dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="bg-[#f5f5f0] rounded-3xl p-16 text-center">
            <h2 className="text-[#003d1f] text-[42px] leading-[1.2] tracking-[-0.5px] mb-6" style={{ fontWeight: 500 }}>
              Restez informé de nos actualités
            </h2>
            <p className="text-[#666666] text-lg mb-8 max-w-[600px] mx-auto">
              Inscrivez-vous à notre newsletter mensuelle pour recevoir nos dernières nouvelles et offres exclusives
            </p>
            <div className="flex items-center gap-4 max-w-[500px] mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 bg-white border-2 border-[#00a045]/20 rounded-lg focus:outline-none focus:border-[#00a045] transition-colors"
              />
              <button className="bg-[#00a045] text-white px-8 py-4 rounded-lg hover:bg-[#008c3c] transition-all whitespace-nowrap">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
