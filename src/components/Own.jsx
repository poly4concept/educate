import React from 'react'

// PACKAGES
import { Link } from 'react-router-dom'

const Own = () => {
    return (
        <div className="own">
            <div className="own-center">
                <div className="own-left">
                    <div className="own-left-center">
                        <div className="underline"></div>
                        <h3>Become a <span style={{color:"var(--red)"}}>Volunteer</span> of CHEAP <span style={{color:"var(--red)"}}>MEDICAL</span> OPERATIONS</h3>
                        <p>We are the powerful free fundraising platform</p>
                        <Link to="/sign_in">
                            <button>Donate Now</button>
                        </Link>
                    </div> 
                </div>

                <div className="own-right">
                    <div className="own-right-center" data-aos="fade-i" data-aos-once="true">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Own