import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderMedium from "../components/headerMedium"
import PhotoLeft from "../components/photo-left"

const AboutPageTemplate = ({ data, location }) => {
  const page = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const image = getImage(page.frontmatter.image)
  const hero = page.frontmatter.hero
  const main = page.frontmatter.main
  const mainimage = getImage(main.image)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={page.frontmatter.title}
        description={page.frontmatter.description || page.excerpt}
      />
      <HeaderMedium
        image={image}
        headline={hero.headline}
        subheadline={hero.subheadline}
        buttontext={hero.buttontext}
        buttonlink={hero.buttonlink}
      />
      <PhotoLeft
        image={mainimage}
        imageAlt={main.imageAlt}
        title={main.title}
        text={main.text}
        buttontext={main.buttontext}
        buttonlink={main.buttonlink}
      />
    </Layout>
  )
}

export default AboutPageTemplate

export const pageQuery = graphql`
  query AboutPageBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(
              quality: 70
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        imageAlt
        hero {
          buttonlink
          buttontext
          headline
          subheadline
        }
        main {
          buttonlink
          buttontext
          text
          title
          image {
            childImageSharp {
              gatsbyImageData(
                transformOptions: { cropFocus: CENTER }
                quality: 95
                aspectRatio: 1.7
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          imageAlt
        }
      }
    }
  }
`
