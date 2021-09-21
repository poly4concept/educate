import React from 'react'
import PostThree from '../../assets/postthree.png'

const CourseItem = ({img}) => {
    return (
        <div className='course-container'>
            <div className='course-card'>
                    <div className='image'>
                        <img src={img} alt="course icon" />
                        <div className="image-body">
                            <p>Stoichiometry Method</p>
                        </div>
                    </div>
                    <div className="course-details">
                        <h5>Stoichiometry</h5>
                        <h6>Visha Agrawal</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <button >Read</button>
                </div>
            </div>
        </div>
    )
}

export default CourseItem
