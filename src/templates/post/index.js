import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layout"
import { formatDistanceToNow } from "date-fns"
import pt from "date-fns/locale/pt"
import { Style } from "./styles"
export default ({ data }) => {
  const post = data.markdownRemark
  const htmlContent = { __html: post.html }

  return (
    <Layout>
      <Style>
        <article className="content post">
          <h1 className="post-title">{post.frontmatter.title}</h1>
          <div className="post-date">
            <time>
              {formatDistanceToNow(new Date(post.frontmatter.date), {
                locale: pt,
              })}
            </time>
          </div>
          <div dangerouslySetInnerHTML={htmlContent} />
        </article>
      </Style>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
