import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Handshake, Mail, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { trpc } from '@/lib/trpc';

export default function Contact() {
  const { t, language } = useLanguage();
  useEffect(() => {
    document.title = language === 'pt' ? 'Contato | VitalNature' : 'Contact | VitalNature';
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', language === 'pt' ? 'Entre em contato com a VitalNature sobre a curadoria e os parceiros oficiais.' : 'Contact VitalNature about our curation and official partners.');
  }, [language]);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const submitContact = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(false);
    submitContact.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-green-50 to-green-100 py-16 md:py-20">
          <div className="container px-4 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">{language === 'pt' ? 'Estamos à disposição' : 'We are here to help'}</p>
            <h1 className="text-4xl font-bold tracking-tight text-green-950 md:text-5xl">{t('contact.title')}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-green-900/80">{language === 'pt' ? 'Envie uma mensagem sobre a curadoria, parceiros ou funcionamento da vitrine.' : 'Send a message about our curation, partners or how the storefront works.'}</p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="mb-12 grid gap-5 md:grid-cols-3">
              <Card className="border-slate-200 p-6 shadow-sm"><Mail className="mb-4 h-7 w-7 text-green-700" /><h2 className="font-semibold text-slate-900">Email</h2><a href="mailto:support@vitalnature.com" className="mt-2 inline-block text-sm text-green-700 hover:text-green-600">support@vitalnature.com</a></Card>
              <Card className="border-slate-200 p-6 shadow-sm"><Handshake className="mb-4 h-7 w-7 text-green-700" /><h2 className="font-semibold text-slate-900">{language === 'pt' ? 'Modelo afiliado' : 'Affiliate model'}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{language === 'pt' ? 'Pedidos, pagamento, envio e devoluções são tratados pelo parceiro oficial.' : 'Orders, payment, shipping and returns are handled by the official partner.'}</p></Card>
              <Card className="border-slate-200 p-6 shadow-sm"><ShieldCheck className="mb-4 h-7 w-7 text-green-700" /><h2 className="font-semibold text-slate-900">{language === 'pt' ? 'Transparência' : 'Transparency'}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{t('affiliate.catalogNotice')}</p></Card>
            </div>

            <Card className="mx-auto max-w-3xl border-slate-200 p-7 shadow-sm md:p-10">
              <div className="mb-7"><h2 className="text-2xl font-bold text-slate-900">{language === 'pt' ? 'Envie sua mensagem' : 'Send your message'}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{language === 'pt' ? 'Responderemos pelo e-mail informado. Não envie senhas, dados bancários ou informações médicas.' : 'We will reply to the email provided. Do not send passwords, banking details or medical information.'}</p></div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div><label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-700">{t('contact.name')}</label><input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100" required /></div>
                  <div><label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-700">{t('contact.email')}</label><input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100" required /></div>
                </div>
                <div><label htmlFor="contact-subject" className="mb-2 block text-sm font-semibold text-slate-700">{t('contact.subject')}</label><input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100" required /></div>
                <div><label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-700">{t('contact.message')}</label><textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} rows={6} className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100" required /></div>
                {submitted && <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800" role="status">{t('contact.success')}</div>}
                {submitContact.isError && <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">{t('contact.error')}</div>}
                <Button type="submit" disabled={submitContact.isPending} className="w-full bg-green-700 py-3 font-semibold text-white hover:bg-green-800">{submitContact.isPending ? (language === 'pt' ? 'Enviando…' : 'Sending…') : t('contact.send')}</Button>
              </form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
