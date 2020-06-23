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

.gatsby-highlight {
  background-color: #1d1f21;
  border-radius: 0.3em;
  margin: 0.5em 0;
  padding: 1em;
  overflow: auto;
}

.gatsby-highlight pre[class*="language-"].line-numbers {
  padding: 0;
  padding-left: 2.8em;
  overflow: initial;
}

html,
body {
margin: 0;
padding: 0;
border: 0;
font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
line-height: 1.6;
color: #6f7380;
background-color:  #fff;
}

`
