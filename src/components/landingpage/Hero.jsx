import React from 'react'
import heroImg from '../../assets/hero.png'
// COMPONENTS


const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <div className="hero-left-center">
                    <h1>Study Book and Resources</h1>
                    <h1>All in one shelf</h1>
                    <p>Study with IWE</p>
                    <p>Search for books and resources</p>
                    <div className='inputContain'>
                        <input value='find any topic you want' />
                        <button className='searchforhero' type='button'>Search</button>
                    </div>
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
