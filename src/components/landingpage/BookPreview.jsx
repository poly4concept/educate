import React from 'react'
import BookOne from '../../assets/bookone.png'
import BookTwo from '../../assets/booktwo.png'
import BookThree from '../../assets/bookthree.png'
const BookPreview = () => {
    return (
        <div className='bookpreview'>
            <div className="book-header">
                <h3>Recently uploaded books</h3>
                <p>see more</p>
            </div>
            
            <div className="book-container">
                <div className="book-card">
                    <div className='innerContainer'>
                        <img src={BookOne} alt='book'/>
                        <div className="book-body">
                        <p className="book-info">
                            30 chapters
                        </p>
                        <p className="book-info">
                            100  views
                        </p>
                        </div>
                    </div>
                </div>
                <div className="book-card">
                    <div style={{marginRight: '20px'}}>
                        <img src={BookTwo} alt='book'/>
                        <div className="book-body">
                            <p className="book-info">
                            30 chapters
                        </p>
                        <p className="book-info">
                            100  views
                        </p>
                        </div>
                    </div>
                </div>
                <div className="book-card">
                    <div style={{marginRight: '20px'}}>
                    <img src={BookThree} alt='book'/>
                    <div className="book-body">
                        <p className="book-info">
                            30 chapters
                        </p>
                        <p className="book-info">
                            100  views
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookPreview
