import React from 'react'

// PACKAGES


// COMPONENTS
import Services from '../constants/Believe';


const Believe = () => {
    return (
        <div className="believe">
            <h2>We Believe that we can save more lifes with you</h2>
            <div className="believe-center">
                {Services.map((service) => {
                        const { id, icon, title, text } = service;
                        return (
                            <article key={id} className="believe-div">
                                <div className="icon-box">
                                    {icon}
                                </div>
                                <div className="text-box">
                                    <h4>{title}</h4>
                                    <p>{text}</p>
                                </div>
                            </article>
                        )
                    })}
            </div>
        </div>
    )
}

export default Believe
