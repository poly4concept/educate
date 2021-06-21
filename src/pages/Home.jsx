import React from 'react'

// COMPONENTS
import Hero from '../components/Hero'
import Believe from '../components/Believe'
import Three from '../components/Three'
import SubComponent from '../components/SubComponent'

const Home = () => {
    return (
        <div className="home">
           <Hero/>
           <Believe/>
           <Three/>
           <SubComponent/>
        </div>
    )
}

export default Home
