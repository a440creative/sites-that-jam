import * as React from "react"
import { BgImage } from "gbimage-bridge"
import { Link } from "gatsby"

const Header = ({ image, headline, subheadline, buttontext, buttonlink }) => {
  return (
    <BgImage
      Tag="header"
      id="top"
      className="hero is-primary is-large is-bold"
      image={image}
      style={{ backgroundPosition: "center left" }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-head"></div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-5 is-offset-7 is-narrow">
              <h1 className="title is-1">{headline}</h1>
              <p className="subtitle">{subheadline}</p>
              <p>
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
      </div>
    </BgImage>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
