import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/bmw/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulPost.edges
  const sectionsLeftText = data.allContentfulSectionLeftText.edges
  const sectionsRightText = data.allContentfulSectionRightText.edges

  
  return (
    <Layout sectionsLeftText={sectionsLeftText} sectionsRightText={sectionsRightText} location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
          edges {
            node {
              title
              slug
              content {
                json
              }
            }
          }
        }

     allContentfulPage {
          edges {
            node {
              slug
              title
            }
          }
        }

     allContentfulSectionLeftText {
      edges {
        node {
          title
          content {
            json
          }
          image {
            file {
              url
            }
          }
        }
      }
    }


      allContentfulSectionRightText {
        edges {
          node {
            title
            content {
              json
            }
            image {
              file {
                url
              }
            }
          }
        }
      }
        
  }
`
