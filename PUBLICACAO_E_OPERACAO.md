# VitalNature - Guia de Publicação e Operação

## 🎉 Parabéns!

Sua loja VitalNature está **praticamente pronta**! Este guia explica como publicar e operar sua loja.

**Nota**: Alguns passos finais ainda precisam ser completados (Stripe e teste de pagamento).

---

## 📋 O que está incluído

### ✅ Banco de Dados
- **4 categorias** de produtos: Anti-envelhecimento, Suplementos, Beleza, Alimentos Naturais
- **20 produtos coreanos** de alta qualidade com:
  - Nomes em português e inglês
  - Descrições detalhadas bilíngues
  - Preços em dólares
  - Avaliações (ratings)
  - Imagens de produtos

### ✅ Frontend Completo
- **Página Home**: Hero section com chamada para ação
- **Catálogo de Produtos**: Com filtros por categoria e busca
- **Detalhe do Produto**: Informações completas e galeria
- **Carrinho de Compras**: Gerenciamento de itens
- **Checkout Stripe**: Pagamento seguro
- **Páginas Institucionais**: Sobre, Contato, FAQ, Políticas
- **Sistema Bilíngue**: PT/EN com alternância em tempo real
- **Design Responsivo**: Funciona em desktop, tablet e mobile

### ✅ Integração Stripe
- Checkout seguro pronto para usar
- Páginas de sucesso e cancelamento
- Suporte a múltiplos idiomas

---

## 🚀 Como Publicar

### Passo 1: Abra o Manus Dashboard
1. Acesse o link do seu projeto VitalNature no Manus
2. Você verá a interface com a prévia do site à direita

### Passo 2: Clique em "Publish"
1. Procure pelo botão **"Publish"** no canto superior direito
2. Clique nele para publicar sua loja
3. Aguarde alguns segundos enquanto o site é implantado

### Passo 3: Acesse Seu Site Publicado
- Seu site estará disponível em um URL como: `vitalnature.manus.space`
- Você pode configurar um domínio customizado nas **Settings → Domains**

---

## 💳 Configurar Stripe (Pagamentos)

### Passo 1: Acesse as Configurações
1. No Manus Dashboard, clique em **Settings** (engrenagem no canto superior)
2. Vá para a aba **Integrations**
3. Procure por **Stripe**

