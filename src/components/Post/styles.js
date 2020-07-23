import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled(Link)`
 text-decoration: none;
 margin-top: 5px;
 padding: 5px;
 display: flex;
 align-items: center;
 cursor: pointer;
 border-radius: 4px;
 background: transparent;
 transition: background 0.2s;
 &:hover {
  background: rgba(255, 255, 255, 0.1);
 }
 strong {
  margin-left: 10px;
  font-weight: 500;
  color: var(--white);
  opacity: 0.7;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
 }
`
