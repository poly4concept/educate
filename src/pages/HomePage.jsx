import React from 'react'
import Buttons from '../components/homepage/Buttons'
import heroImg from '../assets/hero.png'
// COMPONENTS
import Search from '../components/homepage/Buttons'
import Reconmended from '../components/homepage/Reconmended'
import Hero from '../components/landingpage/Hero'

const HomePage = () => {
    return (
        <div className="HomePage">
            <img src={heroImg} style={{ visibility: 'hidden', marginBottom: '-600px'}} alt='' />
            <Hero />
            <Buttons />
            <Reconmended/>
        </div>
    )
}

export default HomePage