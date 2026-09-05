# VitalNature - TODO

## Fase 1: Assets Visuais
- [x] Gerar imagens de produtos Anti-aging (Facial Serum, Creme Anti-rugas)
- [x] Gerar imagens de produtos Suplementos (Colágeno, Vitaminas)
- [x] Gerar imagens de produtos Beleza (Óleos essenciais, Máscaras)
- [x] Gerar imagens de produtos Alimentos Naturais (Mix de nozes, Chás)
- [x] Gerar ícones para categorias
- [x] Gerar imagens para seções institucionais

## Fase 2: Banco de Dados
- [x] Criar schema de categorias
- [x] Criar schema de produtos
- [x] Criar schema de avaliações
- [x] Criar schema de carrinho
- [x] Criar schema de newsletter
- [x] Criar schema de contatos
- [x] Executar migrações SQL

## Fase 3: Componentes Base
- [x] Configurar paleta de cores verde/natural
- [x] Criar Header/Navbar com suporte a idiomas
- [x] Criar Footer com links e redes sociais
- [x] Criar componente de Seletor de Idioma
- [x] Criar componente de Produto (card)
- [x] Criar componente de Carrinho (sidebar/modal)
- [x] Criar componente de Avaliação (stars)

## Fase 4: Páginas Principais
- [x] Página Home com hero section
- [x] Página Catálogo com filtros e busca
- [x] Página Detalhe do Produto
- [x] Página Carrinho
- [x] Integração com banco de dados

## Fase 5: Páginas Institucionais
- [x] Página Sobre Nós (Nossa História, Missão, Valores, Sustentabilidade)
- [x] Página FAQ
- [x] Página Contato com formulário funcional
- [x] Página Política de Envio
- [x] Página Política de Devoluções

## Fase 6: Sistema de Idiomas
- [x] Implementar contexto de idioma global
- [x] Traduzir todas as strings para PT/EN
- [x] Testar alternância de idioma em todas as páginas

## Fase 7: Testes e Finalização
- [x] Testar responsividade em mobile/tablet/desktop
- [x] Testar funcionalidades do carrinho
- [x] Testar formulários (contato, newsletter)
- [x] Revisar design visual e consistência
- [x] Otimizar performance
- [x] Criar checkpoint final

## Fase 8: Dados de Produtos
- [x] Inserir 4 categorias no banco de dados
- [x] Inserir 20 produtos coreanos de alta qualidade
- [x] Verificar exibição dos produtos no catálogo
- [x] Testar filtros por categoria
- [x] Testar busca de produtos

## Fase 9: Integração Stripe e Checkout
- [x] Configurar chaves Stripe (teste/produção) - Usuário precisa adicionar no Settings
- [x] Testar fluxo de checkout completo
- [x] Testar página de sucesso após pagamento
- [x] Testar página de cancelamento
- [x] Validar segurança do checkout

## Fase 10: Publicação
- [x] Criar checkpoint final com todos os dados
- [x] Publicar site via Manus Dashboard - URL: vitalshop-rqcse7hg.manus.space
- [x] Validar site publicado - Todos os 20 produtos carregando corretamente
- [x] Decidir não usar domínio customizado agora; a URL Manus permanece oficial
- [x] Documentar instruções para o usuário

## Fase 11: Configuração Stripe (Histórico preservado; sem alterações nesta correção)
- [x] Registrar que a usuária criou uma conta Stripe no Reino Unido
- [x] Registrar que a usuária obteve chaves de API em sessão anterior
- [x] Registrar que a usuária relatou teste de checkout concluído em sessão anterior
- [x] Manter o Stripe sem alterações durante a correção visual do catálogo
- [x] Não afirmar nesta fase que as chaves estão verificadas nas Settings ou que o checkout foi revalidado agora

## Fase 16: Escolha da Plataforma Oficial (Opção A)
- [x] Selecionar a loja Manus (`vitalshop-rqcse7hg.manus.space`) como a vitrine oficial
- [x] Manter a Shopify separada sem alterações destrutivas
- [x] Validar que o catálogo coreano e natural está íntegro no banco Manus
- [x] Confirmar que o backup preventivo foi realizado pela usuária
- [x] Salvar checkpoint final da loja Manus oficial
- [x] Apresentar resumo executivo à usuária

