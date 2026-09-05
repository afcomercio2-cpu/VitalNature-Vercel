import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Handshake } from 'lucide-react';
import { Link } from 'wouter';
import { useEffect } from 'react';

export default function Cart() {
  const { language } = useLanguage();
  useEffect(() => {
    document.title = language === 'pt' ? 'Compra com parceiros oficiais | VitalNature' : 'Shopping with official partners | VitalNature';
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', language === 'pt' ? 'Entenda como a VitalNature direciona compras, pagamentos, envios e devoluções aos parceiros oficiais.' : 'Learn how VitalNature directs purchases, payments, shipping and returns to official partners.');
  }, [language]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-green-50 to-green-100 py-12">
          <div className="container px-4">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">{language === 'pt' ? 'Como funciona' : 'How it works'}</p>
            <h1 className="text-4xl font-bold tracking-tight text-green-950">{language === 'pt' ? 'Compra com parceiros oficiais' : 'Shopping with official partners'}</h1>
          </div>
        </section>
        <section className="flex-1 py-16">
          <div className="container max-w-2xl px-4">
            <Card className="border-green-100 p-8 text-center shadow-sm md:p-10">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700"><Handshake className="h-7 w-7" /></div>
              <h2 className="text-2xl font-bold text-slate-900">{language === 'pt' ? 'A VitalNature é uma vitrine de afiliados' : 'VitalNature is an affiliate storefront'}</h2>
              <p className="mt-4 leading-7 text-slate-600">{language === 'pt' ? 'Para manter a operação transparente, a compra, o pagamento, o envio e as devoluções são concluídos no site do parceiro oficial. Escolha um produto no catálogo para acessar o link correspondente.' : 'For transparency, purchase, payment, shipping and returns are completed on the official partner website. Choose a product in the catalog to access its partner link.'}</p>
              <Link href="/products" className="mt-7 inline-flex"><Button className="bg-green-700 text-white hover:bg-green-800">{language === 'pt' ? 'Explorar produtos' : 'Explore products'}<ExternalLink className="ml-2 h-4 w-4" /></Button></Link>
              <p className="mt-5 text-xs leading-5 text-slate-500">{language === 'pt' ? 'A VitalNature pode receber uma comissão sem custo adicional para você.' : 'VitalNature may receive a commission at no extra cost to you.'}</p>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
