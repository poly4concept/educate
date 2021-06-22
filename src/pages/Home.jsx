import React from 'react'

// COMPONENTS
import Hero from '../components/Hero'
import Believe from '../components/Believe'
import Three from '../components/Three'
import SubComponent from '../components/SubComponent'
import Testimonials from '../components/Testimonials'
import Help from '../components/Help'
import Own from '../components/Own'
import Mobile from '../components/Mobile'



const Home = () => {
    return (
        <div className="home">
           <Hero/>
           <Believe/>
           <Three/>
           <SubComponent/>
           <Help/>
           <Own/>
           <Testimonials/>
           <Mobile/>
        </div>
    )
}

export default Home
