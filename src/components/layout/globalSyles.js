import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
* {
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
list-style-type: none;
text-decoration: none;
}

html,
body {
margin: 0;
padding: 0;
border: 0;
font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
font-size: 1rem;
line-height: 1.6;
color: ${props => props.theme.colors.text};
background-color:  ${props => props.theme.colors.background};
width: 100%;
height: 100%;

div.container {
width: 100%;
margin-left: auto;
margin-right: auto;
max-width: 75%;
div.content {
margin-top: 10%;
div.list-item {
border-bottom: solid 1px #e4e4f4;
margin-top: 10%;
align-items: center;
display: flex;
flex-direction: column;
a.list-post-title {
color: #31343b;
font-size: 30px;

&:hover {
color: #008aeb;
}
}
div.list-post-description {
margin-bottom: 40px;
display: flex;
align-items: center;
flex-direction: column;
img {
max-width: 50%;
max-height: 50%;
}

p {
max-width: 70%;
text-align: center;

@media screen and (max-width: 900px) {
max-width: 100%;
}
}
}
}
}
}

}




`
