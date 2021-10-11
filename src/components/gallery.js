import * as React from "react"
import { SRLWrapper } from "simple-react-lightbox"
import { GatsbyImage } from "gatsby-plugin-image"
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

const Gallery = ({ gridItems }) => {
  const data = gridItems
  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered">
            <h3 className="title">Photo Gallery</h3>
          </div>
        </div>
        <div className="columns">
          <div className="slr column">
            <SRLWrapper>
              {data.edges.map((e, index) => {
                const id = e.node.id
                return (
                  <a
                    key={id}
                    className="column is-4 p-2"
                    href={
                      data.edges[index].node.childImageSharp.gatsbyImageData
                        .images.fallback.src
                    }
                  >
                    <GatsbyImage
                      image={e.node.childImageSharp.gatsbyImageData}
                      alt={e.node.name}
                    />
                  </a>
                )
              })}
            </SRLWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
