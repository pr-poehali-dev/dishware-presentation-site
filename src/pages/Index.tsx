import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      name: 'Сковорода классическая',
      image: 'https://cdn.poehali.dev/projects/095d043c-0c0d-400c-8fac-576437a2313f/files/92061c04-9b8d-467a-a759-7de4251acc1a.jpg',
      description: 'Универсальная сковорода для любых блюд'
    },
    {
      id: 2,
      name: 'Кастрюля с крышкой',
      image: 'https://cdn.poehali.dev/projects/095d043c-0c0d-400c-8fac-576437a2313f/files/2f274700-b811-41f6-9a13-eb2c2bd94d4b.jpg',
      description: 'Идеальна для супов и тушения'
    },
    {
      id: 3,
      name: 'Сковорода-гриль',
      image: 'https://cdn.poehali.dev/projects/095d043c-0c0d-400c-8fac-576437a2313f/files/91b1538b-c60b-411c-9dbb-c544b50d3e78.jpg',
      description: 'Для мяса и овощей-гриль'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
                onClick={() => scrollToSection('home')}
                className={`hover:text-primary transition-colors ${activeSection === 'home' ? 'text-primary' : ''}`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`hover:text-primary transition-colors ${activeSection === 'about' ? 'text-primary' : ''}`}
              >
                О компании
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className={`hover:text-primary transition-colors ${activeSection === 'products' ? 'text-primary' : ''}`}
              >
                Продукция
              </button>
              <button
                onClick={() => scrollToSection('care')}
                className={`hover:text-primary transition-colors ${activeSection === 'care' ? 'text-primary' : ''}`}
              >
                Инструкции
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`hover:text-primary transition-colors ${activeSection === 'contacts' ? 'text-primary' : ''}`}
              >
                Контакты
              </button>
            </div>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              8 (900) 747-03-03
            </Button>
          </div>
        </div>
      </nav>

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
                <Button size="lg" onClick={() => scrollToSection('products')}>
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')}>
                  О компании
                </Button>
              </div>
            </div>
            <div className="relative h-[500px]">
              <img
                src="https://cdn.poehali.dev/projects/095d043c-0c0d-400c-8fac-576437a2313f/files/92061c04-9b8d-467a-a759-7de4251acc1a.jpg"
                alt="Сковорода"
                className="absolute top-0 right-0 w-64 floating-animation"
              />
              <img
                src="https://cdn.poehali.dev/projects/095d043c-0c0d-400c-8fac-576437a2313f/files/2f274700-b811-41f6-9a13-eb2c2bd94d4b.jpg"
                alt="Кастрюля"
                className="absolute bottom-20 left-0 w-56 floating-animation floating-delay-1"
              />
              <img
                src="https://cdn.poehali.dev/projects/095d043c-0c0d-400c-8fac-576437a2313f/files/91b1538b-c60b-411c-9dbb-c544b50d3e78.jpg"
                alt="Гриль"
                className="absolute bottom-0 right-20 w-48 floating-animation floating-delay-2"
              />
            </div>
          </div>
        </div>
      </section>

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

      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-heading text-center mb-12">Каталог продукции</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-primary"
              >
                <CardContent className="p-6">
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold font-heading text-center mb-12">Сертификаты и безопасность</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Основа посуды</h3>
                    <p className="text-white/80">
                      Титановый сплав главный внешний слой соответствует нормам ГОСТ Р ИСО 2739-2016. 
                      Данный сплав износоустойчив и сертифицирован.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Антипригарное покрытие</h3>
                    <p className="text-white/80">
                      Используем антипригарную композицию SuperTec®. Покрытие прошло тестовые испытания 
                      на рынке антипригарной посуды.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Международные стандарты</h3>
                    <p className="text-white/80">
                      Все покрытия от производителя компании WhiFood, соответствуют ридам LFGB, FDA, BGA, 
                      JIS, присвоен RCS статус (Recycled Claim Standard).
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckCircle" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Экологичность</h3>
                    <p className="text-white/80">
                      Все покрытия для посуды изготавливаются без PFOA, PFOS, безопасны для здоровья человека.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="care" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold font-heading text-center mb-12">Инструкции по уходу</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-2 border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                  Первое использование
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>1. Снимите все наклейки и упаковочные материалы</p>
                  <p>2. Промойте посуду тёплой водой с мягким моющим средством</p>
                  <p>3. Высушите полностью перед первым использованием</p>
                  <p>4. Нанесите тонкий слой растительного масла на антипригарную поверхность</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-2 border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                  Ежедневный уход
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>• Используйте деревянные или силиконовые лопатки</p>
                  <p>• Готовьте на среднем или низком огне</p>
                  <p>• Не перегревайте пустую посуду</p>
                  <p>• Дайте посуде остыть перед мытьём</p>
                  <p>• Мойте мягкой губкой без абразивов</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-2 border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                  Что нельзя делать
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>✗ Использовать металлические лопатки и щётки</p>
                  <p>✗ Резать продукты прямо в посуде</p>
                  <p>✗ Готовить на максимальном огне</p>
                  <p>✗ Ставить горячую посуду под холодную воду</p>
                  <p>✗ Использовать абразивные чистящие средства</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-2 border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-heading font-semibold hover:text-primary">
                  Хранение
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <p>• Полностью высушивайте перед хранением</p>
                  <p>• Храните в сухом месте</p>
                  <p>• Используйте прокладки между посудой при штабелировании</p>
                  <p>• Не храните с крышкой, чтобы избежать запахов</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold font-heading text-center mb-12">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Телефон</p>
                        <p className="font-semibold text-lg">8 (900) 747-03-03</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-semibold text-lg">trivari@mail.ru</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Адрес</p>
                        <p className="font-semibold">Россия, Москва</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <h3 className="font-heading font-bold text-xl mb-4">Напишите нам</h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Ваше сообщение"
                        rows={4}
                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors resize-none"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить
                      <Icon name="Send" size={16} className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="ChefHat" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold font-heading">TRIVARI</span>
              </div>
              <p className="text-white/80 text-sm">
                Антипригарная посуда премиум качества для вашей кухни
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4">Меню</h4>
              <ul className="space-y-2 text-white/80">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О компании</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Продукция</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-white/80">
                <li><button onClick={() => scrollToSection('care')} className="hover:text-white transition-colors">Инструкции</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-white transition-colors">Контакты</button></li>
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
    </div>
  );
};

export default Index;
