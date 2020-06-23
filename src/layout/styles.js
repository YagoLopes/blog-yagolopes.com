import styled from "styled-components"

export const Header = styled.header`
 background-color: #f5f5f5;
 display: flex;
 position: fixed;
 top: 0;
 width: 100%;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 padding: 10px 0;
 z-index: 1000000;
 border-bottom: 1px solid #ddd;

 img {
  height: 80px;
  margin-left: 10%;
 }
 input {
  padding: 6px;
  margin-top: -2px;
  border: solid 1px #6f7380;
  width: 500px;
  font-size: 17px;
  border-radius: 4%;
  outline: none;
  margin-right: 2%;
 }
`

export const Main = styled.main`
 width: 100%;
 margin-top: 10%;
 margin-left: auto;
 margin-right: auto;
 max-width: 75%;

 @media screen and (max-width: 900px) {
  margin-top: 150px;
 }

 section {
  border-bottom: solid 1px #e4e4f4;
  margin-top: 15%;
  align-items: center;
  display: flex;
  flex-direction: column;
  a {
   color: #31343b;
   font-size: 1.5em;
   &:hover {
    color: #008aeb;
   }
  }
  article {
   margin-bottom: 15%;
   display: flex;
   align-items: center;
   flex-direction: column;

   p {
    max-width: 800px;
    text-align: center;

    @media screen and (max-width: 900px) {
     max-width: 100%;
    }
   }
  }
 }
`
