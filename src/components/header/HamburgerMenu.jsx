import React, { useState } from 'react'
import { Link as LinkRoute } from 'react-router-dom'
import './Header.css'
import {useDispatch} from 'react-redux'

const HamburgerMenu = () => {
  const dispatch = useDispatch()
  const [isClicked, setIsClicked] = useState(false)

  const hamburgerToggle = () => setIsClicked(!isClicked)
  const closeHamburger = () => setIsClicked(false)

  const clickOnHome = () => {
    closeHamburger()
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: true
    })
  }

  const clickOnOther = () => {
    closeHamburger()
    dispatch({
      type: "SET_CURRENT_PAGE",
      payload: false
    })
  }

  return (
    <div
      className={
        isClicked ? 'hamburger_menu_container_active' : 'unuced_className'
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
                  onClick={clickOnHome}
                >
                  Home
                </LinkRoute>
              </li>
              <li>
                <LinkRoute
                  to="/CV"
                  className="hamburger_link"
                  onClick={clickOnOther}
                >
                  CV
                </LinkRoute>
              </li>
              <li>
                <LinkRoute
                  to="/fun"
                  className="hamburger_link"
                  onClick={clickOnOther}
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
