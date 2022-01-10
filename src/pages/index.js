import { graphql, Link } from "gatsby"
import * as React from "react"

//COMPONENTS____________________
import Title from "../components/Title"
// markup
const IndexPage = ({ data: { allContentfulBlogPost: { edges: posts } } }) => {
  console.log(posts)
  return (
    <main>
      <Title />
      <ul>
        { posts.map(({ node }) => 
          <li>
            <Link to={ node.slug }>
              { node.title } - { node.creationDate }
            </Link>
          </li> 
        ) }
      </ul>
    </main>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          creationDate(formatString: "DD MMM YYYY")
          id
          slug
        }
      }
    }
  }
`

export default IndexPage
