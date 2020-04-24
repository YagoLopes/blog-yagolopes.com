import React from "react"
import { graphql } from "gatsby"
import { Styles } from "./styles"
import { Helmet } from "react-helmet"
import GlobalStyles from "../../styles/globalSyles"
import img from "../../assets/profile.jpg"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import twitter from "../../assets/twitter.svg"
import gmail from "../../assets/gmail.svg"
import fragata from "../../assets/fragata.png"
import instaRocket from "../../assets/instaRocket.png"
import jshunt from "../../assets/jshunt.png"
import tindev from "../../assets/tindev.png"
import twitterClone from "../../assets/twitter.png"
import rocketbox from "../../assets/rocketbox.png"
import blog from "../../assets/blog.png"
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
       <h1>{metaData.frontmatter.headerAbout}</h1>
       <p>{metaData.frontmatter.about}</p>
      </header>
      <section>
       <h1>{metaData.frontmatter.headerFragata}</h1>
       <a href="http://fragatacorp.com.br/">
        <img src={fragata} alt="Fragata corp" />
       </a>
       <p>{metaData.frontmatter.fragata}</p>
      </section>
      <section>
       <h1>{metaData.frontmatter.headerRocketseat}</h1>
       <section>
        <img src={instaRocket} alt="Insta Rocket" />
        <img src={jshunt} alt="JS Hunt" />
        <img src={twitterClone} alt="Twitter" />
        <img src={tindev} alt="Tindev" />
        <img src={rocketbox} alt="Tindev" />
       </section>
       <p>{metaData.frontmatter.rocketseat}</p>
       <sapn>
        Todos esses projetos e vários outros você pode ver atravez do link{" "}
        <a href="https://codesandbox.io/u/YagoLopes/sandboxes">
         https://codesandbox.io/u/YagoLopes/sandboxes
        </a>
       </sapn>
      </section>
      <section>
       <h1>{metaData.frontmatter.headerBlog}</h1>
       <a href="http://yagolopes.com/">
        <img src={blog} alt="Blog yagolopes.com" />
       </a>
       <p>
        {metaData.frontmatter.blog}{" "}
        <a href="http://yagolopes.com/">yagolopes.com</a>
       </p>
      </section>
      <footer>
       <h1>{metaData.frontmatter.headerThanks}</h1>
       <img alt="Feliz" src="https://api.adorable.io/avatars/72" />
       <p>{metaData.frontmatter.thanks}</p>
       <nav>
        <a href="##">
         <img src={github} alt="Github" />
        </a>
        <a href="##">
         <img src={linkedin} alt="linkedin" />
        </a>
        <a href="##">
         <img src={gmail} alt="gmail" />
        </a>
        <a href="##">
         <img src={twitter} alt="twitter" />
        </a>
       </nav>
      </footer>
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
    headerAbout
    about
    headerThanks
    thanks
    headerFragata
    fragata
    headerRocketseat
    rocketseat
    headerBlog
    blog
   }
  }
 }
`
