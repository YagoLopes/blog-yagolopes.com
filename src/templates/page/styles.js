import styled from "styled-components"

export const Styles = styled.div`
  div.contact {
    display: flex;
    widows: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div.contact img {
    max-width: 200px;
    max-height: 200px;
    border-radius: 50%;
  }
  div.contact p {
    text-align: center;
    max-width: 70%;
  }
  @media screen and (max-width: 900px) {
    div.contact p {
      text-align: center;
      max-width: 100%;
    }
    div.contact img {
      max-width: 100px;
      max-height: 100px;
      border-radius: 50%;
    }
  }

  div.contact ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  div.contact ul li a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div.contact ul li {
    margin: 0;
    padding: 0;
  }

  div.contact ul li a div {
    max-width: 50%;
    max-height: 50%;
  }
`
