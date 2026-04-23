import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-sm border-b border-[#00a045]/10 z-50">
      <div className="max-w-[1600px] mx-auto px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('accueil')}>
          <div className="w-12 h-12 bg-[#00a045] rounded flex items-center justify-center">
            <span className="text-white font-medium text-xl">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#003d1f] font-medium text-xl tracking-tight">MA2E</span>
            <span className="text-[#666666] text-[8px] uppercase tracking-[2px]">MUTUELLE EAU & ÉLECTRICITÉ</span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <button
            onClick={() => onNavigate('accueil')}
            className={`text-[15px] transition-colors ${
              currentPage === 'accueil' ? 'text-[#00a045] font-medium' : 'text-[#003d1f] hover:text-[#00a045]'
            }`}
          >
            Accueil
          </button>

          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('mutuelle')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => onNavigate('la-mutuelle')}
              className={`text-[15px] transition-colors flex items-center gap-1 ${
                currentPage === 'la-mutuelle' ? 'text-[#00a045] font-medium' : 'text-[#003d1f] hover:text-[#00a045]'
              }`}
            >
              La mutuelle
              <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'mutuelle' && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-[#00a045]/10 py-2 min-w-[200px]">
                <button
                  onClick={() => onNavigate('la-mutuelle')}
                  className="w-full text-left px-4 py-2 text-sm text-[#003d1f] hover:bg-[#f5f5f0] transition-colors"
                >
                  Notre histoire
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-[#003d1f] hover:bg-[#f5f5f0] transition-colors">
                  Gouvernance
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-[#003d1f] hover:bg-[#f5f5f0] transition-colors">
                  Direction
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate('nos-services')}
            className={`text-[15px] transition-colors ${
              currentPage === 'nos-services' ? 'text-[#00a045] font-medium' : 'text-[#003d1f] hover:text-[#00a045]'
            }`}
          >
            Nos services
          </button>

          <button
            onClick={() => onNavigate('actualites')}
            className={`text-[15px] transition-colors ${
              currentPage === 'actualites' ? 'text-[#00a045] font-medium' : 'text-[#003d1f] hover:text-[#00a045]'
            }`}
          >
            Actualités
          </button>

          <button
            onClick={() => onNavigate('faq')}
            className={`text-[15px] transition-colors ${
              currentPage === 'faq' ? 'text-[#00a045] font-medium' : 'text-[#003d1f] hover:text-[#00a045]'
            }`}
          >
            FAQ
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className={`text-[15px] transition-colors ${
              currentPage === 'contact' ? 'text-[#00a045] font-medium' : 'text-[#003d1f] hover:text-[#00a045]'
            }`}
          >
            Contact
          </button>

          <button
            onClick={() => onNavigate('documents')}
            className={`text-[15px] transition-colors ${
              currentPage === 'documents' ? 'text-[#00a045] font-medium' : 'text-[#003d1f] hover:text-[#00a045]'
            }`}
          >
            Documents
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="px-3 py-1.5 border border-[#00a045]/20 rounded text-[#003d1f] text-sm hover:border-[#00a045] transition-colors cursor-pointer">
            FR
          </div>
          <button className="bg-[#f28931] text-white px-7 py-2.5 rounded text-[15px] hover:bg-[#d47628] transition-colors">
            Espace adhérent
          </button>
        </div>
      </div>
    </nav>
  );
}
