import React from 'react'

// PACKAGES


// COMPONENTS
import Services from '../constants/Three'


// IMAGES
const threeImage = `https://res.cloudinary.com/devsource/image/upload/v1624217350/cmo/hero_watcoi.png`


const Three = () => {
    return (
        <div className="three">
           <div className="three-left">
               <div className="three-left-center">
                   <img src={threeImage} alt="threeImage"/>
               </div>
           </div>

           <div className="three-right">
               <div className="three-right-heading">
                    <p>OUR ACHIEVEMENTS</p>
                    <h2>You can help lots of people by donating little</h2>
               </div>

               <div className="three-right-center">
                   {Services.map(service => {
                       const { title, icon, text} = service
                       return(
                        <div className="three-card">
                            {icon}
                            <h3>{title}</h3>
                            <span>{text}</span>
                        </div>
                       )
                   })}
               </div>
           </div>
        </div>
    )
}

export default Three