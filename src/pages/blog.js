import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"

const BlogPage = () => {

  const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
  `)
  return (
    <Layout>
      <section>
        <h1>Gatsby Blog Page</h1>
        <p>Contact To <Link to="/contact">Link</Link></p>
        <ol>
            {data.allMarkdownRemark.edges.map((edge) => {
              return (
                <li>
                  <Link to={`${edge.node.fields.slug}`}>
                    <h2>{edge.node.frontmatter.title}</h2>
                    <p>{edge.node.frontmatter.date}</p>
                  </Link>
                </li>
              )
            })
          }
        </ol>
      </section>
    </Layout>
  )
}

export default BlogPage