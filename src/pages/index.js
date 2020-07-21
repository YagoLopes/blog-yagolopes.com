import React from "react"
import GlobalSyles, { Container } from "../styles/portfolioSyles"
import Header from "../components/Portfolio/Header"
import { Helmet } from "react-helmet"

export default function() {
 return (
  <React.Fragment>
   <GlobalSyles />
   <Helmet>
    <meta charSet="utf-8" />
    <title>yagolopes.com</title>
    <link rel="yagolopes.com" href="http://yagolopes.com" />
   </Helmet>
   <Container>
    <Header />
    <h1>Hello World</h1>
   </Container>
  </React.Fragment>
 )
}
