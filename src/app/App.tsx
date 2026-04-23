import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Accueil } from './pages/Accueil';
import { LaMutuelle } from './pages/LaMutuelle';
import { NosServices } from './pages/NosServices';
import { Actualites } from './pages/Actualites';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Documents } from './pages/Documents';
import { LiensUtiles } from './pages/LiensUtiles';
import { MentionsLegales } from './pages/MentionsLegales';

export default function App() {
  const [currentPage, setCurrentPage] = useState('accueil');

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil />;
      case 'la-mutuelle':
        return <LaMutuelle />;
      case 'nos-services':
        return <NosServices />;
      case 'actualites':
        return <Actualites />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      case 'documents':
        return <Documents />;
      case 'liens-utiles':
        return <LiensUtiles />;
      case 'mentions-legales':
        return <MentionsLegales />;
      default:
        return <Accueil />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
