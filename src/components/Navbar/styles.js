import styled from "styled-components"

export const Nav = styled.nav`
 width: 30%;
 background-color: var(--primary);
 position: fixed;
 height: 100vh;
 padding: 11px 0;
 max-height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
`
export const Img = styled.img`
 margin-top: 10px;
 max-width: 100%;
 max-height: 50px;
`
export const SearchContainer = styled.div`
 margin-top: 10px;
 width: 90%;
`
export const Search = styled.input`
 width: 100%;
 font-size: 18px;
 background-color: var(--white);
 background-color: rgba(0, 0, 0, 0.2);
 color: var(--white);
 border: 0;
 border-radius: 4px;
 height: 44px;
 padding: 0 15px;
 &::placeholder {
  color: rgba(255, 255, 255, 0.7);
 }
`
