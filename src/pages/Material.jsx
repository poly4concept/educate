import React from 'react'
import Courses from '../components/materialspage/Courses'
import QandA from '../components/Questions and answers/QandA'
import Search from '../components/Questions and answers/Search'
import heroImg from '../assets/hero.png'
const Material = () => {
    return (
        <div>
            <img src={heroImg} style={{ visibility: 'hidden', marginBottom: '-600px'} } alt='' />
            <QandA text={'Your Study Resources'} />
            <Search />
            <Courses/>
        </div>
    )
}

export default Material
