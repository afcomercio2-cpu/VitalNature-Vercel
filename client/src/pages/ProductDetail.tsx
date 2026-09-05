import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Heart, Share2, Loader2, CheckCircle2, Info } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import { trpc } from '@/lib/trpc';
import { FALLBACK_PRODUCT_IMAGE, resolveProductImage } from '@/lib/productImage';
import { getAffiliatePartner, getAffiliateUrl } from '@/lib/affiliate';

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      <div className="mt-2 text-sm leading-6 text-slate-600">{children}</div>
    </div>
  );
}

export default function ProductDetail() {
  const { t, language } = useLanguage();
  const [, params] = useRoute('/product/:id');
  const productId = params?.id ? parseInt(params.id, 10) : null;
  const { data: product, isLoading } = trpc.products.getById.useQuery(productId || 0, { enabled: !!productId });
  const [isFavorited, setIsFavorited] = useState(false);
  const [shareMessage, setShareMessage] = useState('');

  useEffect(() => {
    if (!product) return;
    const title = language === 'pt' ? product.namePt : product.nameEn;
    const description = language === 'pt' ? product.descriptionPt : product.descriptionEn;
    document.title = `${title} | VitalNature`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }, [product, language]);

  if (isLoading) {
    return <div className="min-h-screen bg-white"><Header /><div className="flex min-h-[55vh] items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-green-700" /></div><Footer /></div>;
  }

  if (!product) {
    return <div className="min-h-screen bg-white"><Header /><div className="flex min-h-[55vh] items-center justify-center px-4 text-center"><p className="text-lg text-slate-500">{language === 'pt' ? 'Produto não encontrado' : 'Product not found'}</p></div><Footer /></div>;
  }

  const name = language === 'pt' ? product.namePt : product.nameEn;
  const desc = language === 'pt' ? product.descriptionPt : product.descriptionEn;
  const rating = ((product.rating ?? 0) / 100).toFixed(1);
  const productImage = resolveProductImage(product.image);
  const affiliateUrl = getAffiliateUrl(product);
  const affiliatePartner = getAffiliatePartner(product);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: name, text: desc, url: currentUrl });
      } else {
        await navigator.clipboard.writeText(currentUrl);
      }
      setShareMessage(language === 'pt' ? 'Link copiado para compartilhar.' : 'Link copied to share.');
      window.setTimeout(() => setShareMessage(''), 2500);
    } catch {
      setShareMessage(language === 'pt' ? 'Não foi possível compartilhar agora.' : 'Sharing is unavailable right now.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="border-b border-slate-200 bg-slate-50">
          <div className="container px-4 py-3 text-sm text-slate-600">
            <a href="/" className="transition hover:text-green-700">{language === 'pt' ? 'Início' : 'Home'}</a><span className="mx-2">/</span><a href="/products" className="transition hover:text-green-700">{language === 'pt' ? 'Produtos' : 'Products'}</a><span className="mx-2">/</span><span className="font-medium text-slate-900">{name}</span>
          </div>
        </div>

        <section className="py-12 md:py-16">
          <div className="container px-4">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
              <div>
                <Card className="overflow-hidden border-slate-200 shadow-sm">
                  <div className="aspect-square bg-slate-100">
                    <img src={productImage} alt={name} className="h-full w-full object-cover" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = FALLBACK_PRODUCT_IMAGE; }} />
                  </div>
                </Card>
                <p className="mt-3 flex items-center gap-2 text-xs text-slate-500"><Info className="h-4 w-4" />{language === 'pt' ? 'Imagem principal fornecida pelo parceiro oficial.' : 'Main image supplied by the official partner.'}</p>
              </div>

              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-700">{affiliatePartner || (language === 'pt' ? 'Curadoria VitalNature' : 'VitalNature curation')}</p>
                <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{name}</h1>
                {affiliatePartner ? (
                  <p className="mt-4 text-sm text-slate-600">{language === 'pt' ? 'As avaliações ficam na página oficial do parceiro.' : 'Reviews are available on the official partner page.'}</p>
                ) : (
                  <p className="mt-4 text-sm text-slate-600">{rating} ({product.reviewCount ?? 0} {language === 'pt' ? 'avaliações' : 'reviews'})</p>
                )}

                <div className="mt-7 rounded-2xl border border-green-200 bg-green-50 p-5">
                  <div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-700" /><div><p className="font-semibold text-green-950">{language === 'pt' ? 'Compre no parceiro oficial' : 'Buy from the official partner'}</p><p className="mt-1 text-sm leading-6 text-green-900/80">{t('affiliate.detailNotice')}</p>{affiliatePartner && <p className="mt-2 text-sm font-semibold text-green-900">{language === 'pt' ? 'Parceiro:' : 'Partner:'} {affiliatePartner}</p>}</div></div>
                </div>

                <div className="mt-7">
                  {affiliateUrl ? (
                    <a href={affiliateUrl} target="_blank" rel="sponsored noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-green-900/10 transition hover:bg-green-800">{language === 'pt' ? 'Ver produto no parceiro oficial' : 'View product at official partner'}<ExternalLink className="h-5 w-5" /></a>
                  ) : (
                    <Button disabled className="w-full py-4">{language === 'pt' ? 'Link do parceiro em validação' : 'Partner link being validated'}</Button>
                  )}
                  <p className="mt-3 text-center text-xs leading-5 text-slate-500">{t('affiliate.disclosure')}</p>
                </div>

                <div className="mt-5 flex gap-3">
                  <button type="button" onClick={() => setIsFavorited((value) => !value)} className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition ${isFavorited ? 'border-red-300 bg-red-50 text-red-600' : 'border-slate-200 text-slate-700 hover:border-green-300 hover:text-green-700'}`}><Heart className={`mr-2 inline h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />{language === 'pt' ? 'Salvar' : 'Save'}</button>
                  <button type="button" onClick={handleShare} className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-green-300 hover:text-green-700"><Share2 className="mr-2 inline h-4 w-4" />{language === 'pt' ? 'Compartilhar' : 'Share'}</button>
                </div>
                {shareMessage && <p className="mt-2 text-center text-xs text-green-700" role="status">{shareMessage}</p>}
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <InfoBlock title={t('product.description')}><p>{desc}</p></InfoBlock>
              <InfoBlock title={t('product.howToUse')}><p>{language === 'pt' ? 'Consulte o modo de uso indicado pelo fabricante na página oficial do parceiro e na embalagem do produto.' : 'Follow the manufacturer’s directions on the official partner page and on the product packaging.'}</p></InfoBlock>
              <InfoBlock title={t('product.ingredients')}><p>{language === 'pt' ? 'A composição pode variar por opção e lote. Consulte a lista oficial de ingredientes antes da compra.' : 'Ingredients may vary by option and batch. Check the official ingredient list before buying.'}</p></InfoBlock>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-600"><strong className="text-slate-900">{language === 'pt' ? 'Importante:' : 'Important:'}</strong> {language === 'pt' ? 'A VitalNature apresenta informações de descoberta e não substitui orientação médica, nutricional ou dermatológica. Verifique as informações atualizadas no parceiro oficial.' : 'VitalNature provides discovery information and does not replace medical, nutritional or dermatological advice. Check updated information with the official partner.'}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
