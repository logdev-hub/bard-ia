# BARD IA — hotsite

Hotsite estático do projeto acadêmico Nogueira, Sousa & Takenaka, desenvolvido com HTML5, CSS3, JavaScript vanilla, Bootstrap 5.3.3 e Bootstrap Icons.

## Como abrir

No VS Code, abra a pasta do projeto e use a extensão **Live Server** em `index.html`. Também é possível abrir o arquivo diretamente no navegador, mas um servidor local é recomendado para testar todos os recursos.

## Estrutura

- `index.html`: conteúdo semântico e seções do hotsite.
- `assets/css/styles.css`: identidade visual, responsividade e acessibilidade visual.
- `assets/js/main.js`: menu mobile, seção ativa, animações leves e ano do rodapé.
- `assets/js/config.js`: IDs e URLs dos vídeos e campos para links reais.
- `assets/img/favicon.svg`: favicon criado para o projeto.
- `docs/conteudo-e-fontes.md`: páginas consultadas, adaptações e classificação editorial.

## Personalização

- Troque os vídeos em `assets/js/config.js` e nos dois `iframe` de `index.html`.
- Altere cores no bloco `:root` de `assets/css/styles.css`.
- Textos, nomes, métricas e links são mantidos no HTML para indexação e funcionamento sem JavaScript.
- Preencha `links.platform` e `links.contact` em `config.js` quando existirem URLs reais; não foram criados botões de contato sem destino.

## Publicação

O projeto pode ser publicado em hospedagem estática como GitHub Pages, Netlify, Vercel ou hospedagem institucional. Antes de publicar, defina uma imagem Open Graph hospedada e atualize `og:image`; não foi inventado canonical ou domínio público.

## Verificações e limitações

- Estrutura sem framework, HTML semântico, `lang="pt-BR"`, skip link, foco, navegação por âncoras, menu mobile e accordion Bootstrap implementados.
- Breakpoints para aproximadamente 360 px, 768 px e 1440 px foram considerados no CSS; a página não usa imagens grandes do PDF, reduzindo deslocamento e dependências locais.
- Os dois vídeos usam `youtube-nocookie.com`, `loading="lazy"`, títulos específicos, tela cheia e links diretos.
- `prefers-reduced-motion` é respeitado e o conteúdo permanece no HTML se o JavaScript falhar.
- A incorporação depende da disponibilidade e das políticas do YouTube; os links diretos permanecem como alternativa.
- Não foi possível validar reprodução dentro de um navegador automatizado neste ambiente; não se afirma que os vídeos foram assistidos.
