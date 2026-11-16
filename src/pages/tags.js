import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

// Utilities
const tagSlug = (tag) => tag.toLowerCase().replace(/\s+/g, '-')



const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <div>
    <div>
      <h1>Tags</h1>
      <ul>
        {group.map((tag, i) => (
          <li key={tag.fieldValue + i.toString()}>
            <Link to={`/tags/${tagSlug(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const Head = ({ data }) => <title>{data.site.siteMetadata.title}</title>

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: {frontmatter: {tags: SELECT}}) {
        fieldValue
        totalCount
      }
    }
  }
`