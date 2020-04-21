import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
* {
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
list-style-type: none;
text-decoration: none;
margin: 0;
padding: 0;
}

html,
body {
margin: 0;
padding: 0;
border: 0;
font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
font-size: 1rem;
line-height: 1.6;
color: #6f7380;
background-color:  #fff;
}

`
