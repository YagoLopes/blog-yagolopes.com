import styled from "styled-components"
import img from "../../../assets/profile.jpg"

export const Container = styled.div`
 padding: 10%;
 width: 100%;
 display: flex;
`

export const Left = styled.div`
 max-width: 50%;

 @media only screen and (max-width: 600px) {
  margin-top: 20px;
  max-width: 100%;
 }
`
export const Right = styled.div`
 margin-top: -8%;
 margin-left: 50px;
 width: 350px;
 height: 350px;
 background-image: url(${img});
 background-color: var(--quaternary);
 border-radius: 10%;
 background-repeat: no-repeat;
 -moz-box-shadow: inset 10px 10px 50px var(--quaternary);
 -webkit-box-shadow: inset 10px 10px 50px var(--quaternary);
 box-shadow: inset 30px 30px 50px var(--quaternary);
 opacity: 0.2;
 background-size: cover;

 @media only screen and (max-width: 600px) {
  position: absolute;
 }
`
export const Title = styled.h2`
 font-size: 1.8em;
 color: var(--quinary);
`
export const Text = styled.p`
 font-size: 1.2em;
 margin-top: 10px;
 color: var(--tertiary);
 opacity: 0.7;
`
