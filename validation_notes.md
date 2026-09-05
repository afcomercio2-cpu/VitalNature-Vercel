# Validação das melhorias profissionais — 2026-08-18

A Home do preview foi aberta em EN e alternada para PT e novamente para EN. O título do documento mudou entre `VitalNature | Beleza coreana e bem-estar` e `VitalNature | Korean beauty and wellness`, e a navegação, os CTAs, os quatro produtos afiliados e o disclosure permaneceram coerentes nos dois idiomas.

A Home também exibiu os quatro produtos oficiais da Olive Young com imagens carregadas, links rastreáveis externos e indicação de que preço e disponibilidade pertencem ao parceiro. O Blog e o Contato foram capturados em desktop; o catálogo, detalhe e Home foram capturados em desktop e mobile.

Os testes atuais são 5/5 aprovados em 3 arquivos Vitest; o build de produção também foi concluído com sucesso. O bundle reportou apenas o aviso de chunk acima de 500 kB, sem erro de compilação.

A página `/about` abriu com title `About VitalNature | Korean curation` e conteúdo institucional em EN. A página `/faq` abriu com title `Frequently asked questions | VitalNature` e perguntas em EN sobre rastreamento, devoluções, naturalidade e envio. Isso confirma a atualização dinâmica de title e idioma nessas páginas.

As páginas `/shipping` e `/returns` foram verificadas em EN. Ambas mostram títulos SEO corretos, deixam claro que a VitalNature não envia pedidos nem processa devoluções, e direcionam frete, prazos, trocas, reembolsos e atendimento ao parceiro oficial. Não há mais promessas próprias de frete grátis, prazo fixo, garantia ou reembolso.

Após o checkpoint `8d1b6af3`, o preview serve a Home nova, mas `https://vitalshop-rqcse7hg.manus.space/` ainda respondeu com a versão anterior (title antigo, Home antiga, sem Blog no menu e produtos genéricos). O endpoint `__manus__/version.json` no domínio público retornou 404. Portanto, a revalidação pública do novo checkpoint ainda não pode ser marcada como concluída; é necessário aguardar/sincronizar a publicação antes de confirmar PT/EN no domínio público.

Após a propagação, `https://vitalshop-rqcse7hg.manus.space/?v=8d1b6af3` serviu a versão atualizada: title `VitalNature | Beleza coreana e bem-estar`, menu com Blog, quatro produtos oficiais da Olive Young com seus links, disclosure de comissão e copy afiliada em PT. A publicação pública foi confirmada com cache-buster; a versão sem parâmetro havia permanecido temporariamente em cache.

No domínio público com `?v=8d1b6af3`, a Home foi exibida em PT com title `VitalNature | Beleza coreana e bem-estar` e alternada para EN com title `VitalNature | Korean beauty and wellness`. O menu Blog, os quatro produtos afiliados, os CTAs externos e o disclosure permaneceram presentes nos dois idiomas.

No domínio público com `?v=8d1b6af3`, `/contact` em EN abriu com title `Contact | VitalNature`, formulário real e disclosure do modelo afiliado. `/cart` em EN abriu com title `Shopping with official partners | VitalNature` e explicou que compra, pagamento, envio e devolução são concluídos no parceiro oficial.

Em PT no domínio público com `?v=8d1b6af3`, `/cart` abriu com title `Compra com parceiros oficiais | VitalNature` e texto afiliado correto. `/about` abriu com title `Sobre a VitalNature | Curadoria coreana` e conteúdo institucional em português, sem alegações não documentadas.

Em PT no domínio público com `?v=8d1b6af3`, `/faq` abriu com title `Perguntas frequentes | VitalNature`; `/shipping` abriu com title `Política de Envio | VitalNature` e deixou claro que o parceiro oficial define regiões, frete, prazo e rastreamento.

Em PT no domínio público com `?v=8d1b6af3`, `/returns` abriu com title `Política de Devoluções | VitalNature` e direcionou trocas e reembolsos ao parceiro. `/contact` abriu com title `Contato | VitalNature`, formulário funcional, e-mail público e instrução para não enviar senhas, dados bancários ou informações médicas.

