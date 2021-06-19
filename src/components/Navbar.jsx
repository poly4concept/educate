  
import React, { useState } from 'react'

// PACKAGES
import { Link, NavLink } from 'react-router-dom'
import { BiMenuAltRight } from "react-icons/bi"
import { FaTimesCircle } from "react-icons/fa"

// IMAGES
// IMAGES
import logo from '../assets/logo.svg'


const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const [navbar, setNavbar] = useState(false);

    // Changing the navbar color on scroll
    const changeBackground = () => {
      if(window.scrollY >= 80){
        setNavbar(true)
      }
      else{
        setNavbar(false)
      }
    }
  
    window.addEventListener('scroll', changeBackground)

    const styleMenu = {
        left: menu ? 0 : "-100%",
    }

    return (
        <header className={navbar ? 'navbar active' : 'navbar'}>

            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
            </div>

            <div className="menu" onClick={() => setMenu(!menu)}>
                <BiMenuAltRight/> 
            </div>

            <ul className="header-link" style={styleMenu} onClick={() => setMenu(!menu)}>
                <li>
                    <NavLink exact to="/" className="link" activeClassName="link-active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="link" activeClassName="link-active">About</NavLink>
                </li>
                <li>
                    <NavLink to="/subsidiaries" className="link" activeClassName="link-active">Subsidiaries</NavLink>
                </li>
                <li>
                    <NavLink to="/gallery" className="link" activeClassName="link-active">Gallery</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="link" activeClassName="link-active">Contact</NavLink>
                </li>

                <li onClick={() => setMenu(!menu)}>
                    <FaTimesCircle className="close-menu" />
                </li>

            </ul>
        </header>
    )
}

export default Navbar