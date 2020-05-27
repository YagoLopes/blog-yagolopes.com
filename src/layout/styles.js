import styled from "styled-components"

export const Header = styled.header`
 background-color: #3d3b3c;
 display: flex;
 position: fixed;
 top: 0;
 width: 100%;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 padding: 10px 155px 10px 10px;

 @media screen and (max-width: 900px) {
  flex-direction: column;
  padding: 10px;
 }

 img {
  margin-top: 5px;
  height: 55px;
 }
 input {
  float: right;
  padding: 6px;
  margin-top: -2px;
  border: none;
  font-size: 17px;
  border-radius: 10px;
  outline: none;
 }
`

export const Main = styled.main`
 width: 100%;
 margin-top: 50px;
 margin-left: auto;
 margin-right: auto;
 max-width: 75%;

 @media screen and (max-width: 900px) {
  margin-top: 150px;
 }

 section {
  border-bottom: solid 1px #e4e4f4;
  margin-top: 10%;
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
   margin-bottom: 40px;
   display: flex;
   align-items: center;
   flex-direction: column;

   p {
    max-width: 70%;
    text-align: center;

    @media screen and (max-width: 900px) {
     max-width: 100%;
    }
   }
  }
 }
`
