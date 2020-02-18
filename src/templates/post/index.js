import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
export default ({ data }) => {
  const post = data.markdownRemark
  const htmlContent = { __html: post.html }

  return (
    <Layout>
      <article className="content post">
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <div className="post-date">
          <time>{post.frontmatter.date}</time>
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
