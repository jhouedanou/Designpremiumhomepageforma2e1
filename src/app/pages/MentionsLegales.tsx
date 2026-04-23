import { useState } from 'react';
import { Scale } from 'lucide-react';

export function MentionsLegales() {
  const [activeTab, setActiveTab] = useState('mentions');

  const tabs = [
    { id: 'mentions', label: 'Mentions légales' },
    { id: 'cgu', label: 'CGU' },
    { id: 'donnees', label: 'Données personnelles' },
    { id: 'cookies', label: 'Cookies' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#003d1f] to-[#00a045] py-32">
        <div className="max-w-[1600px] mx-auto px-12 text-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
            <Scale className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          <h1 className="text-white text-[64px] leading-[1.1] tracking-[-1px] mb-6" style={{ fontWeight: 500 }}>
            Informations légales
          </h1>
          <p className="text-white/85 text-xl max-w-[700px] mx-auto">
            Transparence et conformité réglementaire
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-white border-b border-[#00a045]/10 sticky top-20 z-40">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="flex items-center gap-4 py-6">
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-6 py-3 rounded-lg transition-all font-medium ${
                  activeTab === id
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

      {/* Content */}
      <section className="py-24 bg-[#f5f5f0]">
        <div className="max-w-[1000px] mx-auto px-12">
          <div className="bg-white rounded-3xl p-16">
            {/* Mentions Légales */}
            {activeTab === 'mentions' && (
              <div className="prose prose-lg max-w-none">
                <h2 className="text-[#003d1f] text-[36px] leading-[1.2] tracking-[-0.5px] mb-8" style={{ fontWeight: 500 }}>
                  Mentions légales
                </h2>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Éditeur du site</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  <strong className="text-[#003d1f]">MA2E</strong> - Mutuelle des Agents de l'Eau et de l'Électricité
                  <br />
                  Forme juridique : Mutuelle d'Épargne et de Crédit
                  <br />
                  Agrément BCEAO : N° 00XXXX du XX/XX/2011
                  <br />
                  Siège social : Avenue Houdaille, Immeuble SIDAM, 6ème étage, Abidjan-Plateau, Côte d'Ivoire
                  <br />
                  BP : 18 BP 1210 Abidjan 18
                  <br />
                  Téléphone : +225 27 21 23 64 87
                  <br />
                  Email : contact@ma2e.ci
                </p>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Directeur de publication</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  Madame TANOH Adjoua, Directrice Générale de MA2E
                </p>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Hébergement</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  Le site www.ma2e.ci est hébergé par :
                  <br />
                  [Nom de l'hébergeur]
                  <br />
                  [Adresse de l'hébergeur]
                  <br />
                  [Contact de l'hébergeur]
                </p>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Propriété intellectuelle</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes) est la propriété exclusive de MA2E et est protégé
                  par les lois en vigueur sur la propriété intellectuelle. Toute reproduction, distribution, modification, adaptation,
                  retransmission ou publication de ces différents éléments est strictement interdite sans l'accord exprès par écrit de MA2E.
                </p>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Responsabilité</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  MA2E s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, MA2E ne peut
                  garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site. En conséquence, MA2E
                  décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le
                  site.
                </p>
              </div>
            )}

            {/* CGU */}
            {activeTab === 'cgu' && (
              <div className="prose prose-lg max-w-none">
                <h2 className="text-[#003d1f] text-[36px] leading-[1.2] tracking-[-0.5px] mb-8" style={{ fontWeight: 500 }}>
                  Conditions Générales d'Utilisation
                </h2>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Article 1 - Objet</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation
                  du site www.ma2e.ci ainsi que les services proposés. Toute utilisation du site implique l'acceptation sans réserve des
                  présentes CGU.
                </p>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Article 2 - Accès au site</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  Le site www.ma2e.ci est accessible gratuitement à tout utilisateur disposant d'un accès à internet. Tous les coûts afférents
                  à l'accès au site, que ce soient les frais matériels, logiciels ou d'accès à internet sont exclusivement à la charge de
                  l'utilisateur.
                </p>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Article 3 - Espace adhérent</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  L'accès à l'espace adhérent E-MA2E est réservé aux adhérents de MA2E. Chaque adhérent dispose d'identifiants personnels et
                  confidentiels lui permettant d'accéder à son compte. L'adhérent s'engage à conserver ses identifiants secrets et à ne pas
                  les communiquer à des tiers.
                </p>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Article 4 - Modification des CGU</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  MA2E se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur mise en
                  ligne. Les utilisateurs sont invités à consulter régulièrement les CGU afin de prendre connaissance des éventuelles
                  modifications.
                </p>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Article 5 - Droit applicable</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  Les présentes CGU sont soumises au droit ivoirien. En cas de litige, et à défaut d'accord amiable, le litige sera porté
                  devant les tribunaux compétents d'Abidjan.
                </p>
              </div>
            )}

            {/* Données personnelles */}
            {activeTab === 'donnees' && (
              <div className="prose prose-lg max-w-none">
                <h2 className="text-[#003d1f] text-[36px] leading-[1.2] tracking-[-0.5px] mb-8" style={{ fontWeight: 500 }}>
                  Politique de protection des données personnelles
                </h2>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Responsable du traitement</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  MA2E, en tant que responsable du traitement, s'engage à protéger les données personnelles de ses adhérents et utilisateurs
                  conformément à la loi n° 2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel.
                </p>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Données collectées</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  MA2E collecte les données personnelles suivantes :
                </p>
                <ul className="text-[#666666] leading-relaxed mb-6 space-y-2">
                  <li>Données d'identité : nom, prénom, date de naissance, numéro de pièce d'identité</li>
                  <li>Données de contact : adresse postale, numéro de téléphone, adresse email</li>
                  <li>Données professionnelles : employeur, matricule, RIB</li>
                  <li>Données financières : comptes épargne, crédits, transactions</li>
                  <li>Données de connexion : logs de connexion à l'espace E-MA2E</li>
                </ul>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Finalités du traitement</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  Les données personnelles collectées sont utilisées pour :
                </p>
                <ul className="text-[#666666] leading-relaxed mb-6 space-y-2">
                  <li>La gestion des adhésions et des comptes</li>
                  <li>L'exécution des opérations d'épargne et de crédit</li>
                  <li>La communication avec les adhérents</li>
                  <li>Le respect des obligations légales et réglementaires (lutte anti-blanchiment, BCEAO)</li>
                  <li>L'amélioration de nos services</li>
                </ul>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Durée de conservation</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  Les données personnelles sont conservées pendant la durée de la relation contractuelle et pendant 10 ans après la clôture du
                  compte, conformément aux obligations légales applicables aux institutions de microfinance.
                </p>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Vos droits</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  Conformément à la loi, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Vous
                  pouvez exercer ces droits en contactant notre Correspondant à la Protection des Données :
                  <br />
                  Email : privacyMA2E@ma2e.ci
                  <br />
                  Courrier : MA2E, Avenue Houdaille, Immeuble SIDAM, 6ème étage, Abidjan-Plateau
                  <br />
                  <br />
                  Une copie de votre pièce d'identité devra être jointe à votre demande.
                </p>
              </div>
            )}

            {/* Cookies */}
            {activeTab === 'cookies' && (
              <div className="prose prose-lg max-w-none">
                <h2 className="text-[#003d1f] text-[36px] leading-[1.2] tracking-[-0.5px] mb-8" style={{ fontWeight: 500 }}>
                  Politique de gestion des cookies
                </h2>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Qu'est-ce qu'un cookie ?</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un
                  site internet. Il permet au site de se souvenir de vos actions et préférences pendant une période donnée.
                </p>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Cookies utilisés par MA2E</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  Le site www.ma2e.ci utilise les types de cookies suivants :
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-[#f5f5f0] rounded-xl p-6">
                    <h4 className="text-[#003d1f] font-medium text-xl mb-3">Cookies essentiels</h4>
                    <p className="text-[#666666]">
                      Ces cookies sont nécessaires au fonctionnement du site. Ils vous permettent d'utiliser les principales fonctionnalités
                      du site (par exemple l'accès à votre espace adhérent). Sans ces cookies, vous ne pourrez pas utiliser notre site
                      normalement.
                    </p>
                  </div>

                  <div className="bg-[#f5f5f0] rounded-xl p-6">
                    <h4 className="text-[#003d1f] font-medium text-xl mb-3">Cookies de performance</h4>
                    <p className="text-[#666666]">
                      Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer et d'améliorer les
                      performances de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins populaires et à voir
                      comment les visiteurs naviguent sur le site.
                    </p>
                  </div>

                  <div className="bg-[#f5f5f0] rounded-xl p-6">
                    <h4 className="text-[#003d1f] font-medium text-xl mb-3">Cookies de fonctionnalité</h4>
                    <p className="text-[#666666]">
                      Ces cookies permettent au site de se souvenir des choix que vous faites (comme votre langue ou la région où vous vous
                      trouvez) et fournissent des fonctionnalités améliorées et personnalisées.
                    </p>
                  </div>
                </div>

                <h3 className="text-[#003d1f] text-2xl font-medium mt-8 mb-4">Gestion des cookies</h3>
                <p className="text-[#666666] leading-relaxed mb-6">
                  Vous pouvez à tout moment choisir de désactiver ces cookies. Votre navigateur peut également être paramétré pour vous
                  signaler les cookies qui sont déposés et vous demander de les accepter ou non. Vous pouvez accepter ou refuser les cookies au
                  cas par cas ou bien les refuser systématiquement.
                </p>

                <p className="text-[#666666] leading-relaxed mb-6">
                  Nous vous rappelons que le paramétrage est susceptible de modifier vos conditions d'accès à nos services nécessitant
                  l'utilisation de cookies.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
