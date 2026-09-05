import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'wouter';
import { useCart } from '@/contexts/CartContext';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const { getTotalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = getTotalItems();

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/products', label: t('nav.products') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
    { href: '/faq', label: t('nav.faq') },
    { href: '/blog', label: t('nav.blog') },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="container px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="VitalNature - Início">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-800 text-lg font-bold text-white shadow-sm">V</span>
            <span className="text-xl font-bold tracking-tight text-green-800">VitalNature</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 transition-colors hover:text-green-700">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden gap-1 sm:flex" aria-label={t('nav.language')}>
              <Button
                variant={language === 'pt' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('pt')}
                className={language === 'pt' ? 'bg-green-700 hover:bg-green-800' : 'border-slate-200'}
              >
                PT
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'bg-green-700 hover:bg-green-800' : 'border-slate-200'}
              >
                EN
              </Button>
            </div>

            <Link href="/cart" className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-green-50 hover:text-green-700" aria-label={`${t('nav.cart')}${totalItems ? ` (${totalItems})` : ''}`}>
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-700 px-1 text-[11px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-green-50 hover:text-green-700 md:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mt-3 grid gap-1 border-t border-green-100 pt-3 md:hidden" aria-label="Navegação móvel">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu} className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-green-50 hover:text-green-700">
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 px-3 py-2 sm:hidden">
              <Button size="sm" variant={language === 'pt' ? 'default' : 'outline'} onClick={() => setLanguage('pt')} className={language === 'pt' ? 'bg-green-700 hover:bg-green-800' : ''}>PT</Button>
              <Button size="sm" variant={language === 'en' ? 'default' : 'outline'} onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-green-700 hover:bg-green-800' : ''}>EN</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
