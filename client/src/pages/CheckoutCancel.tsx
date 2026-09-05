import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { XCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

export default function CheckoutCancel() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="py-20 flex-1">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <Card className="p-12 text-center max-w-md">
            <div className="mb-6 flex justify-center">
              <XCircle className="w-16 h-16 text-red-600" />
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {language === 'pt' ? 'Pagamento Cancelado' : 'Payment Cancelled'}
            </h1>

            <p className="text-gray-600 mb-8">
              {language === 'pt'
                ? 'Você cancelou o processo de pagamento. Seu carrinho foi mantido, você pode continuar comprando quando quiser.'
                : 'You cancelled the payment process. Your cart has been saved, you can continue shopping whenever you want.'}
            </p>

            <div className="bg-yellow-50 p-4 rounded-lg mb-8">
              <p className="text-sm text-yellow-800">
                {language === 'pt'
                  ? 'Seus itens continuam no carrinho'
                  : 'Your items are still in your cart'}
              </p>
            </div>

            <div className="space-y-3">
              <Link href="/cart">
                <a>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3">
                    {language === 'pt' ? 'Voltar ao Carrinho' : 'Back to Cart'}
                  </Button>
                </a>
              </Link>

              <Link href="/products">
                <a>
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    {language === 'pt' ? 'Continuar Comprando' : 'Continue Shopping'}
                  </Button>
                </a>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
