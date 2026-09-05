import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import { useCart } from '@/contexts/CartContext';
import { useEffect } from 'react';

export default function CheckoutSuccess() {
  const { language } = useLanguage();
  const { clearCart } = useCart();

  useEffect(() => {
    // Limpar carrinho após checkout bem-sucedido
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="py-20 flex-1">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <Card className="p-12 text-center max-w-md">
            <div className="mb-6 flex justify-center">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {language === 'pt' ? 'Pedido Confirmado!' : 'Order Confirmed!'}
            </h1>

            <p className="text-gray-600 mb-8">
              {language === 'pt'
                ? 'Obrigado pela sua compra! Você receberá um e-mail de confirmação em breve com os detalhes do seu pedido.'
                : 'Thank you for your purchase! You will receive a confirmation email shortly with your order details.'}
            </p>

            <div className="bg-green-50 p-4 rounded-lg mb-8">
              <p className="text-sm text-green-800">
                {language === 'pt'
                  ? '✓ Pagamento processado com sucesso'
                  : '✓ Payment processed successfully'}
              </p>
              <p className="text-sm text-green-800">
                {language === 'pt'
                  ? '✓ Seu pedido será enviado em breve'
                  : '✓ Your order will be shipped soon'}
              </p>
            </div>

            <div className="space-y-3">
              <Link href="/products">
                <a>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3">
                    {language === 'pt' ? 'Continuar Comprando' : 'Continue Shopping'}
                  </Button>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                    {language === 'pt' ? 'Voltar ao Início' : 'Back to Home'}
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
