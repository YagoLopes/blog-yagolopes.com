import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { formatDistanceToNow } from "date-fns"
import pt from "date-fns/locale/pt"
export default ({ data }) => {
  const post = data.markdownRemark
  const htmlContent = { __html: post.html }

  return (
    <Layout>
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
