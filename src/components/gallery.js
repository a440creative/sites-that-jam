import * as React from "react"
import { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

const Gallery = ({ gridItems }) => {
  const [hasMounted, setHasMounted] = useState(false)
  const defaultItems = gridItems[0]
  const defaultImage = getImage(defaultItems.image)
  const defaultImageAlt = defaultItems.imageAlt
  let [selectedImg, setSelectedImg] = useState(defaultImage)
  let [selectedImgAlt, setSelectedImgAlt] = useState(defaultImageAlt)
  const [modalActive, setModalActive] = useState("")
  const length = gridItems.length - 1
  const [current, setCurrent] = useState(0)
  const currentItem = gridItems[current]
  const currentImg = getImage(currentItem.image)

  console.log(current)
  console.log(selectedImg)

  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }
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
                        // setCurrent(current)
                      }}
                      className={"image"}
                      alt={item.imageAlt}
                      tabIndex={0}
                      aria-label="Open Image"
                    />
                  </li>
                )
              })}
              <div className={`modal ${modalActive ? "is-active" : ""}`}>
                <div
                  className="modal-background"
                  style={{ cursor: "pointer" }}
                  onClick={() => setModalActive(!modalActive)}
                  onKeyDown={() => setModalActive(!modalActive)}
                  role="button"
                  aria-label="Close Modal"
                  tabIndex={0}
                ></div>
                <div className="">
                  <GatsbyImage
                    className={"image"}
                    image={currentImg}
                    alt={selectedImgAlt}
                    // style={{ marginBottom: `1.45rem` }}
                  />
                  <div className="gallery-nav-left is-flex">
                    <div className="gallery-inner is-flex is-align-content-stretch is-align-items-center">
                      <FaArrowAltCircleLeft
                        className="gallery-icon has-text-white is-flex is-align-items-center"
                        onClick={() =>
                          setCurrent(current < 1 ? length : current - 1)
                        }
                      />
                    </div>
                  </div>
                  <div className="gallery-nav-right is-flex">
                    <div className="gallery-inner is-flex is-align-content-stretch is-align-items-center">
                      <FaArrowAltCircleRight
                        className="gallery-icon has-text-white is-flex is-align-items-center"
                        onClick={() =>
                          setCurrent(current === length ? 0 : current + 1)
                        }
                      />
                    </div>
                  </div>
                </div>
                <button
                  style={{ zIndex: "60" }}
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
