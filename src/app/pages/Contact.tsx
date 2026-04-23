import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ nom: '', email: '', tel: '', sujet: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nom: '', email: '', tel: '', sujet: '', message: '' });
    }, 3000);
  };

  const offices = [
    {
      name: 'Siège social',
      address: 'Avenue Houdaille, Immeuble SIDAM, 6ème étage',
      city: 'Abidjan-Plateau',
      phone: '+225 27 21 23 64 87',
      email: 'contact@ma2e.ci',
      hours: 'Lun - Ven : 8h - 17h',
    },
    {
      name: 'Agence SODECI',
      address: 'Siège SODECI, Bloc Administratif',
      city: 'Cocody - Deux Plateaux',
      phone: '+225 27 21 75 80 00',
      email: 'sodeci@ma2e.ci',
      hours: 'Lun - Ven : 8h30 - 16h30',
    },
    {
      name: 'Agence CIE',
      address: 'Direction Générale CIE',
      city: 'Abidjan-Plateau',
      phone: '+225 27 21 23 30 00',
      email: 'cie@ma2e.ci',
      hours: 'Lun - Ven : 8h - 16h',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#003d1f] to-[#00a045] py-32">
        <div className="max-w-[1600px] mx-auto px-12 text-center">
          <h1 className="text-white text-[64px] leading-[1.1] tracking-[-1px] mb-6" style={{ fontWeight: 500 }}>
            Contactez-nous
          </h1>
          <p className="text-white/85 text-xl max-w-[700px] mx-auto">
            Notre équipe est à votre écoute pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="grid grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-[#003d1f] text-[36px] leading-[1.2] tracking-[-0.5px] mb-4" style={{ fontWeight: 500 }}>
                Envoyez-nous un message
              </h2>
              <p className="text-[#666666] text-lg mb-10">Nous vous répondrons dans les plus brefs délais</p>

              {submitted ? (
                <div className="bg-[#00a045]/10 border-2 border-[#00a045] rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 bg-[#00a045] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[#003d1f] text-2xl font-medium mb-3">Message envoyé !</h3>
                  <p className="text-[#666666]">Nous vous répondrons dans les 24 heures.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-[#003d1f] text-sm font-medium mb-2 block">Nom complet *</label>
                      <input
                        type="text"
                        required
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                        className="w-full px-5 py-4 bg-[#f5f5f0] border-2 border-transparent rounded-lg focus:outline-none focus:border-[#00a045] transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="text-[#003d1f] text-sm font-medium mb-2 block">Téléphone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.tel}
                        onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
                        className="w-full px-5 py-4 bg-[#f5f5f0] border-2 border-transparent rounded-lg focus:outline-none focus:border-[#00a045] transition-colors"
                        placeholder="+225 XX XX XX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[#003d1f] text-sm font-medium mb-2 block">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 bg-[#f5f5f0] border-2 border-transparent rounded-lg focus:outline-none focus:border-[#00a045] transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-[#003d1f] text-sm font-medium mb-2 block">Sujet *</label>
                    <input
                      type="text"
                      required
                      value={formData.sujet}
                      onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                      className="w-full px-5 py-4 bg-[#f5f5f0] border-2 border-transparent rounded-lg focus:outline-none focus:border-[#00a045] transition-colors"
                      placeholder="L'objet de votre message"
                    />
                  </div>

                  <div>
                    <label className="text-[#003d1f] text-sm font-medium mb-2 block">Message *</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 bg-[#f5f5f0] border-2 border-transparent rounded-lg focus:outline-none focus:border-[#00a045] transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f28931] text-white py-4 rounded-lg hover:bg-[#d47628] transition-all font-medium text-lg"
                  >
                    Envoyer le message
                  </button>

                  <p className="text-[#666666] text-xs leading-relaxed">
                    Les données collectées font l'objet d'un traitement destiné à MA2E. Vous disposez de vos droits (accès, rectification et
                    suppression) que vous pouvez exercer en contactant privacyMA2E@ma2e.ci
                  </p>
                </form>
              )}
            </div>

            {/* Quick Contact Info */}
            <div>
              <div className="bg-gradient-to-br from-[#003d1f] to-[#00a045] rounded-3xl p-12 text-white mb-8">
                <h3 className="text-3xl font-medium mb-8">Contacts rapides</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-white/70 text-sm mb-1">Téléphone</div>
                      <div className="text-xl font-medium">+225 27 21 23 64 87</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-white/70 text-sm mb-1">Email</div>
                      <div className="text-xl font-medium">contact@ma2e.ci</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-white/70 text-sm mb-1">Horaires</div>
                      <div className="text-xl font-medium">Lun - Ven : 8h - 17h</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="text-white/70 text-sm mb-1">Adresse</div>
                      <div className="text-lg">Avenue Houdaille, Immeuble SIDAM, 6ème étage, Abidjan-Plateau</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f5f0] rounded-2xl p-8">
                <h4 className="text-[#003d1f] text-xl font-medium mb-4">Urgence</h4>
                <p className="text-[#666666] mb-4">Pour toute urgence concernant votre compte, contactez notre service client :</p>
                <div className="text-[#00a045] text-2xl font-medium">+225 07 XX XX XX XX</div>
                <div className="text-[#666666] text-sm mt-2">Disponible 24h/24 et 7j/7</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 bg-[#f5f5f0]">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-[#003d1f] text-[48px] leading-[1.2] tracking-[-0.5px] mb-4" style={{ fontWeight: 500 }}>
              Nos points de service
            </h2>
            <p className="text-[#666666] text-lg">Rendez-nous visite dans l'un de nos bureaux</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-12">
            {offices.map((office) => (
              <div key={office.name} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#00a045]/10 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-[#00a045]" strokeWidth={1.8} />
                </div>
                <h4 className="text-[#003d1f] text-xl font-medium mb-4">{office.name}</h4>
                <div className="space-y-3 text-[#666666]">
                  <p>{office.address}</p>
                  <p className="font-medium text-[#003d1f]">{office.city}</p>
                  <div className="pt-3 border-t border-[#00a045]/10 space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#00a045]" />
                      <span className="text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#00a045]" />
                      <span className="text-sm">{office.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#00a045]" />
                      <span className="text-sm">{office.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-[#00a045]/10 to-[#f28931]/10 rounded-3xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#00a045]/30 mx-auto mb-4" strokeWidth={1} />
              <p className="text-[#666666] text-lg">Carte interactive disponible prochainement</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
