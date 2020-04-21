---
layout: post
title: Java Script
header: Manipulando Array no Java Script
date: 2020-02-22 15:30
category: js
author: Yago Lopes Lázaro
tags: [Java Script, Array, Manipulando]
description: Um array a grosso modo pode ser entendido como uma lista de "elementos", no Java Script um array é simbolizado pelos caracteres de chaves `[]` onde cada elemento é posicionado dentro das chaves e separados por vírgula `,`
thumbnail: "https://img.icons8.com/color/48/000000/javascript.png"
---

## Manipulando Array no Java Script

Um array a grosso modo pode ser entendido como uma lista de "elementos", no Java Script um array é simbolizado pelos caracteres de chaves `[ ]` onde cada elemento é posicionado dentro das chaves, e separados por vírgula`,`.
Para o nosso exemplo vamos utilizar uma lista de usuários, onde cada elemento representará um usuário na lista, e dentro de cada usuário teremos os dados do mesmo como: nome, email, telefone entre outros...

#### Vamos começar criando dois arquivos: um chamado usuarios.js onde ficará a nossa lista de usuários com o seguinte código.

```javascript
module.exports = [
 {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
   street: "Kulas Light",
   suite: "Apt. 556",
   city: "Gwenborough",
   zipcode: "92998-3874",
   geo: {
    lat: "-37.3159",
    lng: "81.1496",
   },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
   name: "Romaguera-Crona",
   catchPhrase: "Multi-layered client-server neural-net",
   bs: "harness real-time e-markets",
  },
 },
 {
  id: 2,
  name: "Ervin Howell",
  username: "Antonette",
  email: "Shanna@melissa.tv",
  address: {
   street: "Victor Plains",
   suite: "Suite 879",
   city: "Wisokyburgh",
   zipcode: "90566-7771",
   geo: {
    lat: "-43.9509",
    lng: "-34.4618",
   },
  },
  phone: "010-692-6593 x09125",
  website: "anastasia.net",
  company: {
   name: "Deckow-Crist",
   catchPhrase: "Proactive didactic contingency",
   bs: "synergize scalable supply-chains",
  },
 },
 {
  id: 3,
  name: "Clementine Bauch",
  username: "Samantha",
  email: "Nathan@yesenia.net",
  address: {
   street: "Douglas Extension",
   suite: "Suite 847",
   city: "McKenziehaven",
   zipcode: "59590-4157",
   geo: {
    lat: "-68.6102",
    lng: "-47.0653",
   },
  },
  phone: "1-463-123-4447",
  website: "ramiro.info",
  company: {
   name: "Romaguera-Jacobson",
   catchPhrase: "Face to face bifurcated interface",
   bs: "e-enable strategic applications",
  },
 },
]
```

.Basicamente o que fizemos foi criar um módulo no Java Script, que exportará a lista de usuários, para que possamos acessá-la de outro arquivo.
.Agora vamos criar mais um arquivo, esse com o nome de index.js, e nele cole o seguinte código.

```javascript
const usuarios = require("./usuarios")
```

.O código acima faz a importação da lista de usuários que acabamos de criar.

### Objetivos:

##### Encontre um usuário na lista

```javascript
const usuario = usuarios.find(usuario => usuario.name === "Clementine Bauch")
```

.Criamos uma constante usuário que irá receber o valor retornado pelo metodo find.
.O find irá procurar em toda a lista de usuários, um usuário que tem o nome igual a "Clementine Bauch", se tiver um usuário com esse nome na lista, ele irá retorná-lo, se não, retornará undefined (indefinido/não existe).

#### Para remover um elemento de um array no Java Script utilizamos o metodo splice.

```javascript
usuarios.splice(2, 1)
```

.O código acima mostra a quantidade de usuários da lista, depois de aplicarmos o metodo splice.
.O splice remove uma determinada quantidade de registro a partir de uma posição da lista, nesse caso a lista de usuários tem inicialmente 3 usuários. Vamos remover 1 usuário a partir da posição 2, restando apenas 2 usuários, o usuário 1 e o usuário 3.

#### Para inserir um novo usuário na lista, vamos utilizar o metodo push do Java Script

```javascript
const usuario = {
 id: 4,
 name: "Patricia Lebsack",
 username: "Karianne",
 email: "Julianne.OConner@kory.org",
 address: {
  street: "Hoeger Mall",
  suite: "Apt. 692",
  city: "South Elvis",
  zipcode: "53919-4257",
  geo: {
   lat: "29.4572",
   lng: "-164.2990",
  },
 },
 phone: "493-170-9623 x156",
 website: "kale.biz",
 company: {
  name: "Robel-Corkery",
  catchPhrase: "Multi-tiered zero tolerance productivity",
  bs: "transition cutting-edge web services",
 },
}
```

.O código acima cria uma nova constante chamada de usuário, nela colocaremos os mesmos campos que a nossa lista de usuários espera: id, nome, username, email...

```javascript
usuarios.push(usuario)
```

E por fim vamos aplicar a função push na lista de usuários, passando para ela o novo usuário que acabamos de criar.
