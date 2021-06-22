  
import React, { useState } from 'react'

// PACKAGES
import { Link, NavLink } from 'react-router-dom'
import { BiMenuAltRight } from "react-icons/bi"
import { FaSearch, FaTimesCircle } from "react-icons/fa"


// IMAGES
import logo from '../assets/ikons.png'


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

            <div className={navbar ? 'search search-active' : 'search'}>
                <FaSearch className="search-icon"/>
                <input type="text" placeholder="Search CMO"/>
            </div>

            <div className="menu" onClick={() => setMenu(!menu)}>
                <BiMenuAltRight /> 
            </div>

            <ul className="header-link" style={styleMenu} onClick={() => setMenu(!menu)}>
                <li>
                    <NavLink exact to="/" className="link" activeClassName="link-active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/sign_up" className="link" activeClassName="link-active">Request help</NavLink>
                </li>
                <li>
                    <NavLink to="/how" className="link" activeClassName="link-active">How it works</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="link" activeClassName="link-active">Contact us</NavLink>
                </li>
                <li>
                    <NavLink to="/donation" className="link color" activeClassName="link-active">Start Donation</NavLink>
                </li>

                <li onClick={() => setMenu(!menu)}>
                    <FaTimesCircle className="close-menu" />
                </li>

            </ul>
        </header>
    )
}

export default Navbar