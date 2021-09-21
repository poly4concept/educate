import React from 'react'
import CourseItem from './CourseItem'
import BookOne from '../../assets/bookone.png'
import BookTwo from '../../assets/booktwo.png'
import BookThree from '../../assets/bookthree.png'

const Courses = () => {
    return (
        <div style={{marginTop: '60px'}} >
            <CourseItem img={BookOne} />
            <CourseItem img={BookOne} />
            <CourseItem img={BookTwo} />
            <CourseItem img={BookTwo} />
            <CourseItem img={BookThree} />
            <CourseItem img={BookThree}/>
        </div>
    )
}

export default Courses
