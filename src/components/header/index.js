import React from "react"
import { Styles } from "./styles"
import { useStaticQuery, graphql, Link } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          pathUrl
          author
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <Styles>
      <aside>
        <Link to="/" className="title">
          {title}
        </Link>
      </aside>
      <nav>
        <Link to="/" className="pageTitle">
          Contato
        </Link>
        <Link to="/" className="pageTitle">
          Posts
        </Link>
      </nav>
    </Styles>
  )
}

export default Header
