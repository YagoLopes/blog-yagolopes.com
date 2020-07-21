import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;
}

html, body, #root{
  background-color: var(--primary);
  height: 100vh;
  font-family: 'Roboto', sans-serif;
}


*, button, input{
margin: 0;
padding: 0;
border: 0;
font-family: 'Roboto', sans-serif;
}


:root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
    --white: #fff;
    --link: #5d80d6;
    --discord: #7289da;
  }





`
