import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { BookOpen, Clock3 } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const articles = [
  {
    titlePt: 'Como ler a composição de um cosmético coreano',
    titleEn: 'How to read a Korean skincare ingredient list',
    excerptPt: 'Um guia introdutório para identificar a lista oficial de ingredientes, a ordem dos componentes e as informações que devem ser conferidas no parceiro.',
    excerptEn: 'An introductory guide to finding the official ingredient list, reading component order and checking information on the partner page.',
    tagPt: 'Skincare',
    tagEn: 'Skincare',
  },
  {
    titlePt: 'Rotina de beleza: comece simples',
    titleEn: 'Skincare routines: start simple',
    excerptPt: 'Por que uma rotina consistente não precisa de muitos produtos e como consultar as instruções do fabricante antes de combinar ativos.',
    excerptEn: 'Why a consistent routine does not need many products and how to check manufacturer directions before combining actives.',
    tagPt: 'Rotina',
    tagEn: 'Routine',
  },
  {
    titlePt: 'Como comprar com segurança em um parceiro oficial',
    titleEn: 'How to shop safely with an official partner',
    excerptPt: 'Confira domínio, preço, entrega, devolução e atendimento diretamente no site do parceiro antes de finalizar uma compra.',
    excerptEn: 'Check the domain, price, delivery, returns and support directly on the partner site before completing a purchase.',
    tagPt: 'Transparência',
    tagEn: 'Transparency',
  },
];

export default function Blog() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'pt' ? 'Blog de beleza e bem-estar | VitalNature' : 'Beauty and wellness blog | VitalNature';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', language === 'pt' ? 'Guias introdutórios sobre skincare coreano, composição e compras em parceiros oficiais.' : 'Introductory guides about Korean skincare, ingredients and shopping with official partners.');
  }, [language]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-green-50 to-emerald-100 py-16 md:py-20">
          <div className="container px-4">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">{language === 'pt' ? 'Guias da curadoria' : 'Curation guides'}</p>
            <h1 className="text-4xl font-bold tracking-tight text-green-950 md:text-5xl">Blog</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-green-900/80">{language === 'pt' ? 'Conteúdo introdutório para ajudar você a pesquisar produtos e comprar com mais clareza.' : 'Introductory content to help you research products and shop with greater clarity.'}</p>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="grid gap-6 md:grid-cols-3">
              {articles.map((article) => (
                <Card key={article.titlePt} className="flex h-full flex-col border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-green-700"><span>{language === 'pt' ? article.tagPt : article.tagEn}</span><BookOpen className="h-4 w-4" /></div>
                  <h2 className="mt-5 text-xl font-semibold leading-8 text-slate-900">{language === 'pt' ? article.titlePt : article.titleEn}</h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{language === 'pt' ? article.excerptPt : article.excerptEn}</p>
                  <p className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500"><Clock3 className="h-4 w-4" />{language === 'pt' ? 'Leitura introdutória' : 'Introductory reading'}</p>
                </Card>
              ))}
            </div>
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><strong>{language === 'pt' ? 'Aviso:' : 'Notice:'}</strong> {language === 'pt' ? 'Este conteúdo é educativo e não substitui orientação médica, nutricional ou dermatológica. Consulte um profissional para decisões relacionadas à sua saúde.' : 'This content is educational and does not replace medical, nutritional or dermatological advice. Consult a professional for health-related decisions.'}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
