import React from 'react'

// COMPONENTS


// IMAGES
const heroImg = `https://res.cloudinary.com/devsource/image/upload/v1624195436/cmo/Frame_3_l2skom.png`

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <div className="hero-left-center">
                    <h1>Fundraising for the people and causes you care</h1>
                    <p>We provide a trusted donation channel for people who need aid with medical expenses or rehabilitation</p>
                    <button>Foot a Bill</button>
                </div>
            </div>

            <div className="hero-right">
               <div className="hero-right-center">
                    <img src={heroImg} alt="hero-right-pic"/>
               </div>
            </div>
        </div>
    )
}

export default Hero
