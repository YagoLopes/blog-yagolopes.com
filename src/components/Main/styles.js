import styled from "styled-components"
import { Link } from "gatsby"
export const Container = styled.main`
 width: 70%;
 margin-left: auto;
 background-color: var(--secondary);
 display: flex;
 flex-wrap: wrap;

 overflow-y: scroll;
 ::-webkit-scrollbar {
  width: 7px;
 }
 ::-webkit-scrollbar-thumb {
  background-color: var(--tertiary);
  border-radius: 4px;
 }
 ::-webkit-scrollbar-track {
  background-color: var(--secondary);
 }
`
export const DateInfo = styled.span`
 margin-top: 10px;
 color: var(--white);
 padding: 2px;
 font-weight: bold;
 background-color: var(--notification);
 border-radius: 4px;
 font-size: 11px;
`

export const Post = styled(Link)`
 min-height: 280px;
 max-width: 270px;
 text-decoration: none;
 border: 1px solid var(--notification);
 margin: 5px;
 padding: 5px;
 display: flex;
 flex-direction: column;
 align-items: center;
 cursor: pointer;
 border-radius: 4px;
 background: transparent;
 transition: background 0.2s;
 &:hover {
  background: rgba(255, 255, 255, 0.1);
 }

 strong {
  margin-top: 5px;
  font-weight: 500;
  color: var(--white);
  text-overflow: ellipsis;
 }

 p {
  margin-top: 5px;
  opacity: 0.7;
  font-size: 14px;
  text-align: center;
  color: var(--white);
 }
`

export const Avatar = styled.div`
 flex-shrink: 0;
 padding: 10px;
 width: 45px;
 height: 45px;
 border-radius: 50%;
 background-color: var(--primary);

 &.bot {
  background-color: var(--mention-detail);
 }

 img {
  width: 100%;
  height: 100%;
 }
`
