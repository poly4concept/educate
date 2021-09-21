import React from 'react'
import PostOne from '../../assets/postone.png';
import PostTwo from '../../assets/posttwo.png';
import PostThree from '../../assets/postthree.png'
const Post = () => {
    return (
        <div className='post'>
            <div className="post-container">
                <h3>What's New</h3>
                <div className='post-card'>
                    <div className='image'><img src={PostOne}alt="post icon" /></div>
                    <div className="post-details">
                        <h5>Alearners laauching with a full blast</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <div className='time-tag'>
                            <p className='read-time'>5 mins read</p>
                            <p className='read-date'>24 Jun</p>
                        </div>
                        <a href="#more">Continue reading</a>
                    </div>
                </div>
                <div className='post-card'>
                    <div className='image'><img src={PostTwo
                    } alt="post icon" /></div>
                    <div className="post-details">
                        <h5>Alearners laauching with a full blast</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <div className='time-tag'>
                            <p className='read-time'>5 mins read</p>
                            <p className='read-date'>24 Jun</p>
                        </div>
                        <a href="#more">Continue reading</a>
                    </div>
                </div>
            </div>

            <div className="post-container">
                <h3>Trending Answer</h3>
                <div className='post-card'>
                    <div className='image'><img src={PostThree}alt="post icon" /></div>
                    <div className="post-details">
                        <h5>Alearners laauching with a full blast</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <div className='time-tag'>
                            <p className='read-time'>5 mins read</p>
                            <p className='read-date'>24 Jun</p>
                        </div>
                        <a href="#more">Continue reading</a>
                    </div>
                </div>
                <div className='post-card'>
                    <div className='image'><img src={PostTwo
                    } alt="post icon" /></div>
                    <div className="post-details">
                        <h5>Alearners laauching with a full blast</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <div className='time-tag'>
                            <p className='read-time'>5 mins read</p>
                            <p className='read-date'>24 Jun</p>
                        </div>
                        <a href="#more">Continue reading</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
