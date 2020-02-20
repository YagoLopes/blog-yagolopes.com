import styled from "styled-components"

export const Styles = styled.nav`
  width: 300px;
  display: flex;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    li {
      float: left;
      a {
        display: inline-block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      div {
        display: none;
        position: absolute;
        background-color: ${props => props.theme.colors.primary};
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;

        a {
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          text-align: left;
        }
      }
    }
  }

  div a:hover {
    background-color: #f1f1f1;
    color: #333;
  }

  li:hover div {
    display: block;
  }
`
