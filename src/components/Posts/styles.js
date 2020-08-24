import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
 width: 80%;
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
`

export const Wrapper = styled(Link)`
 text-decoration: none;
 padding: 20px 50px;
 max-width: 350px;
 cursor: pointer;
 border-radius: 4px;
 background-color: #333;
 transition: background 0.2s;
 margin: 10px;
 &:hover {
  background: rgba(255, 255, 255, 0.1);
 }
 h1 {
  text-align: center;
 }
 p {
  margin-top: 25px;
  color: var(--white);
  opacity: 0.7;
  margin-bottom: 10px;
 }
`
