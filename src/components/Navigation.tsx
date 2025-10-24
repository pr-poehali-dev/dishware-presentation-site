import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="ChefHat" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold font-heading">TRIVARI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`hover:text-primary transition-colors ${activeSection === 'home' ? 'text-primary' : ''}`}
            >
              Главная
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`hover:text-primary transition-colors ${activeSection === 'about' ? 'text-primary' : ''}`}
            >
              О компании
            </button>
            <button
              onClick={() => onNavigate('products')}
              className={`hover:text-primary transition-colors ${activeSection === 'products' ? 'text-primary' : ''}`}
            >
              Продукция
            </button>
            <button
              onClick={() => onNavigate('care')}
              className={`hover:text-primary transition-colors ${activeSection === 'care' ? 'text-primary' : ''}`}
            >
              Инструкции
            </button>
            <button
              onClick={() => onNavigate('contacts')}
              className={`hover:text-primary transition-colors ${activeSection === 'contacts' ? 'text-primary' : ''}`}
            >
              Контакты
            </button>
          </div>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            8 (900) 747-03-03
          </Button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <button
              onClick={() => handleNavigate('home')}
              className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors ${activeSection === 'home' ? 'bg-primary/10 text-primary font-semibold' : ''}`}
            >
              Главная
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors ${activeSection === 'about' ? 'bg-primary/10 text-primary font-semibold' : ''}`}
            >
              О компании
            </button>
            <button
              onClick={() => handleNavigate('products')}
              className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors ${activeSection === 'products' ? 'bg-primary/10 text-primary font-semibold' : ''}`}
            >
              Продукция
            </button>
            <button
              onClick={() => handleNavigate('care')}
              className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors ${activeSection === 'care' ? 'bg-primary/10 text-primary font-semibold' : ''}`}
            >
              Инструкции
            </button>
            <button
              onClick={() => handleNavigate('contacts')}
              className={`block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors ${activeSection === 'contacts' ? 'bg-primary/10 text-primary font-semibold' : ''}`}
            >
              Контакты
            </button>
            <a href="tel:89007470303" className="block">
              <Button className="w-full mt-2">
                <Icon name="Phone" size={16} className="mr-2" />
                8 (900) 747-03-03
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
