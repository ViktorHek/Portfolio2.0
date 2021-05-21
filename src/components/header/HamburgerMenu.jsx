import React, { useState } from 'react'
import { Link as LinkRoute } from 'react-router-dom'
import './Header.css'

const HamburgerMenu = () => {
  const [isClicked, setIsClicked] = useState(false)

  const hamburgerToggle = () => setIsClicked(!isClicked)
  const closeHamburger = () => setIsClicked(false)

  return (
    <div
      className={
        isClicked ? 'hamburger_menu_container_active' : 'hamburger_container'
      }
      onClick={hamburgerToggle}
    >
      {isClicked ? (
        <>
          <div className="Xit_icon_container">
            <img
              src="images/Xit.png"
              alt="Exit"
              onClick={closeHamburger}
              className="Xit_icon"
            />
          </div>
          <div className="hamburger_menu_container">
            <ul className="hamburger_links_container">
              <li>
                <LinkRoute
                  to="/"
                  className="hamburger_link"
                  onClick={closeHamburger}
                >
                  Home
                </LinkRoute>
              </li>
              <li>
                <LinkRoute
                  to="/CV"
                  className="hamburger_link"
                  onClick={closeHamburger}
                >
                  CV
                </LinkRoute>
              </li>
              <li>
                <LinkRoute
                  to="/fun"
                  className="hamburger_link"
                  onClick={closeHamburger}
                >
                  Fun!
                </LinkRoute>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <img
          src="images/hamburger_menu_border_new.png"
          alt="Menu"
          className="hamburger_img"
        />
      )}
    </div>
  )
}

export default HamburgerMenu
