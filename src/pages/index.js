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

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        return (
          <article key={node.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(node.content.json).substring(0,120),
                }}
              />
            </section>
          </article>
        )
      })}
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
        
  }
`
