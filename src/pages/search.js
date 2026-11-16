import React from "react"
import Layout from "../components/Layout"

// Components
import { Link, navigate, graphql } from "gatsby"
import SearchPosts from "../components/SearchPosts"

const SearchPage = (props) => {

    const localSearchBlog = props.data.localSearchBlog;
    const posts = props.data.allMarkdownRemark.nodes;
    const location = props.location;
    const navigation = props.navigate;

    return (
        <Layout>
            <div>
                <h1>Search</h1>
                <SearchPosts
                    posts={posts}
                    localSearchBlog={localSearchBlog}
                    navigate={navigation}
                    location={location}
                /> 
            </div>
        </Layout>
    )
}

// SearchPage.propTypes = {
//     data: PropTypes.shape({
//         allMarkdownRemark: PropTypes.shape({
//             group: PropTypes.arrayOf(
//                 PropTypes.shape({
//                     fieldValue: PropTypes.string.isRequired,
//                     totalCount: PropTypes.number.isRequired,
//                 }).isRequired
//             ),
//         }),
//         site: PropTypes.shape({
//             siteMetadata: PropTypes.shape({
//                 title: PropTypes.string.isRequired,
//             }),
//         }),
//     }),
// }

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
        index
        store
    }
    allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
          }
          fields {
              slug
            }
        }
      }
  }
`
export default SearchPage

export const Head = () => <title>Search</title>
