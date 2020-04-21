import styled from "styled-components"

export const Styles = styled.div`
 img {
  max-width: 500px;
  max-height: 500px;
 }
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
`
