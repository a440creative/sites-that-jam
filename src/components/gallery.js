import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Gallery = ({ gridItems }) => {
  const [modalActive, setModalActive] = useState("")
  const defaultItems = gridItems[0]
  const defaultImage = getImage(defaultItems.image)
  const defaultImageAlt = defaultItems.imageAlt
  const [selectedImg, setSelectedImg] = useState(defaultImage)
  const [selectedImgAlt, setSelectedImgAlt] = useState(defaultImageAlt)
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <ul className="columns is-mobile is-flex is-flex-wrap-wrap">
              {gridItems.map(item => {
                const image = getImage(item.image)
                const imageId = item.image.childImageSharp.id
                return (
                  <li className="column is-4" key={imageId}>
                    <GatsbyImage
                      image={image}
                      role="button"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setModalActive(!modalActive)
                        setSelectedImg(image)
                        setSelectedImgAlt(item.imageAlt)
                      }}
                      className={"image"}
                      alt={item.imageAlt}
                      tabIndex={0}
                      aria-label="Open Image"
                    />
                  </li>
                )
              })}
              <div
                className={`modal ${
                  modalActive ? "is-active" : "is-not-active"
                }`}
              >
                <div
                  className="modal-background"
                  style={{ cursor: "pointer" }}
                  onClick={() => setModalActive(!modalActive)}
                  onKeyDown={() => setModalActive(!modalActive)}
                  role="button"
                  aria-label="Close Modal"
                  tabIndex={0}
                ></div>
                <div className="modal-content">
                  <GatsbyImage
                    image={selectedImg}
                    alt={selectedImgAlt}
                    style={{ marginBottom: `1.45rem` }}
                  />
                </div>
                <button
                  className="modal-close is-large"
                  aria-label="close"
                  onClick={() => setModalActive(!modalActive)}
                ></button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Gallery