## Fase 17: Cartões de Produtos Vazios
- [x] Reproduzir no site publicado quais produtos/cartões aparecem vazios
- [x] Verificar se os dados dos produtos e URLs de imagens estão completos
- [x] Corrigir carregamento de imagem ou estado vazio sem remover produtos
- [x] Validar catálogo em celular e desktop
- [x] Salvar checkpoint após a correção

## Fase 18: Auditoria de Moeda e Preços
- [x] Confirmar moeda atualmente exibida e unidade armazenada no banco — afiliados não exibem preço próprio; os registros afiliados permanecem com `price = 0` centavos
- [x] Identificar por que os preços de catálogo foram definidos tão altos — eram valores do modelo histórico de checkout direto, não do modelo afiliado atual
- [x] Definir com a usuária moeda principal e faixa de preços — não aplicável ao modelo afiliado; preço, moeda e disponibilidade são definidos pelo parceiro oficial
- [x] Atualizar preços somente após confirmação — nenhuma alteração de preço próprio é necessária no modelo afiliado
- [x] Validar catálogo, carrinho e checkout após a atualização — checkout direto permanece desativado e a vitrine redireciona ao parceiro

## Fase 19: Transição para Modelo de Afiliados
- [x] Remover ou desativar o checkout direto do Stripe na loja Manus - API bloqueada enquanto o modo afiliado estiver ativo
- [x] Adaptar o modelo de dados de produtos para incluir link de afiliado (`affiliateUrl`) e nome do parceiro fornecedor
- [x] Atualizar as páginas de Catálogo e Detalhe para exibir botão de compra externa ("Comprar no parceiro oficial" / "Buy from official partner")
- [x] Pesquisar e documentar programas oficiais de afiliados coreanos (ex: YesStyle, Stylevana, Olive Young)
- [x] Testar explicitamente catálogo, detalhe e página informativa em PT e EN no preview
- [x] Revalidar a alternância PT/EN no domínio publicado após o checkpoint — PT e EN confirmados no catálogo público

## Fase 20: Cadastro de Parceiros e Links Rastreados
- [x] Usuária criar e ser aprovada em pelo menos um programa oficial de afiliados — Olive Young confirmado
- [x] Usuária fornecer links rastreáveis oficiais por produto ou campanha
- [x] Preencher `affiliateUrl` e `affiliatePartner` somente com dados fornecidos pelo programa
- [x] Revalidar redirecionamento externo e disclosure de comissão

## Fase 21: Links Oficiais de Afiliados
- [x] Fornecer endereços verificados de YesStyle, Stylevana e Olive Young (testados no navegador)
- [x] Explicar a diferença entre programa de afiliados e de influenciadores para cada marca
- [x] Orientar cuidados de segurança contra golpes de cadastro falsos

## Fase 22: Integração Olive Young
- [x] Confirmar cadastro ativo da usuária na Olive Young
- [x] Registrar o código promocional de afiliada `NIL2026`
- [x] Obter link rastreável de produto da Olive Young
- [x] Aplicar o primeiro link oficial ao catálogo da VitalNature
- [x] Validar redirecionamento e disclosure de comissão no preview

- [x] Receber o primeiro link rastreável Olive Young fornecido pela usuária
- [x] Associar o link ao produto correto após confirmação: MEDIHEAL Toner Pads

## Fase 23: Cadastro do MEDIHEAL Toner Pads (Olive Young)
- [x] Inserir MEDIHEAL Toner Pads na categoria Beleza
- [x] Configurar o link rastreável oficial fornecido (`https://global.oliveyoung.com/if/rd?su=9F1NV5TC`)
- [x] Definir parceiro como "Olive Young"
- [x] Validar exibição do produto na vitrine e o redirecionamento externo no preview
- [x] Confirmar que o redirecionamento chega ao produto MEDIHEAL oficial na Olive Young

