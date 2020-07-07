---
layout: post
title: CSS 3
header: Posicionando com CSS3
date: 2020-05-27 22:42
category: css
author: Yago Lopes Lázaro
tags: [css, styles, positions]
description: "Se você é um desenvolvedor web, com certeza já sofreu para posicionar os elementos html em tela utilizando css, existem inúmeras técnicas que podem ser utilizadas para posicionar as tags html. Nesse post vou abordar as principais que estou utilizando atualmente."
thumbnail: "https://img.icons8.com/color/48/000000/css3.png"
---

# Antes de começarmos

Para executar os exemplos abaixo na sua maquina, você irá precisar de um editor de texto, e um navegador web.

### Etapa 1 definindo layout

A grande maioria dos sites da web possui uma estrutura simples: uma barra de navegação, uma seção de conteudo e um rodapé. Vamos utilizar um pouco de [flexbox](https://origamid.com/projetos/flexbox-guia-completo/) para montar esse layout. Para o html vamos utilizar as seguintes tags

```html
<body>
 <nav>Navegação</nav>
 <main>Conteudo</main>
 <footer>Rodapé</footer>
</body>
```

No css vamos começar com um reset css simples

```css
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
```

Assumirei que a nossa aplicação usará toda a área disponível em tela, e por isso vamos utilizar a largura e altura com 100% da tela. Torne o display flexível para que possamos trabalhar com os conceitos do flaxbox nos elementos flihos da tag body. E por ultimo vamos mudar a direção para colunas para colocar os elemntos filhos do body um em baixo do outro.

```css
html,
body {
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
}
```

Agora vamos adicionar um pouco de cor aos elemntos, e definir a largura e a altura de cada um deles para que possamos visualiza-los em tela.

```css
nav {
 background-color: #3d3b3c;
 color: #fff;
 width: 100%;
 height: 10%;
}
main {
 background-color: #fff;
 width: 100%;
 height: 70%;
}
footer {
 background-color: #3d3b3c;
 width: 100%;
 height: 20%;
}
```

Se tudo estiver ocorrido bem você já deve ter o esqueleto da pagina montado.

<img width="1000" src="https://media.giphy.com/media/61fYIfXvO2EJa/giphy.gif" alt="Esqueleto montado">

### Etapa 2 montando barra de navegação

Dentro da tag nav vamos começar a montar nossa barra de navegação, na tag span colocarei a logo da página e ao lado uma lista de itens.

```html
<span>Logo</span>
<ul>
 <li>item1</li>
 <li>item2</li>
</ul>
```

Agora vem a parte onde as pessoas mais se confundem.Para chegarmos no objetivo final primeiro é preciso entender a forma que o html trabalha. Atualmente temos uma tag span e ao lado uma ul e dentro está os nossos itens. Vamos posicionar a logo a esquerda, e a lista a direita. No comportamento padrão do html, os elementos são posicionados no sentido de colunas, um em baixo do outro e, é por isso que a lista está em baixo da logo na tela. Para alterar esse comportamento vou utilizar o `display: flex` que altera esse comportamento para em linha para mais detalhes consulte o guia do [Flexbox](https://origamid.com/projetos/flexbox-guia-completo/)

```css
nav {
 background-color: #3d3b3c;
 color: #fff;
 width: 100%;
 height: 10%;
 display: flex;
}
```

Já que compreendemos esse comportamento, podemos utilizar a mesma propriedade para colocar os items um do lado do outro.

```css
nav ul {
 display: flex;
}
```

Estamos quase finalizando a nav! Agora vamos desagrupar os itens, vou adicionar um padding de 10px entre eles, e remover a marcação dos itens

```css
nav ul li {
 padding: 10px;
 list-style-type: none;
}
```

### Etapa 3 ultimos reparos

Por ultimo vamos alinhar e posicionar itens nos seus devidos lugares, adicionando mais algunas propriedades a nossa tag nav. Vamos alinhar todo o conteudo no centro no sentido vertical, utilizando a propriedade `align-items: center`. Vamos adicionar um padding na direita e na esquerda para que os itens não fiquem totalmente grudados nas laterais. E por ultimo, vamos utilizar uma propriedade nova, o `justifly-content: space-between` essa propriedade alinha um elemento totalmente a direita e o outro totalmente a esquerda causando assim o efeito deseijado.

```css
nav {
 background-color: #3d3b3c;
 color: #fff;
 width: 100%;
 height: 10%;
 display: flex;
 align-items: center;
 padding-left: 10px;
 padding-right: 10px;
 justify-content: space-between;
}
```

Não irei entrar em mais detalhes de implementação aqui para não prolongar muito o post. Más acho que já deu para entender os conceitos, basta utiliza-los nas demais partes do site main e footer. Fico por aqui um forte abraço!
