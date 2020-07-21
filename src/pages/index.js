import React from "react"
import GlobalSyles, { Container } from "../styles/portfolioSyles"
import Header from "../components/Portfolio/Header"
import { Helmet } from "react-helmet"
import ListProjects from "../components/Portfolio/ListProjects"

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
    <ListProjects />
   </Container>
  </React.Fragment>
 )
}
