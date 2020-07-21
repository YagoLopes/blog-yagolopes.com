import styled from "styled-components"
import img from "../../../assets/profile.jpg"

export const Container = styled.div`
 padding: 10%;
 width: 100%;
 display: flex;
`

export const Left = styled.div`
 max-width: 50%;
`
export const Right = styled.div`
 margin-top: -8%;
 margin-left: 50px;
 width: 350px;
 height: 350px;
 background-image: url(${img}); /* The image used */
 background-color: var(--quaternary); /* Used if the image is unavailable */

 border-radius: 50%;
 /*background-position: top; /* Center the image */
 background-repeat: no-repeat; /* Do not repeat the image */
 opacity: 0.1;
 background-size: cover;
`
export const Title = styled.h2`
 color: var(--quinary);
`
export const Text = styled.p`
 color: var(--tertiary);
 opacity: 0.7;
`
