import React, { createContext, useState } from "react"
import PropTypes from "prop-types"

export const PostContext = createContext()

export default function PostContextProvider({ children, payload }) {
 const [posts, setPosts] = useState(payload)

 return (
  <PostContext.Provider value={{ posts, setPosts }}>
   {children}
  </PostContext.Provider>
 )
}

PostContextProvider.propTypes = {
 children: PropTypes.node.isRequired,
 payload: PropTypes.shape({
  fields: PropTypes.shape({
   slug: PropTypes.string,
  }).isRequired,
  frontmatter: PropTypes.shape({
   layout: PropTypes.string,
   title: PropTypes.string,
   header: PropTypes.string,
   date: PropTypes.string,
   author: PropTypes.string,
   description: PropTypes.string,
   thumbnail: PropTypes.string,
   tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
 }),
}
