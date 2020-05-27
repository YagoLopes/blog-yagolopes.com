---
layout: post
title: CSS 3
header: Posicionando elementos em tela com CSS3
date: 2020-05-27 22:42
category: css
author: Yago Lopes Lázaro
tags: [css, styles, positions]
description: "Se você é um desenvolvedor web, com certeza já sofreu para posicionar os elementos html em tela utilizando css, existem inúmeras técnicas que podem ser utilizadas para posicionar as tags html. Nesse post vou te mostrar as principais tecnicas que eu estou utilizando atualmente."
thumbnail: "https://img.icons8.com/color/48/000000/css3.png"
---

# Antes de começarmos

- Para executar os exemplos abaixo na sua maquina, você irá precisar de um editor de texto, e um navegador web.

## Exemplo 01 estrutura de página

- A grande maioria dos sites da web possui um estrutura simple, com uma barra de navegação, uma seção de conteudo e um rodapé, vamos utilizar um pouco de [flexbox](https://origamid.com/projetos/flexbox-guia-completo/) para montar esse layout.

- Para o html vamos utilizar as seguintes tags

```html
<body>
 <nav>Navegação</nav>
 <main>Conteudo</main>
 <footer>Rodapé</footer>
</body>
```

- No css vamos começar com reset simples

```css
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
```

- Vamos assumir que a nossa aplicação usara toda a area disponivel em tela, tanto em largura quanto em altura, vamos tornar o display flexivel para que possamos trabalhar com o flaxbox nos elementos flihos da tag body e por ultimo vamos mudar a direção para colunas para colocar os nosso elemntos um em baixo do outro.

```css
html,
body {
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
}
```

- Por ultimo vamos adicionar um pouco de cor aos elemntos filhos e definir a largura e a altura de cada um deles.

```css
nav {
 background-color: blue;
 width: 100%;
 height: 10%;
}
main {
 background-color: #000;
 width: 100%;
 height: 70%;
}
footer {
 background-color: red;
 width: 100%;
 height: 20%;
}
```