### Passo 2: Conecte Sua Conta Stripe
1. Clique em **Connect Stripe** ou **Setup Stripe**
2. Você será redirecionado para o Stripe
3. Faça login ou crie uma conta no Stripe (https://stripe.com)
4. Autorize a conexão com o Manus

### Passo 3: Configure Suas Chaves
1. No Stripe Dashboard, vá para **Developers → API Keys**
2. Copie sua **Publishable Key** e **Secret Key**
3. Cole-as nas configurações do Manus

### Passo 4: Ative o Modo de Teste (Recomendado)
1. No Stripe Dashboard, procure por **Test Mode** (canto superior esquerdo)
2. Ative o modo de teste
3. Para testar pagamentos, use o cartão: `4242 4242 4242 4242`
4. Data de expiração: qualquer data futura (ex: 12/25)
5. CVC: qualquer número (ex: 123)

### Passo 5: Teste um Pagamento
1. Acesse seu site publicado
2. Adicione um produto ao carrinho
3. Clique em "Checkout"
4. Use o cartão de teste acima
5. Verifique se a transação aparece no Stripe Dashboard

---

## 🛍️ Como Adicionar Novos Produtos

### Opção 1: Via Painel Administrativo (Recomendado)
1. Faça login no seu site como administrador
2. Acesse o **Painel Admin** (se disponível)
3. Clique em **Adicionar Produto**
4. Preencha os dados:
   - Nome (PT e EN)
   - Descrição (PT e EN)
   - Preço em dólares
   - Categoria
   - Imagem do produto
5. Clique em **Salvar**

### Opção 2: Dropshipping Direto
Como você está usando o modelo de dropshipping:

1. **Encontre fornecedores coreanos** em:
   - Alibaba (alibaba.com)
   - Global Sources (globalsources.com)
   - Sítios coreanos especializados

2. **Adicione os produtos** no painel administrativo com:
   - Foto do produto
   - Descrição atraente
   - Preço com margem de lucro

3. **Quando um cliente compra**:
   - O dinheiro entra na sua conta Stripe
   - Você encomenda o produto do fornecedor
   - O fornecedor envia diretamente para o cliente

---

## 💰 Modelo de Negócio (Dropshipping)

### Como Funciona
1. **Cliente vê o produto** no seu site
2. **Cliente compra** e paga via Stripe
3. **Você recebe o dinheiro** na sua conta bancária (via Stripe)
4. **Você encomenda** do fornecedor coreano
5. **Fornecedor envia** para o cliente
6. **Você lucra** com a diferença entre o preço de venda e o custo

### Exemplo
- Produto coreano custa: $5 (no fornecedor)
- Você vende por: $18 (no seu site)
- Seu lucro: $13 por venda

---

## 📞 Suporte e Contato

### Para Clientes
- Página de Contato: `/contact`
- Email de suporte: `support@vitalnature.com` (configure no Manus)
- FAQ: `/faq`

### Para Você (Administrador)
- Painel Admin: `/admin`
- Configurações: Manus Dashboard → Settings

---

## 🌍 Idiomas

Seu site suporta:
- **Português (PT)** - Idioma padrão
- **Inglês (EN)** - Clique na bandeira no header para alternar

Todos os produtos, páginas e textos estão traduzidos.

---

## 📊 Próximos Passos Recomendados

1. ✅ **Publicar o site** (clique em Publish)
2. ✅ **Configurar Stripe** (adicione suas chaves)
3. ✅ **Testar um pagamento** (use cartão de teste)
4. ✅ **Adicionar mais produtos** (conforme necessário)
5. ✅ **Configurar domínio customizado** (opcional, mas recomendado)
6. ✅ **Configurar email de suporte** (para receber mensagens de clientes)

---

## ❓ Dúvidas Frequentes

### P: Posso mudar as cores do site?
**R:** Sim! No Manus Dashboard, clique em **Settings → General** para customizar cores e logo.

### P: Como recebo o dinheiro dos clientes?
**R:** Via Stripe. O dinheiro vai diretamente para sua conta bancária conectada ao Stripe.

### P: Posso vender para outros países?
**R:** Sim! O site está em inglês e português, e aceita pagamentos em dólares. Você pode enviar para qualquer país.

### P: Quanto custa manter o site?
**R:** Você paga apenas a taxa do Stripe por transação (cerca de 2,9% + $0,30 por pagamento). Sem outras taxas!

### P: Posso mudar os produtos depois?
**R:** Sim! Você pode adicionar, editar ou remover produtos a qualquer momento via painel administrativo.

---

## 🎯 Dicas de Sucesso

1. **Escolha produtos de qualidade**: Foque em produtos coreanos premium
2. **Preços competitivos**: Pesquise concorrentes e ajuste seus preços
3. **Descrições atraentes**: Descreva bem os benefícios do produto
4. **Imagens de qualidade**: Use fotos claras e bem iluminadas
5. **Atenda bem**: Responda rapidamente às mensagens de clientes
6. **Entrega rápida**: Encomende dos fornecedores assim que receber um pedido

---

## 📞 Precisa de Ajuda?

Se tiver dúvidas sobre:
- **Publicação**: Consulte o Manus Help Center (help.manus.im)
- **Stripe**: Visite stripe.com/support
- **Produtos coreanos**: Pesquise em alibaba.com ou globalsources.com

---

**Boa sorte com seu negócio VitalNature! 🌿💚**

Você tem uma loja profissional, bilíngue e pronta para vender. Agora é só publicar e começar a lucrar!
