  
import React, { useState } from 'react'

// PACKAGES
import { Link, NavLink } from 'react-router-dom'
import { BiMenuAltRight } from "react-icons/bi"
import { FaTimesCircle } from "react-icons/fa"

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

                <Link to="/" className='logo'>
                   EDUCATE
                </Link>



            <div className="menu" onClick={() => setMenu(!menu)}>
                <BiMenuAltRight /> 
            </div>

            <ul className="header-link" style={styleMenu} onClick={() => setMenu(!menu)}>
                <li>
                    <NavLink exact to="/question" className="link" activeClassName="link-active">Ask Question</NavLink>
                </li>
                <li>
                    <NavLink to="/material" className="link" activeClassName="link-active">Access Materials</NavLink>
                </li>
                <li>
                    <NavLink to="/how" className="link" activeClassName="link-active">Expert Support</NavLink>
                </li>
                <li>
                    <NavLink to="/test" className="link" activeClassName="link-active">Take a test</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="link" activeClassName="link-active">Signup</NavLink>
                </li>

                <li onClick={() => setMenu(!menu)}>
                    <FaTimesCircle className="close-menu" />
                </li>

            </ul>
        </header>
    )
}

export default Navbar