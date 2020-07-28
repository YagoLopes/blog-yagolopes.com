import styled from "styled-components"

export const Container = styled.div`
 display: flex;
 justify-content: center;
 height: 100vh;
 background-color: transparent;
 padding: 5% 25%;
 overflow-y: auto;
 @media only screen and (max-width: 600px) {
  padding: 20px 25px;
 }
`

export const PostList = styled.div`
 width: 100%;
`
