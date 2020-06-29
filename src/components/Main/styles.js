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
export const Post = styled(Link)`
 height: 500px;
 text-decoration: none;
 margin-top: 5px;
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
  margin-left: 13px;
  font-weight: 500;
  color: var(--white);
  opacity: 0.7;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
 }
 span {
  margin-left: 9px;
  background-color: var(--discord);
  color: var(--white);
  border-radius: 4px;
  padding: 4px 5px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
 }
`

export const Avatar = styled.div`
 flex-shrink: 0;
 width: 32px;
 height: 32px;
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
