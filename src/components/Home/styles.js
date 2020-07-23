import styled from "styled-components"

export const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100vh;
 background-color: transparent;
`

export const PostList = styled.div`
 margin: 5px 0;
 padding: 10px;
 overflow-y: scroll;
 min-width: 50%;
 min-height: 40%;
 max-height: 50%;
 border-radius: 3px;
 border: 1px solid rgba(0, 0, 0, 0.3);
 background-color: rgba(0, 0, 0, 0.1);

 ::-webkit-scrollbar {
  width: 4px;
 }
 ::-webkit-scrollbar-thumb {
  background-color: var(--tertiary);
  border-radius: 4px;
 }
 ::-webkit-scrollbar-track {
  background-color: var(--secondary);
 }
`
