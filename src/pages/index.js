import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/bmw/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const BlogIndex = ({ data, location }) => {
  const siteTitle = 'See New BMW'
  const posts = data.allContentfulPost.edges
  const MainPageSections = data.contentfulPage.content
  const pages = data.allContentfulPage.edges
  
  return (
    <Layout MainPageSections={MainPageSections} location={location} title={siteTitle}>
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
      contentfulPage(slug: {eq: "main-page"}) {
        title
        content {
          ... on ContentfulSectionLeftText {
            title
            image {
              file {
                url
              }
            }
            content {
              json
            }
          }
          ... on ContentfulSectionRightText {
            title
            image {
              file {
                url
              }
            }
            content {
              json
            }
          }
        }
      }
        
  }
`