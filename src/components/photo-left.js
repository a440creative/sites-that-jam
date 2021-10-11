import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const PhotoLeft = ({
  image,
  imageAlt,
  title,
  text,
  buttonlink,
  buttontext,
}) => {
  return (
    <section id="about" className="section  has-background-light">
      <div className="container">
        <div className="columns is-variable is-1-mobile is-2-tablet is-3-desktop is-8-widescreen is-3-fullhd">
          <div className="column">
            <GatsbyImage image={image} alt={imageAlt} />
          </div>
          <div className="column">
            <h3 className="title">{title}</h3>
            <p className="is-clipped-4">{text}</p>
            <p className="mt-4">
              <Link
                role="button"
                className="button is-primary"
                to={`/${buttonlink}`}
              >
                {buttontext}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default PhotoLeft
