import React from 'react'
import QuestionOne from '../../assets/questionone.png'
import QuestionTwo from '../../assets/questiontwo.png'
import QuestionThree from '../../assets/questionthree.png'

const QuestionPreview = () => {
    return (
        <div>
            <div className='questionpreview'>
            <div className="question-header">
                <h3>Recently uploaded questions</h3>
                <p>see more</p>
            </div>
                <div className="question-container">
                    <div style={{marginBottom: '30px'}}>
                <div className="question-card">
                    <div style={{marginRight: '20px'}}>
                        <img src={QuestionOne} alt='question'/>
                        <div className="question-body">
                        <p className="question-info">
                            30 chapters
                        </p>
                        <p className="question-info">
                            100  views
                        </p>
                        </div>
                    </div>
                        </div>
                    </div>
                 <div style={{marginBottom: '30px'}}>
                <div className="question-card">
                    <div style={{marginRight: '20px'}}>
                        <img src={QuestionTwo} alt='question'/>
                        <div className="question-body">
                            <p className="question-info">
                            30 chapters
                        </p>
                        <p className="question-info">
                            100  views
                        </p>
                        </div>
                    </div>
                        </div>
                    </div>
                    <div style={{marginBottom: '30px'}}>
                <div className="question-card">
                    <div style={{marginRight: '20px'}}>
                    <img src={QuestionThree} alt='question'/>
                    <div className="question-body">
                        <p className="question-info">
                            30 chapters
                        </p>
                        <p className="question-info">
                            100  views
                        </p>
                        </div>
                    </div>
                        </div>
                        </div>
            </div>
        </div>  
        </div>
    )
}

export default QuestionPreview
