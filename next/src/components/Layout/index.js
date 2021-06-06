import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { useHeaderStore } from '../../stores/header'

import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ homepage, children }) => {
  const { scrollHeader, setScrollHeader } = useHeaderStore()
  const [mode, setMode] = useState('light')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const checkModeCookie = (cname) => {
    const name = `${cname}=`
    const allCookies = document.cookie.split(';')
    for(let i = 0; i < allCookies.length; i++) {
      let cookie = allCookies[i]
      while (cookie.charAt(0) === " ") { cookie = cookie.substring(1, cookie.length) }
      if (cookie.indexOf(name) === 0) {
        setMode(cookie.substring(name.length,cookie.length))
      }
    }
  }

  const setModeCookie = (mode) => {
    const date = new Date()
    date.setTime(date.getTime() + (365*24*60*60*1000))
    const expires = "expires=" + date.toUTCString()
    document.cookie = `preferredMode=${mode}; ${expires}; path=/`
  }

  const ToggleMode = () => {
    const updatedMode = mode === "light" ? "dark" : "light"
    setModeCookie(updatedMode)
    setMode(updatedMode)
  }

  const ToggleMobileMenu = (ref) => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavReset = (ref) => {
    setMobileMenuOpen(false)
  }

  const handleScroll = () => {
    const scrollPosY = window.scrollY
    if (scrollPosY > 10 && !scrollHeader) setScrollHeader(true)
    if (scrollPosY < 10 && scrollHeader) setScrollHeader(false)
  }

  useEffect(() => {
    checkModeCookie("preferredMode")
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
      <Helmet
        bodyAttributes={{
          theme: mode,
          mobileMenuOpen: mobileMenuOpen
        }}
      />
      <Header
        handleMode={ToggleMode}
        mode={mode}
        handleMobileMenu={ToggleMobileMenu}
        mobileMenuOpen={mobileMenuOpen}
        resetMobileNav={handleNavReset}
      />
      <main>
        {children}
        {homepage && (
          <div className="pageShape">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 1366 424.2" enableBackground="new 0 0 1366 424.2">
              <path d="M1366,0v94.3c-21.6-4.5-43.1-10.5-63.5-16.9c-75.1-23.7-158.2-50.6-229.9-18c-81.1,37-117.4,137.9-197.7,176.8
              c-68.3,33.1-148.8,12.7-224,1.8C421,204.9,178.5,275.4,0.5,424.2L0,0H1366z"/>
              <path fill="url(#pattern)" d="M1366,51.1v43c-21.6-4.5-43.1-10.5-63.5-16.9c-75.1-23.7-158.2-50.6-229.9-18
              c-75.6,34.4-112.2,124.4-181.7,168c69.8-51.7,106.1-176.5,181.7-211c71.7-32.6,154.8-5.7,229.9,18
              C1322.9,40.6,1344.4,46.6,1366,51.1z"/>
            </svg>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  homepage: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Layout
