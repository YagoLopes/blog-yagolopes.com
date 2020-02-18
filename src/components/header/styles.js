import styled from "styled-components"

export const Styles = styled.header`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  img {
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 10px;
    height: 55%;
    width: 55%;
  }

  nav {
    width: 300px;
    display: flex;

    a {
      margin-left: 10%;
      font-size: 1em;
      color: #fff;
    }
  }
`
