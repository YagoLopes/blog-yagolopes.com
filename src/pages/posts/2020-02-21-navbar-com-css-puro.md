---
layout: post
title: Criando uma barra de navegação simples utilizando css puro
date: 2020-02-21 22:42
category: css
author: Yago Lopes Lázaro
tags: [css, styles, navbar]
description: "Se você é um desenvolvedor web, com certeza já sofreu para posicionar os elementos html em tela, existem inúmeras técnicas de css que podemos utilizar na estilização das tags html..."
thumbnail: "https://img.icons8.com/color/48/000000/css3.png"
---

Se você é um desenvolvedor web, com certeza já sofreu para posicionar os elementos html em tela, existem inúmeras técnicas de css que podemos utilizar na estilização das tags html.

A verdade é que não existe errado e nem certo, apenas abordagens diferentes que podem ou não nos levar ao nosso objetivo final.

Objetivo: construir um barra de navegação responsiva "que se adapte a várias resoluções de dispositivos", utilizando apenas css puro.

Primeiro vamos criar dois arquivos para fazer a separação do nosso código: um com o nome de index.html e outro com nome style.css

No arquivo index.html vamos colar o seguinte código:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>

  <body>
    <nav>
      <h1>Titulo</h1>
      <div>
        <strong>item1</strong>
        <strong>item2</strong>
      </div>
    </nav>
  </body>
</html>
```

1.Basicamente utilizaremos uma tag nav que ficará reponsável por fazer toda a parte azul visível no exemplo:

2.Dentro da nave colocaremos uma tag h1 que ficará responsável pelo título

3.E por último uma tag div que servirá de lista para que possamos colocar os itens da lista representados pela tag strong

.Bom com isso, se você abrir o arquivo em um navegador web, verá que os elementos já estão lá, porém, de uma forma totalmente desorganizada.

.O que vamos fazer agora é organizar todos os elementos da tela

.No arquivo styles.css vamos colar o seguinte código:

```css
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100%;
  height: 100%;
  display: flex;
}
nav {
  width: 100%;
  color: #fff;
  background-color: royalblue;

  justify-content: space-between;
}
nav:first-child {
  font-size: 1em;
  font-weight: 500;
  font-family: sans-serif;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
}

div {
  display: flex;
  list-style-type: none;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
  height: 100%;
}

strong {
  margin-right: 10px;
}
```

1.O caracter `*` pode ser entendido como uma tag que represente todas as outras, o que vamos fazer, é zerar a margem de dentro e de fora de todas tags do html. Essa técnica é conhecida como reset css.

2.Na tag body vamos garantir que ela seja 100% da tela e 100% altura da tela, e vamos torná-la uma tag flexível.

2.Para a tag nav vamos:

.Torná-la flexível
.Dar a ela, o tamanho referente à largura máxima da tela
.Definir a cor do texto como branca (#fff),
.Definir a cor de fundo como azul (royalblue),
.Justificar o conteúdo de dentro dela ao centro,

3.Para o Título poderíamos ter aplicado os estilos na tag h1, porém o css tem uma funcionalidade interessante o nav:first-child, em inglês significa primeiro filho da tag nav ou seja, justamente o nosso h1

.Vamos colocar nosso título em negrito
.E definir uma margem a direita superior e inferior de 10 px

4.Para a lista vamos :

.torná-la flexível,
.justificar todo o conteúdo no final da lista, ou seja, à direita
.alinhar todo o conteúdo no centro da lista
.para a largura, vamos usar 30% do valor do seu pai (nav) e altura 100% do valor do seu pai (nav)

5.Por último, vamos colocar uma margem à esquerda nos itens da lista para que, eles não fiquem totalmente grudados
