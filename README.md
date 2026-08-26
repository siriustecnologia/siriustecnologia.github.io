# SIRIUS Tecnologia — Landing Page

Landing page estática da SIRIUS Tecnologia, pronta para publicação no GitHub Pages.

## Estrutura

- `index.html` — página principal
- `styles.css` — identidade visual, hero e responsividade
- `script.js` — menu mobile, formulário e configuração do WhatsApp
- `assets/logo-sirius.png` — logo oficial da SIRIUS

## Alterações desta versão

- Logo oficial da SIRIUS em destaque no hero, no lado direito.
- Pequeno `S` no canto superior esquerdo.
- Removidos os textos decorativos `01 10 01` e `AI / API / DEV`.
- Mantidas as seções de serviços, aulas, sobre, processo e contato.
- Layout responsivo para desktop e celular.

## Configurar o WhatsApp

Abra `script.js` e altere:

```js
const WHATSAPP_NUMBER = "";
```

Para o número da SIRIUS, somente números e com código do país.

Exemplo:

```js
const WHATSAPP_NUMBER = "5511999999999";
```

## Publicar no GitHub Pages

1. Crie ou use o repositório `siriustecnologia.github.io`.
2. Envie o conteúdo desta pasta para a raiz do repositório.
3. No GitHub, abra `Settings` → `Pages`.
4. Em `Build and deployment`, selecione `Deploy from a branch`.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde a publicação.
