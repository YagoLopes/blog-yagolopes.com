import styled from "styled-components"

export const Styles = styled.header`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  img {
    padding-left: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 10px;
    height: 55%;
    width: 55%;
  }
`
