import React from 'react'

const AskQuestion = ({h3, p}) => {
    return (
        <div className='askquestion'>
            <h3>{h3}</h3>
            <p>{p}</p>
            <button>Ask Questions</button>
        </div>
    )
}

export default AskQuestion
