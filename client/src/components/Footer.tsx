import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { ExternalLink, Mail, ShieldCheck } from 'lucide-react';

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="mt-16 border-t border-green-200 bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="container px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-2" aria-label="VitalNature - Início">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-800 font-bold text-white">V</span>
              <span className="text-lg font-bold text-green-800">VitalNature</span>
            </Link>
            <p className="max-w-xs text-sm leading-6 text-slate-600">{t('home.description')}</p>
            <p className="mt-4 max-w-sm text-xs leading-5 text-slate-700">{language === 'pt' ? 'A VitalNature atua como curadoria independente. As transações, frete e garantias são de responsabilidade dos parceiros oficiais.' : 'VitalNature operates as an independent curator. Transactions, shipping and guarantees are the responsibility of the official partners.'}</p>
            <div className="mt-5 space-y-2 text-xs text-slate-600">
              <p className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-700" />{language === 'pt' ? 'Links e parceiros identificados' : 'Identified links and partners'}</p>
              <p className="flex items-center gap-2"><ExternalLink className="h-4 w-4 text-green-700" />{language === 'pt' ? 'Pagamento concluído no parceiro' : 'Payment completed with the partner'}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-900">{t('footer.products')}</h3>
            <nav className="grid gap-2 text-sm text-slate-600" aria-label={t('footer.products')}>
              <Link href="/products/antiaging" className="transition hover:text-green-700">{t('category.antiaging')}</Link>
              <Link href="/products/supplements" className="transition hover:text-green-700">{t('category.supplements')}</Link>
              <Link href="/products/beauty" className="transition hover:text-green-700">{t('category.beauty')}</Link>
              <Link href="/products/naturalfood" className="transition hover:text-green-700">{t('category.naturalfood')}</Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-900">{t('footer.about')}</h3>
            <nav className="grid gap-2 text-sm text-slate-600" aria-label={t('footer.about')}>
              <Link href="/about" className="transition hover:text-green-700">{t('about.story')}</Link>
              <Link href="/faq" className="transition hover:text-green-700">{t('nav.faq')}</Link>
              <Link href="/shipping" className="transition hover:text-green-700">{t('policy.shipping')}</Link>
              <Link href="/returns" className="transition hover:text-green-700">{t('policy.returns')}</Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-900">{t('footer.support')}</h3>
            <p className="mb-4 text-sm leading-6 text-slate-600">{t('affiliate.catalogNotice')}</p>
            <a href="mailto:support@vitalnature.com" className="inline-flex items-center gap-2 text-sm font-semibold text-green-800 transition hover:text-green-600">
              <Mail className="h-4 w-4" /> support@vitalnature.com
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-green-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VitalNature. {t('footer.rights')}</p>
          <p>{language === 'pt' ? 'Vitrine afiliada independente; preços e pedidos pertencem ao parceiro oficial.' : 'Independent affiliate showcase; pricing and orders belong to the official partner.'}</p>
        </div>
      </div>
    </footer>
  );
}
