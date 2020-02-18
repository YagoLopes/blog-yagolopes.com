import styled from "styled-components"

export const Styles = styled.header`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  aside {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 10px;
    img {
      height: 50px;
      width: 50px;
      padding: 9px;
    }
    a {
      color: ${props => props.theme.colors.secundary};
      padding: 10px;
      font-size: 20px;
    }
  }

  nav {
    width: 300px;
    justify-content: space-between;
    display: flex;

    a {
      color: #fff;
    }
  }
`
