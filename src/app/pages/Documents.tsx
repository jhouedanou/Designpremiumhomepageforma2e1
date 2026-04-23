import { useState } from 'react';
import { FileText, Download, Filter } from 'lucide-react';

export function Documents() {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const categories = [
    { id: 'tous', label: 'Tous les documents' },
    { id: 'formulaires', label: 'Formulaires' },
    { id: 'rapports', label: 'Rapports annuels' },
    { id: 'institutionnel', label: 'Documents institutionnels' },
    { id: 'immobilier', label: 'Immobilier' },
  ];

  const documents = [
    { name: 'Formulaire adhésion MA2E', category: 'formulaires', size: '250 KB', type: 'PDF', date: '2026-01-15' },
    { name: 'Demande de crédit ordinaire', category: 'formulaires', size: '180 KB', type: 'PDF', date: '2026-01-15' },
    { name: 'Demande de crédit express', category: 'formulaires', size: '175 KB', type: 'PDF', date: '2026-01-15' },
    { name: 'Demande de crédit immobilier', category: 'formulaires', size: '320 KB', type: 'PDF', date: '2026-01-15' },
    { name: 'Formulaire de réclamation', category: 'formulaires', size: '140 KB', type: 'PDF', date: '2025-11-20' },
    { name: 'Rapport annuel 2025', category: 'rapports', size: '4,2 MB', type: 'PDF', date: '2026-02-15' },
    { name: 'Rapport annuel 2024', category: 'rapports', size: '3,8 MB', type: 'PDF', date: '2025-02-10' },
    { name: 'Rapport annuel 2023', category: 'rapports', size: '3,5 MB', type: 'PDF', date: '2024-02-12' },
    { name: 'États financiers 2025', category: 'rapports', size: '1,2 MB', type: 'PDF', date: '2026-03-01' },
    { name: 'Statuts MA2E', category: 'institutionnel', size: '420 KB', type: 'PDF', date: '2024-06-10' },
    { name: 'Règlement intérieur', category: 'institutionnel', size: '380 KB', type: 'PDF', date: '2024-06-10' },
    { name: 'Politique de protection des données', category: 'institutionnel', size: '290 KB', type: 'PDF', date: '2025-10-06' },
    { name: 'Conditions générales épargne', category: 'institutionnel', size: '340 KB', type: 'PDF', date: '2025-01-12' },
    { name: 'Conditions générales crédit', category: 'institutionnel', size: '360 KB', type: 'PDF', date: '2025-01-12' },
    { name: 'Grille tarifaire 2026', category: 'institutionnel', size: '210 KB', type: 'PDF', date: '2026-01-01' },
    { name: 'Plans villas 3 pièces', category: 'immobilier', size: '2,8 MB', type: 'PDF', date: '2026-03-20' },
    { name: 'Plans duplex 4 pièces', category: 'immobilier', size: '3,2 MB', type: 'PDF', date: '2026-03-20' },
    { name: 'Cahier des charges immobilier', category: 'immobilier', size: '580 KB', type: 'PDF', date: '2026-02-28' },
    { name: 'Modalités financement immobilier', category: 'immobilier', size: '220 KB', type: 'PDF', date: '2025-12-15' },
  ];

  const filteredDocs = selectedCategory === 'tous' ? documents : documents.filter((d) => d.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#003d1f] to-[#00a045] py-32">
        <div className="max-w-[1600px] mx-auto px-12 text-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
            <FileText className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          <h1 className="text-white text-[64px] leading-[1.1] tracking-[-1px] mb-6" style={{ fontWeight: 500 }}>
            Centre de téléchargement
          </h1>
          <p className="text-white/85 text-xl max-w-[700px] mx-auto">
            Accédez à tous nos documents officiels, formulaires et rapports
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-[#00a045]/10 sticky top-20 z-40">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="flex items-center gap-4 py-6">
            <Filter className="w-5 h-5 text-[#666666]" />
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

      {/* Documents Grid */}
      <section className="py-24 bg-[#f5f5f0]">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="grid grid-cols-3 gap-6">
            {filteredDocs.map((doc, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all group cursor-pointer border-2 border-transparent hover:border-[#00a045]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#f28931]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-7 h-7 text-[#f28931]" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#003d1f] font-medium mb-2 group-hover:text-[#00a045] transition-colors">{doc.name}</h4>
                    <div className="flex items-center gap-3 text-sm text-[#666666]">
                      <span className="px-2 py-1 bg-[#f5f5f0] rounded text-xs font-medium">{doc.type}</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#00a045]/10">
                  <span className="text-[#666666] text-sm">{new Date(doc.date).toLocaleDateString('fr-FR')}</span>
                  <button className="flex items-center gap-2 text-[#00a045] hover:text-[#008c3c] transition-colors font-medium">
                    <Download className="w-4 h-4" strokeWidth={2} />
                    <span className="text-sm">Télécharger</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredDocs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#666666] text-lg">Aucun document dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="bg-gradient-to-br from-[#003d1f] to-[#00a045] rounded-3xl p-16 text-center">
            <h2 className="text-white text-[42px] leading-[1.2] tracking-[-0.5px] mb-6" style={{ fontWeight: 500 }}>
              Besoin d'aide avec un document ?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
              Notre équipe est disponible pour vous accompagner dans le remplissage de vos formulaires
            </p>
            <button className="bg-[#f28931] text-white px-10 py-4 rounded-lg hover:bg-[#d47628] transition-all text-lg">
              Contacter le service client
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
