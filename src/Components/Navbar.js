import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const {
    menu,
    activateMenu,
    closeMenu,
    menuSection,
    highlightCurrentSection,
  } = useGlobalContext()
  return (
    <nav className='navbar'>
      <img src='./assets/shared/logo.svg' alt='space-tourism-logo' />
      <button className='burger-menu' onClick={activateMenu}>
        <img
          src='./assets/shared/icon-hamburger.svg'
          alt='hamburger-menu-icon'
        />
      </button>

      {menu ? (
        <div className='nav-link-holder'>
          <div className='holder-content'>
            <button className='close-btn' onClick={closeMenu}>
              <img src='./assets/shared/icon-close.svg' alt='close-button' />
            </button>
            <div className='links-parent'>
              <Link
                to='/'
                className={`${
                  menuSection === '00 HOME'
                    ? 'nav-link clicked-nav-link mobile-clicked-nav-link'
                    : 'nav-link'
                }`}
                onClick={(closeMenu, highlightCurrentSection)}
              >
                <span>00</span> HOME
              </Link>
              <Link
                to='/destination'
                className={`${
                  menuSection === '01 DESTINATION'
                    ? 'nav-link clicked-nav-link mobile-clicked-nav-link'
                    : 'nav-link'
                }`}
                onClick={(closeMenu, highlightCurrentSection)}
              >
                <span>01</span> DESTINATION
              </Link>
              <Link
                to='/crew'
                className={`${
                  menuSection === '02 CREW'
                    ? 'nav-link clicked-nav-link mobile-clicked-nav-link'
                    : 'nav-link'
                }`}
                onClick={(closeMenu, highlightCurrentSection)}
              >
                <span>02</span> CREW
              </Link>
              <Link
                to='/technology'
                className={`${
                  menuSection === '03 TECHNOLOGY'
                    ? 'nav-link clicked-nav-link mobile-clicked-nav-link'
                    : 'nav-link'
                }`}
                onClick={(closeMenu, highlightCurrentSection)}
              >
                <span>03</span> TECHNOLOGY
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default Navbar
