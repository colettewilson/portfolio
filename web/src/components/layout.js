import React, { Component } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"

import "../_global/base.scss"
import "../_global/grid.scss"
import "./layout.scss"

class Layout extends Component {
  state = {
    mode: "light",
    mobileMenuOpen: false
  }

  componentDidMount = () => {
    this.checkModeCookie("preferredMode")
  }

  checkModeCookie = (cname) => {
    const name = `${cname}=`
    const allCookies = document.cookie.split(';')
    for(let i = 0; i < allCookies.length; i++) {
      let cookie = allCookies[i]
      while (cookie.charAt(0) === " ") { cookie = cookie.substring(1, cookie.length) }
      if (cookie.indexOf(name) === 0) {
        this.setState(state => {
          return {
            mode: cookie.substring(name.length,cookie.length)
          }
        })
      }
    }
  }

  setModeCookie = (mode) => {
    const date = new Date()
    date.setTime(date.getTime() + (365*24*60*60*1000))
    const expires = "expires=" + date.toUTCString()
    document.cookie = `preferredMode=${mode}; ${expires}; path=/`
  }

  ToggleMode = () => {
    const mode = this.state.mode === "light" ? "dark" : "light"
    this.setModeCookie(mode)
    this.setState(state => {
      return {
        mode: mode
      }
    })
  }

  ToggleMobileMenu = (ref) => {
    this.setState(state => {
      return {
        mobileMenuOpen: !state.mobileMenuOpen
      }
    })
  }

  handleNavReset = (ref) => {
    this.setState(state => {
      return {
        mobileMenuOpen: false
      }
    })
  }

  render(props) {
    return (
      <>
        <Helmet
          bodyAttributes={{
            theme: this.state.mode,
            mobileMenuOpen: this.state.mobileMenuOpen
          }}
        />
        <Header
          handleMode={this.ToggleMode}
          mode={this.state.mode}
          handleMobileMenu={this.ToggleMobileMenu}
          mobileMenuOpen={this.state.mobileMenuOpen}
          resetMobileNav={this.handleNavReset}
        />
        <main>
          {this.props.children}
          {this.props.homepage && <div className="pageShape">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               viewBox="0 0 1366 424.2" enableBackground="new 0 0 1366 424.2">
              <defs>
                <pattern id="pattern" patternUnits="userSpaceOnUse" width="10" height="2" patternTransform="rotate(-45)">
                  <line x1="0" y="0" x2="0" y2="10" stroke="var(--bg-secondary-color)" strokeWidth="4" />
                </pattern>
              </defs>
              <path d="M1366,0v94.3c-21.6-4.5-43.1-10.5-63.5-16.9c-75.1-23.7-158.2-50.6-229.9-18c-81.1,37-117.4,137.9-197.7,176.8
              c-68.3,33.1-148.8,12.7-224,1.8C421,204.9,178.5,275.4,0.5,424.2L0,0H1366z"/>
              <path fill="url(#pattern)" d="M1366,51.1v43c-21.6-4.5-43.1-10.5-63.5-16.9c-75.1-23.7-158.2-50.6-229.9-18
              c-75.6,34.4-112.2,124.4-181.7,168c69.8-51.7,106.1-176.5,181.7-211c71.7-32.6,154.8-5.7,229.9,18
              C1322.9,40.6,1344.4,46.6,1366,51.1z"/>
            </svg>
          </div>}
        </main>
        <Footer />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
