import styled from "styled-components"
import { Container as GlobalContainer } from "../../styles/globalSyles"
export const Container = styled(GlobalContainer)`
 padding-top: 15px;
`

export const Content = styled.div`
 margin-left: auto;
 margin-right: auto;
 width: 50%;
 min-width: 500px;

 border-radius: 8px;
 border: 1px solid rgba(0, 0, 0, 0.3);
 background-color: rgba(0, 0, 0, 0.1);

 color: var(--white);

 margin-bottom: 12px;
 padding: 24px;
 padding-top: 22px;
 position: relative;

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
`

export const Separetor = styled.div`
 margin-left: auto;
 margin-right: auto;
 width: 50%;
 height: 5px;
 border-radius: 10px;
 background-color: var(--quinary);
 min-width: 500px;
`
