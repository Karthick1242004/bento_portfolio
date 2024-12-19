import { Menu } from 'lucide-react';
import { useState } from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';

interface HeaderProps {
  heroRef: React.RefObject<HTMLDivElement>;
  testimonialsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export default function Header({ heroRef, testimonialsRef, contactRef }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data, loading, error } = usePortfolioData();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-white text-2xl font-bold">{data.siteTitle}</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#" 
              className="text-white hover:text-purple-400 transition" 
              onClick={() => scrollToSection(heroRef)}
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-white hover:text-purple-400 transition" 
              onClick={() => scrollToSection(testimonialsRef)}
            >
              Works
            </a>
            <a 
              href="#" 
              className="text-white hover:text-purple-400 transition" 
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-white hover:text-purple-400 transition" 
                onClick={() => scrollToSection(heroRef)}
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-white hover:text-purple-400 transition" 
                onClick={() => scrollToSection(testimonialsRef)}
              >
                Works
              </a>
              <a 
                href="#" 
                className="text-white hover:text-purple-400 transition" 
                onClick={() => scrollToSection(contactRef)}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
