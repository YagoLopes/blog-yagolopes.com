import styled from "styled-components"
import { Container as GlobalContainer } from "../../styles/globalSyles"
export const Container = styled(GlobalContainer)`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding: 5% 25%;
 @media only screen and (max-width: 600px) {
  padding: 20px 25px;
 }
`
export const Card = styled.div`
 border-radius: 8px;
 border: 1px solid rgba(0, 0, 0, 0.3);
 background-color: rgba(0, 0, 0, 0.1);
 color: var(--white);
 max-width: 100%;
`

export const Content = styled.div`
 margin-bottom: 12px;
 padding: 24px;
 padding-top: 22px;

 a {
  color: var(--link);
 }

 h1 {
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  line-height: 135%;
  opacity: 0.9;
 }

 * {
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 20px;
  margin-top: 12px;
  opacity: 0.8;
 }

 pre,
 code,
 span {
  opacity: 1;
 }

 img {
  max-width: 200px;
 }
`

export const Separetor = styled.div`
 width: 100%;
 height: 5px;
 border-radius: 4px 4px 0 0;
 background-color: var(--quinary);
`
