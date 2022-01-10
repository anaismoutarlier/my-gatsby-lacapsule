import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

function Post({ data }) {
    console.log(data)
    return (
        <div>
            <h1>{ data.contentfulBlogPost.title }</h1>
            {/* <MDXRenderer>{ data.mdx.body }</MDXRenderer> */}
        </div>
    )
}

export const query = graphql`
    query($id: String) {
        contentfulBlogPost(id: { eq: $id }) {
            title
            creationDate
            slug
            id
        }
    }
`

export default Post