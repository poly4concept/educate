import React from 'react'

// PACKEGES
import { FaArrowRight } from 'react-icons/fa';

// COMPONENTS
import services from '../constants/Help'

const Help = () => {
    return (
        <>
            <section className="help">
                <div className="help-heading">
                    <p className="small">Help the People</p>
                    <h3>Our Popular Causes</h3>
                </div>
                <div className="underlines"></div>
                <div className="help-center">
                    {services.map((service) => {
                        const { id, icon, title, text, location, amount } = service;
                        console.log(service)
                        return (
                            <div key={id} className="helping">
                                <div className="helping-image">
                                    {icon}
                                </div>

                                <div className="helping-text">
                                    <h2>{title}</h2>
                                    <h4>{location}</h4>
                                    <div className="under"></div>
                                    <p>{text}</p>
                                    <div className="range"></div>
                                    <span>{amount}</span>
                                </div>

                                <div className="click">
                                    <FaArrowRight className="click-icon" />
                                </div>
                            </div>
                        )
                    })}
                </div>

               
            </section>
        </>
    )
}

export default Help