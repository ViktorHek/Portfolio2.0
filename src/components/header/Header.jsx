import React from 'react'
import './Header.css'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRoute } from 'react-router-dom'
import { animateScroll } from 'react-scroll'
import HamburgerMenu from './HamburgerMenu'
import { useSelector } from 'react-redux'

const Header = () => {
  const { homePage } = useSelector((state) => state)
  return (
    <nav className="main_header_container">
      <LinkRoute to="/">
        <img
          src="/images/doodle_kodak_right.png"
          alt="Home"
          className="header_img"
          onClick={() => animateScroll.scrollToTop()}
        />
      </LinkRoute>
      {homePage === true ? (
        <ul className="header_menu_container">
          <LinkRoute
            to="/"
            className="nav_Link"
            onClick={() => animateScroll.scrollToTop()}
          >
            Home
          </LinkRoute>
          <LinkScroll
            to="what"
            className="nav_Link"
            smooth={true}
            duration={1000}
          >
            What
          </LinkScroll>
          <LinkScroll
            to="who"
            className="nav_Link"
            smooth={true}
            duration={1000}
          >
            Who
          </LinkScroll>
          <LinkScroll
            to="how"
            className="nav_Link"
            smooth={true}
            duration={1000}
          >
            How
          </LinkScroll>
        </ul>
      ) : null}
      <HamburgerMenu />
    </nav>
  )
}

export default Header
