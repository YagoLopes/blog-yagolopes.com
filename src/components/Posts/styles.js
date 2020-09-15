import styled from "styled-components"

export const Wrapper = styled.div`
 text-decoration: none;
 padding: 20px 18px;
 min-width: 350px;
 max-width: 100%;
 max-height: 150px;
 cursor: pointer;
 border-radius: 4px;
 background-color: #333;
 transition: background 0.2s;
 margin: 12px;

 a {
  text-decoration: none;

  h1 {
   text-align: center;
  }
  p {
   margin-top: 7px;
   color: var(--white);
   opacity: 0.7;
   margin-bottom: 5px;
  }

  strong {
   color: var(--white);
   opacity: 0.3;
  }
 }
 &:hover {
  background: rgba(255, 255, 255, 0.1);
 }
`
