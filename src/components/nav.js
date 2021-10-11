import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  window.onbeforeunload = function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }
  const [toggleNav, setToggleNav] = useState("")
  return (
    <nav className="navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <span className="title is-4">SitesThatJam.com</span>
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
          <div className="navbar-end is-desktop-menu is-hidden-mobile">
            <div className="tabs is-right">
              <ul>
                <li>
                  <button
                    className="navbar-item button is-ghost"
                    aria-label="Scroll to Top"
                    tabIndex={0}
                    onClick={() => {
                      scrollTo("#top")
                    }}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className="navbar-item button is-ghost"
                    aria-label="Scroll to Top"
                    tabIndex={0}
                    onClick={() => {
                      scrollTo("#about")
                    }}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    className="navbar-item button is-ghost"
                    aria-label="Scroll to Top"
                    tabIndex={0}
                    onClick={() => {
                      scrollTo("#features")
                    }}
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    className="navbar-item button is-ghost"
                    aria-label="Scroll to Top"
                    tabIndex={0}
                    onClick={() => {
                      scrollTo("#gallery")
                    }}
                  >
                    Photo Gallery
                  </button>
                </li>
                <li>
                  <button
                    className="navbar-item button is-ghost"
                    aria-label="Scroll to Top"
                    tabIndex={0}
                    onClick={() => {
                      scrollTo("#services")
                    }}
                  >
                    Services
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end is-tablet-mobile-menu is-hidden-desktop">
            <div className="tabs is-right">
              <ul>
                <li>
                  <button
                    className="nnavbar-item button is-ghost"
                    aria-label="Scroll to Top"
                    tabIndex={0}
                    onClick={() => {
                      scrollTo("#top")
                      setToggleNav(!toggleNav)
                    }}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className="navbar-item button is-ghost"
                    aria-label="Scroll to Top"
                    tabIndex={0}
                    onClick={() => {
                      scrollTo("#about")
                      setToggleNav(!toggleNav)
                    }}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    className="navbar-item button is-ghost"
                    aria-label="Scroll to Top"
                    tabIndex={0}
                    onClick={() => {
                      scrollTo("#features")
                      setToggleNav(!toggleNav)
                    }}
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    className="navbar-item button is-ghost"
                    aria-label="Scroll to Top"
                    tabIndex={0}
                    onClick={() => {
                      scrollTo("#tgallery")
                      setToggleNav(!toggleNav)
                    }}
                  >
                    Photo Gallery
                  </button>
                </li>
                <li>
                  <button
                    className="navbar-item button is-ghost"
                    aria-label="Scroll to Top"
                    tabIndex={0}
                    onClick={() => {
                      scrollTo("#services")
                      setToggleNav(!toggleNav)
                    }}
                  >
                    Services
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
