import React, {useState, useEffect} from 'react'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import testimonials from '../constants/Testimonials'


const Testimonials = () => {
    const [people] = useState(testimonials);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const lastIndex = people.length - 1;
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0);
        }
    }, [index, people]);

    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index + 1);
        }, 10000);
        return()=>{
            clearInterval(slider);
        }
    },[index])

    return (
        <div className="testimonials">
            <section className="testimonial-section">
                <div className="title-top">
                    <h3>WHAT PEOPLE SAY ABOUT CMO</h3>
                    <h2>OUR SUCCESS STORIES</h2>
                </div>

                <div className="testimonial-center">
                    {people.map((person, personIndex)=>{
                        const {id, image, name, quote} = person

                        let position = 'nextSlide';

                        if(personIndex === index){
                            position = 'activeSlide';
                        }

                        return(
                            <article className={position} key={id} >
                                <div className="article-image">
                                    <img src={image} alt="slider" className="person-img"/>
                                </div>

                               <div className="article-text">
                                    <div className="text">
                                        <h4 className="center-name">{name}</h4>
                                        {/* <p className="title">{title}</p> */}
                                        <p className="text">{quote}</p>
                                    </div>
                               </div>
                            </article>
                        )
                    })}
                   
                    <div className="article-btn">
                        <div className="prev" onClick={()=> setIndex(index - 1)}>
                            <FaArrowLeft/>
                        </div>

                        <div className="next" onClick={()=> setIndex(index + 1)}>
                            <FaArrowRight/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials