import React from 'react'

// PACKAGES
import {Link} from 'react-router-dom'

// COMPONENTS


// IMAGES
import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer> 
            <div className="footers">
                <div className="footer">
                    <img src={logo} alt="footer-pic" />
                    <h5>We are powerful free fundraising platform</h5>
                </div>
                <div className="footer">
                    <h4>LEARN MORE</h4>
                    <p>How CMO Works</p>
                    <p>Common Questions</p>
                    <p>Success Stories</p>
                    <p>Supported Contries</p>
                </div>
                <div className="footer">
                    <h4>RESOURCES</h4>
                    <p>Help Center</p>
                    <p>CMO Stories</p>
                    <p>Press Center</p>
                    <p>Carriers</p>
                </div>
                <div className="footer">
                <h4>OUR LINKS</h4>
                  <p>Home</p>
                  <p>About</p>
                  <p>Request Help</p>
                  <p>Contact Us</p>
                </div>
            </div>
            <div className="small">copyright &copy; {new Date().getFullYear()}, All Rights Reserved</div>
        </footer>
    )
}

export default Footer