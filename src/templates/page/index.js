import React from "react"
import { graphql } from "gatsby"
import { Styles } from "./styles"
import { Helmet } from "react-helmet"
import GlobalStyles from "../../styles/globalSyles"
import img from "../../assets/profile.jpg"
export default ({ data }) => {
 const metaData = data.markdownRemark

 return (
  <>
   <GlobalStyles />
   <Styles>
    <Helmet>
     <meta charSet="utf-8" />
     <title>{metaData.frontmatter.title}</title>
     <link rel="yagolopes.com" href="http://yagolopes.com" />
    </Helmet>
    <div>
     <main>
      <header>
       <h1>{metaData.frontmatter.header}</h1>
       <p>{metaData.frontmatter.description}</p>
      </header>
      <section>section</section>
      <footer>footer</footer>
     </main>
     <aside>
      <section>
       <img src={img} alt="Yago Lopes" />
       <span>Yago Lopes</span>
       <button type="button">Contato</button>
      </section>
     </aside>
    </div>
   </Styles>
  </>
 )
}

export const query = graphql`
 query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
   frontmatter {
    title
    header
    description
   }
  }
 }
`
