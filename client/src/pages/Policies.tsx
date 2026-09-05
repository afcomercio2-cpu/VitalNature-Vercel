import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { ExternalLink, Info, ShieldCheck } from 'lucide-react';
import { useLocation } from 'wouter';
import { useEffect } from 'react';

export default function Policies() {
  const { t, language } = useLanguage();
  const [location] = useLocation();
  const isShipping = location.includes('shipping');
  const title = isShipping ? t('policy.shipping') : t('policy.returns');

  useEffect(() => {
    document.title = language === 'pt' ? `${title} | VitalNature` : `${title} | VitalNature`;
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', isShipping
      ? (language === 'pt' ? 'Entenda como frete, regiões e prazos são definidos pelo parceiro oficial da VitalNature.' : 'Learn how shipping regions, costs and delivery times are set by VitalNature’s official partners.')
      : (language === 'pt' ? 'Entenda como trocas e devoluções funcionam quando a compra é concluída no parceiro oficial.' : 'Learn how exchanges and returns work when a purchase is completed with the official partner.'));
  }, [isShipping, language, title]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-green-50 to-green-100 py-16 md:py-20">
          <div className="container px-4 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">{language === 'pt' ? 'Informação importante' : 'Important information'}</p>
            <h1 className="text-4xl font-bold tracking-tight text-green-950 md:text-5xl">{title}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-green-900/80">{t('home.subtitle')}</p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-3xl px-4">
            <Card className="border-slate-200 p-7 shadow-sm md:p-10">
              <div className="flex items-start gap-4"><ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-green-700" /><div><h2 className="text-2xl font-bold text-slate-900">{title}</h2><p className="mt-4 text-base leading-8 text-slate-600">{isShipping ? t('policy.shippingText') : t('policy.returnsText')}</p></div></div>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl bg-green-50 p-5"><h3 className="font-semibold text-green-950">{language === 'pt' ? 'O que o parceiro informa' : 'What the partner provides'}</h3><p className="mt-2 text-sm leading-6 text-green-900/80">{isShipping ? (language === 'pt' ? 'Regiões atendidas, frete, prazo estimado, rastreamento e eventuais impostos.' : 'Supported regions, shipping, estimated delivery, tracking and possible taxes.') : (language === 'pt' ? 'Prazo para solicitar, condições do produto, endereço de devolução e forma de reembolso.' : 'Request window, product conditions, return address and refund method.')}</p></div>
                <div className="rounded-2xl bg-slate-50 p-5"><h3 className="font-semibold text-slate-900">{language === 'pt' ? 'Onde resolver' : 'Where to resolve it'}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{language === 'pt' ? 'A solicitação deve ser feita diretamente no atendimento ou na conta do parceiro onde o pedido foi realizado.' : 'The request must be made directly through the partner’s support or account where the order was placed.'}</p></div>
              </div>
              <div className="mt-8 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950"><Info className="mt-0.5 h-5 w-5 shrink-0" /><p>{language === 'pt' ? 'A VitalNature não promete prazo, frete grátis, garantia, reembolso ou condição específica que não esteja publicada pelo parceiro oficial.' : 'VitalNature does not promise delivery times, free shipping, guarantees, refunds or conditions that are not published by the official partner.'}</p></div>
              <a href="/products" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-green-800 hover:text-green-600">{language === 'pt' ? 'Voltar aos produtos' : 'Back to products'}<ExternalLink className="h-4 w-4" /></a>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