O preview de `/contact` apresentou uma tela branca apenas durante a reinicialização; após aguardar, carregou corretamente com title `Contact | VitalNature`, navegação, formulário e conteúdo afiliado. Não foram encontrados erros de aplicação nos logs do navegador.

No preview, `/cart` foi verificado em EN com title `Shopping with official partners | VitalNature` e alternado para PT com title `Compra com parceiros oficiais | VitalNature`. O conteúdo e o CTA permaneceram coerentes com o modelo afiliado em ambos os idiomas.

No domínio público, `/about?v=8d1b6af3` abriu em PT e foi alternado para EN; o title mudou para `About VitalNature | Korean curation` e o conteúdo institucional em inglês foi exibido corretamente.

No domínio público, `/faq?v=8d1b6af3` abriu em EN com title `Frequently asked questions | VitalNature`; `/shipping?v=8d1b6af3` abriu em EN com title `Shipping Policy | VitalNature` e afirmou que o parceiro oficial define regiões, frete, prazos e rastreamento.

No domínio público, `/returns?v=8d1b6af3` abriu em EN com title `Returns Policy | VitalNature` e confirmou que trocas, devoluções e reembolsos seguem o processo do parceiro, sem promessas próprias da VitalNature.

No preview, `/contact` foi alternado de PT para EN e de volta para PT. O title mudou para `Contact | VitalNature` e depois `Contato | VitalNature`; formulário, copy de transparência e idioma foram confirmados nos dois estados.

A Home do preview foi verificada em PT após os ajustes: a seção de destaque mostra exatamente `Produtos selecionados e verificados em parceiros oficiais.`; os quatro cards exibem o selo `Verificar no parceiro →` e não mostram notas numéricas; os links do cabeçalho apontam para `/products`, `/about`, `/contact`, `/faq` e `/blog`; o rodapé mostra `A VitalNature atua como curadoria independente. As transações, frete e garantias são de responsabilidade dos parceiros oficiais.`

A Home do preview foi alternada para EN: a seção de destaque mostra `Products selected and verified with official partners.`; os quatro cards exibem `Verify with partner →` sem notas; os links do cabeçalho aparecem como `/`, `/products`, `/about`, `/contact`, `/faq` e `/blog`; o rodapé exibe a responsabilidade dos parceiros por transações, envio e garantias.

As rotas `/about` e `/contact` do cabeçalho foram abertas no preview em EN, ambas carregaram normalmente sem 404. Os titles foram `About VitalNature | Korean curation` e `Contact | VitalNature`, respectivamente.

A rota `/products` do preview carregou sem 404 e o conteúdo extraído mostrou os cinco produtos afiliados, links oficiais e o aviso neutro `Reviews available on the official partner site`. O screenshot capturou um frame inicial com `No products found` antes da hidratação visual; o conteúdo completo carregado confirmou os cards após a consulta ao banco.

2026-08-18 — Checkpoint 449edaf4: a Home pública em `/?v=449edaf4` exibiu a copy `Products selected and verified with official partners.`, os CTAs `Verify with partner →` e o aviso de curadoria independente no rodapé. Entretanto, a rota pública `/sobre?v=449edaf4` retornou 404, apesar de o preview carregar o alias. A publicação precisa de investigação adicional antes de confirmar conclusão.

2026-08-18 — Após a publicação do checkpoint 449edaf4, `/contato?v=449edaf4` carregou no domínio público sem 404 e exibiu o formulário real; `/produtos?v=449edaf4` carregou os cinco produtos oficiais, sem notas numéricas, com `Verify with partner →`. A primeira verificação de `/sobre?v=449edaf4` retornou 404 e requer nova checagem após a propagação final.

2026-08-18 — Revalidação final do checkpoint 449edaf4: `/sobre?v=449edaf4&retry=2` carregou sem 404 e exibiu a página About; `/contato?v=449edaf4` e `/produtos?v=449edaf4` carregaram sem 404; a Home pública em `?v=449edaf4&final=2` exibiu `Products selected and verified with official partners.`, quatro cards com `Verify with partner →`, sem notas numéricas, e o aviso de curadoria independente no rodapé. A divergência pública relatada foi resolvida após a propagação do deploy.
