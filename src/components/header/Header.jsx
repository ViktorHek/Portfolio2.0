import React from 'react'
import './Header.css'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRoute } from 'react-router-dom'
import { animateScroll } from 'react-scroll'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {
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
        <LinkScroll to="who" className="nav_Link" smooth={true} duration={1000}>
          Who
        </LinkScroll>
        <LinkScroll to="how" className="nav_Link" smooth={true} duration={1000}>
          How
        </LinkScroll>
      </ul>
      <HamburgerMenu />
    </nav>
  )
}

export default Header
