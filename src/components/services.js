import React from "react"
import { Link } from "gatsby"
import { FaFire } from "react-icons/fa"

const Services = ({ title, gridItems }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered">
            <h3 className="title">{title}</h3>
          </div>
        </div>

        <div className="columns is-align-content-stretch is-tablet is-flex is-flex-wrap-wrap">
          {gridItems.map(item => (
            <div key={item.headline} className="column is-4 is-flex">
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
                        className="button is-primary is-small"
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
export default Services
