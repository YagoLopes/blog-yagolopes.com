import styled from "styled-components"
export const Container = styled.div`
 max-width: 100vw !important;
 background-color: var(--secondary);
`

export const Content = styled.div`
 margin: 0 auto;
 max-width: 800px;
 border-radius: 8px;
 border: 1px solid rgba(0, 0, 0, 0.3);
 background-color: rgba(0, 0, 0, 0.1);
 border-top: solid 2px var(--quinary);
 color: var(--white);
 padding: 24px;
 padding-top: 22px;
 position: relative;

 img {
  max-width: 100%;
 }

 pre {
  max-width: 100% !important;

  code {
   max-width: 100% !important;
  }
 }

 a {
  color: var(--link);
 }

 h1 {
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  opacity: 0.9;
 }

 * {
  font-size: 18px;
  letter-spacing: 0.2px;
  margin-top: 12px;
  opacity: 0.8;
 }

 pre,
 code,
 span {
  opacity: 1;
 }
`
