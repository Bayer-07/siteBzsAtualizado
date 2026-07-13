# Novo Site BZS Tecnologia

Site institucional da BZS Tecnologia desenvolvido com React, Vite e React Router.

## Principais Recursos

- Home institucional com hero, soluções, diferenciais, método, avaliações do Google e contato.
- Páginas individuais para cada sistema da BZS.
- Página de política de privacidade.
- Página de contato com canais diretos de atendimento.
- Tema claro e tema escuro com alternância manual.
- Menu responsivo com navegação em tela cheia no mobile.
- Dropdown de soluções na navbar.
- Links de WhatsApp com mensagens personalizadas.
- Endereço apontando para o Google Maps.
- Imagens otimizadas em WebP.
- Favicon em `.ico` dentro de `public/`.

## Como Rodar

```bash
npm install
npm run dev
```

O Vite informa a URL local no terminal, normalmente `http://localhost:5173/`.

## Scripts

- `npm run dev`: inicia o servidor local do Vite.
- `npm run build`: gera a versão de produção em `dist/`.
- `npm run preview`: visualiza localmente o build gerado.

## Rotas

- `/`: página inicial.
- `/sistemas/controle-agua-gas`: Controle Água e Gás.
- `/sistemas/transporte-escolar`: Gestão de Transporte Escolar.
- `/sistemas/bzs-recicle`: BZS Recicle.
- `/sistemas/selfie`: Selfie.
- `/sistemas/bibliotecas`: Gestão de Bibliotecas.
- `/sistemas/cartao-ponto`: Cartão Ponto.
- `/contato`: canais de contato.
- `/politica-de-privacidade`: Política de Privacidade.

## Estrutura

- `src/App.jsx`: componentes, rotas e estrutura principal da aplicação.
- `src/styles.css`: estilos globais, responsividade e temas.
- `src/data/systems.js`: conteúdo das páginas dos sistemas.
- `src/data/privacyPolicy.js`: conteúdo da política de privacidade.
- `src/assets/`: imagens usadas pelo Vite, incluindo logos, hero e imagens dos sistemas em WebP.
- `public/`: arquivos públicos servidos direto pela raiz do site, como `bzs icon.ico`.
- `dist/`: build de produção gerado pelo Vite.

## Build e Deploy

Para gerar a versão final:

```bash
npm run build
```

O resultado fica em `dist/`. Essa pasta pode ser publicada em qualquer hospedagem estática ou usada pelo fluxo de deploy configurado no projeto.

## Observações

- As imagens usadas pela aplicação ficam em `src/assets/`.
