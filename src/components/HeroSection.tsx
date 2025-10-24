import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-24 pb-12 bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-heading leading-tight">
              Антипригарная посуда <span className="text-primary">премиум качества</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Безопасные материалы, сертифицированное качество и долговечность для вашей кухни
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => onNavigate('products')}>
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('about')}>
                О компании
              </Button>
            </div>
          </div>
          <div className="relative h-[500px]">
            <img
              src="https://cdn.poehali.dev/files/3735c900-3f51-45a3-bb30-7c1253f62896.png"
              alt="Сковорода"
              className="absolute top-0 right-0 w-64 floating-animation"
            />
            <img
              src="https://cdn.poehali.dev/files/bf90b294-a655-462a-9e61-fd3b4c8af459.png"
              alt="Кастрюля"
              className="absolute bottom-20 left-0 w-56 floating-animation floating-delay-1"
            />
            <img
              src="https://cdn.poehali.dev/files/2b7c3e51-9555-4085-8551-40ef2d2dcaa2.png"
              alt="Гриль"
              className="absolute bottom-10 right-10 w-48 floating-animation floating-delay-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;