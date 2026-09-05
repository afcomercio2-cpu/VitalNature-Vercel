import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FAQItem {
  questionKey: string;
  answerKey: string;
}

const FAQ_ITEMS: FAQItem[] = [
  { questionKey: 'faq.q1', answerKey: 'faq.a1' },
  { questionKey: 'faq.q2', answerKey: 'faq.a2' },
  { questionKey: 'faq.q3', answerKey: 'faq.a3' },
  { questionKey: 'faq.q4', answerKey: 'faq.a4' },
];

function FAQItemComponent({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  const { t } = useLanguage();

  return (
    <Card className="overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
      >
        <h3 className="font-semibold text-gray-800 text-left">
          {t(item.questionKey)}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-green-600 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <p className="text-gray-600">
            {t(item.answerKey)}
          </p>
        </div>
      )}
    </Card>
  );
}

export default function FAQ() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = language === 'pt' ? 'Perguntas frequentes | VitalNature' : 'Frequently asked questions | VitalNature';
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', language === 'pt' ? 'Tire dúvidas sobre produtos afiliados, parceiros oficiais, pagamento, entrega e devoluções.' : 'Answers about affiliate products, official partners, payment, delivery and returns.');
  }, [language]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            {t('faq.title')}
          </h1>
          <p className="text-lg text-green-700">
            {t('home.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItemComponent
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
