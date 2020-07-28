import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled(Link)`
 text-decoration: none;
 padding: 7%;
 display: flex;
 align-items: center;
 flex-direction: column;
 cursor: pointer;
 border-radius: 4px;
 background: transparent;
 transition: background 0.2s;

 &:hover {
  background: rgba(255, 255, 255, 0.1);
 }
`

export const Title = styled.header`
 font-family: "Google Sans", Roboto, Arial, sans-serif;
 font-size: 22px;
 font-weight: 400;
 line-height: 40px;
 line-height: 135%;
 color: var(--primary);
 opacity: 0.7;
`
export const Description = styled.span`
 max-width: 100%;
 margin-left: 10px;
 font-weight: 500;
 color: var(--white);
 opacity: 0.7;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
`
export const Separetor = styled.div`
 width: 100%;
 height: 1px;
 background-color: var(--quinary);
 margin-top: 15px;
`
