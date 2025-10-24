import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProductsSection = () => {
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
  );
};

export default ProductsSection;
