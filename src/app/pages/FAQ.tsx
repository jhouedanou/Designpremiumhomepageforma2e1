import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState('adhesion');

  const categories = [
    { id: 'adhesion', label: 'Adhésion' },
    { id: 'epargne', label: 'Épargne' },
    { id: 'credit', label: 'Crédit' },
    { id: 'plateforme', label: 'Plateforme E-MA2E' },
  ];

  const faqs = {
    adhesion: [
      {
        q: 'Qui peut adhérer à MA2E ?',
        a: 'Tous les agents permanents de SODECI, CIE, GS2E et CIPREL peuvent adhérer à MA2E, qu\'ils soient en période d\'essai ou titularisés.',
      },
      {
        q: 'Quels sont les documents nécessaires pour l\'adhésion ?',
        a: 'Vous devez fournir une copie de votre carte d\'identité, une attestation d\'emploi de votre entreprise, un RIB et deux photos d\'identité récentes.',
      },
      {
        q: 'Quel est le montant de la cotisation d\'adhésion ?',
        a: 'La cotisation d\'adhésion est de 5 000 FCFA payable une seule fois. Un droit d\'entrée de 10 000 FCFA est également requis.',
      },
      {
        q: 'Combien de temps faut-il pour finaliser mon adhésion ?',
        a: 'Une fois votre dossier complet déposé, votre adhésion est validée sous 48 heures ouvrées. Vous recevrez votre carte d\'adhérent sous 5 jours.',
      },
      {
        q: 'Puis-je adhérer pour un membre de ma famille ?',
        a: 'Non, l\'adhésion est strictement personnelle et réservée aux agents des entreprises partenaires. Seul le titulaire du compte peut bénéficier des services.',
      },
    ],
    epargne: [
      {
        q: 'Quelle est la différence entre l\'épargne Express et Ordinaire ?',
        a: 'L\'épargne Express offre un taux de 5% avec retrait immédiat, tandis que l\'épargne Ordinaire propose 6,5% avec un délai de retrait de 48h et un accès facilité au crédit.',
      },
      {
        q: 'Comment est calculée la rémunération de mon épargne ?',
        a: 'Les intérêts sont calculés mensuellement sur la base du solde moyen de votre compte et capitalisés trimestriellement sur votre épargne.',
      },
      {
        q: 'Puis-je retirer mon épargne à tout moment ?',
        a: 'Oui pour l\'épargne Express (retrait immédiat). Pour l\'épargne Ordinaire et Logement, un préavis de 48h est nécessaire pour les montants supérieurs à 500 000 FCFA.',
      },
      {
        q: 'Mon épargne est-elle garantie ?',
        a: 'Oui, MA2E est agréée par la BCEAO. Vos dépôts sont sécurisés et bénéficient de la garantie du système de microfinance de l\'UEMOA.',
      },
      {
        q: 'Quel est le montant maximum que je peux épargner ?',
        a: 'Il n\'y a pas de plafond pour l\'épargne. Vous pouvez épargner autant que vous le souhaitez tout en bénéficiant de la rémunération aux taux affichés.',
      },
    ],
    credit: [
      {
        q: 'Quel montant puis-je emprunter ?',
        a: 'Le montant dépend de votre capacité de remboursement et de votre ancienneté. Les crédits ordinaires vont jusqu\'à 8 000 000 FCFA, les crédits express jusqu\'à 3 000 000 FCFA, et les crédits immobiliers jusqu\'à 25 000 000 FCFA.',
      },
      {
        q: 'Quelle est la durée de remboursement ?',
        a: 'De 6 à 60 mois pour les crédits ordinaires et express, et de 12 à 120 mois (10 ans) pour les crédits immobiliers.',
      },
      {
        q: 'Quelles garanties sont demandées ?',
        a: 'Pour les crédits ordinaires : domiciliation de salaire et caution solidaire. Pour les crédits immobiliers : hypothèque sur le bien financé.',
      },
      {
        q: 'Combien de temps faut-il pour obtenir mon crédit ?',
        a: 'Le crédit Express est débloqué sous 48h une fois le dossier complet validé. Le crédit Ordinaire sous 5 jours, et le crédit Immobilier sous 15 jours.',
      },
      {
        q: 'Puis-je rembourser mon crédit par anticipation ?',
        a: 'Oui, le remboursement anticipé est autorisé sans pénalité. Vous bénéficiez d\'une réduction des intérêts proportionnelle à la durée restante.',
      },
      {
        q: 'Que se passe-t-il en cas de difficulté de remboursement ?',
        a: 'Contactez immédiatement votre conseiller MA2E. Nous pouvons étudier un rééchelonnement ou un différé de paiement selon votre situation.',
      },
    ],
    plateforme: [
      {
        q: 'Comment créer mon compte E-MA2E ?',
        a: 'Rendez-vous sur www.ema2e.ci, cliquez sur "Créer un compte" et suivez les instructions. Vous devrez renseigner votre numéro d\'adhérent et valider votre adresse email.',
      },
      {
        q: 'J\'ai oublié mon mot de passe, que faire ?',
        a: 'Cliquez sur "Mot de passe oublié" sur la page de connexion. Un lien de réinitialisation sera envoyé à votre adresse email enregistrée.',
      },
      {
        q: 'Puis-je faire une demande de crédit en ligne ?',
        a: 'Oui, connectez-vous à votre espace, allez dans "Mes demandes" puis "Nouvelle demande de crédit". Remplissez le formulaire et joignez les pièces justificatives scannées.',
      },
      {
        q: 'Les opérations en ligne sont-elles sécurisées ?',
        a: 'Absolument. E-MA2E utilise un cryptage SSL 256 bits et une authentification à deux facteurs pour garantir la sécurité de toutes vos transactions.',
      },
      {
        q: 'Puis-je télécharger mes relevés sur E-MA2E ?',
        a: 'Oui, tous vos relevés mensuels sont disponibles en format PDF dans la section "Mes documents". Vous pouvez les télécharger à tout moment.',
      },
    ],
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#003d1f] to-[#00a045] py-32">
        <div className="max-w-[1600px] mx-auto px-12 text-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
            <HelpCircle className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          <h1 className="text-white text-[64px] leading-[1.1] tracking-[-1px] mb-6" style={{ fontWeight: 500 }}>
            Foire aux questions
          </h1>
          <p className="text-white/85 text-xl max-w-[700px] mx-auto">
            Trouvez rapidement les réponses à vos questions sur nos services
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white border-b border-[#00a045]/10 sticky top-20 z-40">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="flex items-center gap-4 py-6">
            {categories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`px-6 py-3 rounded-lg transition-all font-medium ${
                  activeCategory === id
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

      {/* FAQ Content */}
      <section className="py-24 bg-[#f5f5f0]">
        <div className="max-w-[1200px] mx-auto px-12">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs[activeCategory as keyof typeof faqs]?.map((faq, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="bg-white rounded-xl overflow-hidden border border-[#00a045]/10">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f5f5f0]/50 transition-colors group">
                    <span className="text-[#003d1f] text-lg font-medium pr-8">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-[#00a045] transition-transform group-data-[state=open]:rotate-180" strokeWidth={2} />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-[#666666] leading-relaxed">{faq.a}</p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="bg-gradient-to-br from-[#003d1f] to-[#00a045] rounded-3xl p-16 text-center">
            <h2 className="text-white text-[42px] leading-[1.2] tracking-[-0.5px] mb-6" style={{ fontWeight: 500 }}>
              Vous ne trouvez pas de réponse à votre question ?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos interrogations
            </p>
            <button className="bg-[#f28931] text-white px-10 py-4 rounded-lg hover:bg-[#d47628] transition-all text-lg">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
