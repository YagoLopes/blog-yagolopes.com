import styled from "styled-components"
export const Content = styled.div`
 display: flex;
 width: 100%;
 height: 100%;
 flex-direction: column;
 background-color: var(--primary);
 margin-top: 5px;
 font-size: 14px;
 padding: 0 10%;

 h1,
 h2,
 h3,
 h4,
 h5 {
  margin-top: 5px;
  font-weight: 500;
  color: var(--white);
  text-overflow: ellipsis;
 }

 h1 {
  text-align: center;
  font-size: 2.3em;
 }

 img {
  margin-top: 20px;
  margin-bottom: 20px;
  align-self: center;

  max-width: 200px;
  max-width: 300px;
 }

 p {
  color: var(--white);
  opacity: 0.7;
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 1.5;
 }

 a {
  color: var(--link);
 }
`