## Fase 24: Auditoria de Imagens e Produtos Afiliados
- [x] Identificar inconsistências entre imagens genéricas e o produto MEDIHEAL
- [x] Ocultar ou remover do catálogo produtos que não possuem link de parceiro verificado e imagem correspondente
- [x] Garantir que o MEDIHEAL exiba link oficial Olive Young e asset neutro até obter foto oficial da marca
- [x] Orientar a inclusão apenas de produtos com marca e link reais para evitar experiência confusa

## Fase 25: Correção Crítica de Imagem do MEDIHEAL
- [x] Identificar que a imagem anterior estava associada incorretamente ao MEDIHEAL Toner Pads
- [x] Atualizar o registro do MEDIHEAL com a imagem real e oficial extraída diretamente da página da Olive Young
- [x] Validar que o catálogo e a página de detalhes exibem o produto correto com o link rastreável exato

## Fase 26: Revalidação Final do Detalhe e Domínio
- [x] Reabrir `/product/30001` no preview e confirmar a imagem oficial do MEDIHEAL
- [x] Validar o fluxo completo de afiliado com a usuária

## Fase 27: Validação no Domínio Publicado
- [x] Confirmar que a versão publicada exibe a imagem real e o link rastreável correto do MEDIHEAL

## Fase 28: Inclusão do Segundo Produto Olive Young
- [x] Receber o segundo link rastreável Olive Young (`https://global.oliveyoung.com/if/rd?su=ZRK75VM6`)
- [x] Identificar o produto exato de destino do segundo link: Anua Niacinamide 10 TXA 4 Dark Spot Correcting Serum 30ml*2ea
- [x] Extrair imagem oficial e dados bilíngues do produto
- [x] Inserir o novo produto no banco de dados e validar no preview

## Fase 29: Revalidação do Segundo Produto
- [x] Verificar no preview o catálogo com o Anua Niacinamide Serum (imagem oficial e link correto)
- [x] Confirmar o redirecionamento externo correto para o segundo link Olive Young (`https://global.oliveyoung.com/if/rd?su=ZRK75VM6`)

## Fase 30: Inclusão do Terceiro Produto Olive Young
- [x] Receber o terceiro link rastreável Olive Young (`https://global.oliveyoung.com/if/rd?su=I3NO6K16`)
- [x] Identificar o produto exato de destino do terceiro link: SKIN1004 Madagascar Centella Double Cleansing Duo
- [x] Extrair imagem oficial e dados bilíngues do produto
- [x] Inserir o novo produto no banco de dados e validar no preview

## Fase 31: Revalidação do Terceiro Produto
- [x] Verificar no preview o catálogo com o SKIN1004 Double Cleansing Duo (imagem oficial e link correto)
- [x] Confirmar o redirecionamento externo correto para o terceiro link Olive Young (`https://global.oliveyoung.com/if/rd?su=I3NO6K16`)

## Fase 32: Inclusão do Produto Olive Young — UGEEKAJK
- [x] Identificar o produto exato de destino do link rastreável `https://global.oliveyoung.com/if/rd?su=UGEEKAJK`: BIOHEAL BOH Probioderm 3D Lifting Cream 50mL+50mL (2 Options)
- [x] Extrair imagem oficial e dados bilíngues do produto
- [x] Inserir o produto no banco com parceiro e link rastreável
- [x] Validar o produto no catálogo, na página de detalhe e no destino oficial (produto exibido como `/product/150001`; botão chegou à página BIOHEAL BOH da Olive Young com `rwardCode=NIL2026`)

## Fase 33: Transparência de Avaliações no Catálogo Afiliado
- [x] Remover classificações e contagens de avaliações não verificadas dos produtos afiliados
- [x] Ocultar estrelas, nota e contagem de avaliações dos produtos afiliados no catálogo e no detalhe
- [x] Substituir a área por aviso neutro sobre avaliações no parceiro e revalidar o domínio publicado
- [x] Remover classificações e contagens de avaliações não verificadas do banco para produtos afiliados

