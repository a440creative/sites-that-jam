import * as React from "react"
import { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

const Gallery = ({ gridItems }) => {
  const data = gridItems
  const [hasMounted, setHasMounted] = useState(false)
  const [modalActive, setModalActive] = useState("")
  // const defaultItems = gridItems[0]
  // const defaultImg = getImage(defaultItems.image)
  // const defaultImgAlt = defaultItems.imageAlt
  const length = gridItems.length - 1
  const [current, setCurrent] = useState(0)
  // const currentItem = gridItems[current]
  // const currentImg = getImage(currentItem.image)
  // let [selectedImg, setSelectedImg] = useState(
  //   getImage(gridItems[current].image)
  // )
  const [selectedImg, setSelectedImg] = useState(data[current].image)
  let [selectedImgAlt, setSelectedImgAlt] = useState(data[current].imageAlt)

  console.log("data:", data)
  console.log("hasMounted:", hasMounted)
  // console.log(modalActive)
  console.log("length:", length)
  console.log("current:", current)
  console.log("selected:", selectedImg)
  // console.log(defaultItems)
  // console.log(defaultImg)
  // console.log(defaultImgAlt)

  console.log("selectedImgAlt:", selectedImgAlt)

  // console.log(currentItem)
  // console.log(currentImg)

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
                // const image = getImage(item.image)
                const imageId = item.image.childImageSharp.id
                return (
                  <li className="column is-4" key={imageId}>
                    <GatsbyImage
                      image={getImage(item.image)}
                      role="button"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setModalActive(!modalActive)
                        setSelectedImg(item.image)
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
                    image={getImage(selectedImg)}
                    alt={selectedImgAlt}
                    // style={{ marginBottom: `1.45rem` }}
                  />
                  <div className="gallery-nav-left is-flex">
                    <div className="gallery-inner is-flex is-align-content-stretch is-align-items-center">
                      <FaArrowAltCircleLeft
                        className="gallery-icon has-text-white is-flex is-align-items-center"
                        onClick={() => {
                          setCurrent(current < 1 ? length : current - 1)
                          setSelectedImg(data[current].image)
                        }}
                      />
                    </div>
                  </div>
                  <div className="gallery-nav-right is-flex">
                    <div className="gallery-inner is-flex is-align-content-stretch is-align-items-center">
                      <FaArrowAltCircleRight
                        className="gallery-icon has-text-white is-flex is-align-items-center"
                        onClick={() => {
                          setCurrent(current + 1)
                          setSelectedImg(data[current].image)
                        }}
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
