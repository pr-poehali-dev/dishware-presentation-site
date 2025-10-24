import Icon from '@/components/ui/icon';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="https://cdn.poehali.dev/files/014f61fc-4db6-4b2b-bee9-1f11627df55c.png" 
                alt="TRIVARI" 
                className="h-12"
              />
            </div>
            <p className="text-white/80 text-sm">
              Антипригарная посуда премиум качества для вашей кухни
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Меню</h4>
            <ul className="space-y-2 text-white/80">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Главная</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">О компании</button></li>
              <li><button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">Продукция</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Информация</h4>
            <ul className="space-y-2 text-white/80">
              <li><button onClick={() => onNavigate('care')} className="hover:text-white transition-colors">Инструкции</button></li>
              <li><button onClick={() => onNavigate('contacts')} className="hover:text-white transition-colors">Контакты</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>8 (900) 747-03-03</li>
              <li>trivari@mail.ru</li>
              <li className="pt-4 flex space-x-3">
                <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Icon name="Phone" size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Icon name="Mail" size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>© 2024 TRIVARI. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;