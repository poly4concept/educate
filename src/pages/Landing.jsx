import React from 'react'
import '../index.css'
// COMPONENTS
import Hero from '../components/landingpage/Hero'
import Resource from '../components/landingpage/Resource'
import HowItWorks from '../components/landingpage/HowItWorks'
import BookPreview from '../components/landingpage/BookPreview'
import QuestionPreview from '../components/landingpage/QuestionPreview'
import AskQuestion from '../components/landingpage/AskQuestion'
import Testimonials from '../components/landingpage/Testimonials'

const Landing = () => {
    return (
        <div className="Landing">
            <Hero />
            <Resource />
            <HowItWorks />
            <BookPreview />
            <QuestionPreview />
            <AskQuestion h3={'Get Solutions to your Assignment'} p={'Ask and answer a few question to aid your learning'} />
            <Testimonials/>
        </div>
    )
}

export default Landing
