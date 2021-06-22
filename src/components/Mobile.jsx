import React from 'react'

// IMAGES
const mobileImage = `https://res.cloudinary.com/devsource/image/upload/v1624305641/cmo/photo-mobile-app-upsell_2x_rcxfht.jpg` 
const apple = `https://res.cloudinary.com/devsource/image/upload/v1624309555/cmo/apple-removebg-preview_ouw63n.png`
const google = `https://res.cloudinary.com/devsource/image/upload/v1624309555/cmo/google-removebg-preview_gjbq9o.png`



const Mobile = () => {
    return (
        <div className="mobile">
            <div className="mobile-center">
                <div className="mobile-left">
                    <img src={mobileImage} alt="mobile"/>
                </div>

                <div className="mobile-right">
                    <div className="mobile-right-center">
                        <h4>AVAILABLE NOW</h4>
                        <h2>Cheap Medical Operations App</h2>
                        <p>Start and manage fundraisers, engage with supporters, and discover important causes — all on the go</p>
                        <div className="mobile-button">
                            <img src={google} alt="googleplay"/>
                            <img src={apple} alt="apple"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile
