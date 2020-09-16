import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

export default createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;
}

html, body, #root{
  height: 100vh;
  font-family: 'Roboto', sans-serif;
}


*, button, input{
margin: 0;
padding: 0;
border: 0;
font-family: 'Roboto', sans-serif;
}
a {
  color: var(--link);
 }


:root {
    --primary: #FFBD14;
    --secondary: #262327;
    --tertiary: #FCFCF2;
    --quaternary: #1C1714;
    --quinary: #FD951F;
    --senary: #fcfcf2;
    --sectarian:#ff8928;
    --octanary: #d10000;

    --white: #fcfcf2;
    --link: #00638a;
  }



`

export const Container = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 background-color: var(--secondary);
 overflow-y: scroll;
 ::-webkit-scrollbar {
  width: 4px;
 }
 ::-webkit-scrollbar-thumb {
  background-color: var(--tertiary);
  border-radius: 4px;
 }
 ::-webkit-scrollbar-track {
  background-color: var(--secondary);
 }
`
