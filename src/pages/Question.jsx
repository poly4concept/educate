import React from 'react'
import QandA from '../components/Questions and answers/QandA';
import Search from '../components/Questions and answers/Search';
import Post from '../components/Questions and answers/Post'
import AskQuestion from '../components/landingpage/AskQuestion';
import heroImg from '../assets/hero.png'
const Question = () => {
    return (
        <div >
            <img src={heroImg} style={{ visibility: 'hidden', marginBottom: '-600px'} } alt='' />
            <QandA text={'Question and Answers'} />
            <Search />
            <Post />
            <AskQuestion h3={'Something you are trying to find solution to?'} p={'Ask right away'} />
        </div>
    )
}

export default Question;