## Fase 34: Implementação de Melhorias Profissionais (Vitrine Afiliada)
- [x] Otimizar cabeçalho e rodapé com navegação completa (Início, Produtos, Sobre Nós, Contato, FAQ, Blog) e indicadores de links externos
- [x] Refinar as páginas de detalhe do produto para destacar descrição, modo de uso, composição e aviso transparente de redirecionamento ao parceiro oficial, sem inventar dados ausentes
- [x] Atualizar o banner principal da Home com chamadas alinhadas ao modelo de recomendação e curadoria coreana
- [x] Aprimorar a seção de newsletter com incentivo neutro e informativo, sem promessas falsas de desconto automático não suportado pelo parceiro, e persistência real no banco
- [x] Completar metatags e descrições SEO dinâmicas em PT e EN na Home e nas demais páginas públicas
- [x] Revalidar no preview e no domínio publicado as metatags após alternar PT/EN — Home, About, FAQ, Policies, Contact e Cart confirmados; Home PT/EN confirmada no domínio público com cache-buster
- [x] Implementar title, meta description e lang dinâmicos nas páginas públicas restantes: Contato e Carrinho
- [x] Salvar/publicar novo checkpoint e revalidar títulos e idioma no domínio publicado em PT e EN — checkpoint `8d1b6af3` publicado; Home PT/EN confirmada em `?v=8d1b6af3`
- [x] Validar no preview `/contact` em PT após alternar o idioma, confirmando `document.title`, conteúdo e `lang`
- [x] Revalidar no domínio publicado em EN as páginas `/about`, `/faq`, `/shipping` e `/returns` após o checkpoint `8d1b6af3`
- [x] Após concluir a validação PT de `/contact` no preview, remarcar a consolidação final das metatags das páginas públicas
- [x] Corrigir a página de políticas para remover prazos, frete, garantia e devolução próprios não suportados pelo modelo afiliado
- [x] Conectar o formulário de contato ao backend e remover telefone/endereço fictícios
- [x] Validar testes unitários Vitest e build de produção após todas as melhorias visuais e estruturais
- [x] Criar página Blog PT/EN com conteúdo educativo e aviso de não substituição de orientação profissional
- [x] Validar visualmente Home, catálogo, detalhe, carrinho, contato e Blog em desktop e Home, catálogo e detalhe em mobile

## Fase 35: Correção Final da Homepage Afiliada
- [x] Substituir a copy antiga de avaliações por `Produtos selecionados e verificados em parceiros oficiais` e equivalente em inglês
- [x] Remover notas numéricas dos cards da Homepage e usar o selo `Verificar no parceiro →`
- [x] Confirmar que os links do cabeçalho apontam para rotas públicas válidas (`/products`, `/about`, `/contact`, `/faq`, `/blog`)
- [x] Adicionar ao rodapé o aviso solicitado sobre curadoria independente, transações, frete e garantias
- [x] Testar Home em PT/EN, rotas, Vitest e build
- [x] Revalidar a Home no domínio publicado até confirmar a nova copy, os selos e o rodapé no site final — código e checkpoint `1b152790` publicados
- [x] Concluir definitivamente a fase após a confirmação pública no domínio final

## Fase 36: Resolução de Divergência de Produção e Alinhamento de Rotas
- [x] Validar no domínio publicado as rotas `/sobre`, `/contato` e `/produtos`, confirmando carregamento sem 404 — todas carregaram publicamente após a propagação do checkpoint `449edaf4`
- [x] Após validar as rotas PT/EN em execução, concluir o ajuste de Header/App — aliases PT e rotas EN carregaram no preview
- [x] Revisar `ProductCard` e `Home` para garantir que nenhuma nota numérica (4.8, 4.7) seja exibida nos cards de produtos e que o selo seja exatamente `Verificar no parceiro →` — textos legados removidos do código
- [x] Confirmar o texto de rodapé sobre curadoria independente e responsabilidade de parceiros em PT e EN — texto presente no Footer
- [x] Executar build de produção completo (`pnpm build`), reiniciar o dev server / serviço e publicar novo checkpoint — Vitest/build aprovados, serviço reiniciado e checkpoint `449edaf4` publicado
- [x] Testar diretamente na URL pública (`https://vitalshop-rqcse7hg.manus.space`) para confirmar a resolução da divergência relatada pela usuária — Home, `/sobre`, `/contato` e `/produtos` confirmados; copy, selos, rodapé e ausência de notas numéricas validados

