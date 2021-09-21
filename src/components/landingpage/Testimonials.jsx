import React from 'react'
import TestimonialOne from '../../assets/testimonialone.png'
import TestimonialTwo from '../../assets/testimonialtwo.png'
const Testimonials = () => {
    return (
        <div className='testimonial'>
            <h3>Testimonials</h3>
            <div className='testimonial-container'>
                <div className='testimonial-card'>
                    <div className='testimonial-top'>
                        <img src={TestimonialOne} alt="testimonial profile" />
                        <div className='testimonial-info'>
                            <h6>Sayo Williams</h6>
                            <p>Chemistry student</p>
                        </div>
                    </div>
                    <p className='testimonial-text'>I never knew chemistry to be simple</p>
                    <p className='testimonial-text'>as this, Thanks to IWE</p>
                </div>
                <div className='testimonial-card'>
                    <div className='testimonial-top'>
                        <img src={TestimonialTwo} alt="testimonial profile" />
                        <div className='testimonial-info'>
                            <h6>Sayo Williams</h6>
                            <p>Chemistry student</p>
                        </div>
                    </div>
                   <p className='testimonial-text'>I never knew chemistry to be simple</p>
                    <p className='testimonial-text'>as this, Thanks to IWE</p>
                </div>
            </div>
            <div className='ace'>
                <p className='ready'>Are you ready to ace your learning</p>
                <div className='button-container'>
                    <button className="search">Search</button>
                    <button className="upload">Upload</button>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;