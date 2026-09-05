import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Dicionário de traduções
const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navegação
    'nav.home': 'Início',
    'nav.products': 'Produtos',
    'nav.about': 'Sobre Nós',
    'nav.contact': 'Contato',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.cart': 'Carrinho',
    'nav.language': 'Idioma',

    // Categorias
    'category.antiaging': 'Anti-aging',
    'category.supplements': 'Suplementos',
    'category.beauty': 'Beleza',
    'category.naturalfood': 'Alimentos Naturais',

    // Home
    'home.title': 'VitalNature',
    'home.subtitle': 'Saúde, Vitalidade, Beleza, Qualidade de Vida',
    'home.description': 'Explore uma curadoria de produtos coreanos de beleza e bem-estar, com compra realizada diretamente em parceiros oficiais.',
    'home.viewProducts': 'Ver Produtos',
    'home.learnMore': 'Saiba Mais',
    'home.categories': 'Categorias',
    'home.categoriesDesc': 'Explore nossa seleção de produtos naturais organizados por categorias para facilitar sua busca.',
    'home.featured': 'Produtos em Destaque',
    'home.featuredDesc': 'Produtos selecionados e verificados em parceiros oficiais.',
    'home.viewAll': 'Ver Todos',
    'home.whyChoose': 'Por que escolher VitalNature?',
    'home.whyChooseDesc': 'A VitalNature ajuda você a descobrir produtos e marcas oficiais com mais clareza antes da compra.',
    'home.natural': 'Curadoria consciente',
    'home.naturalDesc': 'Selecionamos produtos de beleza e bem-estar com informações do fabricante e do parceiro oficial.',
    'home.quality': 'Marcas oficiais',
    'home.qualityDesc': 'Os detalhes finais de produto, preço e disponibilidade ficam no site oficial do parceiro.',
    'home.results': 'Informação clara',
    'home.resultsDesc': 'Apresentamos benefícios descritos pelo fabricante sem prometer resultados individuais.',
    'home.shipping': 'Compra no parceiro',
    'home.shippingDesc': 'O parceiro oficial informa regiões, frete, prazos e atendimento no checkout dele.',
    'home.newsletter': 'Fique atualizado com nossas novidades',
    'home.newsletterDesc': 'Receba novidades da curadoria, guias de beleza e alertas sobre novos produtos e parceiros. Não prometemos desconto automático.',
    'home.subscribe': 'Inscrever',
    'home.email': 'Seu melhor e-mail',

    // Destaques da curadoria
    'products.title': 'Destaques da Curadoria',
    'products.subtitle': 'Selecionamos a dedo os itens mais desejados da K-Beauty e bem-estar. Clique para verificar disponibilidade no site oficial do parceiro.',
    'products.partner': 'Parceiro',
    'products.cta': 'Verificar no parceiro',
    'products.items.skin1004.name': 'SKIN1004 Sérum Solar Centella Asiatica',
    'products.items.skin1004.description': 'Proteção solar hidratante com textura leve de sérum. Combina Ácido Hialurônico e Centella Asiatica para acalmar e hidratar, sem deixar resíduos brancos.',
    'products.items.mediheal.name': 'MEDIHEAL Máscara Facial Essencial (10un)',
    'products.items.mediheal.description': 'A máscara nº 1 da Olive Young por 14 anos. Com 98% de Madecassoside puro, acalma vermelhidão e hidrata profundamente.',
    'products.items.celimax.name': 'celimax Booster Retinal 0.1%',
    'products.items.celimax.description': 'Tratamento intensivo com Retinal lipossomal a 0.1%. Penetra profundamente para reduzir rugas e minimizar poros.',
    'products.items.aestura.name': 'AESTURA Creme Barreira 365',
    'products.items.aestura.description': 'Creme rico em ceramidas encapsuladas que oferece até 120 horas de hidratação. Ideal para peles secas e sensíveis.',
    'products.items.unove.name': 'UNOVE Máscara Capilar Reconstrutora',
    'products.items.unove.description': 'Tratamento intensivo com 30.000ppm de Keratin-PF. Reconstrói cabelos danificados e proporciona brilho espelhado.',
    'products.items.foodology.name': 'FOODOLOGY Jelly de Fibras',
    'products.items.foodology.description': 'Jelly funcional com 5g de fibras e prebióticos. Sabor romã, auxilia na saciedade e no equilíbrio intestinal.',

    // Produtos
    'product.price': 'Preço',
    'product.rating': 'Avaliação',
    'product.reviews': 'Avaliações',
    'product.add': 'Verificar no parceiro →',
    'product.description': 'Descrição',
    'product.ingredients': 'Ingredientes',
    'product.howToUse': 'Como Usar',
    'product.noReviews': 'Avaliações no site do parceiro',

    // Afiliados
    'affiliate.catalogNotice': 'A VitalNature seleciona produtos de parceiros oficiais. A compra e o pagamento são concluídos no site do parceiro; podemos receber uma comissão sem custo adicional para você.',
    'affiliate.detailNotice': 'A compra, o pagamento, o envio e o atendimento são realizados pelo parceiro oficial. A VitalNature pode receber uma comissão pelo link de indicação.',
    'affiliate.disclosure': 'Link de parceiro: a VitalNature pode receber comissão pela sua compra.',

    // Carrinho
    'cart.title': 'Carrinho de Compras',
    'cart.empty': 'Seu carrinho está vazio',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Envio',
    'cart.total': 'Total',
    'cart.checkout': 'Finalizar Compra',
    'cart.continueShopping': 'Continuar Comprando',
    'cart.remove': 'Remover',
    'cart.quantity': 'Quantidade',

    // Sobre Nós
    'about.title': 'Sobre Nós',
    'about.story': 'Nossa História',
    'about.mission': 'Missão',
    'about.values': 'Valores',
    'about.sustainability': 'Sustentabilidade',
    'about.storyText': 'A VitalNature é uma vitrine independente que reúne produtos coreanos de beleza e bem-estar encontrados em parceiros oficiais. Nosso foco é facilitar a descoberta, com transparência sobre a compra externa.',
    'about.missionText': 'Nossa missão é organizar informações úteis e links oficiais para que você possa comparar e decidir onde comprar com mais segurança.',
    'about.valuesText': 'Valorizamos transparência, curadoria responsável, informação verificável e respeito às políticas de cada parceiro.',
    'about.sustainabilityText': 'Preferimos comunicar apenas características confirmadas nas páginas oficiais e não atribuímos certificações ou promessas que não estejam documentadas.',

    // Contato
    'contact.title': 'Entre em Contato',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.subject': 'Assunto',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar',
    'contact.success': 'Mensagem enviada com sucesso!',
    'contact.error': 'Erro ao enviar mensagem. Tente novamente.',

    // FAQ
    'faq.title': 'Perguntas Frequentes',
    'faq.q1': 'Como faço para rastrear meu pedido?',
    'faq.a1': 'A VitalNature não processa pedidos. Depois do clique, consulte a conta e o e-mail do parceiro oficial para pagamento, confirmação e rastreamento.',
    'faq.q2': 'Qual é a política de devoluções?',
    'faq.a2': 'A devolução depende da política do parceiro onde a compra foi concluída. Consulte-a antes de pagar.',
    'faq.q3': 'Os produtos são realmente naturais?',
    'faq.a3': 'Não fazemos essa afirmação para todos os itens. Consulte ingredientes, alegações e certificações na página oficial de cada produto.',
    'faq.q4': 'Vocês enviam internacionalmente?',
    'faq.a4': 'A disponibilidade internacional, o frete e o prazo são definidos pelo parceiro e podem variar por país e produto.',

    // Políticas
    'policy.shipping': 'Política de Envio',
    'policy.returns': 'Política de Devoluções',
    'policy.shippingText': 'A VitalNature não realiza o envio. O parceiro oficial mostra regiões atendidas, custo de frete, prazo e rastreamento no próprio checkout.',
    'policy.returnsText': 'Como a compra é concluída no parceiro, a solicitação de troca ou devolução deve seguir a política e o atendimento daquele parceiro.',

    // Footer
    'footer.products': 'Produtos',
    'footer.about': 'Sobre Nós',
    'footer.support': 'Suporte',
    'footer.follow': 'Siga-nos',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.madeWith': 'Feito com',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.cart': 'Cart',
    'nav.language': 'Language',

    // Categories
    'category.antiaging': 'Anti-aging',
    'category.supplements': 'Supplements',
    'category.beauty': 'Beauty',
    'category.naturalfood': 'Natural Food',

    // Home
    'home.title': 'VitalNature',
    'home.subtitle': 'Health, Vitality, Beauty, Quality of Life',
    'home.description': 'Explore a curated selection of Korean beauty and wellness products purchased directly from official partners.',
    'home.viewProducts': 'View Products',
    'home.learnMore': 'Learn More',
    'home.categories': 'Categories',
    'home.categoriesDesc': 'Explore our selection of natural products organized by categories to make your search easier.',
    'home.featured': 'Featured Products',
    'home.featuredDesc': 'Products selected and verified with official partners.',
    'home.viewAll': 'View All',
    'home.whyChoose': 'Why Choose VitalNature?',
    'home.whyChooseDesc': 'VitalNature helps you discover official products and brands with clearer information before you buy.',
    'home.natural': 'Thoughtful curation',
    'home.naturalDesc': 'We select beauty and wellness products using manufacturer and official partner information.',
    'home.quality': 'Official brands',
    'home.qualityDesc': 'Final product details, pricing and availability are shown by the official partner.',
    'home.results': 'Clear information',
    'home.resultsDesc': 'We present manufacturer-described benefits without promising individual results.',
    'home.shipping': 'Buy from the partner',
    'home.shippingDesc': 'The official partner provides regions, shipping, delivery times and support at checkout.',
    'home.newsletter': 'Stay updated with our news',
    'home.newsletterDesc': 'Receive curation updates, beauty guides and alerts about new products and partners. No automatic discount is promised.',
    'home.subscribe': 'Subscribe',
    'home.email': 'Your best email',

    // Curated highlights
    'products.title': 'Curated Highlights',
    'products.subtitle': 'We handpicked the most sought-after K-Beauty and wellness items. Click to check availability on the official partner website.',
    'products.partner': 'Partner',
    'products.cta': 'Verify with partner',
    'products.items.skin1004.name': 'SKIN1004 Centella Asiatica Sun Serum',
    'products.items.skin1004.description': 'Hydrating sun protection with a lightweight serum texture. Combines Hyaluronic Acid and Centella Asiatica to soothe and hydrate without leaving a white cast.',
    'products.items.mediheal.name': 'MEDIHEAL Essential Face Mask (10 pcs)',
    'products.items.mediheal.description': "Olive Young's No. 1 mask for 14 years. With 98% pure Madecassoside, it helps calm redness and deeply hydrate the skin.",
    'products.items.celimax.name': 'celimax Retinal 0.1% Booster',
    'products.items.celimax.description': 'An intensive treatment with 0.1% liposomal Retinal. It penetrates deeply to help reduce the appearance of wrinkles and minimize pores.',
    'products.items.aestura.name': 'AESTURA Atobarrier 365 Cream',
    'products.items.aestura.description': 'A rich cream with encapsulated ceramides that provides up to 120 hours of hydration. Ideal for dry and sensitive skin.',
    'products.items.unove.name': 'UNOVE Deep Damage Treatment',
    'products.items.unove.description': 'An intensive treatment with 30,000 ppm Keratin-PF. Helps rebuild damaged hair and deliver a mirror-like shine.',
    'products.items.foodology.name': 'FOODOLOGY Fiber Jelly',
    'products.items.foodology.description': 'A functional jelly with 5 g of fiber and prebiotics. Pomegranate flavor, designed to support satiety and intestinal balance.',

    // Products
    'product.price': 'Price',
    'product.rating': 'Rating',
    'product.reviews': 'Reviews',
    'product.add': 'Verify with partner →',
    'product.description': 'Description',
    'product.ingredients': 'Ingredients',
    'product.howToUse': 'How to Use',
    'product.noReviews': 'Reviews on partner site',

    // Affiliates
    'affiliate.catalogNotice': 'VitalNature curates products from official partners. Purchase and payment are completed on the partner website; we may receive a commission at no extra cost to you.',
    'affiliate.detailNotice': 'Purchase, payment, shipping and customer support are handled by the official partner. VitalNature may receive a commission through this referral link.',
    'affiliate.disclosure': 'Partner link: VitalNature may receive a commission from your purchase.',

    // Cart
    'cart.title': 'Shopping Cart',
    'cart.empty': 'Your cart is empty',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.total': 'Total',
    'cart.checkout': 'Checkout',
    'cart.continueShopping': 'Continue Shopping',
    'cart.remove': 'Remove',
    'cart.quantity': 'Quantity',

    // About Us
    'about.title': 'About Us',
    'about.story': 'Our Story',
    'about.mission': 'Mission',
    'about.values': 'Values',
    'about.sustainability': 'Sustainability',
    'about.storyText': 'VitalNature is an independent showcase for Korean beauty and wellness products found at official partners. We focus on easier discovery and transparent external purchasing.',
    'about.missionText': 'Our mission is to organize useful information and official links so you can compare options and decide where to buy with greater clarity.',
    'about.valuesText': 'We value transparency, responsible curation, verifiable information and respect for each partner’s policies.',
    'about.sustainabilityText': 'We communicate only characteristics confirmed on official pages and do not assign certifications or promises that are not documented.',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'How do I track my order?',
    'faq.a1': 'VitalNature does not process orders. After clicking through, use the official partner’s account and email for payment, confirmation and tracking.',
    'faq.q2': 'What is your return policy?',
    'faq.a2': 'Returns depend on the partner where the purchase was completed. Read that policy before paying.',
    'faq.q3': 'Are the products really natural?',
    'faq.a3': 'We do not make that claim for every item. Check ingredients, claims and certifications on each official product page.',
    'faq.q4': 'Do you ship internationally?',
    'faq.a4': 'International availability, shipping and delivery times are set by the partner and may vary by country and product.',

    // Policies
    'policy.shipping': 'Shipping Policy',
    'policy.returns': 'Returns Policy',
    'policy.shippingText': 'VitalNature does not ship orders. The official partner shows supported regions, shipping cost, delivery times and tracking at checkout.',
    'policy.returnsText': 'Because the purchase is completed with the partner, exchanges and returns follow that partner’s policy and support process.',

    // Footer
    'footer.products': 'Products',
    'footer.about': 'About Us',
    'footer.support': 'Support',
    'footer.follow': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language | null;
      return saved || 'pt';
    }
    return 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
