import styled from "styled-components"
import img from "../../../assets/profile.jpg"

export const Container = styled.div`
 padding: 10%;
 width: 100%;
 display: flex;
 justify-content: center;
`

export const Left = styled.div`
 max-width: 600px;

 @media only screen and (max-width: 600px) {
  max-width: 100%;
 }
`
export const Right = styled.div`
 margin-left: 50px;
 padding: 7px;
 border: solid 2px var(--quinary);
 border-radius: 50%;
 div {
  width: 185px;
  height: 185px;
  background-image: url(${img});
  border-radius: 50%;
  background-repeat: no-repeat;

  box-shadow: inset 15px 15px 50px var(--quaternary);

  opacity: 0.5;
  background-size: cover;
 }
 @media only screen and (max-width: 600px) {
  position: absolute;
 }
`
export const Title = styled.h2`
 font-size: 2em;
 margin-top: 20px;
 color: var(--quinary);
`
export const Text = styled.p`
 font-size: 1.2em;
 margin-top: 20px;
 color: var(--tertiary);
 opacity: 0.7;
`
