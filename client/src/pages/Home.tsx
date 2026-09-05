import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Leaf, ShieldCheck, Sparkles, Store } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { trpc } from '@/lib/trpc';

const CATEGORY_IMAGES = {
  antiaging: '/manus-storage/facial-serum_74ba5e0e.png',
  supplements: '/manus-storage/collagen_5cf570b7.png',
  beauty: '/manus-storage/lavender-oil_5a73941f.png',
  naturalfood: '/manus-storage/nuts-mix_2558ae1a.png',
};

const CATEGORIES = [
  { key: 'category.antiaging', image: CATEGORY_IMAGES.antiaging, href: '/products/antiaging' },
  { key: 'category.supplements', image: CATEGORY_IMAGES.supplements, href: '/products/supplements' },
  { key: 'category.beauty', image: CATEGORY_IMAGES.beauty, href: '/products/beauty' },
  { key: 'category.naturalfood', image: CATEGORY_IMAGES.naturalfood, href: '/products/naturalfood' },
];

const BENEFITS = [
  { icon: Leaf, titleKey: 'home.natural', descKey: 'home.naturalDesc' },
  { icon: ShieldCheck, titleKey: 'home.quality', descKey: 'home.qualityDesc' },
  { icon: Sparkles, titleKey: 'home.results', descKey: 'home.resultsDesc' },
  { icon: Store, titleKey: 'home.shipping', descKey: 'home.shippingDesc' },
];


const FEATURED_PRODUCTS = [
  { id: 'skin1004', image: '/manus-storage/skin1004_3130e909.jpg', link: 'https://global.oliveyoung.com/product/detail?prdtNo=GA240724745' },
  { id: 'mediheal', image: '/manus-storage/mediheal_86931293.png', link: 'https://global.oliveyoung.com/product/detail?prdtNo=GA240724484' },
  { id: 'celimax', image: '/manus-storage/celimax_aaf210c2.jpg', link: 'https://www.amazon.com/celimax-Tightening-Liposomized-Matryxyl-Minimizer/dp/B0DK4Y2YP3' },
  { id: 'aestura', image: '/manus-storage/aestura_2330b1a9.png', link: 'https://int.aestura.com/products/atobarrier365-cream' },
  { id: 'unove', image: '/manus-storage/unove_9c32aeea.jpg', link: 'https://us.oliveyoung.com/products/UA39329211' },
  { id: 'foodology', image: '/manus-storage/foodology_4c10a94a.jpg', link: 'https://us.oliveyoung.com/products/UA61972333' },
] as const;

export default function Home() {
  const { t, language } = useLanguage();
  useEffect(() => {
    document.title = language === 'pt' ? 'VitalNature | Beleza coreana e bem-estar' : 'VitalNature | Korean beauty and wellness';
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', language === 'pt' ? 'Curadoria independente de produtos coreanos de beleza e bem-estar, com links para parceiros oficiais.' : 'Independent curation of Korean beauty and wellness products with links to official partners.');
  }, [language]);
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const subscribe = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      setSubscribeMessage(language === 'pt' ? 'Inscrição confirmada. Obrigada!' : 'Subscription confirmed. Thank you!');
      setEmail('');
    },
    onError: () => {
      setSubscribeMessage(language === 'pt' ? 'Não foi possível concluir agora. Tente novamente.' : 'We could not complete this now. Please try again.');
    },
  });
  const handleSubscribe = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || subscribe.isPending) return;
    subscribe.mutate({ email });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(167,243,208,0.7),_transparent_42%),linear-gradient(135deg,#f0fdf4_0%,#dcfce7_52%,#ecfdf5_100%)] py-20 md:py-28">
          <div className="container relative px-4">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-green-800">
                <Sparkles className="h-4 w-4" /> {language === 'pt' ? 'Curadoria coreana independente' : 'Independent Korean curation'}
              </p>
              <h1 className="text-5xl font-bold tracking-tight text-green-950 md:text-7xl">{t('home.title')}</h1>
              <p className="mt-5 text-xl font-medium text-green-800 md:text-2xl">{t('home.subtitle')}</p>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-700 md:text-lg">{t('home.description')}</p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/products" className="inline-flex items-center justify-center rounded-lg bg-green-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-900/10 transition hover:bg-green-800">{t('home.viewProducts')}</Link>
                <Link href="/about" className="inline-flex items-center justify-center rounded-lg border border-green-700 bg-white/60 px-7 py-3.5 text-base font-semibold text-green-800 transition hover:bg-white">{t('home.learnMore')}</Link>
              </div>
              <p className="mx-auto mt-6 max-w-xl text-xs leading-5 text-green-900/70">{t('affiliate.catalogNotice')}</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">{language === 'pt' ? 'Explore por intenção' : 'Explore by intention'}</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{t('home.categories')}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{t('home.categoriesDesc')}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {CATEGORIES.map((category) => (
                <Link key={category.key} href={category.href} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img src={category.image} alt={t(category.key)} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <h3 className="font-semibold text-slate-900">{t(category.key)}</h3>
                    <span className="text-lg text-green-700" aria-hidden="true">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('products.title')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{t('products.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {FEATURED_PRODUCTS.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                  <div className="h-56 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={`${t(`products.items.${product.id}.name`)} — ${language === 'pt' ? 'imagem oficial do produto' : 'official product image'}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/images/product-placeholder.svg"; }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">{t('products.partner')}</div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{t(`products.items.${product.id}.name`)}</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">{t(`products.items.${product.id}.description`)}</p>
                    <a href={product.link} target="_blank" rel="sponsored noopener noreferrer" className="flex items-center justify-center w-full bg-gray-900 hover:bg-green-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                      {t('products.cta')} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{t('home.whyChoose')}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{t('home.whyChooseDesc')}</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((benefit) => {
                const Icon = benefit.icon;
                return <div key={benefit.titleKey} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"><div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700"><Icon className="h-7 w-7" /></div><h3 className="font-semibold text-slate-900">{t(benefit.titleKey)}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{t(benefit.descKey)}</p></div>;
              })}
            </div>
          </div>
        </section>

        <section className="bg-green-900 py-16 text-white md:py-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-200">{language === 'pt' ? 'Notas de curadoria' : 'Curation notes'}</p>
              <h2 className="text-3xl font-bold md:text-4xl">{t('home.newsletter')}</h2>
              <p className="mt-4 text-base leading-7 text-green-100">{t('home.newsletterDesc')}</p>
              <form onSubmit={handleSubscribe} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">{t('home.email')}</label>
                <input id="newsletter-email" type="email" placeholder={t('home.email')} value={email} onChange={(event) => setEmail(event.target.value)} className="min-w-0 flex-1 rounded-lg border-0 px-4 py-3 text-slate-900 outline-none ring-2 ring-transparent focus:ring-green-300" required />
                <Button type="submit" disabled={subscribe.isPending} className="bg-white px-7 font-semibold text-green-800 hover:bg-green-50">{subscribe.isPending ? '…' : t('home.subscribe')}</Button>
              </form>
              {subscribeMessage && <p className="mt-4 text-sm font-medium text-green-100" role="status">{subscribeMessage}</p>}
              <p className="mt-4 text-xs text-green-200">{language === 'pt' ? 'Você pode cancelar quando quiser. Seus dados serão usados apenas para esta comunicação.' : 'You can unsubscribe at any time. Your data is used only for this communication.'}</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
