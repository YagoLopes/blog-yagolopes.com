import styled from "styled-components"

export const Wrapper = styled.div`
 text-decoration: none;
 padding: 20px 15px;
 width: 350px;
 height: 150px;
 cursor: pointer;
 border-radius: 4px;
 background-color: #333;
 transition: background 0.2s;
 margin: 0 10px;

 a {
  margin-top: 5px;
  text-decoration: none;
 }
 &:hover {
  background: rgba(255, 255, 255, 0.1);
 }
 h1 {
  text-align: center;
 }
 p {
  margin-top: 5px;
  color: var(--white);
  opacity: 0.7;
 }
`
