import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Features from "../components/features"
import Gallery from "../components/gallery"
import PhotoLeft from "../components/photo-left"
import Services from "../components/services"

const IndexPageTemplate = ({ data, location }) => {
  const page = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const image = getImage(page.frontmatter.image)
  const hero = page.frontmatter.hero
  const features = page.frontmatter.features
  const main = page.frontmatter.main
  const mainimage = getImage(main.image)
  const gallery = data.allFile
  const services = page.frontmatter.services

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={page.frontmatter.title}
        description={page.frontmatter.description || page.excerpt}
      />
      <Header
        image={image}
        headline={hero.headline}
        subheadline={hero.subheadline}
        buttontext={hero.buttontext}
        buttonlink={hero.buttonlink}
      />
      <Features gridItems={features.blurbs} />
      <PhotoLeft
        image={mainimage}
        imageAlt={main.imageAlt}
        title={main.title}
        text={main.text}
        buttontext={main.buttontext}
        buttonlink={main.buttonlink}
      />
      <Gallery gridItems={gallery} />
      <Services title={services.title} gridItems={services.blurbs} />
    </Layout>
  )
}

export default IndexPageTemplate

export const pageQuery = graphql`
  query IndexPageBySlug($id: String!) {
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
        features {
          blurbs {
            buttontext
            buttonlink
            text
            headline
          }
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
        imageGallery {
          title
        }
        services {
          title
          blurbs {
            buttontext
            buttonlink
            text
            headline
          }
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      edges {
        node {
          name
          id
          relativePath
          childImageSharp {
            gatsbyImageData(
              transformOptions: { cropFocus: CENTER }
              layout: CONSTRAINED
              placeholder: BLURRED
              quality: 70
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
