import Icon from '@/components/ui/icon';

const CertificatesSection = () => {
  return (
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
  );
};

export default CertificatesSection;
