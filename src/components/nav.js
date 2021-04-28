import React, { useState } from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState("")

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <span class="title is-4">SitesThatJam.com</span>
            {/* <StaticImage
              className=""
              layout="fixed"
              formats={["AUTO", "WEBP", "AVIF"]}
              src="../img/a440-logo.png"
              width={100}
              height={39}
              quality={95}
              alt="A440 Creative Logo"
              placeholder={"blurred"}
            /> */}
          </Link>
          <button
            className={`is-burger navbar-burger burger ${
              toggleNav ? "is-active" : ""
            }`}
            data-target="navbarMenu"
            onClick={() => setToggleNav(!toggleNav)}
            aria-label="Expand Navigation"
            tabIndex={0}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div
          id="navbarMenu"
          className={`navbar-menu ${toggleNav ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <div className="tabs is-right">
              <ul>
                <li>
                  <Link
                    className="navbar-item"
                    to="/"
                    activeClassName="active"
                    activeStyle={{ color: " #F2542D" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="navbar-item"
                    to="/about"
                    activeClassName="active"
                    activeStyle={{ color: " #F2542D" }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="navbar-item"
                    to="/services"
                    activeClassName="active"
                    activeStyle={{ color: " #F2542D" }}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="navbar-item"
                    to="/portfolio"
                    activeClassName="active"
                    activeStyle={{ color: " #F2542D" }}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    className="navbar-item"
                    to="/blog"
                    activeClassName="active"
                    activeStyle={{ color: " #F2542D" }}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="navbar-item"
                    to="/contact"
                    activeStyle={{ color: " #F2542D" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <span className="navbar-item">
                <a
                  className="button is-info"
                  href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html"
                >
                  <span title="Hello from the other side">Get Started</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
