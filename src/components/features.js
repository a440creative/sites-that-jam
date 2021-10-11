import * as React from "react"
import { Link } from "gatsby"
import { FaFire } from "react-icons/fa"

const Features = ({ gridItems }) => {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="columns is-align-content-stretch">
          {gridItems.map(item => (
            <div key={item.headline} className="column is-flex">
              <div className="card has-text-centered">
                <div className="card-image has-text-centered pt-5">
                  <FaFire />
                </div>
                <div className="card-content mt-0 mr-5 ml-5 mb-6">
                  <div className="content">
                    <h4 className="title is-4">{item.headline}</h4>
                    <p className="is-clipped-4">{item.text}</p>
                    <p className="mt-4">
                      <Link
                        role="button"
                        className="button is-primary"
                        to={`/${item.buttonlink}`}
                      >
                        {item.buttontext}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Features
