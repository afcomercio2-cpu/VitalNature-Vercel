import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Heart, Leaf, Eye, Zap } from 'lucide-react';
import { useEffect } from 'react';

export default function About() {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = language === 'pt' ? 'Sobre a VitalNature | Curadoria coreana' : 'About VitalNature | Korean curation';
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', language === 'pt' ? 'Conheça a VitalNature, uma vitrine independente de produtos coreanos em parceiros oficiais.' : 'Learn about VitalNature, an independent showcase of Korean products at official partners.');
  }, [language]);

  const sections = [
    {
      icon: Heart,
      titleKey: 'about.story',
      descKey: 'about.storyText',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Eye,
      titleKey: 'about.mission',
      descKey: 'about.missionText',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Zap,
      titleKey: 'about.values',
      descKey: 'about.valuesText',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Leaf,
      titleKey: 'about.sustainability',
      descKey: 'about.sustainabilityText',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            {t('about.title')}
          </h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            {t('home.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Card key={section.titleKey} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`bg-gradient-to-br ${section.color} h-32 flex items-center justify-center`}>
                    <Icon className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                      {t(section.titleKey)}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {t(section.descKey)}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-green-50 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                {t('home.whyChoose')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <Leaf className="w-5 h-5" />
                    {t('home.natural')}
                  </h3>
                  <p className="text-gray-600">
                    {t('home.naturalDesc')}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    {t('home.quality')}
                  </h3>
                  <p className="text-gray-600">
                    {t('home.qualityDesc')}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    {t('home.results')}
                  </h3>
                  <p className="text-gray-600">
                    {t('home.resultsDesc')}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    {t('home.shipping')}
                  </h3>
                  <p className="text-gray-600">
                    {t('home.shippingDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