## Fase 37: Build e Publicação da Versão Manual
- [x] Executar `pnpm build` na versão atual do código — build aprovado; Vitest 5/5 também aprovado
- [x] Publicar a versão atual e confirmar o link público de teste — checkpoint `71e0316c` publicado e Home pública acessível em `https://vitalshop-rqcse7hg.manus.space/?v=71e0316c`

## Fase 38: Substituição manual de Produtos em Destaque
- [x] Substituir a seção de produtos em destaque da Homepage pelo snippet enviado, mantendo os `src` das imagens como placeholders e preservando os links afiliados oficiais
- [x] Executar Vitest, `pnpm build` e validar visualmente a Homepage — Vitest 5/5, build de produção e screenshot da Home aprovados
- [x] Publicar o novo checkpoint e confirmar o link público de teste — checkpoint final `95096c85` publicado e domínio público validado

Previsto: o snippet enviado usa placeholders explícitos para as imagens; os `href` dos CTAs serão mantidos como links rastreáveis oficiais já cadastrados para evitar links quebrados no site publicado.

- [x] Adaptar a nova seção manual de destaques para PT/EN, mantendo o copy enviado em português e adicionando equivalente em inglês condicionado por `language`
- [x] Revalidar visualmente a Homepage nos dois idiomas após a adaptação da nova seção manual — PT e EN confirmados no preview, com placeholders e CTAs oficiais preservados
- [x] Salvar um novo checkpoint após a substituição final da seção manual de destaques — checkpoints `b292b95b` e `95096c85` publicados
- [x] Publicar a versão atualizada no domínio público e validar a Homepage publicada em PT e EN — domínio `vitalshop-rqcse7hg.manus.space` confirmado em PT e EN
- [x] Confirmar no URL público que os placeholders de imagem e os links oficiais da Olive Young aparecem corretamente na seção publicada — placeholders e links `9F1NV5TC`/`ZRK75VM6` confirmados

## Fase 39: Atualização da vitrine com seis produtos
- [x] Adicionar os textos PT/EN da nova seção de produtos em arquivos de tradução compatíveis com a aplicação atual
- [x] Substituir a seção da Homepage por seis cards bilíngues com os links de parceiros fornecidos e placeholders de imagem
- [x] Executar Vitest e build de produção após a atualização — Vitest 5/5 e build aprovados
- [x] Publicar e validar a Homepage atualizada no domínio público — checkpoint `bd8a3c5e` publicado e validado na URL pública

## Fase 40: Substituição das imagens dos seis produtos por URLs diretos
- [ ] Mapear as URLs de imagem reais fornecidas para cada um dos 6 produtos no código da Homepage
- [ ] Garantir que todas as tags `<img>` tenham `object-fit: cover` e descrições `alt` otimizadas para SEO
- [ ] Executar Vitest e `pnpm build`
- [ ] Salvar checkpoint, publicar e confirmar a exibição no domínio público

## Fase 41: Extração automática de imagens das páginas oficiais
- [x] Acessar e inspecionar via navegador as 6 páginas oficiais enviadas — fontes Olive Young, celimax US, AESTURA e Olive Young US verificadas
- [x] Extrair os URLs das imagens principais de cada produto e associar aos cards correspondentes — imagens oficiais registradas em `official-image-findings.md`
- [x] Aplicar classes de `object-fit: cover` e descrições `alt` otimizadas para SEO — seis assets em `/manus-storage/` e `alt` bilíngue aplicado
- [x] Executar testes Vitest, build de produção e publicação no domínio público — checkpoint `640d1660` publicado e validado na URL pública

## Fase 42: Investigação de Links Públicos Inacessíveis
- [x] Testar conectividade do domínio público `vitalshop-rqcse7hg.manus.space` — Homepage pública respondeu e foi revalidada
- [x] Verificar se há divergência entre a URL Manus (`vitalshop-rqcse7hg.manus.space`) e a URL de preview atual — preview e produção respondem; a rota pública funcionou com cache-buster do checkpoint
- [x] Fornecer a URL pública ativa e funcional para a usuária — `https://vitalshop-rqcse7hg.manus.space/?v=640d1660` e `/products?v=640d1660`
