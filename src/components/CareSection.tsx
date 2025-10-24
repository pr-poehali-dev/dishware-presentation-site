import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const CareSection = () => {
  return (
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
  );
};

export default CareSection;
