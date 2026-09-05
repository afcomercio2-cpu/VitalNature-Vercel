import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Search } from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRoute } from 'wouter';
import { FALLBACK_PRODUCT_IMAGE } from '@/lib/productImage';

const FEATURED_PRODUCTS = [
  {
    id: 'skin1004',
    image: '/manus-storage/skin1004_3130e909.jpg',
    link: 'https://global.oliveyoung.com/product/detail?prdtNo=GA240724745',
    partner: 'Olive Young',
    categoryKey: 'category.antiaging',
    categoryId: 1,
  },
  {
    id: 'mediheal',
    image: '/manus-storage/mediheal_86931293.png',
    link: 'https://global.oliveyoung.com/product/detail?prdtNo=GA240724484',
    partner: 'Olive Young',
    categoryKey: 'category.beauty',
    categoryId: 3,
  },
  {
    id: 'celimax',
    image: '/manus-storage/celimax_aaf210c2.jpg',
    link: 'https://www.amazon.com/celimax-Tightening-Liposomized-Matryxyl-Minimizer/dp/B0DK4Y2YP3',
    partner: 'Amazon / celimax',
    categoryKey: 'category.antiaging',
    categoryId: 1,
  },
  {
    id: 'aestura',
    image: '/manus-storage/aestura_2330b1a9.png',
    link: 'https://int.aestura.com/products/atobarrier365-cream',
    partner: 'AESTURA',
    categoryKey: 'category.beauty',
    categoryId: 3,
  },
  {
    id: 'unove',
    image: '/manus-storage/unove_9c32aeea.jpg',
    link: 'https://us.oliveyoung.com/products/UA39329211',
    partner: 'Olive Young US',
    categoryKey: 'category.beauty',
    categoryId: 3,
  },
  {
    id: 'foodology',
    image: '/manus-storage/foodology_4c10a94a.jpg',
    link: 'https://us.oliveyoung.com/products/UA61972333',
    partner: 'Olive Young US',
    categoryKey: 'category.supplements',
    categoryId: 2,
  },
] as const;

export default function Products() {
  const { t, language } = useLanguage();
  const [, params] = useRoute('/products/:category');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    document.title = language === 'pt' ? 'Produtos coreanos | VitalNature' : 'Korean products | VitalNature';
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        language === 'pt'
          ? 'Explore a curadoria de produtos coreanos de beleza e bem-estar em parceiros oficiais.'
          : 'Explore the curation of Korean beauty and wellness products at official partners.'
      );
    }
  }, [language]);

  const filteredProducts = useMemo(() => {
    return FEATURED_PRODUCTS.filter((product) => {
      const matchesCategory = !selectedCategory || product.categoryKey === selectedCategory;
      const productName = t(`products.items.${product.id}.name`).toLowerCase();
      const productDesc = t(`products.items.${product.id}.description`).toLowerCase();
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === '' || productName.includes(searchLower) || productDesc.includes(searchLower);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language, t]);

  const categories = [
    { key: 'category.antiaging', labelPt: 'Anti-envelhecimento', labelEn: 'Anti-aging' },
    { key: 'category.supplements', labelPt: 'Suplementos', labelEn: 'Supplements' },
    { key: 'category.beauty', labelPt: 'Beleza', labelEn: 'Beauty' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="bg-gradient-to-r from-green-50 to-green-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-green-900 mb-2">{t('nav.products')}</h1>
          <p className="text-green-700">{t('home.categoriesDesc')}</p>
          <p className="mt-4 max-w-3xl text-sm text-green-800">{t('affiliate.catalogNotice')}</p>
        </div>
      </section>

      <section className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h2 className="font-bold text-gray-800 mb-4">{t('nav.products')}</h2>
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      aria-label={language === 'pt' ? 'Buscar produtos' : 'Search products'}
                      placeholder={language === 'pt' ? 'Buscar...' : 'Search...'}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-3">
                    {language === 'pt' ? 'Categorias' : 'Categories'}
                  </h3>
                  <div className="space-y-2">
                    <Button
                      variant={selectedCategory === null ? 'default' : 'outline'}
                      className={`w-full justify-start ${
                        selectedCategory === null ? 'bg-green-600 text-white hover:bg-green-700' : ''
                      }`}
                      onClick={() => setSelectedCategory(null)}
                    >
                      {language === 'pt' ? 'Ver Todos' : 'View All'}
                    </Button>
                    {categories.map((cat) => (
                      <Button
                        key={cat.key}
                        variant={selectedCategory === cat.key ? 'default' : 'outline'}
                        className={`w-full justify-start ${
                          selectedCategory === cat.key ? 'bg-green-600 text-white hover:bg-green-700' : ''
                        }`}
                        onClick={() => setSelectedCategory(cat.key)}
                      >
                        {language === 'pt' ? cat.labelPt : cat.labelEn}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => {
                    const name = t(`products.items.${product.id}.name`);
                    const desc = t(`products.items.${product.id}.description`);
                    return (
                      <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col bg-white border border-gray-100 rounded-xl">
                        <div className="h-56 overflow-hidden bg-gray-100">
                          <img
                            src={product.image}
                            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = FALLBACK_PRODUCT_IMAGE; }}
                            alt={`${name} — ${language === 'pt' ? 'imagem oficial do produto' : 'official product image'}`}
                            className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">
                            {t('products.partner')} ({product.partner})
                          </div>
                          <h3 className="font-bold text-lg text-gray-900 mb-2">{name}</h3>
                          <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{desc}</p>
                          <p className="text-xs text-gray-500 mb-4">
                            {language === 'pt'
                              ? 'Avaliações disponíveis no site do parceiro oficial'
                              : 'Reviews available on the official partner site'}
                          </p>
                          <div className="mt-auto">
                            <a
                              href={product.link}
                              target="_blank"
                              rel="sponsored noopener noreferrer"
                              className="flex items-center justify-center w-full bg-gray-900 hover:bg-green-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                            >
                              {language === 'pt' ? 'Verificar no parceiro →' : 'Verify with partner →'}
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {language === 'pt' ? 'Nenhum produto encontrado' : 'No products found'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
