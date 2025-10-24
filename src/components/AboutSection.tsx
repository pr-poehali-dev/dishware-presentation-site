import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-heading text-center mb-12">О компании TRIVARI</h2>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Мы создаём надёжную, качественную антипригарную посуду. 
              Наша миссия — предоставить покупателям TRIVARI выбрать путь развития антипригарной посуды, 
              свободную от «плохих» характеристик и достоверно соответствующую ГОСТу.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">Безопасность</h3>
                  <p className="text-muted-foreground">
                    Все покрытия сертифицированы и соответствуют стандартам ГОСТ, FDA, BGA, JIS
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">Качество</h3>
                  <p className="text-muted-foreground">
                    Занимаем 1 место среди производителей посуды с 2015 года
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">Долговечность</h3>
                  <p className="text-muted-foreground">
                    Гарантия качества 36 месяцев на всю продукцию
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
